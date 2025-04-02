import React from 'react'

function DropDownInstru() {
  return (
    <div>
      <div className='dropdown-instru'>
           <ul style={{listStyleType: 'none'}} className='dropdown-instru-text'>
            <li><a href='#vission-mission-instru'>Vision & Mission</a></li>
            <li><a href='#laboratories-instru'>Laboratories</a></li>
            {/* <li><a href='#code-unnati-cse'>Code Unnati</a></li>
            <li><a href='#cmt-club-cse'>Committees and Clubs</a></li> */}
            <li><a href='#faculty-instru'>Faculty Details</a></li>
           </ul>
      </div>
    </div>
  )
}

export default DropDownInstru
