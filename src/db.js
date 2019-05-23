import Dexie from 'dexie';

const db = new Dexie('DB');
db.version(1).stores({ users: '++id' });
db.version(2).stores({ files: '++id' });

export default db;