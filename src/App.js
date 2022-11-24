import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayouts from "./layouts/DefaultLayouts";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <DefaultLayouts>
                  <Home />
                </DefaultLayouts>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
