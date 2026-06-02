import { setRequestLocale } from "next-intl/server";
import RegisterClient from "./RegisterClient";

interface RegisterPageProps {
  params: Promise<{ locale: string }>;
}

export default async function RegisterPage({ params }: RegisterPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <RegisterClient />;
}
