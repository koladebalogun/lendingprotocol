import { useCallback } from "react";

const useConvertToUsd = (usdPrices) => {
  const convertToUsd = useCallback(
    (amount, tokenAddress) => {
      if (usdPrices && usdPrices[tokenAddress]) {
        return parseFloat(amount) * parseFloat(usdPrices[tokenAddress].usd);
      }
      return 0;
    },
    [usdPrices]
  );

  return convertToUsd;
};

export default useConvertToUsd;