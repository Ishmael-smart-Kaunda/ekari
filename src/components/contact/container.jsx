import Form from "./form"
export default function Container(){
      return(
           <section className="w-full max-w-6xl mx-auto  px-6 lg:px-0 my-10 lg:my-20">
                 {/*content */}
                 <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/*form container*/}
                      <div className="w-full h-full lg:col-span-2 border border-dashed rounded-2xl">
                          <Form/>
                      </div>

                      {/*contact details */}
                      <div className="w-full h-full">
                          <div className="w-full p-6 rounded-2xl bg-[#4B0082] text-[#e6e6fa] space-y-6">
                               <h2 className="text-[1.25rem] font-bold font-serif ">
                                   A personal reply to every 
                                   brief.
                               </h2>
                               <p className="text-base">
                                  Whether you send one line or ten, Mahala 
                                  will come back with thoughtful questions 
                                  to shape your idea.
                               </p>
                              
                          </div>

                          <div className="mt-6 w-full p-6 rounded-2xl border border-dashed space-y-6">
                               <h2 className="text-[1.25rem] font-bold font-serif ">
                                   Prefer to talk?
                               </h2>

                               <ul className="space-y-3">
                                  <li className="">
                                      <p className="uppercase text-sm text-amber-900">
                                          whatsapp
                                      </p>
                                      <a href="https//wa.me" className="font-semibold text-xs">
                                         +265 981 457 286
                                      </a>
                                  </li>

                                  <li className="">
                                      <p className="uppercase text-sm text-amber-900">
                                          Phone
                                      </p>
                                      <a href="tel:" className="font-semibold text-xs">
                                         +265 981 457 286
                                      </a>
                                  </li>

                                  <li className="">
                                      <p className="uppercase text-sm text-amber-900">
                                          email
                                      </p>
                                      <a href="mailto:" className="font-semibold text-sm">
                                         ekari@emahala.com
                                      </a>
                                  </li>

                                  <li className="">
                                      <p className="uppercase text-sm text-amber-900">
                                         based in
                                      </p>
                                      <p className="font-semibold text-sm">
                                         Blantyre
                                      </p>
                                  </li>

                                  <li className="bg-black text-[#e6e6fa] p-3 rounded-xl mt-6">
                                      <p className="uppercase font-bold text-sm text-white">
                                        available
                                      </p>
                                      <div className="mt-3 space-y-2">
                                        <span className="flex gap-3 font-semibold text-xs">
                                            <p className="">Dates : </p>
                                            <p className="">Monday - Friday</p>
                                        </span>

                                        <span className="flex gap-3 font-semibold text-xs">
                                            <p className="">Time : </p>
                                            <p className="">07:00 am - 05:30 pm</p>
                                        </span>
                                      </div>
                                      
                                  </li>
                               </ul>
                              
                          </div>
                          
                      </div>
                 </div> 
           </section>
      )
}