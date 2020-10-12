import React, { Fragment } from 'react';
import { HelloComponent } from '../../lib/components/HelloComponent';
import { useHello } from '../../lib/hooks/useHello';

export function Home() {
    const { hello } = useHello({ name: 'Mark' })
    
    return (
        <Fragment>
            <HelloComponent name={'Jorge'} />

            <h1>
                {hello}
            </h1>
        </Fragment>
    );
}