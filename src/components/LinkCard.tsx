"use client";

import { useState } from "react";
import type { LinkItem } from "@/data/profile";

type Props = { link: LinkItem; initialCount: number; showCount: boolean };

export default function LinkCard({ link, initialCount, showCount }: Props) {
  const [count, setCount] = useState(initialCount);

  function handleClick() {
    setCount((c) => c + 1);
    // 새 탭 이동과 무관하게 전송되도록 keepalive 사용
    fetch(`/api/click/${link.id}`, { method: "POST", keepalive: true }).catch(() => {});
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <span>{link.title}</span>
      {showCount && (
        <span className="text-xs text-slate-400">{count.toLocaleString("ko-KR")}회</span>
      )}
    </a>
  );
}
