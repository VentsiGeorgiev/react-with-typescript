import ThemeProvider, { useTheme, type Theme } from "./context"

function ParentComponent () {
  return <ThemeProvider>
    <Component />
  </ThemeProvider>
}

function Component() {
  const {theme, setTheme} = useTheme()

  const handleClick = (theme : Theme) => {
    setTheme(theme)
  }

  return (
    <>
    <div>Component theme: {theme}</div>
    <button onClick={() => handleClick('light')}>light</button>
    <button onClick={() => handleClick('dark')}>dark</button>
    </>
  )
}

export default ParentComponent