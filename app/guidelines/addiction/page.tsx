import React from 'react'
import Link from 'next/link'

const page = () => {

    const addictions = [
        'Tobacco', 
        'Alcohol', 
        'Pharmaceuticals', 
        'Cannabis', 
        'Stimulants', 
        'Opioids', 
        'Gamma-hydroxybutyrate', 
        'Ketamine', 
        'Volatile Inhalants', 
        'Gambling',
        'Gaming'
    ]

  return (
    <div className='w-screen h-screen items-center justify-center flex gap-x-10'>

        <div className='w-1/3 bg-sky-200/20 rounded-xl p-8 font-light text-slate-500/60'>   
            <h1 className='text-5xl py-5  '>General Information to consider</h1>
            <h2 className='py-3 text-md font-light'>Before prescribing check</h2>
            <ul className='text-sm font-light'>
                <li>Do this</li>
                <li>This</li>
                <li>and this,</li>
                <li>and this. </li>
            </ul>
        </div>

        <div className='w-1/2 text-gray-500/60'>
            <h1 className='text-3xl py-7 font-semibold '>Select from the following addictions, </h1>

            <div className=' grid grid-cols-2'>
            {addictions.map((addiction) => (
            <Link key={Math.random()} className='hover:bg-slate-200/30 rounded-lg p-3 flex items-center' href={'http://localhost:3000/guidelines/addiction/' + `${addiction.toLowerCase}`}>
                {addiction}

                </Link>         
            ))}
            </div>

        </div>
        
   
    </div>
  )
}

export default page
