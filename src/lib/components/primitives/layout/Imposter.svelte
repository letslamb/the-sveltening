<script>

  /** @type {boolean}
   * true = confine the modal to the parent's space with a scrollbar for its content
   * false = allow the modal to expand vertically as needed
   * needs to be set on the context obj when used in a client-side wrapper component e.g. Modal.svelte
  */
  export let contain

  export let imposterWrapperDiv

</script>


<!-- This *needs* to be wrapped in a position:relative parent -->
<div bind:this={imposterWrapperDiv} class="imposter" class:contain>
  <slot />
</div>



<style>

  /* 
    Exposed as CSS variables:
      --imposter-position - absolute (default), or fixed for the element to follow user scrolling
      --imposter-margin
  */
  .imposter {
    position: var(--imposter-position, absolute);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .contain {
    overflow: auto;
    max-width: calc(100% - (var(--imposter-margin, 0) * 2));
    max-height: calc(100% - (var(--imposter-margin, 0) * 2));
  }
</style>
