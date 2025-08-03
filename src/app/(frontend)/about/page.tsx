import { redirect, RedirectType } from "next/navigation";

export default function AboutPage() {
  return redirect("/about/mission", RedirectType.replace);
}
