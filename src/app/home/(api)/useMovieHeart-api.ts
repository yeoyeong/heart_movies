import { db } from "@src/libs/firebase-config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import movieStore from "../../movie/(store)/moive-store";

const useMovieHeartApi = () => {
  const { setHeartIdList } = movieStore();

  const userId = sessionStorage.getItem("uid");

  const getHeartListApi = async (uid: string | null) => {
    const id = uid ? uid : userId ? userId : null;
    if (!id) return;
    try {
      //uid로 특정 유저 찾아내기
      const usersRef = collection(db, "users");
      const userQuery = query(usersRef, where("uid", "==", id));

      const querySnapshot = await getDocs(userQuery);
      querySnapshot.forEach(async (userDoc) => {
        const heartMovieListQuery = collection(userDoc.ref, "heart_movie_list");
        const heartMovieListSnapshot = await getDocs(heartMovieListQuery);
        heartMovieListSnapshot.forEach((doc) => {
          const list = doc.data().list;
          setHeartIdList(() => list);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  //uid로 특정 유저 찾아내기
  const findUserToUid = async () => {
    let id;
    const usersRef = collection(db, "users");
    const userQuery = query(usersRef, where("uid", "==", userId));
    const querySnapshot = await getDocs(userQuery);
    querySnapshot.forEach((doc) => {
      console.log(doc.id);
      id = doc.id;
    });
    return id;
  };

  const updateMovieInHeartList = async (movieId: number) => {
    if (!userId) return alert("권한이 없습니다.");

    const id = await findUserToUid();
    try {
      if (!id) return;
      const userDocRef = doc(db, "users", id);
      const heartMovieListRef = collection(userDocRef, "heart_movie_list");
      const listDocRef = doc(heartMovieListRef, "list");

      setHeartIdList((prev) => {
        if (!prev) return [movieId];
        if (prev?.includes(movieId)) return prev.filter((id) => id !== movieId);
        return [...new Set([...prev, movieId])];
      });
      // list 문서의 현재 상태를 가져옴
      const docSnap = await getDoc(listDocRef);
      let list: number[] = [];
      if (docSnap.exists()) {
        list = docSnap.data().list || [];
      }

      if (list.includes(movieId))
        list = list.filter((id: number) => id !== movieId);
      else list.push(movieId);
      // list 문서를 업데이트하면서 새로운 movieId를 추가

      await setDoc(
        listDocRef,
        { list: [...new Set([...list])] },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getHeartListApi,
    updateMovieInHeartList,
  };
};

export default useMovieHeartApi;

//서브 컬렉션 받아오기
// const docRef = doc(db, "users", doc_id);
// const snapshot = await getDocs(collection(docRef, "heart_movie_list"));
// snapshot.forEach((doc) => {
//   console.log(doc.id, "=>", doc.data());
// });

// await deleteDoc(doc(db, "users", userId));

// const docRef = await doc(collection(db, "users", userId));
// const docSnap = await getDoc(collection(db, "users", userId));
// try {
//   // db.collection("user").doc(userId);
//   collection(db, "users")
//   // const response = await getDocs(collection(db, "users"));
//   // // response.forEach((response) => {
//   // //   console.log(response.data());
//   // // });
// } catch (error) {
//   console.log(error);
// }

//서브 컬렉션에 문서 추가
// const addMovieToHeartList = async (movieId: number) => {
//   if (!userId) return alert("권한이 없습니다.");
//   //uid로 특정 유저 찾아내기
//   let id;
//   const usersRef = collection(db, "users");
//   const userQuery = query(usersRef, where("uid", "==", userId));
//   const querySnapshot = await getDocs(userQuery);
//   querySnapshot.forEach((doc) => {
//     id = doc.id;
//   });
//   try {
//     if (!id) return;
//     const userDocRef = doc(db, "users", id);
//     const heartMovieListRef = collection(userDocRef, "heart_movie_list");
//     const listDocRef = doc(heartMovieListRef, "list");

//     // list 문서의 현재 상태를 가져옴
//     const docSnap = await getDoc(listDocRef);
//     let list = [];
//     if (docSnap.exists()) {
//       list = docSnap.data().list || [];
//     }
//     // list 문서를 업데이트하면서 새로운 movieId를 추가
//     await setDoc(
//       listDocRef,
//       { list: [...new Set([...list, movieId])] },
//       { merge: true }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };
