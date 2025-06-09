import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function RotatingCube() {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh rotation={[0.4, 0.2, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#00adb5" />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default RotatingCube