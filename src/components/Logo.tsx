import { usePathname, Link } from "@/src/navigation";

type LogoProps = {
  mobile?: boolean;
};
function Logo({ mobile = false }: LogoProps) {
  const pathname = usePathname();
  const text = mobile ? "JT" : "JeanTivan";

  if (pathname === "/") return null;

  return (
    <div className="flex-1 md:flex-initial">
      <Link href={`/`}>
        <p className="text-[1.875rem] md:text-2xl leading-none uppercase font-display">
          {text}
        </p>
      </Link>
    </div>
  );
}

export default Logo;
