import React from 'react'
import classNames from 'classnames'

// export enum ButtonSize {
//     Large = 'lg',
//     Small = 'sm'
// }
//
// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'fanger',
//     Link = 'link'
// }

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
    className?: string
    disabled?: boolean
    size?: ButtonSize
    btnType?: ButtonType
    href?: string
    children: React.ReactNode
}

// 原生button属性
type NativaButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps =  Partial<NativaButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        btnType,
        disabled,
        size,
        children,
        href,
        ...restProps
    } = props

    //btn btn-lg
    const classes = classNames('btn',className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })

    if(btnType === ButtonType.Link && href) {
        return (
            <a className={classes}
               href={href}
               {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button className={classes}
                    disabled={disabled}
                    {...restProps}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button
