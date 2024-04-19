import { Grid, Title } from "@tremor/react";
import Navbar from "../components/common/navbar";

export default function DashboardLayout({
  children // will be a page or nested layout
}) {
  return (
    <section className="h-screen">
      <Navbar />
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Title>Dashboard</Title>
        <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
          {children}
        </Grid>
      </main>
    </section>
  );
}
