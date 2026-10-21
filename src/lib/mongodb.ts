import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

/** MONGODB_URI 가 없으면 null — 클릭 수 기능만 비활성화되고 페이지는 정상 동작합니다. */
function getClient(): Promise<MongoClient> | null {
  if (!uri) return null;
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  return global._mongoClientPromise;
}

export async function getClicks() {
  const client = getClient();
  if (!client) return null;
  const db = (await client).db(process.env.MONGODB_DB ?? "linknamu");
  return db.collection<{ _id: string; count: number }>("clicks");
}
