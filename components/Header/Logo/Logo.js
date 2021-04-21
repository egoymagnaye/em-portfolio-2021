import Link from "next/link";

import SVGComp from "../../UI/SVGComp";
import { emLogo } from "../../UI/icons/index";

const Logo = ({ footer }) => {
  let size = footer ? "w-9" : "w-12";

  return (
    <Link href="/">
      <a className="inline-block text-center">
        <span className="sr-only">Egoy Magnaye Portfolio</span>
        <SVGComp
          {...emLogo}
          className={`${size} text-red-em100 dark:text-yellow-em100`}
        />
      </a>
    </Link>
  );
};

export default Logo;
