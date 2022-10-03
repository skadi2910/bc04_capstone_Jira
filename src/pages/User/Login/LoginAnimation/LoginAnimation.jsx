import React from 'react'
import Lottie from 'react-lottie';
import loginCat from '../../../../assets/lotties/loginCat.json';
export default function LoginAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loginCat,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </div>
    );
}
