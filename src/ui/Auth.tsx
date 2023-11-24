import useAuthHandler from "@src/hooks/useAuthHandler";
import ImageComponent from "@src/components/ImageComponent";
import globalStore from "@src/store/global-store";
import styled from "styled-components";

const Auth = () => {
  const { auth, authInfoToggle, setAuthInfoToggle } = globalStore();
  const { photoURL, name, email } = auth;
  const { logoutHandler } = useAuthHandler();

  return (
    <div>
      <UserIcon>
        <button onClick={() => setAuthInfoToggle(!authInfoToggle)}>
          {photoURL ? (
            <ImageComponent imageUrl={photoURL} alt="프로필사진" />
          ) : (
            <DefaultIcon />
          )}
        </button>
        {authInfoToggle && (
          <UserInfo>
            <ul>
              <li>{name}</li>
              <li>{email}</li>
              <li>
                <button
                  onClick={logoutHandler}
                  type="button"
                  className="logout"
                >
                  로그아웃
                </button>
              </li>
            </ul>
          </UserInfo>
        )}
      </UserIcon>
    </div>
  );
};

export default Auth;

const UserIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0;
  position: relative;
  cursor: pointer;
  > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    img {
      border-radius: 50%;
    }
  }
`;
const DefaultIcon = styled.div`
  background-color: #9883b2;
`;

const UserInfo = styled.div`
  position: absolute;
  /* width: 100px; */
  /* height: 100px; */
  /* padding-top: 20px; */

  top: 30px;
  right: -10px;
  background-color: ${(props) => props.theme.colors.background1};
  color: ${(props) => props.theme.colors.text};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  > ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    li {
      color: inherit;
      height: 48px;
      line-height: 48px;
      width: 100%;
      text-align: right;
      padding-left: 40px;
      padding-right: 10px;
      border-bottom: 1px solid
        ${(props) => props.theme.colors.backgroundReverseOpacity};
    }
    /* li */
  }
  .logout {
    background-color: transparent;
    border: none;
    color: inherit;
    width: 100%;
    height: 100%;
    padding: 0;
    cursor: pointer;
    text-align: right;
  }
`;
