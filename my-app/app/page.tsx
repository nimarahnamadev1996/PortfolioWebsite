import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <main className='h-screen w-screen relative'>

      <div 
       className='flex items-center w-full h-full bg-cover bg-center'
       style={{ backgroundImage: "url(/main-bg.webp)"}}>

        <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col mr-10 gap-5 z-10 max-sm:w-full max-sm:gap-12 max-w-[750px] max-sm:items-center'>
        <h1 className="text-[50px] text-white max-sm:text-4xl font-semibold">
            همچیز ممکن کن با
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              <br />
              برنامه نویسی سایت
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه د
          </p>

          <div className="max-sm:flex-col max-sm:text-center md:flex-row flex gap-5">
          <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] z-50"
            >
              اطلاعات بیشتر
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent  px-5 py-3 text-lg text-white max-w-[200px] border border-white"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              پروژه های من
            </Link>{" "}
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent  px-5 py-3 text-lg text-white max-w-[200px] border border-white"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              تماس با من
            </Link>
          </div>
        </div>
      </div>


      <div className="absolute -scale-x-100 bottom-0 left-0 max-sm:hidden">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>
      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

    </main>
  )
}

export default Home