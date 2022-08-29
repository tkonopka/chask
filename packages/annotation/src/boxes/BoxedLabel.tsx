import { BoxedLabelProps } from './types'
import {
    BOTTOM,
    composeClassName,
    getAbsolutePosition,
    getAnchoredOrigin,
    LEFT,
    Rectangle,
    RIGHT,
    SizeSpec,
    Typography,
    TOP,
    useDimensions,
    useScales,
} from '@chask/core'

export const BoxedLabel = ({
    position,
    units = 'absolute',
    size = [26, 100],
    translate = [0, 0],
    anchor = [0.5, 0.5],
    rotate = 0,
    expansion = [0, 0, 0, 0],
    rx,
    ry,
    boxStyle,
    textStyle,
    className,
    style,
    setRole = true,
    children,
}: BoxedLabelProps) => {
    const dimensions = useDimensions()
    const scales = useScales()
    if (children === undefined || children === '') return null

    // compute effective x, y position for top-left corner or box
    const absPos = getAbsolutePosition(position, units, dimensions.innerSize, scales)
    let [x, y] = getAnchoredOrigin(absPos, size, anchor)
    // adjust to get the box center
    x += size[0] / 2 + translate[0]
    y += size[1] / 2 + translate[1]

    // adjust (enlarge/shrink) the effective size
    const absSize: SizeSpec = [
        (size[0] += expansion[LEFT] + expansion[RIGHT]),
        (size[1] += expansion[TOP] + expansion[BOTTOM]),
    ]

    // location and rotation of center of label
    const translation = 'translate(' + x + ',' + y + ')'
    const rotation = rotate === 0 ? '' : ' rotate(' + rotate + ')'

    let compositeClassName: string | undefined = className ?? ''
    if (compositeClassName.search('boxedLabel') < 0) {
        compositeClassName = composeClassName(['label boxedLabel', className])
    }

    // content of the label - text or custom node
    const content =
        typeof children === 'string' ? (
            <Typography
                variant={'boxed-label'}
                className={compositeClassName}
                style={textStyle}
                setRole={setRole}
            >
                {children}
            </Typography>
        ) : (
            children
        )

    return (
        <g
            transform={translation + rotation}
            style={style}
            className={compositeClassName}
            role={setRole ? 'boxed-label' : undefined}
        >
            <Rectangle
                variant={'boxed-label'}
                x={0}
                y={0}
                width={absSize[0]}
                height={absSize[1]}
                rx={rx}
                ry={ry}
                center={true}
                className={compositeClassName}
                style={boxStyle}
                setRole={setRole}
            />
            {content}
        </g>
    )
}
