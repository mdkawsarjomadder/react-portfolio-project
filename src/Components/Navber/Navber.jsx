import React, { useRef, useState } from 'react'
import './Navber.css'
import logoIMG  from '../../assets/logo.svg'
import underlinerImg from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menuImgIconeOp from '../../assets/menu_open.svg'
import menuIconeClose from '../../assets/menu_close.svg'

const Navber = () => {
      const [menu, setMenu] = useState("home")
      const menuRef = useRef();

      const openMenu = () => {
        menuRef.current.style.right = "0";
      }
      const closeMenu = () => {
        menuRef.current.style.right = "-350px";
      }
  return (
    <div id='home' className='navber'>
       <img src={logoIMG} alt="" />
       <img src={menuImgIconeOp} onClick={openMenu} alt="" className='nav-menu-open' />
       <ul ref={menuRef} className="nav-manu">
        <img src={menuIconeClose} onClick={closeMenu} alt="" className="nav-nemu-close" />
            <li> <AnchorLink className='anchor-link' href='#home'><p onClick={()=> setMenu("home")}>Home</p></AnchorLink> {menu==="home"? <img src={underlinerImg} alt=''/>:<></>}</li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#about' ><p onClick={()=> setMenu("about")}>About</p></AnchorLink> {menu==="about"? <img src={underlinerImg} alt=''/>:<></>}</li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#services' ><p onClick={()=> setMenu("services")}>Services</p></AnchorLink>{menu==="services"? <img src={underlinerImg} alt=''/>:<></>}</li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#portfolio' ><p onClick={()=> setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"? <img src={underlinerImg} alt=''/>:<></>}</li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#contact' ><p onClick={()=> setMenu("contact")}>Contact</p> </AnchorLink>  {menu==="contact"? <img src={underlinerImg} alt=''/>:<></>}</li>
       </ul>
       <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connent With Me</AnchorLink> </div>
    </div>
  )
}

export default Navber