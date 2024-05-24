/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Format as PrismaFormat,
  Product as PrismaProduct,
} from "@prisma/client";

export class FormatServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FormatCountArgs, "select">): Promise<number> {
    return this.prisma.format.count(args);
  }

  async formats<T extends Prisma.FormatFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FormatFindManyArgs>
  ): Promise<PrismaFormat[]> {
    return this.prisma.format.findMany<Prisma.FormatFindManyArgs>(args);
  }
  async format<T extends Prisma.FormatFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FormatFindUniqueArgs>
  ): Promise<PrismaFormat | null> {
    return this.prisma.format.findUnique(args);
  }
  async createFormat<T extends Prisma.FormatCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FormatCreateArgs>
  ): Promise<PrismaFormat> {
    return this.prisma.format.create<T>(args);
  }
  async updateFormat<T extends Prisma.FormatUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FormatUpdateArgs>
  ): Promise<PrismaFormat> {
    return this.prisma.format.update<T>(args);
  }
  async deleteFormat<T extends Prisma.FormatDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FormatDeleteArgs>
  ): Promise<PrismaFormat> {
    return this.prisma.format.delete(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<PrismaProduct[]> {
    return this.prisma.format
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .products(args);
  }
}
