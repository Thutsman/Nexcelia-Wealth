import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  organisation: z.string().optional(),
  email: z.string().email(),
  enquiryType: z.string().min(1),
  message: z.string().min(10),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = contactSchema.parse(body)

    const { firstName, lastName, organisation, email, enquiryType, message } = data

    // Send notification to office
    await resend.emails.send({
      from: 'Nexcelia Website <noreply@nexceliawealth.com>',
      to: ['office@nexceliawealth.com'],
      replyTo: email,
      subject: `New Private Enquiry — ${enquiryType}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: Georgia, serif; background: #070B12; color: #F0EAE0; padding: 40px; max-width: 600px; margin: 0 auto;">
          <div style="border-bottom: 1px solid rgba(184,150,90,0.3); padding-bottom: 24px; margin-bottom: 24px;">
            <h1 style="font-size: 1.5rem; color: #B8965A; font-weight: 300; margin: 0;">New Enquiry — Nexcelia Website</h1>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: #BEB6A6; font-size: 0.85rem; width: 140px;">Name</td><td style="padding: 10px 0; font-size: 0.9rem;">${firstName} ${lastName}</td></tr>
            ${organisation ? `<tr><td style="padding: 10px 0; color: #BEB6A6; font-size: 0.85rem;">Organisation</td><td style="padding: 10px 0; font-size: 0.9rem;">${organisation}</td></tr>` : ''}
            <tr><td style="padding: 10px 0; color: #BEB6A6; font-size: 0.85rem;">Email</td><td style="padding: 10px 0; font-size: 0.9rem;"><a href="mailto:${email}" style="color: #B8965A;">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; color: #BEB6A6; font-size: 0.85rem;">Enquiry Type</td><td style="padding: 10px 0; font-size: 0.9rem;">${enquiryType}</td></tr>
          </table>
          <div style="border-top: 1px solid rgba(184,150,90,0.2); margin-top: 24px; padding-top: 20px;">
            <p style="color: #BEB6A6; font-size: 0.8rem; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
            <p style="font-size: 0.9rem; line-height: 1.8; color: #F0EAE0;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </body>
        </html>
      `,
    })

    // Send auto-reply to submitter
    await resend.emails.send({
      from: 'Nexcelia Wealth <noreply@nexceliawealth.com>',
      to: [email],
      subject: 'Your enquiry has been received — Nexcelia Wealth',
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: Georgia, serif; background: #070B12; color: #F0EAE0; padding: 40px; max-width: 600px; margin: 0 auto;">
          <div style="border-bottom: 1px solid rgba(184,150,90,0.3); padding-bottom: 24px; margin-bottom: 24px;">
            <p style="font-family: 'Courier New', monospace; font-size: 0.65rem; letter-spacing: 0.2em; color: #B8965A; text-transform: uppercase; margin-bottom: 12px;">NEXCELIA WEALTH — PRIVATE OFFICE</p>
            <h1 style="font-size: 1.75rem; color: #F0EAE0; font-weight: 300; margin: 0; line-height: 1.3;">Dear ${firstName},</h1>
          </div>
          <p style="font-size: 0.9rem; line-height: 1.9; color: #BEB6A6; margin-bottom: 16px;">
            Thank you for reaching out to Nexcelia Wealth. We have received your enquiry regarding
            <strong style="color: #F0EAE0;">${enquiryType}</strong> and can confirm it has been
            directed to the appropriate principal.
          </p>
          <p style="font-size: 0.9rem; line-height: 1.9; color: #BEB6A6; margin-bottom: 16px;">
            We treat all communications with the strictest confidence. A member of our team
            will respond to you personally within <strong style="color: #F0EAE0;">three business days</strong>.
          </p>
          <p style="font-size: 0.9rem; line-height: 1.9; color: #BEB6A6; margin-bottom: 24px;">
            Should your matter be urgent, you are welcome to write directly to
            <a href="mailto:office@nexceliawealth.com" style="color: #B8965A;">office@nexceliawealth.com</a>.
          </p>
          <div style="border-top: 1px solid rgba(184,150,90,0.2); padding-top: 20px; margin-top: 8px;">
            <p style="font-size: 0.85rem; color: #BEB6A6; margin: 0;">Yours sincerely,</p>
            <p style="font-size: 1rem; color: #F0EAE0; margin: 8px 0 4px; font-style: italic;">Nexcelia Wealth</p>
            <p style="font-size: 0.75rem; color: #BEB6A6; margin: 0; font-style: italic;">Private Wealth & Family Office</p>
          </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', details: error.issues }, { status: 400 })
    }
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
