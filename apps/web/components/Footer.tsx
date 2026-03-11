export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-6 px-6 bg-white">
      <div className="max-w-site mx-auto text-center">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Malachi Muhic
        </p>
      </div>
    </footer>
  );
}
