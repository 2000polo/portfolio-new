'use client'

import {Suspense, useLayoutEffect, useRef} from 'react'
import {Image} from 'next-sanity/image'
import {getImageDimensions} from '@sanity/asset-utils'
import {stegaClean} from '@sanity/client/stega'

import ResolvedLink from '@/app/components/ResolvedLink'
import {Link} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'

import gsap from 'gsap'
import useSplitTextAnimation from '@/app/lib/hooks/useSplitTextAnimation'

type HeroType = {
  _type: 'hero'
  _key?: string
  mainImage?: any
  mainImageActionTitle?: string
  mainImageActionDescription?: string
  mainImageActionLink?: Link
  mainTitle?: string
  mainDescription?: string
  mainActionLink?: Link
  caseStudiesImage?: any
  caseStudiesTitle?: string
  caseStudiesLink?: Link
  blogsImage?: any
  blogsTitle?: string
  blogsLink?: Link
}

type HeroProps = {
  block: HeroType
  index: number
}

export default function Hero({block}: HeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  useSplitTextAnimation(titleRef)

  const heroImgRef = useRef<HTMLDivElement>(null)
  // Main Image
  const mainImageUrl = block.mainImage?.asset?._ref
    ? urlForImage(block.mainImage)?.url()
    : null
  const mainImageDimensions = block.mainImage?.asset?._ref
    ? getImageDimensions(block.mainImage)
    : null

  // Case Studies Image
  const caseStudiesImageUrl = block.caseStudiesImage?.asset?._ref
    ? urlForImage(block.caseStudiesImage)?.url()
    : null
  const caseStudiesImageDimensions = block.caseStudiesImage?.asset?._ref
    ? getImageDimensions(block.caseStudiesImage)
    : null

  // Blogs Image
  const blogsImageUrl = block.blogsImage?.asset?._ref
    ? urlForImage(block.blogsImage)?.url()
    : null
  const blogsImageDimensions = block.blogsImage?.asset?._ref
    ? getImageDimensions(block.blogsImage)
    : null

  // Parse main title (can be multi-line)
  const mainTitleLines = block.mainTitle
    ? stegaClean(block.mainTitle).split('\n').filter((line: string) => line.trim())
    : []

  useLayoutEffect(() => {
    if (!heroImgRef.current) return

    // Set initial states before first paint to prevent flash/jerk
    gsap.set('.hero-main-image', { opacity: 0,})
    gsap.set('.hero-main-content', { opacity: 0})
    gsap.set('.hero-case-studies', { opacity: 0})
    gsap.set('.hero-blogs', { opacity: 0})

    const tl = gsap.timeline({defaults: {ease: 'power2.inOut', duration: 1}})

    tl.to('.hero-main-image', { opacity: 1}, 0.3)
    tl.to('.hero-main-content', { opacity: 1}, 0.5)
    tl.to('.hero-case-studies', { opacity: 1}, 0.7)
    tl.to('.hero-blogs', { opacity: 1}, 0.9)
  }, [])

  return (
    <section>
      <div className="hero-section-wrapper container mb-12 md:mb-24 ">
          <div className="w-full grid grid-cols-12 gap-2 sm:gap-4 grid-rows-6 sm:grid-rows-4 lg:grid-rows-2 h-[90vh] md:min-h-[80vh]">
                {/* Main Image Section */}
                <div ref={heroImgRef} className="hero-img hero-main-image grid-item col-span-12 sm:col-span-6 row-start-1 row-span-2 sm:row-span-4 lg:row-span-2 col-start-1 lg:col-start-1 rounded-2xl overflow-hidden relative">
                    {mainImageUrl && mainImageDimensions ? (
                        <Image
                            className="h-full w-full object-cover"
                            src={mainImageUrl}
                            alt={stegaClean(block.mainImage?.alt) || ''}
                            width={mainImageDimensions.width}
                            height={mainImageDimensions.height}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    ) : (
                        <div className="h-full w-full bg-gray-200" />
                    )}

                    {(block.mainImageActionTitle || block.mainImageActionDescription) && (
                        <div className="hero-img-action-btn absolute bottom-0 left-0 right-0 alan-sans-500 p-4">
                            <ResolvedLink link={block.mainImageActionLink} className="block">
                                <div className=" flex gap-4 p-2 items-center h-full w-full bg-white/10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-100/20 text-white">
                                    <div className=" h-full [&:before]:h-full w-fit! d-flex md:h-12 flex items-center justify-center aspect-square p-4 bg-gray-200/10 rounded-md" aria-hidden="true">
                                        <i className="fa fa-comments" aria-hidden="true"></i>
                                    </div>
                                    <div className="">
                                        {block.mainImageActionTitle && (
                                            <strong>{stegaClean(block.mainImageActionTitle)}</strong>
                                        )}
                                        {block.mainImageActionDescription && (
                                            <p className="text-sm alan-sans-400 text-gray-200 mt-1 line-clamp-1 sm:line-clamp-1 lg:line-clamp-none">
                                                {stegaClean(block.mainImageActionDescription)}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </ResolvedLink>
                        </div>
                    )}
                </div>

              {/* Main Content Section */}
              <div className="hero-main-content grid-item col-span-12 sm:col-span-6 row-span-2 lg:row-span-1 row-start-3 sm:row-start-1 sm:col-start-7 rounded-2xl overflow-hidden">
                  <div className="bg-black flex flex-col h-full w-full p-4 text-white  ">
                      {mainTitleLines.length > 0 && (
                          <div  className="content text-2xl sm:text-3xl lg:text-4xl xl:text-5xl alan-sans-800">
                              {mainTitleLines.map((line: string, index: number) => (
                                  <p key={index}>{line}</p>
                              ))}
                          </div>
                      )}
                      <div className="desc-with-action-btn mt-auto flex items-center justify-between gap-4">
                          {block.mainDescription && (
                              <p  className="alan-sans-400 text-sm text-gray-200 mt-4">
                                  {stegaClean(block.mainDescription)}
                              </p>
                          )}

                          {block.mainActionLink && (
                              <ResolvedLink 
                                  link={block.mainActionLink}
                                  className="action-btn w-12 h-12 aspect-square rounded-full bg-white text-black flex items-center justify-center"
                              >
                                  <i className="fa fa-arrow-up text-xl rotate-45" aria-hidden="true"></i>
                              </ResolvedLink>
                          )}
                      </div>
                  </div>
              </div>

              {/* Case Studies Section */}
              <div className="hero-case-studies grid-item col-span-6 row-start-5 row-span-2 sm:row-span-1 sm:col-span-6 lg:col-span-3 rounded-2xl overflow-hidden sm:col-start-7 lg:col-start-7 sm:row-start-3 lg:row-start-2 relative">
                  {block.caseStudiesLink ? (
                      <ResolvedLink link={block.caseStudiesLink} className="block h-full w-full">
                          {caseStudiesImageUrl && caseStudiesImageDimensions ? (
                              <Image
                                  className="h-full w-full object-cover"
                                  src={caseStudiesImageUrl}
                                  alt={stegaClean(block.caseStudiesImage?.alt) || ''}
                                  width={caseStudiesImageDimensions.width}
                                  height={caseStudiesImageDimensions.height}
                                  sizes="(max-width: 768px) 50vw, 25vw"
                              />
                          ) : (
                              <div className="h-full w-full bg-gray-300" />
                          )}
                          {block.caseStudiesTitle && (
                              <h3 className="absolute left-0 right-0 bottom-0 text-white text-2xl sm:text-3xl lg:text-4xl alan-sans-800 p-4 leading-none">
                                  {(() => {
                                      const title = stegaClean(block.caseStudiesTitle)
                                      const lines = title.split('\n')
                                      return lines.map((line: string, index: number) => (
                                          <span key={index}>
                                              {line}
                                              {index < lines.length - 1 && <br />}
                                          </span>
                                      ))
                                  })()}
                              </h3>
                          )}
                      </ResolvedLink>
                  ) : (
                      <>
                          {caseStudiesImageUrl && caseStudiesImageDimensions ? (
                              <Image
                                  className="h-full w-full object-cover"
                                  src={caseStudiesImageUrl}
                                  alt={stegaClean(block.caseStudiesImage?.alt) || ''}
                                  width={caseStudiesImageDimensions.width}
                                  height={caseStudiesImageDimensions.height}
                                  sizes="(max-width: 768px) 50vw, 25vw"
                              />
                          ) : (
                              <div className="h-full w-full bg-gray-300" />
                          )}
                          {block.caseStudiesTitle && (
                              <h3 className="absolute left-0 right-0 bottom-0 text-white text-2xl sm:text-3xl lg:text-4xl alan-sans-800 p-4 leading-none">
                                  {(() => {
                                      const title = stegaClean(block.caseStudiesTitle)
                                      const lines = title.split('\n')
                                      return lines.map((line: string, index: number) => (
                                          <span key={index}>
                                              {line}
                                              {index < lines.length - 1 && <br />}
                                          </span>
                                      ))
                                  })()}
                              </h3>
                          )}
                      </>
                  )}
              </div>

              {/* Blogs Section */}
              <div className="hero-blogs grid-item col-span-6 row-start-5 row-span-2 sm:row-span-1 sm:col-span-6 lg:col-span-3 rounded-2xl overflow-hidden sm:col-start-7 lg:col-start-10 sm:row-start-4 lg:row-start-2 relative">
                  {block.blogsLink ? (
                      <ResolvedLink link={block.blogsLink} className="block h-full w-full">
                          {blogsImageUrl && blogsImageDimensions ? (
                              <Image
                                  className="h-full w-full object-cover"
                                  src={blogsImageUrl}
                                  alt={stegaClean(block.blogsImage?.alt) || ''}
                                  width={blogsImageDimensions.width}
                                  height={blogsImageDimensions.height}
                                  sizes="(max-width: 768px) 50vw, 25vw"
                              />
                          ) : (
                              <div className="h-full w-full bg-gray-300" />
                          )}
                          {block.blogsTitle && (
                              <h3 className="absolute left-0 right-0 bottom-0 text-white text-2xl sm:text-3xl lg:text-4xl alan-sans-800 p-4 leading-none">
                                  {stegaClean(block.blogsTitle)}
                              </h3>
                          )}
                      </ResolvedLink>
                  ) : (
                      <>
                          {blogsImageUrl && blogsImageDimensions ? (
                              <Image
                                  className="h-full w-full object-cover"
                                  src={blogsImageUrl}
                                  alt={stegaClean(block.blogsImage?.alt) || ''}
                                  width={blogsImageDimensions.width}
                                  height={blogsImageDimensions.height}
                                  sizes="(max-width: 768px) 50vw, 25vw"
                              />
                          ) : (
                              <div className="h-full w-full bg-gray-300" />
                          )}
                          {block.blogsTitle && (
                              <h3 className="absolute left-0 right-0 bottom-0 text-white text-2xl sm:text-3xl lg:text-4xl alan-sans-800 p-4 leading-none">
                                  {stegaClean(block.blogsTitle)}
                              </h3>
                          )}
                      </>
                  )}
              </div>
          </div>
      </div>
    </section>
  )
}

