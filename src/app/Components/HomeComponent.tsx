import React, { use } from 'react'
import Image from 'next/image'
import FabioImage from '@/app/assets/FabioImage.jpeg';
import SocialNetwork from './SocialNetwork';

interface SocialNetworkProps {
    name: string,
    url: string,
    icon: string,
    userName: string
}

const HomeComponent = () => {

    const redesSociales = [
        {
            name: 'Github',
            url: 'https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png',
            icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            userName: 'FabioMuriel'
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/fabio-muriel-vega-165456261/',
            icon: 'https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png',
            userName: 'Fabio Muriel Vega'
        },
        {
            name: 'X',
            url: 'https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png',
            icon: 'https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png',
            userName: '@FabioMurielDev'
        },
        {
            name: 'Instagram',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png',
            userName: '@fabio_muriel_16'
        }
    ]

    return (
        <div className='flex flex-col justify-center items-center'>

            <div className='w-72 h-72 rounded-full overflow-hidden mb-5'>
                <Image
                    src={FabioImage}
                    alt='Fabio Muriel Vega'
                    width={300}
                    height={300} />
            </div>

            <h1 className='font-bold text-4xl'>Fabio Muriel Vega</h1>
            <p className='text-lg'>Full Stack Developer</p>

            <div className="flex flex-col">
                {
                    redesSociales.map((red: SocialNetworkProps, index: number) => (
                        <SocialNetwork key={index} name={red.name} url={red.url} icon={red.icon} userName={red.userName} />
                    ))
                }
            </div>

        </div>
    )
}

export default HomeComponent
