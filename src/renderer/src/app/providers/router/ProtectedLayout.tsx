import { tokenInstance } from '@renderer/shared/utils'
import { Layout } from '@renderer/widgets/layout'
import { Navigate } from 'react-router-dom'

const ProtectedLayout = () => {
  const token = tokenInstance.getToken()
  console.log('token:', token)

  return !token ? <Navigate to={'/signin'} replace /> : <Layout />
}

export default ProtectedLayout
