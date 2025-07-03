import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-8 px-4 text-center">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button variant="outline">Button</Button>
        <ModeToggle />
      </div>

      <div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="link">Hover me!</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>
              Yes, the tooltip provider is already in{" "}
              <code>app/layout.tsx</code>
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
    </main>
  )
}
