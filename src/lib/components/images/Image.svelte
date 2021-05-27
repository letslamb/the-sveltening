<script>
  
  import { onMount } from "svelte";

  export let alt;
  // 'src', 'width', and 'height' are for the normal <img> tag. 
  export let src;
  export let width;
  export let height;
  // 'processedImages' should be used when you have multiple processed versions of an image to be served
  export let processedImages;
  // 'currentSrc' is set after the component is mounted and img.currentSrc is decided. This allows flexibile use of ImageLoader for regular <img> or <picture>. 'currentSrc' is exposed as a prop only because it needs to be passed up with slot props in the case of e.g. the <ImageLoader> component when its 'thumbnail=true'
  export let currentSrc;

  let loaded = false;
  let thisImage;
  let webps;
  let jpgs;


  onMount(() => {
    if (thisImage) {
      thisImage.onload = () => {
        loaded = true;
        currentSrc = thisImage.currentSrc
      };
    }
  });

  if (processedImages) {
    processedImages.reverse();
    // TODO: this needs to be cleaned up, the 'processedImages' prop should be coming into the component already cleaned up & ready for use, not being massaged outside & inside this component
    webps = processedImages.filter(x => x.format === 'webp')

    jpgs = processedImages.filter(x => x.format === 'jpg')
  }


</script>

<!-- TODO: handle different image formats more elegantly. You'll probably need to enforce an opinionated structure w/documentation for the object properties that can be fed into the 'processedImages' prop -->

{#if processedImages}
  <picture>
    {#each webps as image}
      <source
        type="image/webp"
        media={`
          (min-width: ${image.width === 200 ? "10" : image.width}px)`}
        srcset={`${image.src} ${image.width}w`}
      />
    {/each}
    {#each jpgs as image}
      <source
        type="image/jpeg"
        media={`
          (min-width: ${image.width === 200 ? "10" : image.width}px)`}
        srcset={`${image.src} ${image.width}w`}
      />
    {/each}
    <img bind:this={thisImage} class:loaded src={jpgs[0].src} width={jpgs[0].width} height={jpgs[0].height} {alt} />
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
