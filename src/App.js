import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './components/Model'; // Import the Model component

const App = () => {
    return (
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
            <Model /> {/* Add the 3D model */}
            <OrbitControls />
        </Canvas>
    );
};

export default App;
