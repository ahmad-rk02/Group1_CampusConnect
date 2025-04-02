import React from 'react'

function DropDownEntc() {
  return (
    <div>
      <div className='dropdown-Entc'>
           <ul style={{listStyleType: 'none'}} className='dropdown-Entc-text'>
            <li><a href='#vission-mission-entc'>Vision & Mission</a></li>
            <li><a href='#laboratories-cse'>Laboratories</a></li>
            <li><a href='#faculty-cse'>Faculty Details</a></li>
            {/* <li><a href='#cmt-club-cse'>Committees and Clubs</a></li> */}
           </ul>
      </div>
    </div>
  )
}

export default DropDownEntc
