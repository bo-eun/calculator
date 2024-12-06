export default function ButtonsContainer({ children }) {
  return (
    <div className="grid grid-cols-4 gap-3 bg-neutral-300 p-5 rounded-b-xl">{children}</div>
  );
}
