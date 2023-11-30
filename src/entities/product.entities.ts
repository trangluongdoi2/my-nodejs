import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductImage } from './productImage.entities';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nameBrand: string;

  @OneToMany(() => ProductImage, (image) => image.product)
  @JoinColumn()
  images: ProductImage[];
}
