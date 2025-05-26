

// src/utils/initDroneLayer.js
// import { withTheme } from '@mui/material'; // This import was unused
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from "gsap";

let camera, scene, renderer;
const loader = new GLTFLoader();

export function init() {
    console.log("initDroneLayer.js: init() called");
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.z = 5;
    camera.rotation.z = 1;
    scene = new THREE.Scene();
    const light = new THREE.AmbientLight(0xffffff, 2); // Increased intensity for better model visibility
    scene.add(light);

    // Add a directional light for better shading
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    loader.load("/drone/scene.gltf", (gltf) => {
        console.log("Drone model loaded", gltf);
        let model = gltf.scene;
        model.scale.set(0.45, 0.45, 0.45);

        // Initial position (optional, if you want it to start somewhere specific before animating)
        // model.position.set(initialX, initialY, initialZ);

        gsap.to(camera.position, {
            z: 1,
            duration: 1,
            ease: "back.out(1.7)"
        });
        gsap.to(camera.rotation, {
            z: 0,
            duration: 1
        });
        gsap.to(model.rotation, {
            x: 1, // Example rotation
            duration: 1
        });
        gsap.to(model.rotation, {
            y: Math.PI * 1.75, // Example rotation
            duration: 2,
            delay: 1
        });
        gsap.to(model.scale, {
            delay: 1,
            duration: 1,
            x: 0.25,
            y: 0.25,
            z: 0.25
        });
        gsap.to(model.position, { // Animate to a corner or side
            delay: 1,
            duration: 1,
            x: 0.8, // Adjust these values to position the drone
            y: -0.4, // e.g., top-right, bottom-left, etc.
            // z: -0.5 // if you want it to appear further/closer
        });

        scene.add(model);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded'); // Progress
    },
    (error) => {
        console.error("Error loading drone model:", error);
    });

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true for transparent background if needed
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(Animation);
    // renderer.setClearColor(0x272727, 1); // Original dark grey
    renderer.setClearColor(0x000000, 0); // Transparent background for canvas itself
                                         // This allows page background to show through areas of canvas not covered by drone
    
    // Ensure canvas is not added multiple times on hot reloads in development
    const existingCanvas = document.querySelector('canvas');
    if (existingCanvas && existingCanvas.parentElement === document.body) {
        document.body.removeChild(existingCanvas);
    }
    document.body.appendChild(renderer.domElement); // This creates the <canvas>

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function Animation() {
    // Add any continuous animation for the drone here if needed
    // e.g., model.rotation.y += 0.005;
    renderer.render(scene, camera);
}