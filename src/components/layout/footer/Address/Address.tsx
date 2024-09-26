import Link from 'next/link';
interface AddressProps {
  linkClass?: string;
  children?: React.ReactNode;
  email?: string;
}

const Address: React.FC<AddressProps> = ({ children }) => {
  const address = 'м. Харків, вул. 92-ої Бригади, 29';
  return (
    <Link
      aria-label="address"
      href="https://www.google.com/maps/search/?api=1&query=м.+Харків,+вул.+92-ої+Бригади,+29"
      rel="nofollow noreferrer"
      target="_blank"
      className="mt-[4px] text-m font-light leading-[19.5px] transition-all duration-200 hover:text-gray-border hover:underline"
    >
      {children ? children : address}
    </Link>
  );
};

export default Address;
