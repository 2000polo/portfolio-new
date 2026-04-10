import { urlForImage } from '@/sanity/lib/utils'
import React from 'react'

type BannerSectionVarient2Block = {
  _type: 'bannerSectionVarient1'
  _key?: string
  heading?: string
  description?: string
  images?: any[]
}

type BannerSectionVarient2Props = {
  block: BannerSectionVarient2Block
}

export default function BannerSectionVarient2({block}: BannerSectionVarient2Props) {
  return (
    <section>
        <div className='container my-12 md:my-24'>
            <div className="social-media-platform-cards-wrapper w-full flex gap-2 md:gap-4 items-center justify-center relative min-h-[200px] ">
                <div className="social-media-platform-card min-w-[200px] min-h-[200px] flex items-center justify-center rounded-2xl
                    bg-black backdrop:blur-xl text-white text-8xl 
                    absolute left-[20%] translate-x-[-20%] top-[50%] translate-y-[-50%] rotate-[15deg] scale-[0.8] overflow-hidden rounded-2xl">
                    <img src={ urlForImage(block.images?.[0])?.width(200).height(200).fit('crop').url() } alt={block.images?.[0]?.alt} className="w-full h-full object-cover" aria-hidden="true"></img>
                </div>
                <div className="social-media-platform-card min-w-[200px] min-h-[200px] flex items-center justify-center rounded-2xl
                    bg-black backdrop:blur-xl text-white text-8xl 
                    absolute left-[80%] translate-x-[-80%] top-[50%] translate-y-[-50%] rotate-[-15deg] scale-[0.8] overflow-hidden rounded-2xl">
                    <img src={ urlForImage(block.images?.[1])?.width(200).height(200).fit('crop').url() } alt={block.images?.[1]?.alt} className="w-full h-full object-cover" aria-hidden="true"></img>
                </div>
                <div className="social-media-platform-card min-w-[200px] min-h-[200px] flex items-center justify-center rounded-2xl
                    bg-black backdrop:blur-xl text-white text-8xl 
                    absolute left-[35%] translate-x-[-35%] top-[50%] translate-y-[-50%] rotate-[-15deg] scale-[0.9] overflow-hidden rounded-2xl">
                    <img src={ urlForImage(block.images?.[2])?.width(200).height(200).fit('crop').url() } alt={block.images?.[2]?.alt} className="w-full h-full object-cover" aria-hidden="true"></img>
                </div>
                <div className="social-media-platform-card min-w-[200px] min-h-[200px] flex items-center justify-center rounded-2xl
                    bg-black backdrop:blur-xl text-white text-8xl 
                    absolute left-[65%] translate-x-[-65%] top-[50%] translate-y-[-50%] rotate-[15deg] scale-[0.9] overflow-hidden rounded-2xl">
                    <img src={ urlForImage(block.images?.[3])?.width(200).height(200).fit('crop').url() } alt={block.images?.[3]?.alt} className="w-full h-full object-cover" aria-hidden="true"></img>
                </div>
                <div className="social-media-platform-card min-w-[200px] min-h-[200px] flex items-center justify-center rounded-2xl
                    bg-black backdrop:blur-xl text-white text-8xl 
                    absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] overflow-hidden rounded-2xl">
                    <img src={ urlForImage(block.images?.[4])?.width(200).height(200).fit('crop').url() } alt={block.images?.[4]?.alt} className="w-full h-full object-cover" aria-hidden="true"></img>
                </div>
            </div>
            <h2 className="alan-sans-800 text-3xl md:text-5xl mt-12 text-center bg-gradient-to-r from-black via-black to-transparent bg-clip-text text-transparent"
            >{block.heading}</h2>
            <p className="alan-sans-400 text-gray-500 mt-2 text-center max-w-[800px] mx-auto">{block.description}</p>
        </div>
    </section>
  )
}