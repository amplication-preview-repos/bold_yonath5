import * as graphql from "@nestjs/graphql";
import { FormatResolverBase } from "./base/format.resolver.base";
import { Format } from "./base/Format";
import { FormatService } from "./format.service";

@graphql.Resolver(() => Format)
export class FormatResolver extends FormatResolverBase {
  constructor(protected readonly service: FormatService) {
    super(service);
  }
}
