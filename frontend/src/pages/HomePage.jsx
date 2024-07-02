import React, { useCallback, useEffect, useState } from 'react'
import Search from '../components/Search'
import ProfileInfo from '../components/ProfileInfo'
import Repos from '../components/Repos'
import SortRepos from '../components/SortRepos'
import Spinner from '../components/Spinner'
import toast from 'react-hot-toast'

function HomePage() {
  

  const[userProfile,setUserProfile]=useState(null);
  const[repos,setRepos]=useState([]);
  const[loading,setLoading]=useState(false);

  const[sort,setSort]=useState('recent');

  const getUserAndRepo=useCallback( async(username="KhushiAgarwal-01")=>{
    setLoading(true);
    try{
    const res= await fetch(`https://api.github.com/users/${username}`,{
      headers:{
        authorization:token `${import.meta.env.VITE_GITHUB_API_KEY}`
      }
    })
    
   
    
    const userProfile=await res.json();
    setUserProfile(userProfile);

    const res2=await fetch(userProfile.repos_url)
 
    const repos=await res2.json();
    repos.sort((a,b)=>new Date(b.created_at)-new Date(a.created_at))
    setRepos(repos);

    console.log('user',userProfile);
    console.log('reposs',repos);
    setLoading(false);
     return{userProfile, repos}
    }
    catch(error){
      // console.log("erererx",error);
      toast.error(error.message);
      setLoading(false);
    }

  },[]);

  useEffect(()=>{
  
    getUserAndRepo();
  },[getUserAndRepo])


  const onSearch=async(e,username)=>{
    e.preventDefault();
    setLoading(true);
    setRepos([]);
    setUserProfile(null);
    const {userProfile,repos}=await getUserAndRepo(username);

    setUserProfile(userProfile);
    setRepos(repos);
    setLoading(false);
    setSort('recent');
  }


  const onSort=(sort)=>{
    if(sort==='recent'){
      repos.sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));//latest first

    }
    else if(sort==='fork'){
      repos.sort((a,b)=>b.forks_count-a.forks_count);//more first

    }
    else if(sort==='stars'){
      repos.sort((a,b)=>b.stargazers_count-a.stargazers_count);//more first

   
    }
    setSort(sort);
    setRepos([...repos])
  }

  return (
    <div className='m-4'>
      <Search onSearch={onSearch}/>
    
      <SortRepos onSort={onSort} sort={sort}/>
      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
        {userProfile && !loading && <ProfileInfo userProfile={userProfile}/> } 
        {  !loading &&  <Repos repos={repos} />}
         {loading && <Spinner/>}

         
      </div>
   
      
    </div>
  )
}

export default HomePage
