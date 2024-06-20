import { Link } from "lucide-react";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <div>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
