import React,{useState} from 'react';
import Form from './Form'
import Table from './Table'
import './App.css';
const App = () => {
  
  const usersData = [
    { id: 1, username: 'Tania', email: 'flop@gmail.com', role: 'customer' },
    { id: 2, username: 'Max', email: 'max@ya.ru', role: 'editor' },
  ]


  const [users, setUsers] = useState(usersData) //Добавляем хук

  const addUser = user => {
    user.id = users.length + 1

    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="container">
      
      <div className="flex-row">
        <div className="flex-large">
      
          <Form addUsers={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          
          <Table users={users} deleteUser={deleteUser} />
          
        </div>
      </div>
    </div>
  )
}

export default App;
