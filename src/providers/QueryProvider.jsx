import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "../utils/query.js";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}

export default QueryProvider;
