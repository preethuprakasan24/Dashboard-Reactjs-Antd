import React, { useState } from 'react';
import { Menu } from "antd";
import { AppstoreOutlined, HomeOutlined, ShoppingCartOutlined, UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className='SideMenu'>
            <div className="menu-toggle" onClick={toggleCollapsed}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
            <Menu
                mode="inline"
                inlineCollapsed={collapsed}
                onClick={(item) => {
                    navigate(item.key);
                }}
            >
                <Menu.Item key="/Dashboard-Reactjs-Antd" icon={<HomeOutlined />} >
                    HomePage
                </Menu.Item>
                <Menu.Item key="/dashboard" icon={<AppstoreOutlined />} >
                    Dashboard
                </Menu.Item>
                <Menu.Item key="/inventory" icon={<UserOutlined />} >
                    Inventory
                </Menu.Item>
                {/* <Menu.Item key="/orders" icon={<ShoppingCartOutlined />} >
                    Orders
                </Menu.Item> */}
            </Menu>
        </div >
    );
}

export default SideMenu;






