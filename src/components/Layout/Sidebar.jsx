
import { Link } from 'react-router'
import { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from "react-icons/md";
import * as RiIcons from 'react-icons/ri'
import * as HiIcons from "react-icons/hi";
// import { BiLineChart } from "react-icons/bi"; reprot analsiis


const sideBarData = [
  {
    title: 'Administracion',
    path: '/administracion',
    icon: <MdIcons.MdSupervisorAccount />,
    iconClosed: <RiIcons.RiArrowDownBoxFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'facturacion',
        path: '/administracion/facturacion',
        icon: <MdIcons.MdSell />,
      }
    ]
  },
  {
    title: 'Ventas',
    path: '/ventas',
    icon: <FaIcons.FaShoppingCart />,
    iconClosed: <RiIcons.RiArrowDownBoxFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Clients',
        path: '/ventas/clientes',
        icon: <FaIcons.FaShoppingCart />,
      }
    ]

  },
  {
    title: 'Reports',
    path: '/report',
    icon: <HiIcons.HiDocumentReport />,
    iconClosed: <RiIcons.RiArrowDownBoxFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Cuentas por Cobrar',
        path: '/report/cxc',
        icon: <FaIcons.FaShoppingCart />,
      }
    ]
  },

]



export default function Sidebar() {

  const [sidebar, setSidebar] = useState(false)
  const showSideBar = () => setSidebar(!sidebar)

  return (
    <div className="sidebar">
      <Link className='navicon' to='#' onClick={showSideBar}>
        <FaIcons.FaBars />
      </Link>
      <div className="sidebarnav" style={{ left: sidebar ? '0' : '-100%' }} >
        <div className="sidebarwrap">
          <Link className='navicon'>
            <AiIcons.AiOutlineClose onClick={showSideBar} />
          </Link>
          {
            sideBarData.map((item, index) => {
              return <SubMenu item={item} key={index} />
            })
          }
        </div>
      </div>
    </div>
  )
}


const SubMenu = ({ item }) => {
  const [subNav, setSubNav] = useState(false)
  const showSubNav = () => setSubNav(!subNav)
  return (
    <>
      <div className='sidebarlink' to={item.path} onClick={item.subNav && showSubNav}>
        {item.icon}
        <div className="sidebarlabel">
          {item.title}
        </div>
        <div className="">
          {
            item.subNav && subNav
              ? item.iconOpen
              : item.subNav
                ? item.iconClosed
                : null
          }
        </div>
      </div >
      {
        subNav && item.subNav.map((item, index) => {
          return (
            <Link className='dropdown' to={item.path} key={index}>
              {item.icon}
              <div className="sidebarlabel">
                {item.title}
              </div>
            </Link>
          )
        })
      }
    </>
  )
}
