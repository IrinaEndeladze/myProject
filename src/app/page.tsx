// export default function Home() {
//   return (
//     <main className="flex min-h-screen  items-center justify-center p-24 bg-custom-gradient">
//       "hello allll"
//     </main>
//   );
// }

import Link from "next/link";

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li>
    </ul>
  );
}

export default Home;
