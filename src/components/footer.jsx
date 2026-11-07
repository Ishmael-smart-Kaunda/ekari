import { CiMapPin } from "react-icons/ci"
import { FaMap } from "react-icons/fa6"
import { LuMapPin } from "react-icons/lu"
import { Link } from "react-router-dom"
export default  function Footer(){

      const year = new  Date()
      const   currentYear = year.getFullYear()
      return(
          <section className="relative w-full h-[90vh] bg-[#cec8ef] py-10 px-4 lg:px-0">

             <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 gap-6 ">

                <div className="">
                    <h2 className="font-bold font-serif text-[2.125rem] text-black [#663399] leading-tight">
                        Mahala
                    </h2>   
                    <p className="mt-6 leading-tight">
                        Customazation. Services and Products designed around you.
                    </p>
                </div>
                <div className="">
                    <h2 className="text-amber-900 uppercase tracking-wide font-semibold">
                         EXPLORE
                    </h2>
                    <ul className="flex flex-col gap-2 mt-4 text-lg tracking-wide">
                         <Link to='/' className="">
                            Home
                         </Link>

                         <Link to='/' className="">
                            Services
                         </Link>

                         <Link to='/' className="">
                            Blog
                         </Link>

                         <Link to='/' className="">
                            Contact
                         </Link>
                    </ul>
                </div>
                <div className="">
                    <h2 className="text-amber-900 uppercase tracking-wide font-semibold ">
                        get in touch
                    </h2>
                     <ul className="flex flex-col gap-2 mt-4 text-lg tracking-wide text-sm">
                         <a href="/"  className="font-semibold">
                            ekari@mahala.com
                         </a>
                         <a href="/"  className="text-sm font-semibold">
                            +265 981 457 286
                         </a>
                         <a href="/"  className="flex items-center gap-3 font-semibold">
                          <LuMapPin className="size-5 "/>  
                          <p className="">Blantyre</p>
                         </a>


                    </ul>

                </div>
             </div>

             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-4 lg:px-0 w-full max-w-6xl mx-auto border-t border-dashed border-gray-500/20 py-6 ">
                 <p className="">
                    © {currentYear} Mahala. All rights reserved.
                 </p>
             </div>
          </section>
      )
}