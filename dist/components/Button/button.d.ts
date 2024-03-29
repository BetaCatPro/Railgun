import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'warning'
interface BaseButtonProps {
    className?: string
    /**设置 Button 的禁用 */
    disabled?: boolean
    /**设置 Button 的尺寸 */
    size?: ButtonSize
    /**设置 Button 的类型 */
    btnType?: ButtonType
    children: React.ReactNode
    href?: string
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'railgun'
 * ~~~
 */
export declare const Button: FC<ButtonProps>
export default Button
