<script>
  import SearchBar from "./SearchBar.svelte";
  import MovieList from "./MovieList.svelte";
</script>

<div class="container mx-auto">
  <div class="md:mx-4">
    <div class="mt-3">
      <SearchBar />
    </div>
    <div class="mb-16">
      <MovieList />
    </div>
  </div>
</div>
