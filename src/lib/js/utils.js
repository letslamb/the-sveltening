
// Detect if a browser supports a CSS property/value combo
export function isDeclarationSupported(property, value) {
  let prop = property + ':',
    el = document.createElement('test'),
    mStyle = el.style
  el.style.cssText = prop + value
  return mStyle[property]
}


