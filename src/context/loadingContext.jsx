// contexts/LoadingContext.jsx
import { createContext, useContext, useState } from 'react'

const LoadingContext = createContext()

export function LoadingProvider({ children }) {
    const [loadingTasks, setLoadingTasks] = useState(0)

    const addLoadingTask = () => {
        setLoadingTasks(prev => prev + 1)
    }

    const removeLoadingTask = () => {
        setLoadingTasks(prev => Math.max(0, prev - 1))
    }

    // Você não tinha a prop forceOverflowHidden no seu contexto, adicionei.
    // Ela é útil para casos onde você quer forçar o overflow hidden mesmo sem uma tarefa de loading ativa.
    const [forceOverflowHidden, setForceOverflowHidden] = useState(false)
    const setOverflowHidden = (value) => setForceOverflowHidden(value)


    const value = {
        isLoading: loadingTasks > 0,
        addLoadingTask,
        removeLoadingTask,
        setOverflowHidden, // Adicionei ao valor exportado
        forceOverflowHidden // Adicionei ao valor exportado
    }

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    )
}

export function useLoading() {
    const context = useContext(LoadingContext)
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider')
    }
    return context
}