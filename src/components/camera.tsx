import { useThree } from "@react-three/fiber"
import { useLayoutEffect } from "react"

export default function Camera() {
    const { camera } = useThree()

    useLayoutEffect(() => {
        camera.position.set(10, 10, 10)
        camera.lookAt(0, 0, 0)
    }, [camera])

    return null
}