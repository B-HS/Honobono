import { BlendColor } from 'shared/icons'

export const Header = () => {
    return (
        <header className='flex justify-between items-center w-full h-10 border-b border-secondary px-3'>
            <a className='font-bold' href='/'>
                {Bun.env.SITE_NAME}
            </a>

            <BlendColor id='theme-toggle' className='size-5 fill-foreground text-foreground' />
        </header>
    )
}
