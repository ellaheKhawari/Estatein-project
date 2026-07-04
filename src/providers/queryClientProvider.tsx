import { QueryClient , QueryClientProvider} from "@tanstack/react-query";
import type {FC , PropsWithChildren} from "react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2,
            staleTime : 1000 * 60 * 5
        }
    }
})

const ReactQueryProvider :FC <PropsWithChildren> = ({children}) => {
    return (
        <>
            <QueryClientProvider client={queryClient}> {children} </QueryClientProvider>
        </>
    );
}
export default ReactQueryProvider;