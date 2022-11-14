
import Camera from "./components/Camera"
import { EffectComposer } from "@react-three/postprocessing"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Mesh } from "three"

export default function App() {
    const boxRef = useRef<Mesh>(null)

    useFrame(({ clock }) => {
        if (boxRef.current) {
            boxRef.current.position.y = Math.cos(clock.getElapsedTime() * 5) * .15
            boxRef.current.rotation.y += .025
        }
    })

    return (
        <Suspense fallback={null}>
            <Camera />

            <directionalLight
                color={0xffffff}
                position={[6, 12, 10]}
                intensity={1}
            />
            <ambientLight intensity={.5} />

            <mesh ref={boxRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshLambertMaterial />
            </mesh>

            <EffectComposer>
                {/* nothing */}
            </EffectComposer>
        </Suspense>
    )
}