<script>
  
  import { onMount } from "svelte";

  /**
   * @type {string}
  */
  export let alt;
  /**
   * @type {string}
  */
  export let src;
  /**
   * @type {(string|number)}
  */
  export let width;
  /**
   * @type {(string|number)}
  */
  export let height;
  /**
   * @type {Array.<{format: String, width: Number, height: Number, src: String}>}
   */
  export let processedImages;
  /**
   * @type {string}
  */
  export let currentSrc;

  let loaded = false;
  let thisImage;
  let sortedProcessedImages;
  let imageFormatOrder;
  let defaultImage;

  onMount(() => {
    if (thisImage) {
      thisImage.onload = () => {
        loaded = true;
        currentSrc = thisImage.currentSrc
      };
    }
  });

  if (processedImages) {

    imageFormatOrder = {
      'webp': 0,
      'avif': 1,
      'jpg': 2,
      'jpeg': 3,
      'png':4
    }

    function compare(a, b) {
      if (a === b) {
        return 0;
      }
      return a < b ? -1 : 1
    }

    sortedProcessedImages = processedImages.sort(function(a, b) {
      let index_result = compare(imageFormatOrder[a.format], imageFormatOrder[b.format])

      if (index_result === 0) {
        return compare(a.width, b.width)
      }

      return index_result
    })

    console.log(sortedProcessedImages)

    defaultImage = sortedProcessedImages
      .filter(x => x.format !== 'webp')
      .shift()

      console.log(defaultImage)
  }


</script>

{#if processedImages}
  <picture>
    {#each sortedProcessedImages as image}
      <!-- make sure webps are always tried first by the browser -->
      {#if image.format === 'webp'}
        <source
          type={`image/${image.format}`}
          media={`
            (min-width: ${image.width === 200 ? "10" : image.width}px)`}
          srcset={`${image.src} ${image.width}w`}
        />
      {:else}
      <!-- jpg & jpeg both require type="image/jpeg" exactly, otherwise just feed in the image format -->
        <source
          type={`image/${image.format === 
            ('jpg' || 'jpeg') 
            ? 'jpeg' 
            : image.format}`}
          media={`
            (min-width: ${image.width === 200 ? "10" : image.width}px)`}
          srcset={`${image.src} ${image.width}w`}
        />
      {/if}
    {/each}
    <img bind:this={thisImage} class:loaded src={defaultImage.src} width={defaultImage.width} height={defaultImage.height} {alt} />
  </picture>
{:else}
  <img
    {src}
    {alt}
    {width}
    {height}
    class:loaded
    bind:this={thisImage}
  />
{/if}

<style>
  img {
    width: 100%;
    height: auto;
    opacity: 0;
    transition: opacity 1200ms ease-out;
    border-radius: var(--border-radius, 0);
  }
  img.loaded {
    opacity: 1;
  }

</style>
