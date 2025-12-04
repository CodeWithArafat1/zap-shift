import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import AppRouter from "./routes/AppRouter.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppRouter />
          <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
