import axios from "axios";
import { createContext, useEffect, useState } from "react";

const NewsContext = createContext()

const NewsProvider = ({children}) => {

    const [category, setCategory] = useState('general')
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [totalNews, setTotalNews] = useState(0)

    useEffect(() => {
        const consultAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=gb&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)

            setNews(data.articles)
            setTotalNews(data.totalResults)
        }
        consultAPI()
        setPage(1)
    }, [category])

    useEffect(() => {
        const consultAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=gb&category=${category}&page=${page}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)

            setNews(data.articles)
            setTotalNews(data.totalResults)
        }
        consultAPI()
    }, [page])

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    const handleChangePage = (e, value) => {
        setPage(value)
    }
    return (
        <NewsContext.Provider
            value={{
                category,
                handleChangeCategory,
                news,
                totalNews,
                handleChangePage,
                page
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext