const phone = "+49 162 7233 681";
const email = "info@kh-reinigungsservice.de";


export const contact = {
  company: "K&H Gebäudereinigung",

  email,
  emailHref: `mailto:${email}`,

  phone,
  phoneHref: `tel:${phone.replace(/[^\d+]/g, "")}`,

} as const;