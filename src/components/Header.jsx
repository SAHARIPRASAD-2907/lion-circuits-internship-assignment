import React, { Fragment,useContext } from 'react'
import { UserContext } from '../hooks/user.context';
import { Outlet,Link, useNavigate } from 'react-router-dom'
import "./header.scss"

function Header() {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const eventLogout = ()=>{
      setCurrentUser(null)
      navigate("/")
  }
  return (
    <Fragment>
          <div className='navigation'>
        <Link className='logo-container' to='/'>
          Home 
        </Link>
        <div className='nav-links-container'>
          <div className='nav-link' onClick={eventLogout}>
            Logout
          </div>
          <Link className='nav-link' to='/profile'>
            <img className='logo' src='https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png' alt='my profile' />
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Header