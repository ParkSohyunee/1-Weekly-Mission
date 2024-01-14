import { DOMAIN_URL } from "@/common/constants";
import { SubmitFormData } from "@/types/form";

const headers = { "Content-Type": "application/json; charset=utf-8" };

export async function signinUser(userData: SubmitFormData) {
  const res = await fetch(`${DOMAIN_URL}/auth/sign-in`, {
    method: "POST",
    headers,
    body: JSON.stringify(userData),
  });
  return await res.json();
}