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
        <div
            className="items w-full gap-12 bg-primary-800 text-primary-50 px-6 py-12
            sm:flex
            md:px-24"
        >
            <img
                className="h-52 rounded-xl mb-4 self-center
                sm:mb-0"
                src="/me2.jpg"
                alt="Photo of me"
            />
            <div className="flex flex-col self-end">
                <h1
                    className='font-semibold mb-2 text-2xl
                sm:text-4xl'
                >
                    Leonardo de Oliveira Brandt
                </h1>
                <h2 className='mb-8 font-thin uppercase sm:text-lg'>Front End Developer</h2>
                <div
                    className='flex flex-wrap justify-between gap-y-2 gap-x-8
                md:w-4/6 md:justify-normal'
                >
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
