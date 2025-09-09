const OpeningSection = () => {

    const basePath = import.meta.env.BASE_URL;

    const params = new URLSearchParams(window.location.search);
    const guestName = params.get("name") || "Tamu Undangan";

    return (
        <section className="section-container primary-bg">
            <p className='font-funnel primary-text'>YOU ARE INVITED TO OUR WEDDING!</p>
            <img src={`${basePath}av_logo.png`} alt="Logo" width={500} height={500} className="mb-6" />
            <p className='font-funnel'>Dear</p>
            <p className='font-funnel'>{guestName}</p>
            <button 
                className="font-funnel primary-text-bg border border-white text-white font-semibold py-2 px-4 rounded hover:bg-g mt-5 active:scale-95"
                onClick={() => {
                    const el = document.getElementById("BrideGroom");
                    if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >Open Invitation</button>
        </section>
    )
}

export default OpeningSection