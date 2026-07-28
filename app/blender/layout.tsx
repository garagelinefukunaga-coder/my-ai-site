import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブレンダの実験室 | HAPPY FOREVER 420",
  description:
    "HAPPY FOREVER 420のブレンダの実験室。ミニ占い、音楽分離、画像直しなどの秘密道具を試作していくページです。",
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
