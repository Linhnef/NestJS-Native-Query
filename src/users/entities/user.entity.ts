/* eslint-disable prettier/prettier */
import Order from 'src/orders/entities/order.entity';
import Shop from 'src/shops/entities/shop.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
class User {

    @PrimaryColumn({ unique: true })
    public id: number;

    @Column('varchar')
    public username: string;

    @Column('varchar')
    public city: string;

    @Column()
    public description: string;

    @Column()
    public avatar: string;

    @Column()
    public gender: number;

    @Column()
    public DOB: Date;

    @OneToMany(() => Order, (order) => order.order_id)
    orders: Order[]

    @OneToMany(() => Shop, (shop) => shop.shop_id)
    shops: Shop[]

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

}

export default User;