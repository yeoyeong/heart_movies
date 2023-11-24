import { useEffect, useState } from "react";
import useWindowWidth from "../../movie/(hook)/useWindowWidth";
import { heartMoviesType } from "../../movie/(model)/list";
import { UseQueryResult } from "react-query";
// import { useDebouncedCallback } from "use-debounce";

const useMasonry = (
  initialData: UseQueryResult<heartMoviesType, unknown>[]
) => {
  console.log(initialData);
  const { windowWidth } = useWindowWidth(240);
  const [itemList, setItemList] = useState<heartMoviesType[][]>([]);

  useEffect(() => {
    const newArr: heartMoviesType[][] = Array.from(
      { length: windowWidth },
      () => []
    );
    // cur = arr[i], acc = arr
    const result = initialData.reduce((acc, cur, idx) => {
      //
      if (cur.data) {
        acc[idx % acc.length].push(cur.data);
      }

      return acc;
    }, newArr);
    setItemList(result);
  }, [windowWidth, initialData]);

  return { itemList, windowWidth };
};

export default useMasonry;
