import { Link } from "react-router-dom";
import blogs from "../../data/blog";

export default function Articles(){
      return(
           <section className="w-full max-w-6xl mx-auto px-6 lg:px-0 pb-20 lg:my-20">
                      <header className="w-full justify-between items-end flex">
                            <p className="font-bold font-serif text-[1.65rem] text-[#663399]">
                                From the journal.  
                            </p> 
                            <Link to='/' className="text-amber-900 font-semibold text-sm leading-relaxed underline">
                                find more articles
                            </Link>
                       </header>
                       {/**offers */}
                        <div className="grid md:grid-cols-3 gap-4 lg:gap-8 mt-10">
                            {blogs.map((article) => (
                                <div key={article.id} className="flex flex-col gap-4 p-6 rounded-lg shadow-md border border-gray-600/10 p-2 lg:p-6">
                                    <small className="border-b pb-2 uppercase text-[1.25rem] text-amber-900 font-light font-serif">   
                                      {article.category}
                                    </small>
                                    <h2 className="font-bold tracking-wide font-serif text-[#663399] text-lg">
                                        {article.title}
                                    </h2>
                                    <p className="text-gray-700 font-normal text-base"> 
                                        {article.excerpt}
                                    </p>

                                    <Link to={`/${article.slug}`}>
                                        Learn more
                                    </Link>
                                </div>
                            ))}
                       </div>


          </section>
      )
}