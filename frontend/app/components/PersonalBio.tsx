/** Local type until Sanity TypeGen includes `personalBio` on `Page.pageBuilder`. */
type PersonalBioBlock = {
  _type: 'personalBio'
  _key?: string
  paragraph?: string
}

type PersonalBioProps = {
  block: PersonalBioBlock
  index: number
}

export default function PersonalBio({block}: PersonalBioProps) {
  return (
    <section>
        {block.paragraph && (
            <div className="brief-desc-wrapper container mb-12 md:mb-24">
                <h2 className="alan-sans-800 text-3xl md:text-5xl">{block.paragraph}</h2>
            </div>
        )}
    </section>
  )
}
