import { profile } from "@/data/profile";

export default function Profile() {
  return (
    <header className="flex flex-col items-center text-center">
      {profile.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={profile.avatar}
          alt={`${profile.name} 프로필 사진`}
          className="h-24 w-24 rounded-full object-cover ring-4 ring-sky-200 dark:ring-sky-900"
        />
      ) : (
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-sky-500 text-3xl font-bold text-white ring-4 ring-sky-200 dark:ring-sky-900">
          {profile.name.slice(0, 1)}
        </div>
      )}
      <h1 className="mt-4 text-xl font-bold">{profile.name}</h1>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{profile.bio}</p>
    </header>
  );
}
