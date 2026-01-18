import React, { useEffect, useRef } from 'react';
export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    // Dynamic import to avoid SSR issues if this were Next.js,
    // but good practice anyway for heavy libs
    let THREE: any;
    let scene: any;
    let camera: any;
    let renderer: any;
    let geometry: any;
    let material: any;
    let particles: any;
    let animationFrameId: number;
    const init = async () => {
      // Import Three.js
      const threeModule = await import('three');
      THREE = threeModule;
      // Scene setup
      scene = new THREE.Scene();
      // Camera setup
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 30;
      // Renderer setup
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      containerRef.current?.appendChild(renderer.domElement);
      // Particles Geometry
      geometry = new THREE.BufferGeometry();
      const count = 2000;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 100;
        colors[i] = Math.random();
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      // Material
      material = new THREE.PointsMaterial({
        size: 0.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
      });
      // Mesh
      particles = new THREE.Points(geometry, material);
      scene.add(particles);
      // Lights (though points material doesn't react to lights, good for future expansion)
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      animate();
    };
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (particles) {
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.0005;
      }
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    init();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer) {
        containerRef.current.removeChild(renderer.domElement);
      }
      // Cleanup Three.js resources
      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (renderer) renderer.dispose();
    };
  }, []);
  return <div ref={containerRef} className="absolute inset-0 z-0 opacity-40 pointer-events-none" aria-hidden="true" />;
}