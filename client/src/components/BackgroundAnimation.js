import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";

const BackgroundAnimation = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  console.log("vantaref", vantaRef);
  console.log("vantaref", vantaEffect);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          skyColor: 0x0,
          cloudColor: 0xf000c5,
          cloudShadowColor: 0x9a8eb,
          sunColor: 0x0,
          sunGlareColor: 0x0,
          sunlightColor: 0xfffff3,
        })
      );
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundAnimation;
