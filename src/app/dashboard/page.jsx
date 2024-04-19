"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { isAuthenticated } from "../lib/utility";
import Kpi from "../components/common/Kpi";
import { useGetBalanceQuery } from "../features/apiSlice";

export default function Page() {
  const isUserAuthenticated = isAuthenticated();

  const router = useRouter();

  const { data, isLoading } = useGetBalanceQuery();

  useEffect(() => {
    if (!isUserAuthenticated) {
      router.push("/");
    }
  }, [router, isUserAuthenticated]);

  return (
    <Kpi
      keyLoop={1}
      title="balance"
      value={`${data?.balance && data.balance} €`}
      isLoading={isLoading}
    />
  );
}
