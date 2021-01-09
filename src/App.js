import "./App.css";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  PaperClipOutlined,
  BookOutlined
} from "@ant-design/icons";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Avatar from "antd/lib/avatar/avatar";

const { Content, Footer, Sider } = Layout;
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Sider
          style={{ paddingBottom: "70px" }}
          breakpoint="md"
          collapsedWidth="0"
          width="250"
        >
          <div className="Avatar">
            <div className="AvatarItem">
              <Avatar src="./avatar.png" size={180} />
            </div>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/">Эхлэл</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BookOutlined />}>
              <Link to="/about">Миний тухай</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<PaperClipOutlined />}>
              <Link to="/experience">Туршлага</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<PhoneOutlined />}>
              <Link to="/contact">Холбоо барих</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/experience">
                <Experience />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Created by Munkhtogtokh.B ©2021
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
