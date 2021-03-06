import random from "@huth/random"
import { createContext } from "react"


export function ndelta(delta) {
    return Math.min(delta, 1 / 60 * 2)
}

export function cyclic(list = [], randomness = .1) {
    let i = 0

    return function next() {
        let result

        if (random.boolean(randomness)) {
            result = random.pick(...list)
        } else {
            result = list[i % (list.length)]
            i++
        }

        return result
    }
}
 

export function shuffle(array) {
    return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
}

export function easeInSine(x) {
    return 1 - Math.cos((x * Math.PI) / 2)
}

export function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num
} 

export function easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2
}

// https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56
export function map(val, in_min, in_max, out_min, out_max) {
    return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

export function Only(props) {
    return props.if ? <>{props.children}</> : null
}
 
// Source: https://medium.com/@Heydon/managing-heading-levels-in-design-systems-18be9a746fa3
const Level = createContext(1)

export function Section({ children }) {
    return (
        <Level.Consumer>
            {level => <Level.Provider value={level + 1}>{children}</Level.Provider>}
        </Level.Consumer>
    )
}

export function Heading(props) {
    return (
        <Level.Consumer>
            {level => {
                let Component = `h${Math.min(level, 6)}`

                return <Component {...props} />
            }}
        </Level.Consumer>
    )
}

export function glsl(t) {
    for (var o = [t[0]], i = 1, l = arguments.length; i < l; i++) {
        o.push(arguments[i], t[i])
    }

    return o.join("")
}