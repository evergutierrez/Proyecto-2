import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProducts(limit: number, offset: number): string {
    const until: number = Number(limit) + Number(offset);
    return 'productos desde el id ' + offset + ' hasta ' + until;
  }
  getHelloAndName(name: string): string {
    return this.getHello() + 'tu nombre es' +name;
  
  }
  getHello(): String {
    return 'hello World!';
  }

  getName():String{
    return 'Mi nombre es Ever';

  }
}
