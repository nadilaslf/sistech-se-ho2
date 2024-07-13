import { useRouter } from "next/router";
import { Feature } from "./Feature";

function FeatureContainer() {
  const router = useRouter();

  const featureItems = [
    {
      banner: "/images/img-kelas.jpg",
      title: "Kelas",
      description:
        "700+ video yang membahas konsep secara ringkas dan menyeluruh",
      alt: "Kelas Illustration",
      onClick: () => alert("Kelas Clicked"),
    },
    {
      banner: "/images/bank-soal.jpg",
      title: "Bank Soal",
      description:
        "Soal ujian asli dari berbagai universitas, beserta pembahasannya",
      alt: "Bank Soal Illustration",
      onClick: () => alert("Bank Soal Clicked"),
    },
    {
      banner: "/images/promo.jpg",
      title: "Promo",
      description:
        "Tersedia berbagai paket dengan materi yang lengkap",
      alt: "Promo Illustration",
      onClick: () => alert("Promo Clicked"),
    },
  ];
  return <Feature 
  featureItems = {featureItems} 
  />;
}

export { FeatureContainer };