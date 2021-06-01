

## Primtives

### Image.svelte

'currentSrc' is set after the component is mounted and img.currentSrc is decided. It is exposed as a prop only because it needs to be passed up with slot props in the case of e.g. the `<ImageLoader>` component when its 'thumbnail=true'

### HamburgerMenu.svelte

This component accepts an array of objects to be fed into the Nav menu. Properties needed are for the `visibletext` the item will display in the opened menu, and the `route` the item will link to onclick.

#### CSS Custom Properties



### IntersectionObserver.svelte

### ThumbnailWrapper.svelte


## Combos

### ImageLoader.svelte

#### props

  'src', 'width', and 'height' are for the normal `<img>` tag only. 

  'width' and 'height' props are for providing the image's dimensions for the browser to calculate its aspect ratio & avoid jank when the image loads. These props don't directly control the image's width and height in the DOM because the `<Image>` component has the following overriding CSS:
     img {
       width: 100%;
       height: auto; 
       ...
     }
  Use a wrapper around `<ImageLoader>` (e.g. `<figure>`) for more direct control over an image's actual dimensions in the DOM.

  ##### thumbnail

  'thumbnail=true' will wrap the image in an <a> tag

  ##### alt

  ##### src

  ##### width

  ##### height

  ##### processedImages

  'processedImages' should be used when you have multiple processed versions of an image to be served based on viewport width. It can also handle multiple image formats

## Layouts