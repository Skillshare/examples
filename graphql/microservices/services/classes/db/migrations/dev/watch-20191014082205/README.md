# Migration `watch-20191014082205`

This migration has been generated by Luis Aguilar at 10/14/2019, 8:22:05 AM.
You can check out the [state of the datamodel](./datamodel.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "lift"."Class" (
  "description" TEXT    ,
  "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT ,
  "title" TEXT NOT NULL DEFAULT ''  
);

CREATE TABLE "lift"."Class_lessons" (
  "nodeId" INTEGER    REFERENCES "Class"(id) ON DELETE CASCADE,
  "position" INTEGER NOT NULL   ,
  "value" INTEGER NOT NULL   ,
  PRIMARY KEY ("nodeId","position")
);

CREATE UNIQUE INDEX "lift"."Class.title" ON "Class"("title")
```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration ..watch-20191014082205
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,16 @@
+datasource db {
+  provider = "sqlite"
+  url      = "file:dev.db"
+  output   = "../node_modules/@generated/photon"
+}
+
+generator photon {
+  provider = "photonjs"
+}
+
+model Class {
+  id            Int  @id
+  title         String  @unique
+  description   String?
+  lessons       Int[]
+}
```

## Photon Usage

You can use a specific Photon built for this migration (watch-20191014082205)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/watch-20191014082205'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```
