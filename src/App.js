import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DefaultLayouts from "./layouts/DefaultLayouts";
import { publicRouters } from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouters.map((publicRouter, index) => {
            const Chilren = publicRouter.element;
            return (
              <Route
                key={index}
                path={publicRouter.path}
                element={
                  <>
                    <DefaultLayouts>
                      <Chilren />
                    </DefaultLayouts>
                  </>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
