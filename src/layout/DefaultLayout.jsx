import {
  Button,
  Input,
  Layout,
  Popover,
  Select,
  Table,
  Tooltip,
  Typography,
} from "antd";
import PropTypes from "prop-types";
import setImage from "../assets/logo-color.png";
const { Header, Sider } = Layout;
import { Content } from "antd/es/layout/layout";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import HeaderMenu from "./Header/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlignCenterOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  SearchOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import "../styles/Layout.css";

const { Title } = Typography;

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
    getItem(
      "Quản lý quá trình",
      "g1",
      null,
      [
        getItem("+ Quá trình đào tạo", "1"),
        getItem("+ Quá trình công tác", "2"),
        getItem("+ Quá trình hoạt động đoàn viên", "3"),
        getItem("+ Quá trình khen thưởng - kỷ luật", "4"),
        getItem("+ Thuế thu nhập cá nhân"),
      ],
      "group"
    ),
    getItem("Báo cáo thống kê hoạt động nhân sự"),
    getItem("Xuất dữ liệu"),
  ]),

  getItem("Quản lý công tác làm việc", "sub2", <TeamOutlined />, [
    getItem("Công tác"),
    getItem("Nghỉ phép"),
    getItem("Tăng ca"),
    getItem("Báo cáo quá trình làm việc"),
  ]),

  getItem(
    "Tính lương & các khoản giảm trừ theo lương",
    "sub3",
    <TeamOutlined />,
    [
      getItem("Khai báo hệ số tiền lương và mức lương"),
      getItem("Lương theo thời gian"),
      getItem("Khai báo tăng lương"),
      getItem("Lương công nhật"),
      getItem("Lương sản phẩm"),
      getItem("Khai báo công thức tính các khoản giảm trừ"),
      getItem("Báo cáo tổng lương"),
      getItem("Báo cáo phân bổ lương sản phẩm"),
    ]
  ),
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

  const columns = [
    {
      title: "Intern ID",
      dataIndex: "internId",
      width:120,
      fixed:'left'
    },
    {
      title: "Date submitted",
      dataIndex: "dateSubmitted",
      width:120,
      fixed:'left'
    },
    {
      title: "Full name",
      dataIndex: "fullName",
      width:150,

    },
    {
      title: "DoB",
      dataIndex: "dob",
      width:120,
    },
    {
      title: "Phone number",
      dataIndex: "phoneNumber",
      width:120,
    },
    {
      title: "Position",
      dataIndex: "position",
      width:200,
    },
    {
      title: "School",
      dataIndex: "school",
      width:100,
    },
    {
      title: "Address",
      dataIndex: "address",
      width:200,
    },
    {
      title: "Email",
      dataIndex: "email",
      width:200,
    },
    {
      title: "CV",
      dataIndex: "cv",
      width:80,
      render: (text, record) => (
        <a href={text} target="_blank">
          View
        </a>
      ),
    },
    {
      title: "Comment",
      dataIndex: "comment",
      width:100,
      render: (text, record) => (
        <Popover
          content={<span style={{ whiteSpace: "pre-wrap" }}>{text}</span>}
          title="Comment"
          trigger="click"
        >
          <Button>View</Button>
        </Popover>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      width:140,
      render: (text, record) => (
        <Select defaultValue="Pending">
          <Select.Option value="accept" style={{ color: "green" }}>
            Accept
          </Select.Option>
          <Select.Option value="reject" style={{ color: "red" }}>
            Reject
          </Select.Option>
          <Select.Option value="pending" style={{ color: "yellow" }}>
            Pending
          </Select.Option>
        </Select>
      ),
    },
    {
      title: "Buttons",
      dataIndex: "buttons",
      fixed:'right',
      width:240,
      render: (text, record) => (
        <div>
          <Button style={{ width: "100px", marginRight: "5px" }}>View</Button>
          <Button style={{ width: "100px" }}>Comment</Button>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      internId: "INTRN001",
      dateSubmitted: "10 Dec 2024",
      fullName: "John Doe",
      dob: "1995-03-21",
      phoneNumber: "+1234567890",
      position: "Software Engineer Intern",
      school: "MIT",
      address: "123 Main St, Anytown, CA",
      email: "john.doe@example.com",
      cv: "path/to/cv.pdf",
      comment: "Strong candidate with excellent coding skills.",
    },
    {
      key: "2",
      internId: "INTRN002",
      dateSubmitted: "10 Dec 2024",
      fullName: "John Doe",
      dob: "1995-03-21",
      phoneNumber: "+1234567890",
      position: "Software Engineer Intern",
      school: "MIT",
      address: "123 Main St, Anytown, CA",
      email: "john.doe@example.com",
      cv: "path/to/cv.pdf",
      comment: "Strong candidate with excellent coding skills.",
    },
    {
      key: "3",
      internId: "INTRN002",
      dateSubmitted: "10 Dec 2024",
      fullName: "John Doe",
      dob: "1995-03-21",
      phoneNumber: "+1234567890",
      position: "Software Engineer Intern",
      school: "MIT",
      address: "123 Main St, Anytown, CA",
      email: "john.doe@example.com",
      cv: "path/to/cv.pdf",
      comment: "Strong candidate with excellent coding skills.",
    },
    {
      key: "4",
      internId: "INTRN002",
      dateSubmitted: "10 Dec 2024",
      fullName: "John Doe",
      dob: "1995-03-21",
      phoneNumber: "+1234567890",
      position: "Software Engineer Intern",
      school: "MIT",
      address: "123 Main St, Anytown, CA",
      email: "john.doe@example.com",
      cv: "path/to/cv.pdf",
      comment: "Strong candidate with excellent coding skills.",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      name: record.name,
    }),
  };

  const buttonStyle = {
    margin: "0 10px",
    width: "120px",
  };
  const searchButton = {
    flexBasis: "33%",
    margin: "3px 0",
    width: "100px",
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

              {/* <Content
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: 280,
                  background: "white",
                }}
              >
                {children && children}
              </Content> */}

              <Content style={{ margin: "5px 16px" }}>
                <div
                  className="topContentContainer"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 20,
                    minHeight: 30,
                  }}
                >
                  <div>
                    <Title level={2} style={{ margin: "0" }}>
                      Approve CV
                    </Title>
                  </div>
                </div>
              </Content>

              <Content style={{ margin: "10px 16px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 24,
                    minHeight: 100,
                    borderRadius: 30,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Title level={3} style={{ color: "grey", margin: "0" }}>
                      Search for information
                    </Title>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Button
                      size="large"
                      className="scheduleBtn"
                      type="primary"
                      icon={<ClockCircleOutlined />}
                      style={buttonStyle}
                    >
                      Schedule
                    </Button>
                    <Button
                      size="large"
                      className="exportBtn"
                      type="primary"
                      icon={<DownloadOutlined />}
                      style={buttonStyle}
                    >
                      Export
                    </Button>
                    <Button
                      size="large"
                      className="editBtn"
                      type="primary"
                      icon={<EditOutlined />}
                      style={buttonStyle}
                    >
                      Edit
                    </Button>
                    <Button
                      size="large"
                      className="deleteBtn"
                      type="primary"
                      icon={<DeleteOutlined />}
                      style={buttonStyle}
                    >
                      Delete
                    </Button>
                    <Button
                      size="large"
                      className="addBtn"
                      type="primary"
                      icon={<PlusOutlined />}
                      style={buttonStyle}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </Content>

              <Content style={{ margin: "0 16px" }}>
                <div
                  style={{
                    padding: 24,
                    minHeight: 360,
                    borderRadius: 30,
                  }}
                >
                  <div className="searchContainer" style={{ display: "flex" }}>
                    <div
                      className="searchBar"
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                      }}
                    >
                      <Input
                        size="small"
                        placeholder="Basic usage"
                        style={searchButton}
                      />
                      <Input
                        size="small"
                        placeholder="Basic usage"
                        style={searchButton}
                      />
                      <Input
                        size="small"
                        placeholder="Basic usage"
                        style={searchButton}
                      />
                      <Input
                        size="small"
                        placeholder="Basic usage"
                        style={searchButton}
                      />
                      <Input
                        size="small"
                        placeholder="Basic usage"
                        style={searchButton}
                      />
                      <Input
                        size="small"
                        placeholder="Basic usage"
                        style={searchButton}
                      />
                      <Input
                        size="small"
                        placeholder="Basic usage"
                        style={searchButton}
                      />
                      <Input
                        size="small"
                        placeholder="Basic usage"
                        style={searchButton}
                      />
                      <Input
                        size="small"
                        placeholder="Basic usage"
                        style={searchButton}
                      />
                      <Input
                        size="small"
                        placeholder="Basic usage"
                        style={searchButton}
                      />
                    </div>
                    <div
                      className="searchButton"
                      style={{ marginLeft: "10px", display: "grid" }}
                    >
                      <Button icon={<AlignCenterOutlined />}>Filter</Button>
                      <Button type="primary" icon={<SearchOutlined />}>
                        Search
                      </Button>
                    </div>
                  </div>

                  <div className="tableContainer" style={{ marginTop: "20px" }}>
                    <Table
                      className="tableLayout"
                      scroll={{
                        x: 2000,
                        y:100
                      }}
                      rowSelection={{
                        type: "checkbox",
                        ...rowSelection,
                      }}
                      columns={columns}
                      dataSource={data}
                    />
                  </div>
                </div>
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
