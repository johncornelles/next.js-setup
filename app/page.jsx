import Feed from '@components/Feed'
import React from 'react'

const HomePage = () => {
  return (
            <section className='font-mono w-full flex justify-center items-center p-10 flex-col'>
                <h1 className='text-4xl text-center font-bold'>Discover Books across the world</h1>
                <h2 className='text-3xl text-center font-bold '>Search by <br /> interests, authors and many more </h2>
            <Feed /> 
            </section>
  )
}

export default HomePage
