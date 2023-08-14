import api from '@/app/api/api'
import authorApi from '@/app/api/authorApi'
import categoryApi from '@/app/api/categoryApi'
import Image from 'next/image'
import React from 'react'

const page = async ({ params }) => {
    const fetcher = await fetch(`${api}/?slug=${params.slug}}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'

        }
    }, { cache: 'no-store' })
    const data = await fetcher.json()
    const p = data[0]
    // const categoryFetcher = await fetch(`${categoryApi}${p.categories[0]}`, { cache: 'no-store' })
    // const categoryData = await categoryFetcher.json()
    // const category = categoryData.name

    // const authorFetcher = await fetch(`${authorApi}${p.author}`, { cache: 'no-store' })
    // const authorData = await authorFetcher.json()
    // const author = authorData.name
    return (
        <>
            {/* Breadcrumb */}
            <div className='flex gap-2 items-center mb-2 bg-news-red/20 px-4 rounded-full'>
                <button className='flex items-center gap-1 hover:text-news-red'>
                    <i class='bx bxs-home bx-burst'></i>
                    <h6 className='font-bold'>HOME</h6>
                </button>
                <span>/</span>
                <button className='flex items-center gap-1 hover:text-news-red'>
                    <i class='bx bxs-castle bx-burst' ></i>
                    <h6 className='font-bold'>National</h6>
                </button>
                <span>/</span>
                <h6>{p.slug}</h6>
            </div>
            {/* Article */}
            <article className='my-4 flex flex-col gap-2'>
                <h1 className='font-bold text-4xl '>{p.title.rendered}</h1>
                <div className='flex gap-2'>
                    <div className='flex justify-start items-center text-lg gap-1'>
                        <i className='bx bxs-time' ></i>
                        <h6 className='font-semibold'>{p.date.slice(0, 10)}</h6>
                    </div>
                    <div>
                        <button className='flex justify-start items-center text-lg gap-1'>
                            <i className='bx bxs-user-circle bx-sm'></i>
                            <h6 className='font-semibold'>Admin</h6>
                        </button>
                    </div>
                </div>
                <Image width={800} height={600} src={p.featured_media_src_url} alt='ad' />
                <p className='text-xl prose content' dangerouslySetInnerHTML={{ __html: p.content.rendered }} ></p>
                <span>TAGS: {p.tags}</span>
            </article>
        </>
    )
}

export default page