import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useHistory } from "react-router-dom";
import '../assets/mainLayout.css'

import { loadInitialCountry, saveFilteredData, loadFilteredResults } from '../redux/actions/load_products_action/LoadProductsAction';
import { DefaultLoading } from '../components/DefaultLoading';

import { connect } from "react-redux";

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    FlagOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;


function MainLayout(props) {
    const [collapsed, setcollapsed] = React.useState(false)
    const [initialCountry, setInittialCountry] = React.useState('in')
    let history = useHistory();
    React.useEffect(async () => {
        await props.loadInitialCountry(initialCountry)
    }, [])

    const toggle = () => {
        setcollapsed(!collapsed)
    };

    const selectCountry = async (code) => {
        await props.loadInitialCountry(code)
        await setInittialCountry(code);
        history.push(`/country-news/${code}/`);
    }
    const filterCategory = async (code) => {
        await props.loadFilteredResults(code, initialCountry)
        history.push('/filter/');
    }

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<FlagOutlined />} onClick={() => { selectCountry('in') }}>
                        India
            </Menu.Item>
            <Menu.Item key="2" icon={<UploadOutlined />} onClick={() => { selectCountry('ca') }}>
                        Canada
            </Menu.Item>

            <Menu.Item key="3" icon={<VideoCameraOutlined />} onClick={() => { selectCountry('us') }}>
                        USA
            </Menu.Item>
        
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                    <div className='top-menu'>
                        <p onClick={() => { filterCategory('business') }}>Business</p>
                        <p onClick={() => { filterCategory('entertainment') }}>Entertainment</p>
                        <p onClick={() => { filterCategory('health') }}>Health</p>
                        <p onClick={() => { filterCategory('science') }}>Science</p>
                        <p onClick={() => { filterCategory('sports') }}>Sports</p>
                        <p onClick={() => { filterCategory('technology') }}>Technology</p>
                    </div>
                </Header>

                <div className='search-filter'>
                    <input type='text' placeholder='search'  />

                    <button type='submit'>Submit</button>

                </div>

                <div className='heading-news'>
                    <h2><b>Trending News</b></h2>
                </div>

                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
}
function mapStateToProps(state) {
    return {
        isLoadingProducts: state.load_products_reducer.isLoading,
        homePageItems: state.load_products_reducer
    }
}
const mapDispatchToProps = {
    loadInitialCountry, saveFilteredData, loadFilteredResults
}
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);