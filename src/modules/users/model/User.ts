import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  created_at: string;
  updated_at: string;
  admin: boolean;
  name: string;
  email: string;

  constructor() {
    this.admin = false;
    this.id = uuidV4();
  }
}

export { User };
