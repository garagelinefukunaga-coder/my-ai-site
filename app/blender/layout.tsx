import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブレンダの実験室 | HAPPY FOREVER 420",
  description:
    "HAPPY FOREVER 420のブレンダの実験室。ハピパン420ダッシュ、ブレンダ占い、車置き場パズル、動画の9:16変換、STEM Mix Labを置いています。",
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
