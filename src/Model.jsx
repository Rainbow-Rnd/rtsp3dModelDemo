import "./styles.css";
import { OrbitControls, Center, Grid ,useGLTF} from "@react-three/drei";

import { Suspense, useState } from "react";


import { M1 } from './M1_M2/model1'
import { M2 } from './M1_M2/model2'

// import problem_areas from './Json/Jongro/problem_areas.json'
// import { ProblemAreas } from "./ProblemAreas";

// import {Tile2_7} from './polygonTest/Tile2_7'
// import {Tile8_16} from './polygonTest/Tile8_16'
// import {Tile17_24} from './polygonTest/Tile17_24'
// import {Tile25_31} from './polygonTest/Tile25_31'

import {T1} from './polygonTest/T1'
import {T2} from './polygonTest/T2'
import {T3} from './polygonTest/T3'
import {T4} from './polygonTest/T4'


import { useRef } from "react";
import { modelPath } from './config'
// problem_areas.forEach((problem_area) => {
//     useGLTF.preload(`/${modelPath}/` + problem_area.glb_filename);
// });





export default function Model(props) {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [imageFile, setImageFile] = useState("");

    const showPopup = (imageFile) => {
        console.log(`showPopup imageFile: ${imageFile}`);
        setIsPopupOpen(true);
        setImageFile(imageFile);
    };
    const onHide = () => {
        setIsPopupOpen(false);
    };
    const ref = useRef();
    return (
             <>
                <ambientLight />
                <Suspense fallback={null}>
                    <Center top>
                        <group position-y={-4.75} dispose={null} scale={0.07}>
                            <T1/>
                            <T2/>
                            <T3/>
                            <T4/>
                        </group>
                    </Center>
                    <OrbitControls ref={ref} target={[0, 1, 0]} />
                    <OrbitControls ref={ref} target={[0, 1, 0]} />
                </Suspense>
            </>
    );
}


