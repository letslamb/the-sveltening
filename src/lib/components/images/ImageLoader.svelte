<script>
  import IntersectionObserver from "$lib/components/primitives/IntersectionObserver.svelte";
  import ThumbnailWrapper from "$lib/components/primitives/ThumbnailWrapper.svelte";
  import Image from "./Image.svelte";

  /**
   * @type {boolean} - 'thumbnail=true' will wrap the image in an <a> tag
  */
  export let thumbnail;
  /**
   * @type {string}
  */
  export let alt;
  /**
   * @type {string}
  */
  // 'src', 'width', and 'height' are for the normal <img> tag. 
  export let src;
  // 'width' and 'height' props are for providing the image's dimensions for the browser to calculate its correct aspect ratio & avoid jank when the image loads. These props don't directly control the image's width and height in the DOM because the <Image> component has the following overriding CSS:
  //    img {
  //      width: 100%;
  //      height: auto; 
  //      ...
  //    }
  // Use a wrapper around <ImageLoader> (e.g. <figure>) for more direct control over an image's actual dimensions in the DOM.
  /** 
   * @type {string | number}
  */
  export let width;
  /** 
   * @type {string | number}
  */
  export let height;
  /**
   * 'processedImages' should be used when you have multiple processed versions of an image to be served based on viewport width. It can also handle multiple image formats
   * @type {Object[]}
   * @property {string} processedImages[].format - image format (webp, jpg, etc.)
   * @property {number} processedImages[].width - image width
   * @property {number} processedImages[].height - image height
   * @property {string} processedImages[].src - relative image path from project root (starting with '/')
   */
  export let processedImages;

</script>

<IntersectionObserver once={true} let:intersecting>
  {#if intersecting && thumbnail}
    <ThumbnailWrapper let:href>
      <Image
        {src}
        {alt}
        {width}
        {height}
        {processedImages}
        currentSrc={href}
      />
    </ThumbnailWrapper>
  {:else if intersecting}
    <Image
      {src}
      {alt}
      {width}
      {height}
      {processedImages}
    />
  {/if}
</IntersectionObserver>
