import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブレンダのツール置き場 | HAPPY FOREVER 420",
  description:
    "HAPPY FOREVER 420のブレンダのツール置き場。ミニ占い、音楽分離、画像直しなどの試作ツールを置いていくページです。",
  alternates: {
    canonical: "/blender",
  },
};

export default function BlenderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
