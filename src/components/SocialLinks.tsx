import { FaYoutube, FaTwitter, FaDiscord} from 'react-icons/fa'

export const SocialLinks = () => {
    return (
        <section className="mt-5">
            <h3 className="text-2xl font-extrabold">Mes réseaux sociaux</h3>
            <ul className="mt-5">
                <li className='flex items-center'><FaYoutube className='mr-3'/><a className='hover:text-[#33E7F2]' href="https://fr-fr.facebook.com/">Facebook</a></li>
                <li className='flex items-center'><FaTwitter className='mr-3'/><a className='hover:text-[#33E7F2]' href="https://twitter.com/?lang=fr">Twitter</a></li>
                <li className='flex items-center'><FaDiscord className='mr-3'/><a className='hover:text-[#33E7F2]' href="https://discord.com/">Discord</a></li>
            </ul>
        </section>
    )
}