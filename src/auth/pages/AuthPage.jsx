import React from 'react'
import { useForm } from '../../hooks/useForm'
import { checkingAutenticate, logingUsetWithEmailPassword } from '../../store/slices/auth/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

export default function AuthPage() {

  const navigate=useNavigate()
  const {status,IdArea}=useSelector((state)=>state.auth)
  const { user, password, onInputChange } = useForm({ user: 'CVERA', password: 'CVERA' })
  const dispatch=useDispatch()

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(logingUsetWithEmailPassword(user, password))
  }

  useEffect(() => {
    if(status==='authenticated'){
      switch (IdArea) {
        case 1:
          navigate('/administracion')
          break;
        case 2:
          navigate('/ventas')
          break;
        case 3:
          navigate('/report')
          break;
      
        default:
          break;
      }
    }
  
  }, [status,navigate])
  




  return (
    <div>
      <h2>
        AuthPage
      </h2>

      <form>
        <input onChange={onInputChange} name='user' value={user} type="text" placeholder='usuario' />
        <input onChange={onInputChange} name='password' value={password} type="text" placeholder='password' />
        <button type="button" onClick={onSubmit}>Ingresar</button>
      </form>

    </div>
  )
}
