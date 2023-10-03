/* eslint-disable prettier/prettier */
import Product from 'src/products/entities/product.entity';
import User from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('shops')
class Shop {

    @PrimaryColumn({ unique: true })
    public shop_id: number;

    @Column('varchar')
    public name: string;

    @Column('varchar')
    public city: string;

    @Column()
    public address: string;

    @Column()
    public description: string;

    @Column()
    public avatar: string;

    @Column()
    public banner: string;

    @Column('text', { array: true })
    public categories: string[];

    @ManyToOne(() => User, (user) => user.id)
    owner: User

    @OneToMany(() => Product, (product) => product.product_id)
    products: Product[]

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

}

export default Shop;