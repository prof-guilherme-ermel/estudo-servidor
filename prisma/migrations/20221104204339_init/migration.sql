-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ItemDaCompra" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigoDoProduto" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco" DECIMAL NOT NULL,
    "compraId" INTEGER NOT NULL,
    CONSTRAINT "ItemDaCompra_codigoDoProduto_fkey" FOREIGN KEY ("codigoDoProduto") REFERENCES "Produto" ("codigoDoProduto") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemDaCompra_compraId_fkey" FOREIGN KEY ("compraId") REFERENCES "Compra" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ItemDaCompra" ("codigoDoProduto", "compraId", "id", "preco", "quantidade") SELECT "codigoDoProduto", "compraId", "id", "preco", "quantidade" FROM "ItemDaCompra";
DROP TABLE "ItemDaCompra";
ALTER TABLE "new_ItemDaCompra" RENAME TO "ItemDaCompra";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
