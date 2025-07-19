type IslandRendererProps = {
    name: string
    props?: any
}

export const IslandRenderer = ({ name, props = {} }: IslandRendererProps) => {
    return <div data-island={name} data-props={JSON.stringify(props)} />
}
