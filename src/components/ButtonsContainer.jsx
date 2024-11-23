export default function ButtonsContainer({ children }) {
  return (
    <div className="grid grid-cols-5 gap-2 bg-neutral-300 p-5">{children}</div>
  );
}
