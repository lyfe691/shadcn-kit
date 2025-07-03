import React from "react";
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"

export default function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = React.use(params);
  setRequestLocale(locale);

  const t = useTranslations('Page');

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-8 px-4 text-center">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button variant="outline">{t('button')}</Button>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>

      <div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="link">{t('hoverMe')}</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>{t('tooltipText')}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </main>
  )
}
