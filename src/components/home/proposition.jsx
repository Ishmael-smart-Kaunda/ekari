import { TiTick } from "react-icons/ti"
import propositions from "../../data/proposition.js"
import { PiX } from "react-icons/pi"

export default function Propositions(){
      return(
          <section className="w-full max-w-6xl mx-auto py-10 px-6 lg:px-0">
              <header className="">
                    <small className="text-amber-900 uppercase text-sm my-60"></small>
                    <p className="font-bold font-serif text-[1.65rem] text-[#663399]">The difference you can feel.</p>
                    <p className="text-lg">Most services ask you to fit the package. Marole does the opposite</p>
             </header>

             {/**propositions */}
                <div className=" grid md:grid-cols-2 gap-8 mt-8">
                    {propositions.map((prop) => (
                        <div key={prop.id} className={`${!prop.custom ? 'border border-amber-900/40 bg-white' : 'bg-[#663399] text-white'} p-6 rounded-lg shadow-md`}>
                        <h3 className="font-bold text-xl mb-4">
                            {prop.title}
                            </h3>
                        <ul className="list-none pl-">
                            {prop.propositions.map((item, index) => (
                                <li key={index} className="flex items-center gap-3 my-3">
                                    <div className={`${!prop.custom ?' bg-red-700' : 'bg-amber-700'} flex shrink-0 size-[20px]  rounded-full`}>
                                         {!prop.custom
                                           ? 
                                           <PiX className="m-auto text-white"/>
                                           :
                                           <TiTick className="m-auto"/>
                                         }
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        </div>
                    ))}
                </div>
              
          </section>
      )
}