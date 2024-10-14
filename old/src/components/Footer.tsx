function Footer() {
  return (
    <div className="flex p-4 justify-center bg-background-2 dark:bg-background-1">
      <p className="text-background-12">
        Echa un vistazo a mi{" "}
        <a
          href="https://github.com/jeantivan"
          className="text-primary-11 no-underline hover:underline underline-offset-2"
        >
          perfil de Github!
        </a>
      </p>
    </div>
  );
}

export default Footer;
