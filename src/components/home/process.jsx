import processData from "../../data/process.js"

export function Process() { 
    return (
        <section className="w-full py-10 max-w-6xl mx-auto px-6 lg:px-0">
              <p className="mx-auto w-fit uppercase text-xs my-10 lg:my-20 font-semibold">MEASURED TO YOU</p>
              <h1 className="font-bold font-serif text-[1.65rem] text-[#663399] leading-tight">
                  Not a package. A process.
              </h1>
              <small className="text-base my-6 ">Four steps, each guided by what you want.</small>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
                 {processData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <div className="text-[2rem] text-amber-900 font-bold font-serif">
                            0{item.id}
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