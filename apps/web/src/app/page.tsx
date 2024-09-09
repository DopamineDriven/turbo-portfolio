import type { Metadata } from "next";
import React, { Suspense } from "react";
import { Portfolio } from "../components/portfolio";

export const metadata = {
  title: "Home"
} satisfies Metadata;

export default function HomePage() {
  return (
    <Suspense>
      <Portfolio />
    </Suspense>
  );
}
