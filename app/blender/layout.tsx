import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブレンダのツール置き場 | HAPPY FOREVER 420",
  description:
    "HAPPY FOREVER 420のブレンダのツール置き場。生年月日、血液型、気分から今日の流れを見るミニ占いツールを置いています。",
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
