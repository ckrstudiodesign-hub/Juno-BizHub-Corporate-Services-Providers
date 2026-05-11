type Web3FormsSubmitOptions = {
  accessKey: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  extra?: Record<string, unknown>;
};

type Web3FormsSuccessResponse = {
  success: true;
  message?: string;
  data?: unknown;
};

type Web3FormsErrorResponse = {
  success: false;
  message?: string;
  errors?: unknown;
};

export async function submitToWeb3Forms(
  options: Web3FormsSubmitOptions
): Promise<Web3FormsSuccessResponse> {
  const payload: Record<string, unknown> = {
    access_key: options.accessKey,
    subject: options.subject,
    from_name: options.name,
    name: options.name,
    email: options.email,
    message: options.message,
    ...(options.phone ? { phone: options.phone } : {}),
    ...(options.extra ?? {}),
  };

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  let data: Web3FormsSuccessResponse | Web3FormsErrorResponse | null = null;
  try {
    data = (await response.json()) as
      | Web3FormsSuccessResponse
      | Web3FormsErrorResponse;
  } catch {
    // ignore
  }

  if (!response.ok || !data || (data as Web3FormsErrorResponse).success === false) {
    const message =
      (data && 'message' in data && typeof data.message === 'string' && data.message) ||
      `Submission failed (${response.status})`;
    throw new Error(message);
  }

  return data as Web3FormsSuccessResponse;
}
