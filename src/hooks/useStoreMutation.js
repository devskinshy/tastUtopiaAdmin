import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useStoreMutation = (mutationFn, queryKey, options = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess: customOnSuccess, ...restOptions } = options;

  return useMutation({
    mutationFn,
    onSuccess: async (data, variables, context) => {
      try {
        if (typeof customOnSuccess === "function") {
          await customOnSuccess(data, variables, context);
        }
        if (queryKey) {
          await queryClient.invalidateQueries([queryKey]);
        }
      } catch (error) {
        console.error("onSuccess Error >>>>>>>>", error);
      }
    },
    onError: (error) => {
      window.alert(`Error ${error.code} : ${error.message}`);
    },
    ...restOptions,
  });
};
