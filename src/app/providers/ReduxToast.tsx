import React, { FC } from 'react'
import ReduxToastr from 'react-redux-toastr'

const ReduxToast: FC = () => {
  return (
    <ReduxToastr
        newestOnTop={false}
        preventDuplicates
        progressBar
        closeOnToastrClick
    />
  )
}

export default ReduxToast