import { Button, Form, Input, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../apiCalls/users";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/reducers/userSlice";

function Login() {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);
  const redirect = useNavigate();
  const modalRef = useRef();

  const dispatch = useDispatch();
  const prevPaths = useSelector((state) => state.historyRoutes.routes);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      (res) => {
        // console.log(res);
        setBtnDisabled(false);
      },
      (res) => {
        setBtnDisabled(true);
        // console.log(res);
      }
    );
  }, [values]);

  const onFinish = async (values) => {
    // console.log(values);
    try {
      const response = await loginUser(values.email, values.password, dispatch);
      if (response.success) {
        dispatch(addUser(response.data));
        localStorage.setItem("user", JSON.stringify(response.data));
        message.success(response.message);
        redirect("/");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      return message.error(error.message);
    }
  };

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
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        className={styles.form_reg}
        onFinish={onFinish}
      >
        <h2 className={styles.title}>Login</h2>

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

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.btn}
            disabled={btnDisabled}
          >
            Submit
          </Button>
        </Form.Item>
        <div className={styles.text_login}>
          <span>Don't have an account?</span>
          <Link to={"/register"}>
            <b>Sing Up</b>
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
