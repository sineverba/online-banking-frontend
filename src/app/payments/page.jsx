"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { isAuthenticated } from "../lib/utility";

export default function Page() {
  const isUserAuthenticated = isAuthenticated();
  const router = useRouter();

  useEffect(() => {
    if (!isUserAuthenticated) {
      router.push("/");
    }
  }, [router, isUserAuthenticated]);

  return <p>Test</p>;
}
