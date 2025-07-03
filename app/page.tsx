import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">Button</Button>
      <ModeToggle />
    </div>
  )
}