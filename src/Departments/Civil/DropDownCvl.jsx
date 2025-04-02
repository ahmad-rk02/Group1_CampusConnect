import React from 'react'

function DropDownCvl() {
  return (
    <div>
      <div className='dropdown-cvl'>
           <ul style={{listStyleType: 'none'}} className='dropdown-cvl-text'>
            <li><a href='#vission-mission-cvl'>Vision & Mission</a></li>
            <li><a href='#laboratories-cvl'>Laboratories</a></li>
            {/* <li><a href='#code-unnati-cse'>Code Unnati</a></li>
            <li><a href='#cmt-club-cse'>Committees and Clubs</a></li> */}
            <li><a href='#faculty-cvl'>Faculty Details</a></li>
           </ul>
      </div>
    </div>
  )
}

export default DropDownCvl
