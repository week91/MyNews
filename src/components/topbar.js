import React from "react";
import "../App.css";
import { Layout } from "antd";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../store/registr/actions";
import { userPostFetchGet } from "../store/registr/actions";

const { Header } = Layout;

function TopBar(props) {
  const { logoutUser } = props;

  const handleClick = event => {
    event.preventDefault();
    localStorage.removeItem("token");
    logoutUser();
  };

  return (
    <Header className="topbar">
      <Link className="logo" to="/">
        My News
      </Link>

      <Menu
        className="menu"
        title="topbar"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px"}}
      >
        <Menu.Item key="1">
                   <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/allnews">All my News</Link>
        </Menu.Item>
        <Menu.Item key="3">
          {props.currentUser ? (
            <Link to="/" onClick={handleClick}>
              Log Out
            </Link>
          ) : (
            <Link to="/auth">Autorization</Link>
          )}
        </Menu.Item>
      </Menu>
    </Header>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.RegistLoginOut.currentUser.email
  };
};

const mapDispatchToProps = {
  userPostFetchGet,
  logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
