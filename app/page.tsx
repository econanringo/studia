'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('useEffect 発火');
    console.log('auth:', auth);

    if (!auth) {
      console.error('auth が undefined です。Firebase の初期化に問題があります。');
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('onAuthStateChanged 発火', user);

      if (!user) {
        console.log('ユーザーがいないため、/login にリダイレクト');
        router.replace('/login');
      } else {
        console.log('ログイン済みのユーザー:', user);
        setIsLoading(false);
      }
    });

    return () => {
      console.log('onAuthStateChanged を解除');
      unsubscribe();
    };
  }, [router]);

  if (isLoading) {
    console.log('Loading... 表示中');
    return <div>Loading...</div>;
  }

  console.log('Home コンポーネントが表示されます');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Welcome to Home Page</h1>
      </main>
    </div>
  );
}
