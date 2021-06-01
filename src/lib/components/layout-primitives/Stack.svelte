
<div class="stack">  
  <div class="first-item">
    <slot name="first-item" />
  </div>
  <div class="second-item">
    <slot name="second-item" />
  </div>
  <div class="third-item">
    <slot name="third-item" />
  </div>
</div>

<style>
  .stack {
    --stack-flex-flow: column nowrap;
    --space: 1.5rem;
    display: flex;
    flex-flow: var(--stack-flex-flow);
    justify-content: flex-start;
  }

  /* margins should already be cleared by your app.css resets, but in case it's not */
  .stack > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  .stack > * + * {
    margin-top: 1.5rem;
  }

  /* Remove the margin-top if a slot is unused so layout remains visually consistent */
  .third-item:empty, .second-item:empty {
    margin-top: 0;
  }

</style>