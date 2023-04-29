import { useCallback } from "react";

export default function useDigitFormat() {
  const formatSixDigits = useCallback((number) => {
    const scaledNumber =
      Number(number) /
      Math.pow(10, Math.max(0, Math.floor(Math.log10(number)) - 5));
    return scaledNumber.toLocaleString("en-US", { maximumFractionDigits: 0 });
  }, []);

  return formatSixDigits;
}
