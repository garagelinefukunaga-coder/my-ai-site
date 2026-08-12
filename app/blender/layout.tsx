import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブレンダの実験室 | HAPPY FOREVER 420",
  description:
    "HAPPY FOREVER 420のブレンダの実験室。ハピパン420ダッシュ、ブレンダ占い、動画の9:16変換、曲の分割やテンポ変更ができるSTEM Mix Labを置いています。",
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
