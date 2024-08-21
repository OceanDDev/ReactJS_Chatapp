import { Col, Row } from 'antd'
import React from 'react'
import UserInfo from './UserInfo'
import Roomlist from './Roomlist'
import styled from 'styled-components'

const SidebarStyled = styled.div`
background: #3f0e40;
color: white;
height: 100vh;

`
const Sidebar = () => {
  return (
    <SidebarStyled>
    <Row>
        <Col span={24}> <UserInfo/> </Col>
        <Col span={24}> <Roomlist/> </Col>

    </Row>
    </SidebarStyled>
  )
}

export default Sidebar
