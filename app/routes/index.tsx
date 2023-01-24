import type { LinksFunction } from "@remix-run/react/dist/routeModules";
import { Button, buttonLink } from "~/components";
import { globalLink } from "~/components/global/style";

export const links: LinksFunction = () => [...buttonLink(), ...globalLink()];

const Youtube = () => {
  return (
    <div>
      <Button subscribe>SUBSCRIBE</Button>
      <Button twitter>Tweet</Button>
      <Button join>JOIN</Button>
    </div>
  );
};

export default Youtube;
