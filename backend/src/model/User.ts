import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public nick?: string;

  @Column()
  public email?: string;

  @Column()
  public password?: string;

}