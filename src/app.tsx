import { extend } from "@react-three/fiber"
import { Perf } from "r3f-perf"
import { useEffect } from "react"
import config from "@data/config"
import { setState, useStore } from "@data/store"
import useFramerateReady from "@data/use-framerate-ready"
import extensions from "./extensions"
import Camera from "./components/camera"

extend(extensions)

export default function App() {
    const loading = useStore(i => i.loading)

    useFramerateReady(() => setState({ loading: false }))

    useEffect(() => {
        const canvas = document.getElementById("canvas")

        if (!loading && canvas) {
            canvas.style.opacity = "1"
        }
    }, [loading])

    return (
        <>
            <Camera />

            <mesh>
                <boxGeometry />
                <meshPhongMaterial color="white" />
            </mesh>

            <directionalLight
                position={[10, 5, 6]}
            />
            <ambientLight intensity={.5} />

            {config.stats && <Perf position="top-right" deepAnalyze />}
        </>
    )
} 