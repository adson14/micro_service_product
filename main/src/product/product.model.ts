import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProdeudctDocument = Product & Document;

@Schema()
export class Product{

  @Prop()
  id: string;

  @Prop()
  title : string;

  @Prop()
  image: string;

  @Prop()
  likes: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product)