/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./opt/M5.glb --output ./jsx/M5.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { modelPath } from '../config'

export function Model(props) {
  const { nodes, materials } = useGLTF(`/${modelPath}` +'/M5.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -70, 0]}>
        <mesh geometry={nodes.Tile_26001.geometry} material={materials['Tile_26_0.001']} />
        <mesh geometry={nodes.Tile_26001_1.geometry} material={materials['Tile_26_1.001']} />
      </group>
      <group position={[0, -70, 0]}>
        <mesh geometry={nodes.Tile_27001.geometry} material={materials['Tile_27_0.001']} />
        <mesh geometry={nodes.Tile_27001_1.geometry} material={materials['Tile_27_1.001']} />
      </group>
      <mesh geometry={nodes.Tile_28.geometry} material={materials['Tile_28_0.001']} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_29.geometry} material={materials['Tile_29_0.001']} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_30.geometry} material={materials['Tile_30_0.001']} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_31.geometry} material={materials['Tile_31_0.001']} position={[0, -70, 0]} />
    </group>
  )
}

useGLTF.preload(`/${modelPath}/` + 'M5.glb')
