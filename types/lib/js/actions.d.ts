/**
 * Detect if user is using a touch interface, add a 'touch' class to <body> if so
 * @param {HTMLElement} node
 */
export function detectTouch(node: HTMLElement): void;
/**
 * Create aria-labelledby relationship with Section.svelte/Article.svelte's first heading tag.
 * @param {HTMLElement} node
 */
export function enhanceSection(node: HTMLElement): void;
/**
 * @param {HTMLElement} node
 * @param {{ expanded: boolean, headerText: string }} params
 */
export function enhanceToggleSection(node: HTMLElement, params: {
    expanded: boolean;
    headerText: string;
}): void;
/**
 * @param {HTMLElement} node
 * @param {{ once: boolean, cooldown: number, options: object, delay: number, update: *}} [config]
 */
export function intersectionObserver(node: HTMLElement, config?: {
    once: boolean;
    cooldown: number;
    options: object;
    delay: number;
    update: any;
}): {
    update: (update: any) => void;
    destroy: () => any;
};
