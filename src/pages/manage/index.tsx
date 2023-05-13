import React from 'react'
import { NextPageAuth } from '../../app/shared/types/auth.types'
import Admin from '@/components/screens/admin/home/Admin'

const AdminPage: NextPageAuth = () => {
  return <Admin/>
}

AdminPage.isOnlyAdmin = true

export default AdminPage