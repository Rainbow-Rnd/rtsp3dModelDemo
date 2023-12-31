/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./opt/tilee1.glb --output ./jsx/tilee1.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/tilee1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-12.3, 18.96, 1.54]} rotation={[Math.PI / 2, 0, -1.641]}>
        <mesh geometry={nodes.tile_1.geometry} material={materials.material_0} />
        <mesh geometry={nodes.tile_2.geometry} material={materials.material_1} />
      </group>
    </group>
  )
}

useGLTF.preload('/tilee1.glb')
