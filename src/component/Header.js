import React from 'react';
import image1 from '../assests/hero4.png';
import image2 from '../assests/hero3.png'

export default function Header() {
  return (
    <>
        <div>
        <section id="home" className="relative">
            <div className="blob1"></div>
            <div className="blob2"></div>
            <div className="container py-20">
                <div className="flex flex-col items-center z-20 md:flex-row">
                    <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
                        <h1 className="title mb-4">Awesome App for Your Financial.</h1>
                        <p className="leading-relaxed mb-10">This should be used to tell a story and let your users know a little more about app and it’s use, How can benefit them.</p>
                        <button className="btn">Download app</button>
                    </div>
                    <div className="md:w-1/2">
                        <img src={image1} alt=""/>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="saving-money">
            <div className="container py-10 relative">
                <div className="blob1"></div>
                <div className="blob2"></div>
                
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="mb-12 md:w-1/2">
                        <img src={image2} alt=""/>
                    </div>
                    <div className="text-center md:text-left md:w-1/2 md:ml-20">
                        <h4 className="font-bold text-color-secondary mb-4">Saving Money</h4>
                        <h1 className="title mb-4">Best Financing App To Save Your Money</h1>
                        <p className="leading-relaxed mb-10">Best financing app ever in the world. Easy to use and very user friendly for mobile banking. You can control your card easily and send money some one just one click.</p>
                        <button className="btn">Read More</button>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </>
  )
}
