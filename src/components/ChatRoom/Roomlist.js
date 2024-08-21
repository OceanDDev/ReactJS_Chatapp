import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';


const PanelStyled = styled.div`
  &&& { 
    .ant-collapse-header, p { 
      color: white;
    }
    .ant-collapse-content-box { 
      padding: 0 40px;
    }
    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

const Roomlist = () => {
  return (
    <Collapse ghost defaultActiveKey={['1']} items={[
      {
        key: '1',
        header: 'Danh sách các phòng',
        children: (
          <PanelStyled>
            <LinkStyled>Room 1</LinkStyled>
            <LinkStyled>Room 2</LinkStyled>
            <LinkStyled>Room 3</LinkStyled>
            <Button type='text' icon={<PlusSquareOutlined />} className='add-room'>Thêm Phòng</Button>
          </PanelStyled>
        )
      }
    ]} />
  );
};

export default Roomlist;
