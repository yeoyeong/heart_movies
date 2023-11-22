import { useEffect, useState } from "react";
import useWindowWidth from "./useWindowWidth";
import { movielistType } from "../(model)/list";
// import { useDebouncedCallback } from "use-debounce";

const useMasonry = (initialData: movielistType[]) => {
  const { windowWidth } = useWindowWidth(240);
  const [itemList, setItemList] = useState<movielistType[][]>([]);

  useEffect(() => {
    const newArr: movielistType[][] = Array.from(
      { length: windowWidth },
      () => []
    );
    // cur = arr[i], acc = arr
    const result = initialData.reduce((acc, cur, idx) => {
      acc[idx % acc.length].push(cur);
      return acc;
    }, newArr);

    setItemList(result);
  }, [windowWidth]);

  return { itemList, windowWidth };
};

export default useMasonry;
