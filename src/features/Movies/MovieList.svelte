<script>
  import { fly } from "svelte/transition";
  import { movies, movieStore } from "../../stores/movies";
  import MovieCard from "./MovieCard.svelte";

  let current;

  const setCurrent = id => {
    id === current ? (current = null) : (current = id);
  };
</script>

<main>
  {#if $movies.length}
    <ul
      class="m-0 xl:grid xl:grid-cols-2"
      in:fly={{ y: -20, duration: 400 }}
      out:fly={{ y: 20, duration: 400 }}>
      {#each $movies as movie (movie.id)}
        <li
          on:click={setCurrent(movie.id)}
          class:bg-red-100={current === movie.id}
          class:shadow-lg={current === movie.id}
          class="p-1 mx-0 my-3 bg-white shadow cursor-pointer xl:mx-3 md:rounded-lg xl:justify-between">
          <MovieCard {movie} />
        </li>
      {/each}
    </ul>
  {:else if $movieStore.isSearch}
    <h3 class="py-6 mt-3 text-center shadow lg:rounded-lg bg-gray-50">
      Nenhum filme encontrado
    </h3>
  {/if}
</main>
