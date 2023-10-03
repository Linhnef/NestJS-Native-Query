/* eslint-disable prettier/prettier */
import Review from 'src/reviews/entities/review.entity';
import Shop from 'src/shops/entities/shop.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('product')
class Product {

    @PrimaryColumn({ unique: true })
    public product_id: number;

    @Column('varchar')
    public name: string;

    @Column()
    public description: string;

    @Column()
    public price: number;

    @Column("text", { array: true })
    public imgs: string[];

    @Column()
    public range_key: string;

    @OneToOne(() => Shop, (shop) => shop.shop_id)
    shops: Shop

    @ManyToOne(() => Shop, (shop) => shop.shop_id)
    owner: Shop

    @OneToMany(() => Review, (review) => review.review_id)
    reviews: Review[]

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

}

export default Product 