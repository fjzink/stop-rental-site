export default function Section({ children, title }) {
  return (
    <section className="my-4 border-l-2 p-2">
      <h2 className="p-2 text-gray-600 text-2xl border-b-2">{title}</h2>
      {children}
    </section>
  );
}
