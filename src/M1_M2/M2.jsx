/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./opt/m2.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { modelPath } from '../config'

export function Model(props) {
  const { nodes, materials } = useGLTF( `/${modelPath}/` +'m2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Tile_18001.geometry} material={materials['Tile_18_1.002']} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_1.geometry} material={materials['Tile_1_0.001']} position={[0, -70, 0]} />
      <group position={[0, -70, 0]}>
        <mesh geometry={nodes.Tile_2001.geometry} material={materials['Tile_2_0.001']} />
        <mesh geometry={nodes.Tile_2001_1.geometry} material={materials['Tile_2_1.001']} />
      </group>
      <mesh geometry={nodes.Tile_11.geometry} material={materials['Tile_11_0.001']} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_12.geometry} material={materials['Tile_12_0.001']} position={[0, -70, 0]} />
      <group position={[0, -70, 0]}>
        <mesh geometry={nodes.Tile_13001.geometry} material={materials['Tile_13_0.001']} />
        <mesh geometry={nodes.Tile_13001_1.geometry} material={materials['Tile_13_1.001']} />
      </group>
      <mesh geometry={nodes.Tile_17.geometry} material={materials['Tile_17_0.001']} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_18.geometry} material={materials['Tile_18_0.001']} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_19.geometry} material={materials['Tile_19_0.001']} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_20.geometry} material={materials['Tile_20_0.001']} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_21.geometry} material={materials['Tile_21_0.001']} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_22.geometry} material={materials['Tile_22_0.001']} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_23.geometry} material={materials['Tile_23_0.001']} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_24.geometry} material={materials['Tile_24_0.001']} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_31.geometry} material={materials['Tile_31_0.001']} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_32.geometry} material={materials.Tile_32_0} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_33.geometry} material={materials.Tile_33_0} position={[0, -70, 0]} />
    </group>
  )
}

useGLTF.preload( `/${modelPath}/` +'m2.glb')