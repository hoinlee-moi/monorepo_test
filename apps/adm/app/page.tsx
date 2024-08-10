"use client";

import { trpc } from "@/utils/trpc";

export default function Home() {
  const posts = trpc.getPosts.useQuery().data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {posts?.map(({ title, content, createAt }) => (
          <li
            key={createAt}
            className="border border-solid border-slate-600 mb-5"
          >
            <h1>title: {title}</h1>
            {content}
            <p>{createAt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
