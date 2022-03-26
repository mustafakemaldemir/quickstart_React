import React, {useState,useEffect} from 'react'

function Listing({ contacts }) {

  const [searchContact, setsearchContacts] = useState("");

  const searchConts = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
    item[key].toString().toLowerCase().includes(searchContact.toLocaleLowerCase()));
  });

  return (
    <div>
      <br/>
      <input placeholder='Search' value={searchContact} onChange={(event) => setsearchContacts(event.target.value)}/>
      <ul>
        {
          searchConts.map((contact, index) =>
            <li key={index}>
              {index} {contact.cname} {contact.csurname} {contact.cemail} {contact.cpassword} {contact.cphone}
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Listing