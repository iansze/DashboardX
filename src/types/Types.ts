export type ThemeMode = "light" | "dark";

export type FormFields = "firstName" | "lastName" | "email" | "contact" | "address1" | "address2";

export type CalendarEvent = {
  id: string;
  title: string;
  start?: Date | null;
};
