import NotAuthorizedPage from "../app/notauthorized/not_authorized-page";
import { routerList } from "../data/routerList";
import { Navigate } from "react-router-dom";

function useRouterHook(userType: number) {
  const filterRouterList = () => {
    switch (userType) {
      case 0:
        return routerList.map((el) => {
          if (el.role === 0 || el.role === 1) return el;
          else
            return {
              ...el,
              element: <NotAuthorizedPage message={"로그인이 필요합니다."} />,
            };
        });
      case 1:
        return routerList.map((el) => {
          if (el.role === 0)
            return { ...el, element: <Navigate to="/" replace /> };
          if (el.role === 3)
            return {
              ...el,
              element: (
                <NotAuthorizedPage message={"관리자 권한이 필요합니다."} />
              ),
            };
          else return el;
        });
      case 2:
        return routerList.map((el) => {
          if (el.role === 0)
            return { ...el, element: <Navigate to="/" replace /> };
          else return el;
        });
    }
    return [];
  };

  return {
    filterRouterList: filterRouterList(),
  };
}
export default useRouterHook;
