import { useState } from 'react'
import  * as s  from './styles';

function App() {

  return (
    <> 
    <div css = {s.card}>
      <div css = {s.inputbox}>
        <input type="text" id='username' name='username' />
      </div>
      <div css = {s.inputbox}>
        <input type="text" id='password' name='password' />
      </div>
      <div css={s.bottonbox}>
        <button>사용자 정보 등록</button>
      </div>
    </div>
    </>
  )
}

export default App
