import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'

const Features = ({item}) => {
  return (
    <div className='features border-t-[5px] border-gray-500 bg-black py-12 text-white'>
        <div className="max-w-[1200px] mx-auto px-4 ">
            <div className="grid grid-cols-2 gap-5">

                <div className="content self-center">
                    <h2 className='font-bold text-2xl mb-5'>{item.header}</h2>
                    <p className='text-xl'>{item.body}</p>
                </div>
                <div className='image justify-self-center'>
                    <img src={`${baseImgUrl}/${item.img}`} alt="" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Features