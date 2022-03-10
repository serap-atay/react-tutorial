import React from 'react'
import UserAddress from './UserAddress'
//bir component ayağa kalkarken parametre alabilir.
//parent componentten child componente veri bırakabiliyoruz.
function UserDetail(props) {

  const { money, surname, name, color } = props;

  return (
      <div style={{ backgroundColor: color }}>
          {/* <h1>{props.name}</h1>
          <h1>{props.surname}</h1>
          <h1>{props.money}</h1> */}
          <h1>{name}</h1>
          <h1>{surname}</h1>
          <h1>{money}</h1>

          <UserAddress address={props.userAdress}></UserAddress>
      </div>
  )
}

export default UserDetail