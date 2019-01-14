import { BaseEntity } from '../BaseEntity';
import { FilterQuery } from './DatabaseDriver';
import { IPrimaryKey } from '..';
import { NamingStrategy } from '../naming-strategy/NamingStrategy';

export interface IDatabaseDriver {

  /**
   * Establishes connection to database
   */
  connect(): Promise<void>;

  /**
   * Are we connected to the database
   */
  isConnected(): Promise<boolean>;

  /**
   * Closes the database connection (aka disconnect)
   */
  close(force: boolean): Promise<void>;

  /**
   * Finds selection of entities
   */
  find<T extends BaseEntity>(entityName: string, where: FilterQuery<T>, populate?: string[], orderBy?: { [p: string]: 1 | -1 }, limit?: number, offset?: number): Promise<T[]>;

  /**
   * Finds single entity (table row, document)
   */
  findOne<T extends BaseEntity>(entityName: string, where: FilterQuery<T> | string, populate?: string[]): Promise<T>;

  nativeInsert(entityName: string, data: any): Promise<IPrimaryKey>;

  nativeUpdate(entityName: string, where: FilterQuery<BaseEntity> | IPrimaryKey, data: any): Promise<number>;

  nativeDelete(entityName: string, where: FilterQuery<BaseEntity> | IPrimaryKey): Promise<number>;

  aggregate(entityName: string, pipeline: any[]): Promise<any[]>;

  count(entityName: string, where: any): Promise<number>;

  getTableName(entityName: string): string;

  /**
   * Returns default client url for given driver (e.g. mongodb://localhost:27017 for mongodb)
   */
  getDefaultClientUrl(): string;

  getDefaultNamingStrategy(): { new (): NamingStrategy };

  /**
   * Begins a transaction (if supported)
   */
  begin(savepoint?: string): Promise<void>;

  /**
   * Commits statements in a transaction
   */
  commit(savepoint?: string): Promise<void>;

  /**
   * Rollback changes in a transaction
   */
  rollback(savepoint?: string): Promise<void>;

  /**
   * Normalizes primary key wrapper to string value (e.g. mongodb's ObjectID)
   */
  normalizePrimaryKey(where: any): string;

  /**
   * NoSQL databases do require pivot table for M:N
   */
  usesPivotTable(): boolean;

}
