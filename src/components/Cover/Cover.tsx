import React, { useEffect, useRef } from 'react';

import useHowlerModel from '../../models/howl';

const Cover = () => {
  const {
    wave,
    isPlaying,
    songList,
    listIndex,
    playingIndex,
  } = useHowlerModel();

  const canvasRef = React.useRef(null);

  useEffect(() => {
    const options = {
      type: 'bars',
    };
    console.log(document.getElementById('#howler'));
    console.log(canvasRef.current.id);
    wave.fromElement('howler', canvasRef.current, options);

  }, [isPlaying]);
  return (
    <div>
      <canvas id="canvas" height="500" width="500" ref={canvasRef} />
    </div>
  );
};

export default Cover;
