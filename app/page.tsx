import Hero from "./components/Hero";
import Button from "./components/ui/Button";
import Title from "./components/ui/Title";

export default function Page() {
  return (
    <main>
      <Hero />
      <div className="xl:container mx-auto p-6">
        <Title as="h1" className="text-fluid-1">
          Fluid type 1
        </Title>
        <Title as="h2" className="text-fluid-2">
          Fluid type 2
        </Title>
        <Title as="h3" className="text-fluid-3">
          Fluid type 3
        </Title>
        <Button variant="primary">Button primary</Button>
        <Button variant="secondary">Button secondary</Button>
        <Button variant="outline">Button outline</Button>
        <Button variant="link">Button link</Button>
      </div>
    </main>
  );
}
