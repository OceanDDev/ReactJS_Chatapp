import { UserAddOutlined } from '@ant-design/icons'
import { Form, Input, Button, Avatar, Tooltip } from 'antd';
import React from 'react'
import styled from 'styled-components'
import Message from './Message';

const HeaderStyled = styled.div`
display: flex;
justify-content: space-between;
height: 56px;
padding: 0 16px;
align-items: center;
border-bottom: 1px solid rgb(230,230,230);
 .header_info{ 
    display: flex;
    flex-direction: column;
    justify-content: center ;
 }
 .header_title{
    margin:0    ;
    font-weight: bold;
 }
 .header_decriptiion{
    font-size: 12px;
 }
`
const ButtonGroupStyled = styled.div`
display: flex;
align-items: center;
`
const ContentStyled = styled.div`
height: calc(100% - 65px);
display: flex;
flex-direction: column;
padding: 11px;
justify-content: flex-end;
`
const MessageListStyled = styled.div`
max-height: 100%;
overflow-y: auto;

`
const WrapperStyled = styled.div`
height: 100vh;
`

const FormStyled = styled(Form)`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2px 2px 2px 0;
border: 1px solid rgb(230,230,230);
border-radius: 2px;
 .ant-form-item{ 
    flex :1 ;
    margin-bottom: 0;
 }
`
const ChatWindow = () => {
  return (
    <WrapperStyled>
    <HeaderStyled>
    <div className='header_info'>
        <p className='header_title'>Room 1</p>
        <span className='header_decriptiion'>Day la room 1</span>
    </div>
    <ButtonGroupStyled> 
    <Button icon={<UserAddOutlined></UserAddOutlined>} type='text'>Mời</Button>
    <Avatar.Group size='small' max={{ count: 2 }}>
    <Tooltip title="A">
        <Avatar> A </Avatar>
    </Tooltip>
    <Tooltip title="A">
        <Avatar> B </Avatar>
    </Tooltip>
    <Tooltip title="A">
        <Avatar> C </Avatar>
    </Tooltip>
    <Tooltip title="A">
        <Avatar> D </Avatar>
    </Tooltip>
    </Avatar.Group>
    </ButtonGroupStyled>


    </HeaderStyled>
    <ContentStyled>
    <MessageListStyled>
        <Message text="Test" photoURL={null} displayName="Duong" createAt={121212121}/>
        <Message text="Test532" photoURL={null} displayName="Duong33" createAt={121212121}/>
        <Message text="Test222" photoURL={null} displayName="Duong225" createAt={121212121}/>
        <Message text="Test422" photoURL={null} displayName="Duongfg" createAt={121212121}/>

    </MessageListStyled>
    <FormStyled>
    <Form.Item>
        <Input placeholder='Nhập tin nhắn ...' variant="outlined" autoComplete='off'/>
    </Form.Item>
    <Button type='primary' > Gửi</Button>
        
    </FormStyled>
     </ContentStyled>
</WrapperStyled>

  )
}

export default ChatWindow
