import Camera from "./components/Camera"
import { Canvas } from "@react-three/fiber"
import {
    NoToneMapping,
    VSMShadowMap,
} from "three"
import { Perf } from "r3f-perf"
import Config from "./data/Config"

export default function Wrapper() {

    return (
        <>
            <Canvas
                gl={{
                    antialias: false,
                    depth: true,
                    stencil: false,
                    alpha: false,
                    powerPreference: "high-performance",
                    toneMapping: NoToneMapping,
                }}
                style={{
                    left: 0,
                    top: 0,
                    position: "fixed",
                }}
                shadows={{
                    type: VSMShadowMap,
                }}
                orthographic
                camera={{
                    zoom: 140,
                    near: 1,
                    far: 150,
                }}
                dpr={window.devicePixelRatio}
            >
                <Camera />

                <mesh>
                    <boxGeometry />
                    <meshPhongMaterial color={"white"} />
                </mesh>

                <directionalLight
                    position={[10, 5, 6]}
                />
                <ambientLight intensity={.5} />

                {Config.STATS && (
                    <Perf
                        deepAnalyze
                        style={{ zIndex: 90000 }}
                    />
                )}
            </Canvas>
        </>
    )
} 