import React, { useState, useEffect } from 'react';
import './css/App.css';
import Header from './components/Header';
import UserList from './components/UserList';

const App = () => {
   const API_ULR = 'https://jsonplaceholder.typicode.com/users';
   const [userData, setUserData] = useState();
   const [placeholder, setPlaceholder] = useState('Loading...');

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
         })
         .catch(error => {
            console.error('Error:', error);
            setPlaceholder('Could not fetch data');
         });
   }, []);

   return (
      <div className="user-list">
         <Header headerText="Users List"></Header>
         {userData ? <UserList userData={userData}></UserList> : placeholder}
      </div>
   );
};

export default App;
