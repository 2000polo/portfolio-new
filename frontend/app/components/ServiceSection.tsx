/** Local type until Sanity TypeGen includes `servicesSection` on `Page.pageBuilder`. */
type ServicesSectionBlock = {
  _type: 'servicesSection'
  _key?: string
  heading?: string
  subheading?: string
  description?: string
  cta?: number
  services?: Array<{
    name?: string
    description?: string
    icon?: unknown
  }>
}

type ServicesSectionProps = {
  block: ServicesSectionBlock
  index: number
}

export default function ServicesSection({block}: ServicesSectionProps) {
  return (
    // Services Section
    <section className="">
        <div className="services-wrapper container mb-12 md:mb-24">
            <h2 className="alan-sans-800 text-3xl md:text-5xl">What I can Help You With</h2>
            <p className="alan-sans-400 text-gray-500">Here are some of the services I offer, check it out and let me know what you think.</p>

            <div className="service-wrapper grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 mt-6">
                <div className="service-description col-span-2 relative">
                    <p className="alan-sans-400 text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iure sapiente doloremque fugit vero nihil, dolores necessitatibus. Molestias culpa rerum repudiandae. Eos vero iusto dolorem nisi odit laborum eligendi esse ipsum? Earum, natus? Corrupti, architecto! Porro quam officia laudantium perspiciatis laboriosam dolorum quasi a quisquam.</p>
                    <a href="#" className="alan-sans-500 md:alan-sans-700 text-gray-800 block md:absolute bottom-0 left-0 underline mt-6 md:mt-0"><i className="fa fa-phone pr-2 " aria-hidden="true"></i>Come let&apos;s have a conversation!</a>
                </div>
                <div className="service-cards col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mt-6 md:mt-0">
                    <div className="service-card col-span-1 flex gap-3">
                        <i className=" h-full md:h-12 flex items-center justify-center aspect-square fa fa-paint-brush p-4 bg-gray-200 rounded-md mb-3" aria-hidden="true"></i>
                        <div className="">
                            <h3 className="alan-sans-800 leading-[1] md:-mt-1 text-lg md:text-xl">UI/UX Design</h3>
                            <p className="alan-sans-400 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>
                    </div>
                    <div className="service-card col-span-1 flex gap-3">
                        <i className=" h-full md:h-12 flex items-center justify-center aspect-square fa fa-window-maximize p-4 bg-gray-200 rounded-md mb-3" aria-hidden="true"></i>
                        <div className="">
                            <h3 className="alan-sans-800 leading-[1] md:-mt-1 text-lg md:text-xl">Web Development</h3>
                            <p className="alan-sans-400 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>
                    </div>
                    <div className="service-card col-span-1 flex gap-3">
                        <i className=" h-full md:h-12 flex items-center justify-center aspect-square fa fa-camera p-4 bg-gray-200 rounded-md mb-3" aria-hidden="true"></i>
                        <div className="">
                            <h3 className="alan-sans-800 leading-[1] md:-mt-1 text-lg md:text-xl">Product Photography</h3>
                            <p className="alan-sans-400 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>
                    </div>
                    <div className="service-card col-span-1 flex gap-3">
                        <i className=" h-full md:h-12 flex items-center justify-center aspect-square fa fa-desktop p-4 bg-gray-200 rounded-md mb-3" aria-hidden="true"></i>
                        <div className="">
                            <h3 className="alan-sans-800 leading-[1] md:-mt-1 text-lg md:text-xl">Logo Design</h3>
                            <p className="alan-sans-400 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}