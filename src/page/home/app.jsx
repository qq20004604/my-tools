import React from 'react';
import ReactDOM from 'react-dom';
import {Layout, Menu} from 'antd';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './app.less'
import BoxShadow from './box_shadow'

const {Content, Sider} = Layout;

const List = {
    '1': {
        title: '盒阴影',
        content: <BoxShadow/>
    }
}

const getContent = (key) => {
    return List[key]
}

const getMenu = () => {
    return Object.keys(List).map((key) => <Menu.Item key={key}>
        <span>{List[key].title}</span>
    </Menu.Item>)
}

class Root extends React.Component {
    state = {
        currentMenu: '1'
    };

    render () {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider>
                    <div className="logo"/>
                    <Menu theme="dark"
                          defaultSelectedKeys={this.state.currentMenu}
                          mode="inline"
                          onClick={this.onMenuChange}>
                        {getMenu()}
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{margin: '0 16px'}}>
                        <div style={{margin: '16px 0'}}></div>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            {
                                getContent(this.state.currentMenu).content
                            }
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }

    onMenuChange = ({key}) => {
        this.setState({
            currentMenu: key
        })
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
