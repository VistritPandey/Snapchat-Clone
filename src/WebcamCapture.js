import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined"
import {IconButton} from "@material-ui/core"

const videoConstraints = {
  height: 400,
  width: 250,
  facingMode: "user",
};

function WebcamCapture() {
  const webcamRef = useRef(null);

  const [image, setImage] = useState(null)

  const capture = useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc)
  },[webcamRef])
  
  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        mirrored={true}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />

      <IconButton>
      <RadioButtonUncheckedIcon 
          className="webcamCapture__button"
          onClick={capture}
      />
      </IconButton>
      <img src={image} alt=""/>
    </div>
  );
}

export default WebcamCapture;
