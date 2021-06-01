<script>
  import '../app.css'

  import Hamburger from '$lib/components/presentation-primitives/HamburgerMenu.svelte'
  import ImageLoader from '$lib/components/combos/ImageLoader.svelte'
  import Kitty from '$static/kitty.jpeg?w=200;400;&format=webp;jpg;&meta'
</script>

<header class="first">
  <figure>
    <ImageLoader 
      processedImages={Kitty}
    />
  </figure>
  <Hamburger
    --button-padding="0.4rem 0.4rem 0.2rem 0.4rem"
  />
</header>

<main>
  <slot />
</main>

<footer>

</footer>

<style>

header {
    background-color: green;
    padding: 1.5rem 1.5rem;
    display: flex;
    justify-content: space-between;
  }

  figure {
    max-width: 10rem;
  }

  header.first {
    --button-bg-color: blue;
    --button-margin: 0 0 0 auto;
    --ul-bg-color: white;
    --link-padding: 1rem 0.4rem;
  }
</style>