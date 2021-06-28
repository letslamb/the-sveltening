<script>
  import Kitty from '$static/kitty.jpg?w=400;800;1200&format=webp;jpg&meta'
  import Stack from '$lib/components/primitives/layout/Stack.svelte'
  import Switcher from '$lib/components/primitives/layout/Switcher.svelte'
  import Center from '$lib/components/primitives/layout/Center.svelte'
  import Sidebar from '$lib/components/primitives/layout/Sidebar.svelte'
  import Jarritos from '$static/jarritos-mexican-soda.jpg?w=400;800;1200&format=webp;jpg&meta'
  import Cover from '$lib/components/primitives/layout/Cover.svelte'
  import Box from '$lib/components/primitives/layout/Box.svelte'
  import Cluster from '$lib/components/primitives/layout/Cluster.svelte'
  import Grid from '$lib/components/primitives/layout/Grid.svelte'
  import Reel from '$lib/components/primitives/layout/Reel.svelte'
  import Frame from '$lib/components/primitives/layout/Frame.svelte'
  import KittyRawImage from '$static/kitty.jpg'
  import JarritosRawImage from '$static/jarritos-mexican-soda.jpg'
  import Image from '$lib/components/primitives/layout/Image.svelte'
  import Imposter from '$lib/components/primitives/layout/Imposter.svelte'
  import Icon from '$lib/components/primitives/layout/Icon.svelte'
  import AccessibilityIcon from '$static/material-icons/accessibility_24px_outlined.svg'
  import Loader from '$lib/components/primitives/utils/Loader.svelte'
  import ThemeSwitcher from '$lib/components/primitives/utils/ThemeSwitcher.svelte'
  import ToggleSection from '$lib/components/primitives/utils/ToggleSection.svelte'
  import ToggleButton from '$lib/components/primitives/utils/buttons/ToggleButton.svelte'
  import PlayPauseButton from '$lib/components/primitives/utils/buttons/PlayPauseButton.svelte'
  import SwitchItems from '$lib/components/primitives/utils/buttons/SwitchItems.svelte'
  import TabbedInterfacePE from '$lib/components/primitives/presentation/TabbedInterfacePE.svelte'
  import ClickableCard from '$lib/components/combos/segs/ClickableCardSection.svelte'
  import HeadingTag from '$lib/components/primitives/presentation/HeadingTag.svelte'
  import Section from '$lib/components/primitives/presentation/Section.svelte'




  console.log(AccessibilityIcon)



  // console.log(kittyImages)

  function filterArrayOfImageObjects (arrayOfImageObjects) {
    const newArr = []

    const allowed = ['format', 'width', 'height', 'src'];

    for (const imageObject of arrayOfImageObjects) {
      let filtered = Object.fromEntries(
        Object.entries(imageObject).filter(
          ([key, val]) => allowed.includes(key)
        )
      )
      newArr.push(filtered)
    }

    let webpsOnly = newArr.filter(x => x.format === 'webp')
    webpsOnly.reverse()

    return webpsOnly
  }

  const kittyImages = filterArrayOfImageObjects(Kitty)
  console.log(`kittyImages: ${JSON.stringify(kittyImages, null, ' ')}`)

  const jarritosImages = filterArrayOfImageObjects(Jarritos)
  console.log(`jarritosImages: ${JSON.stringify(jarritosImages, null, ' ')}`)

  let items = [{uniqueId: "notify-email", visibleText: "Notify by email"}, {uniqueId: 'notify-sms', visibleText: "Notify by SMS"}]

  let testSectionTitles = [
    "Test",
    "Section 2",
    "Section 3",
    "Section 4",
  ]

  let cardData = [{
    image: kittyImages,
    altText: ' ',
    link: {
      visibleText: 'Check It Out',
      href: '/test'
    },
    bodyText: "In the next example, two different spellings of a word are defined using description lists.",
    tinyText: "By Mike lamb"
  },
  {
    image: kittyImages,
    altText: ' ',
    link: {
      visibleText: 'Doja Cat',
      href: '/test'
    },
    bodyText: "In the next example, two different spellings of a word are defined using description lists.",
    tinyText: "By Mike lamb"
  },
  {
    image: kittyImages,
    altText: ' ',
    link: {
      visibleText: 'Bowseroo',
      href: '/test'
    },
    bodyText: "In the next example, two different spellings of a word are defined using description lists.",
    tinyText: "By Mike lamb"
  }]

</script>

<Section>
  <HeadingTag message={"Hebbo Dair!"} />
  <Section>
    <HeadingTag message={"this should be an h3"} />
    <Section>
      <HeadingTag message={"this should be an h4"} />
      <Section>
        <HeadingTag message={"this should be an h5"} />
        <Section>
          <HeadingTag message={"this should be an h6"} />
          <Section>
            <HeadingTag message={"this should be an h6 also"} />
          </Section>
        </Section>
      </Section>

    </Section>
  </Section>
</Section>

<Section>
  <HeadingTag message={"this should be an h2"} />
</Section>



<!-- <section class="content-section-wrapper"> -->

  <ClickableCard {cardData} />

  <Box --box-padding="var(--s0)">
    <Stack>
      <p slot="stack-first-item">
        This is a test
      </p>
      <PlayPauseButton slot="stack-second-item" />
        <ul slot="stack-third-item">
          {#each items as item}
            <SwitchItems 
              {item}
            />
          {/each}
        </ul>
    </Stack>
  </Box>

  <ToggleButton text="Notify by email" --button-focus-color="red"/>

  <ToggleSection expanded={true}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. You know what I'm sayin'?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. You know what I'm sayin'?</p>
  </ToggleSection>
  <ToggleSection headerText={"Services"}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. You know what I'm sayin'?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. You know what I'm sayin'?</p>
  </ToggleSection>
  <ToggleSection headerText={"Pricing"}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. You know what I'm sayin'?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. You know what I'm sayin'?</p>
  </ToggleSection>

  <ThemeSwitcher />

  <TabbedInterfacePE sectionTitles={testSectionTitles}>
    <svelte:fragment slot="tabpanel-first">
      <h2>We Buy Gold!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. Praesent blandit, neque sed ullamcorper tincidunt, mauris nibh blandit orci, eget vulputate tellus velit eget mi. Aenean id erat ultrices, euismod nibh at, sodales metus. Vivamus pretium enim quis justo aliquam venenatis. Aliquam consectetur ligula vel leo ornare, mattis ornare neque interdum. Proin elementum ornare risus, ut vehicula massa facilisis vitae. Phasellus quis pretium justo, vel iaculis dolor.</p>
    </svelte:fragment>
    <svelte:fragment slot="tabpanel-second">
      <h2>Hebbo!</h2>
      <p>THIS IS TAB 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. Praesent blandit, neque sed ullamcorper tincidunt, mauris nibh blandit orci, eget vulputate tellus velit eget mi. Aenean id erat ultrices, euismod nibh at, sodales metus. Vivamus pretium enim quis justo aliquam venenatis. Aliquam consectetur ligula vel leo ornare, mattis ornare neque interdum. Proin elementum ornare risus, ut vehicula massa facilisis vitae. Phasellus quis pretium justo, vel iaculis dolor.</p>
    </svelte:fragment>
    <svelte:fragment slot="tabpanel-third">
      <h2>Wubby wubby!</h2>
      <p>THIS IS TAB 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. Praesent blandit, neque sed ullamcorper tincidunt, mauris nibh blandit orci, eget vulputate tellus velit eget mi. Aenean id erat ultrices, euismod nibh at, sodales metus. Vivamus pretium enim quis justo aliquam venenatis. Aliquam consectetur ligula vel leo ornare, mattis ornare neque interdum. Proin elementum ornare risus, ut vehicula massa facilisis vitae. Phasellus quis pretium justo, vel iaculis dolor.</p>
    </svelte:fragment>
    <svelte:fragment slot="tabpanel-fourth">
      <h2>Yolotron!</h2>
      <p>THIS IS TAB 4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. Praesent blandit, neque sed ullamcorper tincidunt, mauris nibh blandit orci, eget vulputate tellus velit eget mi. Aenean id erat ultrices, euismod nibh at, sodales metus. Vivamus pretium enim quis justo aliquam venenatis. Aliquam consectetur ligula vel leo ornare, mattis ornare neque interdum. Proin elementum ornare risus, ut vehicula massa facilisis vitae. Phasellus quis pretium justo, vel iaculis dolor.</p>
    </svelte:fragment>
  </TabbedInterfacePE>

  <Switcher 
    wrapperElement="ul" 
    --switcher-measure="var(--measure)" 
    --box-border="2px solid" 
    --box-padding="var(--s0)" 
    --box-text-color="#000" 
    --box-bg-color="#fff" 
    --frame-numerator="9" 
    --frame-denominator="16">
    <li>
      <Box>
        <Stack>
            <Frame>
              <Image 
                images={kittyImages}
                altText={"a grey kitten smiley"}
              />
            </Frame>
          <h3>$10</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. You know what I'm sayin'?</p>
        </Stack>
      </Box>
    </li>
    <li>
      <Box>
        <Stack>
            <Frame>
              <Image 
                images={kittyImages}
                altText={"a grey kitten smiley"}
              />
            </Frame>
          <h3>$20</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. You know what I'm sayin'?</p>
        </Stack>
      </Box>
    </li>
    <li>
      <Box>
        <Stack>
            <Frame>
              <Image 
                images={kittyImages}
                altText={"a grey kitten smiley"}
              />
            </Frame>
          <h3>$50</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. You know what I'm sayin'?</p>
        </Stack>
      </Box>
    </li>
  </Switcher>

  <Center
    --center-max-width="50%"
    --frame-numerator="9" 
    --frame-denominator="16"
  >
    <Stack>
      <Loader>
        <Frame>
          <Image 
            images={kittyImages}
            altText={"a grey kitten smiley"}
          />
        </Frame>
      </Loader>
      <h3>$50</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. You know what I'm sayin'?</p>
    </Stack>
  </Center>

  <Sidebar 
    --frame-numerator="9" 
    --frame-denominator="16">
    <aside slot="sidebar-content">
      <Stack>
        <Loader>
          <Frame>
            <Image 
              images={kittyImages}
              altText={"a grey kitten smiley"}
            />
          </Frame>
        </Loader>
        <h3>$50</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. You know what I'm sayin'?</p>
      </Stack>
    </aside>
    <div slot="main-content">
      <Stack>
        <Loader>
          <Frame>
            <Image 
              images={jarritosImages}
              altText={"a young Mexican couple"}
            />
          </Frame>
        </Loader>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
        </p>
      </Stack>
    </div> 
  </Sidebar>

  <Cover 
    --cover-padding="0" 
    --cover-min-height="80vh" 
    --cluster-justify="space-between" 
    --cluster-gap="1rem" 
    --frame-numerator="9" 
    --frame-denominator="16" 
    --frame-min-width="10rem" >
      <Cluster wrapperElement="ul">
        <li>
          <Loader>
            <Frame>
              <Image 
                images={kittyImages}
                altText={"a grey kitten smiley"}
              />
            </Frame>
          </Loader>
        </li>
        <li>
          <Cluster --cluster-justify="flex-start" wrapperElement="ul">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>            
            </li>
            <li>
              <a href="/contact">Contact</a> 
            </li>
            <li>
              <a href="/bowser">Bowser</a>  
            </li>
          </Cluster>
        </li>        
      </Cluster>
      <h1>Love Monkeys</h1>
      <button>
        Learn More
      </button>
  </Cover>

  <Grid 
    wrapperElement="ul" 
    --frame-numerator="1" 
    --frame-denominator="1" 
    --box-padding="var(--s0)" 
    --box-border="2px solid" 
    --box-text-color="#000" 
    --box-bg-color="#fff"
  >
    <li>
      <Box>
        <Stack>
          <Loader>
            <Frame>
              <Image 
                images={kittyImages}
                altText={"a grey kitten smiley"}
              />
            </Frame>
          </Loader>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
          </p>
        </Stack>
      </Box>
    </li>
    <li>
      <Box>
        <Stack>
          <Loader>
            <Frame>
              <Image 
                images={jarritosImages}
                altText={"a young Mexican couple"}
              />
            </Frame>
          </Loader>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
          </p>
        </Stack>
      </Box>
    </li>
    <li>
      <Box>
        <Stack>
          <Loader>
            <Frame>
              <Image 
                images={kittyImages}
                altText={"a grey kitten smiley"}
              />
            </Frame>
          </Loader>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
          </p>
        </Stack>
      </Box>
    </li>
    <li>
      <Box>
        <Stack>
          <Loader>
            <Frame>
              <Image 
                images={jarritosImages}
                altText={"a young Mexican couple"}
              />
            </Frame>
          </Loader>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
          </p>
        </Stack>
      </Box>
    </li>
    <li>
      <Box>
        <Stack>
          <Loader>
            <Frame>
              <Image 
                images={kittyImages}
                altText={"a grey kitten smiley"}
              />
            </Frame>
          </Loader>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
          </p>
        </Stack>
      </Box>
    </li>
  </Grid>

  <Reel visualInstructions={true} --box-border="2px solid" --box-padding="var(--s0)" --box-text-color="#000" --box-bg-color="#fff" --frame-numerator="9" --frame-denominator="16">
    <div>
      <Box>
        <Stack splitAfter={2}>
          <Loader>
            <Frame>
              <Image 
                images={kittyImages}
                altText={"a grey kitten smiley"}
              />
            </Frame>
          </Loader>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
          </p>
          <p>testing</p>
        </Stack>
      </Box>
    </div>
    <div>
      <Box>
        <Stack>
          <Loader>
            <Frame>
              <Image 
                images={jarritosImages}
                altText={"a young Mexican couple"}
              />
            </Frame>
          </Loader>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
          </p>
          <p>testing</p>
        </Stack>
      </Box>
    </div>
    <div>
      <Box --box-display="flex" --box-min-height="100%">
        <Stack splitAfter={2}>
          <Loader>
            <Frame>
              <Image 
                images={kittyImages}
                altText={"a grey kitten smiley"}
              />
            </Frame>
          </Loader>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus  
          </p>
          <p>testing</p>
        </Stack>
      </Box>
    </div>
    <div>
      <Box>
        <Stack splitAfter={2}>
          <Loader>
            <Frame>
              <Image 
                images={jarritosImages}
                altText={"a young Mexican couple"}
              />
            </Frame>
          </Loader>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
          </p>
          <p>testing</p>
  
        </Stack>
      </Box>
    </div>
    <div>
      <Box>
        <Stack splitAfter={2}>
          <Loader>
            <Frame>
              <Image 
                images={kittyImages}
                altText={"a grey kitten smiley"}
              />
            </Frame>
          </Loader>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
          </p>
          <p>testing</p>
        </Stack>
      </Box>
    </div>
  </Reel>

  <div class="icon-test">
    <Icon iconText={"Accessibility"} --space="0.5em">
      <svg id="a11y" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="accessibility_24px">
        <path id="icon/action/accessibility_24px" fill-rule="evenodd" clip-rule="evenodd" d="M14 4C14 2.89999 13.1 2 12 2C10.9 2 10 2.89999 10 4C10 5.10001 10.9 6 12 6C13.1 6 14 5.10001 14 4ZM15 9H21V7H3V9H9V22H11V16H13V22H15V9Z" fill="black" fill-opacity="0.54"/>
        </g>
        </svg>
    </Icon>
  </div>
  

<!-- </section> -->

<style>

  section {
    --measure: 75ch;
    /* --sidebar-width: 20rem; */
  }

  h3 {
    font-size: 150%;
    text-align: center;
  }

  /* .content-section-wrapper {
    padding: 1.5rem;
    line-height: 1.5;
  } */

  .icon-test {
    margin-top: 2rem;
  }
</style>