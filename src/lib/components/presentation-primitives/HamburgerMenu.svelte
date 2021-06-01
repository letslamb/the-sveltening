<script>
  //  Below is some test data defined as a default. This will be overridden by the prop you feed to the component.

  /**
   * @type {Array.<{visibleText: String, route: String}>}
  */
  export let menuItems = [
    { visibleText: "test", route: "/test" },
    { visibleText: "page", route: "/page" }
  ]

  import { slide } from 'svelte/transition'

  $: expanded = false
  let menu

  function showMenu(event) {
    expanded = !expanded
  }


</script>

<nav>
  <button aria-expanded={expanded} on:click={showMenu}>
    <svg role="img" aria-label="hamburger menu" viewBox="0 0 10 10" width="10" height="10" stroke="black" >
      <path stroke="1" fill="black" d="M0,1 10,1 M0,5 10,5 M0,9 10,9" />
    </svg>
  </button>
  {#if expanded}
    <ul bind:this={menu} transition:slide>
      {#each menuItems as { visibleText, route }}
        <li><a href={route}>{visibleText}</a></li>
      {/each}
    </ul>
  {/if}
</nav>

<style>

  /* Properties exposed as CSS variables:
        --nav-width
        --nav-font
        --button-bg-color
        --button-width
        --button-padding
        --ul-bg-color
        --link-width
        --link-padding
        --link-text-decoration
  */

  /* Expose the <nav>'s width property as customizable, since <ul> and <li> will inherit it */
  nav {
    width: var(--nav-width, 8rem);
    font: var(--nav-font, inherit);
  }

  /* both <ul> and <li> are "width: 100%;" by default */
  ul {
    background-color: var(--ul-bg-color, inherit);
    list-style: none;
  }

  /* --link-width can't be greater than --nav-width */
  a {
    display: inline-block;
    text-decoration: var(--link-text-decoration, none);
    width: var(--link-width, 100%);
    padding: var(--link-padding, 1rem 0);
  }

  button {
    display: block;
    margin: var(--button-margin, 0);
    background-color: var(--button-bg-color, transparent);
    border: none;
    cursor: pointer;
    width: var(--button-width, 3rem);
    padding: var(--button-padding, 0);
  }

  svg {
    /* make SVG occupy the full dimensions of the <button> */
    width: 100%;
    height: auto;
  }

  [aria-expanded] path {
    transition: d 0.25s;
  }

  [aria-expanded="true"] path {
    d: path("M1,1 9,9 M5,5 5,5 M1,9 9,1");
  }
</style>