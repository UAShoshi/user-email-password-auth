import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";


const Register = () => {
  const handleRegister = e =>{
    e.preventDefault();
    // console.log('from Submit');
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.error(error);
    })


  }
  return (
    <div>
      <div className="mx-auto md: w-1/2">
      <h1 className="text-3xl mb-8">Please Register</h1>
      <form onSubmit={handleRegister}>
      <input className="mb: 4 w-3/4 py-2 px-4" type="email" name="email" id="" placeholder="Email Address" />
      <br />
      <input className="mb: 4 w-3/4 py-2 px-4" type="password" name="password" id="" placeholder="password" />
      <br />
      <input className="mb: 4 w-3/4 btn bg-secondary text-white" type="submit" value="Register" id="" />
      </form>
      </div>
    </div>
  );
};

export default Register;