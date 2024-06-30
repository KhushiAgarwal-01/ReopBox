import React from 'react'
import { FaHeart } from 'react-icons/fa'

function LikesPage() {
  return (
   <div className='relative overflow-x-auto shadow-md rounded-lg px-4'>
    {/* for right to left languases tex is to the right like numbers */}
    <table className='w-full text-sm text-left rtl:text-right  bg-glass overflow-hidden'>
      <thead className='text-xs uppercase bg-glass'>
        <tr>
          <th  className='p-4' scope='col'>
            <div className='flex items-center'>
             No </div>
          </th>
          <th  className='px-6 py-3' scope='col'>
            <div className='flex items-center'>
             UserName </div>
          </th>
          <th  className='px-6 py-3' scope='col'>
            <div className='flex items-center'>
             Date </div>
          </th>
          <th  className='px-6 py-3' scope='col'>
            <div className='flex items-center'>
             Action </div>
          </th>
        </tr>
      </thead>

      <tbody>

            <tr>

            <td className='w-2 p-4'>
							<div className='flex items-center'>
								<span>1</span>
							</div>
						</td>

            <td scope='row' className='flex items-center px-6 py-4 whitespace-nowrap '>
							<img
								className='w-10 h-10 rounded-full'
								src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
								alt='Jese image'
							/>
							<div className='ps-3'>
								<div className='text-base font-semibold'>khushi</div>
							</div>
						</td>

            <td className='px-6 py-4'>das</td>

            <td className='px-6 py-4'>
							<div className='flex items-center'>
								<FaHeart size={22} className='text-red-500 mx-2' />
								Liked your profile
							</div>
						</td>

            </tr>


      </tbody>


    </table>
   </div>
  )
}

export default LikesPage
