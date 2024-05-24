import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FormatServiceBase } from "./base/format.service.base";

@Injectable()
export class FormatService extends FormatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
