import { useEffect, useRef } from "react";
import * as THREE from 'three';

const Planet: React.FC = () => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const scene  = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        elementRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0x87cefa });
        const planet = new THREE.Mesh(geometry, material);
        scene.add(planet);

        


        
    }, [])

    return <div ref={elementRef} />
} 
export default Planet