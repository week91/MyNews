import React, { useState, useEffect } from 'react';
import '../App.css';
import { Layout,  Breadcrumb } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { Card } from 'antd';
import AllNews from './news/allnews.js' ;
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import NewsDetail from'.//news/newsDetail/NewsDetail';
import HomePage from './news/homepage'
import TopBar from './topbar'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import {getAllNews1, getAllNews} from '../store/layout/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FullNews from './news/fullNews';
import NormalLoginForm from './auth/autForm'

function NotFound(){
  return (
    <div><p>404</p></div>)
}
const { SubMenu } = Menu;
const { Meta } = Card;

const { Header, Content, Footer,Sider } = Layout;
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
  );// масси меню дропдауна

function Layout1 (props) {


  const { getAllNews1,News } = props;
  useEffect(() => {
 
  getAllNews1();
  },[]);


  return (


    <Router>
      

   
    {/*   <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed"
        }}
      >
        <Menu
          className="rr"
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          <Menu.Item key="1">
            <PieChartOutlined />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <DesktopOutlined />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <TeamOutlined />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <FileOutlined />
          </Menu.Item>
        </Menu>
      </Sider> */}

      <Layout>
        <TopBar />

        <Layout>
          <Content
            className="site-layout"
            style={{ padding: "50px", marginTop: 64 }}
          >
           
            <div> 
               <Switch> 
                
          <Route exact path="/"><HomePage /></Route>
          <Route path="/allnews"> <FullNews news={News} /></Route>
          <Route path="/news/:id" component={NewsDetail} />
          <Route path="/auth"  ><NormalLoginForm /></Route>
          <Route path='*' component={NotFound} />
          </Switch>
        </div>
           
          </Content>
          <Footer style={{ textAlign: "center" }}>
            ©2020 Created by PVT react cource 
          </Footer>
        </Layout>
      </Layout>
    
   </Router>
  );
}





const mapStateToProps = (state) => {
  return {
    News:state.layout.News
  };
};

const mapDispatchToProps = {
  
    getAllNews1
  
};




export default connect(mapStateToProps, mapDispatchToProps)(Layout1);