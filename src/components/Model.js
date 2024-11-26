import React from 'react';
import { useGLTF } from '@react-three/drei';

const Model = () => {
    const { scene } = useGLTF('/indoor_model.gltf');
    return <primitive object={scene} />;
};

export default Model;
