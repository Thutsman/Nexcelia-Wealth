'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { Button } from '@/components/ui/Button'

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  organisation: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  enquiryType: z.string().min(1, 'Please select an enquiry type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-transparent border-b border-[var(--border)] focus:border-[var(--gold)] outline-none py-3 text-ivory placeholder-[var(--text-muted)] text-[17px] leading-[1.7] font-body transition-colors duration-200'

  const labelClass = 'label-text text-[0.58rem] block mb-2 text-ivory-dim'

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: 'var(--navy-mid)' }}
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div>
            <RevealWrapper delay={0.1}>
              <SectionLabel className="mb-5 inline-flex items-center gap-3">
                <span className="gold-rule" />
                Private Enquiry
              </SectionLabel>
            </RevealWrapper>
            <RevealWrapper delay={0.2}>
              <h2 className="text-heading text-ivory heading-gap">
                Begin a <em className="text-gold">conversation</em>
              </h2>
            </RevealWrapper>
            <RevealWrapper delay={0.3}>
              <p className="text-body section-gap max-w-sm">
                All enquiries are treated with the strictest confidence. Our principals
                personally review each request and will respond within three business days.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={0.4}>
              <div className="flex flex-col gap-6">
                {[
                  { label: 'Principal Office', value: 'Bulawayo, Zimbabwe' },
                  { label: 'European Office', value: 'The Hague, Netherlands' },
                  { label: 'Email', value: 'office@nexceliawealth.com', isEmail: true },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <GoldDivider className="mb-3" />
                    <p className="label-text text-[0.58rem] text-ivory-dim">{item.label}</p>
                    {item.isEmail ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="text-gold hover:text-gold-lt text-[17px] font-body transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-ivory text-[17px] leading-[1.7] font-body">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>

          {/* Right — form */}
          <RevealWrapper delay={0.3} direction="left">
            <div
              className="card-base p-8 lg:p-10"
              style={{ background: 'var(--navy-light)', border: '1px solid var(--border)' }}
            >
              {status === 'success' ? (
                <div className="flex flex-col gap-4 items-start py-8">
                  <div className="text-gold text-3xl font-display italic">Thank you.</div>
                  <p className="text-body">
                    Your enquiry has been received. A principal will be in touch within three
                    business days. A confirmation has been sent to your email address.
                  </p>
                  <p className="text-ivory-dim text-xs font-body mt-2 italic">
                    — Nexcelia Wealth, Private Office
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>First Name *</label>
                      <input {...register('firstName')} placeholder="Tendai" className={inputClass} />
                      {errors.firstName && (
                        <p className="text-red-400 text-xs mt-1 font-body">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className={labelClass}>Last Name *</label>
                      <input {...register('lastName')} placeholder="Ncube" className={inputClass} />
                      {errors.lastName && (
                        <p className="text-red-400 text-xs mt-1 font-body">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Organisation</label>
                    <input {...register('organisation')} placeholder="Family Office / Company" className={inputClass} />
                  </div>

                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input {...register('email')} type="email" placeholder="you@example.com" className={inputClass} />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 font-body">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>Nature of Enquiry *</label>
                    <select
                      {...register('enquiryType')}
                      className={`${inputClass} cursor-pointer`}
                      style={{ background: 'var(--navy-light)' }}
                    >
                      <option value="">Please select...</option>
                      <option value="Wealth Advisory">Wealth Advisory</option>
                      <option value="Investment Opportunity">Investment Opportunity</option>
                      <option value="Family Office Services">Family Office Services</option>
                      <option value="Conservation Investment">Conservation Investment</option>
                      <option value="Partnership">Partnership / Collaboration</option>
                      <option value="General">General Enquiry</option>
                    </select>
                    {errors.enquiryType && (
                      <p className="text-red-400 text-xs mt-1 font-body">{errors.enquiryType.message}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>Message *</label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Please describe the nature of your enquiry..."
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1 font-body">{errors.message.message}</p>
                    )}
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-xs font-body">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={status === 'loading'}
                    className="self-start mt-2"
                  >
                    {status === 'loading' ? 'Sending...' : 'Submit Enquiry →'}
                  </Button>
                </form>
              )}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
