import {useDispatch} from 'react-redux';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {Form} from './Form';
import {setUser} from '../../server/store/slices/userSlice'
import { Link } from 'react-router-dom';


const Register = () => {
    const dispatch = useDispatch();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
            })
            .catch(console.error)
    }

    return (
       <div>
         <Form
            title="Register"
            handleClick={handleRegister}
        />
        <div className='check'>
                Already have an account?{' '}
                <label htmlFor="flip">
                  {' '}
                  <Link to="/auth"> Sign in Now</Link>
                </label>
              </div>
       </div>
    )
}

export {Register}