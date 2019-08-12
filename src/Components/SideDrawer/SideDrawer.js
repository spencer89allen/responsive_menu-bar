import React from 'react';

import './sideDrawer.css';


const SideDrawer = (props) => {

    let drawerClasses = 'sideDrawer';
    if(props.display) {
        drawerClasses = 'sideDrawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href='/'>Stuff 1</a></li>
                <li><a href='/'>Stuff 2</a></li>
            </ul>
        </nav>
    )
};

export default SideDrawer;