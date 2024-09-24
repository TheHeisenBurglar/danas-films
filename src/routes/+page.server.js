export async function load() {
    const res = await fetch("http://www.omdbapi.com/?apikey=8fc3abbc&t=beetlejuice%20beetlejuice&y=2024")
    const movie = await res.json()
    if (res.ok){
        console.log(movie)
        return {
            movie
        }
    }
    console.log("uh oh")
    return {
        status: res.status,
        error: new Error('Could not Fetch guides')
    }
}