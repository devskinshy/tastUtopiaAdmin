import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "../utils/query.js";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import PropTypes from "prop-types";

function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}

QueryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QueryProvider;
