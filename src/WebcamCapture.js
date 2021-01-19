import React, { useRef } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  height: 400,
  width: 250,
  facingMode: "user",
};

function WebcamCapture() {
  const webcamRef = useRef(null);
  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
    </div>
  );
}

export default WebcamCapture;
