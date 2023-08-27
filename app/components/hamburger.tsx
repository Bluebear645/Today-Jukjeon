'use client';
import { slide as Menu } from 'react-burger-menu';
import React from 'react';

class Example extends React.Component {
    showSettings(event: any) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu>
                <a id='home' className='menu-item' href='/'>
                    홈
                </a>
                <a id='about' className='menu-item' href='/credit'>
                    정보
                </a>
            </Menu>
        );
    }
}

export default Example;
