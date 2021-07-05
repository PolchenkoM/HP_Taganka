import React from "react";
import Info from "./Info";
import Contacts from "./Contacts";
import Galery from "./Galery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Carousel } from "antd";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

function Main() {
  return (
    <Router>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            backgroundColor: "white",
            opacity: 0.6,
          }}
        >
          <div
            className="logo"
            style={{
              float: "left",
              width: "200px",
              height: "200px",
              margin: "16px 24px 16px 0",
              backgroundImage: "url(./images/logo.jpg)",
            }}
          />

          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" style={{ color: "red" }}>
              <Link to="/" style={{ color: "red" }}>О заведении</Link>
            </Menu.Item>
            <Menu.Item key="2" style={{ color: "red" }}>
              <Link to="/galery" style={{ color: "red" }}>Галерея</Link>
            </Menu.Item>
            <Menu.Item key="3" style={{ color: "red" }}>
              <Link to="/contacts" style={{ color: "red" }} >Контакты</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{
            padding: "0 50px",
            marginTop: 64,
            background: "url(./images/back4.png) no-repeat",
            backgroundSize:"cover",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              padding: 200,
              minHeight: 900,
              width: 1500,
            }}
          >
            <Switch>
            <Route exact path="/" component={Info}/>
              <Route exact path="/galery" component={Galery}/>
              <Route exact path="/contacts" component={Contacts}/>
            </Switch>
          </div>

          <Footer
            style={{
              textAlign: "center",
              width: "100%",
              backgroundColor: "white",
              opacity: 0.6,
            }}
          >
            Created by Polchenko_M
          </Footer>
        </Content>
      </Layout>
    </Router>
  );
}

export default Main;
