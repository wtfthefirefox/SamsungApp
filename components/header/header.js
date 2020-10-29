import React, {useState} from 'react';
import {TouchableWithoutFeedback, Text} from 'react-native';

import icons from '../../assets/svg/icons';

const Header = () => {
    const [isVisibleMenu, turnMenu] = useState(false);
    
    if (isVisibleMenu) {
        return (
            <>
                <TouchableWithoutFeedback onPress={() => turnMenu(!isVisibleMenu)}>
                    <icons.BurgerMenu style={{marginBottom: 45, paddingTop: 15}} />
                </TouchableWithoutFeedback>
                <Text>You've pressed a button</Text>
            </>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => turnMenu(!isVisibleMenu)}>
            <icons.BurgerMenu style={{marginBottom: 45, paddingTop: 15}} />
        </TouchableWithoutFeedback>
    )
}

export default Header;