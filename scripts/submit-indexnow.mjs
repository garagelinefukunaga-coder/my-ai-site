const host = "happy-forever.vercel.app";
const key = "B64A3C1174E645709EDB713300A1CCA3";
const keyLocation = `https://${host}/${key}.txt`;
const urlList = [
  `https://${host}/`,
  `https://${host}/music`,
  `https://${host}/music/album`,
  `https://${host}/blender`,
  `https://${host}/merry`,
  `https://${host}/en`,
];

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify({
    host,
    key,
    keyLocation,
    urlList,
  }),
});

if (!response.ok) {
  const responseBody = await response.text();
  throw new Error(
    `IndexNow submission failed (${response.status}): ${responseBody}`,
  );
}

console.log(`IndexNow accepted ${urlList.length} URLs (${response.status}).`);
