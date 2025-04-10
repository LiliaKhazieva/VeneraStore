import Slider from "rc-slider";
import styles from "./Range.module.scss";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";
import { addSpacePrice } from "@/hooks/addSpacePrice";
import { Minus } from "lucide-react";

interface IRange {
  min?: number;
  max: number;
  fromInitialValue?: number;
  toInitialValue?: number;
  onChangeFromValue?: (value: number) => void; // скоро будем запрашивать с сервера
  onChangeToValue?: (value: number) => void; // скоро будем запрашивать с сервера
}

export function Range({
  min,
  max,
  fromInitialValue = 0,
  toInitialValue = max,
  onChangeFromValue,
  onChangeToValue,
}: IRange) {
  const [fromValue, setFromValue] = useState(fromInitialValue);
  const [toValue, setToValue] = useState(toInitialValue);

  useEffect(() => {
    setFromValue(fromInitialValue);
    setToValue(toInitialValue);
  }, [fromInitialValue, toInitialValue]);

  return (
    <>
      <div className={styles.price}>
        <span>{addSpacePrice(fromValue)} &#8381;</span>
        <Minus size={16} color="#999696" />
        <span>{addSpacePrice(toValue)} &#8381;</span>
      </div>
      <Slider
        range
        min={min}
        max={max}
        value={[fromValue, toValue]}
        onChange={(value) => {
          if (typeof value === "object") {
            setFromValue(value[0]);
            setToValue(value[1]);
          }
        }}
      />
    </>
  );
}
