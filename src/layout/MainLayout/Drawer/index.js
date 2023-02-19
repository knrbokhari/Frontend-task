import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import {AiOutlineHome, AiOutlineHeart} from 'react-icons/ai'
import {MdOutlineExplore, MdOutlineHistory} from 'react-icons/md'
import {GiShoppingCart} from 'react-icons/gi'
import {GrUserManager} from 'react-icons/gr'
import {IoMdCash } from 'react-icons/io'
import {HiOutlineChat } from 'react-icons/hi'
import {FiSettings } from 'react-icons/fi'
import { SlEarphones } from 'react-icons/sl'
import { Typography } from '@mui/material';

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Home', 'Home', <AiOutlineHome />),
  getItem('Explore', 'Explore', <MdOutlineExplore />),
  getItem('Saved', 'Saved', <AiOutlineHeart />),
  getItem('Cart', 'Cart', <GiShoppingCart />),
  getItem('Selling', 'Selling', <IoMdCash />),
  getItem('Profile', 'Profile', <GrUserManager />),
  getItem('History', 'History', <MdOutlineHistory />),
  getItem('Contact us', 'Contact us', < HiOutlineChat />),
  getItem('Setting', 'Setting', <FiSettings />),
];

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider theme="light" style={{boxShadow: '3px 8px 12px rgba(0, 0, 0, 0.25)'}}  breakpoint="lg" width={270} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            display: "flex",
            marginBottom: '20px'
          }}
        >
            <SlEarphones style={{color: "#42990D", height:'40px', width:"40px"}} />
            {
              !collapsed &&  <Typography sx={{display: { xs: 'none', md: 'block'}}} style={{marginLeft: '10px', fontSize: "25px"}}>MK Sounds</Typography>
            }
        </div>
        <Menu defaultSelectedKeys={['3']} mode="inline" items={items} />
    </Sider>
  )
}

export default index