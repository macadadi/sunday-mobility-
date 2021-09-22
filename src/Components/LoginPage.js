import { Link} from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router-dom";

function LoginPage() {
    const [email,setEmail]= useState('')
    const [password,setPassword] =useState('')
    const [errors,setErrors] = useState(true)
    const users = JSON.parse(localStorage.getItem('users'))

    let history = useHistory()

    const [logIn,setLogIn]= useState(true)

    const isRegistered =(user)=>{
        if(user.email === email && user.password === password){
            return true
        }
        
    }
    const LoginUser =(e)=>{
        e.preventDefault()
        if(password?.length <2 || email?.length <2){
            setErrors(false)
           
            return
        }
        else{
            const user = users.filter(isRegistered)
            if(user.length >= 1){
                setLogIn(true)
                
                history.push('/users')
            }
            else{
                setLogIn(false)
            }
            setErrors(true)
        }
      
    }
  
    return (
        
              
              <div className="col-md-6 m-auto ">
          <div  className="register-form ">
              <div className="mt-4 ">
                  <h3>Welcome Back</h3>
                  <h6>Please Login to your account</h6>
                  {logIn ? "" :  <p className="errorMessage">Password or Email do not match. Try again</p>}
                  {errors ? "" :  <p className="errorMessage">Please provide valid password and email</p>}
              </div>
          <form onSubmit={LoginUser} className="mt-4 pt-4 form-div" >
           <div>
                
                <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
       
            <div>
                
                 <input type="Password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
               <button type='submit'>Login</button>
            </div>
           </form>
           <div>
               <p>Don't have an account ? <Link  to='/'>Register</Link></p>
           </div>
          </div>
           </div>
        
    )
}

export default LoginPage
