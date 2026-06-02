import React from "react";

function MainButton({
  children,
  onClick,
  variant = "primary",
  className = "",
}) {
  const baseStyle = `
    px-6 sm:px-8 py-3 sm:py-4
    rounded-xl
    font-medium
    transition duration-300
    active:scale-95
  `;

  const variants = {
    primary: `
      text-white
      bg-gradient-to-b from-[#34256f] to-[#09021d]
      hover:scale-105
    `,

    ghost: `
      text-[#09021d]
      bg-transparent
      border border-[#09021d]
      hover:bg-[#09021d]
      hover:text-white
    `,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default MainButton;