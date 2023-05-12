import Link from "next/link";

function Logo() {
  return (
    <div className="flex-1 md:flex-initial text-3xl md:text-2xl text-gold-12">
      <Link href="/">
        JeanTivan
        <span className="text-primary-9">.</span>
        dev
      </Link>
    </div>
  );
}

export default Logo;
