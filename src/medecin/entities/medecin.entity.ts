import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Specialite } from 'src/specialite/entities/specialite.entity';

@Entity()
export class Medecin {
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
  @OneToOne(() => Specialite)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  public specialite: Specialite;
}
