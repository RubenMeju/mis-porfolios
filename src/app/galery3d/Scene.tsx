import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll, Html } from "@react-three/drei";
import { useRef } from "react";

function Box() {
  const ref = useRef();
  const scroll = useScroll();

  useFrame(() => {
    // Rota el cubo en función del scroll (1ª sección)
    ref.current.rotation.y = scroll.offset * Math.PI * 2;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

function Sphere() {
  const ref = useRef();
  const scroll = useScroll();

  useFrame(() => {
    // Escala la esfera en la 2ª sección
    ref.current.scale.setScalar(1 + scroll.range(0.33, 0.33) * 2);
  });

  return (
    <mesh ref={ref} position={[0, -5, 0]}>
      <sphereGeometry />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  );
}

function Cone() {
  const ref = useRef();
  const scroll = useScroll();

  useFrame(() => {
    // Cambia la posición Y del cono en la 3ª sección
    ref.current.position.y = -10 + scroll.range(0.66, 0.33) * 2;
  });

  return (
    <mesh ref={ref}>
      <coneGeometry args={[1, 2, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      <ScrollControls pages={3} damping={0.1}>
        <Scroll>
          <Box />
          <Sphere />
          <Cone />
        </Scroll>

        <Scroll html>
          <section style={styles.section}>
            <h1>Sección 1: Cubo</h1>
          </section>
          <section style={{ ...styles.section, top: "100vh" }}>
            <h1>Sección 2: Esfera</h1>
          </section>
          <section style={{ ...styles.section, top: "200vh" }}>
            <h1>Sección 3: Cono</h1>
          </section>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

const styles = {
  section: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100vh",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
    pointerEvents: "none",
  },
};

export default Scene;
