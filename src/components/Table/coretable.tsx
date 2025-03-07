'use client'

import React, { useEffect, useMemo, useState } from "react";
import useSWR from "swr";

interface CoreTableProps {
  url: string,
  header?: any,
  children: any,
  footer?: any,
  rowsPerPage?: number,
}

export interface TableBodyProps {
  data?: any,
  loadingState?: any,
  page?: number,
  rowsPerPage?: number,
  pages?: number,
  setPage?: any
}

async function fetcher(...args: Parameters<typeof fetch>) {
  return (await fetch(...args)).json();
}

const CoreTable = (props: CoreTableProps) => {

  const { url, header, children, rowsPerPage = 100 } = props
  const [token, setToken] = useState<any>()
  const [page, setPage] = useState(1);
  let rank = 0;

  const fetchOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ page: page, pageSize: rowsPerPage }),
  };

  const { data, isLoading } = useSWR(token ? [`${process.env.NEXT_PUBLIC_API_URL}${url}?page=${page}`, fetchOptions] : null, ([url, options]) => fetcher(url, options), {
    keepPreviousData: true,
    revalidateOnFocus: false, // Disable automatic re-fetching
    suspense: false, // Do not fetch automatically
  });

  const loadingState = isLoading ? "loading" : "idle";

  const pages = useMemo(() => {
    return data?.count ? Math.ceil(data.count / rowsPerPage) : 0;
  }, [data?.count, rowsPerPage]);

  useEffect(() => {
    if (typeof window !== undefined) {
      setToken(localStorage.getItem('jwt'))
    }
  }, [])

  return (
    <>
      {React.Children.map(children, child =>
        React.cloneElement(child, { data, loadingState, pages, page, setPage, rowsPerPage })
      )}
    </>
  )
}

export default CoreTable