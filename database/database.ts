import Realm from 'realm';
import { MessageSchema } from './schemas';

class Database {
  private static instance: Realm;

  static getRealmInstance(): Realm {
    if (!this.instance) {
      this.instance = new Realm({ schema: [MessageSchema] });
    }
    return this.instance;
  }

  static close(): void {
    if (this.instance) {
      this.instance.close();
    }
  }

}

export default Database;
