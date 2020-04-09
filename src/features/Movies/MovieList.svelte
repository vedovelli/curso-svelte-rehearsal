<script>
  import { movies } from "../../stores/movies";
  import { BACKDROP_BASE_URL } from "../../service/movie-api";
</script>

<main>
  <ul>
    {#each $movies as { title, overview, backdrop_path, release_date, vote_average, vote_count }}
      <li class="p-1 my-3 bg-white rounded-lg shadow">
        <div class="p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <img
                class="w-56 rounded"
                src={`${BACKDROP_BASE_URL}${backdrop_path}`}
                alt="Woman paying for a purchase" />
            </div>
            <div class="ml-6">
              <div
                class="text-sm font-bold tracking-wide text-red-600 uppercase">
                {title}
              </div>
              <div
                class="flex text-xs text-gray-500 bg-gray-100 my-2 p-2 rounded">
                <p class="w-full">
                  Avaliação:
                  <strong>{vote_average}</strong>
                  com {vote_count} votos
                </p>
                <p class="w-full text-right">
                  Lançamento: {new Date(release_date).toLocaleDateString()}
                </p>
              </div>
              <p class="h-20 mt-2 text-sm text-gray-500">
                {overview.substr(0, 280)}
              </p>
            </div>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</main>
