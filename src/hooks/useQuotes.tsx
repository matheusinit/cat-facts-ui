import { useCallback, useEffect, useState } from "react"

type QuoteApi = {
  sentence: string
  character: {
    name: string
    slug: string
    house: {
      name: string
      slug: string
    }
  }
}

export const useQuotes = () => {
  const [data, setData] = useState<QuoteApi[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getFacts = useCallback(async () => {
    try {
      const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random/4')
  
      const dataFromApi = await response.json() as unknown as QuoteApi[]

      setData(dataFromApi)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    getFacts()
  }, [getFacts])

  return {
    data, isLoading
  }
}