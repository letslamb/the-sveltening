<script>
  import { setContext, getContext } from 'svelte'

  let level

  if (getContext('headingLevel')) {
    level = getContext('headingLevel') + 1
    setContext('headingLevel', level)
  } else {
    level = 2
    setContext('headingLevel', level)
  }

</script>

<section>
  <slot />
</section>