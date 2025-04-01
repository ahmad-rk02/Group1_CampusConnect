import React from 'react'

function DropDownMech() {
  return (
    <div>
      <div className='dropdown-Mech'>
           <ul style={{listStyleType: 'none'}} className='dropdown-Mech-text'>
            <li><a href='#vission-mission-mech'>Vision & Mission</a></li>
            <li><a href='#laboratories-mech'>Laboratories</a></li>
            {/* <li><a href='#code-unnati-cse'>Code Unnati</a></li>
            <li><a href='#cmt-club-cse'>Committees and Clubs</a></li> */}
            <li><a href='#faculty-mech'>Faculty Details</a></li>
           </ul>
      </div>
    </div>
  )
}

export default DropDownMech
