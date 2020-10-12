import * as React from 'react'

export interface HelloComponentProps {
    name: string
}

export function HelloComponent(props: HelloComponentProps) {
    return (
        <h1>
            Hello, {props.name}!
        </h1>
    )
}