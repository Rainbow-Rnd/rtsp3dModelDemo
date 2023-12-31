/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./opt/glass5.glb --output ./jsx/glass5.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/glass5.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-22.902, 24.916, 16.395]} rotation={[Math.PI / 2, 0, -Math.PI / 6]}>
        <mesh geometry={nodes.glass004_1.geometry} material={materials['material_0.012']} />
        <mesh geometry={nodes.glass004_2.geometry} material={materials['material_1.012']} />
      </group>
    </group>
  )
}

useGLTF.preload('/glass5.glb')
