"use client"
import React from 'react'


function VideoPlayer({ src, setShow, show }) {
    const videoRef = React.useRef();
    const handleShow = () => {
        setShow(false);
    }

    React.useEffect(() => {
        videoRef.current.currentTime = 0;
        if (show)
            videoRef.current.play();
        else
            videoRef.current.pause();
    })

    return (
        <div className='z-[100000]'>
            <svg onClick={handleShow} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer ml-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <video ref={videoRef} controls={true} width="100%" height="100%">

                <source src={src} type="video/mp4" />

            </video>
        </div>
    )
}

export default VideoPlayer
