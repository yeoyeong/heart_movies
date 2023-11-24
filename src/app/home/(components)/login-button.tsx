import ImageComponent from "@src/components/ImageComponent";
import globalStore from "@src/store/global-store";
import styled from "styled-components";
import useAuthHandler from "../../../hooks/useAuthHandler";
// import useHandleGoogleLogin from "../(hook)/useAuthHandler";

const LoginButton = () => {
  const { themeMode } = globalStore();
  const { handleGoogleLogin } = useAuthHandler();
  return (
    <Button onClick={handleGoogleLogin}>
      {themeMode === "dark" ? (
        <ImageComponent
          imageUrl={"/img/google_signin_dark.svg"}
          alt="구글 로그인 다크모드"
        />
      ) : (
        <ImageComponent
          imageUrl={"/img/google_signin_light.svg"}
          alt="구글 로그인 라이트모드"
        />
      )}
    </Button>
  );
};

export default LoginButton;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
