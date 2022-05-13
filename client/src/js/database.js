import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // console.error("putDb not implemented");
  console.log("PUT request update jateDB");
  const jateDB = await openDB("jate", 1);
  const tx = jateDB.transaction("jate", "readwrite");
  const objStore = tx.objectStore("jate");
  const req = objStore.put({ value: content });
  const res = await req;
  console.log("data saved to jateDB", res);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // console.error("getDb not implemented");
  console.log("Getting data from jateDB");
  const jateDB = await openDB("jate", 1);
  const tx = jateDB.transaction("jate", "readwrite");
  const objStore = tx.objectStore("jate");
  const req = objStore.getAll();
  const res = await req;
  console.log("data saved to jateDB", res);
};

initdb();
