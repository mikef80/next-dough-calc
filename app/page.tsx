import Image from "next/image";
import FooterNav from "../components/FooterNav";
import { redirect } from "next/navigation";

export default function Home() {
  return redirect("/calculator");
}
