<script>
  import Hamburger from '$lib/components/presentation-primitives/HamburgerMenu.svelte'
  import ImageLoader from '$lib/components/combos/ImageLoader.svelte'
  import Kitty from '$static/kitty.jpeg?w=200;400;&format=webp;jpg;&meta'
  import Card from '$lib/components/presentation-primitives/Card.svelte'
  import Couple from '$static/lightsaber-couple.jpeg?w=200;400;&format=webp;jpg;&meta'
  import Stack from '$lib/components/layout-primitives/Stack.svelte'
  import Switcher from '$lib/components/layout-primitives/Switcher.svelte'



</script>

<section class="content-section-wrapper">
  <Switcher>
    <div slot="switcher-first-child">
      <Card>
        <Stack>
          <figure slot="first-item">
            <ImageLoader
              processedImages={Kitty}
            />
          </figure>
          <h3 slot="second-item">$10</h3>
          <p slot="third-item">Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigga talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
        </Stack>
      </Card>
    </div>
    <div slot="switcher-second-child">
      <Card>
        <Stack>
          <figure slot="first-item">
            <ImageLoader
              processedImages={Kitty}
            />
          </figure>
          <h3 slot="second-item">$20</h3>
          <p slot="third-item">Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigga talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
        </Stack>
      </Card>
    </div>
    <div slot="switcher-third-child">
      <Card>
        <Stack>
          <figure slot="first-item">
            <ImageLoader
              processedImages={Kitty}
            />
          </figure>
          <h3 slot="second-item">$50</h3>
          <p slot="third-item">Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigga talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
        </Stack>
      </Card>
    </div>
  </Switcher>
</section>

<style>

  section {
    --measure: 75ch;
    --s1: 1.5rem;
  }

  h3 {
    font-size: 150%;
    text-align: center;
  }

  .content-section-wrapper {
    /* --card-padding: 1.5rem; */
    padding: 1.5rem;
    line-height: 1.5;
  }

</style>