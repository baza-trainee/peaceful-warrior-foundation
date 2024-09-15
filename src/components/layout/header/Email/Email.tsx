import Link from 'next/link';

const Email = () => {
  const email = 'ukr.peaceful.warrior@gmail.com';
  return (
    <Link
      aria-label="email"
      rel="nofollow noreferrer"
      target="_blank"
      href={`mailto:${email}`}
      title={`Send an email to ${email}`}
      className="cursor-pointer transition-all duration-200 hover:text-gray-border hover:underline"
    >
      {email}
    </Link>
  );
};

export default Email;
