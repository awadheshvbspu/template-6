import React from 'react'

export default function Footer() {
  return (
    <>
        <div>
        <section id="footer">
            <div class="bg-color-primary-dark relative">
                <div class="container py-10">
                    <div class="grid gap-10 md:grid-cols-3 pb-10">
                        <div class="space-y-6">
                            <h4 class="font-bold text-lg">About App</h4>
                            <p class="leading-relaxed">This Should Be Used To Tell A Story And Include Any Testimonials You Might Have About Your Product Or Service For Your Clients</p>
                            <div class="flex gap-5 items-center">
                                <p>Follow Us</p>
                                    <i class="fa-brands fa-facebook-f cursor-pointer hover:text-color-secondary"></i>
                                    <i class="fa-brands fa-twitter cursor-pointer hover:text-color-secondary"></i>
                                    <i class="fa-brands fa-youtube cursor-pointer hover:text-color-secondary"></i>
                                    <i class="fa-brands fa-instagram cursor-pointer hover:text-color-secondary"></i>
                            </div>
                        </div>
                        <div class="flex justify-between md:justify-around">
                            <div class="space-y-6">
                                <h4 class="font-bold text-lg">Quick Links</h4>
                                <ul class="space-y-3">
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#">Home</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#features">Features</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#testimonial">Testimonial</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#pricing">Pricing</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#blog">Blog</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                            <div class="space-y-6">
                                <h4 class="font-bold text-lg">Help</h4>
                                <ul class="space-y-3">
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#">About Us</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#features">Partners</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#testimonial">Career</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#pricing">Reviews</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#blog">Terms & Conditions</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#contact">Help</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="space-y-6">
                            <h4 class="font-bold text-lg">Newsletter</h4>
                            <p class="leading-relaxed">Subscribe With Email And Loads Of News Will Be Sent To You</p>
                            <div class="flex items-center">
                                <input type="text" class="w-3/4 text-color-gray bg-color-white p-2 lg:p-3 rounded-l-md focus:outline-none" placeholder="Enter Your Email"/>
                                
                                <button type="submit" class="bg-color-secondary px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center pt-10 border-t border-color-gray">
                        <p>2023 &copy; LightCode. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </>
  )
}
