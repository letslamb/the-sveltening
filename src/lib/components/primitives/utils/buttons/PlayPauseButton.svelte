<script>
  
  let pressedState = false

</script>

<button type="button" aria-pressed={pressedState} on:click={() => pressedState = !pressedState}>
  <span aria-hidden="true">{pressedState ? "\u23f8" : "\u25B6"}</span>
  <span class="screen-reader-only">play</span>
</button>


<style>
  .screen-reader-only {
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden !important;
  }
</style>