import React, { useState } from 'react'
import Card from './Card';
import Menu from './menuApi';
import Navbar from './Navbar';
import "./style.css";


const uniqueList = [...new Set(Menu.map((object) => { return object.category })),"All"]
const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);

    const filterData = (category) => {
        if(category==="All"){
         setMenuData(Menu)
         return
        }
        const updateList = Menu.filter((object) => { return object.category === category })
        setMenuData(updateList)
    }

    return (
        <> 
            <Navbar filterData={filterData} uniqueList={uniqueList}/>
            <Card menuData={menuData}  />
        </>

    )
}

export default Restaurant;
