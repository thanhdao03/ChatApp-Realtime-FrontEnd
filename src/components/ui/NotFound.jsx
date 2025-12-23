import { Link } from "react-router-dom";
import Heading from "./Heading";
import { AlertTriangle, ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen container mx-auto items-center justify-center overflow-hidden">
      <AlertTriangle className="mb-4 h-10 w-10 sm:h-12 sm:w-12" />

      <Heading>Oops! We cannot seem to find that page.</Heading>

      <p className="mb-4 text-center opacity-60">
        The page you are looking for might have been removed, or the URL might
        be incorrect.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-1 rounded-md px-4 py-2 font-bold"
      >
        Back to Home
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default NotFound;
