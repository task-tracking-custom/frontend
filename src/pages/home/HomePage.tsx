"use client";

import {
  Button,
  Input,
  Text,
  Switch,
  Checkbox,
  Link,
  Card,
  Badge,
  Avatar,
  Select,
  Textarea,
  Toggle,
  Divider,
  Tooltip,
  Modal,
  Dropdown,
} from "@/shared/ui";
import { useState } from "react";

export const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* Buttons */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button variant="fill">fill</Button>
        <Button variant="outline">outline</Button>
        <Button variant="text">text</Button>
        <Button variant="ghost">ghost</Button>
        <Button size="sm">sm</Button>
        <Button size="md">md</Button>
        <Button size="lg">lg</Button>
      </div>

      {/* Typography */}
      <div>
        <Text variant="h1">h1</Text>
        <Text variant="h2">h2</Text>
        <Text variant="h3">h3</Text>
        <Text variant="h4">h4</Text>
        <Text variant="h5">h5</Text>
        <Text variant="h6">h6</Text>
        <Text variant="body">body</Text>
        <Text variant="caption">caption</Text>
      </div>

      {/* Form Controls */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Switch />
        <Checkbox>Checkbox label</Checkbox>
        <Toggle>Toggle</Toggle>
        <Toggle pressed>Pressed Toggle</Toggle>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "10px" }}>
        <Link variant="default" href="#">
          Default link
        </Link>
        <Link variant="subtle" href="#">
          Subtle link
        </Link>
      </div>

      {/* Cards */}
      <div style={{ display: "flex", gap: "10px" }}>
        <Card>Default Card</Card>
        <Card variant="hover">Hover Card</Card>
      </div>

      {/* Badges */}
      <div style={{ display: "flex", gap: "10px" }}>
        <Badge>Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
      </div>

      {/* Avatars */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Avatar size="sm" fallback="S" />
        <Avatar size="md" fallback="M" />
        <Avatar size="lg" fallback="L" />
      </div>

      {/* Input Variants */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Input variant="fill" placeholder="Fill input" />
        <Input variant="outline" placeholder="Outline input" />
        <Input variant="underline" placeholder="Underline input" />
      </div>

      {/* Input Sizes */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Input size="sm" placeholder="Small" />
        <Input size="md" placeholder="Medium" />
        <Input size="lg" placeholder="Large" />
      </div>

      {/* Form Elements */}
      <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
        <Select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Select>
        <Textarea placeholder="Enter text..." />
      </div>

      <Divider />

      {/* Interactive Elements */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Tooltip content="This is a tooltip">
          <Button>Hover me</Button>
        </Tooltip>

        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>

        <Dropdown
          trigger={<Button>Dropdown</Button>}
          items={[
            { label: "Item 1", onClick: () => console.log("Item 1") },
            { label: "Item 2", onClick: () => console.log("Item 2") },
            { label: "Item 3", onClick: () => console.log("Item 3") },
          ]}
        />
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <Text variant="h3">Modal Title</Text>
        <Text variant="body">This is modal content</Text>
        <Button onClick={() => setModalOpen(false)}>Close</Button>
      </Modal>
    </div>
  );
};
