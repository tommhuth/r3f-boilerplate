import { extend } from "@react-three/fiber"
import extensions from "./extensions"
import Camera from "./components/Camera"

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
        </>
    )
} 