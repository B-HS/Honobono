import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import * as islands from './';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-island]').forEach(mountIsland);
});

function mountIsland(element: Element) {
    const componentName = element.getAttribute('data-island');
    if (!componentName) return;

    const component = (islands as any)[componentName];
    if (!component) {
        console.warn(`Island component "${componentName}" not found.`);
        return;
    }

    const props = JSON.parse(element.getAttribute('data-props') || '{}');
    const root = createRoot(element);
    root.render(createElement(component, props));
} 