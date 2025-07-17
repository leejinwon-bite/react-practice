// import logo from './logo.svg';

import root from "./router/root"
import { RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient()

function App() {
  return (

  <QueryClientProvider client={queryClient}>
    <RouterProvider router={root} />
  </QueryClientProvider>  
  );
}

export default App;
