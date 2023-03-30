import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Contact extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;

    @Column({
        allowNull: false
    })
    name: string;

    @Column({
        allowNull: true,
        unique: true
    })
    phone: string;

    @Column({
        allowNull: true,
        unique: true
    })
    email: string;

    @Column({
        allowNull: false
    })
    isActive: boolean;

    @Column({
        allowNull: false,
        defaultValue: 1
    })
    points: number;

    @Column({
        allowNull: false,
        defaultValue: false
    })
    isVerified: boolean;
}