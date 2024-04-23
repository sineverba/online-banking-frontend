"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Feedback } from "@sineverba/feedback";
import { Loading } from "@sineverba/loading";
import { FormComponent } from "./components/common/FormComponent";
import Footer from "./components/common/footer";
import { usePostLoginMutation } from "./features/apiSlice";
import { isAuthenticated, login } from "./lib/utility";
import extraValues from "./lib/constants";

export default function Page() {
  const isUserAuthenticated = isAuthenticated();
  const router = useRouter();
  // Handle the error feedback
  const [feedback, setFeedback] = useState(false);
  const [postLogin, { isLoading }] = usePostLoginMutation();

  const fields = [
    {
      id: "username",
      name: "username",
      type: "text",
      onKeyDownRegex: extraValues.get("REGEX_ONLY_CHAR_NUMBER")
    },
    {
      id: "password",
      name: "password",
      type: "password"
    }
  ];

  useEffect(() => {
    /* istanbul ignore next */
    if (isUserAuthenticated) {
      /* istanbul ignore next */
      router.push(`/${extraValues.get("PAGE_DASHBOARD")}`);
    }
  }, [router, isUserAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback(false);
    const formData = new FormData(e.currentTarget);

    const { data } = await postLogin(Object.fromEntries(formData));
    if (!data) {
      setFeedback(true);
      return;
    }
    if (data.access_token) {
      login(data.access_token);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          {feedback && (
            <Feedback isError message="Wrong username or password" />
          )}
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Use your username and password to sign in
          </p>
        </div>
        <form
          className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
          onSubmit={handleSubmit}
        >
          {fields.map((field) => (
            <FormComponent key={field.id} field={field} />
          ))}
          <button
            type="submit"
            disabled={isLoading}
            className={`${
              isLoading
                ? "cursor-not-allowed border-gray-200 bg-gray-100"
                : "border-black bg-black text-white hover:bg-white hover:text-black"
            } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
          >
            {isLoading ? <Loading /> : <span>Login</span>}
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
}
