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

<ul class="pagination {customClass}">
  <li class="page-item" class:disabled={!params.hasPrev}>
    <a
      class="page-link"
      href="/"
      aria-label={prevLabel}
      on:click|preventDefault={onprev}
    >
      <span aria-hidden="true">&laquo;</span>
      {#if prevLabel}
        <span class="sr-only">{prevLabel}</span>
      {/if}
    </a>
  </li>

  {#each params.pages as page}
    <li class="page-item" class:active={active === page}>
      <a
        class="page-link"
        href="/"
        on:click|preventDefault={() => onclick(active, page)}>{page}</a
      >
    </li>
  {/each}

  <li class="page-item" class:disabled={!params.hasNext}>
    <a
      class="page-link"
      href="/"
      aria-label={nextLabel}
      on:click|preventDefault={onnext}
    >
      {#if nextLabel}
        <span class="sr-only">{nextLabel}</span>
      {/if}
      <span aria-hidden="true">&raquo;</span>
    </a>
  </li>
</ul>
