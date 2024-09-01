// import { HTMLAttributes } from "react";

// type PageProps = HTMLAttributes<HTMLDivElement> & {
//   propertyTypeKey: propertyTypeKey;
// };

type PageProps = {};

const Page = ({}: PageProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Projects Page</p>
    </main>
  );
};

export default Page;
