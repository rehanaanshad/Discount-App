import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  
function Header() {
  return (
    <div>
         <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn.dribbble.com/users/49803/screenshots/4142128/discount_logo.gif'
              height='50'
             
              alt=''
              loading='lazy'
            />
            Discount Calculator
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
    </div>
  )
}

export default Header