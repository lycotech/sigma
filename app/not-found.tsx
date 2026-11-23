import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="This page has moved or doesn't exist" lead="Let's get you back to something useful.">
      <Button href="/">Back to home</Button>
      <Button href="/contact/" variant="outline-light">Contact us</Button>
    </PageHero>
  );
}
