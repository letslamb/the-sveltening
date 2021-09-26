<script>

  /**
   * @type {string}
   * set an optional class name for the top-level element of this component to enable 
   * scoped styling of each component instance from outside (in parent components or pages)
  */
  export let wrapperClass
  /**
   * @type {string}
   * control the parent of slot content by choosing 'div', 'ul', 'ol', or 'dl'
  */
  export let wrapperElement
  
</script>

{#if wrapperElement === 'ul'}
  <ul class={wrapperClass
    ? `grid ${wrapperClass}`
    : "grid"
  }>
    <slot />
  </ul>
{:else if wrapperElement === 'ol'}
  <ol class={wrapperClass
    ? `grid ${wrapperClass}`
    : "grid"
  }>
    <slot />
  </ol>
{:else if wrapperElement === 'dl'}
  <dl class={wrapperClass
    ? `grid ${wrapperClass}`
    : "grid"
  }>
    <slot />
  </dl>
{:else if wrapperElement === 'div'}
  <div class={wrapperClass
    ? `grid ${wrapperClass}`
    : "grid"
  }>
    <slot />
  </div>
{/if}

<style>

  /* 
    Exposed as CSS variables:
      --space
  */

  .grid {
    display: grid;
    grid-gap: var(--space, 1rem);
  }

  ul, ol, dl {
    list-style: none
  }

  @supports (width: min(250px, 100%)) {
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
    }
  }
</style>