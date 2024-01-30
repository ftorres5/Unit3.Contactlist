import { useEffect, useState } from "react";

export default function SelectedContact ({SelectedContact, selectedContactId}) {
    const [ contact, setContact ] = useState(null);
    useEffect(() => {
     async function fetchUser() {
        try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const result = await response.json();
            setContact = result;
            console.log(setContact);
        } catch (error) {
            console.error(error);
        }

     }
     fetchUser();
    }, []);

    // return (
    //     <tr>
    //         <td>{SelectedContact.name}</td>
    //         <td>{SelectedContact.email}</td>
    //         <td>{SelectedContact.phone}</td>
    //     </tr>
    // )
    
}