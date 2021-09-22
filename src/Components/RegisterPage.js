import { useState } from "react/cjs/react.development"
import { Link} from "react-router-dom"
import { useHistory } from "react-router-dom";


function RegisterPage() {
    const [name,setName] = useState('')
    const [nameError,setNameError]= useState('')

    const [mobile,setMobile] = useState('')
    const [mobileError,setMobileError]=useState('')

    const [email,setEmail]=useState('')
    const[emailError,setEmailError]=useState('')

    const [password,setPassword]=useState('')
    const [passwordError,setPasswordError]=useState('')


    const [errors,setErrors] = useState(false)
    let history = useHistory()
    
    const verifyName = (e)=>{
        setName(e.target.value)
        const re = /^\w+( \w+)*$/
        if(re.test(name) && name?.length > 1){
            setNameError('')
            return true
         }
       else{
        setNameError('Name should contain only letters with spaces between')
          return false
       }
       
    }
    const verifypassword = (e)=>{
         setPassword(e.target.value)
      const  re =  /^(?=.*\d)(?=.*[A-Za-z])(?=.*[!@#$%^&*]).{7,}$/
        if(re.test(password)){
            setPasswordError('')
             return true
        }
        else{
            setPasswordError("Password should be a minimum of 8 character long with atleast a special character and a number ")
         return false
        }
        }
        
        // check that email is valid
     const verifyEmail = (e)=>{
         setEmail(e.target.value)
      const  re =  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        if(re.test(email)){
            setEmailError('')
             return true
        }
        else{
            setEmailError('Please type in a valid email copy pasting might fail')
            return false
        }
        }
//  get mobile number
    const getMobileNumber =(e)=>{
      
        if(e.target.value.length <= 10 ){
            setMobile(e.target.value)
           if(e.target.value.length < 10){
            setMobileError('Mobile number should be 10 digits long')
            return false
           }
           else{
               
            setMobileError()
            return true
           }
   
        }
        else{
            setMobileError()
            return true
        }
    }

    // function to handle registration form
    const HandleRegistrationForm =(e)=>{
        e.preventDefault()

        if(name?.length <2 || email?.length <2 || mobile.length < 2 || password.length <2){
            setErrors(true)
            
            return
        }
        // create a user object
       else{
        const user = {
            name,
            mobile,
            email,
            password,
        }
        // get a list of registered users or return an empty array 
        const users_list = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []

        // create a new list of users
        users_list.push(user)
       

        // store user objcet into local storage
        localStorage.setItem('users',JSON.stringify(users_list))
        setPassword()
        setEmail()
        setName()
        setMobile()
        setErrors(false)
        history.push('/users')
       }
        
    }

    return (
     
             
            <div className="col-md-6 m-auto ">
          <div  className="register-form ">
              <div className="mt-4 ">
                  <h3>Welcome Back</h3>
                  <h6>Please register to create an account</h6>
                  <p className="errorMessage">{errors ? "Please fill in all required fields" : ''}</p>

              </div>
          <form onSubmit={HandleRegistrationForm} className="mt-4 pt-4 form-div" >
           <div>
                
                <input placeholder="User Name" onChange={verifyName}/>
                <p className="errorMessage">{nameError && nameError}</p>
            </div>
            <div>
             
                 <input type="Number" placeholder="Mobile" value={mobile}  onChange={getMobileNumber}/>
                 <p className="errorMessage">{mobileError && mobileError}</p>
            </div>
            <div>
                
                <input placeholder="Email" type="email" onChange={verifyEmail}/>
                <p className="errorMessage">{emailError && emailError}</p>

            </div>
            <div>
                
                 <input type="Password" placeholder="password" onChange={verifypassword}/>
                 <p className="errorMessage">{passwordError && passwordError}</p>
                 
            </div>
            <div>
               <button type='submit'>Register</button>
            </div>
           </form>
           <div>
               <p>Already have an account ? <Link  to='/login'>Login</Link></p>
           </div>
          </div>
           </div>
        
    )
}

export default RegisterPage
