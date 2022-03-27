import React, { useState, useEffect } from 'react'

const default_contacts = { cname: "", csurname: "", cemail: "", cphone: "" };

function Form({ addContacts, contacts }) {

    const [form, setForm] = useState(default_contacts);

    useEffect(() => {

        setForm(default_contacts)

    }, [contacts]);

    const onChangeInput = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {

        e.preventDefault(); //sayfa yenilemeden durumu görmek için

        //console.log(form);

        if (form.cname === "" || form.csurname === "" || form.cemail === "" || form.cphone === "") {

            return false;
        }

        addContacts([...contacts, form]);

    };

    return (

        <form onSubmit={onSubmit}>

            <h2 style={{color:'white'}}>Add Contacts</h2>

            <div>
                <input type="text" name="cname" placeholder='Name' value={form.cname} onChange={onChangeInput} />
            </div>

            <div>
                <br />
                <input type="text" name="csurname" placeholder='Surname' value={form.csurname} onChange={onChangeInput} />
            </div>

            <div>
                <br />
                <input type="email" name="cemail" placeholder='E-mail Address' value={form.cemail} onChange={onChangeInput} />
            </div>

            <div>
                <br />
                <input type="text" name="cphone" placeholder='Phone Number' value={form.cphone} onChange={onChangeInput} />
            </div>

            <div>
                <br />
                <button name="register_button">Register</button>
            </div>

        </form>
    );
}

export default Form