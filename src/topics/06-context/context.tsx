import { createContext, useContext, useState, type ReactNode } from 'react'

export type Theme = 'light' | 'dark' | 'system'
type ThemeProviderState = {
  theme: Theme;
  setTheme:(theme:Theme) => void;
}
type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export default function ThemeProvider({ children, defaultTheme = 'system'}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  return (
    <ThemeProviderContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within the ThemeProvider')
  }
  return context
}
