import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  addressVN: string;

  @Column()
  phone: string | number;

  @Column()
  mail: string;

  @Column()
  facebook: string;

  @Column()
  instagram: string;
}
