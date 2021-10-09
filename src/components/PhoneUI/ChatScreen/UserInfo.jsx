import {auth} from '../../../utilities/firebase'
import { IoExit, IoLogOut, IoPersonRemove, IoRemove } from 'react-icons/io5'

export default function (props) {
  return (
    <div className="user_info">
      <img src={props.avatar} />
      <span>{props.username}</span>
      <button onClick={() => auth.signOut()} title="Logout"><IoPersonRemove /></button>
    </div>
  )
}