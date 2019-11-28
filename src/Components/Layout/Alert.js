import React, {useContext} from 'react'
import AlertContext from '../../Context/Alert/alertContext'


const Alert = () =>{
  const alertContext = useContext(AlertContext)

  const {alert} = alertContext;

  return(
    alert !== null && (
      <div className={'card red lighten-1 center white-text'}>
        <i className='material-icons small inline-icon'>error</i>
        <span className='inline-icon'>{alert.msg}</span>
      </div>
    )
  )
}

export default Alert