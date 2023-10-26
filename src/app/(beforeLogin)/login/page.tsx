"use client";
import { useRouter } from "next/navigation";
import Login from "../_component/Login";

export default function Page() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Login />;
}
