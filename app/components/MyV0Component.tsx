/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NCPPdNrjYGV
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Love your city?</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Enter your home town and nicknames.</p>
      </div>
      <form action="mailto:jaime.sorgente@vercel.com" className="space-y-4" enctype="text/plain" method="post">
        <div className="space-y-2">
          <Label htmlFor="home-town">Home Town</Label>
          <Input id="home-town" name="home-town" placeholder="Enter your home town" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="nicknames">Nicknames</Label>
          <Input id="nicknames" name="nicknames" placeholder="Enter your nicknames separated by commas" required />
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
      <div className="text-center text-zinc-500 dark:text-zinc-400">Your information has been saved successfully.</div>
    </div>
  )
}
