import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaPhone } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

export default function Header() {

    const infos = [
        { info: '+55 41 98730-4848', icon: <FaPhone className='rotate-90 text-highlight' />, href: 'https://wa.me/5541987304848' },
        { info: 'Curitiba - PR / Brazil', icon: <IoLocationSharp className='text-highlight' />, href: 'https://www.google.com/maps/place/Curitiba,+State+of+Paran%C3%A1' },
        { info: 'leoobrandt@hotmail.com', icon: <FaEnvelope className='text-highlight' />, href: 'mailto: leoobrandt@hotmail.com' },
        { info: 'leobrandt.vercel.app', icon: <FaGlobe className='text-highlight' />, href: 'https://leobrandt.vercel.app/' },
        { info: 'github.com/Braandt', icon: <FaGithub className='text-highlight' />, href: 'https://github.com/Braandt' },
        { info: 'linkedin.com/in/brandtl', icon: <FaLinkedin className='text-highlight' />, href: 'https://www.linkedin.com/in/brandtl/' }
    ]

    return (
        <div
            className="items w-full gap-12 bg-color1 text-color5 px-6 py-12
            sm:flex
            md:px-32"
        >
            <img
                className="h-60 rounded-xl mb-4 self-center shadow-2xl
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
                <h2 className='mb-8 font-thin uppercase sm:text-lg'>Mechanical Engineer</h2>
                <div
                    className='flex flex-wrap justify-between gap-y-2 gap-x-8 text-[1rem] italic
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
