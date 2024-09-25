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
        <h1>{data.movie.Title}</h1>
        <h2>{data.movie.Year}</h2>
        <img src={data.movie.Poster} alt="movie poster"/>
        <h2>Director: {data.movie.Director}</h2>
        <!-- {#if data.movie.Ratings.Source == "Rotten Tomatoes"}
            <h1>HERE! {data.movie.Ratings.Value}</h1>
        {/if} -->
        {#if data.movie.Ratings}
            {#each data.movie.Ratings as rating}
                {#if rating.Source == 'Rotten Tomatoes'}
                    {#if parseInt(rating.Value) >= 60}
                        <div class="rating-wrapper">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/139px-Rotten_Tomatoes.svg.png" alt="rotom-logo"/>
                            <h2>{rating.Value}</h2>
                        </div>
                    {/if}
                    {#if parseInt(rating.Value) <= 59}
                        <div class="rating-wrapper">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Rotten_Tomatoes_rotten.svg/50px-Rotten_Tomatoes_rotten.svg.png" alt="rotom-logo"/>
                            <h2>{rating.Value}</h2>
                        </div>
                    {/if}
                {/if}
            {/each}
        {/if}
        <p>{data.movie.Plot}</p>
        <button on:click={getNewMovie}>New Movie</button>
        <label for="seen-check"><input type="checkbox" name="seen-check">Seen?</label>
        <!-- <button>Seen</button> -->
    {/if}
</div>

<style>
    h1, h2 {
        padding: 0;
        margin: 0;
    }
    p {
        padding: 0;
        margin: auto;
        width: 20rem;
        margin-bottom: 1rem;
    }
    button {
        border: 1px solid black;
        color: #2A1308;
        background-color: #C99136;
        box-shadow: #C99136 0 0.3rem 0;
        font-size: 1.3rem;
        width: 16rem;
        margin: auto;
        padding: 1rem;
        margin-bottom: 1rem;
        cursor: pointer;
        /* background: linear-gradient(90deg, rgba(42,19,8,1) 0%, rgba(201,145,54,1) 50%); */
        /* background: linear-gradient(257deg, rgba(42,19,8,1) 0%, rgba(201,145,54,1) 50%);
        box-shadow: #C99136 0px -50px 36px -28px inset; */
        transition: 200ms;
    }
    button:hover{
        /* color: black;
        background-color: rgb(83, 117, 30); */
        /* color: #1C260D; */
        box-shadow: #2A1308 0.3rem 0.3rem 0;
        border: 0.1rem solid #1C260D;
    }
    .rating-wrapper {
        /* display: flex; */
        font-size: 0.7rem;
        /* align-items: center;
        text-align: center; */
        display: grid;
        grid-template-columns: 50% 50%;
        align-items: center;
        text-align: center;
        width: fit-content;
        margin: auto;
    }
    .rating-wrapper > img {
        width: 2rem;
        height: 2rem;
        padding: 0.5rem;
    }
    /* .rating-wrapper > * {
        grid-column: 0, 2;
    } */
    .wrapper{
        display: grid;
        grid-column: auto;
        justify-content: center;
        text-align: center;
        /* padding: 1rem; */
        row-gap: 0.2rem;
    }
    .wrapper > img {
        margin: auto;
        min-height: 2rem;
        overflow-x: hidden;
    }
    
</style>
