import React from "react";
import splash from "./splashScreen.gif";

const SplashScreen = () => {
    return (
        <>
        <div class="w-screen h-screen bg-white flex items-center justify-center">
            <img loading="eager" draggable="false" class="w-full max-w-[700px] aspect-video object-contain object-center" src={splash}/>
        </div>
        </>
    );

};

export default SplashScreen;