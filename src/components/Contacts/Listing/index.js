import React, { useState, useEffect } from 'react'

function Listing({ contacts }) {

  const [searchContact, setsearchContacts] = useState("");

  const searchConts = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(searchContact.toLocaleLowerCase()));
  });

  return (
    <div>
      <br />
      <input placeholder='Search' value={searchContact} onChange={(event) => setsearchContacts(event.target.value)} />
      <ul>
        {
          searchConts.map((contact, index) =>
            <li key={index} style={{color:'white'}}>
              <span> {contact.cname} {contact.csurname} {contact.cemail} {contact.cpassword} {contact.cphone} </span>
            </li>
          )
        }
      </ul>
      <h3 style={{color:'white'}}>Total Contacts : {searchConts.length} </h3>
    </div>
  )
}

export default Listing