import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.CONTENT_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const slug: string | undefined = body?.slug
    const type: 'insight' | 'news' | undefined = body?.type

    revalidatePath('/insights')
    revalidatePath('/news')

    if (slug && type === 'insight') {
      revalidatePath(`/insights/${slug}`)
    }
    if (slug && type === 'news') {
      revalidatePath(`/news/${slug}`)
    }

    return NextResponse.json({ revalidated: true, type: type ?? 'all', slug: slug ?? 'all' })
  } catch {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
