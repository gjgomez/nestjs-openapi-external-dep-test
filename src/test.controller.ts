import { Body, Controller, Post } from '@nestjs/common';
import { TestCreateRequestDvo } from './TestCreateRequest.dvo';

@Controller('test')
export class TestController {
  constructor() {}

  @Post()
  public async create(
    @Body()
    request: TestCreateRequestDvo,
  ): Promise<void> {
    // nothing to do... just want to test the CLI plugin request metadata is
    // generated properly
    console.log(request);
  }
}
