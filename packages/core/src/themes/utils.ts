import { cloneDeep, merge } from 'lodash'
import { useTheme } from './context'
import { ThemedComponent, ThemeSpec, WithVariant } from './types'
import { CssProps } from '../general'
import { camelCase } from './helpers'
import { useMemo } from 'react'

// construct a className string by composing a variant code and a className string
export const getClassName = (
    variant: string,
    className: string | undefined,
    skipDefault = true
): string | undefined => {
    const prefix = skipDefault && variant === 'default' ? '' : camelCase(variant)
    if (prefix.length === 0 && !className) return undefined
    return prefix + (className && prefix.length ? ' ' : '') + camelCase(className)
}

export const addColor = (style: CssProps | undefined, color: string | undefined) => {
    if (!style) return { fill: color, stroke: color }
    const result = cloneDeep(style)
    if (!result.fill) {
        result.fill = color
    }
    if (!result.stroke) {
        result.stroke = color
    }
    return result
}

export const addOpacity = (style: CssProps | undefined, opacity: number) => {
    if (!style) return { opacity }
    const result = cloneDeep(style)
    result.opacity = opacity
    return result
}

export const mergeTheme = (baseTheme: ThemeSpec, customTheme?: ThemeSpec) => {
    return merge(cloneDeep(baseTheme), customTheme ?? {})
}

export const mergeThemes = (themes: ThemeSpec[]) => {
    let result = cloneDeep(themes[0])
    themes.forEach((theme: ThemeSpec, i: number) => {
        if (i === 0) return
        result = merge(result, theme)
    })
    return result
}

export const useThemedProps = <Props extends WithVariant>(props: Props, key: ThemedComponent) => {
    const theme = useTheme()
    return useMemo(() => {
        return merge(cloneDeep(theme[key][String(props.variant ?? 'default')]), props)
    }, [theme, props, key])
}
