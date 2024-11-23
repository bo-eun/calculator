export default function Button({ children, styleType = "" }) {
  let classes = "text-xl font-light bg-neutral-400 rounded-md";
  if (styleType === "row-2") {
    classes += " row-span-3";
  }
  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
