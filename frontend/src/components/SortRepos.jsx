import React from 'react'

const SortRepos=({onSort,sort}) =>{

  const Buttons=[
    {type:"recent", text:"Most Recent"},
    {type:"stars",text:"Most Stars"},
    {type:"forks",text:"Most Forks"},
  ]

  return (

  //   <div className='mb-2 flex justify-center lg:justify-end'>
  //   <button
  //   onClick={()=>onSort("recent")}
    
  //     type='button'
     
  //     className={`  ${sort==="recent" ? "border-blue-600" : ""}  py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass`}
  //   >
  //     Most Recent
  //   </button>
  //   <button
  //       onClick={()=>onSort("stars")}

  //     type='button'
  //     className={` ${sort==="stars" ? "border-blue-600" : ""}  py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass`}
  //   >
  //     Most Stars
  //   </button>
  //   <button
  //       onClick={()=>onSort("forks")}

  //     type='button'
  //     className={` ${sort==="forks" ? "border-blue-600" : ""}  py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass`}
  //   >
  //     Most Forks
  //   </button>
  // </div>
  
  <div className='mb-2 flex justify-center lg:justify-end'>
    {Buttons.map((Button)=>(
      

        <button
        key={Button.type}
        onClick={()=>onSort(Button.type)}

        type='button'

        className={` py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass
          ${Button.type==sort ?"border-blue-600" : "" }`}
        >
       {Button.text}
        </button>

    ))}
 
  </div>

  )
}

export default SortRepos;
