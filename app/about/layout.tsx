import Link from 'next/link';

interface IAboutLayoutProps {
  children: React.ReactNode;
}

const AboutLayout = ({ children }: IAboutLayoutProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '30px' }}>
      <h1>About us</h1>
      <ul>
        <li>
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default AboutLayout;
