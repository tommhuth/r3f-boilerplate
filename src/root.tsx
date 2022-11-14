import "../assets/styles/app.scss"

import { Canvas } from "@react-three/fiber"
import { createRoot } from "react-dom/client"

import App from "./App"
 
createRoot(document.getElementById("canvas")).render((
    <Canvas
        gl={{
            antialias: false,
            depth: true,
            stencil: false,
            alpha: true
        }}
        style={{
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            height: "100%",
            position: "fixed",
        }}
        orthographic
        camera={{ zoom: 80 }}
        dpr={[1, window.devicePixelRatio * .75]}
    >
        <App />
    </Canvas>
))