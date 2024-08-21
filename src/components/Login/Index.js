import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import { auth, db } from '../../firebase/config';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

const { Title } = Typography;

const Login = () => {
  const handleFbLogin = async () => { 
    const fbProvider = new FacebookAuthProvider();
    try {
      const { additionalUserInfo, user } = await signInWithPopup(auth, fbProvider);
      
      if (additionalUserInfo?.isNewUser) {
        // Thêm người dùng mới vào Firestore
        const usersCollection = collection(db, 'users');
        await addDoc(usersCollection, {
          displayName: user.displayName,
          email: user.email || "",  // Đề phòng trường hợp email là null
          photoURL: user.photoURL,
          uid: user.uid,
          providerId: additionalUserInfo.providerId
        });
      }
    } catch (error) {
      console.error("Đăng nhập hoặc ghi dữ liệu không thành công:", error.message);
    }
  };

  return (
    <div>
      <Row justify='center' style={{ height: 1000 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>Fun Chat</Title>
          <Button style={{ width: "100%", marginBottom: 5}}>
            Đăng nhập bằng Google
          </Button>
          <br />
          <Button onClick={handleFbLogin} style={{ width: "100%" }}>
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
