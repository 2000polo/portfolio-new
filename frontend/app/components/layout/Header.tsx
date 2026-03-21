import Link from 'next/link'
import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'

export default async function Header() {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
  })

  return (
    <header className="container">
        <div className="main-header flex w-full items-center justify-between my-2">
            <div className="text-xl">
                Logo
            </div>

            <nav className="w-full justify-center alan-sans-500 hidden sm:flex">
                <ul className="flex gap-4">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Ui/Ux</a></li>
                    <li><a href="#">Development</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </nav>

            <div className="">
                <button className="button button-primary" type="button">
                    Hire me?
                </button>
            </div>
        </div>
    </header>
  )
}
