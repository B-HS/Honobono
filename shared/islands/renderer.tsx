import type { ComponentProps } from 'react'
import * as islands from 'island'

type IslandProps = {
    [P in keyof typeof islands]: {
        name: P
        props?: ComponentProps<(typeof islands)[P]>
    }
}[keyof typeof islands]

export const IslandRenderer = ({ name, props }: IslandProps) => {
    return <div data-island={name} data-props={props ? JSON.stringify(props) : '{}'} />
}
