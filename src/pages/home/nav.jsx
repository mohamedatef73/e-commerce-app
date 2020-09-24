import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Switch } from 'antd';
import { SettingTwoTone, ShoppingCartOutlined, PhoneTwoTone, ShoppingTwoTone, AppstoreTwoTone } from '@ant-design/icons';
import './Home.scss'

const { SubMenu } = Menu;

class Sider extends React.Component {
    state = {
        mode: 'inline',
        theme: 'light',
    };

    changeMode = value => {
        this.setState({
            mode: value ? 'vertical' : 'inline',
        });
    };

    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };

    render() {
        return (
            <div className='header'>

                    <Menu className='nav' style={{ background: '#edc98e' }}
                        mode={this.state.mode} theme={this.state.theme}>

                        <SubMenu key="sub1" icon={<PhoneTwoTone style={{ fontSize: '25px', color: '#08c' }} />} title="Contacts">
                            <Menu.Item key="1">Email</Menu.Item>
                            <Menu.Item key="2">phone call</Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub2" icon={<ShoppingCartOutlined style={{ fontSize: '25px', color: '#08c' }} />} title="Shopping Cart">
                            <Menu.Item key="3">current</Menu.Item>
                            <Menu.Item key="4">draft</Menu.Item>
                        </SubMenu>


                        <SubMenu key="sub3" icon={<ShoppingTwoTone style={{ fontSize: '25px', color: '#08c' }} />} title="Products categories">
                            <Menu.Item key="5">Supplements</Menu.Item>
                            <Menu.Item key="6">Running shoes</Menu.Item>
                            <Menu.Item key="7">Sports tools</Menu.Item>
                        </SubMenu>



                        <SubMenu key='sub4' icon={<SettingTwoTone style={{ fontSize: '25px', color: '#08c' }} />} title='setting'>
                            <Menu.Item key="8">
                                <Switch onChange={this.changeMode} /> Style
                        </Menu.Item>

                            <Menu.Item key="9">
                                <Switch onChange={this.changeTheme} /> Dark
                        </Menu.Item>
                        </SubMenu>
                    </Menu>


                {/* <div className='float-right'>
                        <AppstoreTwoTone style={{ fontSize: '50px', color: '#08c', marginTop: '5px' }} />
                    </div> */}

            </div>
        );
    }
}

export default Sider

