"use client";

import { redirect } from "@/i18n/routing";
import { usePathname } from "next/navigation";


export function ChangeLocale() {
    const pathname = usePathname();
    const changeLocale = (locale: string) => {
        redirect({ href: `${locale}`, locale: locale, });
    }

    return (
        <label className="dropdown w-fit">
            <select
                aria-label="Change language"
                onChange={(e) => changeLocale(e.target.value)} value={pathname.split("/")[1]}>
                <option value="en">🇺🇸 English</option>
                <option value="br">🇧🇷 Português</option>
            </select>
        </label>
    )
}