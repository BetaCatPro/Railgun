import React from 'react'

import Button from '../../components/Button/button'

export const ButtonTest = () => {
    return (
        <div>
            <Button size="sm">Button</Button>
            <Button btnType="primary" size="sm">Button</Button>
            <Button btnType="danger" size="lg">Button</Button>
            <Button btnType="warning" size="lg" disabled>Button</Button>
            <Button btnType="link" href="https://bilibili.com">B站</Button>
            <Button btnType="link" href="https://bilibili.com" disabled>B站</Button>
        </div>
    )
}
