// App.js
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyHome from './Pages/Home';
import Signup from './Pages/Login/Signup';
import MyLogin from './Pages/Login/Login';
import ProtectedRoute from './Pages/ProtectedRoute';
import PageLoading from './Pages/PageLoading';
import Feeds from './Pages/Feed/Feed'
import Explore from './Pages/Explore/Explore'
import Bookmarks from './Pages/Bookmarks/Bookmarks'
import Notifications from './Pages/Notifications/Notifications';
import Messages from './Pages/Messages/Messages'
import Lists from  './Pages/Lists/Lists'
import Profile from './Pages/Profile/Profile'
import More from './Pages/More/More'
import Feed from './Pages/Feed/Feed';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><MyHome/></ProtectedRoute>} >
            <Route index element={<Feed/> }/> 
          </Route>
          <Route path='/home' element={<ProtectedRoute><MyHome/></ProtectedRoute>} >
            <Route path='feeds' element={<Feeds/>}/>
            <Route path='explore' element={<Explore/>}/>
            <Route path='notifications' element={<Notifications/>}/>
            <Route path='messages' element={<Messages/>}/>
            <Route path='bookmarks' element={<Bookmarks/>}/>
            <Route path='lists' element={<Lists/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='more' element={<More/>}/>

          </Route>

          <Route path='/Login' element={<MyLogin />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/page-loading' element={<PageLoading/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
