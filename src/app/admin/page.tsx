import type { Metadata } from 'next'
import { AdminContentManager } from '@/components/admin/AdminContentManager'

export const metadata: Metadata = {
  title: 'Admin Content Console',
  description: 'Mock editorial interface for Blog and News content.',
}

export default function AdminPage() {
  return <AdminContentManager />
}
