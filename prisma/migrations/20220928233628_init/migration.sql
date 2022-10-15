-- CreateTable
CREATE TABLE "Compra" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "compradorId" INTEGER NOT NULL,
    "total" DECIMAL NOT NULL,
    CONSTRAINT "Compra_compradorId_fkey" FOREIGN KEY ("compradorId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ItemDaCompra" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigoDoProduto" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco" DECIMAL NOT NULL,
    "compraId" INTEGER NOT NULL,
    CONSTRAINT "ItemDaCompra_codigoDoProduto_fkey" FOREIGN KEY ("codigoDoProduto") REFERENCES "Produto" ("codigoDoProduto") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemDaCompra_compraId_fkey" FOREIGN KEY ("compraId") REFERENCES "Compra" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
