import React from 'react';

import './Toolbar.css';
import SideDrawerToggleButton from '../SideDrawer/SideDrawerToggleButton';


const toolbar = (props) => (
    <header className='toolbar'>
        <nav className='toolbar_nav'>
            <div className='toggleButton'>
                <SideDrawerToggleButton drawerToggle={props.drawerToggle}/>
            </div>
            <div className='toolbar_logo'><a href="/">The Logo</a></div>
            <div className='spacer'></div>
            <div className='toolbar_items'>
                <ul>
                    <li><a href='/'>Stuff 1</a></li>
                    <li><a href='/'>Stuff 2</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;