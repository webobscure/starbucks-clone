import {useDispatch} from 'react-redux';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Form} from './Form';
import {setUser} from '../../server/store/slices/userSlice'
import { Link } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <div>
            <Form
            title="Login"
            handleClick={handleLogin}
        />
            <div className='check'>
                Don't have an account?{' '}
                <label htmlFor="flip">
                  {' '}
                  <Link to="/signup"> Sign up Now</Link>
                </label>
              </div>
        </div>
        
        
    )
}

export {Login}