import React from 'react';
import Blog1 from '../assests/blog1.jpg';
import Blog2 from '../assests/blog2.jpg';
import Blog3 from '../assests/blog3.jpg';

export default function Blog() {
  return (
    <>
        <div>
        <section id="blog">
            <div class="container py-20">
                <div class="text-center m-auto mb-20 md:w-1/2">
                    <h4 class="font-bold text-color-secondary mb-4">Innovation And Quality Improvement</h4>
                    <h1 class="title">Latest Updates, Solutions And Company News</h1>
                </div>
                <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {/* <!-- card no 1 --> */}
                    <div>
                        <div class="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                            <img src={Blog1} alt="" class="lg:h-full w-full hover:scale-125 transition duration-500 ease-in-out"/>
                        </div>
    
                        <div>
                            <div class="flex items-center gap-5 py-5">
                                <p>20 August 2022</p>
                                <p>1 min read</p>
                            </div>
    
                            <a href="#blog" class="text-2xl font-bold underline hover:text-color-secondary hover:no-underline">Four ways to cheer yourself up on Blue Monday!</a>
    
                            <p class="leading-relaxed my-5">On the second edition of Serious Business, Inc. editor Jim Ledbetter and Fusion senior editor Salmon debate...</p>
    
    
                            <a href="#blog" class="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out">
                                <span class="tracking-wider capitalize underline hover:no-underline">Read more</span>
                            </a>
                        </div>
                    </div>
                    {/* <!-- card no 2 --> */}
                    <div>
                        <div class="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                            <img src={Blog2} alt="" class="lg:h-full w-full hover:scale-125 transition duration-500 ease-in-out"/>
                        </div>
    
                        <div>
                            <div class="flex items-center gap-5 py-5">
                                <p>20 August 2022</p>
                                <p>1 min read</p>
                            </div>
    
                            <a href="#blog" class="text-2xl font-bold underline hover:text-color-secondary hover:no-underline">How to Organize Your budget for Maximum Productivity?</a>
    
                            <p class="leading-relaxed my-5">Global provider connected products for consumers, and enterprises worldwide, supply chain control is everything...</p>
    
    
                            <a href="#blog" class="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out">
                                <span class="tracking-wider capitalize underline hover:no-underline">Read more</span>
                            </a>
                        </div>
                    </div>
                {/* <!-- card no 3 --> */}
                <div>
                    <div class="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                        <img src={Blog3} alt="" class="lg:h-full w-full hover:scale-125 transition duration-500 ease-in-out"/>
                    </div>
                    <div>
                        <div class="flex items-center gap-5 py-5">
                            <p>20 August 2022</p>
                            <p>1 min read</p>
                        </div>
                        <a href="#blog" class="text-2xl font-bold underline hover:text-color-secondary hover:no-underline">Should Small Businesses Be Entitled to system?</a>
                        <p class="leading-relaxed my-5">Our team provides skilled & experienced managers who know the intricacies of this vertical and focus...</p>
                        <a href="#blog" class="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out">
                            <span class="tracking-wider capitalize underline hover:no-underline">Read more</span>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </div>
    </>
  )
}
