;(() => {
    if (typeof window === 'undefined') {
        return
    }

    const THEME_STORAGE_KEY = 'theme'
    const META_THEME_COLOR_SELECTOR = "meta[name='theme-color']"

    const ThemeManager = {
        metaThemeColor: null,

        getPreference() {
            return localStorage.getItem(THEME_STORAGE_KEY) || 'system'
        },

        resolve(theme) {
            if (theme === 'system') {
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            }
            return theme
        },

        disableTransitions() {
            const css = document.createElement('style')
            css.innerHTML = '*, *::before, *::after { transition: none !important; }'
            document.head.appendChild(css)
            return () => document.head.removeChild(css)
        },

        apply(theme) {
            const resolvedTheme = this.resolve(theme)
            const reEnableTransitions = this.disableTransitions()

            document.documentElement.classList.remove('light', 'dark')
            document.documentElement.classList.add(resolvedTheme)

            if (this.metaThemeColor) {
                const color = resolvedTheme === 'dark' ? '#ffffff' : '#000000'
                this.metaThemeColor.setAttribute('content', color)
            }

            requestAnimationFrame(reEnableTransitions)
        },

        set(theme) {
            if (theme === 'system') {
                localStorage.removeItem(THEME_STORAGE_KEY)
            } else {
                localStorage.setItem(THEME_STORAGE_KEY, theme)
            }
            this.apply(theme)
        },

        setupToggle() {
            const themeToggleBtn = document.querySelector('#theme-toggle')
            if (!themeToggleBtn) return

            themeToggleBtn.addEventListener('click', () => {
                const isDark = document.documentElement.classList.contains('dark')
                this.set(isDark ? 'light' : 'dark')
            })
        },

        watchSystem() {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
                if (this.getPreference() === 'system') {
                    this.apply('system')
                }
            })
        },

        init() {
            this.apply(this.getPreference())
            this.watchSystem()
            window.setTheme = this.set.bind(this)
            document.addEventListener('DOMContentLoaded', () => {
                this.metaThemeColor = document.querySelector(META_THEME_COLOR_SELECTOR)
                this.setupToggle()

                const resolvedTheme = this.resolve(this.getPreference())
                if (this.metaThemeColor) {
                    const color = resolvedTheme === 'dark' ? '#ffffff' : '#000000'
                    this.metaThemeColor.setAttribute('content', color)
                }
            })
        },
    }

    ThemeManager.init()
})()
