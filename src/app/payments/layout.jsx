import { Title } from "@tremor/react";
import Navbar from "../components/common/navbar";

export default function PaymentsLayout({
  children // will be a page or nested layout
}) {
  return (
    <section className="h-screen">
      <Navbar />
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Title>Make a payment</Title>
        {children}
      </main>
    </section>
  );
}
