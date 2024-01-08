import { Button, Card, Form, Input } from "antd";
import "../../styles/Login.css"
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate("/layout")
  }
  return (
    <div className="login-container">
      <Card title="LOG IN"  headStyle={{borderBottom: 'none', color:"gray", fontSize:"20px", textAlign:"center"}} style={{backgroundColor: "transparent", width:"30%", justifyContent:"center", alignItems:"center",border: '1px solid gray' }}>
        <Form>
          <Form.Item name="username">
            <Input style={{backgroundColor:"transparent", fontWeight:"bold", color:"#ffffff", border: 'none',borderBottom: '1px solid black',borderRadius: '0', }} placeholder="Enter Your Username"></Input>
          </Form.Item>
          <Form.Item name="password">
          <Input style={{backgroundColor:"transparent", fontWeight:"bold", color:"#ffffff", border: 'none',borderBottom: '1px solid black',borderRadius: '0', }} placeholder="Enter Your Password"></Input>
          </Form.Item>
          <Form.Item>
            <Button style={{backgroundColor:"#00b4d8", color:"white", fontWeight:"bold"}} onClick={onClick}>Login</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
