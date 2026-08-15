import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブレンダの実験室 | HAPPY FOREVER 420",
  description:
    "HAPPY FOREVER 420のブレンダの実験室。ブレンダ占い、FLOWER CIRCUIT、NUMBER HARVEST、ハピパン420ダッシュ、車置き場パズルなどを置いています。",
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
