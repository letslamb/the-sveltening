<script>
  // This component wraps an image and allows it to become a thumbnail with a link to the full size 
  // version of the image

  // TODO: this should probably be moved to primitives for more general-purpose use. It's currently too tightly coupled with the Image components, but it doesn't have to be.

  // currentSrc will be passed in from the child Image component, if thumbnail={true}
  export let currentSrc

  // thumbnail is a boolean to be passed in if you want this component's behavior
  export let thumbnail


</script>

<!-- if we pass thumbnail={true} into the parent <ImageLoader> and down the image component hierarchy, render the child <Image> component as a thumbnail in the DOM -->
{#if thumbnail}
  <a sveltekit:noscroll href={currentSrc}>
    <slot></slot>
  </a>
  <!-- otherwise render the child <Image> component unaltered through a bare slot -->
{:else}
  <slot></slot>
{/if}