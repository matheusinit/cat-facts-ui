import { FC } from "react"
import { Card } from "../components/home/Card"
import { Layout } from "../components/layout/Layout"
import { useQuotes } from "../hooks/useQuotes"
import { uid } from 'react-uid'

export const Home: FC = () => {
  const { data } = useQuotes()

  return (
    <Layout>
      <h2 className="text-6xl font-regular text-gray-700 text-center mt-10 hover:animate-bounce transition-all">Frases de Game of Thrones</h2>

      <div className="my-28 flex flex-wrap justify-center items-center gap-20">
        {data?.map(quote => (
          <Card content={quote.sentence} who={quote.character.name} key={uid(quote)} />
        ))}
      </div>
    </Layout>
  )
}