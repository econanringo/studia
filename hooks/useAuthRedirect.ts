// hooks/useAuthRedirect.ts
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebaseConfig';

const useAuthRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace('/login'); // ログインされていない場合は /login にリダイレクト
      }
    });
    return () => unsubscribe();
  }, [router]);
};

export default useAuthRedirect;
