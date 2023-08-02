import React, { useState } from 'react';
import user1 from '../assests/user1.jpg'
import user2 from '../assests/user2.jpg'
import user3 from '../assests/user3.jpg'
import user4 from '../assests/user4.jpg'
import user5 from '../assests/user5.jpg'

export default function Testimonial() {

    const [update,setUpdate] = useState('')


    const showReview = () =>{
        setUpdate(!update)
    }
  return (
    <>
        <div>
        <section id="testimonial">
            <div class="container py-20">
                <div class="text-center m-auto mb-20 md:w-1/2">
                    <h4 class="font-bold text-color-secondary mb-4">User Review</h4>
                    <h1 class="title">What Clients Say About Our App After Use It</h1>
                </div>
                {/* <!-- review container  --> */}
                <div class="mt-8">
                    <div class="flex items-center justify-center flex-wrap">
                        <img src={user1} alt="" class="h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic active-pic" />
                        <img src={user2} alt="" class="h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic" onClick={showReview} />
                        <img src={user3} alt="" class="h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic" />
                        <img src={user4} alt="" class="h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic" />
                        <img src={user5} alt="" class="h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic" />
                    </div>
                    <div class="grid place-items-center text-center m-auto md:w-4/5 min-h-[40vh]">
                        <div class="user-text active-text">
                            <p class="md:text-2xl mb-6">"This should be used to tell a story and include any testimonials you might have about your product or service for your clients"!</p>
                            <h4 class="font-bold text-color-secondary mb-1">Markin Nesus</h4>
                            <p>IOS developer</p>
                        </div>
                        <div class="user-text">
                            <p class="md:text-2xl mb-6">"This should be used to tell a story and include any testimonials you might have about your product or service for your clients"!</p>
                            <h4 class="font-bold text-color-secondary mb-1">Vera Duncan</h4>
                            <p>Flutter developer</p>
                        </div>
                        <div class="user-text">
                            <p class="md:text-2xl mb-6">"This should be used to tell a story and include any testimonials you might have about your product or service for your clients"!</p>
                            <h4 class="font-bold text-color-secondary mb-1">Pirtle Karol</h4>
                            <p>Android developer</p>
                        </div>
                        <div class="user-text">
                            <p class="md:text-2xl mb-6">"This should be used to tell a story and include any testimonials you might have about your product or service for your clients"!</p>
                            <h4 class="font-bold text-color-secondary mb-1">Mark Joe</h4>
                            <p>React developer</p>
                        </div>
                        <div class="user-text">
                            <p class="md:text-2xl mb-6">"This should be used to tell a story and include any testimonials you might have about your product or service for your clients"!</p>
                            <h4 class="font-bold text-color-secondary mb-1">Leila Domniuc</h4>
                            <p>Angular developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
       
        </div>
    </>
  )
}
