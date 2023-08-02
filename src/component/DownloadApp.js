import React from 'react';
import store from '../assests/ios-store-dark.png';
import dark from '../assests/g-play-dark.png'

export default function DownloadApp() {
  return (
    <>
        <div>
        <section id="download-app" class="bg-color-primary-light">
            <div class="container h-[80vh] grid place-items-center">
                <div class="text-center md:w-2/3 m-auto">
                    <h1 class="title">Download App Now And Save Your Money</h1>
                    <p class="leading-relaxed pt-5">Serving an impressive list of long-term money with experience and expertise in multiple industries.</p>
                    <div class="flex flex-col md:flex-row items-center justify-center gap-5 pt-10">
                        <a href="#" class="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70">
                            <img src={store} alt=""/>
                        </a>
                        <a href="#" class="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70">
                            <img src={dark} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </>
  )
}
