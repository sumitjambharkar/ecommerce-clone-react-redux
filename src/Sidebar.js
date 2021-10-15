
import React from 'react';
import baner from '../src/banner.jpg';

const Sidebar = () => {
    return (
        <section>
        <div className="mx-24 my-8">
           <img className="banner" src={baner} alt=""/>
        </div>
        </section>
    )
}

export default Sidebar;