import React, { useState } from 'react'
import Spinner from '../components/Spinner';
import Repos from '../components/Repos';

function ExplorePage() {

	const[loading,setLoading]=useState(false);
	const[repos,setRepos]=useState([]);
	const[selectedLanguage,setSelectedLanguage]=useState('')

	const exploreRepos=async(language)=>{
		setLoading(true);
		setRepos([]);
		setSelectedLanguage(language)
		try{
			const response=await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,{
				headers:{
					authorization:`token ${import.meta.env.VITE_GITHUB_API_KEY}`
				},
			})
			const data= await response.json()
			setRepos(data.items)
			setLoading(false);


		}
		catch(error){
			toast.error(error.message);
			setLoading(false);
		}
	}

  return (
    <div className='px-4'>
			<div className='bg-glass max-w-2xl mx-auto rounded-md p-4'>
				<h1 className='text-xl font-bold text-center'>Explore Popular Repositories</h1>
				<div className='flex flex-wrap gap-2 my-2 justify-center'>
					<img src='/javascript.svg' alt='JavaScript' className='h-11 sm:h-20 cursor-pointer'
					onClick={()=>exploreRepos('javascript')}
					/>
					<img onClick={()=>exploreRepos('typescript')}
					 src='/typescript.svg' alt='TypeScript logo' className='h-11 sm:h-20 cursor-pointer' />
					<img onClick={()=>exploreRepos('c++')} 
					src='/c++.svg' alt='C++ logo' className='h-11 sm:h-20 cursor-pointer' />
					<img onClick={()=>exploreRepos('python')} 
					src='/python.svg' 
					 alt='Python logo' className='h-11 sm:h-20 cursor-pointer' />
					<img onClick={()=>exploreRepos('java')}
					 src='/java.svg' alt='Java logo' className='h-11 sm:h-20 cursor-pointer' />
					 
				</div>

				{repos.length>0 && (
					<h2 className='text-lg font-semibold text-center my-4'>
						<span className=' text-blue-200 font-medium me-2 px-2.5 py-0.5 rounded-full '>
							{selectedLanguage.toUpperCase()}{" "}
						</span>
						Repositories
					</h2>
				)}

				{!loading  && repos.length>0 &&
				 <Repos repos={repos} alwaysfullwidth />}

				
				{loading && <div className='flex justify-center'><Spinner /> </div>}


			</div>
		</div>
  )
}

export default ExplorePage


// this is the api key we will use
// https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=10
