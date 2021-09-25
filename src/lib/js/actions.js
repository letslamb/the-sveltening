// Detect if user is using a touch interface, add a 'touch' class to <body> if so
export function detectTouch(node) {
  window.addEventListener('touchstart', function touched() {
    document.body.classList.add('touch');
    window.removeEventListener('touchstart', touched, false);
  }, false)
}

// Create aria-labelledby relationship with Section.svelte's first heading tag.
// The heading tag is dynamically generated based on number of levels nested within
// instances of Section.svelte, so we don't know which heading level it will be here
export function enhanceSection(node) {
  let sectionHeaderId = node.querySelector('h1, h2, h3, h4, h5, h6').id
  node.setAttribute('aria-labelledby', sectionHeaderId ? sectionHeaderId : null)
}

// Add the button inside the heading tag, hide the content, add an onclick method
// to the button to show/hide the content
export function enhanceToggleSection(node, params) {
  const heading = node.querySelector('h1, h2, h3, h4, h5, h6')
  heading.innerHTML = `
    <button class="collapsible-content-button" aria-expanded=${params.expanded}>
      ${params.headerText}
      <svg viewBox="0 0 10 10" focusable="false">
        <rect class="vert" height="8" width="2" y="1" x="4" />
        <rect height="2" width="8" y="4" x="1" />
      </svg>
    </button>`
  const contentWrapper = node.querySelector('.content-wrapper')
  if (!params.expanded) {
    contentWrapper.hidden = true
  }
  let button = node.querySelector('button')
  button.onclick = () => {
    params.expanded = !params.expanded
    button.setAttribute('aria-expanded', params.expanded)
    contentWrapper.hidden = !params.expanded
  }
}

export function intersectionObserver(node, boolean) {
  if (boolean === true && typeof IntersectionObserver !== "undefined") {
    const onIntersection = (entry) => {
      node.dispatchEvent(new CustomEvent("intersection", {detail: entry}))
    }

    let top = 0;
    let bottom = 0;
    let left = 0;
    let right = 0;

    const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true) {
          onIntersection(entries[0])
          return observer.unobserve(node)
        }
        // if (intersecting && once) {
        //   observer.unobserve(node);
        // }
      },
      {
        rootMargin,
      }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }
  return
}