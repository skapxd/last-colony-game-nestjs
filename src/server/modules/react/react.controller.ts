import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

import { ReactService } from './react.service';

@Controller('react')
export class ReactController {
  constructor(private readonly reactService: ReactService) {}

  @Get()
  render(@Res() res: Response) {
    const stream = this.reactService.render();
    stream.pipe(res);
  }
}
