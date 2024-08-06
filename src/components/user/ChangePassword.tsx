import { useState } from "react"
import { changePasswordFetch } from "../../features/actions/accountAction"
import { useAppDispatch } from "../../app/hooks"

interface Props {
  setUpdateAction: (name: string) => void
}

const ChangePassword = ({ setUpdateAction }: Props) => {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword1, setNewPassword1] = useState("")
  const [newPassword2, setNewPassword2] = useState("")
  const dispatch = useAppDispatch()

  function handleClickChangePassword() {
    if (newPassword1 === newPassword2) {
      dispatch(changePasswordFetch({
        oldPassword,
        "newPassword": newPassword1
      }))
    }
    setUpdateAction("Profile")
  }

  function handleClickClear() {
    setOldPassword("")
    setNewPassword1("")
    setNewPassword2("")
  }

  function handleClickBack() {
    setUpdateAction("Profile")
  }

  return (
    <div>
      <label>Old password:
        <input type={"password"} value={oldPassword}
               onChange={e => setOldPassword(e.target.value.trim())} />
      </label>
      <label>New password:
        <input type={"password"} value={newPassword1}
               onChange={e => setNewPassword1(e.target.value.trim())} />
      </label>
      <label>Repeat new password:
        <input type={"password"} value={newPassword2}
               onChange={e => setNewPassword2(e.target.value.trim())} />
      </label>
      <button onClick={handleClickChangePassword}>Change Password</button>
      <button onClick={handleClickClear}>Clear</button>
      <button onClick={handleClickBack}>Back</button>
    </div>
  )
}

export default ChangePassword