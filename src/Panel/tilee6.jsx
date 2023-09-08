import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Model(props) {
  const { nodes, materials } = useGLTF('/tilee6.glb')
  const objectRef = useRef();

  const handleClick = (e) => {
    // Local coordinates of the clicked point
    const localPoint = e.point;

    // Access the geometry
    const geometry = nodes.tile005_1.geometry;

    console.log('geometry')
    console.log(geometry)

    // Identify the closest triangle
    const closestTriangle = findClosestTriangle(localPoint, geometry);

    if (closestTriangle) {
      // Calculate the normal of the closest triangle
      const normal = calculateTriangleNormal(closestTriangle);

      console.log('Normal Vector:', normal);
    }
  };

  const findClosestTriangle = (point, geometry) => {
    // Access the position and index attributes from the geometry
    const positions = geometry.attributes.position;
    const indices = geometry.index;

    if (!positions || !indices) {
      // Check if the geometry has the required attributes
      console.error('Geometry does not have position or index attributes');
      return null;
    }

    // Create a temporary array to store the distances from the point to each triangle
    const distances = [];

    // Iterate through each triangle (every three indices form a triangle)
    for (let i = 0; i < indices.count; i += 3) {
      // Get the indices of the three vertices of the triangle
      const indexA = indices.array[i];
      const indexB = indices.array[i + 1];
      const indexC = indices.array[i + 2];

      // Get the positions of the three vertices
      const vertexA = new THREE.Vector3().fromBufferAttribute(positions, indexA);
      const vertexB = new THREE.Vector3().fromBufferAttribute(positions, indexB);
      const vertexC = new THREE.Vector3().fromBufferAttribute(positions, indexC);

      // Calculate the distance from the point to the triangle
      // You can use a distance measure like squared distance for efficiency
      const distance = point.distanceToSquared(vertexA);

      // Store the distance and the triangle indices
      distances.push({ distance, triangleIndices: [indexA, indexB, indexC] });
    }

    // Find the triangle with the minimum distance
    distances.sort((a, b) => a.distance - b.distance);
    const closestTriangle = distances[0];

    if (closestTriangle) {
      // You can return the triangle's indices or any other relevant information
      return closestTriangle.triangleIndices;
    }

    // Return null if no triangle is found (this should not happen if the model has triangles)
    return null;
  };
  // Function to calculate the normal of a triangle
  const calculateTriangleNormal = (triangle) => {
    const edge1 = new THREE.Vector3().subVectors(triangle[1], triangle[0]);
    const edge2 = new THREE.Vector3().subVectors(triangle[2], triangle[0]);
    const normal = new THREE.Vector3().crossVectors(edge1, edge2).normalize();
    return normal;
  };

  return (
    <group {...props} dispose={null} ref={objectRef}>
      <group position={[-14.933, 21.315, -3.699]} rotation={[Math.PI / 2, 0, 0]} onClick={handleClick}>
        <mesh geometry={nodes.tile005_1.geometry} material={materials['material_0.005']} />
        <mesh geometry={nodes.tile005_2.geometry} material={materials['material_1.005']} />
      </group>
    </group>
  )
}

useGLTF.preload('/tilee6.glb');