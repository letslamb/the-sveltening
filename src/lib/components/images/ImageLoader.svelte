<script>
  import IntersectionObserver from "../primitives/IntersectionObserver.svelte";
  import Image from "./Image.svelte";

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

</script>

<IntersectionObserver once={true} let:intersecting>
  {#if intersecting}
    <Image
      {src}
      {alt}
      {processedImages}
      {thumbnail}
      {rounded}
    />
  {/if}
</IntersectionObserver>
