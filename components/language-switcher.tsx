"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter, usePathname } from "@/src/i18n/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };

  const getCurrentLanguageLabel = () => {
    switch (locale) {
      case "en":
        return "English";
      case "ja":
        return "日本語";
      default:
        return "English";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((currentLocale) => (
          <DropdownMenuItem
            key={currentLocale}
            onClick={() => handleLanguageChange(currentLocale)}
            className={currentLocale === locale ? "font-semibold" : ""}
          >
            {currentLocale === "en" ? "English" : "日本語"}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 