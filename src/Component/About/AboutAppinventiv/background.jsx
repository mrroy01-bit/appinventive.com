import React from 'react';
import BackVid from '../../../assest/about/we_appin.mp4';
const VisionSection = () => {
return (
    <section className="flex items-center justify-center w-full  p-4 bg-black sm:p-8 md:p-12">
        <div className="relative w-[60vw] h-[40vw] max-w-6xl mt-10 ">
            <div className="w-full overflow-hidden rounded-[40px] shadow-2xl aspect-video bg-center bg-cover">
                <video
                    className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
                    src={BackVid}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
        </div>
        <div className="absolute w-full inset-0 flex items-center justify-center p-4 text-center mt-5">
            <h1 className="text-5xl font-normal text-white sm:text-5xl md:text-6xl lg:text-6xl leading-loose">
                Meet The Vision Of <span className="font-bold">1600 Humans </span>Whose
                <br />
                Action Built <span className="font-bold">3000+ Digital Masterpieces</span>
            </h1>
        </div>
    </section>
);
};

export default VisionSection;
