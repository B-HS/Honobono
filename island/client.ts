import * as islands from 'island'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'

const islandMap: Record<string, React.ComponentType<unknown>> = islands

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-island]').forEach(mountIsland)
})

const mountIsland = (element: Element) => {
    const componentName = element.getAttribute('data-island')
    if (!componentName) return

    const Component = islandMap[componentName]
    if (!Component) {
        console.warn(`Island component "${componentName}" not found.`)
        return
    }

    const props = JSON.parse(element.getAttribute('data-props') || '{}')
    const root = createRoot(element)
    root.render(createElement(Component, props))
}
