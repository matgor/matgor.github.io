import React, {Component} from 'react'

import AddContactForm from "./AddContactForm";
import ContactsList from "./ContactsList";

class ViewContactList extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                phoneNumber: "123-456-789",
                email: "deadman@true.com",
                categories:
                    [
                        "work",
                        "friend",
                        "mechanic"
                    ]
            },
            {
                id: 2,
                name: "Adam Smith",
                phoneNumber: "124-235-123",
                email: "economist@agency.com",
                categories:
                    [
                        "family",
                        "brother"
                    ]
            },
            {
                id: 3,
                name: "Jennifer Ames",
                phoneNumber: "124-353-467",
                email: "amish@example.com",
                categories:
                    [
                        "family",
                        "sister"
                    ]
            },
        ]
    };

    addContact = ({ contactName, contactPhoneNumber, contactEmail, contactCategories }) => {
        this.setState({
            contacts: this.state.contacts.concat({
                id: Date.now().toString(32),
                name: contactName,
                phoneNumber: contactPhoneNumber,
                email: contactEmail,
                categories: contactCategories.split(',').map(contact => contact.trim())
            })
        })
    };

    removeContact = contactId => {
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.id !== contactId)
        })
    };

    render() {
        return (
            <React.Fragment>
                <h1>Contact list</h1>
                <h2>Add contact:</h2>
                <AddContactForm addContact={this.addContact}/>
                <h2>Contacts:</h2>
                <ContactsList contacts={this.state.contacts} removeContact={this.removeContact}/>
            </React.Fragment>
        )
    }
}

export default ViewContactList