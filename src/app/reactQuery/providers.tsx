"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useState } from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [client] = useState(new QueryClient());
  return (
    <QueryClientProvider client={client}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false}  /> */}
    </QueryClientProvider>
  );
};
