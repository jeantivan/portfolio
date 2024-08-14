function Footer() {
  return (
    <div className="flex p-4 justify-center bg-background-2 dark:bg-background-1">
      <p className="text-background-12">
        Checkout my{" "}
        <a
          href="https://github.com/jeantivan"
          className="text-primary-9 no-underline hover:underline underline-offset-2"
        >
          Github profile!
        </a>
      </p>
    </div>
  );
}

export default Footer;
