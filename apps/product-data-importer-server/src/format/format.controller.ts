import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FormatService } from "./format.service";
import { FormatControllerBase } from "./base/format.controller.base";

@swagger.ApiTags("formats")
@common.Controller("formats")
export class FormatController extends FormatControllerBase {
  constructor(protected readonly service: FormatService) {
    super(service);
  }
}
