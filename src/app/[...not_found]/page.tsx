import { HiOutlineEmojiSad } from "react-icons/hi";

export default function Page() {
  return (
    <section className="h-[50vh] flex flex-col items-center justify-center">
      <h1 className="font-bold italic text-2xl text-headings flex items-center justify-center gap-2">
        404 Not Found <HiOutlineEmojiSad className="text-3xl text-yellow-500" />
      </h1>
      <p>The page you were looking for does not exists</p>
    </section>
  );
}
