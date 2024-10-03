import { CustomSlide } from "../types"

const standardVideoProps = {
    type: 'video' as 'video',
    autoPlay: true,
    loop: true,
}

export const slides: CustomSlide[] = [
    {
        src: '/pics/frame.avif',
        type: 'image',
        width: 2477,
        height: 2476,
    },
    {
        src: '/pics/ring1.avif',
        type: 'image',
        width: 2477,
        height: 2843,
    },
    {
        width: 2160,
        height: 2160,
        ...standardVideoProps,
        sources: [
            {
                src: "/vids/milk.webm",
                type: "video/webm",
            },
        ],
    },
    {
        src: '/pics/ring2.avif',
        type: 'image',
        width: 2160,
        height: 2160,
    },
    {
        src: '/pics/balloons.avif',
        type: 'image',
        width: 2477,
        height: 2476,
    },
    {
        src: '/pics/ring3.avif',
        type: 'image',
        width: 2476,
        height: 2842,
    },


    {
        width: 2560,
        height: 1440,
        ...standardVideoProps,
        sources: [
            {
                src: "/vids/camera.webm",
                type: "video/webm",
            },
        ],
    },


    {
        width: 1536,
        height: 1920,
        ...standardVideoProps,
        sources: [
            {
                src: "/vids/pucks.webm",
                type: "video/webm",
            },
        ],
    },
    {
        width: 1080,
        height: 1080,
        ...standardVideoProps,
        sources: [
            {
                src: "/vids/yogurt.webm",
                type: "video/webm",
            },
        ],
    },
    {
        width: 1080,
        height: 1080,
        ...standardVideoProps,
        sources: [
            {
                src: "/vids/coolinart.webm",
                type: "video/webm",
            },
        ],
    },


    {
        width: 2048,
        height: 858,
        ...standardVideoProps,
        sources: [
            {
                src: "/vids/jois.webm",
                type: "video/webm",
            },
        ],
        text: 'Совместная работа с агентством Zephyr Lab. Имиджевое видео для ЖК “JOIS”. Режиссура, монтаж, моушн – Александр Шумлянский. Ролик транслировался в рекламном блоке пере киносеансами в кинотеатре “Художественный”, в Москве.',
    },


    {
        width: 1536,
        height: 1920,
        ...standardVideoProps,
        sources: [
            {
                src: "/vids/phone.webm",
                type: "video/webm",
            },
        ],
    },
    {
        src: '/pics/chakchak.avif',
        type: 'image',
        width: 3211,
        height: 3744,
    },
    {
        src: '/pics/flower.avif',
        type: 'image',
        width: 2490,
        height: 2880,
    },


    {
        width: 2560,
        height: 1440,
        ...standardVideoProps,
        sources: [
            {
                src: "/vids/can.webm",
                type: "video/webm",
            },
        ],
    },


    {
        src: '/pics/burb1.avif',
        type: 'image',
        width: 2523,
        height: 3589,
    },
    {
        width: 1080,
        height: 1360,
        ...standardVideoProps,
        sources: [
            {
                src: "/vids/burberry.webm",
                type: "video/webm",
            },
        ],
    },
    {
        src: '/pics/burb2.avif',
        type: 'image',
        width: 2523,
        height: 3589,
    },


    {
        src: '/pics/gta.avif',
        type: 'image',
        width: 7643,
        height: 4302,
    },


    {
        width: 1080,
        height: 1920,
        ...standardVideoProps,
        sources: [
            {
                src: "/vids/suitcase_1.webm",
                type: "video/webm",
            },
        ],
    },
    {
        width: 1080,
        height: 1920,
        ...standardVideoProps,
        sources: [
            {
                src: "/vids/suitcase_2.webm",
                type: "video/webm",
            },
        ],
    },
    {
        width: 1080,
        height: 1920,
        ...standardVideoProps,
        sources: [
            {
                src: "/vids/suitcase_3.webm",
                type: "video/webm",
            },
        ],
    },
]
