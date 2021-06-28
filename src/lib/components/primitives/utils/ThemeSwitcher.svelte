<script>
  import { browser } from '$app/env'

  let active
  let ThemeKey

  if (browser) {
    ThemeKey = localStorage.getItem('DarkMode')
    if (ThemeKey === "true") {
      active = true
    } else if (!ThemeKey && matchMedia('(prefers-color-scheme: dark)').matches) {
      active = true
    }
  }

  const toggle = () => {
    active = !active
    localStorage.setItem('DarkMode', String(active))
  }
</script>

<div>
  <button aria-pressed={active} on:click={toggle}>
    Dark Theme:{' '}
    <span aria-hidden="true">{active ? 'On' : 'Off'}</span>
  </button>
  <style media={active ? 'screen' : 'none'}>
    html { filter: invert(100%); background: #fefefe }
    * { background-color: inherit }
    img:not([src*=".png"]), video { filter: invert(100%)}
  </style>
</div>

<style>
  button {
    border: solid 2px;
  }
</style>