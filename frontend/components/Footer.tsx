import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="bg-green-500">
      <div className="container mx-auto">footer</div>
    </footer>
  );
};

export default Footer;
