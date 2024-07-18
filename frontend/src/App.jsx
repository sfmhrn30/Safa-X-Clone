import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/home/HomePage.jsx';
import LoginPage from './pages/auth/login/LoginPage.jsx';
import SignUpPage from './pages/auth/signup/SignUpPage.jsx';
import Sidebar from './components/common/Sidebar';
import RightPanel from 'c:/Users/safam/Desktop/Twitter Clone/frontend/src/components/common/RightPanel';
import NotificationPage from './pages/notification/NotificationPage.jsx';
import ProfilePage from './pages/profile/ProfilePage';



function App() {
  return (
    <div className='flex max-w-6xl mx-auto'>
      {/* { commoon cmponent because its not wrapped with routes} */}
      <Sidebar/> 
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/login' element={<LoginPage />} />
        <Route path='/notifications' element={<NotificationPage />}/>
        <Route path='/profile/:username' element={<ProfilePage />}/>
			</Routes>
      <RightPanel />
		</div>
  );
}

export default App
