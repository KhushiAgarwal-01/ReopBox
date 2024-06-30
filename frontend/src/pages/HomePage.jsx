import React from 'react'
import Search from '../components/Search'
import ProfileInfo from '../components/ProfileInfo'
import Repos from '../components/Repos'
import SortRepos from '../components/SortRepos'
import Spinner from '../components/Spinner'

function HomePage() {
  return (
    <div className='m-4'>
      <Search />
    
      <SortRepos />
      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
         <ProfileInfo />
         <Repos />
      </div>
   

    </div>
  )
}

export default HomePage
