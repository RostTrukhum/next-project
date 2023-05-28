import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Create Home page',
};

export default function Home() {
  return <h1>NextJS world</h1>;
}
