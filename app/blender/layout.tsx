import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブレンダの見極め占い | HAPPY FOREVER 420",
  description:
    "HAPPY FOREVER 420のブレンダの見極め占い。生年月日、血液型、気分から今日の流れを見極める無料ミニ占いページです。",
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
