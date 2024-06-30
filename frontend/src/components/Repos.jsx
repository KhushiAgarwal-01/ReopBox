import React from 'react'
import Repo from './Repo'

function Repos() {
  return (
    <div className={`lg:w-2/3 w-full bg-glass rounded-lg px-8 py-6`}>
    <ol className='relative border-s border-blue-200'>
      <Repo />
    
    </ol>
  </div>
  )
}

export default Repos
