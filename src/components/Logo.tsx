import Link from "next/link";

type LogoProps = {
  lng: string;
  mobile?: boolean;
};
function Logo({ lng, mobile = false }: LogoProps) {
  const text = mobile ? "JT" : "JeanTivan";

  return (
    <div className="flex-1 md:flex-initial">
      <Link href={`/${lng}`}>
        <p className="text-[1.875rem] md:text-2xl leading-none uppercase font-display">
          {text}
        </p>
      </Link>
    </div>
  );
}

export default Logo;
