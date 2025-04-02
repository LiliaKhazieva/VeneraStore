"use client";
import { useEffect, useState } from "react";

interface Props {
  length: number;
  initialTranslate: number;
  step: number;
  widthStep: number;
  lastStep: number;
  transition: number;
  autoPlay: boolean;
  autoPlayTime: number;
}

export const useSlider = ({
  length,
  initialTranslate,
  step,
  widthStep,
  lastStep,
  transition,
  autoPlay,
  autoPlayTime,
}: Props) => {
  const [translate, setTranslate] = useState(-initialTranslate);

  const handleClickPrev = () => {
    if (translate == 0) {
      setTranslate((currentOffset) => {
        const maxOffset = -widthStep * (length - lastStep);
        const newOffset = currentOffset + maxOffset;

        return Math.max(newOffset, maxOffset);
      });
    } else {
      setTranslate((currentOffset) => {
        const newOffset = currentOffset + widthStep * step;
        return Math.min(newOffset, 0);
      });
    }
  };

  const handleClickNext = () => {
    if (translate == -widthStep * (length - lastStep)) {
      setTranslate(0);
    } else {
      setTranslate((currentOffset) => {
        const newOffset = currentOffset - widthStep * step;
        const maxOffset = -widthStep * (length - lastStep);

        return Math.max(newOffset, maxOffset);
      });
    }
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      handleClickNext();
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [handleClickNext]);

  return {
    translate,
    transition,
    handleClickNext,
    handleClickPrev,
  };
};
