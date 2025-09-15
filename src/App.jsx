import './App.css';

import { useRef, useState } from 'react';

import FooterSection from './sections/FooterSection';
import GallerySection from './sections/GallerySection';
import GiftSection from './sections/GiftSection';
import LocationSection from './sections/LocationSection';
import OpeningSection from './sections/OpeningSection';
import ProfileSection from './sections/ProfileSection';


function App() {

  const basePath = import.meta.env.BASE_URL;

  const mainRef = useRef(null);
  const audioRef = useRef(null);
  const [showPlayButton, setshowPlayButton] = useState(false);
  const [mute, setMute] = useState(true);
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);

  const handleOpenInvitation = () => {

    setIsInvitationOpened(true);

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
      ref={mainRef}
      className={`h-screen snap-y snap-mandatory ${
        isInvitationOpened ? "overflow-y-scroll" : "overflow-hidden"
      }`}
    >
      <audio ref={audioRef} loop>
        <source src={`${basePath}song.mp3`} type="audio/mpeg" />
      </audio>

      {/* Opening Section */}
      <OpeningSection onOpenInvitation={handleOpenInvitation} />

      {/* Section Kedua */}
      <ProfileSection />

      {/* Section Ketiga */}
      <LocationSection />

      {/* Section Keempat */}
      <GiftSection />

      {/* Section Kelima */}
      <GallerySection />

      {/* Section Keenam */}
      <FooterSection />

      {showPlayButton && <div className="fixed bottom-4 left-4">
        <button
          onClick={togglePlay}
          className="p- bg-white border rounded-full shadow-lg active:scale-95 text-[10px]"
        >
          {mute ? "🔇" : "🔊" }
        </button>
      </div>}
    </main>
  )
}

export default App
