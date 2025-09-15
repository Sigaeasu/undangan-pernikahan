import LocationInfo from '../components/LocationInfo';

const LocationSection = ({ onOpenInvitation }) => {

    const basePath = import.meta.env.BASE_URL;

    return (
        <section 
            className="section-container primary-bg py-[50px] px-[20px] bg-cover"
            // style={{ backgroundImage: `url(${basePath}location.png)` }}
        >
        
            <h1 className="text-center text-[36px] font-poiret primary-text">Save the Date</h1>
            
            <div className="relative w-3/4 h-8">
                <img src={`${basePath}text-divider.png`} alt="text-divider" fill className="object-cover transform scale-y-[0.5] scale-x-[0.5]" />
            </div>
            <p className="my-1 text-[14px] font-delius">Saturday, 11th October 2025</p>
            <div className="relative w-3/4 h-8">
                <img src={`${basePath}text-divider.png`} alt="text-divider" fill className="object-cover transform scale-y-[-0.5] scale-x-[0.5]" />
            </div>

            <p className='font-delius text-center text-[12px] my-[8px] italic'>"Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia"</p>
            <p className='font-delius text-center text-[12px]'>Matius 19:6</p>
            
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
    )
}

export default LocationSection