
import testimonials from "../../data/testimonials"
export default function Testimonials(){
     return(
          <section className="w-full max-w-6xl mx-auto px-6 lg:px-0 pb-20">
                <header className="">
                    <small className="text-amber-900 uppercase text-sm my-60">
                        kind words
                    </small>
                    <p className="font-bold font-serif text-[1.65rem] text-[#663399]">
                       What clients say.   
                    </p>

             </header>

              {/*testmonials*/}
                <div className=" grid md:grid-cols-3 gap-6 mt-8">
                    {testimonials.map((item) => (
                    <div key={item.id} className={`px-6 pt-6 rounded-lg shadow-md border border-dashed border-amber-900/70 bg-white`}>
                        <p className="font-normal italic text-lg mb-4 text-sm text-black">
                            {item.testimonial}
                        </p>
                        <footer className="flex gap-2 items-center">
                            <div className="size-10 shrink-0 shadow-md rounded-full overflow-hidden">
                                <img src={item.image} alt={item.imageAlt} className="object-cover" />
                            </div>
                            <div className="flex flex-col gap-2">
                                 <p className="text-sm font-bold tracking-wide">
                                     {item.name}
                                 </p>
                                 
                            </div>
                        </footer>
                    </div>
                    ))}
                </div>
          </section>
     )
}