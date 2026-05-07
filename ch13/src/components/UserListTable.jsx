function UserListTable() {
    return<>


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
      {modalOpen && editModal}
    </>
}

export default UserListTable