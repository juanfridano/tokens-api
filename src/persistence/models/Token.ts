import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "tokens" })
export class Token {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    ticker: string

    @Column({ nullable: false })
    description: string

}
