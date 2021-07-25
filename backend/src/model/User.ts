import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  nick: string | undefined;

  @Column()
  email: string | undefined;

  @Column()
  password: string | undefined;

}