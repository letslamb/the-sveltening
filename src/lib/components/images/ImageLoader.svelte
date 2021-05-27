<script>
  import IntersectionObserver from "$lib/components/primitives/IntersectionObserver.svelte";
  import ThumbnailWrapper from "$lib/components/primitives/ThumbnailWrapper.svelte";
  import Image from "./Image.svelte";

  // 'thumbnail' is a boolean prop to initialize the ThumbnailWrapper component around your image
  export let thumbnail;
  export let alt;
  // 'src', 'width', and 'height' are for the normal <img> tag. 
  export let src;
  export let width;
  export let height;
  /**
   * 'processedImages' should be used when you have multiple procesed versions of an image to be served based on viewport width. It can also handle multiple image formats
   * @type {Object[]}
   * @property {string} processedImages[].format - image format (webp, jpg, etc.)
   * @property {number} processedImages[].width - image width
   * @property {number} processedImages[].height - image height
   * @property {string} processedImages[].src - relative path to the image from project root (starting with '/')
   */
  export let processedImages;

</script>

<IntersectionObserver once={true} let:intersecting>
  {#if intersecting && thumbnail}
    <ThumbnailWrapper let:href>
      <Image
        {src}
        {alt}
        {processedImages}
        currentSrc={href}
      />
    </ThumbnailWrapper>
  {:else if intersecting}
    <Image
      {src}
      {alt}
      {processedImages}
    />
  {/if}
</IntersectionObserver>
