// Security utilities for input sanitization and validation
import DOMPurify from 'isomorphic-dompurify';
import validator from 'validator';

/**
 * Escape HTML special characters to prevent XSS
 */
export function escapeHtml(text: string): string {
  if (!text) return '';
  const map: {[key: string]: string} = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Sanitize user input to prevent XSS attacks
 */
export function sanitizeInput(text: string): string {
  if (!text) return '';
  // First escape HTML
  const escaped = escapeHtml(text.trim());
  // Then sanitize with DOMPurify
  return DOMPurify.sanitize(escaped, { ALLOWED_TAGS: [] });
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  return validator.isEmail(email);
}

/**
 * Validate phone number format (basic validation for UAE numbers)
 */
export function isValidPhone(phone: string): boolean {
  // Accept various formats: +971501234567, 0501234567, +1234567890, etc.
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Validate name (prevent special characters that might be used for injection)
 */
export function isValidName(name: string): boolean {
  // Allow letters, numbers, spaces, hyphens, apostrophes only
  const nameRegex = /^[a-zA-Z0-9\s\-']{2,100}$/;
  return nameRegex.test(name.trim());
}

/**
 * Validate message length
 */
export function isValidMessage(message: string, maxLength: number = 5000): boolean {
  return message.length > 0 && message.length <= maxLength;
}

/**
 * Sanitize all form data at once
 */
export function sanitizeFormData(data: any): {
  [key: string]: string;
} {
  const sanitized: {[key: string]: string} = {};

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value);
    }
  }

  return sanitized;
}

/**
 * Validate form data
 */
export function validateFormData(data: any): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Email validation (required)
  if (!data.email) {
    errors.push('Email is required');
  } else if (!isValidEmail(data.email)) {
    errors.push('Invalid email format');
  }

  // Name validation (required)
  if (!data.name && (!data.firstname || !data.lastname)) {
    errors.push('Name is required');
  }

  // Phone validation (required)
  if (!data.phone && !data.number) {
    errors.push('Phone number is required');
  } else {
    const phone = data.phone || data.number;
    if (!isValidPhone(phone)) {
      errors.push('Invalid phone number format');
    }
  }

  // Message validation (if provided)
  if (data.message && !isValidMessage(data.message)) {
    errors.push('Message exceeds maximum length');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
