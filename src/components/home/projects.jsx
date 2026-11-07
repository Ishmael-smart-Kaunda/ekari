import projects from "../../data/projects"

export default function Projects(){
      return(
          <section className="w-full max-w-6xl mx-auto px-6 lg:px-0">
                <header className="">
                    <small className="text-amber-900 uppercase text-sm my-60">
                        RECENT WORK
                    </small>
                    <p className="font-bold font-serif text-[1.65rem] text-[#663399]">
                        Designed for one client at a time.    
                    </p>
                    <p className="text-lg">
                        Every project began with a blank page and a conversation.
                    </p>
             </header>


               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 mt-20">
                 {projects.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <div className="w-full h-60 rounded-2xl overflow-hidden">
                            <img src={item.image} alt={item.imageAlt} className="w-full h-full object-cover" />
                        </div>
                        <h2 className="font-bold tracking-wide font-serif text-[#663399] text-lg">
                            {item.title}
                        </h2>
                        <p className="text-gray-700 font-normal text-base">
                            {item.description}
                        </p>
                    </div>
                ))}
              </div>
          </section>
      )
}