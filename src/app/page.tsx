import Image from 'next/image';
import Card from './card/card';
import ImageList from './image-list/imageList';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between content-between p-2">
      <ImageList />
    </main>
  );
}
