import React, {Component} from 'react';

class ListContacts extends Component {
  render() {
    let {contacts} = this.props;
    return (
      <ol className='contact-list'>
        {contacts.map((contact, i) => (
          <li key={i} className='contact-list-item'>
            <div className='contact-avatar' style={{
              backgroundImage: `url(${contact.avatarURL})`
            }}/>
            <div className='contact-details'>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <button className='contact-remove'>Remove</button>
          </li>
        ))}
      </ol>
    )
  }
}

export default ListContacts;