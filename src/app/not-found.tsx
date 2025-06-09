import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h2 className="text-foreground font-cooper mb-3 text-4xl font-bold">
        404 – Not Found
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Sorry, we couldn’t find the page you were looking for.
      </p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
