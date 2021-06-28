
<div class="frame">
  <slot />
</div>


<style>
  /* 
    Exposed as CSS variables:
      --frame-denominator
      --frame-numerator
      --frame-min-width
  */

  .frame {
  /* in cases such as the Cluster's use of negative margins, it may be necessary to enforce a min-width to ensure the image is displayed */
  min-width: var(--frame-min-width, auto);
  padding-bottom: calc(var(--frame-numerator) / var(--frame-denominator) * 100%);
  position: relative;
}

:global(.frame > *) {
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

:global(.frame > img),
:global(.frame > video) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>