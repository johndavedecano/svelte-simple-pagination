<script>
  import { createEventDispatcher } from "svelte";

  import paginate from "./paginate";

  export let active;
  export let numpages;
  export let limit;
  export let nextLabel;
  export let prevLabel;
  export let customClass = "";

  const dispatch = createEventDispatcher();

  $: params = paginate(active, numpages, limit);

  const onprev = () => {
    if (!params.hasPrev) return false;

    const nextActive = active - 1;

    active = nextActive;

    dispatch("change", active);
  };

  const onnext = () => {
    if (!params.hasNext) return false;

    const nextActive = active + 1;

    active = nextActive;

    dispatch("change", active);
  };

  const onclick = (prevActive, nextActive) => {
    if (prevActive !== nextActive) {
      active = nextActive;

      dispatch("change", active);
    }
  };
</script>

<div class="pagination {customClass}">
  <a href="/" aria-label={prevLabel} on:click|preventDefault={onprev}>
    <span aria-hidden="true">&laquo;</span>
    {#if prevLabel}
      <span class="sr-only">{prevLabel}</span>
    {/if}
  </a>

  {#each params.pages as page}
    <a
      class:active={active === page}
      href="/"
      on:click|preventDefault={() => onclick(active, page)}>{page}</a
    >
  {/each}

  <a href="/" aria-label={nextLabel} on:click|preventDefault={onnext}>
    {#if nextLabel}
      <span class="sr-only">{nextLabel}</span>
    {/if}
    <span aria-hidden="true">&raquo;</span>
  </a>
</div>

<style>
  .pagination {
    display: inline-block;
  }

  .pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
  }

  .pagination a.active {
    background-color: #4caf50;
    color: white;
  }

  .pagination a:hover:not(.active) {
    background-color: #ddd;
  }
</style>
