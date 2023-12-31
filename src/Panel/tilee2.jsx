/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./opt/tilee2.glb --output ./jsx/tilee2.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/tilee2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-9.76, 16.4, 2.33]} rotation={[Math.PI / 2, 0, -1.606]}>
        <mesh geometry={nodes.tile001_1.geometry} material={materials['material_0.001']} />
        <mesh geometry={nodes.tile001_2.geometry} material={materials['material_1.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/tilee2.glb')
