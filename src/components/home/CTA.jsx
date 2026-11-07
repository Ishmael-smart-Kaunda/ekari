import { Link } from "react-router-dom"

export default function CTA (){
      return(
            <section className="w-full min-h-80 bg-[#663399] text-white px-6 py-20">
                <div className="w-full max-w-3xl mx-auto space-y-6 text-center py-10">
                 <h1 className="text-[2rem] font-bold font-serif text-center">
                       Tell Me what you have in 
                        mind.
                 </h1>
                 <p className="text-lg tracking-wide text-[#e6e6fa] mb-6">
                    Share a few details and receive a plan made only for you.
                 </p>

                 <a href="/" className='mt-12 bg-white text-[#663399]  font-semibold rounded-full px-6 py-3'>
                       Start your brief
                 </a>

            </div>
            </section>
      )
}