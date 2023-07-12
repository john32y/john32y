import MovieCard from "./MovieCard"
async function getData(genre) {
  const res = await fetch(`https://api.sampleapis.com/movies/${genre}`)
  return res.json()
}
//done like this so im able to cache the data
export default async function MovieScroll({ genre, number }) {
  const allmovies = await getData(genre)
  const movies = allmovies.slice(allmovies.length - number)
  return (
    <section className="text-zinc-400 ">
      <div className="container px-5 py-12 mx-auto">
      <h2 className="capitalize font-medium title-font mb-4 text-zinc-50 text-xl"> {genre} </h2>
        <div className="flex flex-wrap -m-0">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} genre={genre}/>
          ))}
        </div>
      </div>
    </section>
  )
}
