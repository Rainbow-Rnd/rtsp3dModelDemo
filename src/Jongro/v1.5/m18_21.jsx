/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./output/m18_21.glb --output ./jsx/m18_21.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/m18_21.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Tile_18" geometry={nodes.Tile_18.geometry} material={materials.Tile_18_0} position={[0, -70, 0]} />
        <mesh name="Tile_19" geometry={nodes.Tile_19.geometry} material={materials.Tile_18_0} position={[0, -70, 0]} />
        <group name="Tile_20" position={[0, -70, 0]}>
          <mesh name="메쉬043" geometry={nodes.메쉬043.geometry} material={materials.Tile_18_0} />
          <mesh name="메쉬043_1" geometry={nodes.메쉬043_1.geometry} material={materials.Tile_18_0} />
        </group>
        <mesh name="Tile_21" geometry={nodes.Tile_21.geometry} material={materials.Tile_18_0} position={[0, -70, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/m18_21.glb')