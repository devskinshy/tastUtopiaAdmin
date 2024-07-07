import ThemeProvider from "./theme/ThemeProvider.jsx";
import Router from "./routes/Router.jsx";

function App() {
  return (
    <ThemeProvider>
      <Router/>
    </ThemeProvider>
  )
}

export default App
