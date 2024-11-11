import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Link from "./shared/ui/Link/Link";
import "./styles.css";
import Optimized from "./Optimized";
import Unoptimized from "./Unoptimized";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <div>
          <h1>useDeferredValue</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Link to={"./unoptimized"}>Unoptimized re-rendering of the list</Link>
          <Link to={"./optimized"}>Deferred re-rendering of the list</Link>
        </div>
      </div>
    ),
  },
  {
    path: "optimized",
    element: <Optimized />,
  },
  {
    path: "unoptimized",
    element: <Unoptimized />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
