/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RqkhVZA61pA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col md:flex-row items-start w-full max-w-md">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Enter your current password and a new password to update your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input id="currentPassword" type="password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Update Password</Button>
        </CardFooter>
      </Card>
      <div className="md:ml-6 mt-6 md:mt-0 rounded-lg overflow-hidden">
        <img
          src="/placeholder.svg"
          alt="Dog"
          width="500"
          height="500"
          className="rounded-lg"
          style={{ aspectRatio: "500/500", objectFit: "cover" }}
        />
      </div>
    </div>
  )
}