import { breakpointsMedia } from "./breakPointsMedia"


export default function propToStyle(propName) {
    return (props) => {

        const propValue = props[propName]

        if (typeof propValue === 'string' || typeof propValue === 'number') {
            return {
                [propName]: props[propName]
            }
        }

        if (typeof propValue === 'object') {
            return breakpointsMedia({
                xs: {
                    [propName]: propValue.xs
                },
                md: {
                    [propName]: propValue.md
                },
                lg: {
                    [propName]: propValue.lg
                },
                xl: {
                    [propName]: propValue.xl
                },
            })
        }
    }
}
