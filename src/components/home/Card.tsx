import {HeartIcon} from '@heroicons/react/24/solid'
import { FC } from 'react'

type CardParams = {
  content: string
  who: string
}

export const Card: FC<CardParams> = ({ content, who }) => {
  return (
    <div className="flex items-center flex-col w-max">
      <div className="p-4 rounded-lg shadow-sm border bg-slate-500 hover:bg-slate-600 transition-colors text-lg text-gray-50 w-96 min-h-40 relative">
        <span>
          {content}
        </span>

        <div className="text-sm italic mt-4">~{who}</div>
      </div>
    </div>
  )
}