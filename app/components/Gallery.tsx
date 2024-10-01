'use client'

import { useState } from "react"
import Image from 'next/image'
import Lightbox from "yet-another-react-lightbox"
import Video from "yet-another-react-lightbox/plugins/video"
import "yet-another-react-lightbox/styles.css"
import s from '@/app/ui/gallery.module.css'
import { slides } from "@/app/consts/slides"
import { useWindowWidth } from "@/app/hooks"
import { SlideFooter } from "./SlideFooter"


export const Gallery = () => {
    const [index, setIndex] = useState<number>(-1)
    const windowWidth = useWindowWidth()

    const close = () => setIndex(-1)

    return (
        <div className={s.gallery}>
            <div className={s.firstRow}>
                <Image src="/pics/frame_preview.avif" alt="" priority width={2477} height={2476} className='fade-in' onClick={() => setIndex(0)} sizes="100vw" />
                <Image src="/pics/ring1_preview.avif" alt="" priority width={2477} height={2843} className='fade-in' onClick={() => setIndex(1)} quality={10}sizes="100vw"/>
                <video width="2160" height="2160" muted autoPlay loop preload="metadata" className='fade-in' onClick={() => setIndex(2)}>
                    <source src="/vids/milk_preview.webm" type="video/webm" />
                </video>
            </div>

            <div className={s.secondRow}>
                <Image src="/pics/ring2_preview.avif" alt="" priority width={2160} height={2160} className={`${s.balloonsImg} fade-in`} onClick={() => setIndex(3)} sizes="100vw"/>
                <Image src="/pics/balloons_preview.avif" alt="" priority width={2477} height={2476} className={`${s.balloonsImg} fade-in`} onClick={() => setIndex(4)} sizes="100vw"/>
                <Image src="/pics/ring3_preview.avif" alt="" priority width={2476} height={2842} className='fade-in' onClick={() => setIndex(5)} sizes="100vw"/>
            </div>

            <video width="2560" height="1440" muted autoPlay loop preload="metadata" className={`${s.cameraVid} fade-in`} onClick={() => setIndex(6)}>
                <source src="/vids/camera_preview.webm" type="video/webm" />
            </video>

            <div className={s.thirdRow}>
                <video width="1536" height="1920" muted autoPlay loop preload="metadata" className={`${s.pucksVid} fade-in`} onClick={() => setIndex(7)}>
                    <source src="/vids/pucks_preview.webm" type="video/webm" />
                </video>
                <video width="1080" height="1080" muted autoPlay loop preload="metadata" className={`${s.yogurtVid} fade-in`} onClick={() => setIndex(8)}>
                    <source src="/vids/yogurt.webm" type="video/webm" />
                </video>
                <video width="1080" height="1080" muted autoPlay loop preload="metadata" className={`${s.coolinartVid} fade-in`} onClick={() => setIndex(9)}>
                    <source src="/vids/coolinart_preview.webm" type="video/webm" />
                </video>
            </div>

            <video width="2048" height="858" muted autoPlay loop preload="metadata" className={`${s.joisVid} fade-in`} onClick={() => setIndex(10)}>
                <source src="/vids/jois_preview.webm" type="video/webm" />
            </video>

            <div className={s.fifthRow}>
                <video width="1536" height="1920" muted autoPlay loop preload="metadata" className={`${s.phoneVid} fade-in`} onClick={() => setIndex(11)}>
                    <source src="/vids/phone_preview.webm" type="video/webm" />
                </video>
                <Image src="/pics/flower_preview.avif" alt="" priority={false} width={2598} height={3092} loading='lazy' className={`${s.flower} fade-in`} onClick={() => setIndex(13)} />
                <Image src="/pics/chakchak_preview.avif" alt="" priority={false} width={2610} height={3043} loading='lazy' className={`${s.chakchak} fade-in`} onClick={() => setIndex(12)} />
            </div>

            <video width="2560" height="1440" muted autoPlay loop preload="metadata" className={`${s.canVid} fade-in`} onClick={() => setIndex(14)}>
                <source src="/vids/can_preview.webm" type="video/webm" />
            </video>


            <div className={s.seventhRow}>
                <Image src="/pics/burb1_preview.avif" alt="" priority={false} width={1080} height={1360} loading='lazy' className='fade-in' onClick={() => setIndex(15)} />
                <video width="1080" height="1360" muted autoPlay loop preload="metadata" className={`${s.phoneVid} fade-in`} onClick={() => setIndex(16)}>
                    <source src="/vids/burberry_preview.webm" type="video/webm" />
                </video>
                <Image src="/pics/burb2_preview.avif" alt="" priority={false} width={2523} height={3589} loading='lazy' className='fade-in' onClick={() => setIndex(17)} />
            </div>


            <Image src="/pics/gta_preview.avif" alt="" priority={false} width={7643} height={4302} loading='lazy' className='fade-in' onClick={() => setIndex(18)} />


            <div className={s.ninethRow}>
                <video width="1080" height="1920" muted autoPlay loop preload="metadata" className='fade-in' onClick={() => setIndex(19)}>
                    <source src="/vids/suitcase_1_preview.webm" type="video/webm" />
                </video>
                <video width="1080" height="1920" muted autoPlay loop preload="metadata" className='fade-in' onClick={() => setIndex(20)}>
                    <source src="/vids/suitcase_2_preview.webm" type="video/webm" />
                </video>
                <video width="1080" height="1920" muted autoPlay loop preload="metadata" className='fade-in' onClick={() => setIndex(21)}>
                    <source src="/vids/suitcase_3_preview.webm" type="video/webm" />
                </video>
            </div>
            <Lightbox
                plugins={[Video]}
                index={index}
                open={index > -1}
                close={close}
                slides={slides}
                styles={{
                    container: {
                        backgroundColor: 'rgba(255,255,255,0.9)'
                    },
                    slide: {
                        ...(windowWidth > 500 && { padding: 'calc(5*calc(var(--yarl__carousel_padding_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_padding_percent, 0)*1%))' })
                    }
                }}
                render={{
                    slideFooter: ({slide}) => (<SlideFooter slide={slide}/>), // @ts-ignore
                    buttonClose: (props: any) => (
                        <button type="button" title="Close" aria-label="Close" className={`yarl__button ${s.closeBtn}`} key='close' style={{ filter: "none" }}>
                            <Image {...props} src="/svg/cross.svg" alt="" width={23} height={23} onClick={close} key='cross' />
                        </button>
                    ), // @ts-ignore
                    buttonNext: (props: any) => (
                        (windowWidth < 671) ? null : (
                            <button type="button" title="Next" aria-label="Next" className={`yarl__button yarl__navigation_next ${s.customGalleryNav}`} key='next' style={{ filter: "none" }}>
                                <Image {...props} src="/svg/arrow_right.svg" alt="" width={18} height={18} onClick={() => setIndex(index + 1)} key='right' />
                            </button>
                        )
                    ), // @ts-ignore
                    buttonPrev: (props: any) => (
                        (windowWidth < 671) ? null : (
                            <button type="button" title="Previous" aria-label="Previous" className={`yarl__button yarl__navigation_prev ${s.customGalleryNav}`} key='prev' style={{ filter: "none" }}>
                                <Image {...props} src="/svg/arrow_left.svg" alt="" width={18} height={18} onClick={() => setIndex(index - 1)} />
                            </button>
                        )
                    ),
                }}
            />
        </div>
    )
}
