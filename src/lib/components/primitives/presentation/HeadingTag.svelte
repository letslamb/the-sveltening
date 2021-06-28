<script>

  import { getContext } from 'svelte'

  let level
  export let message

  level = getContext('headingLevel')
  level = Math.min(level, 6)


  const render = () => `
    <h${level}>
      ${message}
    </h${level}>
  `

</script>

{@html render()}
