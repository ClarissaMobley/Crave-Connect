import { Button, Link } from "@nextui-org/react"

export default function Home() {
  return (
  <div>
    <h1 className="text-3xl">hello</h1>
    <Button 
    as={Link}
    href="/members"
    color="danger" variant="bordered" startContent={<p>hi</p>}>Click Me</Button>
  </div>
  )
}
