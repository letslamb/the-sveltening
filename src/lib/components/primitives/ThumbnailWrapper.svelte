<script>
  // This component wraps a single element, or the top-level element of a component, and allows it to become a thumbnail with a link

  export let href

</script>

<a sveltekit:noscroll {href}>
  <slot></slot>
</a>
