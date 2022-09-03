import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import './styles.css'

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial color="#171717" transparent opacity={0.4} />
    </mesh>
  )
}

function Cube(props) {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 4, 0], rotation: [0.4, 0.2, 0.5], ...props }))
  
  return (
    <mesh receiveShadow castShadow ref={ref}>
      <boxGeometry />
      <meshLambertMaterial color="red" />
    </mesh>
  )
}

ReactDOM.render(
  <Canvas>
    <color attach="background" args={['lightblue']} />
    <ambientLight />
    <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
    <Physics>
      <Plane position={[0, 0, 0]} />
      <Cube position={[0.1, 5, 0]} />
    </Physics>
  </Canvas>,
  document.getElementById('root')
)
