import { Module } from "@nestjs/common";
import { FormatModuleBase } from "./base/format.module.base";
import { FormatService } from "./format.service";
import { FormatController } from "./format.controller";
import { FormatResolver } from "./format.resolver";

@Module({
  imports: [FormatModuleBase],
  controllers: [FormatController],
  providers: [FormatService, FormatResolver],
  exports: [FormatService],
})
export class FormatModule {}
