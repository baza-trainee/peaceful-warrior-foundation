import Link from 'next/link';
// type PageProps = HTMLAttributes<HTMLDivElement> & {
//   propertyTypeKey: propertyTypeKey;
// };

type PageProps = {};

const NotFound = ({}: PageProps) => {
  return (
    <>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="text-blue-600" href="/">
        Return Home
      </Link>
    </>
  );
};

export default NotFound;
