<div class="center">
  <slot />
</div>

<style>
  /* 
    Exposed as CSS variables:
      --center-max-width
      --center-padding-left
      --center-padding-right
  */

  .center {
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    max-width: var(--center-max-width, none);
    padding-left: var(--center-padding-left, 0);
    padding-right: var(--center-padding-right, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>