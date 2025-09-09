import './App.css';

import FooterSection from './sections/FooterSection';
import GallerySection from './sections/GallerySection';
import GiftSection from './sections/GiftSection';
import OpeningSection from './sections/OpeningSection';

import BrideGroomBox from './components/BrideGroomBox';
import LocationInfo from './components/LocationInfo';

function App() {

  const basePath = import.meta.env.BASE_URL;

  return (
    <main
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      {/* Opening Section */}
      <OpeningSection />

      {/* Section Kedua */}
      <section id='BrideGroom' className="section-container p-[20px] space-y-8 overflow-hidden">

        <div className="absolute top-0 left-0 w-32 h-32 bg-[url('/corner-leaf.png')] bg-contain bg-no-repeat rotate-180"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[url('/corner-leaf.png')] bg-contain bg-no-repeat "></div>
      
        <h1 className='primary-text font-funnel text-[36px]'>Groom & Bride</h1>
        
        {/* Box Pengantin Pria */}
        <BrideGroomBox 
          image={`${basePath}men.png`}
          name="Nama Pengantin Pria"
          parentTitle="Anak Pertama Dari"
          parents={["Nama Orang Tua Pria", "Nama Orang Tua Pria"]}
        />

        <BrideGroomBox 
          image={`${basePath}women.png`}
          name="Nama Pengantin Wanita"
          parentTitle="Anak Pertama Dari"
          parents={["Nama Orang Tua Wanita", "Nama Orang Tua Wanita"]}
          reverse
        />
      </section>

      {/* Section Ketiga */}
      <section className="section-container primary-bg py-[50px] px-[20px]">
        <h1 className="text-center text-[36px] font-poiret primary-text">Save the Date</h1>
        
        <div className="relative w-3/4 h-8">
          <img src={`${basePath}text-divider.png`} alt="text-divider" fill className="object-cover transform scale-y-[0.5] scale-x-[0.5]" />
        </div>
        <p className="my-1 text-[14px] font-delius">Saturday, 11th October 2025</p>
        <div className="relative w-3/4 h-8">
          <img src={`${basePath}text-divider.png`} alt="text-divider" fill className="object-cover transform scale-y-[-0.5] scale-x-[0.5]" />
        </div>
        
        <div className="h-full flex flex-col items-center justify-around">
          <LocationInfo 
            title='Holy Matrimony'
            date='Saturday, 11th October 2025'
            time='09:00 WIB - end'
            locationName='Gereja Santo Petrus Purwosari'
            locationDetail='Slamet Riyadi St No.370, Penumping, Laweyan, Surakarta City, Central Java 57141'
          />
          <LocationInfo 
            title='Reception'
            date='Saturday, 11th October 2025'
            time='11:00 WIB - end'
            locationName='Gedung Dwidarma (Behind the Church)'
            locationDetail='Slamet Riyadi St No.370, Penumping, Laweyan, Surakarta City, Central Java 57141'
          />
        </div>
      </section>

      {/* Section Keempat */}
      <GiftSection />

      {/* Section Kelima */}
      <GallerySection />

      {/* Section Keenam */}
      <FooterSection />
    </main>
  )
}

export default App
