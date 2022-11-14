import { useThree } from "@react-three/fiber"
import { useLayoutEffect } from "react"
import { Tuple3 } from "../types"

export default function Camera({
    startPosition = [10, 10, -10]
}: { startPosition?: Tuple3 }) {
    const { camera } = useThree()

    useLayoutEffect(() => {
        camera.position.set(...startPosition)
        camera.lookAt(0, 0, 0)
    }, [camera, ...startPosition])

    return null
}