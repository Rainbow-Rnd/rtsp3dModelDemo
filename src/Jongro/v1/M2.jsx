/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 tile8_16_opt.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { modelPath } from '../../config'

export function M2(props) {
  const { nodes, materials } = useGLTF(`/${modelPath}/` +'tile8_16_opt.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -70, 0]}>
        <mesh geometry={nodes.Tile_8_1.geometry} material={materials.Tile_8_0} />
        <mesh geometry={nodes.Tile_8_2.geometry} material={materials.Tile_8_1} />
      </group>
      <group position={[0, -70, 0]}>
        <mesh geometry={nodes.Tile_9_1.geometry} material={materials.Tile_9_0} />
        <mesh geometry={nodes.Tile_9_2.geometry} material={materials.Tile_9_1} />
      </group>
      <group position={[0, -70, 0]}>
        <mesh geometry={nodes.Tile_10_1.geometry} material={materials.Tile_10_0} />
        <mesh geometry={nodes.Tile_10_2.geometry} material={materials.Tile_10_1} />
      </group>
      <mesh geometry={nodes.Tile_11.geometry} material={materials.Tile_11_0} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_12.geometry} material={materials.Tile_12_0} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_13.geometry} material={materials.Tile_13_0} position={[0, -70, 0]} />
      <group position={[0, -70, 0]}>
        <mesh geometry={nodes.Tile_14_1.geometry} material={materials.Tile_14_0} />
        <mesh geometry={nodes.Tile_14_2.geometry} material={materials.Tile_14_1} />
      </group>
      <mesh geometry={nodes.Tile_15.geometry} material={materials.Tile_15_0} position={[0, -70, 0]} />
      <mesh geometry={nodes.Tile_16.geometry} material={materials.Tile_16_0} position={[0, -70, 0]} />
    </group>
  )
}

useGLTF.preload(`/${modelPath}/` +'tile8_16_opt.glb')
