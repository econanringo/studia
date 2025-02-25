// pages/index.tsx
use
import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

const Home = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (err) {
      console.error('ログアウト中にエラーが発生しました:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {user ? (
        <div className="bg-white p-6 rounded-md shadow-lg">
          <h1 className="text-2xl font-bold mb-4">ようこそ、{user.email}さん</h1>
          <button
            onClick={handleLogout}
            className="p-3 bg-red-500 text-white rounded-md"
          >
            ログアウト
          </button>
        </div>
      ) : (
        <p>ユーザーがログインしていません。</p>
      )}
    </div>
  );
};

export default Home;
