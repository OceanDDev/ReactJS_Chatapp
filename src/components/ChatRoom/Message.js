import { Avatar, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'


const WrapperStyled = styled.div`
margin-bottom: 10px;
.author{ 
    margin-left: 5px;
    font-weight: bold;

}
.date{ 
    margin-left: 10px;
    font-size: 11px;
    color: #a7a7a7;
}
.content{ 
    margin-left: 30px;
}
`
const Message = ({text,displayName,createAt,photoURL}) => {
  return (
    <WrapperStyled>
      <div>
        <Avatar size="small " src={photoURL}>
            Avatar
        </Avatar>
        <Typography.Text className='author'>{displayName}</Typography.Text>
        <Typography.Text className='date'>{createAt}</Typography.Text>
        <div>
            <Typography.Text className='content'>{text}</Typography.Text>
        </div>
       
      </div>
    </WrapperStyled>
  )
}

export default Message
