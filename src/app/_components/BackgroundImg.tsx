import Image from "next/image";
import desktopBgImage from "../../../public/bg.jpg";

export default function BackgroundImg({ src = "", mobileOnlySrc = "" }) {
  return (
    <>
      <div>
        <Image
          src={desktopBgImage}
          alt="Add desc of bg."
          role="image"
          placeholder="blur"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
            zIndex: -1,
          }}
          className={`${mobileOnlySrc !== "" ? "hidden lg:block" : ""}`}
        />
      </div>
    </>
  );
}
