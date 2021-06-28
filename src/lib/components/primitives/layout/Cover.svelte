
<!-- Cover can have 3 direct children:
  1. "header" i.e. content pinned to the top of Cover
  2. vertically-centered content
  3. "footer" i.e. content pinned to the bottom of Cover
-->
<div class="cover">
  <slot />
</div>

<style>
  /* Exposed CSS variables:
      --cover-margin-top
      --cover-margin-bottom
      --cover-padding
      --cover-min-height => min-height of the overall component container
  */

  .cover {
    display: flex;
    flex-direction: column;
    min-height: var(--cover-min-height, 100vh);
    padding: var(--cover-padding, 0);
  }

  :global(.cover > *) {
    margin-top: var(--cover-margin-top, 1rem);
    margin-bottom: var(--cover-margin-bottom, 1rem);
  }

  :global(.cover > *:nth-child(1)) {
    margin-top: 0;
  }

  :global(.cover > *:nth-child(3)) {
    margin-bottom: 0;
  }

  :global(.cover > *:nth-child(2)) {
    margin-top: auto;
    margin-bottom: auto;
  }

</style>