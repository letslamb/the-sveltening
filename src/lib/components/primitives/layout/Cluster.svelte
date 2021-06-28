<script>
  export let wrapperElement
</script>

{#if wrapperElement === "ul"}
  <ul class="cluster">
    <slot />
  </ul>
{:else if wrapperElement === "ol"}
  <ol class="cluster">
    <slot />
  </ol>
{:else if wrapperElement === "dl"}
  <dl class="cluster">
    <slot />
  </dl>
{:else if wrapperElement === 'div'}
  <div class="cluster">
    <slot />
  </div>
{/if}

<style>
  /* 
    Exposed as CSS variables:
      --cluster-gap
      --cluster-justify
      --cluster-align
      --list-style
  */

  .cluster {
    display: flex;
    flex-wrap: wrap;
    justify-content: var(--cluster-justify, flex-start);
    align-items: var(--cluster-align, center);
    gap: var(--cluster-gap, 1rem);
  }

  ul, ol, dl {
    list-style: var(--cluster-list-style, none)
  }

</style>