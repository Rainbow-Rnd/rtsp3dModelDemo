/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./opt/TREE5.glb --output ./jsx/TREE5.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/TREE5.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[8.64, 11.09, -43.78]} rotation={[-1.412, 1.179, 1.116]} scale={[1.39, 1.4, 1.18]}>
        <mesh geometry={nodes['33004_1'].geometry} material={materials['material_0.004']} />
        <mesh geometry={nodes['33004_2'].geometry} material={materials['material_1.004']} />
      </group>
    </group>
  )
}

useGLTF.preload('/TREE5.glb')
