import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div> <MDBNavbar light bgColor='primary'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        <img
          src='https://c.tenor.com/4s8RxnXHt-4AAAAj/icon-cute.gif'
          height='50'
          alt=''
          loading='lazy'
        />
        MessageApp
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header