import { movies } from "./data";

import { json } from "@sveltejs/kit";

async function getRandomMovie() {
    const rNum = Math.random() * (movies.length - 1) + 1;
    return movies[Math.round(rNum)]
}

export async function GET() {
    const rMovie = await getRandomMovie();
    const year = rMovie.year.toString();
    const title = rMovie.title.toString();
    const params = new URLSearchParams({
        't': title,
        'y': year
    })
    const res = await fetch(`http://www.omdbapi.com/?apikey=8fc3abbc&${params}`)
    const movie = await res.json()
    console.log(movie)
    return json(movie);
}