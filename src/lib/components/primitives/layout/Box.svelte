<script>
  /**
   * @type {boolean}
   * prop to add a class and invert 'color' & 'background-color'
  */
  export let switchColors
</script>

<div class="box" class:invert={switchColors}>
  <slot />
</div>

<style>
  /* 
    Exposed CSS variables:
      --box-padding
      --box-border
      --box-text-color
      --box-bg-color
      --box-border-radius
      --box-box-shadow
      --box-height - default is determined by content height. if you want to use margins on the content to make a box take up the full height of its parent (e.g. a Stack's 'splitAfter' prop adds 'margin-bottom: auto' to one of its children), you need to set --box-height="100%"

  */

  .box {
    padding: var(--box-padding, 0);
    border: var(--box-border, none);
    color: var(--box-text-color, #000);
    background-color: var(--box-bg-color, #fff);
    border-radius: var(--box-border-radius, 0);
    box-shadow: var(--box-box-shadow, none);
    /* height: var(--box-height, auto); */
    display: var(--box-display, block);
    min-height: var(--box-min-height, auto);
  }

  .box * {
    color: inherit;
  }

  /* switch the text & background colors e.g. for light/dark mode */
  .box.invert {
    color: var(--box-bg-color);
    background-color: var(--box-text-color);
  }

</style>
