import type { Metadata } from "next";
import TjansterClient from "./TjansterClient";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/large-name-footer";

export const metadata: Metadata = {
  title: "Våra Tjänster | ATLA AB",
  description: "Upptäck våra tjänster inom affärssystem, IT-utbildningar och teknisk support. Skräddarsydda lösningar för din verksamhet.",
  alternates: {
    canonical: "/tjanster",
  },
};

export default function TjansterPage() {
  return (
    <>
      <div className="grid-content">
        <Navbar />
        <TjansterClient />
      </div>
      <Footer />
    </>
  );
}
