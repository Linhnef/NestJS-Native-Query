/* eslint-disable prettier/prettier */
import User from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('orders')
class Order {

    @PrimaryColumn({ unique: true })
    public order_id: number;

    @Column('varchar')
    public city: string;

    @Column()
    public address: string;

    @Column()
    public duration_date: Date;

    @Column()
    public shipping_fee: number;

    @Column()
    public shipping_id: string;

    @Column()
    public note: string;

    @ManyToOne(() => User, (user) => user.id)
    owner: User

    @Column("text", { array: true })
    products: string[]

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

}

export default Order;