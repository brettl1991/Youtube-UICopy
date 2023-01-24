import type { LinksFunction } from "@remix-run/react/dist/routeModules";

import buttonStyle from "./style/button.css";

const buttonLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: buttonStyle,
  },
];

const Button = ({ children, twitter, subscribe, join }: any) => {
  return (
    <div data-button>
      <button
        data-twitter={twitter}
        data-subscribe={subscribe}
        data-join={join}
      >
        {children}
      </button>
    </div>
  );
};

export { Button, buttonLink };
