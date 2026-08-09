import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブレンダの実験室 | HAPPY FOREVER 420",
  description:
    "HAPPY FOREVER 420のブレンダの実験室。ミニ占いと、動画を9:16へ端末内で変換するブレンダの携帯道具箱へのリンクを置いています。",
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
