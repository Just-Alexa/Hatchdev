import { Store, User, createAdminUser } from "./project";

const kingsley = createAdminUser(
  "Kingsley",
  "Ihemelandu",
  "kijuchihe",
  "kijuchihe@gmail.com",
  "YourPapa2024"
);

const store = new Store(kingsley);
