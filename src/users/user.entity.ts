import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, isEnum, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id : number;

    @ApiProperty()
    @Column()
    phone : number;

    @Length(1, 20)
    @ApiProperty()
    @Column('varchar')
    firstName : string;

    @Length(1, 20)
    @ApiProperty()
    @Column('varchar')
    lastName : string;

    @IsEmail()
    @Length(1, 20)
    @ApiProperty()
    @Column('varchar')
    email : string;

    
    @ApiProperty({enum: ['L','P']})
    @Column()
    gender : string;

}