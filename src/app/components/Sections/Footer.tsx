import React from "react";
import { styles } from "@/app/utils/styles";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center pb-10">
      <div className={`${styles.footerPadding} w-full`}>
        <hr className="my-4 mx-auto border-secondary" />
      </div>
      <p className={`${styles.footerText} text-secondary`}>
        &copy; {new Date().getFullYear()} Jay Lin. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
