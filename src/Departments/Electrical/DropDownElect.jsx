import React from 'react'

function DropDownElect() {
  return (
    <div>
      <div className='dropdown-Elec'>
           <ul style={{listStyleType: 'none'}} className='dropdown-Elec-text'>
            <li><a href='#vission-mission-elect'>Vision & Mission</a></li>
            <li><a href='#laboratories-elect'>Laboratories</a></li>
            {/* <li><a href='#code-unnati-cse'>Code Unnati</a></li>
            <li><a href='#cmt-club-cse'>Committees and Clubs</a></li> */}
            <li><a href='#faculty-elect'>Faculty Details</a></li>
           </ul>
      </div>
    </div>
  )
}

export default DropDownElect
