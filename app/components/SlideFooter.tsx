'use client'

import s from '@/app/ui/gallery.module.css'
import { CustomSlide } from '../types'
import { useEffect, useRef } from 'react'
import { slides } from '@/app/consts/slides'
import { useLightboxState } from 'yet-another-react-lightbox'

export const SlideFooter = ({ slide }: { slide: CustomSlide }) => {
    if (!slide.text) return null
    
    const footerRef = useRef<HTMLDivElement | null>(null)

    let { currentIndex } = useLightboxState()
    currentIndex = currentIndex % slides.length
    const currentSlide = slides[currentIndex]
    const isVideo = currentSlide.type === 'video'
    // @ts-ignore
    const slideSrc = isVideo ? currentSlide.sources[0].src : currentSlide.src

    useEffect(() => {
        setTimeout(() => {
            let container: HTMLDivElement | null = null
            if (isVideo) {
                container = document.querySelector(`video[playsinline] source[src="${slideSrc}"]`)?.parentNode?.parentNode as HTMLDivElement
                const slider = container?.parentNode as HTMLDivElement
                slider.style.flexDirection = 'column'
            } else {
                const img = document.querySelector(`img[src="${slideSrc}"][draggable="false"]`) as HTMLImageElement
                container = img?.parentNode as HTMLDivElement
                container.style.flexDirection = 'column' // @ts-ignore
                if (!footerRef) setTimeout(() => footerRef.current.style.width = `calc(${img.offsetWidth}px - 39px)`, 10)
            }
            setTimeout(() => {
                container.style.height = '100%'
                container.style.height = 'auto'
            }, 16)
        }, 0)
    })

    return (
        <div className={s.slideFooter} ref={footerRef}>
            {slide.text}
        </div>
    )
}
