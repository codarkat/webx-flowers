import { useRouter } from "next/router";

export async function getServerSideProps({ res }) {
  res.writeHead(307, { Location: "/public" });
  res.end();
}

function RedirectPage() {
  return null;
}

export default RedirectPage;
