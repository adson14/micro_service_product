import { Injectable, Post } from '@nestjs/common';
import Product from './product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) 
  {

  }

  async all(): Promise<Product[]>{
    return this.productRepository.find();
  }

  @Post()
  async create(product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({ where: { id } });
  }

  async update(id: number, product): Promise<any> {
    return this.productRepository.update(id, product);
  }

  async remove(id: number): Promise<any> {
    return this.productRepository.delete(id);
  }
}
