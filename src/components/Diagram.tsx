import Image from "next/image";

type DiagramProps = {
  src: string;
  alt: string;
};

export default function Diagram({ src, alt }: DiagramProps) {
  return (
    <div className="my-10 rounded-xl border border-gray-800 bg-zinc-900 p-4">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={700}
        className="rounded-lg"
      />
      <p className="mt-3 text-center text-xs text-gray-500">
        System Architecture Overview
      </p>
    </div>
  );
}
