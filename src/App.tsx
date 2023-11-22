import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useRouterHook from "./hooks/useRouterHook";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const isLoggedin = {
    userType: 0,
    // userType 0 === 로그인전
    // userType 1 === 로그인
    // userType 2 === 어드민
  };
  const router = useRouterHook(isLoggedin.userType);
  const queryClient = new QueryClient(); // 생성

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={createBrowserRouter(router.filterRouterList)} />
    </QueryClientProvider>
  );
}

export default App;
