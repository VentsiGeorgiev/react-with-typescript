import { useEffect, useState } from "react"

const url = 'https://www.course-api.com/react-tours-project'

type TourType = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
}

function Component() {

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<string | null>(null)
  const [tours, setTours] = useState<TourType[]>([]) 

  useEffect(() => {
    const fetData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url)
        if(!response.ok) {
          throw new Error('Failed to fetch')
        }
        const data: TourType[] = await response.json()
        setTours(data);
        console.log(data)
        
      } catch (error) {
        const message = error instanceof Error ? error.message : 'There was an errror'
        setIsError(message)
      } finally {
        setIsLoading(false)
      }
    }
    fetData()
  }, [])

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  if(isError) {
    return <h1>Error: {isError}</h1>
  }

  return (
    <div>{tours.map((tour) => (
      <div key={tour.id}>
        <h2>{tour.name}</h2>
        <p>{tour.info}</p>
        <p>price: {tour.price}</p>
      </div>
    ))}</div>
  )
}

export default Component