<script>

  /**
   * @type {string}
   * set an optional class name for the top-level element of this component to enable 
   * scoped styling of each component instance from outside (in parent components or pages)
  */
  export let wrapperClass
  /**
   * @type {string}
   * the text you want to accompany the icon. Should be descriptive & contextualize the icon
  */
  export let iconText
</script>

<span class={wrapperClass
  ? `with-icon ${wrapperClass}`
  : "with-icon"
}>
  <slot />
  {iconText}
</span>

<style>
  /* Exposed as CSS variables:
      --space
  */

  :global(svg) {
    width: 0.75em;
    height: 0.75em;
  }

  .with-icon {
    display: inline-flex;
    align-items: baseline;
  }

  :global(.with-icon svg) {
    margin-inline-end: var(--space, 1rem);
  }
</style>