import { useEffect, RefObject } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useSplitTextAnimation(
  ref: RefObject<HTMLElement | null>,
  stagger: number = 0.1
) {
  useEffect(() => {
    if(!ref.current) return
    const element = ref.current
    
    const split = new SplitType(element, {
      types: "lines,words"
    })

    const anim = gsap.from(split.lines, {
      yPercent: 100,
      opacity: 0,
      stagger: stagger,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
      }
    })

    return () => {
      anim.kill()
      split.revert()
    }
  }, [ref, stagger])
}