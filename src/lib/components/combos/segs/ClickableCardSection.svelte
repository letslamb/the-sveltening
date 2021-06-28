<script>
  import Box from '$lib/components/primitives/layout/Box.svelte'
  import Center from '$lib/components/primitives/layout/Center.svelte'
  import Stack from '$lib/components/primitives/layout/Stack.svelte'
  import Loader from '$lib/components/primitives/utils/Loader.svelte'
  import Frame from '$lib/components/primitives/layout/Frame.svelte'
  import Image from '$lib/components/primitives/layout/Image.svelte'
  import Switcher from '$lib/components/primitives/layout/Switcher.svelte'


  import { onMount } from 'svelte'


  export let cardData

  onMount(() => {
    let cards = [...document.querySelectorAll('.clickable-card-class')]
    cards.forEach(card => {
      card.style.cursor = 'pointer'
      let down, up, link = card.querySelector('h2 a')
      card.onmousedown = () => down = +new Date()
      card.onmouseup = () => {
        up = +new Date()
        if ((up - down) < 200) {
          link.click()
        }
      }
    })
  })

</script>




<div class="wrapper" style="min-height: 90vw;">
  <div style="text-align: center; padding: var(--s1)">
    <Stack>
      <h1>Yams. Delivered.</h1>
      <p>Raise the cats one last time and tell your granny to to slap a platypus for me</p>
    </Stack>
  </div>

  <Center --center-padding-left="var(--s1)" --center-padding-right="var(--s1)" --center-max-width="60rem">
    <Switcher 
      wrapperElement="ul"
      --switcher-gap="var(--s0)"
      --frame-numerator="9"
      --frame-denominator="16"
      --box-border="2px solid"
      --box-text-color="#000"
      --box-bg-color="#fff"
      --box-border-radius="20px"
      --box-min-height="calc(var(--s5)*3)"
      --box-display="flex"
      --stack-spacing="var(--s0)"
      --image-border-radius="17px 17px 0 0"
    >
      {#each cardData as card}
        <li 
          class="clickable-card-class" 
        >
          <Box>
            <Stack splitAfter={1}>
              <div class="text" style="padding: var(--s0);">
                <Stack splitAfter={2}>
                  <h2>
                    <a href={card.link.href}>{card.link.visibleText}</a>
                  </h2>
                  <p>{card.bodyText}</p>
                  <small>{card.tinyText}</small>
                </Stack>
              </div>
              <Loader>
                <Frame>
                  <Image 
                    images={card.image}
                    altText={card.altText}
                  />
                </Frame>
              </Loader>
            </Stack>
          </Box>
        </li>
      {/each}
    </Switcher>
  </Center>

</div>




<style>

  /* put text before image in the markup so that screen readers will read the heading first and users can understand the context of the image, then use 'order' property to visually arrange the text after the image */
  .text {
    order: 1;
  }

  /* need to remove margin-top due to a11y hack that rearranges the elements of a <Stack> */
  :global(.text~*) {
    margin-top: 0;
  }

  :global(.clickable-card-class img) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1rem));
  }

  li {
    list-style: none;
    border-radius: var(--box-border-radius);
  }

  li:hover {
    box-shadow: 0 0 0 0.25rem;
  }

  li a:focus {
    text-decoration: underline;
  }

  li:focus-within {
    box-shadow: 0 0 0 0.25rem;
    outline: 2px solid transparent;
  }

  li:focus-within a:focus {
    text-decoration: none;
  }

  h2 {
    font-size: var(--s0)
  }

  li p {
    max-width: 60ch;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: var(--s2)
    }
  }

</style>