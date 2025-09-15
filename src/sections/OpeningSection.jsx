const OpeningSection = ({ onOpenInvitation }) => {

    const basePath = import.meta.env.BASE_URL;

    const params = new URLSearchParams(window.location.search);
    const guestName = params.get("name") || "Tamu Undangan";

    return (
        <section 
            className="section-container primary-bg bg-cover"
            style={{ backgroundImage: `url(${basePath}cover.png)` }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="z-10 text-center">
                <p className='font-funnel font-bold text-white'>YOU ARE INVITED TO OUR WEDDING!</p>
                <img src={`${basePath}av_logo.png`} alt="Logo" width={500} height={500} className="mb-6" />
                <p className='font-funnel text-white'>Dear</p>
                <p className='font-funnel text-white'>{guestName}</p>
                <button 
                    className="font-funnel primary-text-bg border border-white text-white font-semibold py-2 px-4 rounded hover:bg-g mt-5 active:scale-95"
                    onClick={onOpenInvitation}
                >Open Invitation</button>
            </div>
        </section>
    )
}

export default OpeningSection