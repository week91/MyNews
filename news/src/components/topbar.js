import React from 'react';
import '../App.css';
import { Layout} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { Link} from "react-router-dom";



const { Header,} = Layout;
const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  function TopBar() {
    return (<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
    <a className="logo"><Link to='/' >My News</Link></a>{" "}
    <Menu
      title="ghghg"
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item  key="1"> <Link to='/'>Home</Link></Menu.Item>
      <Menu.Item key="4"><Link to='/allnews'>All News</Link></Menu.Item>
      <Menu.Item key="2">
   
       
        <Dropdown overlay={menu}>
          <a
            className="ant-dropdown-link"
            onClick={e => e.preventDefault()}
          >
            News category <DownOutlined />
          </a>
        </Dropdown>
      </Menu.Item>
      <Menu.Item key="3"><Link to='/auth'>autorization</Link></Menu.Item>
    </Menu>
  
  </Header>);}
export default TopBar;