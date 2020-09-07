import React from 'react'


const Table = props => {

  const handleDeleteUser = id => {
    // не забываем спросить пользователя,
    // действительно ли он хочет удалить запись
    let answer = window.confirm('Are you sure?')

    if (answer) {
      props.deleteUser(id)
    }
  }
  return(
  <table>
    <thead>
      <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <button className="button muted-button"  onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
  )
}

export default Table
