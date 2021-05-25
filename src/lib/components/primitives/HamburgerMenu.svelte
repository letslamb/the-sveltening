<script>
  // This component accepts an array of objects to be fed into the Nav menu. Properties needed are for the visible text the item will display in the opened menu, and the route the item will link to onclick. Below is some test data defined as a default. This will be overridden by the prop you feed to the component.

  export let menuItems = [
    { visibleText: "test", route: "/" },
    { visibleText: "page", route: "/" }
  ]

  // let navButton
  $: expanded = false

  // onMount(() => navButton = document.querySelector('nav button'))

  function handleMenuClicks(event) {
    expanded = !expanded
    let menu = this.nextElementSibling;
    menu.hidden = !menu.hidden;
  }

</script>

<nav>
  <button aria-expanded={expanded} on:click={handleMenuClicks}>
    <svg role="img" aria-label="hamburger menu" viewBox="0 0 10 10" width="10" height="10" stroke="black" >
      <path stroke="1" fill="black" d="M0,1 10,1 M0,5 10,5 M0,9 10,9" />
    </svg>
  </button>
  <ul hidden>
    {#each menuItems as { visibleText, route }}
      <li><a href={route}>{visibleText}</a></li>
    {/each}
  </ul>
</nav>

<style>
  /* fallback for older browsers that don't support the 'hidden' attribute */
  [hidden] {
    display: none;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    width: 3rem;
    text-transform: uppercase
  }

  svg {
    width: 3rem;
    height: 3rem;
  }

  [aria-expanded] path {
    transition: d 0.25s;
  }

  [aria-expanded="true"] path {
    d: path("M1,1 9,9 M5,5 5,5 M1,9 9,1");
  }
</style>