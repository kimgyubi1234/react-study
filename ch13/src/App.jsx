import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

import Modal from 'react-modal';
import { useInput } from './hooks/inputs';
Modal.setAppElement("#root");

function EditModal({isOpen, onClose, users, setUsers, editUserId}) {
  const {inputValues, isValid, handleInputOnChange} = useInput({initValue: users.find.initValue.initUser})


  const handleOkOnClick = () => {
    setUsers(users.map(user => {
      if (user.id === editUserId) {
        return inputValues;
      }
      return user;
    }))
    onClose();
  }


  const handleRegisterOnClick = () => {
    currentId.current += 1;

    const newUser = {
      ...inputValues,
      id: currentId.currnet,
    }

    setUsers([...users, newUser]);
    setInputValues(initUsers);
  }

  const handleDelteOnClick = (e) => {
    const userId = parseInt(e.target.value);
    console.log(typeof userId);
    console.log(typeof users[0].id);
    setUsers(users.filter(user => user.id !== userId));
  }

  const thAndTdStyle = (width="70px") => ({ //width="70px" <- 매개변수 기본값
    padding : "0px 10px",
    width,
    height: "30px",
    border: "1px solid #dbdbdb",
    textAligne: "center",
  })

  return (
    <div>
      
      <div>
        <button disabled={!isValid} onClick={handleRegisterOnClick}>등록</button>
      </div>
      <table style={{boxSizing: 'border-box', border: '1px solid #dbdbdb', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th style={thAndTdStyle()}>ID</th>
            <th style={thAndTdStyle("140px")}>USERNAME</th>
            <th style={thAndTdStyle("240px")}>E-MAIL</th>
            <th style={thAndTdStyle()}></th>
            <th style={thAndTdStyle()}></th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={thAndTdStyle()}>{user.id}</td>
              <td style={thAndTdStyle("140px")}>{user.username}</td>
              <td style={thAndTdStyle("240px")}>{user.email}</td>
              <td style={thAndTdStyle()}>{<button value={user.id} onClick={handleEditOnClick}>수정</button>}</td>
              <td style={thAndTdStyle()}>{<button value={user.id} onClick={handleDelteOnClick}>삭제</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {modal}
    </div>
  )
}

export default App
