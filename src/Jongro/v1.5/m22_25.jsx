/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./output/m22_25.glb --output ./jsx/m22_25.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/m22_25.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Tile_22" geometry={nodes.Tile_22.geometry} material={materials.Tile_22_0} position={[0, -70, 0]} />
        <mesh name="Tile_23" geometry={nodes.Tile_23.geometry} material={materials.Tile_22_0} position={[0, -70, 0]} />
        <mesh name="Tile_24" geometry={nodes.Tile_24.geometry} material={materials.Tile_22_0} position={[0, -70, 0]} />
        <mesh name="Tile_25" geometry={nodes.Tile_25.geometry} material={materials.Tile_22_0} position={[0, -70, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/m22_25.glb')
