import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  constructor() {}

  @Get()
  findAll() {
    return 'Hello world';
  }
}

