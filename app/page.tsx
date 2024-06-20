import { TabMdx } from "@/components/core/TabMdx";
import Link from "next/link";
import { redirect } from "next/navigation";
export default function HomePage() {
  redirect("/docs");
  return (
    <>
      <main
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Hello World
        </h1>
        <p>
          You can open{" "}
          <Link
            href="/docs"
            style={{
              fontWeight: "600",
              textDecoration: "underline",
            }}
          >
            /docs
          </Link>{" "}
          and see the documentation.
        </p>
      </main>
    </>
  );
}
