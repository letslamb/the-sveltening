<script>
  export let wrapperElement
</script>

{#if wrapperElement === 'ul'}
  <ul class="switcher">
    <slot />
  </ul>
{:else if wrapperElement === 'ol'}
  <ol class="switcher">
    <slot />
  </ol>
{:else if wrapperElement === 'dl'}
  <dl class="switcher">
    <slot />
  </dl>
{:else if wrapperElement === 'div'}
  <!-- each slotted child element for the Switcher requires a <div> wrapper -->
  <div class="switcher">
    <slot />
  </div>
{/if}


<style>

  /* Exposed as CSS variables:
      --switcher-gap
      --switcher-measure => the container width at which the component switches between a 
          horizontal & vertical layout
      --switcher-list-style
  */

  .switcher {
    display: flex;
    flex-wrap: wrap;
    gap: var(--switcher-gap, 1rem)
  }

  :global(.switcher > *) {
    flex-grow: 1;
    flex-basis: calc((var(--switcher-measure, 30rem) - 100%) * 999);
  }

  :global(.switcher > * > :nth-last-child(n+5)),
  :global(.switcher > * > :nth-last-child(n+5) ~ *) {
    flex-basis: 100%;
  }

  ul, ol, dl {
    list-style: var(--switcher-list-style, none)
  }

</style>