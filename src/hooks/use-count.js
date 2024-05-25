import { useState, useCallback } from 'react';

export function useCount({ initialValue, min, max }) {
    const [count, setCount] = useState(initialValue);

    const increment = useCallback(value => {
        if (value < max) {
            setCount(value + 1);
        }
    }, [max]);

    const decrement = useCallback(value => {
        if (value > min) {
            setCount(value - 1);
        }
    }, [min]);
    
    return { count, min, max, increment, decrement }
}
