import { useEffect } from 'react'

const useOnMounted = (effect) => {
    useEffect(effect, [])
}

export default useOnMounted
