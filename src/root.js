import "../assets/styles/app.scss"

import { createRoot, extend } from "@react-three/fiber"
import { Group } from "three"
import App from "./App"

extend({
    Group, 
})

const root = createRoot(document.getElementById("canvas")) 

window.addEventListener("resize", () => {
    root.configure({
        size: {
            width: window.innerWidth,
            height: window.innerHeight
        },
        orthographic: true,
        camera: {
            zoom: 80
        },
        dpr: [1, window.devicePixelRatio * .75],
        gl: {
            antialias: false,
            depth: true,
            stencil: false,
            alpha: true
        }
    })
    root.render(<App />) 
}) 

window.dispatchEvent(new Event("resize"))