<script>
  import IntersectionObserver from "./IntersectionObserver.svelte";
  import Image from "./Image.svelte";

  export let thumbnail;
  // export let src;
  export let alt;
  // export let width;
  // export let height;
  export let rounded;
  export let ariaLabel;
  export let processedImages;

</script>

<IntersectionObserver once={true} let:intersecting>
  {#if intersecting}
    <Image
      {processedImages}
      {thumbnail}
      {alt}
      {ariaLabel}
      {rounded}
    />
  {/if}
</IntersectionObserver>
