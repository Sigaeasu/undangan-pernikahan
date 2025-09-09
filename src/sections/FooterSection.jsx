const FooterSection = () => {

    const basePath = import.meta.env.BASE_URL;

    return (
        <section 
            className="section-container primary-bg py-[50px] px-[20px] bg-cover"
            style={{ backgroundImage: `url(${basePath}av-portrait-1.JPG)` }}
        >
            <h1 className="text-white font-poiret text-[12px]">See You on Our Wedding Day</h1>
            <p className="text-white font-funnel text-[24px]">Adam & Venti</p>
        </section>
    )
}

export default FooterSection;