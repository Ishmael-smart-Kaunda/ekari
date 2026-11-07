import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import {Link} from "react-router-dom";

export default function Navbar(){
       const [isOpen, setIsOpen] =useState(false)
       const handleOpen = () =>[
            setIsOpen(!isOpen)
       ]
       return(
        <section className="">
          <div className="fixed top-0 z-50 w-full bg-[#e6e6fa]/70 backdrop-blur-sm px-4 lg:px-0">
                {/*container */}
                <div className="w-full max-w-6xl mx-auto flex justify-between items-center py-3 border-b border-gray-300">
                    {/*logo */}
                    <Link to='/' onClick={()=>setIsOpen(false)} className="w-fit flex items-center gap-2">
                          <div className="flex rounded-full bg-[#663399] size-10">
                             <p className="m-auto font-bold text-white">
                                 E
                             </p>
                          </div>
                          <p className="font-bold text-[#663399]">
                              Mahala
                          </p>
                    </Link>
                    {/**naviagtion */}
                    <nav className="hidden lg:flex gap-6 justify-between items-center text-[#663399] font-light text-base">
                        <Link to="/" className="hover:underline tracking-wider">
                            Home
                        </Link>
                        <Link to="/" className="hover:underline tracking-wider">
                            Services
                        </Link>
                        <Link to="/contact" className="hover:underline tracking-wider">
                            Contact
                        </Link>
                        <Link to="/blog" className="hover:underline tracking-wider">  
                            Blog    
                        </Link>

                        <a href="https://wa.me/+265981457286" className="px-4 py-2 rounded-full  bg-[#663399] hover:bg-[#663399] font-bold text-white">
                            WhatsApp
                        </a>
                    </nav>

                    {/*menu icon */}
                    <div onClick={handleOpen} className="lg:hidden shadow-md rounded-md p-2">
                        { !isOpen
                          ?
                          <HiMenuAlt2 className="size-4"/>
                          :
                          <HiX className="size-4"/>
                         }
                       
                    </div>
                    
                </div>
          </div>

          {/*menu container */}
             
                <div className={`w-full fixed top-18 left-1/2 bg-white/80 backdrop-blur-sm h-[100vh] ${isOpen ? '-translate-x-1/2 opacity-100' : 'translate-x-[120%] opacity-0'} transitiona-all duration-500 lg:hidden`}>
                  <div className="relative w-[95%] mx-auto h-[85vh] rounded-xl bg-[#4B0082]">
                      <nav className="flex flex-col px-8 py-6">
                        <Link to='/' onClick={handleOpen } className="font-bold font-serif text-[1.25rem] text-white py-3 border-b border-dashed border-purple-600">
                            Home
                        </Link>

                        <Link to='/services' onClick={handleOpen } className="font-bold font-serif text-[1.25rem] text-white py-3 border-b border-dashed border-purple-600">
                            Services
                        </Link>

                        <Link to='/blog' onClick={handleOpen } className="font-bold font-serif text-[1.25rem] text-white py-3 border-b border-dashed border-purple-600">
                            Blog
                        </Link>

                        <Link to='/contact' onClick={handleOpen } className="font-bold font-serif text-[1.25rem] text-white py-3 border-b border-dashed border-purple-600">
                            Contact
                        </Link>
                      </nav>
                      
                      {/* */}
                      <div className="w-full px-8 py-6">
                          <a href="/" className="">
                            <div  className="w-[100%] text-center text-lg rounded-full px-4 py-2 bg-white font-semibold text-[#4B0082]">
                                Start your brief
                            </div>
                          </a>

                          <p className="mt-3 text-center font-light text-white tracking-wide">
                              Custom-made, around you
                          </p>

                      </div>

                      {/*contact */}
                      <div className="absolute bottom-5 w-[95%] left-1/2 -translate-x-1/2  h-30 px-6 py-3 text-white border border border-white/30 rounded-xl">
                             <p className="tex-[1.25rem] font-bold font-serif text-white tracking-wide">
                                Prefer to talk?
                             </p>

                             <span className="flex items-center gap-2 mt-4">
                                <FaWhatsapp className="size-5 "/>
                                <a href="https://wa.me" className="">
                                   +265 981 457 286
                                 </a>
                             </span>

                             <span className="flex items-center gap-2 mt-1">
                                <CiMail className="size-5 "/>
                                <a href="mailto:" className="italic">
                                   Ekari@Emahala.com
                                 </a>
                             </span>
                      </div>
                    </div>
                </div>
        </section>
       )
}