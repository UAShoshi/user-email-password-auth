import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";


const HeroRegister = () => {
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = e => {
    e.preventDefault();
    // console.log('submite');
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, password, accepted);

    // reset error
    setRegisterError('');
    setSuccess('');

    if (password.length < 6) {
      setRegisterError('Password should be at least 6 characters.');
      return;
    }
    else if (!/[A-Z]/.test(password)) {
      setRegisterError('Your password should have at least one upper case characters.')
      return;
    }
    else if (!accepted) {
      setRegisterError('please accept our terms amd condition!')
      return;

    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        setSuccess('user created successfully.')

        // updete profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
        .then(() => console.log('profile updeted'))
        .catch()

        // send verification email
        sendEmailVerification(result.user)
        .then(() =>{
          alert('please chack your email and verify your account')
        })

      })
      .catch(error => {
        console.error(error);
        setRegisterError(error.message);
      })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-texto">Password</span>
              </label>
              <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
              <span onClick={() => setShowPassword(!showPassword)}>
                {
                  showPassword ? <AiTwotoneEyeInvisible className="absolute top-44 left-80"></AiTwotoneEyeInvisible> : <AiTwotoneEye className="absolute top-44 left-80"></AiTwotoneEye>
                }</span>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="mb-2">
            <input type="checkbox" name="terms" id="terms" />
            <lebel className="ml-2" htmlFor="terms">Accespt our <a href="">Teams and conditions</a></lebel>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {
            registerError && <p className="text-red-700">{registerError}</p>
          }
          {
            success && <p className="text-green-600">{success}</p>
          }

          <p>Alreary have an account? please <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;