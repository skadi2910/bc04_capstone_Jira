import React from 'react'
import Lottie from 'react-lottie';
import updating from '../../../assets/lotties/updating.json';
export default function UpdatingAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: updating,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className='flex justify-center items-center '>


            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </div>

    );
}
