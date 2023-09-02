import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const BoundaryEdges = () => {
  const boundaryVerticesRef = useRef(); // Reference to hold the boundary vertices

  // Load the boundary vertices data
  useEffect(() => {
    fetch('/boundary_vertices.json')
      .then(response => response.json())
      .then(vertices => {
        console.log('vertices : ', vertices)
        boundaryVerticesRef.current = vertices;
      });
  }, []);

  return (
   <>
      {/* Render the boundary edges using the fetched vertices */}
      {boundaryVerticesRef.current && (
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attachObject={['attributes', 'position']}
              count={boundaryVerticesRef.current.length}
              array={new Float32Array(boundaryVerticesRef.current.flat())}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={new THREE.Color('red')} linewidth={2} />
        </lineSegments>
      )}
      {/* Add your 3D objects, cameras, and other components */}
   </>
  );
};

export default BoundaryEdges;