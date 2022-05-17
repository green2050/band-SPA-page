import { NavLink, Outlet} from 'react-router-dom';
import React from 'react'

export default function LedZeppelin() {
  return (
    <div>
          <nav className='nav' style={{fontSize:"larger"}}>
              <NavLink to="vocals" className={'links'} >Vocals</NavLink> | {" "}
              <NavLink to="guitar" className={'links'}>Guitar</NavLink> | {" "}
              <NavLink to="bass" className={'links'}>Bass</NavLink> | {" "}
              <NavLink to="drums" className={'links'}>Drums</NavLink> | {" "}
              <NavLink to="*">Not found</NavLink>
          </nav>
          <Outlet />
    </div>
  )
}