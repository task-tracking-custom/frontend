import { Button, Input, Text, Switch, Checkbox, Link } from "@/shared/ui";

export default function Home() {
  return (
    <div>
      {/* используй компоненты из shared/ui */}
      <Button variant="fill">fill</Button>
      <Button variant="outline">outline</Button>
      <Button variant="text">text</Button>
      <Button variant="ghost">ghost</Button>
      <Button size="sm">sm</Button>
      <Button size="md">md</Button>
      <Button size="lg">lg</Button>

      <Text variant="h1">h1</Text>
      <Text variant="h2">h2</Text>
      <Text variant="h3">h3</Text>
      <Text variant="h4">h4</Text>
      <Text variant="h5">h5</Text>
      <Text variant="h6">h6</Text>
      <Text variant="body">body</Text>
      <Text variant="caption">caption</Text>

      <Switch />
      <Checkbox>Checkbox label</Checkbox>

      <Link variant="default" href="#">
        Default link
      </Link>
      <Link variant="subtle" href="#">
        Subtle link
      </Link>
    </div>
  );
}
