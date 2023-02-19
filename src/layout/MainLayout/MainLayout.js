import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from './Drawer/index'
import Header from './Header/index'
import { Layout } from 'antd';
import { Content } from "antd/es/layout/layout";

const MainLayout = () => {
  return (
    <>
    <Layout theme='light' style={{
        minHeight: '100vh',
        background: "#fff"
      }}>
        <Drawer />
        <Layout className="site-layout">
            <Header />
            <Content
            style={{
                margin: '0 16px',
            }}
            >
                <Outlet/>         
            </Content>
        </Layout>
    </Layout>
    </>
  )
}

export default MainLayout