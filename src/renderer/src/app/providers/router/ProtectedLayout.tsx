import { tokenInstance } from '@renderer/shared/utils'
import { Layout } from '@renderer/widgets/layout'
import { Navigate } from 'react-router-dom'

const ProtectedLayout = () => {
  const { getToken } = tokenInstance

  return getToken() ? <Layout /> : <Navigate to={'/signin'} replace />
}

export default ProtectedLayout
