import Haryana from "./home/Haryana"
import Hero2 from "./home/Hero2"
import Hero from "./home/Hero"
import api from "@/app/api/api"

export const metadata = {
  title: 'Cover News - Home',
  description: 'Uncover the truth with us...',
  path: '/',
}

export const dynamic = 'force-dynamic'


export default async function Home() {

  return (
    <>
      {/* Hero */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        बड़ी खबर
      </h2>
      <Hero />
      {/* Haryana */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        हरियाणा
      </h2>
      {/* National */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        देश
      </h2>
      {/* International */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        विदेश
      </h2>
      {/* Politics */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        राजनीती
      </h2>
      {/* Sports */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        खेल
      </h2>
      {/* Entertainment */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        मनोरंजन
      </h2>
      {/* Technology */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        प्रौद्योगिकी
      </h2>
      <Hero2 />
    </>
  )
}
