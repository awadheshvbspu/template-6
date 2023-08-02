import React from 'react'

export default function Navbar() {
  return (
    <>
        <header className="sticky top-0 z-50">
        <nav className="container flex justify-between items-center">
            <div className="py-5 text-color-secondary font-bold text-3xl">
                <a href="#home">
                    <span className="text-color-white">Light</span>Code.
                </a>
            </div>
            <div>
                <ul className="hidden lg:flex items-center space-x-6">
                    <li><a href="#home" className="hover:text-color-secondary ease-in duration-200">Home</a></li>
                    <li><a href="#features" className="hover:text-color-secondary ease-in duration-200">Features</a></li>
                    <li><a href="#testimonial" className="hover:text-color-secondary ease-in duration-200">Testimonial</a></li>
                    <li><a href="#pricing" className="hover:text-color-secondary ease-in duration-200">Pricing</a></li>
                    <li><a href="#blog" className="hover:text-color-secondary ease-in duration-200">Blog</a></li>
                    <li><a href="#contact" className="hover:text-color-secondary ease-in duration-200">Contact</a></li>
                    <li><button className="bg-color-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">free trial</button></li>
                </ul>
            </div>
            {/* <!-- Mobile screen  --> */}
            <div id="hamburger" className="lg:hidden cursor-pointer z-50">
                <i className="fa-solid fa-bars"></i>
            </div>
            <div id="menu" className="hidden bg-color-primary-dark h-[100vh] absolute inset-0">
                <ul className="h-full grid place-items-center py-20">
                    <li><a id="hLink" href="#home" className="hover:text-color-secondary ease-in duration-200">Home</a></li>
                    <li><a id="hLink" href="#features" className="hover:text-color-secondary ease-in duration-200">Features</a></li>
                    <li><a id="hLink" href="#testimonial" className="hover:text-color-secondary ease-in duration-200">Testimonial</a></li>
                    <li><a id="hLink" href="#pricing" className="hover:text-color-secondary ease-in duration-200">Pricing</a></li>
                    <li><a id="hLink" href="#blog" className="hover:text-color-secondary ease-in duration-200">Blog</a></li>
                    <li><a id="hLink" href="#contact" className="hover:text-color-secondary ease-in duration-200">Contact</a></li>
                    <li><button className="btn">free trial</button></li>
                </ul>
            </div>
        </nav>
    </header>
    </>
  )
}
