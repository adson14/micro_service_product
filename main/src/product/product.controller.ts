import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';
import { title } from 'process';

@Controller('products')
export class ProductController {

  constructor(private productServices: ProductService){}


  @Get()
  async all() {
    return this.productServices.all();
  }

  @EventPattern('product_created')
  async product_created(data: any){
    await this.productServices.create({
      id: data.id,
      title: data.title,
      image: data.image,
      likes: 0
    });

  }


  @EventPattern('product_updated')
  async product_updated(data: any){

    const product =  await this.productServices.findOne(data.id)

    await this.productServices.update(product.id, {
      id: data.id,
      title: data.title,
      image: data.image,
      likes: 0
    });    
  }

  @EventPattern('product_deleted')
  async product_deleted(id: string){
    await this.productServices.delete(id);
  }

}
