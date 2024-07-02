import React from 'react'
import Repo from './Repo'
import { PiCloudSlash } from 'react-icons/pi'

function Repos({repos ,alwaysfullwidth=false}) {
  const className=alwaysfullwidth?"w-full" :"lg:w-2/3 w-full "
  return (
    <div className={`${className} bg-glass rounded-lg px-8 py-6`}>
    <ol className='relative border-s border-blue-200'>
    
    {repos?.length===0 && <p className='flex items-center justify-center h-32 '>Oops! No Repo Found</p>}

 
   {  repos?.map((repo)=>{
      return <Repo key={repo.id} repo={repo} />
     })
    }
    </ol>
  </div>
  )
}

export default Repos
