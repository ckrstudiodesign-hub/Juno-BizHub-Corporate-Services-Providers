import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { sanitizeInput, validateFormData, escapeHtml } from '@/lib/security';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // ✅ SECURITY: Validate input data
    const validation = validateFormData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Invalid input data', issues: validation.errors },
        { status: 400 }
      );
    }

    // ✅ SECURITY: Sanitize all string inputs
    const sanitized = {
      formType: body.formType || 'inquiry',
      name: body.name ? sanitizeInput(body.name) : undefined,
      firstname: body.firstname ? sanitizeInput(body.firstname) : undefined,
      lastname: body.lastname ? sanitizeInput(body.lastname) : undefined,
      email: body.email.toLowerCase().trim(),
      phone: (body.phone || body.number || '').replace(/\D/g, ''),
      number: (body.number || '').replace(/\D/g, ''),
      service: body.service ? sanitizeInput(body.service) : undefined,
      message: body.message ? sanitizeInput(body.message) : undefined,
      activity: body.activity ? sanitizeInput(body.activity) : undefined,
      reason: body.reason ? sanitizeInput(body.reason) : undefined,
      shareholders: body.shareholders ? sanitizeInput(body.shareholders) : undefined,
      visas: body.visas ? sanitizeInput(body.visas) : undefined,
      office: body.office ? sanitizeInput(body.office) : undefined,
      timeline: body.timeline ? sanitizeInput(body.timeline) : undefined,
      jurisdiction: body.jurisdiction ? sanitizeInput(body.jurisdiction) : undefined,
      isUAE: body.isUAE ? sanitizeInput(body.isUAE) : undefined,
      dependants: body.dependants ? sanitizeInput(body.dependants) : undefined,
      nationality: body.nationality ? sanitizeInput(body.nationality) : undefined,
      serviceType: body.serviceType ? sanitizeInput(body.serviceType) : undefined,
    };

    // ✅ SECURITY: Prefer server-only env var, keep public fallback for compatibility
    const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.NEXT_PUBLIC_RECIPIENT_EMAIL || 'inquiry@goldenlegacy.ae';

    let emailContent = '';
    let subject = '';

    if (sanitized.formType === 'cost-calculator') {
      subject = 'New Cost Calculator Inquiry - Golden Legacy';
      emailContent = `
        <h2>New Cost Calculator Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(sanitized.firstname || '')} ${escapeHtml(sanitized.lastname || '')}</p>
        <p><strong>Email:</strong> ${escapeHtml(sanitized.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(sanitized.number)}</p>
        <hr />
        <h3>Calculation Details:</h3>
        <p><strong>Business Activity:</strong> ${sanitized.activity || 'N/A'}</p>
        <p><strong>Setup Reason:</strong> ${sanitized.reason || 'N/A'}</p>
        <p><strong>Shareholders:</strong> ${sanitized.shareholders || 'N/A'}</p>
        <p><strong>Residence Visas:</strong> ${sanitized.visas || 'N/A'}</p>
        <p><strong>Office Type:</strong> ${sanitized.office || 'N/A'}</p>
        <p><strong>Timeline:</strong> ${sanitized.timeline || 'N/A'}</p>
        <p><strong>Jurisdiction:</strong> ${sanitized.jurisdiction || 'N/A'}</p>
        <p><strong>UAE Resident:</strong> ${sanitized.isUAE || 'N/A'}</p>
        <p><strong>Dependants Visas:</strong> ${sanitized.dependants || 'N/A'}</p>
        <p><strong>Nationality:</strong> ${sanitized.nationality || 'N/A'}</p>
      `;
    } else if (sanitized.formType === 'lead-modal') {
      subject = 'New Lead - Golden Legacy Modal';
      emailContent = `
        <h2>New Lead Modal Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(sanitized.name || '')}</p>
        <p><strong>Email:</strong> ${escapeHtml(sanitized.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(sanitized.phone)}</p>
      `;
    } else if (sanitized.formType === 'service-contact') {
      subject = 'New Service Inquiry - Golden Legacy';
      emailContent = `
        <h2>New Service Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(sanitized.name || '')}</p>
        <p><strong>Email:</strong> ${escapeHtml(sanitized.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(sanitized.phone)}</p>
        <p><strong>Service:</strong> ${sanitized.service || 'N/A'}</p>
        <p><strong>Message:</strong> ${sanitized.message || 'N/A'}</p>
      `;
    } else if (sanitized.formType === 'contact-page') {
      subject = 'New Contact Page Inquiry - Golden Legacy';
      emailContent = `
        <h2>New Contact Page Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(sanitized.name || '')}</p>
        <p><strong>Email:</strong> ${escapeHtml(sanitized.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(sanitized.phone)}</p>
        <p><strong>Service Type:</strong> ${sanitized.serviceType || 'N/A'}</p>
        <p><strong>Message:</strong> ${sanitized.message || 'N/A'}</p>
      `;
    } else {
      subject = 'New Inquiry - Golden Legacy';
      emailContent = `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${escapeHtml(sanitized.name || sanitized.firstname || '')} ${escapeHtml(sanitized.lastname || '')}</p>
        <p><strong>Email:</strong> ${escapeHtml(sanitized.email)}</p>
      `;
    }

    // Send email directly to business owner via Gmail SMTP
    await sendEmailDirectly(sanitized, emailContent, subject, recipientEmail);

    return NextResponse.json(
      { success: true, message: 'Inquiry submitted successfully' },
      { status: 200 }
    );

  } catch (error: unknown) {
    // ✅ SECURITY: Log error but don't expose details to client
    console.error('[API Error]', error instanceof Error ? error.message : 'Unknown error');
    
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try again later.' },
      { status: 500 }
    );
  }
}

// ✅ SECURITY: Send email with sanitized data and environment variables
async function sendEmailDirectly(
  sanitized: any,
  emailContent: string,
  subject: string,
  recipientEmail: string
): Promise<boolean> {
  // ✅ SECURITY: Get credentials from environment
  const gmailPassword = process.env.GMAIL_PASSWORD;
  const gmailUser = process.env.GMAIL_USER;

  if (!gmailPassword || !gmailUser) {
    throw new Error('Email service not configured');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  });

  // ✅ SECURITY: Use sanitized data
  const name = sanitized.name || 
               `${sanitized.firstname || ''} ${sanitized.lastname || ''}`.trim() || 'N/A';
  const email = sanitized.email || 'N/A';
  const phone = sanitized.phone || sanitized.number || 'N/A';

  const mailOptions = {
    from: gmailUser,
    to: recipientEmail,
    subject: escapeHtml(subject),
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
          .header { background-color: #d4af37; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { background-color: white; padding: 30px; border-radius: 0 0 5px 5px; }
          .section { margin-bottom: 25px; }
          .section-title { background-color: #f0f0f0; padding: 10px 15px; font-size: 16px; font-weight: bold; color: #d4af37; border-left: 4px solid #d4af37; }
          .info-table { width: 100%; border-collapse: collapse; margin-top: 15px; }
          .info-table td { padding: 10px; border-bottom: 1px solid #f0f0f0; }
          .info-table td:first-child { font-weight: bold; color: #333; width: 150px; }
          .footer { background-color: #f0f0f0; padding: 15px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #ddd; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✨ Golden Legacy</h1>
            <p style="margin: 10px 0 0 0; font-size: 14px;">${escapeHtml(subject)}</p>
          </div>
          
          <div class="content">
            <div class="section">
              <div class="section-title">Inquiry Details</div>
              <table class="info-table">
                <tr>
                  <td>Name</td>
                  <td>${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>${escapeHtml(phone)}</td>
                </tr>
              </table>
            </div>

            ${emailContent ? `
            <div class="section">
              <div class="section-title">Additional Information</div>
              ${emailContent}
            </div>
            ` : ''}

            <div class="footer">
              <p>📧 This inquiry was submitted through Golden Legacy's website form.</p>
              <p>Timestamp: ${new Date().toISOString()}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`[Email Sent] ${sanitized.formType} - ${email}`);
    return true;
  } catch (error) {
    console.error('[Email Error]', error instanceof Error ? error.message : 'Unknown error');
    throw new Error('Failed to send email');
  }
}
