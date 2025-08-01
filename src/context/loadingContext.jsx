import { createContext, useContext, useState, useCallback, useRef } from 'react'

const LoadingContext = createContext()

export function LoadingProvider({ children }) {
    const [loadingTasks, setLoadingTasks] = useState(new Set())
    const [forceOverflowHidden, setForceOverflowHidden] = useState(false)
    const scrollYRef = useRef(0)

    // Identificador exclusivo para rotas
    const routeTaskRef = useRef(Symbol('route-loading'))

    const addLoadingTask = useCallback((taskId = Symbol()) => {
        setLoadingTasks(prev => new Set(prev).add(taskId))
        return taskId // retorna o ID caso queira guardar depois
    }, [])

    const removeLoadingTask = useCallback((taskId) => {
        setLoadingTasks(prev => {
            const copy = new Set(prev)
            copy.delete(taskId)
            return copy
        })
    }, [])

    const setOverflowHidden = useCallback((hidden) => {
        if (hidden) {
            scrollYRef.current = window.scrollY
            document.body.style.cssText += `
                position: fixed;
                top: -${scrollYRef.current}px;
                width: 100%;
                overflow: hidden;
            `
        } else {
            document.body.style.cssText = ''
            window.scrollTo(0, scrollYRef.current)
        }

        setForceOverflowHidden(hidden)
    }, [])

    // Funções específicas para rotas
    const startRouteLoading = useCallback(() => {
        addLoadingTask(routeTaskRef.current)
    }, [addLoadingTask])

    const endRouteLoading = useCallback(() => {
        removeLoadingTask(routeTaskRef.current)
    }, [removeLoadingTask])

    return (
        <LoadingContext.Provider
            value={{
                isLoading: loadingTasks.size > 0,
                addLoadingTask,
                removeLoadingTask,
                setOverflowHidden,
                forceOverflowHidden,
                startRouteLoading,
                endRouteLoading,
            }}
        >
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
