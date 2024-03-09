import axios from "axios";
import { useEffect, useState } from "react";
import { ErrorType, MiniMindError } from "../types/error";
import api from "../services/api";

export const useFetchMiniMindAPI = <T>(url: string)=> {
    const [isPending, setIsPending] = useState<boolean>(false);
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<MiniMindError | null>(null)
    const [responseStatus, setResponseStatus] = useState<number>(0)

    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true)
            try {
                const response =  await api.get(url)
                setResponseStatus(response.status)
                setIsPending(false)
                setData(response.data)
                setError(null)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('error message: ', error.message)
                    setError({
                        message: error.message,
                        errorType: ErrorType.AXIOS_ERROR
                    })
                } else {
                    console.log('unexpected error: ', error)
                    setError({
                        message: `${error} Could not fetch data`,
                        errorType: ErrorType.UNKNOWN_ERROR
                    })
                }
                setIsPending(false)
            }
        };
        fetchData()
    }, [url])
    return { data, isPending, responseStatus, error }
}