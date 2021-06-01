<script>
  import IntersectionObserver from "$lib/components/presentation-primitives/IntersectionObserver.svelte";
  import ThumbnailWrapper from "$lib/components/presentation-primitives/ThumbnailWrapper.svelte";
  import Image from "$lib/components/presentation-primitives/Image.svelte";

  /**
   * @type {boolean}
  */
  export let thumbnail;
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
