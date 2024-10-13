import ThemeProvider from "./providers/ThemeProvider.jsx";
import Router from "./routes/Router.jsx";
import QueryProvider from "./providers/QueryProvider.jsx";

function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <Router/>
      </QueryProvider>
    </ThemeProvider>
  )
}

export default App
