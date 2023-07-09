import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/reducers/userSlice";
import { useLocation} from "react-router-dom";
import { addRoute } from "../redux/reducers/historyRoutes";

function Initial() {
  const dispatch = useDispatch();
  const location = useLocation();
  
//   const [url, setUrl] = useState([]);
//   const previousPathRef = useRef([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    dispatch(addUser(storedUser));
  }, []);

  useEffect(() => {
    // console.dir(location)
    dispatch(addRoute(location.pathname))
    
  },[location]);


  return <></>;
}

export default Initial;
