function UserRegister({users, setUsers}) {

    return<>
        <div>
            <input type="text" name='username' value={inputValues.username} onChange={handleInputOnChange} placeholder='계정명'/>
            <input type="text" name='email' value={inputValues.email} onChange={handleInputOnChange} placeholder='이메일'/>
        </div>
    </>
}
export default UserRegister