<script>
  export let headerText = "My Section"

  export let expanded

  let contentWrapper

  function showContent(event) {
    expanded = !expanded
  }
</script>

<section>
  <h2>
    <button aria-expanded={expanded} on:click={showContent}>
      {headerText}
      <svg viewBox="0 0 10 10" focusable="false">
        <rect class="vert" height="8" width="2" y="1" x="4" />
        <rect height="2" width="8" y="4" x="1" />
      </svg>
    </button>
  </h2>
  <div hidden={!expanded}>
    <slot />
  </div>
</section>


<style>
  h2 button {
    all: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5em 0;
  }

  button svg {
    height: 1em;
    margin-left: 0.5em;
  }

  [aria-expanded] rect {
    fill: currentColor;
  }

  [aria-expanded="true"] .vert {
    display: none;
  }

  h2 button:focus svg {
    outline: 2px solid;
  }

  div {

  }
</style>