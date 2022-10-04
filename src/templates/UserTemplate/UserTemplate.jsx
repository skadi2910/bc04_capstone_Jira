import React, { useEffect, useState } from 'react'
import backgroundUser from "../../assets/img/bgUser.jpg"
import LoginAnimation from '../../pages/User/Login/LoginAnimation/LoginAnimation';
// import LoginAnimation from './LoginAnimation/LoginAnimation';

export default function UserTemplate(props) {
    // ! xử lý resize window
    const [{ width, height }, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(() => {
        window.onresize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
    }, []);

    const { Component } = props;
    return (
        <div >
            <section className="h-screen">
                <div className=" px-6  h-full w-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 w-full">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <LoginAnimation />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20 " >
                            <Component />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
