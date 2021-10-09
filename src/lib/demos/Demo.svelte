<script>
  import Kitty from '$static/kitty.jpg?w=400;800;1200&format=webp;jpg&meta'
  import Stack from '$lib/toolbox/layout/Stack.svelte'
  import Switcher from '$lib/toolbox/layout/Switcher.svelte'
  import Center from '$lib/toolbox/layout/Center.svelte'
  import Sidebar from '$lib/toolbox/layout/Sidebar.svelte'
  import Jarritos from '$static/jarritos-mexican-soda.jpg?w=400;800;1200&format=webp;jpg&meta'
  import Cover from '$lib/toolbox/layout/Cover.svelte'
  import Box from '$lib/toolbox/layout/Box.svelte'
  import Cluster from '$lib/toolbox/layout/Cluster.svelte'
  import Grid from '$lib/toolbox/layout/Grid.svelte'
  import Reel from '$lib/toolbox/layout/Reel.svelte'
  import Frame from '$lib/toolbox/layout/Frame.svelte'
  // import KittyRawImage from '$static/kitty.jpg'
  // import JarritosRawImage from '$static/jarritos-mexican-soda.jpg'
  import Image from '$lib/toolbox/layout/Image.svelte'
  import ThemeSwitcher from '$lib/toolbox/dark-mode/ThemeSwitcher.svelte'
  import ToggleSection from '$lib/toolbox/toggle-section/ToggleSection.svelte'
  import ToggleButton from '$lib/toolbox/buttons/ToggleButton.svelte'
  import PlayPauseButton from '$lib/toolbox/buttons/PlayPauseButton.svelte'
  import SwitchItems from '$lib/toolbox/buttons/SwitchItems.svelte'
  import TabbedInterfacePE from '$lib/toolbox/tabbed-interface/TabbedInterface.svelte'
  import ClickableCard from '$lib/mods/ClickableCardSection.svelte'
  import HeadingTag from '$lib/toolbox/heading-tag/HeadingTag.svelte'
  import Section from '$lib/toolbox/section/Section.svelte'
  import TodoList from '$lib/toolbox/todo-list/TodoList.svelte'
  import Table from '$lib/toolbox/table/Table.svelte'
  import Toggletip from '$lib/toolbox/toggletip/Toggletip.svelte'
  import Pug from '$static/pug.jpg?w=400;800;1200&format=jpg&meta'
  import { filterArrayOfImageObjects } from '$lib/js/utils'



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

<Center>
  <Section>
    <HeadingTag message={"My Tooltip test"} />
    <Toggletip message="This clarifies whatever needs clarifying" wrapperClass={"testing"} />
  </Section>
</Center>


<Section>
  <HeadingTag message={"This Section has a table later on"} />
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. You know what I'm sayin'?</p>
  <Center --gutters="var(--s-1)">
    <Table caption={"My Cat Family"}/>
  </Center>
</Section>

<TodoList wrapperClass={"my-todo-list"} />

<Section>
  <HeadingTag message={`My Headings Test Section`} />
  <HeadingTag message={`second heading`} />
  <HeadingTag message={`third heading`} />
</Section>

<div class="test-all-layout">

  <Section>

    <ClickableCard {cardData} />

    <Center --measure="75ch">

    </Center>
    <Box wrapperClass="box-buttons-testing">
      <Stack>
        <p>
          This is a test
        </p>
        <PlayPauseButton />
        <ul>
          {#each items as item}
            <SwitchItems 
              {item}
            />
          {/each}
        </ul>
      </Stack>
    </Box>

    <ToggleButton text="Notify by email" --button-focus-color="red" />

    <ToggleSection headerText="My first Toggle Section" expanded={true}>
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
        <HeadingTag message={"We Buy Gold!"} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. Praesent blandit, neque sed ullamcorper tincidunt, mauris nibh blandit orci, eget vulputate tellus velit eget mi. Aenean id erat ultrices, euismod nibh at, sodales metus. Vivamus pretium enim quis justo aliquam venenatis. Aliquam consectetur ligula vel leo ornare, mattis ornare neque interdum. Proin elementum ornare risus, ut vehicula massa facilisis vitae. Phasellus quis pretium justo, vel iaculis dolor.</p>
      </svelte:fragment>
      <svelte:fragment slot="tabpanel-second">
        <HeadingTag message={"Hebbo!"} />
        <p>THIS IS TAB 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. Praesent blandit, neque sed ullamcorper tincidunt, mauris nibh blandit orci, eget vulputate tellus velit eget mi. Aenean id erat ultrices, euismod nibh at, sodales metus. Vivamus pretium enim quis justo aliquam venenatis. Aliquam consectetur ligula vel leo ornare, mattis ornare neque interdum. Proin elementum ornare risus, ut vehicula massa facilisis vitae. Phasellus quis pretium justo, vel iaculis dolor.</p>
      </svelte:fragment>
      <svelte:fragment slot="tabpanel-third">
        <HeadingTag message={"Wubby wubby!"} />
        <p>THIS IS TAB 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. Praesent blandit, neque sed ullamcorper tincidunt, mauris nibh blandit orci, eget vulputate tellus velit eget mi. Aenean id erat ultrices, euismod nibh at, sodales metus. Vivamus pretium enim quis justo aliquam venenatis. Aliquam consectetur ligula vel leo ornare, mattis ornare neque interdum. Proin elementum ornare risus, ut vehicula massa facilisis vitae. Phasellus quis pretium justo, vel iaculis dolor.</p>
      </svelte:fragment>
      <svelte:fragment slot="tabpanel-fourth">
        <HeadingTag message={"Yolotron"} />
        <p>THIS IS TAB 4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. Praesent blandit, neque sed ullamcorper tincidunt, mauris nibh blandit orci, eget vulputate tellus velit eget mi. Aenean id erat ultrices, euismod nibh at, sodales metus. Vivamus pretium enim quis justo aliquam venenatis. Aliquam consectetur ligula vel leo ornare, mattis ornare neque interdum. Proin elementum ornare risus, ut vehicula massa facilisis vitae. Phasellus quis pretium justo, vel iaculis dolor.</p>
      </svelte:fragment>
    </TabbedInterfacePE>

    <Switcher 
      wrapperClass="switcher-testing"
      wrapperElement="ul" 
      --measure="60ch"
      --frame-numerator="9" 
      --frame-denominator="16">
      <li>
        <Box>
          <Stack>
            <Frame lazy={true}>
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
            <Frame lazy={true}>
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
            <Frame lazy={true}>
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
      <li>
        <Box>
          <Stack>
            <Frame lazy={true}>
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
      --measure="50%"
      --frame-numerator="9" 
      --frame-denominator="16"
    >
      <Stack>
        <Frame lazy={true}>
          <Image 
            images={Pug}
            altText={"a grey kitten smiley"}
          />
        </Frame>
        <h3>$50</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. You know what I'm sayin'?</p>
      </Stack>
    </Center>

    <Sidebar 
      --frame-numerator="9" 
      --frame-denominator="16">
      <aside slot="sidebar-content">
        <Stack>
          <Frame lazy={true}>
            <Image 
              images={kittyImages}
              altText={"a grey kitten smiley"}
            />
          </Frame>
          <h3>$50</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. You know what I'm sayin'?</p>
        </Stack>
      </aside>
      <div slot="main-content">
        <Stack>
          <Frame lazy={true}>
            <Image 
              images={jarritosImages}
              altText={"a young Mexican couple"}
            />
          </Frame>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
          </p>
        </Stack>
      </div> 
    </Sidebar>

    <Cover 
      wrapperClass="test-cover"
    >
      <Cluster wrapperElement="ul" wrapperClass="test-outer-cluster">
        <li>
          <Frame 
            lazy={true}
            wrapperClass="test-cluster-top-left-image"
            --numerator="9" 
            --denominator="16" 
          >
            <Image 
              images={kittyImages}
              altText={"a grey kitten smiley"}
            />
          </Frame>
        </li>
        <li>
          <Cluster wrapperClass="test-nav-cluster" wrapperElement="ul">
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
      wrapperClass="test-grid"
      wrapperElement="ul" 
      --frame-numerator="1" 
      --frame-denominator="1" 
    >
      <li>
        <Box wrapperClass="box-grid-testing">
          <Stack>
            <Frame lazy={true}>
              <Image 
                images={kittyImages}
                altText={"a grey kitten smiley"}
              />
            </Frame>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
            </p>
          </Stack>
        </Box>
      </li>
      <li>
        <Box>
          <Stack>
            <Frame lazy={true}>
              <Image 
                images={jarritosImages}
                altText={"a young Mexican couple"}
              />
            </Frame>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
            </p>
          </Stack>
        </Box>
      </li>
      <li>
        <Box>
          <Stack>
            <Frame lazy={true}>
              <Image 
                images={kittyImages}
                altText={"a grey kitten smiley"}
              />
            </Frame>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
            </p>
          </Stack>
        </Box>
      </li>
      <li>
        <Box>
          <Stack>
            <Frame lazy={true}>
              <Image 
                images={jarritosImages}
                altText={"a young Mexican couple"}
              />
            </Frame>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
            </p>
          </Stack>
        </Box>
      </li>
      <li>
        <Box>
          <Stack>
            <Frame lazy={true}>
              <Image 
                images={kittyImages}
                altText={"a grey kitten smiley"}
              />
            </Frame>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
            </p>
          </Stack>
        </Box>
      </li>
    </Grid>

    <Reel wrapperClass="test-reel" visualInstructions={true} --frame-numerator="9" --frame-denominator="16">
      <div>
        <Box>
          <Stack splitAfter={2}>
            <Frame lazy={true}>
              <Image 
                images={kittyImages}
                altText={"a grey kitten smiley"}
              />
            </Frame>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
            </p>
            <p>testing</p>
          </Stack>
        </Box>
      </div>
      <div>
        <Box>
          <Stack>
            <Frame lazy={true}>
              <Image 
                images={jarritosImages}
                altText={"a young Mexican couple"}
              />
            </Frame>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
            </p>
            <p>testing</p>
          </Stack>
        </Box>
      </div>
      <div>
        <Box wrapperClass="test-split-after-box">
          <Stack splitAfter={2}>
            <Frame lazy={true}>
              <Image 
                images={kittyImages}
                altText={"a grey kitten smiley"}
              />
            </Frame>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus  
            </p>
            <p>testing</p>
          </Stack>
        </Box>
      </div>
      <div>
        <Box>
          <Stack splitAfter={2}>
            <Frame lazy={true}>
              <Image 
                images={jarritosImages}
                altText={"a young Mexican couple"}
              />
            </Frame>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
            </p>
            <p>testing</p>
    
          </Stack>
        </Box>
      </div>
      <div>
        <Box>
          <Stack splitAfter={2}>
            <Frame lazy={true}>
              <Image 
                images={kittyImages}
                altText={"a grey kitten smiley"}
              />
            </Frame>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus fringilla velit, eu pulvinar justo mattis eget. Phasellus quis neque at ipsum finibus pretium eu non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eleifend, metus at vulputate ornare, justo est maximus leo, vitae ultrices magna purus vehicula risus. 
            </p>
            <p>testing</p>
          </Stack>
        </Box>
      </div>
    </Reel>
    

  </Section>
</div>


<style>

  .test-all-layout :global(section) {
    --measure: 75ch;
    line-height: 1.5;
  }

  .test-all-layout :global(.box-buttons-testing) {
    padding: var(--s0);
  }

  .test-all-layout :global(.box) {
    --color: #000;
    --background-color: pink;
    border: 2px solid;
    padding: var(--s0);
  }

  .test-all-layout :global(.wrapper .box) {
    padding: 0;
  }

  .test-all-layout :global(.test-cover) {
    --space: var(--s0);
    padding: 0;
    min-height: 80vw;
  }

  .test-all-layout :global(.test-cover .test-outer-cluster) {
    justify-content: space-between;
  }

  .test-all-layout :global(.test-cluster-top-left-image) {
    min-width: 10rem;
  }

  .test-all-layout :global(.test-split-after-box) {
    display: flex;
    min-height: 100%;
  }

  .test-all-layout :global(.test-reel [aria-labelledby="reel-label"]:focus) {
    outline: 4px solid red;
  }


  h3 {
    font-size: 150%;
    text-align: center;
  }

</style>