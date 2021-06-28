<script>
  export let wrapperElement
</script>

{#if wrapperElement === 'ul'}
  <ul class="grid">
    <slot />
  </ul>
{:else if wrapperElement === 'ol'}
  <ol class="grid">
    <slot />
  </ol>
{:else if wrapperElement === 'dl'}
  <dl class="grid">
    <slot />
  </dl>
{:else if wrapperElement === 'div'}
  <div class="grid">
    <slot />
  </div>
{/if}

<style>

  /* 
    Exposed as CSS variables:
      --grid-gap
      --grid-list-style
  */

  .grid {
    display: grid;
    grid-gap: var(--grid-gap, 1rem);
  }

  ul, ol, dl {
    list-style: var(--grid-list-style, none)
  }

  @supports (width: min(250px, 100%)) {
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
    }
  }
</style>