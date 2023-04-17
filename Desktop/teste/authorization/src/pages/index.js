import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/api/login");
  };

  return (
    <div>
      <h1>Next.js Spotify Integration</h1>
      <button onClick={handleClick}>Login with Spotify</button>
    </div>
  );
}