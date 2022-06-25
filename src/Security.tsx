import { Navigate } from 'react-router-dom'

function Security(item:{component:JSX.Element}) {
    const control = () =>{
      const stdata =  sessionStorage.getItem("user")
      if (stdata) {
        return stdata
      }
      return null
    }
    const user= control()
  return (
    user===null
    ?
    <Navigate to='/'></Navigate>
    :
    item.component
  )
}

export default Security