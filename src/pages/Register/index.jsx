import { Button, Form, Input, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import styles from "./registre.module.css";
import { Link, useNavigate } from "react-router-dom";
import { CreateUser } from "../../apiCalls/users";
import { useDispatch, useSelector } from "react-redux";


function Register() {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [user, setUser] = useState();
  const [form] = Form.useForm();
  const values = Form.useWatch([],form);
  const dispatch = useDispatch();
   const redirect = useNavigate();
  const modalRef = useRef();

  const prevPaths = useSelector((state) => state.historyRoutes.routes);

  const onFinish = async () => {
    try {
      const response = await CreateUser(user,dispatch);
      console.dir(response);
      if (response.success) {
        message.success(response.message);
      }else {
        throw new Error(response.message)
      }
    } catch (error) {
      message.error(error.message);
    }
    
  }

  useEffect(()=>{
    
    form.validateFields({validateOnly:true})
    .then((res)=>{
      // console.log(res);
        setBtnDisabled(false);
        setUser(res);
      },
      (res)=> {
        setBtnDisabled(true);
        // console.log(res);
      }
    )
    
  }, [values])

  const modaleClosed = (event) => {
    if (event.target === modalRef.current) {
      let prevPath = prevPaths[prevPaths.length - 2];

      if (prevPath == "/login" || prevPath == "/register") {
        // console.log("ok");
        redirect("/");
      } else {
        // console.log(prevPath);
        redirect(prevPath);
      }
    }
  };

  
  return (
    <div ref={modalRef} onClick={modaleClosed} className={styles.form_wrap}>
      <Form form={form} name="validateOnly" layout="vertical" className={styles.form_reg} onFinish={onFinish} >
        <h2 className={styles.title}>Register</h2>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Please input your email corect!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        
        <Form.Item >
          <Button type="primary" htmlType="submit" className={styles.btn} disabled={btnDisabled}>
            Submit
          </Button>
          
        </Form.Item>
        <div className={styles.text_login}>
          <span>Already have account?</span>
          <Link to={'/login'}>
             <b>Sing In</b>
          </Link>
        </div>
        
      </Form>

    </div>
  );
}

export default Register;
