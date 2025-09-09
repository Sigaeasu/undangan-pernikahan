import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      {/* Opening Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-pink-100 snap-start">
        <p>YOU ARE INVITED TO OUR WEDDING!</p>
        <img src="/av_logo.png" alt="Logo" width={500} height={500} className="mb-6" />
        <p>KEPADA YTH, BAPAK/IBU/SAUDARA/I</p>
        <p>MICHAEL</p>
        <button 
          className="bg-transparent border border-gray-400 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-g mt-5 active:scale-95"
        >Buka Undangan</button>
      </section>

      {/* Section Kedua */}
      <section className="h-screen flex flex-col items-center justify-center bg-white snap-start p-[20px] space-y-8">
        <h1>Groom & Bride</h1>
        
        {/* Box Pengantin Pria */}
        <div className="flex items-center gap-6">
          <img src="/men.png" alt="Logo" width={200} height={500} className="mb-6" />
          <div>
            <p>Nama Pengantin Pria</p>
            <p>Anak Pertama Dari</p>
            <p>Nama Orang Tua Pria</p>
            <p>&</p>
            <p>Nama Orang Tua Pria</p>
          </div>
        </div>
        
        {/* Box Pengantin Wanita */}
        <div className="flex items-center gap-6">
          <div>
            <p>Nama Pengantin Wanita</p>
            <p>Anak Pertama Dari</p>
            <p>Nama Orang Tua Wanita</p>
            <p>&</p>
            <p>Nama Orang Tua Wanita</p>
          </div>
          <img src="/women.png" alt="Logo" width={200} height={500} className="mb-6" />
        </div>
      </section>

      {/* Section Ketiga */}
      <section className="h-screen flex flex-col items-center bg-pink-50 snap-start py-[50px] px-[20px]">
        <h1 className="text-center">MENGUNDANG ANDA UNTUK HADIR DI HARI BAHAGIA KAMI PADA</h1>
        
        <div className="relative w-3/4 h-8">
          <img src="/text-divider.png" alt="text-divider" fill className="object-cover transform scale-y-[0.5] scale-x-[0.5]" />
        </div>
        <p className="my-1">Sabtu, 11 Oktober 2025</p>
        <div className="relative w-3/4 h-8">
          <img src="/text-divider.png" alt="text-divider" fill className="object-cover transform scale-y-[-0.5] scale-x-[0.5]" />
        </div>
        
        <div className="h-full flex flex-col items-center justify-around">
          <div className="bg-white p-5">
            <p>Pemberkatan</p>
            <p>Sabtu, 11 Oktober 2025</p>
            <p>09:00 - 10:00 WIB</p>
            <p>Gereja Santo Petrus Purwosari </p>
            <p>Slamet Riyadi St No.370, Penumping, Laweyan, Surakarta City, Central Java 57141</p>
          </div>
          <div className="bg-white p-5">
            <p>Pemberkatan</p>
            <p>Sabtu, 11 Oktober 2025</p>
            <p>11:00 - Selesai</p>
            <p>Gedung Dwidarma (Belakang Gereja)</p>
            <p>Slamet Riyadi St No.370, Penumping, Laweyan, Surakarta City, Central Java 57141</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
