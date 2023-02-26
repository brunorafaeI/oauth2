import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("users")
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar", { name: "name", nullable: true, length: 80 })
  name: string

  @Column("varchar", { name: "email", nullable: false, unique: true, length: 80 })
  email: string

  @Column("varchar", { name: "token", nullable: false, length: 1200 })
  token: string

  @Column("varchar", { name: "picture", nullable: true, length: 300 })
  picture: string

  @Column("timestamp without time zone", { name: "created_at", nullable: true, default: "now" })
  createdAt: Date

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date

  @Column("bit", { name: "status", nullable: true, default: 1 })
  status: number
}