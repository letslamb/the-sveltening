<script>
  import { onMount } from 'svelte'
  /**
   * @type {number}
   * Stack contains three named slots. splitAfter takes a number from 1-3 and enables extra spacing to be inserted via the insertion of a 'margin-bottom: auto;'
  */
  export let splitAfter
  let stack

  onMount(() => {
    if (splitAfter) {
      stack.children[splitAfter - 1].classList.toggle('split-after')
    }
  })

</script>

<div class="stack" bind:this={stack}>
  <slot />
</div>


<style>

  /* 
    Exposed as CSS variables:
      --stack-flex-flow
      --stack-spacing
      --stack-margin-bottom
  */
  .stack {
    display: flex;
    flex-flow: var(--stack-flex-flow, column nowrap);
    justify-content: flex-start;
    flex: var(--stack-flex, 1);
  }

  :global(.stack, .stack *) {
    border-radius: inherit;
  }

  /* margins should already be cleared by your app.css resets, but in case it's not */
  :global(.stack > *) {
    margin-top: 0;
    margin-bottom: var(--stack-margin-bottom, 0);
  }

  :global(.stack > * + *) {
    margin-top: var(--stack-spacing, 1.5rem);
  }

  :global(.stack > .split-after) {
    height: 100%;
    display: flex;
  }

  /* Remove the margin-top if a slot is unused so layout remains visually consistent */
  :global(.stack > :nth-child(2):empty, .stack > :nth-child(3):empty) {
    margin-top: 0;
  }

</style>