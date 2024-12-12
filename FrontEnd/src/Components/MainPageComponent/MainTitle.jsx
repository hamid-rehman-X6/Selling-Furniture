import React, { useRef, useState, useEffect } from "react";

const MainTitle = () => {
  const videoPaths = [
    // Array of video paths
    "/HomeVideo/video-1.mp4",
    "/HomeVideo/video-2.mp4",
    "/HomeVideo/video-3.mp4",
  ];
  const videoRefs = videoPaths.map(() => useRef(null)); // Create refs for each video
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Track the current video

  useEffect(() => {
    // Play the current video when the index changes
    const currentVideo = videoRefs[currentVideoIndex].current;
    if (currentVideo) {
      currentVideo.play();
    }
  }, [currentVideoIndex]);

  const handleVideoEnd = () => {
    // Move to the next video or loop back to the first one
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoPaths.length);
  };

  return (
    <>
      <div className="mt-10 font-montserrat">
        <h1 className="flex flex-wrap items-center justify-center text-sm sm:text-base md:text-xl lg:text-2xl font-bold tracking-wide">
          COMPLETE OFFICE FURNITURE SOLUTION IN
          <span className="text-[#DE6422] ml-2">DUBAI</span>
        </h1>

        <p className="text-[12px] flex justify-center mt-6">
          OFFICE DESK | CHAIRS | CABINET
        </p>
      </div>

      <div className="mt-14 w-full">
        <div className="mx-8">
          {videoPaths.map((path, index) => (
            <video
              key={index}
              ref={videoRefs[index]}
              src={path} // Use the dynamic path for each video
              className={`w-full h-auto object-cover ${
                index === currentVideoIndex ? "block" : "hidden"
              }`} // Show only the current video
              onEnded={handleVideoEnd} // Triggered when the video ends
              muted
              playsInline
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainTitle;
