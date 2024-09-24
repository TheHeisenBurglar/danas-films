<script>
    // import { GET } from '../db/+server.js'

  import { movies } from "./db/data";

    export let data;
    async function getNewMovie(){
        const res = await fetch('/db');
        const movie = await res.json();
        if (res.ok){
            data.movie = movie;
        }
        
    }
</script>
<div class="wrapper">
    {#if data !== undefined}
        <img src={data.movie.Poster} alt="movie poster"/>
        <h1>Title: {data.movie.Title}</h1>
        <h2>Year: {data.movie.Year}</h2>
        <h2>Director: {data.movie.Director}</h2>
        {#if data.movie.Ratings}
            {#each data.movie.Ratings as rating}
                <h2>{rating.Source}: {rating.Value}</h2>
            {/each}
        {/if}
        <button on:click={getNewMovie}>New Movie</button>
    {/if}
</div>

<style>
    .wrapper{
        display: grid;
        grid-template-columns: 50% 50%;
    }
    .wrapper > img {
        grid-row-start: 0;
        grid-row-end: 3;
    }
</style>
