import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../src/services/redux/store";

const renderWithWrapper = (ui: any, options?: any) => {
  const queryClient = new QueryClient();

  const Wrapper = ({ children }: any) => {
    return (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>{children}</BrowserRouter>
        </Provider>
      </QueryClientProvider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...options });
};

export * from "@testing-library/react";
export { renderWithWrapper };
