<script>
  export let iconText
  // TODO ^ does this path *need* to have a leading / ?
</script>

<span class="with-icon">
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