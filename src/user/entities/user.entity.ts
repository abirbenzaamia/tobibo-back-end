import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public nom: string;
  @Column({ type: 'varchar', length: 120 })
  public prenom: string;
  @Column({ type: 'varchar', length: 120 })
  public email: string;
  @Column({ type: 'varchar', length: 120 })
  public num_tel: string;
  @Column({ type: 'varchar', length: 120 })
  public mdp: string;
  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;
  @BeforeInsert() async hashPassword() {
    this.mdp = await bcrypt.hash(this.mdp, 10);
  }

  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
