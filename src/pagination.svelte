<script>
  import { createEventDispatcher } from "svelte";

  import Bootstrap from "./bootstrap.svelte";
  import Plain from "./plain.svelte";

  export let active;
  export let numpages;
  export let limit;
  export let nextLabel = "Next";
  export let prevLabel = "Previous";
  export let debug = false;
  export let framework = "default";
  export let customClass = "";

  const dispatch = createEventDispatcher();

  $: if (debug) {
    console.log(JSON.stringify({ active, numpages, limit }));
  }

  const onchange = (evt) => {
    active = evt.detail;
    dispatch("change", evt.detail);
  };
</script>

{#if framework === "bootstrap" || framework === "default"}
  <Bootstrap
    {active}
    {numpages}
    {limit}
    {nextLabel}
    {prevLabel}
    {customClass}
    on:change={onchange}
  />
{/if}

{#if framework === "plain"}
  <Plain
    {active}
    {numpages}
    {limit}
    {nextLabel}
    {prevLabel}
    {customClass}
    on:change={onchange}
  />
{/if}
