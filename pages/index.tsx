import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Soham Suvarna</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full px-20 lg:px-48 xl:pr-[35rem] 2xl:pl-72 2xl:pr-[55rem]">
        <h1 className="mb-5 text-[3.25rem] font-bold tracking-tight leading-none">
          Hey there —
        </h1>
        <p className="mb-5 text-[1.75rem] font-semibold">I'm Soham, a Student and Developer.</p>
        <p className="text-[1.25rem]">I am a 15-year-old student and a full-stack developer, but I prefer working on front-end most of the times. This website is currently not complete, but I plan to add stuff like Blogs, Projects and more in the future.</p>
      </main>
    </div>
  )
}
