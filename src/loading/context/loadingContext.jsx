import { createContext, useState, useContext } from 'react'

const LoadingContext = createContext()

export const LoadingProvider = ({ children }) => {
    const [loadingTasks, setLoadingTasks] = useState(new Set())

    const addLoadingTask = (taskId) => {
        setLoadingTasks((prev) => new Set(prev).add(taskId))
    }

    const removeLoadingTask = (taskId) => {
        setLoadingTasks((prev) => {
            const newTasks = new Set(prev)
            newTasks.delete(taskId)
            return newTasks
        })
    }

    const isLoading = loadingTasks.size > 0

    return (
        <LoadingContext.Provider value={{ isLoading, addLoadingTask, removeLoadingTask }}>
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => useContext(LoadingContext)