import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={s.listWrapper }>
            {contacts.map((contact) => (<li className={s.contactItem } key={contact.id}>
                <Contact data={contact} onDelete={onDelete} />
            </li>))}
        </ul>
    );
};

export default ContactList;