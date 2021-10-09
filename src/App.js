import './App.css';

import { ButtonGoogle, ButtonPrimary, ButtonTwitter } from './components/Buttons';
import { IoLogoTwitter, IoLogoGoogle } from 'react-icons/io5'

import {
  auth,
  user,
  useAuthState,
  useCollectionData,
  firebase,
  LoginWithTwitter,
  LoginWithGoogle
} from './utilities/firebase'
import PhoneUI from './components/PhoneUI';






function App() {
  return (
    <div className="App">
      <PhoneUI />
    </div>
  )
}

export default App;
