import {BookOpenIcon} from '@heroicons/react/24/outline'
import { FC } from 'react'
import { GithubIcon } from './GithubIcon'


export const Footer: FC = () => {
  return (
    <footer className="w-full h-24 border-t border-gray-300">
      <div className="w-full h-full flex items-center justify-between">
        <button className="text-base text-gray-600 px-2 py-1 border border-gray-400 rounded-md flex items-center gap-x-1 hover:animate-bounce transition-all hover:bg-gray-700 hover:text-white">
          <BookOpenIcon className="w-4 h-4 text-inherit" />
          <span>Sobre</span>
        </button>

        <a role="button" href="https://github.com/matheusinit" target="_blank" className="text-base text-gray-600 px-2 py-1 border border-gray-400 rounded-md flex items-center gap-x-1 hover:animate-bounce transition-all hover:bg-gray-700 hover:text-white">
          <GithubIcon className='w-5 h-5 text-inherit' />
          <span>Github</span>
        </a>          
      </div>
    </footer>
  )
}