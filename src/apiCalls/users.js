import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import fireStoreDataBase from "../firebaseConfig";
import { useDispatch } from "react-redux";
import { closeLoading, openLoading } from "../redux/reducers/loadingSlice";

const saltRounds = 10;
const bcrypt = require("bcryptjs");


export const CreateUser = async (user, dispatch) => {
  

  try {
   dispatch( openLoading());
    const collectRef = collection(fireStoreDataBase, "users");
    //check if user already exist by email
    const qry = query(collectRef, where("email", "==", user.email));
    const qrySnapshot = await getDocs(qry);
   
    if (qrySnapshot.size > 0) {
      throw new Error("User already exists");
    }
    
    const hashedPassword = bcrypt.hashSync(user.password, saltRounds);
    user.password = hashedPassword;
    await addDoc(collectRef, user);
    dispatch(closeLoading());
    return {
      success: true,
      message: "User created successfully",
    };
  } catch (error) {
    dispatch(closeLoading());
    return error;
  }
};

export const loginUser = async (email, password, dispatch) => {
  try {
    dispatch(openLoading())
    const collectRef = collection(fireStoreDataBase, "users");
    //check if user already exist by email
    const qry = query(collectRef, where("email", "==", email));
    const qrySnapshot = await getDocs(qry);
    if (qrySnapshot.size === 0) {
      throw new Error(`User with email: ${email} doesn't exist`);
    }
    
    //check if password correcte
    const user = qrySnapshot.docs[0].data();
    const idUser = qrySnapshot.docs[0].id;
    const hashedPassword = user.password;
    
    const isPasswordValid = bcrypt.compareSync(password, hashedPassword);
    if (!isPasswordValid) {
      throw new Error("Password incorrecte!");
    }
    dispatch(closeLoading())
    return {
      success: true,
      message: "User login successfully",
      data: {...user, password: '', id: idUser}
    };
  } catch (error) {
    dispatch(closeLoading())
    return error;
  }
}
