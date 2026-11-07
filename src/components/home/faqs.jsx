import { CgChevronDown } from "react-icons/cg"
import faqs from "../../data/faqs"
import { useState } from "react"

export default function Faqs(){
         
         const [isExpanded, setIsExpanded] = useState(null)
         const handleExpansion = (id) =>{
               
               setIsExpanded(isExpanded!=id ? id: null)
               console.log(isExpanded)
               console.log(id)
         }



          return(
              <section className="w-full max-w-6xl mx-auto px-6 lg:px-0 pb-20 lg:my-20">
                    
                <div className="grid md:grid-cols-2 gap-6">
                    <header className="">
                        <small className="text-amber-900 uppercase text-sm my-60">
                            BEFORE YOU BEGIN
                        </small>
                        <p className="font-bold font-serif text-[1.65rem] text-[#663399]">
                            Good questions.   
                        </p>
                    </header>
                    
                    {/*
                       F.A.Q.s
                     */}
                     <div className="w-full space-y-6">
                         {faqs.map((item)=>
                          <div key={item.id} 
                               onClick={()=>handleExpansion(item.id)}
                               className={`cursor-pointer ${isExpanded === item.id ? 'h-50 lg:h-30' : 'h-20 lg:h-12'}  border border-[#663399]/20 shadow-md p-3 rounded-2xl transition-all duration-500`}>
                             <div className="flex gap-4 justify-between items-start font-semibold">
                                <p className="">
                                   {item.q}
                                </p> 
                                <CgChevronDown className={`shrink-0 ${isExpanded === item.id ? '-rotate-180' : ''} transition-all duration-500 size-5 text-[#663399] border rounded-full`}/>
                             </div>
                             <p className={`${isExpanded === item.id ? 'opacity-100' : 'opacity-0'} mt-3 tracking-wide transition-all duration-500`}>
                                {item.a}
                             </p>
                               
                           </div>
                          )}
                     </div>
                </div>
              </section>
          )
}