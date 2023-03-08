import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Footer() {
  return (
    <div>
      <footer>
        <FontAwesomeIcon icon={solid("user-secret")} />
        <FontAwesomeIcon icon={regular("coffee")} />
        <FontAwesomeIcon icon={icon({ name: "coffee", style: "solid" })} />
        <FontAwesomeIcon icon={brands("twitter")} />
      </footer>
    </div>
  );
}
