import React, { useEffect, useState } from 'react'

import Listing from './Listing'
import Form from './Form'


function Contacts() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (

    <div>

      <Listing contacts={contacts} />
      <br />
      <Form addContacts={setContacts} contacts={contacts} />

    </div>
  );
}

export default Contacts