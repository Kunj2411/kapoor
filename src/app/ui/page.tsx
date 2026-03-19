import { Metadata } from "next";
import UIShowcase from "./UIShowcase";

export const metadata: Metadata = {
  title: "UI System | Kapoor Transport",
  description: "Enterprise UI component library — Buttons, Cards, Badges, Inputs, Forms.",
};

export default function UIPage() {
  return <UIShowcase />;
}
