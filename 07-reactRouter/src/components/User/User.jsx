import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className="max-w-md mx-auto text-center m-4 bg-gray-700 text-white p-2 rounded">User:{userid}</div>
  )
}

export default User