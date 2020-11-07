import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';

import icons from '../../assets/svg/icons';

const Header = () => {
    const [isVisibleMenu, turnMenu] = useState(false);
    
    if (isVisibleMenu) {
        return (
            <>  
                <Wrapper>
                    <TouchableWithoutFeedback onPress={() => turnMenu(!isVisibleMenu)} style={{marginBottom: 0}}>
                        <icons.ArrowUp />
                    </TouchableWithoutFeedback>
                </Wrapper>
                <MenuWrapper>
                    <MenuItem>
                        <Link to="/">
                            <MenuItemValue>Main Page</MenuItemValue>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemValue>About us</MenuItemValue>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemValue>Catalog</MenuItemValue>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemValue>News</MenuItemValue>
                    </MenuItem>
                </MenuWrapper>
            </>
        )
    }

    return (
        <Wrapper marginBottom>
            <TouchableWithoutFeedback onPress={() => turnMenu(!isVisibleMenu)}>
                <icons.BurgerMenu />
            </TouchableWithoutFeedback>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    ${props => props.marginBottom ? 'margin-bottom: 40px;': ''}
`;

const MenuWrapper = styled.View`
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 40px;
`;

const MenuItem = styled.View`
    width: 100%;
    height: 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #e6e6e6;
`;

const MenuItemValue = styled.Text`
    font-size: 20px;
    line-height: 23px;
    color: #000000;
`;

export default Header;