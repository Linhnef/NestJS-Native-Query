/* eslint-disable prettier/prettier */
import Product from 'src/products/entities/product.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('reviews')
class Review {

    @PrimaryColumn({ unique: true })
    public review_id: number;

    @Column('varchar')
    public name: string;

    @Column()
    public description: string;

    @Column("text", { array: true })
    public imgs: string[];

    @ManyToOne(() => Product, (product) => product.product_id)
    product: Product

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

}

export default Review 