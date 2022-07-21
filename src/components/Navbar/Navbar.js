import React,{useState} from 'react'
import {Menulist} from '../Navbar/Menulist'
import { NavLink } from "react-router-dom";
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [checked,setChecked] = useState(false);


  const menu_listed = Menulist.map(({url,title},index)=>{
    return (
      <li key={index}>
        <NavLink style={({ isActive }) => ({ backgroundColor: isActive ? 'green' : '' })}  to={url}>{title}</NavLink>
      </li>
    )
  })

  const handleClick = () =>{
    setChecked(!checked)
  }
  return (
    <nav>
        <div className='logo'>
              VPN<font>Lab</font>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={checked ? "fa fa-times": "fas fa-bars" }></i>
   
        </div>
        <ul className={checked ?'menu_list':'menu_list close'}>
        {menu_listed}
        </ul>
    </nav>
  )
}

export default Navbar