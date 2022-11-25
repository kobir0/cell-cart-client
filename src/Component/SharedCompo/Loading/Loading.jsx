import React from "react";

const Loading = () => {
  return (
    <div className="div w-full min-h-screen">
      <div className="flex  my-60 w-full justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    </div>
  );
};

export default Loading;
