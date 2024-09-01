import Link from "next/link";
// type PageProps = HTMLAttributes<HTMLDivElement> & {
//   propertyTypeKey: propertyTypeKey;
// };

type PageProps = {};

const NotFound = ({}: PageProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="text-blue-600" href="/">
        Return Home
      </Link>
    </main>
  );
};

export default NotFound;
