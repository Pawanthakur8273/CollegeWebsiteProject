import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";

function ContactUs() {
  return (
    <div>
      <ParticleRing />
    </div>
  );
}

const ParticleRing = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "75vh" }}
        className="bg-black"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-customYellow font-medium text-2xl md:text-3xl">
      <button className="relative inline-block font-medium group py-1.5 px-2.5 ">
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-customYellow group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border group border-customYellow group-hover:bg-customYellow"></span>
      <a className="relative text-customYellow group-hover:text-white " href="https://docs.google.com/forms/d/e/1FAIpQLSd_sY-Ojn3OjoyL-l_modT3BROBcreqLkwpTmTZ2dUh-oXPRw/viewform?usp=sharing" target="_blank">Contact Now!</a>
</button>
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ContactUs;
export { ParticleRing };
