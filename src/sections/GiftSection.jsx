import { useState } from "react";

const GiftSection = () => {

    const basePath = import.meta.env.BASE_URL;

    const ACCOUNT_NUMBER = "0154331391";

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
        await navigator.clipboard.writeText(ACCOUNT_NUMBER);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // reset setelah 2 detik
        } catch (err) {
        console.error("Gagal copy: ", err);
        }
    };

    return (
        <section className="section-container p-[20px] space-y-8 overflow-hidden">

            <div className="absolute top-0 left-0 w-32 h-32 bg-[url('/corner-leaf.png')] bg-contain bg-no-repeat rotate-180"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[url('/corner-leaf.png')] bg-contain bg-no-repeat "></div>

            <p className="font-funnel primary-text text-[24px]">Wedding Gift</p>
            <p className="font-funnel text-[12px] text-center mb-[18]">Doa Restu anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara cashless.</p>
        
            {/* <div className='primary-bg p-[10px] text-center'>
                <h1 className='font-poiret text-[24px] primary-text font-bold mb-[24px]'>E-Gift</h1>
                <p className='font-delius text-[12px] mb-[36px]'>Your presence and blessings mean the world to us. If you wish to send a gift, please click the button below.</p>
                
                <p className='font-funnel text-[12px] mb-[10px]'>BCA - {ACCOUNT_NUMBER} <br/> Vinsensia Ventilanova</p>
                <button
                    onClick={handleCopy}
                    className="px-[16px] py-[2px] rounded-2xl primary-text bg-white text-white text-[10px] shadow-md hover:bg-primary/80 transition"
                >
                {copied ? "Number Copied!" : "Copy Number"}
                </button>
            </div> */}

            <div className="relative primary-bg p-5 w-full">
                <div className="absolute top-0 left-0 w-14 h-14 bg-[url('/corner-line.png')] bg-contain bg-no-repeat -rotate-90"></div>
                <div className="absolute bottom-0 right-0 w-14 h-14 bg-[url('/corner-line.png')] bg-contain bg-no-repeat rotate-90"></div>

                <img 
                    src={`${basePath}bca.svg`} 
                    alt="bca" 
                    fill  
                    className="h-[20px] mb-4"
                />

                <p className="font-delius text-[18px]">{ACCOUNT_NUMBER}</p>
                <p className="font-delius text-[14] mb-4">Vinsensia Ventilanova</p>

                <button
                    onClick={handleCopy}
                    className="px-[16px] py-[2px] rounded-2xl primary-text bg-white text-white text-[10px] shadow-md hover:bg-primary/80 transition"
                >
                    {copied ? "Number Copied!" : "Copy Number"}
                </button>
            
                {/* <p className="font-funnel text-[18px] mb-[10px] primary-text">{title}</p>
                <p className="font-poiret font-bold text-[14px]">{date}</p>
                <p className="font-poiret text-[12px] mb-[16px]">{time}</p>
                <p className="font-funnel text-[16px] primary-text">{locationName}</p>
                <p className="font-funnel text-[10px]">{locationDetail}</p> */}
            </div>
        </section>
    )
}

export default GiftSection;