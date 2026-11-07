

export default function About(){
        return(
              <section className="w-full max-w-6xl mx-auto pl-6 lg:px-0 py-10 my-40">
                    <div className="grid md:grid-cols-2 gap-6">
                          {/*author image */}
                          <div className="w-full h-full py-2">
                               <div className="w-full md:w-[80%] mx-auto h-full rounded-t-full overflow-hidden">
                                  <img src="https://i.pinimg.com/1200x/73/4b/e5/734be55b9121770a80f64d3e8b01a955.jpg"
                                    alt="mahala" className="rounded-b-2xl object-cover" />
                               </div>
                          </div>

                          <div className="w-full h-full pt-12 lg:pt-34 space-y-6">
                               <small className="text-amber-900 uppercase text-sm my-60">
                                    MEET MAHALA
                                </small>
                                <p className="font-bold font-serif text-[1.65rem] text-black [#663399] leading-tight">
                                   No two stories are alike, so no two plans 
                                   should be.   
                                </p>
                                <p className="text-lg tracking-wide">
                                    I began designing custom experiences because I kept seeing 
                                    people squeeze their dreams into ready-made options. Here it 
                                    works the other way round: I listen first, then build everything 
                                    around you.
                                </p>

                                {/*CTA */}
                                <footer className="flex flex-col gap-4 mt-12">
                                     <span className="font-bold italic text-[#663399]">
                                          Ekari <b className="text-black amber-900">Mahala</b>
                                     </span>
                                     
                                     <a href="/" className="w-fit font-semibold border border-[#663399]/70 rounded-full hover:bg-[#663399] hover:text-white transtion-all duration-500 px-6 py-2">
                                        Say Hie 👋
                                     </a>
                                </footer>


                          </div>
                    </div>
              </section>
        )
}