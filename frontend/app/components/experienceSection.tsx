import {experienceSection as experienceSectionType } from '@/sanity.types'

type ExperienceSectionProps = {
  block: ExperienceSectionType
  index: number
}

export default function ExperienceSection({block}: ExperienceSectionProps){
    return (
        <section className="bg-black text-white">
            <div className="experience-seciton-wrapper container mb-12 md:mb-24 py-12 md:py-24">
                <div className="grid grid-cols-2 gap-2 md:gap-4 min-h-[400px] h-full">
                    <div className="left-side col-span-2 lg:col-span-1 flex justify-between flex-col">
                        <h2 className="alan-sans-800 text-3xl md:text-5xl">A wrap about my experience</h2>
                        <div className="grid grid-cols-2 gap-6 md:gap-6 h-fit mt-12 xl:mt-auto">
                            <div className="stats-card col-span-1">
                                <span className="alan-sans-500 text-white">Experience</span>
                                <h3 className="alan-sans-400 md:alan-sans-500 text-3xl md:text-4xl">4+</h3>
                                <p className="alan-sans-300 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            </div>
                            <div className="stats-card col-span-1">
                                <span className="alan-sans-500 text-white">Projects</span>
                                <h3 className="alan-sans-400 md:alan-sans-500 text-3xl md:text-4xl">50+</h3>
                                <p className="alan-sans-300 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            </div>
                            <div className="stats-card col-span-1">
                                <span className="alan-sans-500 text-white">Clients</span>
                                <h3 className="alan-sans-400 md:alan-sans-500 text-3xl md:text-4xl">100+</h3>
                                <p className="alan-sans-300 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            </div>
                            <div className="stats-card col-span-1">
                                <span className="alan-sans-500 text-white">Tech Stack</span>
                                <h3 className="alan-sans-400 md:alan-sans-500 text-3xl md:text-4xl">150+</h3>
                                <p className="alan-sans-300 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="right-side col-span-2 lg:col-span-1 h-full relative mt-12 lg:mt-0">
                        <p className="alan-sans-500 text-gray-100">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi nobis dolorem tenetur veritatis sint delectus alias laborum, earum blanditiis officiis tempore harum quae. Voluptatem ad natus numquam. Aspernatur error, fuga repudiandae animi earum labore?
                        </p>

                        <div className="mt-8 flex gap-6">
                            <img className="h-6! w-fit! grayscale hover:grayscale-0 transition-all delay-150 ease-linear" src="https://www.2hatslogic.com/wp-content/themes/2hatslogic2024/dist/assets/img/brand/logo-wide.svg" alt=""/>
                            <img className="h-6! w-fit! opacity-50 transition-all delay-150 ease-linear" src="https://navaltboats.com/wp-content/uploads/2023/07/Asset-8Nav-logo11-1.png.webp" alt=""/>
                            {/* <!-- <img className="h-6 w-fit contrast-[0.5] transition-all delay-150 ease-linear" src="https://oceanix.cloud/wp-content/uploads/2023/06/Asset-1dw-1-1.png" alt=""/> --> */}
                        </div>

                        <div className="technology-section flex gap-2 mt-12 flex-wrap">
                            <a href="#" className="p-2 text-2xl bg-gray-500/30 aspect-square w-12 h-12 flex items-center justify-center rounded-md">
                                <i className="fa fa-html5" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="p-2 text-2xl bg-gray-500/30 aspect-square w-12 h-12 flex items-center justify-center rounded-md">
                                <i className="fa fa-css3" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="p-2 text-2xl bg-gray-500/30 aspect-square w-12 h-12 flex items-center justify-center rounded-md">
                                <i className="fa fa-git" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="p-2 text-2xl bg-gray-500/30 aspect-square w-12 h-12 flex items-center justify-center rounded-md">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="p-2 text-2xl bg-gray-500/30 aspect-square w-12 h-12 flex items-center justify-center rounded-md">
                                <i className="fa fa-gitlab" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="p-2 text-2xl bg-gray-500/30 aspect-square w-12 h-12 flex items-center justify-center rounded-md">
                                <i className="fa fa-html5" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="p-2 text-2xl bg-gray-500/30 aspect-square w-12 h-12 flex items-center justify-center rounded-md">
                                <i className="fa fa-css3" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="p-2 text-2xl bg-gray-500/30 aspect-square w-12 h-12 flex items-center justify-center rounded-md">
                                <i className="fa fa-git" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="p-2 text-2xl bg-gray-500/30 aspect-square w-12 h-12 flex items-center justify-center rounded-md">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="p-2 text-2xl bg-gray-500/30 aspect-square w-12 h-12 flex items-center justify-center rounded-md">
                                <i className="fa fa-gitlab" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="p-2 text-2xl bg-gray-500/30 aspect-square w-12 h-12 flex items-center justify-center rounded-md">
                                <i className="fa fa-git" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="p-2 text-2xl bg-gray-500/30 aspect-square w-12 h-12 flex items-center justify-center rounded-md">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="p-2 text-2xl bg-gray-500/30 aspect-square w-12 h-12 flex items-center justify-center rounded-md">
                                <i className="fa fa-gitlab" aria-hidden="true"></i>
                            </a>
                        </div>
       
                        {/* <!-- <p className="alan-sans-400 text-gray-500 mt-12">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi nobis dolorem tenetur veritatis sint delectus alias laborum, earum blanditiis officiis tempore harum quae. Voluptatem ad natus numquam. Aspernatur error, fuga repudiandae animi earum labore?
                        </p> --> */}
                        <a href="#" className="alan-sans-500 md:alan-sans-700 text-gray-100 block md:absolute bottom-0 right-0 underline mt-6 md:mt-0">explore timeline?</a>
                    </div>
                </div>
            </div>
        </section>
    )
}