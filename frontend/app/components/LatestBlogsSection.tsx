import Image from 'next/image'

/** Local type until Sanity TypeGen includes `latestBlogsSection` on `Page.pageBuilder`. */
type LatestBlogsSectionBlock = {
  _type: 'latestBlogsSection'
  _key?: string
  heading?: string
  subheading?: string
  description?: string
  blogs?: Array<{
    name?: string
    blogTeaser?: string
    blogCardImage?: unknown
  }>
}

type LatestBlogsSectionProps = {
  block: LatestBlogsSectionBlock
  index: number
}

export default function LatestBlogsSection({block}: LatestBlogsSectionProps) {
  return (
    <section>
        <div className="latest-blogs-section container mb-12 md:mb-24">
            <h2 className="alan-sans-800 text-3xl md:text-5xl">Latest blogs</h2>
            <p className="alan-sans-400 text-gray-500">Here are some of my latest blogs, check it out and let me know what you think.</p>

            <div className="blogs-wrapper mt-6 flex gap-2 md:gap-4 overflow-x-auto -mx-[0.5rem] sm:mx-0 px-[0.5rem] sm:px-0">
                <div className="blog-card-wrapper max-w-[400px] min-w-full sm:min-w-[400px] p-3 bg-white border border-gray-300 rounded-3xl">
                    <div className="relative overflow-hidden rounded-2xl">
                        <Image
                          className="rounded-2xl hover:scale-105 transition-all delay-150 ease-linear overflow-hidden h-[250px] w-full object-cover"
                          src="https://i.pinimg.com/236x/bc/99/1d/bc991da9dbed06a43ed49eb735100778.jpg"
                          alt=""
                          width={236}
                          height={236}
                          sizes="(max-width: 640px) 100vw, 400px"
                        />
                        <div className="category-chips absolute bottom-2 left-2 flex gap-2">
                            <div className="alan-sans-400 text-gray-900 text-sm bg-white rounded-lg h-6 flex items-center justify-center px-2">UI/UX</div>
                            <div className="alan-sans-400 text-gray-900 text-sm bg-white rounded-lg h-6 flex items-center justify-center px-2">Development</div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="alan-sans-600 leading-[1.25] text-lg md:text-xl mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, ea.</h3>
                        <div className="flex gap-2">
                            <p className="alan-sans-400 text-gray-500 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-900 text-white aspect-square">
                                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="blog-card-wrapper max-w-[400px] min-w-full sm:min-w-[400px] p-3 bg-white border border-gray-300 rounded-3xl">
                    <div className="relative overflow-hidden rounded-2xl">
                        <Image
                          className="rounded-2xl hover:scale-105 transition-all delay-150 ease-linear overflow-hidden h-[250px] w-full object-cover"
                          src="https://i.pinimg.com/236x/bc/99/1d/bc991da9dbed06a43ed49eb735100778.jpg"
                          alt=""
                          width={236}
                          height={236}
                          sizes="(max-width: 640px) 100vw, 400px"
                        />
                        <div className="category-chips absolute bottom-2 left-2 flex gap-2">
                            <div className="alan-sans-400 text-gray-900 text-sm bg-white rounded-lg h-6 flex items-center justify-center px-2">UI/UX</div>
                            <div className="alan-sans-400 text-gray-900 text-sm bg-white rounded-lg h-6 flex items-center justify-center px-2">Development</div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="alan-sans-600 leading-[1.25] text-lg md:text-xl mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, ea.</h3>
                        <div className="flex gap-2">
                            <p className="alan-sans-400 text-gray-500 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-900 text-white aspect-square">
                                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="blog-card-wrapper max-w-[400px] min-w-full sm:min-w-[400px] p-3 bg-white border border-gray-300 rounded-3xl">
                    <div className="relative overflow-hidden rounded-2xl">
                        <Image
                          className="rounded-2xl hover:scale-105 transition-all delay-150 ease-linear overflow-hidden h-[250px] w-full object-cover"
                          src="https://i.pinimg.com/236x/bc/99/1d/bc991da9dbed06a43ed49eb735100778.jpg"
                          alt=""
                          width={236}
                          height={236}
                          sizes="(max-width: 640px) 100vw, 400px"
                        />
                        <div className="category-chips absolute bottom-2 left-2 flex gap-2">
                            <div className="alan-sans-400 text-gray-900 text-sm bg-white rounded-lg h-6 flex items-center justify-center px-2">UI/UX</div>
                            <div className="alan-sans-400 text-gray-900 text-sm bg-white rounded-lg h-6 flex items-center justify-center px-2">Development</div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="alan-sans-600 leading-[1.25] text-lg md:text-xl mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, ea.</h3>
                        <div className="flex gap-2">
                            <p className="alan-sans-400 text-gray-500 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-900 text-white aspect-square">
                                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="blog-card-wrapper max-w-[400px] min-w-full sm:min-w-[400px] p-3 bg-white border border-gray-300 rounded-3xl">
                    <div className="relative overflow-hidden rounded-2xl">
                        <Image
                          className="rounded-2xl hover:scale-105 transition-all delay-150 ease-linear overflow-hidden h-[250px] w-full object-cover"
                          src="https://i.pinimg.com/236x/bc/99/1d/bc991da9dbed06a43ed49eb735100778.jpg"
                          alt=""
                          width={236}
                          height={236}
                          sizes="(max-width: 640px) 100vw, 400px"
                        />
                        <div className="category-chips absolute bottom-2 left-2 flex gap-2">
                            <div className="alan-sans-400 text-gray-900 text-sm bg-white rounded-lg h-6 flex items-center justify-center px-2">UI/UX</div>
                            <div className="alan-sans-400 text-gray-900 text-sm bg-white rounded-lg h-6 flex items-center justify-center px-2">Development</div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="alan-sans-600 leading-[1.25] text-lg md:text-xl mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, ea.</h3>
                        <div className="flex gap-2">
                            <p className="alan-sans-400 text-gray-500 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            <a href="/blog-view.html" className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-900 text-white aspect-square">
                                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}