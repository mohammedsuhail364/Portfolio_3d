import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from "../assets/icons";
const Home = () => {
  const audioRef=useRef(new Audio(sakura))
  audioRef.current.volume=0.5;
  audioRef.current.loop=true;
  const adjustPlaneScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false)
  useEffect(()=>{
    if(isPlaying){
      audioRef.current.play()
    }
    return ()=>{
      audioRef.current.pause()
    }
  },[isPlaying])
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -0.6, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }
    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneScreenSize();
  useEffect(()=>{
   console.log(currentStage);
    
  },[currentStage])
  
  return (
    <div className=" w-full h-screen relative">
      <div className="absolute top-15 left-0 right-0 flex items-center justify-center z-50">
         <HomeInfo currentStage={currentStage} />
      </div>
              

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            screenScale={islandScale}
            rotation={[0.1, 4.7077, 0]}
          />

          <Plane
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            rotation={[0, 20.1, 0]}
            position={planePosition}
            scale={planeScale}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img src={!isPlaying ? soundoff :soundon} alt="jukebox"
        onClick={()=>setIsPlaying((cur)=>!cur)}
        className=" w-10 h-10 cursor-pointer object-contain "
        />
      </div>
    </div>
  );
};

export default Home;
