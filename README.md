# the-sveltening

A **_work-in-progress_** design system for empowering developers to build accessible SvelteKit applications while making layout easy. 

## [Toolbox](https://github.com/realgoatish/the-sveltening/tree/main/src/lib/toolbox)
Contains the following:

### [layout components](https://github.com/realgoatish/the-sveltening/tree/main/src/lib/toolbox/layout)
  - low-level layout context components, based on Heydon Pickering & Andy Bell's [Every Layout](https://every-layout.dev). These components solve most common layout needs. If you want to learn more about how they work, and how to design algorithmically instead of fighting to make layouts do what you want, _**[you should buy Every Layout](https://every-layout.dev/checkout/)**_. 
    
    Seriously, it's one of the best investments I've made in my professional learning as a web developer, and I can't recommend it enough. The website also offers a sizable chunk of their content for free, so you can sample it and see for yourself before buying.
    
### automated heading tags
  - [headingtag](https://github.com/realgoatish/the-sveltening/tree/main/src/lib/toolbox/heading-tag) 
    - a context-aware heading tag component to enable sound [page structure](https://www.w3.org/WAI/tutorials/page-structure/headings/) without the development & maintenance burden of hard-coded `<h1>` - `<h6>` tags. This component detects how many `<section>` and `<article>` components it's nested within, and generates `<h1>` - `<h6>` accordingly.
  - [section](https://github.com/realgoatish/the-sveltening/tree/main/src/lib/toolbox/section)
    - sets the nesting context and an `aria-labelledby` relationship with its first headingtag descendant.
  - [article](https://github.com/realgoatish/the-sveltening/tree/main/src/lib/toolbox/article)
    - exactly the same as `Section.svelte`, but with an `<article>` tag instead.
  
### [carousel](https://github.com/realgoatish/the-sveltening/tree/main/src/lib/toolbox/carousel)
  - An implementation of [W3.org's example of an accessible carousel](https://www.w3.org/TR/wai-aria-practices-1.1/examples/carousel/carousel-1.html). _This still needs to be refactored into idiomatic Svelte code_, but it works as-is.

### accessible component templates
  - Most of the other folders in `src/lib/toolbox` contain boilerplate templates for accessible versions of common UI patterns, adapted for Svelte from Heydon Pickering's [Inclusive Components](https://inclusive-components.design/).

    - [buttons](https://github.com/realgoatish/the-sveltening/tree/main/src/lib/toolbox/buttons)
    - [dark mode](https://github.com/realgoatish/the-sveltening/tree/main/src/lib/toolbox/dark-mode)
    - [modal](https://github.com/realgoatish/the-sveltening/tree/main/src/lib/toolbox/modal)
    - [tabbed interface](https://github.com/realgoatish/the-sveltening/tree/main/src/lib/toolbox/tabbed-interface)
    - [table](https://github.com/realgoatish/the-sveltening/tree/main/src/lib/toolbox/table)
    - [todo list](https://github.com/realgoatish/the-sveltening/tree/main/src/lib/toolbox/todo-list)
    - [collapsible sections](https://github.com/realgoatish/the-sveltening/tree/main/src/lib/toolbox/toggle-section)
    - [toggletip](https://github.com/realgoatish/the-sveltening/tree/main/src/lib/toolbox/toggletip)

    - **Important Note**: accessibility can never be totally boilerplated in a "set it and forget it" manner. The point of these components is to provide sensible defaults and enable learning about the different considerations to be aware of. Your project's semantic contexts will always play a role in determining specifics of implementations.
  





  
