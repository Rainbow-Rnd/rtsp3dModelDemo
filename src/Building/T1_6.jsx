/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 t1_6.glb --transform 
Files: t1_6.glb [275.09MB] > t1_6-transformed.glb [23.17MB] (92%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function T1_6(props) {
  const { nodes, materials } = useGLTF('/t1_6-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Tile_1.geometry} material={materials['Tile_1_0.003']} position={[14.459, -42.84, -7.909]} rotation={[Math.PI / 2, 0, -Math.PI]} />
      <group position={[14.05, -30.105, -12.767]} rotation={[Math.PI / 2, 0, -Math.PI]}>
        <mesh geometry={nodes.Tile_2001.geometry} material={materials['Tile_2_0.001']} />
        <mesh geometry={nodes.Tile_2001_1.geometry} material={materials['Tile_2_1.001']} />
      </group>
      <mesh geometry={nodes.Tile_3.geometry} material={materials.Tile_3_0} position={[18.343, -14.914, -7.696]} rotation={[Math.PI / 2, 0, -Math.PI]} />
      <group position={[8.858, -16.87, -20.717]} rotation={[Math.PI / 2, 0, -Math.PI]}>
        <mesh geometry={nodes.Tile_4_1.geometry} material={materials.Tile_4_0} />
        <mesh geometry={nodes.Tile_4_2.geometry} material={materials.Tile_4_1} />
        <mesh geometry={nodes.Tile_4_3.geometry} material={materials.Tile_4_2} />
      </group>
      <mesh geometry={nodes.Tile_5.geometry} material={materials.Tile_5_0} position={[15.953, -3.392, -7.947]} rotation={[Math.PI / 2, 0, -Math.PI]} />
      <mesh geometry={nodes.Tile_6.geometry} material={materials.Tile_6_0} position={[11.549, -3.737, -18.263]} rotation={[Math.PI / 2, 0, -Math.PI]} />
    </group>
  )
}

useGLTF.preload('/t1_6-transformed.glb')
