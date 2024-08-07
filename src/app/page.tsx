import Blog from './mila/mila';
import Billing from './andrey/billing';
import Image from 'next/image';
import Card from './card/card';
import ImageList from './image-list/imageList';
import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between content-between p-2">
      <nav>
        <Link href="/blog/blog"></Link>
        <Link href="/andrey/billing"></Link>
      </nav>
      <ImageList />
      {/* <div className="flex justify-between content-between w-100 flex-wrap">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="sm:w-1/4 flex justify-center mb-2">
              <Card />
            </div>
          ))}
      </div> */}
    </main>
  );
}
