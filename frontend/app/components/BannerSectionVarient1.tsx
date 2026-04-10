import React from 'react'

type BannerSectionVarient1Block = {
  _type: 'bannerSectionVarient1'
  _key?: string
  heading?: string
  description?: string
  image?: any
}

type BannerSectionVarient1Props = {
  block: BannerSectionVarient1Block
}

export default function BannerSectionVarient1({block}: BannerSectionVarient1Props) {
  return (
    <section>
        {/* <div className='container'>
            <div className='bg-black h-[400px] w-full rounded-2xl mb-12 p-4 flex gap-6 relative md:static'>
                <div className="content w-full md:w-1/2 flex flex-col justify-between mt-auto z-10">
                    <h2 className='alan-sans-800 text-4xl text-white mb-6'>{block.heading}</h2>
                    <p className=' alan-sans-400 text-white'>{block.description}</p>
                </div>
                <div className="bg-1 h-full w-full md:w-1/2! rounded-2xl absolute right-0 top-0 md:static">
                </div>
            </div>
        </div> */}
        <div className="container">
          <div className="outer">
            <div className="inner"></div>
          </div>
        </div>
    </section>
  )
}

