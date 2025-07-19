import { IslandRenderer } from 'shared/islands/renderer'

export const Home = () => {
    return (
        <section className='p-8'>
            Home
            <IslandRenderer name='Counter' props={{ initialCount: 12 }} />
            <IslandRenderer name='Modal' />
        </section>
    )
}
