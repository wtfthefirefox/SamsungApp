import React from 'react';
import styled from 'styled-components/native';
import { Link } from 'react-router-native';
import icons from '../../assets/svg/icons';

const ReturnBtn = () => {
  return (
    <Wrap>
      <Link to="/">
        <icons.ArrowReturn />
      </Link>
    </Wrap>
  )
}

const Wrap = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export default ReturnBtn;