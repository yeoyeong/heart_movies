import { useCallback, useEffect, useRef } from "react";

type IntersectHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

const useIntersect = (
  onIntersect: IntersectHandler,
  options?: IntersectionObserverInit
) => {
  const ref = useRef<HTMLDivElement>(null);

  // Intersection Observer가 관찰하는 요소가 화면에 보일 때 호출되는 함수입니다.
  // 이 함수는 관찰 대상들의 배열(entries)을 받아서,
  // 각 entry가 화면에 보이는 경우(entry.isIntersecting)에 onIntersect 함수를 호출합니다.
  // onIntersect =
  //async (entry, observer) => {
  //  observer.unobserve(entry.target); // 옵저버 제거 더 이상 해당 오브젝트 관찰 x
  //  if (hasNextPage && !isFetching) {
  //    fetchNextPage();
  //  }
  //}
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  // ref의 current가 존재할때
  // Intersection Observer를 생성 후 관찰
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);
    return () => observer.disconnect(); //클린업 : 랜더링 끌날떄 관찰 중지
  }, [ref, options, callback]);

  return ref;
};

export default useIntersect;
