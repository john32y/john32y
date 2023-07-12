
export default function MovieCard({ movie, genre }){
    return(
      <>
       <div key={movie.id} className="p-4 sm:w-1/2 lg:w-1/3">
                <div className="flex relative">
                  <img src={movie.posterURL} alt={movie.title} className="absolute inset-0 w-full h-full object-cover object-center" />
                  <div className="px-8 py-10 relative z-10 w-full opacity-0 bg-zinc-900 border-4 border-zinc-400 hover:opacity-100 transistion">
                    <h4 className="text-lg title-font font-md text-orange-400 mb-1 ">{genre}</h4>
                    <h3 className="text-lg title-font font-md text-zinc-50 mb-1 ">{movie.title}</h3>
                    <h4 className="text-sm title-font font-md text-zinc-500 mb-1 ">learn more</h4>
                  </div>
                </div>
              </div>
      </>
    )
  }