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
    <ul transition:fly={{ y: -20, duration: 400 }}>
      {#each $movies as movie (movie.id)}
        <li
          on:click={setCurrent(movie.id)}
          class:bg-red-100={current === movie.id}
          class:shadow-lg={current === movie.id}
          class="p-1 my-3 bg-white rounded-lg shadow cursor-pointer">
          <MovieCard {movie} />
        </li>
      {/each}
    </ul>
  {:else if $movieStore.isSearch}
    <h3 class="text-center py-6 bg-gray-50 rounded-lg shadow mt-3">
      Nenhum filme encontrado
    </h3>
  {/if}
</main>
