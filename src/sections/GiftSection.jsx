import { useState } from "react";

const GiftSection = () => {
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
        
            <div className='primary-bg p-[10px] text-center'>
            <h1 className='font-poiret text-[24px] primary-text font-bold mb-[24px]'>E-Gift</h1>
            <p className='font-delius text-[12px] mb-[36px]'>Your presence and blessings mean the world to us. If you wish to send a gift, please click the button below.</p>
            
            <p className='font-funnel text-[12px] mb-[10px]'>BCA - {ACCOUNT_NUMBER} <br/> Vinsensia Ventilanova</p>
            <button
                onClick={handleCopy}
                className="px-[16px] py-[2px] rounded-2xl primary-text bg-white text-white text-[10px] shadow-md hover:bg-primary/80 transition"
            >
            {copied ? "Number Copied!" : "Copy Number"}
            </button>
            </div>
        </section>
    )
}

export default GiftSection;