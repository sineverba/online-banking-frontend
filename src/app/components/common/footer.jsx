"use client";

import { Loading } from "@sineverba/loading";
import { useGetPingQuery } from "../../features/apiSlice";

const Footer = () => {
  const { data, isLoading } = useGetPingQuery();
  return (
    <div className="flex justify-center mt-2 mb-8">
      {isLoading && <Loading />}
      {!isLoading && (
        <p className="text-sm text-gray-500">v. {data.version}</p>
      )}
    </div>
  );
};

export default Footer;
