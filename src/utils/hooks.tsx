import { useState, useMemo } from "react"
import {  Material, MeshBasicMaterial, MeshLambertMaterial, MeshPhongMaterial } from "three" 
import { glsl } from "./utils"

interface ShaderPart {
    head?: string
    main?: string
}

interface UseShaderProps extends Material {
    base: typeof MeshBasicMaterial | typeof MeshLambertMaterial | typeof MeshPhongMaterial
    vertex: ShaderPart
    fragment: ShaderPart
    uniforms: any
}

export function useShader({
    base = MeshBasicMaterial,
    vertex,
    fragment,
    uniforms: incomingUniforms,
    ...rest
}: UseShaderProps) {
    const [uniforms] = useState(() => {
        const result = {}

        for (const [key, value] of Object.entries(incomingUniforms)) {
            result[key] = { value }
        }

        return result
    })
    const material = useMemo(() => {
        const material = new base({
            ...rest as any,
        })

        material.onBeforeCompile = (shader) => {
            shader.uniforms = {
                ...shader.uniforms,
                ...uniforms
            }
            shader.vertexShader = shader.vertexShader.replace("#include <common>", glsl`
                #include <common>
         
                ${vertex?.head || ""}  
            `)
            shader.vertexShader = shader.vertexShader.replace("#include <begin_vertex>", glsl`
                #include <begin_vertex>
        
                ${vertex?.main || ""}  
            `)
            shader.fragmentShader = shader.fragmentShader.replace("#include <common>", glsl`
                #include <common>

                ${fragment?.head || ""}  
            `)
            shader.fragmentShader = shader.fragmentShader.replace("#include <dithering_fragment>", glsl`
                #include <dithering_fragment> 

                ${fragment?.main || ""}  
            `)
        }

        return material 
    }, [vertex.head, vertex.main, fragment.head, fragment.main, uniforms, base])

    return [material, uniforms]
}