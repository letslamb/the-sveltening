<script>
  import Hamburger from '$lib/components/primitives/HamburgerMenu.svelte'
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

<style>
  header {
    background-color: green;
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-between;
  }

  figure {
    width: 8rem;
  }

  header.first {
    --button-bg-color: blue;
    --button-margin: 0 0 0 auto;
    --ul-bg-color: white;
    --link-padding: 1rem 0.4rem;
  }

</style>