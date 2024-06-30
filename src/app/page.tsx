import Link from "next/link";
import { Button } from "~/components/ui/button";

// Import metadata from the separate file
import { metadata } from "../../public/metadata"
export { metadata };
export default function HomePage() {
  return (
    <div>
      <Button>Click</Button>
    </div>
  );
}
