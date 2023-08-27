import React from "react";

function SecondaryButton({ title, onClick }) {
  return (

      <button type="button" class="cursor-pointer hover:border-opacity-80 hover:text-opacity-60 text-secondary-blue-dark text-sm py-2 px-6 rounded-3xl border border-secondary-blue" onClick={onClick} >
        {title}
      </button>

  );
}

export default SecondaryButton;