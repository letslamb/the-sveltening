<script>
  import ImageLoader from '$lib/components/combos/ImageLoader.svelte'
  import Kitty from '$static/kitty.jpg?w=200;400;700&format=webp;jpg&meta'
  import staticCat from '$static/kitty.jpg'

  // console.log(`Unfiltered vite-imagetools object: ${JSON.stringify(Kitty, null, " ")}`)
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

  // console.log(`after calling 'filterArrayOfImageObjects': ${JSON.stringify(kittyImages, null, " ")}`)

  // console.log(`static image imported w/ metadata only: ${JSON.stringify(staticCat, null, " ")}`)
</script>

<!-- <ImageLoader processedImages={kittyImages} /> -->

<section class="container">
  <ImageLoader 
    processedImages={kittyImages}
    rounded={true}
    --border-radius="10%" 
  />
</section>

<div>
  <ImageLoader 
    src={staticCat}
    width={2400}
    height={1350}
  />
</div>

<style>
  .container {
    margin: 0 auto;
    /* max-width: 500px; */
    padding: 0 2rem;
  }

  div {
    padding: 0 5rem;
  }
</style>
