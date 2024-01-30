import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact';
import { useState } from 'react';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    
    <>
      {selectedContactId ? (
        <SelectedContact/>
      ) : (
        <ContactList />
      )}
    </>
  );
}

export default App
