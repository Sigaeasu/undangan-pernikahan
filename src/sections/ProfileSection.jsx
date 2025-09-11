import BrideGroomBox from "../components/BrideGroomBox";

const ProfileSection = () => {
    const basePath = import.meta.env.BASE_URL;
    return (
        <section id='BrideGroom' className="section-container p-[20px] space-y-8 overflow-hidden">

            <div className="absolute top-0 left-0 w-32 h-32 bg-[url('/corner-leaf.png')] bg-contain bg-no-repeat rotate-180"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[url('/corner-leaf.png')] bg-contain bg-no-repeat "></div>
        
            <h1 className='primary-text font-funnel text-[36px]'>Groom & Bride</h1>
            
            {/* Box Pengantin Pria */}
            <BrideGroomBox 
            image={`${basePath}men.png`}
            name="Kurnia Adam Raditya"
            parentTitle="Son of"
            parents={["Joko Haryanto", "Eny Christiani"]}
            />

            <BrideGroomBox 
            image={`${basePath}women.png`}
            name="Vinsensia Ventilanova"
            parentTitle="Daughter of"
            parents={["Agung Pribadi", "Sri Dwi Ningsih"]}
            reverse
            />
        </section>
    )
}

export default ProfileSection
