import { browser } from '$app/env'

// Detect if a browser supports a CSS property/value combo
export function isDeclarationSupported(property, value) {
  let prop = property + ':',
    el = document.createElement('test'),
    mStyle = el.style
  el.style.cssText = prop + value
  return mStyle[property]
}

// Detect if user is using a touch interface, add a 'touch' class to <body> if so
export function detectTouch(node) {
  window.addEventListener('touchstart', function touched() {
    document.body.classList.add('touch');
    window.removeEventListener('touchstart', touched, false);
  }, false)
}
