export default function MainContainer({ children }) {
  return (
    <main className="flex flex-col h-screen overflow-auto">{children}</main>
  );
}
