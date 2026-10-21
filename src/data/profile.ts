export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// 보여 주기용 더미 값입니다. 나중에 실제 내용으로 교체하세요.
export const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  avatar: "/avatar.svg", // public 폴더 기준. 비우면 이름 첫 글자가 표시됩니다.
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "블로그", url: "https://blog.naver.com" },
];
