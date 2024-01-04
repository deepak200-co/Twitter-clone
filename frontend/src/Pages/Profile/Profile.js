import React from 'react'
import '../Page.css'
import auth from '../../firebaseinit'
import { useAuthState } from 'react-firebase-hooks/auth'
import MainPage from './MainProfile/MainPage';

const Profile = () => {
    const [ user ] = useAuthState(auth);
    return (
        <div className='profilePage'>
            <MainPage user={user} />
        </div>
    )
}

export default Profile