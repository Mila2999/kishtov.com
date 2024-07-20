import Image from 'next/image';
import Card from './card/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between content-between p-2">
      <div className="flex justify-between content-between w-100 flex-wrap">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="sm:w-1/4 flex justify-center mb-2">
              <Card />
            </div>
          ))}
      </div>
    </main>
  );
}
