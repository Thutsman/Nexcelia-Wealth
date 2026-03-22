import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'
import type { SanityImage } from '@/types'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImage) {
  return builder.image(source)
}

export function urlForImage(source: SanityImage, width?: number, height?: number): string {
  let imageBuilder = builder.image(source).auto('format').fit('max')
  if (width) imageBuilder = imageBuilder.width(width)
  if (height) imageBuilder = imageBuilder.height(height)
  return imageBuilder.url()
}
