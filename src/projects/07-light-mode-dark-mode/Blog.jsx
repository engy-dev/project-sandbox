import React, { useContext } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { ThemeContext } from "./context/theme-context";

export default function Blog() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div className="container p-1">
      <Title text={`My Blog with ${theme} Theme `} />
      <span style={{ position: "absolute", top: 10, right: 10 }}>
        <Button
          text={theme === "Dark" ? "Light" : "Dark"}
          btnClass={`${theme === "dark" && "btn-light"} btn-sm`}
          onClick={changeTheme}
        />
      </span>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores velit,
        molestias est, inventore voluptas corrupti, repellat distinctio dolor
        earum et perspiciatis veritatis qui. Facilis dignissimos corporis saepe
        fuga veritatis porro.
      </p>
    </div>
  );
}
