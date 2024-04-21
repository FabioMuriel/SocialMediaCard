import React from 'react'

const SocialNetwork = ({ name, url, icon, userName }: { name: string, url: string, icon: string, userName: string }) => {
    return (
        <div className='bg-white w-96 h-20 m-5 my-5 rounded-xl'>

            <div className="flex flex-row">

                <div className='w-20 h-20'>
                    <img src={icon} alt={name} />
                </div>

                <div className='flex flex-col justify-center text-black'>
                    <a className='font-bold text-xl' href={url} target
                        ='_blank'>{name}</a>

                    <p>{userName}</p>

                </div>

            </div>

        </div>
    )
}

export default SocialNetwork
