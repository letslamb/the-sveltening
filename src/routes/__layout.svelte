<script>
  import '../app.css'

  import Hamburger from '$lib/toolbox/hamburger-menu/HamburgerMenu.svelte'
  import Kitty from '$static/kitty.jpg?w=200;400;&format=webp;jpg;&meta'
</script>

<header class="first">
  <!-- <figure>
    <ImageLoader 
      processedImages={Kitty}
    />
  </figure> -->
  <Hamburger wrapperClass="test-burger" />
</header>

<main>
  <slot />
</main>

<footer>

</footer>


<style>

  header {
    background-color: #fff;
    border-bottom: 2px solid #000;
    padding: 1.5rem 1.5rem;
    display: flex;
    justify-content: flex-end;
  }

  figure {
    max-width: 10rem;
  }

  header :global(.test-burger button) {
    /* background-color: blue; */
    padding: 0.4rem 0.4rem 0.2rem 0.4rem;
    margin: 0 0 0 auto;
  }

  header :global(.test-burger ul) {
    background-color: pink;
    text-align: center;
  }

  header :global(.test-burger a) {
    padding: 1rem 0.4rem;
  }

</style>