import { useState } from 'react'

export const Counter = ({ initialCount = 0 }: { initialCount?: number }) => {
    const [count, setCount] = useState(initialCount)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>Count: {count}</p>
        </div>
    )
}
