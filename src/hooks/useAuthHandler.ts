import useMovieHeartApi from "@src/app/home/(api)/useMovieHeart-api";
import movieStore from "@src/app/movie/(store)/moive-store";
import { auth, db } from "@src/libs/firebase-config";
import globalStore from "@src/store/global-store";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

function useAuthHandler() {
  const { setAuth } = globalStore();
  const { getHeartListApi } = useMovieHeartApi();
  // const { getHeartListApi } = useGetHeartList();
  const { setHeartIdList } = movieStore();
  //로그인 핸들러
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // provider 구글 설정
    try {
      const data = await signInWithPopup(auth, provider); // 팝업창 띄워서 로그인
      const idToken = await data.user.getIdToken(); // idToken 가져오기
      sessionStorage.setItem("idToken", idToken);
      sessionStorage.setItem("uid", data.user.uid);

      setAuth((prev) => ({ ...prev, idToken: idToken, uid: data.user.uid }));
      if (data.user.displayName !== null) {
        sessionStorage.setItem("name", data.user.displayName);
        setAuth((prev) => ({ ...prev, name: data.user.displayName }));
      }
      if (data.user.email !== null) {
        sessionStorage.setItem("email", data.user.email);
        setAuth((prev) => ({ ...prev, email: data.user.email }));
      }
      if (data.user.photoURL !== null) {
        sessionStorage.setItem("photoURL", data.user.photoURL);
        setAuth((prev) => ({ ...prev, photoURL: data.user.photoURL }));
      }
      getHeartListApi(data.user.uid);
      await addDoc(collection(db, "users"), {
        display_name: data.user.displayName,
        uid: data.user.uid,
        user_email: data.user.email,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //로그아웃 핸들러
  async function logoutHandler() {
    sessionStorage.removeItem("idToken");
    sessionStorage.removeItem("uid");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("photoURL");
    setAuth(() => ({
      idToken: null,
      uid: null,
      name: null,
      email: null,
      photoURL: null,
    }));
    setHeartIdList(() => null);
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Sign out error", error);
    }
  }
  return { handleGoogleLogin, logoutHandler };
}

export default useAuthHandler;
