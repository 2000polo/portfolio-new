/** Local type until Sanity TypeGen includes `latestPortfolio` on `Page.pageBuilder`. */
type LatestPortfolioBlock = {
  _type: 'latestPortfolio'
  _key?: string
  heading?: string
  subheading?: string
  description?: string
  portfolioItems?: Array<{
    name?: string
    description?: string
    image?: unknown
  }>
}

type LatestPortfolioProps = {
  block: LatestPortfolioBlock
  index: number
}

export default function LatestPortfolioSection({block}: LatestPortfolioProps) {
  return (
    <section>
        <div className="latest-portfolio-updates container mb-12 md:mb-24">
            <h2 className="alan-sans-800 text-3xl md:text-5xl">Latest Portfolio Updates</h2>
            <p className="alan-sans-400 text-gray-500">Here are some of my latest portfolio updates, check it out and let me know what you think.</p>

            <div className="flex gap-2 md:gap-4 mt-6 overflow-x-visible overflow-scroll -mx-[0.5rem] sm:mx-0 px-[0.5rem] sm:px-0">
                <div className="work-card min-w-[300px] max-w-[300px]">
                    <img className="rounded-2xl overflow-hidden" src="https://i.pinimg.com/236x/bc/99/1d/bc991da9dbed06a43ed49eb735100778.jpg" alt="Portfolio Item 1" />
                    <div className="mt-2">
                        <h3 className="alan-sans-800 text-lg md:text-xl">Tumblerrr!</h3>
                        <p className="alan-sans-400 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                </div>
                <div className="work-card min-w-[300px] max-w-[300px]">
                    <img className="rounded-2xl overflow-hidden" src="https://i.pinimg.com/236x/bc/99/1d/bc991da9dbed06a43ed49eb735100778.jpg" alt="Portfolio Item 2" />
                    <div className="mt-2">
                        <h3 className="alan-sans-800 text-lg md:text-xl">Tumblerrr!</h3>
                        <p className="alan-sans-400 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                </div>
                <div className="work-card min-w-[300px] max-w-[300px]">
                    <img className="rounded-2xl overflow-hidden" src="https://i.pinimg.com/236x/bc/99/1d/bc991da9dbed06a43ed49eb735100778.jpg" alt="Portfolio Item 3" />
                    <div className="mt-2">
                        <h3 className="alan-sans-800 text-lg md:text-xl">Tumblerrr!</h3>
                        <p className="alan-sans-400 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                </div>
                <div className="work-card min-w-[300px] max-w-[300px]">
                    <img className="rounded-2xl overflow-hidden" src="https://i.pinimg.com/236x/bc/99/1d/bc991da9dbed06a43ed49eb735100778.jpg" alt="Portfolio Item 4" />
                    <div className="mt-2">
                        <h3 className="alan-sans-800 text-lg md:text-xl">Tumblerrr!</h3>
                        <p className="alan-sans-400 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                </div>
                <div className="work-card min-w-[300px] max-w-[300px]">
                    <img className="rounded-2xl overflow-hidden" src="https://i.pinimg.com/236x/bc/99/1d/bc991da9dbed06a43ed49eb735100778.jpg" alt="Portfolio Item 5" />
                    <div className="mt-2">
                        <h3 className="alan-sans-800 text-lg md:text-xl">Tumblerrr!</h3>
                        <p className="alan-sans-400 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}