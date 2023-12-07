# React + TypeScript + Vite

front-end 
~~~
$ npm install
$ npm run dev
~~~

##리팩토링 

### for문 ⇒ reduce

**Before**

```jsx
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [windowWidth, setWindowWidth] = useState<number>(
    window.innerWidth < 240 ? 1 : Math.floor(window.innerWidth / 240)
  );
const [data, setData] = useState<number[][]>([]);

useEffect(() => {
		const newArr: number[][] = [];
    for (let i = 0; i < windowWidth; i++) {
      newArr.push([]);
    }
    for (let i = 0; i < arr.length; i++) {
      newArr[i % newArr.length].push(arr[i]);
    }
}, newArr);

    setData(result);
}, [windowWidth]);

// data = 
```

**after**

```jsx
useEffect(() => {
    const newArr: number[][] = Array.from({ length: windowWidth }, () => []);
    const result = arr.reduce((acc, cur, idx) => {
      acc[idx % acc.length].push(cur);
      return acc;
    }, newArr);

    setData(result);
  }, [windowWidth]);
```

성능 측면에서는 차이가 미미하나 가독성이나 코드 유지 관리부분에서 무슨 코드인지 한눈에 보이게 변함

**result**

```jsx
const data = [[1,3,5,7,9],[2,4,6,8,10]]
```

ex) Window 480px
[<img src="[http://www.google.com.au/images/nav_logo7.png](https://file.notion.so/f/f/1ef4d1fb-d922-48bc-8e73-c05e1104adb4/a5014cd1-1af5-4f9f-a69b-0c7e3af77617/Untitled.png?id=5d2a8f00-2536-4119-92c9-888c916ce5f7&table=block&spaceId=1ef4d1fb-d922-48bc-8e73-c05e1104adb4&expirationTimestamp=1702080000000&signature=avPDE-6Tb2XkOqIeM7Zlvez2LWUFynJens3Jaob3mHs&downloadName=Untitled.png)">](http://google.com.au/)

### 반응형 랜더링 최적화, useDebouncedCallback()

**문제점**

브라우저의 크기가 변경될 때마다 함수를 실행시켜서 영화 목록의 디자인을 수정해 주었었습니다. 이렇게 하면 사이즈를 한번 변경할때도 수십번의 재 렌더링이 일어나는 문제가 발생했습니다.

**해결**

useDebouncedCallback()를 알게 되었고 브라우저의 크기가 변경이 종료 된 후 0.3초 뒤에 재 렌더링이 일어나게 코드를 수정하였습니다.

```jsx
const handleResize = useDebouncedCallback(() => {
    if (window.innerWidth < 240) return setWindowWidth(1);
    setWindowWidth(Math.floor(window.innerWidth / 240));
  }, 300);

useEffect(() => {
    console.log(window.innerWidth);
    if (typeof window === "undefined") return;
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
```


### router Outlet => Query 

영화 목록 페이지를 카테고리별로 라우팅을 할 생각이었지만

기존 React-Router-Dom의 Outlet을 사용하여 관리했었는데

리액트쿼리를 사용한 API 요청, 레이아웃등 겹치는 부분이 많았기에 관련 페이지 컴포넌트들을 삭제하였습니다.

**before**

```jsx
import { Outlet } from "react-router-dom";
import MovieListProvider from "./lists/(components)/layout";

const MoviePage = () => {
  return (
    <MovieListProvider>
      <Outlet>
				**{/* Outlet에 영향을 받는 컴포넌트 들 */}**
				**{/*** **<NowPlayingPage/> */}
				{/* <PupularPage/> */}
				{/* <UpcomingPage/> */}**
			<Outlet/>
    </MovieListProvider>
  );
};
export default MoviePage;
```

**After**

```jsx
import { Link } from "react-router-dom";
import MovieListProvider from "./lists/(components)/layout";

const MoviePage = () => {
  return (
    <MovieListProvider>
      <ul>
        <li>
          <Link to="/movie?category=now_playing">지금 상영 중</Link>
        </li>
      </ul>
    </MovieListProvider>
  );
};
export default MoviePage;
```

그 후 쿼리값에 카테고리를 넣었고 쿼리값에 따라 요청 api주소를 변경하였습니다


### useQuery ⇒ useInfiniteQuery

useQuery에서 useInfiniteQuery로 바꾸면서

data return 형식이 변경되어서 

기존 useMasonry 구현 코드가 쓸모 없게 되었다

기존에 fetch데이터 배열을 불러와 화면 크기에 맞게 2차원배열로 만들던 코드였는데useInfiniteQuery()에서는 페이지가 늘어날때마다 fetch data를 페이지 데이터들을, 배열로

return 해주기 때문에 코드를 수정하게 되었습니다. 

**before**

```jsx
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
```

**after**

```jsx
const { windowWidth } = useWindowWidth(240);
  const [itemList, setItemList] = useState<movielistType[][]>([]);

  useEffect(() => {
    const newArr: movielistType[][] = Array.from(
      { length: windowWidth },
      () => []
    );

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
    setItemList(newArr);
  }, [windowWidth, initialData]);
```

받아온 초기값을 분해한 데이터를 reduce로 2차원배열을 만들고 새로운 배열로 push하는 작업을 하였습니다.

### styled component ThemeProvider ⇒ css root

고민한 **이유** 

1. 동적인 스타일이 필요없다
2. 상위컴포넌트를 프로바이더로 감싸야함 
3. 사용할때마다 props를 사용해야해서 스타일링 해야하는데 가독성 떨어짐

**before**

```jsx
background-color: ${(props) => props.theme.color.gray500}; 
```

**after**

```tsx
background-color: var(--primary-gray500);
```

