import { Button, Layout, Tooltip } from "antd";
import PropTypes from "prop-types";
import setImage from "../assets/logo-color.png"
const { Header, Sider } = Layout;
import { Content } from "antd/es/layout/layout";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import HeaderMenu from "./Header/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined, TeamOutlined } from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items_for_test = [
  getItem("Thông tin nhân sự", "sub1", <TeamOutlined />, [
    getItem("Hợp đồng lao động nhân viên"),
    getItem("Quản lý quá trình", "g1", null, [
      getItem("+ Quá trình đào tạo", "1"),
      getItem("+ Quá trình công tác", "2"),
      getItem("+ Quá trình hoạt động đoàn viên", "3"),
      getItem("+ Quá trình khen thưởng - kỷ luật", "4"),
      getItem("+ Thuế thu nhập cá nhân")
    ], 'group'),
    getItem("Báo cáo thống kê hoạt động nhân sự"),
    getItem("Xuất dữ liệu"),
  ]),

  getItem("Quản lý công tác làm việc", "sub2", <TeamOutlined />, [
    getItem("Công tác"),
    getItem("Nghỉ phép"),
    getItem("Tăng ca"),
    getItem("Báo cáo quá trình làm việc"),
  ]),

  getItem("Tính lương & các khoản giảm trừ theo lương", "sub3", <TeamOutlined />, [
    getItem("Khai báo hệ số tiền lương và mức lương"),
    getItem("Lương theo thời gian"),
    getItem("Khai báo tăng lương"),
    getItem("Lương công nhật"),
    getItem("Lương sản phẩm"),
    getItem("Khai báo công thức tính các khoản giảm trừ"),
    getItem("Báo cáo tổng lương"),
    getItem("Báo cáo phân bổ lương sản phẩm"),
  ]),
  //   getItem("Collaborators & Teams", "collaborators", <TeamOutlined />),
  //   getItem("My Task", "task", <SolutionOutlined />),
];

const DefaultLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [loading, setLoading] = useState(false);
  const refreshTable = false;
  const navigate = useNavigate();


  const handleHomePage = () => {
    navigate("/homepage");
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <Spin
            size="large"
            style={{ fontSize: "77px", marginRight: "17px" }}
          ></Spin>
          <h1 style={{ color: "blue", marginTop: "33px", fontSize: "37px" }}>
            Vui Lòng Đợi Trong Giây Lát...
          </h1>
        </div>
      ) : (
        <>
          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={!collapsed}
              style={{ minHeight: "100vh", background: "white" }}
              width={300}
            >
              {collapsed && (
                <Tooltip title="To Homepage">
                  <img
                    style={{
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      margin: "10px auto",
                      backgroundSize: "cover",
                      display: "block",
                      cursor: "pointer",
                    }}
                    src={setImage}
                  />
                </Tooltip>
              )}
              <SidebarMenu items={items_for_test} />
            </Sider>
            <Layout>
              <Header
                style={{
                  padding: 0,
                  background: "white",
                  boxShadow: "0 4px 2px -2px #ccc",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      type="text"
                      icon={
                        collapsed ? (
                          <MenuUnfoldOutlined />
                        ) : (
                          <MenuFoldOutlined />
                        )
                      }
                      onClick={() => setCollapsed(!collapsed)}
                      style={{
                        fontSize: "16px",
                        width: 64,
                        height: 64,
                      }}
                    />

                  </div>
                  <HeaderMenu></HeaderMenu>
                </div>
              </Header>
              <Content
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: 280,
                  background: "white",
                }}
              >
                {children && children}
              </Content>
            </Layout>
          </Layout>
        </>
      )}
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

export default DefaultLayout;
