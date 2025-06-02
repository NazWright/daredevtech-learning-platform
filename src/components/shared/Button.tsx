// src/components/Button.tsx
export default function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const styles = {
    primary: "bg-daredev-accent text-white hover:bg-blue-500",
    ghost: "bg-gray-800 text-white hover:bg-gray-700",
  };

  return <button className={`px-4 py-2 rounded ${styles[variant]}`}>{children}</button>;
}
