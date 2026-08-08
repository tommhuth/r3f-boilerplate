import { extend } from "@react-three/fiber"
import { Perf } from "r3f-perf"
import config from "@data/config"
import extensions from "./extensions"
import Camera from "./components/camera"

extend(extensions)

export default function App() {
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