<script>
  import { BACKDROP_BASE_URL } from "../../service/movie-api";

  export let movie;

  const {
    title,
    overview,
    backdrop_path,
    release_date,
    vote_average,
    vote_count
  } = movie;
</script>

<div class="p-4">
  <div class="flex flex-col md:flex-row">
    <div class="flex-shrink-0">
      <img
        loading="lazy"
        class="rounded-lg md:w-56 md:rounded"
        src={`${BACKDROP_BASE_URL}${backdrop_path}`}
        alt="Woman paying for a purchase" />
    </div>
    <div class="w-full md:ml-6">
      <div
        class="mt-3 text-sm font-bold tracking-wide text-red-600 uppercase md:mt-0">
        {title}
      </div>
      <div class="flex p-2 my-2 text-xs text-gray-500 bg-gray-100 rounded">
        <p class="w-full">
          Avaliação:
          <strong>{vote_average}</strong>
          com {vote_count} votos
        </p>
        <p class="w-full text-right">
          Lançamento: {new Date(release_date).toLocaleDateString()}
        </p>
      </div>
      <p class="mt-2 text-sm text-gray-500">{overview.substr(0, 280)}</p>
    </div>
  </div>
</div>
