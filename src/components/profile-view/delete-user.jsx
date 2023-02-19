import { Button, Col } from 'react-bootstrap';

export const DeleteUser = ({ storedToken, storedUser }) => {
  const handleDeregister = () => {
    const userWarning = confirm(`${storedUser.username}, You are about to delete your account. Information is not recoverable. Are you sure?`, )
    
    userWarning === false ? alert('Account has not been deleted')
    : fetch(`https://sbmovieapi.herokuapp.com/users/${storedUser.username}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${storedToken}`,
        'Content-Type': 'application/json',
      }
    }
    ).then((response) => {
      if (response.ok) {
        alert('Account has been deleted');
        localStorage.clear();
        window.location.reload();
      } else {
        alert('Something went wrong')
      }
    }).catch((error) => {
      console.log(error)
    });
  }
    
  return (
    <Col md={5} className='text-center px-4 mt-3'>
      <div>
        <Button
          onClick={() => handleDeregister(storedUser._id)}
          className='button-delete'
          variant='danger'
        >
          Delete Account
        </Button>
      </div>
    </Col>
  )

};