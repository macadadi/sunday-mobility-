import mobility_image from './mobility_image.jpg'
import { Link} from "react-router-dom";

function UsersList() {
    const users = JSON.parse(localStorage.getItem('users'))
  
    return (
        <div className="col-md-6 m-auto ">
        <div  className="register-form ">
            <div className="mt-4 ">
                <h3>Welcome to Sunday Mobility</h3>
            </div>
        <div  className="mt-4 pt-4 form-div" >
      
                    <div>
                    <div><h5>Below is Email list of registered users</h5></div>
                        <ul>
                        {users && users.map((user,index)=><li>{user.email}</li>)}
                        </ul>
                    </div>
         </div>
         <div>
             <p><Link to="/">Create another account</Link> or <Link to="/login">Log out</Link></p>
         </div>
        </div>
         </div>
    )
}

export default UsersList


   
