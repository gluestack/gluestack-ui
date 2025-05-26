import App from "@/components/page-components/landing-page";
import { headers } from "next/headers";

export default function Home() {
  const headersList = headers();
  const referrer =
    headersList.get("referer") || headersList.get("referrer") || "";
  return <App referrer={referrer} />;
}
