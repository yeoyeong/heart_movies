import { useEffect, useState } from "react";
import useWindowWidth from "./useWindowWidth";

const useMasonrySkeleton = (initialData: number[]) => {
  const { windowWidth } = useWindowWidth(240);
  const [itemList, setItemList] = useState<number[][]>([]);

  useEffect(() => {
    const newArr: number[][] = Array.from({ length: windowWidth }, () => []);
    // cur = arr[i], acc = arr
    const result = initialData.reduce((acc, cur, idx) => {
      acc[idx % acc.length].push(cur);
      return acc;
    }, newArr);
    setItemList(result);
  }, [windowWidth]);

  return { itemList, windowWidth };
};

export default useMasonrySkeleton;
