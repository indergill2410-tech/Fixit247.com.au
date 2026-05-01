import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const FROM = process.env.FROM_EMAIL || 'admin@fixit247.com.au';

export async function sendOtpEmail(to: string, otp: string) {
  if (!process.env.SENDGRID_API_KEY) return;
  await sgMail.send({ to, from: FROM, templateId: process.env.SENDGRID_OTP_TEMPLATE_ID!, dynamicTemplateData: { otp, app_url: process.env.APP_URL } });
}

export async function sendHomeownerWelcome(to: string, firstName: string) {
  if (!process.env.SENDGRID_API_KEY) return;
  await sgMail.send({ to, from: FROM, templateId: process.env.SENDGRID_CUSTOMER_WELCOME_TEMPLATE_ID!, dynamicTemplateData: { first_name: firstName, app_url: process.env.APP_URL } });
}

export async function sendTradieWelcome(to: string, firstName: string) {
  if (!process.env.SENDGRID_API_KEY) return;
  await sgMail.send({ to, from: FROM, templateId: process.env.SENDGRID_TRADIE_WELCOME_TEMPLATE_ID!, dynamicTemplateData: { first_name: firstName, app_url: process.env.APP_URL } });
}
