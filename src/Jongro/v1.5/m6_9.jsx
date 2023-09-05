/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./output/m6_9.glb --output ./jsx/m6_9.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/m6_9.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Tile_6" geometry={nodes.Tile_6.geometry} material={materials.Tile_6_0} position={[0, -70, 0]} />
        <mesh name="Tile_7" geometry={nodes.Tile_7.geometry} material={materials.Tile_6_0} position={[0, -70, 0]} />
        <group name="Tile_8" position={[0, -70, 0]}>
          <mesh name="메쉬031" geometry={nodes.메쉬031.geometry} material={materials.Tile_6_0} />
          <mesh name="메쉬031_1" geometry={nodes.메쉬031_1.geometry} material={materials.Tile_6_0} />
        </group>
        <group name="Tile_9" position={[0, -70, 0]}>
          <mesh name="메쉬032" geometry={nodes.메쉬032.geometry} material={materials.Tile_6_0} />
          <mesh name="메쉬032_1" geometry={nodes.메쉬032_1.geometry} material={materials.Tile_6_0} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/m6_9.glb')
