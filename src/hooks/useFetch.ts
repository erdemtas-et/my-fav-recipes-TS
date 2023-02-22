import {useState, useEffect} from 'react'
import axios from 'axios'

interface FetchResponse<T> {
  data: T
  loading: boolean
  error: any
}

function useFetch<T>(url: string, initialValue: T): FetchResponse<T> {
  const [data, setData] = useState<T>(initialValue)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          signal: signal,
        })

        setLoading(false)
        setData(response.data)
      } catch (error: any) {
        if (axios.isCancel(error)) {
          setError(`Request cancelled : ${error.message}`)
        } else {
          setError(`${error.message}`)
        }
        setLoading(false)
      }
    }
    fetchData()

    return () => {
      controller.abort()
    }
  }, [url])

  return {data, loading, error}
}

export default useFetch
