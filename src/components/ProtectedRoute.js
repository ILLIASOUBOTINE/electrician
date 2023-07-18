import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../redux/reducers/userSlice";
import { closeLoading, openLoading } from "../redux/reducers/loadingSlice";

function ProtectedRoute({ children }) {
  const redirect = useNavigate();
  // const [user, setUser] = useState();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!user) {
      redirect("/login");
    }
  }, [user]);

  // if (user) {
  //   return (
  //     <div>
  //       {children}
  //     </div>
  //   );
  // } else {
  //   redirect('/login');
  // }

  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default ProtectedRoute;
