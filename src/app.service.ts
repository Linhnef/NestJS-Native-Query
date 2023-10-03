/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private readonly connection: Connection) { }

  // async query(): Promise<Employee[]> {
  //   const query = "SELECT * FROM parttime WHERE salary < $1 offset 1 limit 100"
  //   return await this.connection.query<Employee[]>(query, [500]);
  // }

  // async update() {
  //   const query = "UPDATE parttime SET first_name = $1 WHERE salary = $2 AND id = $3"
  //   const rs = await this.connection.query<any[]>(query, ['Viet Name', 499, 500])
  //   console.log(Boolean(rs[1]))
  // }
}
