/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./opt/tilee6.glb --output ./jsx/tilee6.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/tilee6.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-14.933, 21.315, -3.699]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.tile005_1.geometry} material={materials['material_0.005']} />
        <mesh geometry={nodes.tile005_2.geometry} material={materials['material_1.005']} />
      </group>
    </group>
  )
}

useGLTF.preload('/tilee6.glb')