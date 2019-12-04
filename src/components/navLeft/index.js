import React, { Component, Fragment } from 'react';
import { Layout, Menu, Icon, Button, Tabs } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { actionCreate } from './store/index.js';
import Head from './comp/Head.js';
import AddData from './comp/AddData.js';
import mapboxgl from 'mapbox-gl';
import {
  Img
} from './style.js';

const { Sider } = Layout;
const { SubMenu } = Menu;
const { TabPane } = Tabs;

class NavLeft extends Component {
  renderMenu = (data) => {
    const { name, cli, toggleEye, toggle, clickLayerList } = this.props
    // console.log(toggleEye)
    // console.log(this.props.menuList)
    return data.map((item) => {
      if (item.children) {
        // {console.log(clickLayerList)}
        return (
          <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="dark"
          // inlineCollapsed={collapsed}
             key={item.key}
          >
            <SubMenu title={name} >
            
              <div style={{ position: 'absolute', right: '45px', top: '174px' }}>
                <i className='iconfont' onClick={cli} style={{ marginRight: '7px'}}>&#xe605;</i>
                {/* {config.layerData.map((item) => {

                  if (name === item.title) {
                    return <Img onClick={this.fly} key={item.id} src={item.url} alt='' />
                  }
                })} */}
                {toggleEye ? <i className='iconfont' onClick={toggle}>&#xebcc;</i>:
             <i className='iconfont' onClick={toggle}>&#xebcd;</i>}
                
              </div>
              {this.renderMenu(item.children)}
            </SubMenu>
          </Menu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }

  render() {
    const { collapsed, menuList, toggleCollapsed } = this.props
    return (
      <Fragment>
          <Button type="primary" onClick={toggleCollapsed}
            style={{ marginBottom: 16 }}>
            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>

          <Sider collapsed={collapsed} width={280} collapsedWidth={0} >
            <Head />
            <Tabs defaultActiveKey="1" >
              <TabPane tab={
                <i className='iconfont'>&#xe614;</i>
              } key="1">
                <AddData />
                {console.log(this.props.menuList)}
                {this.props.name ? this.renderMenu(menuList.toJS()): null}

              </TabPane>
              <TabPane tab={<i className='iconfont'>&#xe6e2;</i>} key="2">
                Filters
                </TabPane>
            </Tabs>
          </Sider>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collapsed: state.getIn(['navLeft', 'collapsed']),
    menuList: state.getIn(['navLeft', 'menuList']),
    name: state.getIn(['navLeft', 'name']),
    // clickLayerList: state.getIn(['navLeft', 'clickLayerList']),
    toggleEye: state.getIn(['navLeft', 'toggleEye'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleCollapsed() {
      dispatch(actionCreate.togAct())
    },
    cli() {
      dispatch(actionCreate.layerDele())
      // EventManager.dispatchEvent(AppEvent.CLI_DELE, {deckLayers})
    },
    toggle() {
      dispatch(actionCreate.togEyeAct())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavLeft)