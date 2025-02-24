"use client"

import Link from "next/link"
import { UserNav } from "@/components/user-nav"

const navigation = [
  { name: "ホーム", href: "/" },
  { name: "製品", href: "/products" },
  { name: "サービス", href: "/services" },
  { name: "お問い合わせ", href: "/contact" },
]

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="トップナビゲーション">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              ロゴ
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <UserNav />
          </div>
        </div>
      </nav>
    </header>
  )
}

