import React from 'react'

import Button from '../../components/Button/button'

export const ButtonTest = () => {
    return (
        <div>
            <div>type=primary,size=lg</div>
            <Button btnType="primary" size="lg">
                Button
            </Button>

            <div>type=link</div>
            <Button btnType="link" href="https://bilibili.com">
                B站
            </Button>
        </div>
    )
}
