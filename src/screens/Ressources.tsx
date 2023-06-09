import { BsLink } from 'react-icons/bs'

export const Ressources = () => {
    return (
        <main>
            <h3 className="text-3xl font-extrabold mb-4">Ressources du site</h3>
            <ul>
                <li className='flex items-center'><BsLink className='mr-3'/><a className='hover:underline' href="https://fr-fr.facebook.com/">Facebook</a></li>
                <li className='flex items-center'><BsLink className='mr-3'/><a className='hover:underline' href="https://twitter.com/?lang=fr">Twitter</a></li>
                <li className='flex items-center'><BsLink className='mr-3'/><a className='hover:underline' href="https://discord.com/">Discord</a></li>
            </ul>
        </main>
    )
}