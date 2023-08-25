import "./styles.css";
import { OrbitControls, Center, Grid ,useGLTF} from "@react-three/drei";

import { Suspense, useState } from "react";

//import { Building } from "./Buidling";
// import { T1_6 } from './Building/T1_6'
// import { T1_7 } from './Building/T7_10'
// import { T1_5 } from './Building/T1_5'
// import { T6_10 } from './Building/T6_10'
// import { T11_15 } from './Building/T11_15'
// import { T16_20 } from './Building/T16_20'
// import { T21_25 } from './Building/T21_25'
// import { T25_30 } from './Building/T25_30'
import { C1 } from './M1_M2/C1_opt'
import { C2 } from './M1_M2/C2_opt'
import { C3 } from './M1_M2/C3_opt'
// import { C4 } from './Tiles/C4_m3'
// import { C5 } from './Tiles/C5_m4'
import { M1 } from './M1_M2/M1_opt'
import { M2 } from './M1_M2/M2_opt'
// import { M3 } from './Tiles/M3'
// import { M4 } from './Tiles/M4'


import { Area } from "./Area";
import cracks from "./cracks.json";
import { useRef } from "react";
cracks.forEach((val) => {
    useGLTF.preload(val.path);
});

export default function Model(props) {

    const [isModelOpen, setisModelOpen] = useState(false);
    const [imageFile, setImageFile] = useState("");

    const showModel = (imageFile) => {
        console.log(`showModel imageFile: ${imageFile}`);
        setisModelOpen(true);
        setImageFile(imageFile);
    };
    const onHide = () => {
        setisModelOpen(false);
    };
    const ref = useRef();
    return (
             <>
                <ambientLight />
                <Suspense fallback={null}>
                    <Center top>
                        <group position-y={-4.75} dispose={null} scale={0.07}>

                            <M1/>
                            <M2/>
                            <C1/>
                            <C2/>
                            <C3/>


                        </group>
                    </Center>
                    <OrbitControls ref={ref} target={[0, 1, 0]} />
                    <OrbitControls ref={ref} target={[0, 1, 0]} />
                </Suspense>
            </>
    );
}


