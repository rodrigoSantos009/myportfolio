import { FaArrowUp } from "react-icons/fa";

export function ScrollButton() {
  return (
    <button>
      <a style={{ position: "fixed", bottom: 30, right: "10%" }} href="#">
        <FaArrowUp style={{ fontSize: 30 }} />
      </a>
    </button>
  );
}