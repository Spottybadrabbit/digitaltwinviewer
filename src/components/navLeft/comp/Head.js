import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Popover} from 'antd';
import {
    HeaderWrapper,
    Logo,
    NavItem
} from '../style.js';

class Head extends Component {
    iconShow = () => {
        const {headIcon} = this.props
        const iconData = headIcon.toJS()
        return (
            iconData.map((item, index) => {
                return(<Popover content={item.popover} key={index}>
                <NavItem className='right' >
                    <a href={item.href} target='_blank'>
                        <i className='iconfont' dangerouslySetInnerHTML={{__html: item.iconfont}}></i>
                    </a>
                </NavItem>
            </Popover>)
            })
        )
    }
    
    render() {
        return <Fragment>
                <HeaderWrapper>
                    
                        <NavItem>
                            <Logo className='l-h3 left'>1.1.10</Logo>
                        </NavItem>
                        {/* {console.log(this.iconShow())} */}
                        {this.iconShow()}
                        
                </HeaderWrapper>
            </Fragment>
    }
}
const mapStateToProps = (state) => {
    return {
        headIcon: state.getIn(['navLeft', 'headIcon'])
    }
}
export default connect(mapStateToProps, null)(Head)