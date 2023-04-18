import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaPhone } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

export default function Header() {

    const infos = [
        { info: '+55 41 98730-4848', icon: <FaPhone className='rotate-90' />, href: 'https://wa.me/5541987304848' },
        { info: 'Curitiba - PR / Brazil', icon: <IoLocationSharp />, href: 'https://www.google.com/maps/place/Curitiba,+State+of+Paran%C3%A1' },
        { info: 'leoobrandt@hotmail.com', icon: <FaEnvelope />, href: 'mailto: leoobrandt@hotmail.com' },
        { info: 'leobrandt.vercel.app', icon: <FaGlobe />, href: 'https://leobrandt.vercel.app/' },
        { info: 'github.com/Braandt', icon: <FaGithub />, href: 'https://github.com/Braandt' },
        { info: 'linkedin.com/in/brandtl', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/brandtl/' }
    ]

    return (
        <div className="flex items-end w-full h-1/6 gap-12 bg-primary-800 text-primary-50 px-24 py-12">
            <img
                className="h-full rounded-xl"
                src="/me2.jpg"
                alt="Photo of me"
            />
            <div className="flex flex-col w-4/6">
                <h1 className='text-4xl font-semibold mb-2'>Leonardo de Oliveira Brandt</h1>
                <h2 className='mb-8 text-xl font-thin uppercase'>Front End Developer</h2>
                <div className='flex flex-wrap justify-between gap-y-2'>
                    {infos.map(info => (
                        <a
                            key={info.info}
                            className='flex items-center gap-2'
                            href={info.href}
                            target='_blank'
                        >
                            {info.icon}
                            {info.info}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
