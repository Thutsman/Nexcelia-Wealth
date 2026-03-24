'use client'

import { useMemo, useState } from 'react'
import { MOCK_CONTENT } from '@/data/mockContent'
import type { ContentItem, ContentStatus, ContentType } from '@/types/content'

type EditorFormState = {
  id: string
  title: string
  slug: string
  excerpt: string
  coverImageUrl: string
  type: ContentType
  status: ContentStatus
  body: string
}

const defaultForm: EditorFormState = {
  id: '',
  title: '',
  slug: '',
  excerpt: '',
  coverImageUrl: '',
  type: 'insight',
  status: 'draft',
  body: '',
}

function toFormState(item: ContentItem): EditorFormState {
  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    coverImageUrl: item.coverImageUrl ?? '',
    type: item.type,
    status: item.status,
    body: item.body.join('\n\n'),
  }
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function AdminContentManager() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [items, setItems] = useState<ContentItem[]>(() =>
    MOCK_CONTENT.map((item) => ({ ...item, body: [...item.body] }))
  )
  const [typeFilter, setTypeFilter] = useState<'all' | ContentType>('all')
  const [statusFilter, setStatusFilter] = useState<'all' | ContentStatus>('all')
  const [form, setForm] = useState<EditorFormState>(defaultForm)

  const filteredItems = useMemo(() => {
    return items
      .filter((item) => (typeFilter === 'all' ? true : item.type === typeFilter))
      .filter((item) => (statusFilter === 'all' ? true : item.status === statusFilter))
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  }, [items, statusFilter, typeFilter])

  const formMode = form.id ? 'Edit item' : 'Create item'

  function handleMockLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (email.trim() && password.trim()) {
      setIsAuthenticated(true)
      setEmail('')
      setPassword('')
    }
  }

  function handleChange<K extends keyof EditorFormState>(key: K, value: EditorFormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function clearForm() {
    setForm(defaultForm)
  }

  function saveItem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const normalizedSlug = form.slug ? slugify(form.slug) : slugify(form.title)
    const bodyParagraphs = form.body
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)

    if (!normalizedSlug || !form.title.trim() || !form.excerpt.trim()) return

    if (form.id) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === form.id
            ? {
                ...item,
                title: form.title.trim(),
                slug: normalizedSlug,
                excerpt: form.excerpt.trim(),
                coverImageUrl: form.coverImageUrl.trim() || undefined,
                type: form.type,
                status: form.status,
                body: bodyParagraphs.length ? bodyParagraphs : item.body,
              }
            : item
        )
      )
    } else {
      const timestamp = Date.now()
      const newItem: ContentItem = {
        id: `mock-${timestamp}`,
        type: form.type,
        status: form.status,
        title: form.title.trim(),
        slug: normalizedSlug,
        excerpt: form.excerpt.trim(),
        coverImageUrl: form.coverImageUrl.trim() || undefined,
        publishedAt: new Date().toISOString(),
        body: bodyParagraphs.length ? bodyParagraphs : ['Draft body content.'],
      }
      setItems((prev) => [newItem, ...prev])
    }

    clearForm()
  }

  function beginEdit(item: ContentItem) {
    setForm(toFormState(item))
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id))
    if (form.id === id) clearForm()
  }

  function toggleStatus(item: ContentItem) {
    const nextStatus: ContentStatus = item.status === 'published' ? 'draft' : 'published'
    setItems((prev) => prev.map((entry) => (entry.id === item.id ? { ...entry, status: nextStatus } : entry)))
    if (form.id === item.id) handleChange('status', nextStatus)
  }

  if (!isAuthenticated) {
    return (
      <section className="min-h-screen pt-32 pb-16" style={{ background: 'var(--midnight)' }}>
        <div className="container-wide max-w-xl">
          <div className="card-base p-8 lg:p-10" style={{ background: 'var(--navy-mid)' }}>
            <p className="label-text mb-4">Mock Admin Access</p>
            <h1 className="text-heading heading-gap">Editorial Console</h1>
            <p className="text-body mb-8">
              This is a UI-only admin preview. Any non-empty credentials will unlock the interface.
            </p>

            <form className="flex flex-col gap-5" onSubmit={handleMockLogin}>
              <div>
                <label className="label-text block mb-2 text-ivory-dim">Email</label>
                <input
                  className="w-full bg-transparent border border-[var(--border)] px-4 py-3 text-ivory"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@nexceliawealth.com"
                />
              </div>
              <div>
                <label className="label-text block mb-2 text-ivory-dim">Password</label>
                <input
                  type="password"
                  className="w-full bg-transparent border border-[var(--border)] px-4 py-3 text-ivory"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 font-body text-xs font-medium tracking-[0.08em] uppercase text-midnight bg-gold hover:bg-gold-lt transition-colors duration-200"
              >
                Enter Admin
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen pt-28 pb-16" style={{ background: 'var(--midnight)' }}>
      <div className="container-wide grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 card-base p-7 lg:p-8" style={{ background: 'var(--navy-mid)' }}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <p className="label-text mb-2">Content Library</p>
              <h2 className="font-display text-[36px] leading-[1.3] text-ivory">Blog + News</h2>
            </div>
            <button
              type="button"
              onClick={clearForm}
              className="inline-flex items-center px-4 py-2 text-xs font-body font-medium tracking-[0.08em] uppercase text-gold border border-[var(--border-bright)]"
            >
              New Item
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as 'all' | ContentType)}
              className="bg-transparent border border-[var(--border)] px-3 py-2 text-ivory-dim text-sm"
            >
              <option value="all">All Types</option>
              <option value="insight">Insights</option>
              <option value="news">News</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as 'all' | ContentStatus)}
              className="bg-transparent border border-[var(--border)] px-3 py-2 text-ivory-dim text-sm"
            >
              <option value="all">All Statuses</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          <div className="flex flex-col gap-3">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="card-base p-5"
                style={{ background: 'var(--navy-light)' }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="label-text mb-2 text-ivory-dim">
                      {item.type} · {item.status}
                    </p>
                    <h3 className="font-display text-[22px] leading-[1.4] text-ivory mb-2">{item.title}</h3>
                    <p className="text-body">{item.excerpt}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => beginEdit(item)}
                      className="px-3 py-1.5 text-xs font-body tracking-[0.08em] uppercase border border-[var(--border)] text-ivory-dim hover:text-ivory"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleStatus(item)}
                      className="px-3 py-1.5 text-xs font-body tracking-[0.08em] uppercase border border-[var(--border)] text-gold"
                    >
                      {item.status === 'published' ? 'Set Draft' : 'Publish'}
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="px-3 py-1.5 text-xs font-body tracking-[0.08em] uppercase border border-[var(--border)] text-[#d6a2a2]"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="card-base p-7 lg:p-8 h-fit" style={{ background: 'var(--navy-mid)' }}>
          <p className="label-text mb-2">{formMode}</p>
          <h2 className="font-display text-[22px] leading-[1.4] text-ivory mb-6">
            {form.id ? 'Update existing entry' : 'Create a new entry'}
          </h2>

          <form className="flex flex-col gap-4" onSubmit={saveItem}>
            <input
              className="bg-transparent border border-[var(--border)] px-3 py-2 text-ivory"
              placeholder="Title"
              value={form.title}
              onChange={(e) => handleChange('title', e.target.value)}
            />
            <input
              className="bg-transparent border border-[var(--border)] px-3 py-2 text-ivory"
              placeholder="Slug"
              value={form.slug}
              onChange={(e) => handleChange('slug', e.target.value)}
            />
            <textarea
              rows={3}
              className="bg-transparent border border-[var(--border)] px-3 py-2 text-ivory"
              placeholder="Excerpt"
              value={form.excerpt}
              onChange={(e) => handleChange('excerpt', e.target.value)}
            />
            <input
              className="bg-transparent border border-[var(--border)] px-3 py-2 text-ivory"
              placeholder="Header Image URL (https://...)"
              value={form.coverImageUrl}
              onChange={(e) => handleChange('coverImageUrl', e.target.value)}
            />
            <textarea
              rows={5}
              className="bg-transparent border border-[var(--border)] px-3 py-2 text-ivory"
              placeholder="Body paragraphs (one per line)"
              value={form.body}
              onChange={(e) => handleChange('body', e.target.value)}
            />
            <div className="grid grid-cols-2 gap-3">
              <select
                className="bg-transparent border border-[var(--border)] px-3 py-2 text-ivory"
                value={form.type}
                onChange={(e) => handleChange('type', e.target.value as ContentType)}
              >
                <option value="insight">Insight</option>
                <option value="news">News</option>
              </select>
              <select
                className="bg-transparent border border-[var(--border)] px-3 py-2 text-ivory"
                value={form.status}
                onChange={(e) => handleChange('status', e.target.value as ContentStatus)}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 font-body text-xs font-medium tracking-[0.08em] uppercase text-midnight bg-gold hover:bg-gold-lt transition-colors duration-200"
            >
              {form.id ? 'Update Entry' : 'Create Entry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
