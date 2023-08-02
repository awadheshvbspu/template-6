import React from 'react'
import { FaBookmark } from 'react-icons/fa'

export default function Pricing() {
  return (
    <>
        <div>
        <section id="pricing" class="bg-color-primary-light">
            <div class="container py-20">
                <div class="text-center m-auto mb-20 md:w-1/2">
                    <h4 class="font-bold text-color-secondary mb-4">Pricing</h4>
                    <h1 class="title">Get In Reasonable Price</h1>
                    {/* <!-- Rounded switch  --> */}
                    <div class="mt-5 flex items-center justify-center gap-4">
                        <p>Bill Monthly</p>
                        <label class="cursor-pointer relative inline-block w-20 h-8 rounded-full">
                            <input type="checkbox" id="toggleBtn" class="peer opacity-0 w-0 h-0"/>
                            <span class="absolute top-0 left-0 right-0 bottom-0 bg-color-primary-light border border-solid border-color-gray rounded-full duration-300 before:content-[''] before:absolute before:w-6 before:h-6 before:bottom-1 before:left-1 before:rounded-full before:bg-color-white before:duration-300 peer-checked:before:translate-x-12 peer-checked:bg-color-secondary"></span>
                        </label>
                        <p>Bill Anually</p>
                    </div>
                </div>
                <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {/* <!-- card 1 --> */}
                    <div class="card relative h-auto w-auto">
                        {/* <!-- front side  --> */}
                        <div id="card_1_front" class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    20<span class="text-sm font-normal tracking-widest">/per month</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Basic</h3>
                                <p class="leading-relaxed">For Beginner Who Want To Scale Business Globaly</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <FaBookmark className='text-color-secondary'/>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <FaBookmark className='text-color-secondary' />
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <FaBookmark className='text-color-gray' />
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <FaBookmark className='text-color-gray' />
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <FaBookmark className='text-color-gray' />
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                        {/* <!-- back side  --> */}
                        <div id="card_1_back" class="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    120<span class="text-sm font-normal tracking-widest">/per month</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Basic</h3>
                                <p class="leading-relaxed">For Beginner Who Want To Scale Business Globaly</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <FaBookmark className='text-color-secondary'/>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <FaBookmark className='text-color-secondary' />
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <FaBookmark className='text-color-gray' />
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <FaBookmark className='text-color-gray' />
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <FaBookmark className='text-color-gray' />
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                    </div>
                    {/* <!-- card 2 --> */}
                    <div class="card relative h-auto w-auto">
                        {/* <!-- front side  --> */}
                        <div id="card_2_front" class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    50<span class="text-sm font-normal tracking-widest">/per month</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Standard</h3>
                                <p class="leading-relaxed">For Beginner Who Want To Scale Business Globaly</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <FaBookmark className='text-color-secondary'/>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <FaBookmark className='text-color-secondary' />
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <FaBookmark className='text-color-gray' />
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <FaBookmark className='text-color-gray' />
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <FaBookmark className='text-color-gray' />
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                        {/* <!-- back side  --> */}
                        <div id="card_2_back" class="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    150<span class="text-sm font-normal tracking-widest">/per month</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Standard</h3>
                                <p class="leading-relaxed">For Beginner Who Want To Scale Business Globaly</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <FaBookmark className='text-color-secondary'/>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <FaBookmark className='text-color-secondary' />
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <FaBookmark className='text-color-gray' />
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <FaBookmark className='text-color-gray' />
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <FaBookmark className='text-color-gray' />
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                    </div>
                    {/* <!-- card 3 --> */}
                    <div class="card relative h-auto w-auto">
                        {/* <!-- front side  --> */}
                        <div id="card_3_front" class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    100<span class="text-sm font-normal tracking-widest">/per month</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Basic</h3>
                                <p class="leading-relaxed">For Beginner Who Want To Scale Business Globaly</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <FaBookmark className='text-color-secondary'/>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <FaBookmark className='text-color-secondary' />
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <FaBookmark className='text-color-gray' />
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <FaBookmark className='text-color-gray' />
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <FaBookmark className='text-color-gray' />
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                        {/* <!-- back side  --> */}
                        <div id="card_3_back" class="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    500<span class="text-sm font-normal tracking-widest">/per month</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Premium</h3>
                                <p class="leading-relaxed">For Beginner Who Want To Scale Business Globaly</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
     
    
        </div>
    </>
  )
}
