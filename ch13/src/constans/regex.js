import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

import Modal from 'react-modal';
Modal.setAppElement("#root");

function EditModal({isOpen, onClose, users, setUsers, editUserId}) {
  const [inputValues, setInputValues] = useState(users.find())
  
  return <Modal isOpen={isOpen} onRequestClose={isClose}>
    <div>

    </div>
  </Modal>
}

function App() {
  const initUser = {
    id: "",
    username: "",
    email: "",
  }
  const [ inputValues, setInputValues ] = useState(initUser);
  const [ users, setUsers ] = useState([]);
  const currentId = useRef(0);
  const [ isValid, setValid ] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(<></>);
  const REGEX = {
  }

  useEffect(() => {
    const entries = Object.entries(inputValues) 
    const validList = Object.entries(inputValues).filter(([key, value]) => {//entries가 밸류 [0,1] 0은 key, 1은 values
      const regex = REGEX[key];
      if (!regex) return true;
      return regex.test(value);
    });

    setValid(validList.length === entries.length);

  }, [inputValues]);

  const handleEditOnClick = (e) => {
    setModalOpen(true);
  }

  const handleModalOnClose = () => {
    setModalOpen(false);
  }

  const handleInputOnChange = (e) => {
    const {name, value} = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    })
  }

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
      <input type="text" name='username' value={inputValues.username} onChange={handleInputOnChange} placeholder='계정명'/>
      <input type="text" name='email' value={inputValues.email} onChange={handleInputOnChange} placeholder='이메일'/>
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