<script>
  import ImageWrapper from './ImageWrapper.svelte'
  
  import { onMount } from "svelte";

  export let thumbnail;
  export let alt;
  // 'src', 'width', and 'height' are for the normal <img> tag. 
  export let src;
  export let width;
  export let height;
  /* TODO: 'rounded' needs to be a custom property tht can be fed in by the dev. Maybe use a default value instead of making it a Svelte prop at all */
  export let rounded;
  // 'processedImages' should be used when you have multiple procesed versions of an image to be served based on 
  export let processedImages;

  let loaded = false;
  let thisImage;
  let currentSrc;
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
    // TODO: this needs to be cleaned up, the 'processedImages' prop should be coming into the component already cleaned up & ready for use, not being massaged inside this component
    webps = processedImages.filter(x => x.format === 'webp')

    jpgs = processedImages.filter(x => x.format === 'jpg')
  }


</script>

<ImageWrapper {currentSrc} {thumbnail}>
  <!-- ^ ImageWrapper component only wraps the slot content below in an <a> tag if thumbnail={true} was passed from parent/page, otherwise it just renders this component unchanged through a bare <slot> -->
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
      <img bind:this={thisImage} class:loaded class:rounded src={jpgs[0].src} width={jpgs[0].width} height={jpgs[0].height} {alt} />
    </picture>
  {:else}
    <img
      {src}
      {alt}
      {width}
      {height}
      class:loaded
      class:rounded
      bind:this={thisImage}
    />
  {/if}
</ImageWrapper>

<style>
  img {
    width: 100%;
    height: auto;
    opacity: 0;
    transition: opacity 1200ms ease-out;
  }
  img.loaded {
    opacity: 1;
  }

  /* TODO: this needs to be a custom property tht can be fed in by the dev */
  img.rounded {
    border-radius: 50%;
  }
</style>
