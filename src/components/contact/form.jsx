import { useState } from "react"
import colors from "../../data/colors"
import { BiPlus } from "react-icons/bi"
const services =[
     {
        id:1,
        title:'wedding',
     },
     {
        id:2,
        title:'Birthday',
     },
     {
        id:3,
        title:'Corporate',
     },
     {
        id:4,
        title:'Food and menus',
     },
     {
        id:5,
        title:'Something else',
     },
]



export default function Form(){

      const [isSelected, setIsSelected] = useState(1)
      const handleSelected = (id) =>{
          setIsSelected(isSelected!= id ? id : null)
          console.log(isSelected)
      }
       const [isChoosen, setIsChoosen] = useState(null)
       const handleIsChoosen= (id) =>{
          setIsChoosen(isChoosen!= id ? id : null)
          console.log(isChoosen)
      }
      return(
           <form action="" className="w-full p-6">
                  <h2 className="text-[1.25rem] my-3 font-bold font-serif">
                      Your brief
                  </h2>
                 {/*name and email/phone */}
                 <fieldset className="grid md:grid-cols-2 gap-4 mt-4 font-semibold">
                      <label htmlFor="" className="flex flex-col gap-3 ">
                          Full name
                          <input type="text"  
                                 name="fullName" 
                                 className="outline-none focus:outline-border border border-amber-900/20 p-2 rounded-md" 
                                 placeholder="Your name"
                               />
                      </label>

                      <label htmlFor="" className="flex flex-col gap-3">
                          Phone
                          <input 
                              type="text" 
                              name="phone" 
                              className="outline-none focus:outline-border border border-amber-900/20 p-2 rounded-md" 
                              placeholder="Your phone number"
                              />
                      </label>
                      
                      <label htmlFor="" className="flex flex-col gap-3">
                          Email (optional)
                          <input 
                              type="email" 
                              name="email" 
                              className="outline-none focus:outline-border border border-amber-900/20 p-2 rounded-md" 
                              placeholder="Your email"
                              />
                      </label>
                 </fieldset>

                    {/*orders */}
                 <h2 className="font-bold font-serif text-[1rem] text-[] mt-12 my-6">
                     What are we making?
                 </h2>
                 <fieldset className="flex gap-4 flex-wrap mt-4 font-semibold">
                       {services.map((item)=>
                         <div key={item.id}
                              onClick={()=>handleSelected(item.id)} 
                    
                              className={`cursor-pointer ${isSelected ===item.id ? 'bg-[#4B0082] text-white' : ''} border px-4 py-2 rounded-full text-sm`}>
                              {item.title}
                         </div>
                       )}
                 </fieldset>

                    {/*colors*/}
                 <h2 className="font-bold font-serif text-[1rem] text-[] mt-12 my-6">
                     place your favorite pellete
                 </h2>
                 <fieldset className="flex gap-2 flex-wrap mt-4 font-semibold">
                       {colors.map((item)=>
                         <div key={item.id}
                              onClick={()=>handleIsChoosen(item.id)} 
                              className={`${isChoosen===item.id ? 'border border-2 border-red-800' : ''} shrink-0 size-6 cursor-pointer rounded-full text-sm`}
                              style={{backgroundColor:item.color}}
                              >
                         </div>
                       )}
                       <div className={`flex shrink-0 size-6 cursor-pointer border bg-black rounded-full text-sm`}>
                          <BiPlus className="m-auto size-5 text-white"/>
                        </div>
                 </fieldset>

                 <fieldset className=" mt-4 font-semibold">
                    <h2 className="font-bold font-serif text-[1rem] text-[] mt-12 my-6">
                       Let me know your idea
                    </h2>
                    <textarea name="text" id="" rows={4} className="w-full border rounded-md p-3 outline-none focus:outline-none" placeholder="Type your message">

                    </textarea>
                 </fieldset>

           </form>
      )
}