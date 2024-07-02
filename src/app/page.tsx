// Import metadata from the separate file
import { metadata } from "../../public/metadata"
import MainLayout from "~/components/layouts/MainLayout";
export { metadata };
export default function HomePage() {
  return (
    <>
     <MainLayout/>
    </>
  );
}
