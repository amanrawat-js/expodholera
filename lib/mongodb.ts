import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable."
  );
}

declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

const cache = global._mongooseCache ?? {
  conn: null,
  promise: null,
};

global._mongooseCache = cache;

export async function connectDB(): Promise<typeof mongoose> {
  if (cache.conn) {
    return cache.conn;
  }

  if (!cache.promise) {
    console.log("🔄 Connecting to MongoDB...");
    console.log(
      "Mongo URI:",
      MONGODB_URI.replace(/\/\/([^:]+):([^@]+)@/, "//****:****@")
    );

    cache.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
        serverSelectionTimeoutMS: 10000,
        connectTimeoutMS: 10000,
      })
      .then((mongooseInstance) => {
        console.log("✅ MongoDB Connected Successfully");
        return mongooseInstance;
      })
      .catch((err: any) => {
        console.error("\n========== MONGODB CONNECTION ERROR ==========");
        console.error("Name:", err.name);
        console.error("Message:", err.message);

        if (err.reason) {
          console.error("\nReason:");
          console.dir(err.reason, { depth: null });
        }

        if (err.cause) {
          console.error("\nCause:");
          console.dir(err.cause, { depth: null });
        }

        console.error("\nComplete Error:");
        console.dir(err, { depth: null });

        console.error("=============================================\n");

        cache.promise = null;
        throw err;
      });
  }

  cache.conn = await cache.promise;
  return cache.conn;
}