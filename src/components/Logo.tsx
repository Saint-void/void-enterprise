interface LogoProps {
  className?: string;
}

export default function Logo({
  className = "w-auto h-8",
}: LogoProps) {
  return (
    <>
      <img
        src="./assets/images/lightModeVoid.png"
        alt="Void Enterprises"
        className={`${className} block dark:hidden`}
      />

      <img
        src="./assets/images/darkModeVoid.png"
        alt="Void Enterprises"
        className={`${className} hidden dark:block`}
      />
    </>
  );
}