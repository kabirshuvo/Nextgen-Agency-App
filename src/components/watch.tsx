import React from "react";
import Image from "next/image";

const Watch: React.FC<{ width?: number; height?: number }> = ({
  width = 100,
  height = 100,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Image
        src="/watch.svg"
        width={width}
        height={height}
        alt="Futuristic Watch"
      />
    </div>
  );
};

export default Watch;
