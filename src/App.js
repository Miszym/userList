import React, { useState, useEffect } from 'react';
import './css/App.css';
import Header from './components/Header';
import SearchBar from './components/Searchbar';
import UserList from './components/UserList';

const App = () => {
   const API_ULR = 'https://jsonplaceholder.typicode.com/users';
   const [userData, setUserData] = useState([]);
   const [displayData, setDisplayData] = useState();
   const [placeholder, setPlaceholder] = useState('Loading...');
   const [filterValue, setFilterValue] = useState('');

   useEffect(() => {
      fetch(API_ULR)
         .then(res => res.json())
         .then(data => {
            const filteredData = data.map(user => ({
               id: user.id,
               name: user.name,
               username: user.username
            }));
            setUserData(filteredData);
            setPlaceholder('');
         })
         .catch(error => {
            console.error('Error:', error);
            setPlaceholder('Could not fetch data');
         });
   }, []);

   useEffect(() => {
      setDisplayData(
         userData.filter(user =>
            user.name.toLowerCase().includes(filterValue.toLowerCase())
         )
      );
   }, [filterValue, userData]);

   return (
      <div className="user-list">
         <Header headerText="Users list"></Header>
         <SearchBar setFilterValue={setFilterValue} />
         {placeholder === '' ? (
            <UserList userData={displayData}></UserList>
         ) : (
            placeholder
         )}
      </div>
   );
};

export default App;
