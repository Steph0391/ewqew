import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bloxistry - Jual Robux Termurah</title>
        <meta name="description" content="Bloxistry - Tempat beli Robux terpercaya, murah, dan otomatis!" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex flex-col items-center justify-center">
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-green-700 mb-4">Bloxistry</h1>
          <p className="text-lg md:text-2xl mb-8">Jual Robux Termurah, Otomatis, & Terpercaya!</p>
          <a href="/order" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition">Beli Robux Sekarang</a>
        </section>
        <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[100, 400, 800].map((amount) => (
            <div key={amount} className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <span className="text-3xl font-bold text-green-600">{amount} Robux</span>
              <span className="text-xl mt-2 mb-4">Mulai Rp{amount * 130}</span>
              <a href="/order" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Beli</a>
            </div>
          ))}
        </section>
      </main>
    </>
  )
} 