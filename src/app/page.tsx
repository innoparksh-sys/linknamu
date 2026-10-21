import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links } from "@/data/profile";
import { getClicks } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

async function loadCounts(): Promise<Record<string, number> | null> {
  try {
    const clicks = await getClicks();
    if (!clicks) return null;
    const docs = await clicks.find().toArray();
    return Object.fromEntries(docs.map((d) => [d._id, d.count]));
  } catch {
    return null;
  }
}

export default async function Home() {
  const counts = await loadCounts();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-4 py-12">
      <div className="fixed right-4 top-4">
        <ThemeToggle />
      </div>
      <Profile />
      <ul className="mt-8 w-full space-y-3">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard
              link={link}
              initialCount={counts?.[link.id] ?? 0}
              showCount={counts !== null}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
