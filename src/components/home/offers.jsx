import { FcQuestions } from "react-icons/fc"
import offers from "../../data/offers.js"
import { BiQuestionMark } from "react-icons/bi"

export default function Offers(){
      return(
          <section className="w-full max-w-6xl mx-auto px-6 lg:px-0 py-10">

              <h1 className="font-bold font-serif text-[2.125rem] text-[#663399] leading-tight">
                  Whatever you need, made your way.
              </h1>
            {/**offers */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 mt-10">
                 {offers.map((offer) => (
                    <div key={offer.id} className="flex flex-col gap-4 p-6 rounded-lg shadow-md border border-gray-600/10 p-2 lg:p-6">
                        <div className="text-[2rem] text-amber-900 font-bold font-serif">   
                        {offer.icon}
                        </div>
                        <h2 className="font-bold tracking-wide font-serif text-[#663399] text-lg">
                            {offer.title}
                        </h2>
                        <p className="text-gray-700 font-normal text-base"> 
                            {offer.description}
                        </p>
                    </div>
                 ))}

                 {/** min cta */}

                 <div  className="flex flex-col gap-4 p-6 rounded-lg  bg-amber-50 border border-gray-600/10 text-center p-2 lg:p-6">
                        <div className="text-[2rem] text-amber-900 font-bold font-serif">   
                          <BiQuestionMark className="size-8 font-bold text-[#663399] mx-auto"/>
                        </div>
                        <h2 className="font-bold tracking-wide font-serif text-[#663399]">
                            Something else?
                        </h2>
                        <p className="text-gray-700 font-normal text-base"> 
                            Describe it. We will design 
                            with you.
                        </p>
                </div>
              </div>

          </section>
      )
}