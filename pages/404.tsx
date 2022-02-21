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
          Uh oh...
        </h1>
        <p className="mb-10 text-[1.75rem] font-semibold">Looks like there's nothing here.</p>
        <a href='/' className="text-[1.25rem] font-semibold px-20 py-4 bg-black text-white rounded-xl" >Let's go home.</a>
      </main>
    </div>
  )
}
