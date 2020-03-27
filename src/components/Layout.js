import React, {  useEffect } from "react";
import "../App.css";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewsDetail from ".//news/newsDetail/NewsDetail";
import HomePage from "./news/homepage";
import TopBar from "./topbar";
import {} from "@ant-design/icons";
import { getAllNews1 } from "../store/layout/actions";
import { connect } from "react-redux";
import FullNews from "./news/fullNews";
import NormalLoginForm from "./auth/autForm";
import RegistrationForm from "./auth/authForm";
import LoadingSpinner from "./news/loading/loading";
import { userPostFetchGet } from "../store/registr/actions";

function NotFound() {
  return (
    <div>
     <h2>404 not found</h2>
    </div>
  );
}

const {  Content, Footer} = Layout;

function Layout1(props) {
  const { getAllNews1, News, loading, userPostFetchGet } = props;
  useEffect(() => {
    getAllNews1();
  },[]);

  useEffect(() => {
    userPostFetchGet();
  } );
  return (
    <Router>
     
        <TopBar />
        <Layout>
           {loading ? <LoadingSpinner /> : 
            <Content
              className="site-layout"
              style={{ padding: "50px", marginTop: 64 }}
            >
              <div>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route path="/allnews">
                  <FullNews news={News} />
                  </Route>
                  <Route path="/news/:id" component={NewsDetail} />
                  <Route path="/auth">
                    <NormalLoginForm />
                  </Route>
                  <Route path="/aut">
                    <RegistrationForm />
                  </Route>
                  <Route path="*" component={NotFound} />
                </Switch>
              </div>
            </Content>
          }
          <Footer style={{ textAlign: "center" }}>
            ©2020 Created by PVT react cource{" "}
                      </Footer>
        </Layout>
     
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    News: state.layout.News,
    loading: state.layout.loading,
    
  };
};

const mapDispatchToProps = {
  getAllNews1,
  userPostFetchGet
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout1);
