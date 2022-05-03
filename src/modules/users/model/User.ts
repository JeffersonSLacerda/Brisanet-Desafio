const { v4: uuidv4 } = require('uuid');

class User {
  id?: string;
  name: string;
  cell: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.created_at = new Date();
    }
    this.updated_at = new Date();
  }
}

export { User };
