import React, { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';

type ProgressBarProps = {
  duration: number; // Duration in milliseconds
};

const ProgressBar: React.FC<ProgressBarProps> = ({ duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;

    const startProgress = () => {
      timerId = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timerId);
            return 100;
          }
          return prevProgress + 1;
        });
      }, duration / 100); // Divide by 100 to make it progress smoothly
    };

    startProgress();

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [duration]);

  return (
    <LinearProgress variant="determinate" value={progress} />
  );
};

export default ProgressBar;
