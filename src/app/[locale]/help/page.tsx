// import { HTMLAttributes } from "react";

import BePartner from '@/sections/help/BePartner/BePartner';
import Join from '@/sections/help/Join/Join';
import SupportUs from '@/sections/help/SupportUs/SupportUs';

// type PageProps = HTMLAttributes<HTMLDivElement> & {
//   propertyTypeKey: propertyTypeKey;
// };

type PageProps = {};
const Page = ({}: PageProps) => {
  return (
    <>
      <Join />
      <BePartner />
      <SupportUs />
    </>
  );
};

export default Page;
