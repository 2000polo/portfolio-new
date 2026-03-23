/** Local type until Sanity TypeGen includes `socialMediaBanner` on `Page.pageBuilder`. */
type SocialMediaBannerBlock = {
  _type: 'socialMediaBanner'
  _key?: string
  heading?: string
  description?: string
  socialMedia?: Array<{
    name?: string
    link?: string
    icon?: unknown
  }>
}

type SocialMediaBannerProps = {
  block: SocialMediaBannerBlock
  index: number
}

export default function SocialMediaBanner({block}: SocialMediaBannerProps) {
  console.log("SocialMeda Banner", block)

  const { heading, description } = block

  return (
    <section className="bg-black text-white">
        <div className="relative w-full bg-black">
            <div
                className="absolute inset-0 z-0 bg-[length:40px_40px] 
                bg-[linear-gradient(to_right,rgba(75,85,99,0.4)_1px,transparent_1px),
                    linear-gradient(to_bottom,rgba(75,85,99,0.4)_1px,transparent_1px)]"
            />
            
        </div>
        <div className="follow-me-wrapper container mb-12 md:mb-24 py-12 md:py-24">
            <div className="ray"></div>
            <div className="social-media-platform-cards-wrapper w-full flex gap-2 md:gap-4 items-center justify-center relative min-h-[200px]">
                <div className="social-media-platform-card min-w-[200px] min-h-[200px] flex items-center justify-center rounded-2xl
                    bg-black backdrop:blur-xl border border-gray-100/20 text-white text-8xl 
                    absolute left-[20%] translate-x-[-20%] top-[50%] translate-y-[-50%] rotate-[15deg] scale-[0.8]">
                    <i className="fa-brands fa-linkedin-in bg-gradient-to-r  from-white via-white to-transparent bg-clip-text text-transparent" aria-hidden="true"></i>
                </div>
                <div className="social-media-platform-card min-w-[200px] min-h-[200px] flex items-center justify-center rounded-2xl
                    bg-black backdrop:blur-xl border border-gray-100/20 text-white text-8xl 
                    absolute left-[80%] translate-x-[-80%] top-[50%] translate-y-[-50%] rotate-[-15deg] scale-[0.8]">
                    <i className="fa-brands fa-github bg-gradient-to-l from-white via-white to-transparent bg-clip-text text-transparent" aria-hidden="true"></i>
                </div>
                <div className="social-media-platform-card min-w-[200px] min-h-[200px] flex items-center justify-center rounded-2xl
                    bg-black backdrop:blur-xl border border-gray-100/20 text-white text-8xl 
                    absolute left-[35%] translate-x-[-35%] top-[50%] translate-y-[-50%] rotate-[-15deg] scale-[0.9]">
                    <i className="fa-brands fa-facebook-f bg-gradient-to-r from-white via-white to-transparent bg-clip-text text-transparent" aria-hidden="true"></i>
                </div>
                <div className="social-media-platform-card min-w-[200px] min-h-[200px] flex items-center justify-center rounded-2xl
                    bg-black backdrop:blur-xl border border-gray-100/20 text-white text-8xl 
                    absolute left-[65%] translate-x-[-65%] top-[50%] translate-y-[-50%] rotate-[15deg] scale-[0.9]">
                    <i className="fa-brands fa-x-twitter bg-gradient-to-l from-white via-white to-transparent bg-clip-text text-transparent" aria-hidden="true"></i>
                </div>
                <div className="social-media-platform-card min-w-[200px] min-h-[200px] flex items-center justify-center rounded-2xl
                    bg-black backdrop:blur-xl border border-gray-100/20 text-white text-8xl 
                    absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
                    <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                </div>
            </div>
            <h2 className="alan-sans-800 text-3xl md:text-5xl mt-12 text-center bg-gradient-to-r from-white via-white to-transparent bg-clip-text text-transparent"
            >{heading}</h2>
            <p className="alan-sans-400 text-gray-500 mt-2 text-center max-w-[600px] mx-auto">{description}</p>
        </div>
    </section>
  )
}
