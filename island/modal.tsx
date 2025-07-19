import { useState } from 'react'

export const Modal = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <div>
                <button onClick={() => setOpen(true)}>Open</button>
                <button onClick={() => setOpen(false)}>Close</button>
                {open && (
                    <div className='fixed inset-0 backdrop-blur-2xl bg-opacity-50 flex justify-center items-center' onClick={() => setOpen(false)}>
                        <p>Modal</p>
                    </div>
                )}
            </div>
        </div>
    )
}
