import './App.css';

import { useRef, useState } from 'react';

import FooterSection from './sections/FooterSection';
import GallerySection from './sections/GallerySection';
import GiftSection from './sections/GiftSection';
import OpeningSection from './sections/OpeningSection';
import ProfileSection from './sections/ProfileSection';

import LocationInfo from './components/LocationInfo';

function App() {

  const basePath = import.meta.env.BASE_URL;

  const audioRef = useRef(null);
  const [showPlayButton, setshowPlayButton] = useState(false);
  const [mute, setMute] = useState(true);

  const handleOpenInvitation = () => {
    // Unmute & play music
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play();
      setMute(false);
    }
    // Show mute button
    setshowPlayButton(true);

    // Scroll ke section berikut
    document.getElementById("BrideGroom")?.scrollIntoView({ behavior: "smooth" });
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !mute;
    setMute(!mute);
  };

  return (
    <main
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      <audio ref={audioRef} loop>
        <source src={`${basePath}song.mp3`} type="audio/mpeg" />
      </audio>

      {/* Opening Section */}
      <OpeningSection onOpenInvitation={handleOpenInvitation} />

      {/* Section Kedua */}
      <ProfileSection />

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

      {showPlayButton && <div className="fixed bottom-4 left-4">
        <button
          onClick={togglePlay}
          className="p-2 bg-white border rounded-full shadow-lg active:scale-95 text-[10px]"
        >
          {mute ? "🔇" : "🔊" }
        </button>
      </div>}
    </main>
  )
}

export default App
