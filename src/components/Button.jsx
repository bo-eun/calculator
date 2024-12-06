export default function Button({ children, styleType = "", handleClick, ...props }) {
  let classes = "min-h-16 text-xl font-light bg-neutral-400 rounded-md";
  if (styleType === "row-2") {
    classes += " row-start-4 row-end-6 col-start-4";
  };

  return (
    <button type="button" className={classes} onClick={handleClick} {...props}>
      { children }
    </button>
  );
}
