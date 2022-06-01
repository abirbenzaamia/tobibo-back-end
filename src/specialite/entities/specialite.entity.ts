import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Specialite {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public nom: string;
  @Column({ type: 'varchar', length: 120 })
  public description: string;
}
