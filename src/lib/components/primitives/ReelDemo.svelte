<script>

  import Kitty from '$static/kitty.jpg?w=400;800;1200&format=webp;jpg&meta'
  import Jarritos from '$static/jarritos-mexican-soda.jpg?w=400;800;1200&format=webp;jpg&meta'
  import Reel from '$lib/components/primitives/layout/Reel.svelte'
  import Box from '$lib/components/primitives/layout/Box.svelte'
  import Stack from '$lib/components/primitives/layout/Stack.svelte'
  import Loader from '$lib/components/utils/Loader.svelte'
  import Frame from '$lib/components/primitives/layout/Frame.svelte'
  import Image from '$lib/components/primitives/layout/Image.svelte'

  

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

</script>


<Reel wrapperClass={"reel-demo"} visualInstructions={true}>
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
    <Box wrapperClass="box-less-text">
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

<style>

  div :global(.box) {
    --frame-numerator: 9;
    --frame-denominator: 16;
    --box-text-color: #000;
    --box-bg-color: #fff;
    padding: var(--s0);
    border: 2px solid;
  }

  div :global(.box-less-text) {
    --box-bg-color: pink;
    display: flex;
    min-height: 100%;
  }

</style>