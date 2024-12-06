
export default function Result({result}) {

  return (
    <div className="bg-neutral-700 p-6 rounded-t-xl">
      <input type="text" className="w-full bg-neutral-400 p-5 rounded-md text-stone-900 placeholder:text-stone-900 font-bold text-3xl text-right tracking-wider" value={result.expression} readOnly />
    </div>
  );
}
