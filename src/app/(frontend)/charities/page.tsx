import { redirect, RedirectType } from "next/navigation";

export default function CharitiesPage() {
  return redirect("/charities/global-partners", RedirectType.replace);
}
