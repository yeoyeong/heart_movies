import { useEffect, useState } from "react";
import useWindowWidth from "./useWindowWidth";
import { movielistType, movielistsType } from "../(model)/list";

const useMasonryInfinity = (initialData: movielistsType[]) => {
  const { windowWidth } = useWindowWidth(240);
  const [itemList, setItemList] = useState<movielistType[][]>([]);

  useEffect(() => {
    const newArr: movielistType[][] = Array.from(
      { length: windowWidth },
      () => []
    );
    const result: movielistType[][] = newArr;
    // cur = arr[i], acc = arr
    initialData.map(({ results }: { results: movielistType[] }) => {
      const reduce_data = results.reduce((acc, cur, idx) => {
        acc[idx % acc.length].push(cur);
        return acc;
      }, newArr);

      newArr.map((item, index) => {
        if (reduce_data[index]) {
          return [...item, ...reduce_data[index]];
        }
        return item;
      });
    });
    setItemList(result);
  }, [windowWidth, initialData]);

  return { itemList, windowWidth };
};

export default useMasonryInfinity;
