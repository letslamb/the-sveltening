<script>
  import Carousel from '$lib/toolbox/carousel/Carousel.svelte'
  import Kitty from '$static/kitty.jpg?w=400;800;1200&format=webp;jpg&meta'
  import Jarritos from '$static/jarritos-mexican-soda.jpg?w=400;800;1200&format=webp;jpg&meta'
  import FlowerBasket from '$static/flowerbasket.jpg?w=400;800;1200&format=webp;jpg&meta'
  import Graffiti from '$static/graffiti.jpg?w=400;800;1200&format=webp;jpg&meta'
  import Couple from '$static/lightsaber-couple.jpg?w=400;800;1200&format=webp;jpg&meta'
  import { filterArrayOfImageObjects } from '$lib/js/utils'

  const images = [
    { arr: filterArrayOfImageObjects(Kitty), altText: "a grey kitten" },
    { arr: filterArrayOfImageObjects(Jarritos), altText: "a young Latin couple" },
    { arr: filterArrayOfImageObjects(FlowerBasket), altText: "a basket of flowers in a meadow" },
    { arr: filterArrayOfImageObjects(Graffiti), altText: "a wall of graffiti art" },
    { arr: filterArrayOfImageObjects(Couple), altText: "a young couple with lightsabers" },

  ]

  $: console.log(images)

</script>

<Carousel
  {images}
/>