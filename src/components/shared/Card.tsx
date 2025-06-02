// src/components/Card.tsx
export default function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="card">
      {title && <h3 className="text-lg font-semibold mb-2 text-daredev-text">{title}</h3>}
      {children}
    </section>
  );
}
