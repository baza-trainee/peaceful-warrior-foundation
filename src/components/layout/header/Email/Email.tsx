import Link from 'next/link';

const Email = () => {
  const email = 'ukr.peaceful.warrior@gmail.com';
  return (
    <Link
      rel="nofollow noreferrer"
      target="_blank"
      href={`mailto:${email}`}
      title={`Send an email to ${email}`}
      className="cursor-pointer hover:underline"
    >
      {email}
    </Link>
  );
};

export default Email;
