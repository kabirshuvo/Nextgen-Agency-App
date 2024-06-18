import React from "react";

interface VideoOverlayProps {
  src: string;
  containerStyles?: string;
  videoStyles?: string;
}

const VideoOverlay: React.FC<VideoOverlayProps> = ({
  src,
  containerStyles,
  videoStyles,
}) => {
  return (
    <div className={`relative z-50 ${containerStyles}`}>
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover ${videoStyles}`}
        src={src}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoOverlay;
