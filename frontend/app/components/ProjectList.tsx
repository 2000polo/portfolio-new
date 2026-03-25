import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import {urlForImage} from '@/sanity/lib/utils'
import {Image} from 'next-sanity/image'


export type ProjectList = {
    _type: 'projectList'
    projects: Array<{
      projectName: string
      description: string
      image: {
        asset: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
        }
        media?: unknown
        alt?: string
        _type: 'image'
      }
      link: any
      gallery: any[]
    }>
}

type ProjectListProps = {
  block: ProjectList
}


type Item = {
    title: string;
    gallery: any[];
    image: string;
    description: string;
    link: string;
    projectName: string;
  };
  
const items: Item[] = [
    {
      title: "Mountain",
      images: [
        "https://picsum.photos/id/1015/500/350",
        "https://picsum.photos/id/1016/500/350",
        "https://picsum.photos/id/1018/500/350",
      ],
    },
    {
      title: "Dog",
      images: [
        "https://picsum.photos/id/1025/500/350",
        "https://picsum.photos/id/1024/500/350",
        "https://picsum.photos/id/1021/500/350",
      ],
    },
    {
      title: "Forest",
      images: [
        "https://picsum.photos/id/1035/500/350",
        "https://picsum.photos/id/1033/500/350",
        "https://picsum.photos/id/1032/500/350",
      ],
    },
];

export default function ProjectList({block}: ProjectListProps) {

    console.log(block);

    const projects = block.projects;

    const previewRef = useRef<HTMLDivElement>(null);

    const [images, setImages] = useState<string[]>([]);
    const [index, setIndex] = useState(0);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const mouse = useRef({ x: 0, y: 0 });
    const pos = useRef({ x: 0, y: 0 });

    const animationFrame = useRef<number>(0);

    const easing = 0.5; // elasticity strength

    // slideshow
    const startSlideshow = (imgs: any[]) => {
        setImages(imgs);
        setIndex(0);

        intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % imgs.length);
        }, 1000);
    };

    const stopSlideshow = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    // elastic follow animation
    const animate = () => {
        pos.current.x += (mouse.current.x - pos.current.x) * easing;
        pos.current.y += (mouse.current.y - pos.current.y) * easing;

        if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
        }

        animationFrame.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        animate();
        return () => cancelAnimationFrame(animationFrame.current!);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        mouse.current.x = e.clientX + 20;
        mouse.current.y = e.clientY + 20;
    };

    const showPreview = (imgs: string[]) => {
        startSlideshow(imgs);

        previewRef.current?.classList.add("preview-visible");
        previewRef.current?.classList.remove("preview-hidden");
    };

    const hidePreview = () => {
        stopSlideshow();

        previewRef.current?.classList.remove("preview-visible");
        previewRef.current?.classList.add("preview-hidden");
    };

    console.log(images);

    return (
        <section>
            <div className="container mb-12 md:mb-12">
                <ul className='w-full [&>li:not(:last-child)]:mb-6 [&>li:not(:last-child)]:pb-6 [&>li:not(:last-child)]:border-b border-gray-100/30'>
                    {
                        projects?.map((item) => (
                            <li
                                onMouseEnter={() => showPreview(item.gallery)}
                                onMouseLeave={hidePreview}
                                onMouseMove={handleMouseMove}
                                className='w-full group'
                                key={item.projectName}
                            >
                                <div className='flex gap-6 w-full md:flex-row flex-col'>
                                    <div className='w-full md:w-1/2! lg:w-1/4! aspect-video overflow-hidden rounded-2xl'>
                                        <Image
                                            src={item.image.asset?._ref ? urlForImage(item.image)?.url() as string : ''}
                                            className="overflow-hidden w-full h-auto grayscale-100 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-300"
                                            alt="Project Image"
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                    <div className='flex flex-1 flex-col w-full lg:w-100'>
                                        <h2 className='alan-sans-800 text-3xl'>{ item.projectName }</h2>
                                        <p className='alan-sans-400 text-gray-500 mt-4 line-clamp-3 lg:line-clamp-none'>{ item.description }</p>
                                        <Link href='https://www.google.com' className='mt-3 md:mt-auto w-full text-start md:text-end alan-sans-400 text-gray-500'>Read More</Link>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div ref={previewRef} className="preview preview-hidden">
                    {images?.length > 0 && (
                    <Image 
                    src={images[index]?.asset?._ref ? urlForImage(images[index])?.url() as string : ''} 
                    alt="" 
                    width={1000} 
                    height={1000} 
                    className='w-full h-auto'
                    />
                    )}
                </div>
            </div>
        </section>
    )
}
