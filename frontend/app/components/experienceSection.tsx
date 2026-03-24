import Image from 'next/image'

/** Local type until Sanity TypeGen includes `experienceSection` on `Page.pageBuilder`. */
type ExperienceSectionBlock = {
  _type: 'experienceSection'
  _key?: string
  heading?: string
  subheading?: string
  description?: string
  expCards?: Array<{
    cardTitle?: string
    quantityRepresentation?: string
    description?: string
  }>
  organisations?: Array<{
    organisationLogo?: unknown
    websiteLink?: string
  }>
  technologies?: Array<{
    technologyName?: string
    techIcon?: unknown
  }>
}

type ExperienceSectionProps = {
  block: ExperienceSectionBlock
  index: number
}

export default function ExperienceSection({block}: ExperienceSectionProps){
    console.log("block", block)

    const { expCards, organisations, technologies, heading, subheading, description } = block



    return (
        <section className="bg-black text-white">
            <div className="experience-seciton-wrapper container mb-12 md:mb-24 py-12 md:py-24">
                <div className="grid grid-cols-2 gap-2 md:gap-4 min-h-[400px] h-full">
                    <div className="left-side col-span-2 lg:col-span-1 flex justify-between flex-col">
                        <h2 className="alan-sans-800 text-3xl md:text-5xl">{heading}</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-6 h-fit mt-12 xl:mt-auto">
                            {
                                expCards?.map((card) => (
                                    <div key={card.cardTitle} className="stats-card col-span-1">
                                        <span className="alan-sans-500 text-white">{card.cardTitle}</span>
                                        <h3 className="alan-sans-400 md:alan-sans-500 text-3xl md:text-4xl">{card.quantityRepresentation}</h3>
                                        <p className="alan-sans-300 text-gray-200">{card.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                    <div className="right-side col-span-2 lg:col-span-1 h-full relative mt-12 lg:mt-0">
                        <p className="alan-sans-500 text-gray-100">
                            {description}
                        </p>

                        <div className="mt-8 flex gap-6">
                            <Image
                                className="h-6! w-fit! grayscale hover:grayscale-0 transition-all delay-150 ease-linear"
                                src="https://www.2hatslogic.com/wp-content/themes/2hatslogic2024/dist/assets/img/brand/logo-wide.svg"
                                alt="2hatslogic logo"
                                width={160}
                                height={24}
                            />
                            <Image
                                className="h-6! w-fit! opacity-50 transition-all delay-150 ease-linear"
                                src="https://navaltboats.com/wp-content/uploads/2023/07/Asset-8Nav-logo11-1.png.webp"
                                alt="Navalt logo"
                                width={96}
                                height={24}
                            />
                            {/* <!-- <img className="h-6 w-fit contrast-[0.5] transition-all delay-150 ease-linear" src="https://oceanix.cloud/wp-content/uploads/2023/06/Asset-1dw-1-1.png" alt=""/> --> */}
                        </div>

                        <div className="technology-section flex gap-2 mt-12 flex-wrap">
                            {
                                technologies?.map((technology) => (
                                    <a href="#" className="p-2 text-2xl bg-gray-500/30 aspect-square w-12 h-12 flex items-center justify-center rounded-md">
                                        <i className={`fa-brands fa-${(technology.techIcon || '').replace(/[\u200B-\u200D\uFEFF]/g, '')}`} aria-hidden="true"></i>
                                    </a>
                                ))
                            }
                        </div>
       
                        <a href="#" className="alan-sans-500 md:alan-sans-700 text-gray-100 block md:absolute bottom-0 right-0 underline mt-6 md:mt-0">explore timeline?</a>
                    </div>
                </div>
            </div>
        </section>
    )
}