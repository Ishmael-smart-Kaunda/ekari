

export default function Hero() {
  return (

      <div className="w-full  flex min-h-[90vh] font-bold text-3xl mt-16">
           {/* Hero Content */}
           <div className="w-full max-w-6xl  m-auto px-4 lg:px-0">
              {/*badge */}
              <span className="uppercase tracking-widest text-xs ">
                 CUSTOM-MADE, FROM start to finish
               </span>

               <div className="w-full  grid md:grid-cols-2 gap-4 lg:gap-12 mt-4">
                 <div className="">
                    <p className="text-start font-bold font-serif text-[2.5rem] leading-tight">
                        Made around <strong className="text-amber-900">you</strong>. 
                        <br className="" />
                        Never off the 
                        <br className="" />
                        shelf.
                    </p>

                    <p className="mt-4 font-light text-lg">
                        Mahala designs weddings, menus and celebrations from 
                        scratch, shaped by your story, your tastes and the people 
                        you love. No packages. No templates. Just yours.
                    </p>

                    {/**cta buttons */}
                    <div className="font-semibold text-base mt-6 flex flex-col md:flex-row gap-4">
                         <a href="/" className="w-fit px-6 py-2 bg-[#663399] text-white rounded-full hover:bg-[#552288] transition-colors">
                            Start your brief
                         </a>

                         <a href="/" className="w-fit px-6 py-2 border-dashed border border-[#663399] text-[#663399] rounded-full hover:text-white transition-colors">
                            Explore how it works
                         </a>
                    </div>
                 </div>
                 <div className="h-[400px] overflow-hidden w-full border border-dashed bg-gray-200 rounded-4xl">
                    <figure className="">
                        <img src="https://i.pinimg.com/1200x/97/6c/5e/976c5e4a29d30ef86208c6a02b91ef14.jpg" alt="mahala" className="object-cover" />
                    </figure>
                 
                 </div>
               </div>



            </div>
      </div>
  
  )
}