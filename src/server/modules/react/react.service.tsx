import { Injectable } from '@nestjs/common';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { App } from './react.view';

@Injectable()
export class ReactService {
  render() {
    const stream = ReactDOMServer.renderToPipeableStream(<App />);

    return stream;
  }
}
