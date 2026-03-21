import {Suspense} from 'react'
import Link from 'next/link'
import type {Metadata} from 'next'

import PageBuilderPage from '@/app/components/PageBuilder'
import {AllPosts} from '@/app/components/Posts'
import {PageOnboarding} from '@/app/components/Onboarding'
import {getPageQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'
import {GetPageQueryResult} from '@/sanity.types'

export async function generateMetadata(): Promise<Metadata> {
  const {data: page} = await sanityFetch({
    query: getPageQuery,
    params: {slug: 'home'},
    stega: false,
  })

  return {
    title: page?.name || 'Home',
    description: page?.heading || 'Welcome to my portfolio',
  } satisfies Metadata
}

export default async function Page() {
  const {data: page} = await sanityFetch({
    query: getPageQuery,
    params: {slug: 'home'},
  })

  // If home page doesn't exist in Sanity, show onboarding
  if (!page?._id) {
    return (
      <div className="py-40">
        <PageOnboarding />
        <div className="container mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Create a page with slug &ldquo;home&rdquo; in Sanity Studio to customize this page.
          </p>
          <Link
            href="/home"
            className="inline-flex items-center rounded-full bg-black hover:bg-gray-800 px-6 py-3 text-white transition-colors"
          >
            Or visit /home if you&apos;ve already created it
          </Link>
        </div>
      </div>
    )
  }

  // Render the home page from Sanity
  return (
    <>
      <PageBuilderPage page={page as GetPageQueryResult} />
      {/* <div className="border-t border-gray-100 bg-gray-50">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div> */}
    </>
  )
}
