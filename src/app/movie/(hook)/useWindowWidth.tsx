import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const useWindowWidth = (itemSize: number) => {
  const [windowWidth, setWindowWidth] = useState<number>(
    window.innerWidth < itemSize ? 1 : Math.floor(window.innerWidth / itemSize)
  );

  const handleResize = useDebouncedCallback(() => {
    if (window.innerWidth < itemSize) return setWindowWidth(1);
    setWindowWidth(Math.floor(window.innerWidth / itemSize));
  }, 300);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // resize 이벤트가 발생할 때 handleResize 함수가 실행되도록 한다.
    window.addEventListener("resize", handleResize);
    // 이벤트 리스너를 제거하여 이벤트 리스너가 리사이즈될 때마다 계속해서 생겨나지 않도록 처리한다. (clean up)
    return () => window.removeEventListener("resize", handleResize);
  }, []); // 컴포넌트가 처음 마운트 될때와 언마운트 될 때 실행

  return { windowWidth };
};

export default useWindowWidth;
