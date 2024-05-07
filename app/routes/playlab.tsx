import type { MetaFunction } from "@remix-run/node";
import Pitch from "~/components/pitch"

export const meta: MetaFunction = () => {
  return [
    { title: "Full Stack Snacks" },
    { name: "description", content: "Full Stack Snacks" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Pitch />
    </div>
  );
}