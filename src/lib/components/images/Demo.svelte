<script>
  import ImageLoader from '$lib/components/images/ImageLoader.svelte'
  import Kitty from '$static/kitty.jpeg?w=200;400;700&format=webp;jpg&meta'
  import staticCat from '$static/kitty.jpeg'


  // this functions strips image metadata, leaving only what we need
  function filterArrayOfImageObjects (arrayOfImageObjects) {
    const newArr = []

    const allowed = ['format', 'width', 'height', 'src'];

    for (const imageObject of arrayOfImageObjects) {
      let filtered = Object.fromEntries(
        Object.entries(imageObject).filter(
          ([key, val]) => allowed.includes(key)
        )
      )
      newArr.push(filtered)
    }

    return newArr
  }

  const kittyImages = filterArrayOfImageObjects(Kitty)
</script>

<!-- <ImageLoader processedImages={kittyImages} /> -->

<section class="container">
  <ImageLoader processedImages={kittyImages} />
</section>

<div>
  <ImageLoader src={staticCat} />
</div>

<style>
  .container {
    padding: 0 2rem;
  }

  div {
    padding: 0 5rem;
  }
</style>
