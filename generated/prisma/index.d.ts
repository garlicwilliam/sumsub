
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserKycStatus
 * 
 */
export type UserKycStatus = $Result.DefaultSelection<Prisma.$UserKycStatusPayload>
/**
 * Model UserKycLogs
 * 
 */
export type UserKycLogs = $Result.DefaultSelection<Prisma.$UserKycLogsPayload>
/**
 * Model UserEnv
 * 
 */
export type UserEnv = $Result.DefaultSelection<Prisma.$UserEnvPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more UserKycStatuses
 * const userKycStatuses = await prisma.userKycStatus.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more UserKycStatuses
   * const userKycStatuses = await prisma.userKycStatus.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userKycStatus`: Exposes CRUD operations for the **UserKycStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserKycStatuses
    * const userKycStatuses = await prisma.userKycStatus.findMany()
    * ```
    */
  get userKycStatus(): Prisma.UserKycStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userKycLogs`: Exposes CRUD operations for the **UserKycLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserKycLogs
    * const userKycLogs = await prisma.userKycLogs.findMany()
    * ```
    */
  get userKycLogs(): Prisma.UserKycLogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userEnv`: Exposes CRUD operations for the **UserEnv** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserEnvs
    * const userEnvs = await prisma.userEnv.findMany()
    * ```
    */
  get userEnv(): Prisma.UserEnvDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserKycStatus: 'UserKycStatus',
    UserKycLogs: 'UserKycLogs',
    UserEnv: 'UserEnv'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userKycStatus" | "userKycLogs" | "userEnv"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserKycStatus: {
        payload: Prisma.$UserKycStatusPayload<ExtArgs>
        fields: Prisma.UserKycStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserKycStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserKycStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycStatusPayload>
          }
          findFirst: {
            args: Prisma.UserKycStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserKycStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycStatusPayload>
          }
          findMany: {
            args: Prisma.UserKycStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycStatusPayload>[]
          }
          create: {
            args: Prisma.UserKycStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycStatusPayload>
          }
          createMany: {
            args: Prisma.UserKycStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserKycStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycStatusPayload>
          }
          update: {
            args: Prisma.UserKycStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycStatusPayload>
          }
          deleteMany: {
            args: Prisma.UserKycStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserKycStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserKycStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycStatusPayload>
          }
          aggregate: {
            args: Prisma.UserKycStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserKycStatus>
          }
          groupBy: {
            args: Prisma.UserKycStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserKycStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserKycStatusCountArgs<ExtArgs>
            result: $Utils.Optional<UserKycStatusCountAggregateOutputType> | number
          }
        }
      }
      UserKycLogs: {
        payload: Prisma.$UserKycLogsPayload<ExtArgs>
        fields: Prisma.UserKycLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserKycLogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserKycLogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycLogsPayload>
          }
          findFirst: {
            args: Prisma.UserKycLogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserKycLogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycLogsPayload>
          }
          findMany: {
            args: Prisma.UserKycLogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycLogsPayload>[]
          }
          create: {
            args: Prisma.UserKycLogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycLogsPayload>
          }
          createMany: {
            args: Prisma.UserKycLogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserKycLogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycLogsPayload>
          }
          update: {
            args: Prisma.UserKycLogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycLogsPayload>
          }
          deleteMany: {
            args: Prisma.UserKycLogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserKycLogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserKycLogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycLogsPayload>
          }
          aggregate: {
            args: Prisma.UserKycLogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserKycLogs>
          }
          groupBy: {
            args: Prisma.UserKycLogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserKycLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserKycLogsCountArgs<ExtArgs>
            result: $Utils.Optional<UserKycLogsCountAggregateOutputType> | number
          }
        }
      }
      UserEnv: {
        payload: Prisma.$UserEnvPayload<ExtArgs>
        fields: Prisma.UserEnvFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserEnvFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEnvPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserEnvFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEnvPayload>
          }
          findFirst: {
            args: Prisma.UserEnvFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEnvPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserEnvFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEnvPayload>
          }
          findMany: {
            args: Prisma.UserEnvFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEnvPayload>[]
          }
          create: {
            args: Prisma.UserEnvCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEnvPayload>
          }
          createMany: {
            args: Prisma.UserEnvCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserEnvDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEnvPayload>
          }
          update: {
            args: Prisma.UserEnvUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEnvPayload>
          }
          deleteMany: {
            args: Prisma.UserEnvDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserEnvUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserEnvUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEnvPayload>
          }
          aggregate: {
            args: Prisma.UserEnvAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserEnv>
          }
          groupBy: {
            args: Prisma.UserEnvGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserEnvGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserEnvCountArgs<ExtArgs>
            result: $Utils.Optional<UserEnvCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    userKycStatus?: UserKycStatusOmit
    userKycLogs?: UserKycLogsOmit
    userEnv?: UserEnvOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model UserKycStatus
   */

  export type AggregateUserKycStatus = {
    _count: UserKycStatusCountAggregateOutputType | null
    _avg: UserKycStatusAvgAggregateOutputType | null
    _sum: UserKycStatusSumAggregateOutputType | null
    _min: UserKycStatusMinAggregateOutputType | null
    _max: UserKycStatusMaxAggregateOutputType | null
  }

  export type UserKycStatusAvgAggregateOutputType = {
    id: number | null
    updatedAt: number | null
    createdAt: number | null
  }

  export type UserKycStatusSumAggregateOutputType = {
    id: bigint | null
    updatedAt: bigint | null
    createdAt: bigint | null
  }

  export type UserKycStatusMinAggregateOutputType = {
    id: bigint | null
    userAddress: string | null
    env: string | null
    applicantId: string | null
    levelName: string | null
    reviewStatus: string | null
    reviewAnswer: string | null
    rejectedType: string | null
    updatedAt: bigint | null
    createdAt: bigint | null
  }

  export type UserKycStatusMaxAggregateOutputType = {
    id: bigint | null
    userAddress: string | null
    env: string | null
    applicantId: string | null
    levelName: string | null
    reviewStatus: string | null
    reviewAnswer: string | null
    rejectedType: string | null
    updatedAt: bigint | null
    createdAt: bigint | null
  }

  export type UserKycStatusCountAggregateOutputType = {
    id: number
    userAddress: number
    env: number
    applicantId: number
    levelName: number
    reviewStatus: number
    reviewAnswer: number
    rejectedType: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type UserKycStatusAvgAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserKycStatusSumAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserKycStatusMinAggregateInputType = {
    id?: true
    userAddress?: true
    env?: true
    applicantId?: true
    levelName?: true
    reviewStatus?: true
    reviewAnswer?: true
    rejectedType?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserKycStatusMaxAggregateInputType = {
    id?: true
    userAddress?: true
    env?: true
    applicantId?: true
    levelName?: true
    reviewStatus?: true
    reviewAnswer?: true
    rejectedType?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserKycStatusCountAggregateInputType = {
    id?: true
    userAddress?: true
    env?: true
    applicantId?: true
    levelName?: true
    reviewStatus?: true
    reviewAnswer?: true
    rejectedType?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserKycStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserKycStatus to aggregate.
     */
    where?: UserKycStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKycStatuses to fetch.
     */
    orderBy?: UserKycStatusOrderByWithRelationInput | UserKycStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserKycStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKycStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKycStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserKycStatuses
    **/
    _count?: true | UserKycStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserKycStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserKycStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserKycStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserKycStatusMaxAggregateInputType
  }

  export type GetUserKycStatusAggregateType<T extends UserKycStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateUserKycStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserKycStatus[P]>
      : GetScalarType<T[P], AggregateUserKycStatus[P]>
  }




  export type UserKycStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserKycStatusWhereInput
    orderBy?: UserKycStatusOrderByWithAggregationInput | UserKycStatusOrderByWithAggregationInput[]
    by: UserKycStatusScalarFieldEnum[] | UserKycStatusScalarFieldEnum
    having?: UserKycStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserKycStatusCountAggregateInputType | true
    _avg?: UserKycStatusAvgAggregateInputType
    _sum?: UserKycStatusSumAggregateInputType
    _min?: UserKycStatusMinAggregateInputType
    _max?: UserKycStatusMaxAggregateInputType
  }

  export type UserKycStatusGroupByOutputType = {
    id: bigint
    userAddress: string
    env: string
    applicantId: string
    levelName: string
    reviewStatus: string
    reviewAnswer: string
    rejectedType: string
    updatedAt: bigint
    createdAt: bigint
    _count: UserKycStatusCountAggregateOutputType | null
    _avg: UserKycStatusAvgAggregateOutputType | null
    _sum: UserKycStatusSumAggregateOutputType | null
    _min: UserKycStatusMinAggregateOutputType | null
    _max: UserKycStatusMaxAggregateOutputType | null
  }

  type GetUserKycStatusGroupByPayload<T extends UserKycStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserKycStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserKycStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserKycStatusGroupByOutputType[P]>
            : GetScalarType<T[P], UserKycStatusGroupByOutputType[P]>
        }
      >
    >


  export type UserKycStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAddress?: boolean
    env?: boolean
    applicantId?: boolean
    levelName?: boolean
    reviewStatus?: boolean
    reviewAnswer?: boolean
    rejectedType?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userKycStatus"]>



  export type UserKycStatusSelectScalar = {
    id?: boolean
    userAddress?: boolean
    env?: boolean
    applicantId?: boolean
    levelName?: boolean
    reviewStatus?: boolean
    reviewAnswer?: boolean
    rejectedType?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type UserKycStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userAddress" | "env" | "applicantId" | "levelName" | "reviewStatus" | "reviewAnswer" | "rejectedType" | "updatedAt" | "createdAt", ExtArgs["result"]["userKycStatus"]>

  export type $UserKycStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserKycStatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userAddress: string
      env: string
      applicantId: string
      levelName: string
      reviewStatus: string
      reviewAnswer: string
      rejectedType: string
      updatedAt: bigint
      createdAt: bigint
    }, ExtArgs["result"]["userKycStatus"]>
    composites: {}
  }

  type UserKycStatusGetPayload<S extends boolean | null | undefined | UserKycStatusDefaultArgs> = $Result.GetResult<Prisma.$UserKycStatusPayload, S>

  type UserKycStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserKycStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserKycStatusCountAggregateInputType | true
    }

  export interface UserKycStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserKycStatus'], meta: { name: 'UserKycStatus' } }
    /**
     * Find zero or one UserKycStatus that matches the filter.
     * @param {UserKycStatusFindUniqueArgs} args - Arguments to find a UserKycStatus
     * @example
     * // Get one UserKycStatus
     * const userKycStatus = await prisma.userKycStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserKycStatusFindUniqueArgs>(args: SelectSubset<T, UserKycStatusFindUniqueArgs<ExtArgs>>): Prisma__UserKycStatusClient<$Result.GetResult<Prisma.$UserKycStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserKycStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserKycStatusFindUniqueOrThrowArgs} args - Arguments to find a UserKycStatus
     * @example
     * // Get one UserKycStatus
     * const userKycStatus = await prisma.userKycStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserKycStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, UserKycStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserKycStatusClient<$Result.GetResult<Prisma.$UserKycStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserKycStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycStatusFindFirstArgs} args - Arguments to find a UserKycStatus
     * @example
     * // Get one UserKycStatus
     * const userKycStatus = await prisma.userKycStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserKycStatusFindFirstArgs>(args?: SelectSubset<T, UserKycStatusFindFirstArgs<ExtArgs>>): Prisma__UserKycStatusClient<$Result.GetResult<Prisma.$UserKycStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserKycStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycStatusFindFirstOrThrowArgs} args - Arguments to find a UserKycStatus
     * @example
     * // Get one UserKycStatus
     * const userKycStatus = await prisma.userKycStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserKycStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, UserKycStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserKycStatusClient<$Result.GetResult<Prisma.$UserKycStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserKycStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserKycStatuses
     * const userKycStatuses = await prisma.userKycStatus.findMany()
     * 
     * // Get first 10 UserKycStatuses
     * const userKycStatuses = await prisma.userKycStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userKycStatusWithIdOnly = await prisma.userKycStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserKycStatusFindManyArgs>(args?: SelectSubset<T, UserKycStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserKycStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserKycStatus.
     * @param {UserKycStatusCreateArgs} args - Arguments to create a UserKycStatus.
     * @example
     * // Create one UserKycStatus
     * const UserKycStatus = await prisma.userKycStatus.create({
     *   data: {
     *     // ... data to create a UserKycStatus
     *   }
     * })
     * 
     */
    create<T extends UserKycStatusCreateArgs>(args: SelectSubset<T, UserKycStatusCreateArgs<ExtArgs>>): Prisma__UserKycStatusClient<$Result.GetResult<Prisma.$UserKycStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserKycStatuses.
     * @param {UserKycStatusCreateManyArgs} args - Arguments to create many UserKycStatuses.
     * @example
     * // Create many UserKycStatuses
     * const userKycStatus = await prisma.userKycStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserKycStatusCreateManyArgs>(args?: SelectSubset<T, UserKycStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserKycStatus.
     * @param {UserKycStatusDeleteArgs} args - Arguments to delete one UserKycStatus.
     * @example
     * // Delete one UserKycStatus
     * const UserKycStatus = await prisma.userKycStatus.delete({
     *   where: {
     *     // ... filter to delete one UserKycStatus
     *   }
     * })
     * 
     */
    delete<T extends UserKycStatusDeleteArgs>(args: SelectSubset<T, UserKycStatusDeleteArgs<ExtArgs>>): Prisma__UserKycStatusClient<$Result.GetResult<Prisma.$UserKycStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserKycStatus.
     * @param {UserKycStatusUpdateArgs} args - Arguments to update one UserKycStatus.
     * @example
     * // Update one UserKycStatus
     * const userKycStatus = await prisma.userKycStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserKycStatusUpdateArgs>(args: SelectSubset<T, UserKycStatusUpdateArgs<ExtArgs>>): Prisma__UserKycStatusClient<$Result.GetResult<Prisma.$UserKycStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserKycStatuses.
     * @param {UserKycStatusDeleteManyArgs} args - Arguments to filter UserKycStatuses to delete.
     * @example
     * // Delete a few UserKycStatuses
     * const { count } = await prisma.userKycStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserKycStatusDeleteManyArgs>(args?: SelectSubset<T, UserKycStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserKycStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserKycStatuses
     * const userKycStatus = await prisma.userKycStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserKycStatusUpdateManyArgs>(args: SelectSubset<T, UserKycStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserKycStatus.
     * @param {UserKycStatusUpsertArgs} args - Arguments to update or create a UserKycStatus.
     * @example
     * // Update or create a UserKycStatus
     * const userKycStatus = await prisma.userKycStatus.upsert({
     *   create: {
     *     // ... data to create a UserKycStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserKycStatus we want to update
     *   }
     * })
     */
    upsert<T extends UserKycStatusUpsertArgs>(args: SelectSubset<T, UserKycStatusUpsertArgs<ExtArgs>>): Prisma__UserKycStatusClient<$Result.GetResult<Prisma.$UserKycStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserKycStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycStatusCountArgs} args - Arguments to filter UserKycStatuses to count.
     * @example
     * // Count the number of UserKycStatuses
     * const count = await prisma.userKycStatus.count({
     *   where: {
     *     // ... the filter for the UserKycStatuses we want to count
     *   }
     * })
    **/
    count<T extends UserKycStatusCountArgs>(
      args?: Subset<T, UserKycStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserKycStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserKycStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserKycStatusAggregateArgs>(args: Subset<T, UserKycStatusAggregateArgs>): Prisma.PrismaPromise<GetUserKycStatusAggregateType<T>>

    /**
     * Group by UserKycStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserKycStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserKycStatusGroupByArgs['orderBy'] }
        : { orderBy?: UserKycStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserKycStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserKycStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserKycStatus model
   */
  readonly fields: UserKycStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserKycStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserKycStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserKycStatus model
   */
  interface UserKycStatusFieldRefs {
    readonly id: FieldRef<"UserKycStatus", 'BigInt'>
    readonly userAddress: FieldRef<"UserKycStatus", 'String'>
    readonly env: FieldRef<"UserKycStatus", 'String'>
    readonly applicantId: FieldRef<"UserKycStatus", 'String'>
    readonly levelName: FieldRef<"UserKycStatus", 'String'>
    readonly reviewStatus: FieldRef<"UserKycStatus", 'String'>
    readonly reviewAnswer: FieldRef<"UserKycStatus", 'String'>
    readonly rejectedType: FieldRef<"UserKycStatus", 'String'>
    readonly updatedAt: FieldRef<"UserKycStatus", 'BigInt'>
    readonly createdAt: FieldRef<"UserKycStatus", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * UserKycStatus findUnique
   */
  export type UserKycStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycStatus
     */
    select?: UserKycStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycStatus
     */
    omit?: UserKycStatusOmit<ExtArgs> | null
    /**
     * Filter, which UserKycStatus to fetch.
     */
    where: UserKycStatusWhereUniqueInput
  }

  /**
   * UserKycStatus findUniqueOrThrow
   */
  export type UserKycStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycStatus
     */
    select?: UserKycStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycStatus
     */
    omit?: UserKycStatusOmit<ExtArgs> | null
    /**
     * Filter, which UserKycStatus to fetch.
     */
    where: UserKycStatusWhereUniqueInput
  }

  /**
   * UserKycStatus findFirst
   */
  export type UserKycStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycStatus
     */
    select?: UserKycStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycStatus
     */
    omit?: UserKycStatusOmit<ExtArgs> | null
    /**
     * Filter, which UserKycStatus to fetch.
     */
    where?: UserKycStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKycStatuses to fetch.
     */
    orderBy?: UserKycStatusOrderByWithRelationInput | UserKycStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserKycStatuses.
     */
    cursor?: UserKycStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKycStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKycStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserKycStatuses.
     */
    distinct?: UserKycStatusScalarFieldEnum | UserKycStatusScalarFieldEnum[]
  }

  /**
   * UserKycStatus findFirstOrThrow
   */
  export type UserKycStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycStatus
     */
    select?: UserKycStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycStatus
     */
    omit?: UserKycStatusOmit<ExtArgs> | null
    /**
     * Filter, which UserKycStatus to fetch.
     */
    where?: UserKycStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKycStatuses to fetch.
     */
    orderBy?: UserKycStatusOrderByWithRelationInput | UserKycStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserKycStatuses.
     */
    cursor?: UserKycStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKycStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKycStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserKycStatuses.
     */
    distinct?: UserKycStatusScalarFieldEnum | UserKycStatusScalarFieldEnum[]
  }

  /**
   * UserKycStatus findMany
   */
  export type UserKycStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycStatus
     */
    select?: UserKycStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycStatus
     */
    omit?: UserKycStatusOmit<ExtArgs> | null
    /**
     * Filter, which UserKycStatuses to fetch.
     */
    where?: UserKycStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKycStatuses to fetch.
     */
    orderBy?: UserKycStatusOrderByWithRelationInput | UserKycStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserKycStatuses.
     */
    cursor?: UserKycStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKycStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKycStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserKycStatuses.
     */
    distinct?: UserKycStatusScalarFieldEnum | UserKycStatusScalarFieldEnum[]
  }

  /**
   * UserKycStatus create
   */
  export type UserKycStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycStatus
     */
    select?: UserKycStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycStatus
     */
    omit?: UserKycStatusOmit<ExtArgs> | null
    /**
     * The data needed to create a UserKycStatus.
     */
    data: XOR<UserKycStatusCreateInput, UserKycStatusUncheckedCreateInput>
  }

  /**
   * UserKycStatus createMany
   */
  export type UserKycStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserKycStatuses.
     */
    data: UserKycStatusCreateManyInput | UserKycStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserKycStatus update
   */
  export type UserKycStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycStatus
     */
    select?: UserKycStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycStatus
     */
    omit?: UserKycStatusOmit<ExtArgs> | null
    /**
     * The data needed to update a UserKycStatus.
     */
    data: XOR<UserKycStatusUpdateInput, UserKycStatusUncheckedUpdateInput>
    /**
     * Choose, which UserKycStatus to update.
     */
    where: UserKycStatusWhereUniqueInput
  }

  /**
   * UserKycStatus updateMany
   */
  export type UserKycStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserKycStatuses.
     */
    data: XOR<UserKycStatusUpdateManyMutationInput, UserKycStatusUncheckedUpdateManyInput>
    /**
     * Filter which UserKycStatuses to update
     */
    where?: UserKycStatusWhereInput
    /**
     * Limit how many UserKycStatuses to update.
     */
    limit?: number
  }

  /**
   * UserKycStatus upsert
   */
  export type UserKycStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycStatus
     */
    select?: UserKycStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycStatus
     */
    omit?: UserKycStatusOmit<ExtArgs> | null
    /**
     * The filter to search for the UserKycStatus to update in case it exists.
     */
    where: UserKycStatusWhereUniqueInput
    /**
     * In case the UserKycStatus found by the `where` argument doesn't exist, create a new UserKycStatus with this data.
     */
    create: XOR<UserKycStatusCreateInput, UserKycStatusUncheckedCreateInput>
    /**
     * In case the UserKycStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserKycStatusUpdateInput, UserKycStatusUncheckedUpdateInput>
  }

  /**
   * UserKycStatus delete
   */
  export type UserKycStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycStatus
     */
    select?: UserKycStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycStatus
     */
    omit?: UserKycStatusOmit<ExtArgs> | null
    /**
     * Filter which UserKycStatus to delete.
     */
    where: UserKycStatusWhereUniqueInput
  }

  /**
   * UserKycStatus deleteMany
   */
  export type UserKycStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserKycStatuses to delete
     */
    where?: UserKycStatusWhereInput
    /**
     * Limit how many UserKycStatuses to delete.
     */
    limit?: number
  }

  /**
   * UserKycStatus without action
   */
  export type UserKycStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycStatus
     */
    select?: UserKycStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycStatus
     */
    omit?: UserKycStatusOmit<ExtArgs> | null
  }


  /**
   * Model UserKycLogs
   */

  export type AggregateUserKycLogs = {
    _count: UserKycLogsCountAggregateOutputType | null
    _avg: UserKycLogsAvgAggregateOutputType | null
    _sum: UserKycLogsSumAggregateOutputType | null
    _min: UserKycLogsMinAggregateOutputType | null
    _max: UserKycLogsMaxAggregateOutputType | null
  }

  export type UserKycLogsAvgAggregateOutputType = {
    id: number | null
    createdAt: number | null
  }

  export type UserKycLogsSumAggregateOutputType = {
    id: bigint | null
    createdAt: bigint | null
  }

  export type UserKycLogsMinAggregateOutputType = {
    id: bigint | null
    createdAt: bigint | null
    correlationId: string | null
    applicantId: string | null
    userAddress: string | null
    levelName: string | null
    type: string | null
    reviewStatus: string | null
    reviewAnswer: string | null
    rejectedType: string | null
    clientComment: string | null
    moderationComment: string | null
  }

  export type UserKycLogsMaxAggregateOutputType = {
    id: bigint | null
    createdAt: bigint | null
    correlationId: string | null
    applicantId: string | null
    userAddress: string | null
    levelName: string | null
    type: string | null
    reviewStatus: string | null
    reviewAnswer: string | null
    rejectedType: string | null
    clientComment: string | null
    moderationComment: string | null
  }

  export type UserKycLogsCountAggregateOutputType = {
    id: number
    createdAt: number
    correlationId: number
    applicantId: number
    userAddress: number
    levelName: number
    type: number
    reviewStatus: number
    reviewAnswer: number
    rejectedType: number
    clientComment: number
    moderationComment: number
    _all: number
  }


  export type UserKycLogsAvgAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type UserKycLogsSumAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type UserKycLogsMinAggregateInputType = {
    id?: true
    createdAt?: true
    correlationId?: true
    applicantId?: true
    userAddress?: true
    levelName?: true
    type?: true
    reviewStatus?: true
    reviewAnswer?: true
    rejectedType?: true
    clientComment?: true
    moderationComment?: true
  }

  export type UserKycLogsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    correlationId?: true
    applicantId?: true
    userAddress?: true
    levelName?: true
    type?: true
    reviewStatus?: true
    reviewAnswer?: true
    rejectedType?: true
    clientComment?: true
    moderationComment?: true
  }

  export type UserKycLogsCountAggregateInputType = {
    id?: true
    createdAt?: true
    correlationId?: true
    applicantId?: true
    userAddress?: true
    levelName?: true
    type?: true
    reviewStatus?: true
    reviewAnswer?: true
    rejectedType?: true
    clientComment?: true
    moderationComment?: true
    _all?: true
  }

  export type UserKycLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserKycLogs to aggregate.
     */
    where?: UserKycLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKycLogs to fetch.
     */
    orderBy?: UserKycLogsOrderByWithRelationInput | UserKycLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserKycLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKycLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKycLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserKycLogs
    **/
    _count?: true | UserKycLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserKycLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserKycLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserKycLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserKycLogsMaxAggregateInputType
  }

  export type GetUserKycLogsAggregateType<T extends UserKycLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserKycLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserKycLogs[P]>
      : GetScalarType<T[P], AggregateUserKycLogs[P]>
  }




  export type UserKycLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserKycLogsWhereInput
    orderBy?: UserKycLogsOrderByWithAggregationInput | UserKycLogsOrderByWithAggregationInput[]
    by: UserKycLogsScalarFieldEnum[] | UserKycLogsScalarFieldEnum
    having?: UserKycLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserKycLogsCountAggregateInputType | true
    _avg?: UserKycLogsAvgAggregateInputType
    _sum?: UserKycLogsSumAggregateInputType
    _min?: UserKycLogsMinAggregateInputType
    _max?: UserKycLogsMaxAggregateInputType
  }

  export type UserKycLogsGroupByOutputType = {
    id: bigint
    createdAt: bigint
    correlationId: string
    applicantId: string
    userAddress: string
    levelName: string
    type: string
    reviewStatus: string
    reviewAnswer: string | null
    rejectedType: string | null
    clientComment: string | null
    moderationComment: string | null
    _count: UserKycLogsCountAggregateOutputType | null
    _avg: UserKycLogsAvgAggregateOutputType | null
    _sum: UserKycLogsSumAggregateOutputType | null
    _min: UserKycLogsMinAggregateOutputType | null
    _max: UserKycLogsMaxAggregateOutputType | null
  }

  type GetUserKycLogsGroupByPayload<T extends UserKycLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserKycLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserKycLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserKycLogsGroupByOutputType[P]>
            : GetScalarType<T[P], UserKycLogsGroupByOutputType[P]>
        }
      >
    >


  export type UserKycLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    correlationId?: boolean
    applicantId?: boolean
    userAddress?: boolean
    levelName?: boolean
    type?: boolean
    reviewStatus?: boolean
    reviewAnswer?: boolean
    rejectedType?: boolean
    clientComment?: boolean
    moderationComment?: boolean
  }, ExtArgs["result"]["userKycLogs"]>



  export type UserKycLogsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    correlationId?: boolean
    applicantId?: boolean
    userAddress?: boolean
    levelName?: boolean
    type?: boolean
    reviewStatus?: boolean
    reviewAnswer?: boolean
    rejectedType?: boolean
    clientComment?: boolean
    moderationComment?: boolean
  }

  export type UserKycLogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "correlationId" | "applicantId" | "userAddress" | "levelName" | "type" | "reviewStatus" | "reviewAnswer" | "rejectedType" | "clientComment" | "moderationComment", ExtArgs["result"]["userKycLogs"]>

  export type $UserKycLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserKycLogs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: bigint
      correlationId: string
      applicantId: string
      userAddress: string
      levelName: string
      type: string
      reviewStatus: string
      reviewAnswer: string | null
      rejectedType: string | null
      clientComment: string | null
      moderationComment: string | null
    }, ExtArgs["result"]["userKycLogs"]>
    composites: {}
  }

  type UserKycLogsGetPayload<S extends boolean | null | undefined | UserKycLogsDefaultArgs> = $Result.GetResult<Prisma.$UserKycLogsPayload, S>

  type UserKycLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserKycLogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserKycLogsCountAggregateInputType | true
    }

  export interface UserKycLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserKycLogs'], meta: { name: 'UserKycLogs' } }
    /**
     * Find zero or one UserKycLogs that matches the filter.
     * @param {UserKycLogsFindUniqueArgs} args - Arguments to find a UserKycLogs
     * @example
     * // Get one UserKycLogs
     * const userKycLogs = await prisma.userKycLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserKycLogsFindUniqueArgs>(args: SelectSubset<T, UserKycLogsFindUniqueArgs<ExtArgs>>): Prisma__UserKycLogsClient<$Result.GetResult<Prisma.$UserKycLogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserKycLogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserKycLogsFindUniqueOrThrowArgs} args - Arguments to find a UserKycLogs
     * @example
     * // Get one UserKycLogs
     * const userKycLogs = await prisma.userKycLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserKycLogsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserKycLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserKycLogsClient<$Result.GetResult<Prisma.$UserKycLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserKycLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycLogsFindFirstArgs} args - Arguments to find a UserKycLogs
     * @example
     * // Get one UserKycLogs
     * const userKycLogs = await prisma.userKycLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserKycLogsFindFirstArgs>(args?: SelectSubset<T, UserKycLogsFindFirstArgs<ExtArgs>>): Prisma__UserKycLogsClient<$Result.GetResult<Prisma.$UserKycLogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserKycLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycLogsFindFirstOrThrowArgs} args - Arguments to find a UserKycLogs
     * @example
     * // Get one UserKycLogs
     * const userKycLogs = await prisma.userKycLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserKycLogsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserKycLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserKycLogsClient<$Result.GetResult<Prisma.$UserKycLogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserKycLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserKycLogs
     * const userKycLogs = await prisma.userKycLogs.findMany()
     * 
     * // Get first 10 UserKycLogs
     * const userKycLogs = await prisma.userKycLogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userKycLogsWithIdOnly = await prisma.userKycLogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserKycLogsFindManyArgs>(args?: SelectSubset<T, UserKycLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserKycLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserKycLogs.
     * @param {UserKycLogsCreateArgs} args - Arguments to create a UserKycLogs.
     * @example
     * // Create one UserKycLogs
     * const UserKycLogs = await prisma.userKycLogs.create({
     *   data: {
     *     // ... data to create a UserKycLogs
     *   }
     * })
     * 
     */
    create<T extends UserKycLogsCreateArgs>(args: SelectSubset<T, UserKycLogsCreateArgs<ExtArgs>>): Prisma__UserKycLogsClient<$Result.GetResult<Prisma.$UserKycLogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserKycLogs.
     * @param {UserKycLogsCreateManyArgs} args - Arguments to create many UserKycLogs.
     * @example
     * // Create many UserKycLogs
     * const userKycLogs = await prisma.userKycLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserKycLogsCreateManyArgs>(args?: SelectSubset<T, UserKycLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserKycLogs.
     * @param {UserKycLogsDeleteArgs} args - Arguments to delete one UserKycLogs.
     * @example
     * // Delete one UserKycLogs
     * const UserKycLogs = await prisma.userKycLogs.delete({
     *   where: {
     *     // ... filter to delete one UserKycLogs
     *   }
     * })
     * 
     */
    delete<T extends UserKycLogsDeleteArgs>(args: SelectSubset<T, UserKycLogsDeleteArgs<ExtArgs>>): Prisma__UserKycLogsClient<$Result.GetResult<Prisma.$UserKycLogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserKycLogs.
     * @param {UserKycLogsUpdateArgs} args - Arguments to update one UserKycLogs.
     * @example
     * // Update one UserKycLogs
     * const userKycLogs = await prisma.userKycLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserKycLogsUpdateArgs>(args: SelectSubset<T, UserKycLogsUpdateArgs<ExtArgs>>): Prisma__UserKycLogsClient<$Result.GetResult<Prisma.$UserKycLogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserKycLogs.
     * @param {UserKycLogsDeleteManyArgs} args - Arguments to filter UserKycLogs to delete.
     * @example
     * // Delete a few UserKycLogs
     * const { count } = await prisma.userKycLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserKycLogsDeleteManyArgs>(args?: SelectSubset<T, UserKycLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserKycLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserKycLogs
     * const userKycLogs = await prisma.userKycLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserKycLogsUpdateManyArgs>(args: SelectSubset<T, UserKycLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserKycLogs.
     * @param {UserKycLogsUpsertArgs} args - Arguments to update or create a UserKycLogs.
     * @example
     * // Update or create a UserKycLogs
     * const userKycLogs = await prisma.userKycLogs.upsert({
     *   create: {
     *     // ... data to create a UserKycLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserKycLogs we want to update
     *   }
     * })
     */
    upsert<T extends UserKycLogsUpsertArgs>(args: SelectSubset<T, UserKycLogsUpsertArgs<ExtArgs>>): Prisma__UserKycLogsClient<$Result.GetResult<Prisma.$UserKycLogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserKycLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycLogsCountArgs} args - Arguments to filter UserKycLogs to count.
     * @example
     * // Count the number of UserKycLogs
     * const count = await prisma.userKycLogs.count({
     *   where: {
     *     // ... the filter for the UserKycLogs we want to count
     *   }
     * })
    **/
    count<T extends UserKycLogsCountArgs>(
      args?: Subset<T, UserKycLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserKycLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserKycLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserKycLogsAggregateArgs>(args: Subset<T, UserKycLogsAggregateArgs>): Prisma.PrismaPromise<GetUserKycLogsAggregateType<T>>

    /**
     * Group by UserKycLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycLogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserKycLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserKycLogsGroupByArgs['orderBy'] }
        : { orderBy?: UserKycLogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserKycLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserKycLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserKycLogs model
   */
  readonly fields: UserKycLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserKycLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserKycLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserKycLogs model
   */
  interface UserKycLogsFieldRefs {
    readonly id: FieldRef<"UserKycLogs", 'BigInt'>
    readonly createdAt: FieldRef<"UserKycLogs", 'BigInt'>
    readonly correlationId: FieldRef<"UserKycLogs", 'String'>
    readonly applicantId: FieldRef<"UserKycLogs", 'String'>
    readonly userAddress: FieldRef<"UserKycLogs", 'String'>
    readonly levelName: FieldRef<"UserKycLogs", 'String'>
    readonly type: FieldRef<"UserKycLogs", 'String'>
    readonly reviewStatus: FieldRef<"UserKycLogs", 'String'>
    readonly reviewAnswer: FieldRef<"UserKycLogs", 'String'>
    readonly rejectedType: FieldRef<"UserKycLogs", 'String'>
    readonly clientComment: FieldRef<"UserKycLogs", 'String'>
    readonly moderationComment: FieldRef<"UserKycLogs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserKycLogs findUnique
   */
  export type UserKycLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycLogs
     */
    select?: UserKycLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycLogs
     */
    omit?: UserKycLogsOmit<ExtArgs> | null
    /**
     * Filter, which UserKycLogs to fetch.
     */
    where: UserKycLogsWhereUniqueInput
  }

  /**
   * UserKycLogs findUniqueOrThrow
   */
  export type UserKycLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycLogs
     */
    select?: UserKycLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycLogs
     */
    omit?: UserKycLogsOmit<ExtArgs> | null
    /**
     * Filter, which UserKycLogs to fetch.
     */
    where: UserKycLogsWhereUniqueInput
  }

  /**
   * UserKycLogs findFirst
   */
  export type UserKycLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycLogs
     */
    select?: UserKycLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycLogs
     */
    omit?: UserKycLogsOmit<ExtArgs> | null
    /**
     * Filter, which UserKycLogs to fetch.
     */
    where?: UserKycLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKycLogs to fetch.
     */
    orderBy?: UserKycLogsOrderByWithRelationInput | UserKycLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserKycLogs.
     */
    cursor?: UserKycLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKycLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKycLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserKycLogs.
     */
    distinct?: UserKycLogsScalarFieldEnum | UserKycLogsScalarFieldEnum[]
  }

  /**
   * UserKycLogs findFirstOrThrow
   */
  export type UserKycLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycLogs
     */
    select?: UserKycLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycLogs
     */
    omit?: UserKycLogsOmit<ExtArgs> | null
    /**
     * Filter, which UserKycLogs to fetch.
     */
    where?: UserKycLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKycLogs to fetch.
     */
    orderBy?: UserKycLogsOrderByWithRelationInput | UserKycLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserKycLogs.
     */
    cursor?: UserKycLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKycLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKycLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserKycLogs.
     */
    distinct?: UserKycLogsScalarFieldEnum | UserKycLogsScalarFieldEnum[]
  }

  /**
   * UserKycLogs findMany
   */
  export type UserKycLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycLogs
     */
    select?: UserKycLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycLogs
     */
    omit?: UserKycLogsOmit<ExtArgs> | null
    /**
     * Filter, which UserKycLogs to fetch.
     */
    where?: UserKycLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKycLogs to fetch.
     */
    orderBy?: UserKycLogsOrderByWithRelationInput | UserKycLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserKycLogs.
     */
    cursor?: UserKycLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKycLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKycLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserKycLogs.
     */
    distinct?: UserKycLogsScalarFieldEnum | UserKycLogsScalarFieldEnum[]
  }

  /**
   * UserKycLogs create
   */
  export type UserKycLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycLogs
     */
    select?: UserKycLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycLogs
     */
    omit?: UserKycLogsOmit<ExtArgs> | null
    /**
     * The data needed to create a UserKycLogs.
     */
    data: XOR<UserKycLogsCreateInput, UserKycLogsUncheckedCreateInput>
  }

  /**
   * UserKycLogs createMany
   */
  export type UserKycLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserKycLogs.
     */
    data: UserKycLogsCreateManyInput | UserKycLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserKycLogs update
   */
  export type UserKycLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycLogs
     */
    select?: UserKycLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycLogs
     */
    omit?: UserKycLogsOmit<ExtArgs> | null
    /**
     * The data needed to update a UserKycLogs.
     */
    data: XOR<UserKycLogsUpdateInput, UserKycLogsUncheckedUpdateInput>
    /**
     * Choose, which UserKycLogs to update.
     */
    where: UserKycLogsWhereUniqueInput
  }

  /**
   * UserKycLogs updateMany
   */
  export type UserKycLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserKycLogs.
     */
    data: XOR<UserKycLogsUpdateManyMutationInput, UserKycLogsUncheckedUpdateManyInput>
    /**
     * Filter which UserKycLogs to update
     */
    where?: UserKycLogsWhereInput
    /**
     * Limit how many UserKycLogs to update.
     */
    limit?: number
  }

  /**
   * UserKycLogs upsert
   */
  export type UserKycLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycLogs
     */
    select?: UserKycLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycLogs
     */
    omit?: UserKycLogsOmit<ExtArgs> | null
    /**
     * The filter to search for the UserKycLogs to update in case it exists.
     */
    where: UserKycLogsWhereUniqueInput
    /**
     * In case the UserKycLogs found by the `where` argument doesn't exist, create a new UserKycLogs with this data.
     */
    create: XOR<UserKycLogsCreateInput, UserKycLogsUncheckedCreateInput>
    /**
     * In case the UserKycLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserKycLogsUpdateInput, UserKycLogsUncheckedUpdateInput>
  }

  /**
   * UserKycLogs delete
   */
  export type UserKycLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycLogs
     */
    select?: UserKycLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycLogs
     */
    omit?: UserKycLogsOmit<ExtArgs> | null
    /**
     * Filter which UserKycLogs to delete.
     */
    where: UserKycLogsWhereUniqueInput
  }

  /**
   * UserKycLogs deleteMany
   */
  export type UserKycLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserKycLogs to delete
     */
    where?: UserKycLogsWhereInput
    /**
     * Limit how many UserKycLogs to delete.
     */
    limit?: number
  }

  /**
   * UserKycLogs without action
   */
  export type UserKycLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKycLogs
     */
    select?: UserKycLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKycLogs
     */
    omit?: UserKycLogsOmit<ExtArgs> | null
  }


  /**
   * Model UserEnv
   */

  export type AggregateUserEnv = {
    _count: UserEnvCountAggregateOutputType | null
    _min: UserEnvMinAggregateOutputType | null
    _max: UserEnvMaxAggregateOutputType | null
  }

  export type UserEnvMinAggregateOutputType = {
    userAddress: string | null
    env: string | null
  }

  export type UserEnvMaxAggregateOutputType = {
    userAddress: string | null
    env: string | null
  }

  export type UserEnvCountAggregateOutputType = {
    userAddress: number
    env: number
    _all: number
  }


  export type UserEnvMinAggregateInputType = {
    userAddress?: true
    env?: true
  }

  export type UserEnvMaxAggregateInputType = {
    userAddress?: true
    env?: true
  }

  export type UserEnvCountAggregateInputType = {
    userAddress?: true
    env?: true
    _all?: true
  }

  export type UserEnvAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserEnv to aggregate.
     */
    where?: UserEnvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEnvs to fetch.
     */
    orderBy?: UserEnvOrderByWithRelationInput | UserEnvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserEnvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEnvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEnvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserEnvs
    **/
    _count?: true | UserEnvCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserEnvMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserEnvMaxAggregateInputType
  }

  export type GetUserEnvAggregateType<T extends UserEnvAggregateArgs> = {
        [P in keyof T & keyof AggregateUserEnv]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserEnv[P]>
      : GetScalarType<T[P], AggregateUserEnv[P]>
  }




  export type UserEnvGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEnvWhereInput
    orderBy?: UserEnvOrderByWithAggregationInput | UserEnvOrderByWithAggregationInput[]
    by: UserEnvScalarFieldEnum[] | UserEnvScalarFieldEnum
    having?: UserEnvScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserEnvCountAggregateInputType | true
    _min?: UserEnvMinAggregateInputType
    _max?: UserEnvMaxAggregateInputType
  }

  export type UserEnvGroupByOutputType = {
    userAddress: string
    env: string
    _count: UserEnvCountAggregateOutputType | null
    _min: UserEnvMinAggregateOutputType | null
    _max: UserEnvMaxAggregateOutputType | null
  }

  type GetUserEnvGroupByPayload<T extends UserEnvGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserEnvGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserEnvGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserEnvGroupByOutputType[P]>
            : GetScalarType<T[P], UserEnvGroupByOutputType[P]>
        }
      >
    >


  export type UserEnvSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userAddress?: boolean
    env?: boolean
  }, ExtArgs["result"]["userEnv"]>



  export type UserEnvSelectScalar = {
    userAddress?: boolean
    env?: boolean
  }

  export type UserEnvOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userAddress" | "env", ExtArgs["result"]["userEnv"]>

  export type $UserEnvPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserEnv"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userAddress: string
      env: string
    }, ExtArgs["result"]["userEnv"]>
    composites: {}
  }

  type UserEnvGetPayload<S extends boolean | null | undefined | UserEnvDefaultArgs> = $Result.GetResult<Prisma.$UserEnvPayload, S>

  type UserEnvCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserEnvFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserEnvCountAggregateInputType | true
    }

  export interface UserEnvDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserEnv'], meta: { name: 'UserEnv' } }
    /**
     * Find zero or one UserEnv that matches the filter.
     * @param {UserEnvFindUniqueArgs} args - Arguments to find a UserEnv
     * @example
     * // Get one UserEnv
     * const userEnv = await prisma.userEnv.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserEnvFindUniqueArgs>(args: SelectSubset<T, UserEnvFindUniqueArgs<ExtArgs>>): Prisma__UserEnvClient<$Result.GetResult<Prisma.$UserEnvPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserEnv that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserEnvFindUniqueOrThrowArgs} args - Arguments to find a UserEnv
     * @example
     * // Get one UserEnv
     * const userEnv = await prisma.userEnv.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserEnvFindUniqueOrThrowArgs>(args: SelectSubset<T, UserEnvFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserEnvClient<$Result.GetResult<Prisma.$UserEnvPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserEnv that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEnvFindFirstArgs} args - Arguments to find a UserEnv
     * @example
     * // Get one UserEnv
     * const userEnv = await prisma.userEnv.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserEnvFindFirstArgs>(args?: SelectSubset<T, UserEnvFindFirstArgs<ExtArgs>>): Prisma__UserEnvClient<$Result.GetResult<Prisma.$UserEnvPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserEnv that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEnvFindFirstOrThrowArgs} args - Arguments to find a UserEnv
     * @example
     * // Get one UserEnv
     * const userEnv = await prisma.userEnv.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserEnvFindFirstOrThrowArgs>(args?: SelectSubset<T, UserEnvFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserEnvClient<$Result.GetResult<Prisma.$UserEnvPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserEnvs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEnvFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserEnvs
     * const userEnvs = await prisma.userEnv.findMany()
     * 
     * // Get first 10 UserEnvs
     * const userEnvs = await prisma.userEnv.findMany({ take: 10 })
     * 
     * // Only select the `userAddress`
     * const userEnvWithUserAddressOnly = await prisma.userEnv.findMany({ select: { userAddress: true } })
     * 
     */
    findMany<T extends UserEnvFindManyArgs>(args?: SelectSubset<T, UserEnvFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEnvPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserEnv.
     * @param {UserEnvCreateArgs} args - Arguments to create a UserEnv.
     * @example
     * // Create one UserEnv
     * const UserEnv = await prisma.userEnv.create({
     *   data: {
     *     // ... data to create a UserEnv
     *   }
     * })
     * 
     */
    create<T extends UserEnvCreateArgs>(args: SelectSubset<T, UserEnvCreateArgs<ExtArgs>>): Prisma__UserEnvClient<$Result.GetResult<Prisma.$UserEnvPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserEnvs.
     * @param {UserEnvCreateManyArgs} args - Arguments to create many UserEnvs.
     * @example
     * // Create many UserEnvs
     * const userEnv = await prisma.userEnv.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserEnvCreateManyArgs>(args?: SelectSubset<T, UserEnvCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserEnv.
     * @param {UserEnvDeleteArgs} args - Arguments to delete one UserEnv.
     * @example
     * // Delete one UserEnv
     * const UserEnv = await prisma.userEnv.delete({
     *   where: {
     *     // ... filter to delete one UserEnv
     *   }
     * })
     * 
     */
    delete<T extends UserEnvDeleteArgs>(args: SelectSubset<T, UserEnvDeleteArgs<ExtArgs>>): Prisma__UserEnvClient<$Result.GetResult<Prisma.$UserEnvPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserEnv.
     * @param {UserEnvUpdateArgs} args - Arguments to update one UserEnv.
     * @example
     * // Update one UserEnv
     * const userEnv = await prisma.userEnv.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserEnvUpdateArgs>(args: SelectSubset<T, UserEnvUpdateArgs<ExtArgs>>): Prisma__UserEnvClient<$Result.GetResult<Prisma.$UserEnvPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserEnvs.
     * @param {UserEnvDeleteManyArgs} args - Arguments to filter UserEnvs to delete.
     * @example
     * // Delete a few UserEnvs
     * const { count } = await prisma.userEnv.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserEnvDeleteManyArgs>(args?: SelectSubset<T, UserEnvDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserEnvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEnvUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserEnvs
     * const userEnv = await prisma.userEnv.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserEnvUpdateManyArgs>(args: SelectSubset<T, UserEnvUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserEnv.
     * @param {UserEnvUpsertArgs} args - Arguments to update or create a UserEnv.
     * @example
     * // Update or create a UserEnv
     * const userEnv = await prisma.userEnv.upsert({
     *   create: {
     *     // ... data to create a UserEnv
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserEnv we want to update
     *   }
     * })
     */
    upsert<T extends UserEnvUpsertArgs>(args: SelectSubset<T, UserEnvUpsertArgs<ExtArgs>>): Prisma__UserEnvClient<$Result.GetResult<Prisma.$UserEnvPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserEnvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEnvCountArgs} args - Arguments to filter UserEnvs to count.
     * @example
     * // Count the number of UserEnvs
     * const count = await prisma.userEnv.count({
     *   where: {
     *     // ... the filter for the UserEnvs we want to count
     *   }
     * })
    **/
    count<T extends UserEnvCountArgs>(
      args?: Subset<T, UserEnvCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserEnvCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserEnv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEnvAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserEnvAggregateArgs>(args: Subset<T, UserEnvAggregateArgs>): Prisma.PrismaPromise<GetUserEnvAggregateType<T>>

    /**
     * Group by UserEnv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEnvGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserEnvGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserEnvGroupByArgs['orderBy'] }
        : { orderBy?: UserEnvGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserEnvGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserEnvGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserEnv model
   */
  readonly fields: UserEnvFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserEnv.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserEnvClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserEnv model
   */
  interface UserEnvFieldRefs {
    readonly userAddress: FieldRef<"UserEnv", 'String'>
    readonly env: FieldRef<"UserEnv", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserEnv findUnique
   */
  export type UserEnvFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEnv
     */
    select?: UserEnvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEnv
     */
    omit?: UserEnvOmit<ExtArgs> | null
    /**
     * Filter, which UserEnv to fetch.
     */
    where: UserEnvWhereUniqueInput
  }

  /**
   * UserEnv findUniqueOrThrow
   */
  export type UserEnvFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEnv
     */
    select?: UserEnvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEnv
     */
    omit?: UserEnvOmit<ExtArgs> | null
    /**
     * Filter, which UserEnv to fetch.
     */
    where: UserEnvWhereUniqueInput
  }

  /**
   * UserEnv findFirst
   */
  export type UserEnvFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEnv
     */
    select?: UserEnvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEnv
     */
    omit?: UserEnvOmit<ExtArgs> | null
    /**
     * Filter, which UserEnv to fetch.
     */
    where?: UserEnvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEnvs to fetch.
     */
    orderBy?: UserEnvOrderByWithRelationInput | UserEnvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserEnvs.
     */
    cursor?: UserEnvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEnvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEnvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEnvs.
     */
    distinct?: UserEnvScalarFieldEnum | UserEnvScalarFieldEnum[]
  }

  /**
   * UserEnv findFirstOrThrow
   */
  export type UserEnvFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEnv
     */
    select?: UserEnvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEnv
     */
    omit?: UserEnvOmit<ExtArgs> | null
    /**
     * Filter, which UserEnv to fetch.
     */
    where?: UserEnvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEnvs to fetch.
     */
    orderBy?: UserEnvOrderByWithRelationInput | UserEnvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserEnvs.
     */
    cursor?: UserEnvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEnvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEnvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEnvs.
     */
    distinct?: UserEnvScalarFieldEnum | UserEnvScalarFieldEnum[]
  }

  /**
   * UserEnv findMany
   */
  export type UserEnvFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEnv
     */
    select?: UserEnvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEnv
     */
    omit?: UserEnvOmit<ExtArgs> | null
    /**
     * Filter, which UserEnvs to fetch.
     */
    where?: UserEnvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEnvs to fetch.
     */
    orderBy?: UserEnvOrderByWithRelationInput | UserEnvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserEnvs.
     */
    cursor?: UserEnvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEnvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEnvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEnvs.
     */
    distinct?: UserEnvScalarFieldEnum | UserEnvScalarFieldEnum[]
  }

  /**
   * UserEnv create
   */
  export type UserEnvCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEnv
     */
    select?: UserEnvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEnv
     */
    omit?: UserEnvOmit<ExtArgs> | null
    /**
     * The data needed to create a UserEnv.
     */
    data: XOR<UserEnvCreateInput, UserEnvUncheckedCreateInput>
  }

  /**
   * UserEnv createMany
   */
  export type UserEnvCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserEnvs.
     */
    data: UserEnvCreateManyInput | UserEnvCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserEnv update
   */
  export type UserEnvUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEnv
     */
    select?: UserEnvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEnv
     */
    omit?: UserEnvOmit<ExtArgs> | null
    /**
     * The data needed to update a UserEnv.
     */
    data: XOR<UserEnvUpdateInput, UserEnvUncheckedUpdateInput>
    /**
     * Choose, which UserEnv to update.
     */
    where: UserEnvWhereUniqueInput
  }

  /**
   * UserEnv updateMany
   */
  export type UserEnvUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserEnvs.
     */
    data: XOR<UserEnvUpdateManyMutationInput, UserEnvUncheckedUpdateManyInput>
    /**
     * Filter which UserEnvs to update
     */
    where?: UserEnvWhereInput
    /**
     * Limit how many UserEnvs to update.
     */
    limit?: number
  }

  /**
   * UserEnv upsert
   */
  export type UserEnvUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEnv
     */
    select?: UserEnvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEnv
     */
    omit?: UserEnvOmit<ExtArgs> | null
    /**
     * The filter to search for the UserEnv to update in case it exists.
     */
    where: UserEnvWhereUniqueInput
    /**
     * In case the UserEnv found by the `where` argument doesn't exist, create a new UserEnv with this data.
     */
    create: XOR<UserEnvCreateInput, UserEnvUncheckedCreateInput>
    /**
     * In case the UserEnv was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserEnvUpdateInput, UserEnvUncheckedUpdateInput>
  }

  /**
   * UserEnv delete
   */
  export type UserEnvDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEnv
     */
    select?: UserEnvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEnv
     */
    omit?: UserEnvOmit<ExtArgs> | null
    /**
     * Filter which UserEnv to delete.
     */
    where: UserEnvWhereUniqueInput
  }

  /**
   * UserEnv deleteMany
   */
  export type UserEnvDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserEnvs to delete
     */
    where?: UserEnvWhereInput
    /**
     * Limit how many UserEnvs to delete.
     */
    limit?: number
  }

  /**
   * UserEnv without action
   */
  export type UserEnvDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEnv
     */
    select?: UserEnvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEnv
     */
    omit?: UserEnvOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserKycStatusScalarFieldEnum: {
    id: 'id',
    userAddress: 'userAddress',
    env: 'env',
    applicantId: 'applicantId',
    levelName: 'levelName',
    reviewStatus: 'reviewStatus',
    reviewAnswer: 'reviewAnswer',
    rejectedType: 'rejectedType',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type UserKycStatusScalarFieldEnum = (typeof UserKycStatusScalarFieldEnum)[keyof typeof UserKycStatusScalarFieldEnum]


  export const UserKycLogsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    correlationId: 'correlationId',
    applicantId: 'applicantId',
    userAddress: 'userAddress',
    levelName: 'levelName',
    type: 'type',
    reviewStatus: 'reviewStatus',
    reviewAnswer: 'reviewAnswer',
    rejectedType: 'rejectedType',
    clientComment: 'clientComment',
    moderationComment: 'moderationComment'
  };

  export type UserKycLogsScalarFieldEnum = (typeof UserKycLogsScalarFieldEnum)[keyof typeof UserKycLogsScalarFieldEnum]


  export const UserEnvScalarFieldEnum: {
    userAddress: 'userAddress',
    env: 'env'
  };

  export type UserEnvScalarFieldEnum = (typeof UserEnvScalarFieldEnum)[keyof typeof UserEnvScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserKycStatusOrderByRelevanceFieldEnum: {
    userAddress: 'userAddress',
    env: 'env',
    applicantId: 'applicantId',
    levelName: 'levelName',
    reviewStatus: 'reviewStatus',
    reviewAnswer: 'reviewAnswer',
    rejectedType: 'rejectedType'
  };

  export type UserKycStatusOrderByRelevanceFieldEnum = (typeof UserKycStatusOrderByRelevanceFieldEnum)[keyof typeof UserKycStatusOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserKycLogsOrderByRelevanceFieldEnum: {
    correlationId: 'correlationId',
    applicantId: 'applicantId',
    userAddress: 'userAddress',
    levelName: 'levelName',
    type: 'type',
    reviewStatus: 'reviewStatus',
    reviewAnswer: 'reviewAnswer',
    rejectedType: 'rejectedType',
    clientComment: 'clientComment',
    moderationComment: 'moderationComment'
  };

  export type UserKycLogsOrderByRelevanceFieldEnum = (typeof UserKycLogsOrderByRelevanceFieldEnum)[keyof typeof UserKycLogsOrderByRelevanceFieldEnum]


  export const UserEnvOrderByRelevanceFieldEnum: {
    userAddress: 'userAddress',
    env: 'env'
  };

  export type UserEnvOrderByRelevanceFieldEnum = (typeof UserEnvOrderByRelevanceFieldEnum)[keyof typeof UserEnvOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserKycStatusWhereInput = {
    AND?: UserKycStatusWhereInput | UserKycStatusWhereInput[]
    OR?: UserKycStatusWhereInput[]
    NOT?: UserKycStatusWhereInput | UserKycStatusWhereInput[]
    id?: BigIntFilter<"UserKycStatus"> | bigint | number
    userAddress?: StringFilter<"UserKycStatus"> | string
    env?: StringFilter<"UserKycStatus"> | string
    applicantId?: StringFilter<"UserKycStatus"> | string
    levelName?: StringFilter<"UserKycStatus"> | string
    reviewStatus?: StringFilter<"UserKycStatus"> | string
    reviewAnswer?: StringFilter<"UserKycStatus"> | string
    rejectedType?: StringFilter<"UserKycStatus"> | string
    updatedAt?: BigIntFilter<"UserKycStatus"> | bigint | number
    createdAt?: BigIntFilter<"UserKycStatus"> | bigint | number
  }

  export type UserKycStatusOrderByWithRelationInput = {
    id?: SortOrder
    userAddress?: SortOrder
    env?: SortOrder
    applicantId?: SortOrder
    levelName?: SortOrder
    reviewStatus?: SortOrder
    reviewAnswer?: SortOrder
    rejectedType?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _relevance?: UserKycStatusOrderByRelevanceInput
  }

  export type UserKycStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    userAddress?: string
    AND?: UserKycStatusWhereInput | UserKycStatusWhereInput[]
    OR?: UserKycStatusWhereInput[]
    NOT?: UserKycStatusWhereInput | UserKycStatusWhereInput[]
    env?: StringFilter<"UserKycStatus"> | string
    applicantId?: StringFilter<"UserKycStatus"> | string
    levelName?: StringFilter<"UserKycStatus"> | string
    reviewStatus?: StringFilter<"UserKycStatus"> | string
    reviewAnswer?: StringFilter<"UserKycStatus"> | string
    rejectedType?: StringFilter<"UserKycStatus"> | string
    updatedAt?: BigIntFilter<"UserKycStatus"> | bigint | number
    createdAt?: BigIntFilter<"UserKycStatus"> | bigint | number
  }, "id" | "userAddress">

  export type UserKycStatusOrderByWithAggregationInput = {
    id?: SortOrder
    userAddress?: SortOrder
    env?: SortOrder
    applicantId?: SortOrder
    levelName?: SortOrder
    reviewStatus?: SortOrder
    reviewAnswer?: SortOrder
    rejectedType?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: UserKycStatusCountOrderByAggregateInput
    _avg?: UserKycStatusAvgOrderByAggregateInput
    _max?: UserKycStatusMaxOrderByAggregateInput
    _min?: UserKycStatusMinOrderByAggregateInput
    _sum?: UserKycStatusSumOrderByAggregateInput
  }

  export type UserKycStatusScalarWhereWithAggregatesInput = {
    AND?: UserKycStatusScalarWhereWithAggregatesInput | UserKycStatusScalarWhereWithAggregatesInput[]
    OR?: UserKycStatusScalarWhereWithAggregatesInput[]
    NOT?: UserKycStatusScalarWhereWithAggregatesInput | UserKycStatusScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"UserKycStatus"> | bigint | number
    userAddress?: StringWithAggregatesFilter<"UserKycStatus"> | string
    env?: StringWithAggregatesFilter<"UserKycStatus"> | string
    applicantId?: StringWithAggregatesFilter<"UserKycStatus"> | string
    levelName?: StringWithAggregatesFilter<"UserKycStatus"> | string
    reviewStatus?: StringWithAggregatesFilter<"UserKycStatus"> | string
    reviewAnswer?: StringWithAggregatesFilter<"UserKycStatus"> | string
    rejectedType?: StringWithAggregatesFilter<"UserKycStatus"> | string
    updatedAt?: BigIntWithAggregatesFilter<"UserKycStatus"> | bigint | number
    createdAt?: BigIntWithAggregatesFilter<"UserKycStatus"> | bigint | number
  }

  export type UserKycLogsWhereInput = {
    AND?: UserKycLogsWhereInput | UserKycLogsWhereInput[]
    OR?: UserKycLogsWhereInput[]
    NOT?: UserKycLogsWhereInput | UserKycLogsWhereInput[]
    id?: BigIntFilter<"UserKycLogs"> | bigint | number
    createdAt?: BigIntFilter<"UserKycLogs"> | bigint | number
    correlationId?: StringFilter<"UserKycLogs"> | string
    applicantId?: StringFilter<"UserKycLogs"> | string
    userAddress?: StringFilter<"UserKycLogs"> | string
    levelName?: StringFilter<"UserKycLogs"> | string
    type?: StringFilter<"UserKycLogs"> | string
    reviewStatus?: StringFilter<"UserKycLogs"> | string
    reviewAnswer?: StringNullableFilter<"UserKycLogs"> | string | null
    rejectedType?: StringNullableFilter<"UserKycLogs"> | string | null
    clientComment?: StringNullableFilter<"UserKycLogs"> | string | null
    moderationComment?: StringNullableFilter<"UserKycLogs"> | string | null
  }

  export type UserKycLogsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    correlationId?: SortOrder
    applicantId?: SortOrder
    userAddress?: SortOrder
    levelName?: SortOrder
    type?: SortOrder
    reviewStatus?: SortOrder
    reviewAnswer?: SortOrderInput | SortOrder
    rejectedType?: SortOrderInput | SortOrder
    clientComment?: SortOrderInput | SortOrder
    moderationComment?: SortOrderInput | SortOrder
    _relevance?: UserKycLogsOrderByRelevanceInput
  }

  export type UserKycLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserKycLogsWhereInput | UserKycLogsWhereInput[]
    OR?: UserKycLogsWhereInput[]
    NOT?: UserKycLogsWhereInput | UserKycLogsWhereInput[]
    createdAt?: BigIntFilter<"UserKycLogs"> | bigint | number
    correlationId?: StringFilter<"UserKycLogs"> | string
    applicantId?: StringFilter<"UserKycLogs"> | string
    userAddress?: StringFilter<"UserKycLogs"> | string
    levelName?: StringFilter<"UserKycLogs"> | string
    type?: StringFilter<"UserKycLogs"> | string
    reviewStatus?: StringFilter<"UserKycLogs"> | string
    reviewAnswer?: StringNullableFilter<"UserKycLogs"> | string | null
    rejectedType?: StringNullableFilter<"UserKycLogs"> | string | null
    clientComment?: StringNullableFilter<"UserKycLogs"> | string | null
    moderationComment?: StringNullableFilter<"UserKycLogs"> | string | null
  }, "id">

  export type UserKycLogsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    correlationId?: SortOrder
    applicantId?: SortOrder
    userAddress?: SortOrder
    levelName?: SortOrder
    type?: SortOrder
    reviewStatus?: SortOrder
    reviewAnswer?: SortOrderInput | SortOrder
    rejectedType?: SortOrderInput | SortOrder
    clientComment?: SortOrderInput | SortOrder
    moderationComment?: SortOrderInput | SortOrder
    _count?: UserKycLogsCountOrderByAggregateInput
    _avg?: UserKycLogsAvgOrderByAggregateInput
    _max?: UserKycLogsMaxOrderByAggregateInput
    _min?: UserKycLogsMinOrderByAggregateInput
    _sum?: UserKycLogsSumOrderByAggregateInput
  }

  export type UserKycLogsScalarWhereWithAggregatesInput = {
    AND?: UserKycLogsScalarWhereWithAggregatesInput | UserKycLogsScalarWhereWithAggregatesInput[]
    OR?: UserKycLogsScalarWhereWithAggregatesInput[]
    NOT?: UserKycLogsScalarWhereWithAggregatesInput | UserKycLogsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"UserKycLogs"> | bigint | number
    createdAt?: BigIntWithAggregatesFilter<"UserKycLogs"> | bigint | number
    correlationId?: StringWithAggregatesFilter<"UserKycLogs"> | string
    applicantId?: StringWithAggregatesFilter<"UserKycLogs"> | string
    userAddress?: StringWithAggregatesFilter<"UserKycLogs"> | string
    levelName?: StringWithAggregatesFilter<"UserKycLogs"> | string
    type?: StringWithAggregatesFilter<"UserKycLogs"> | string
    reviewStatus?: StringWithAggregatesFilter<"UserKycLogs"> | string
    reviewAnswer?: StringNullableWithAggregatesFilter<"UserKycLogs"> | string | null
    rejectedType?: StringNullableWithAggregatesFilter<"UserKycLogs"> | string | null
    clientComment?: StringNullableWithAggregatesFilter<"UserKycLogs"> | string | null
    moderationComment?: StringNullableWithAggregatesFilter<"UserKycLogs"> | string | null
  }

  export type UserEnvWhereInput = {
    AND?: UserEnvWhereInput | UserEnvWhereInput[]
    OR?: UserEnvWhereInput[]
    NOT?: UserEnvWhereInput | UserEnvWhereInput[]
    userAddress?: StringFilter<"UserEnv"> | string
    env?: StringFilter<"UserEnv"> | string
  }

  export type UserEnvOrderByWithRelationInput = {
    userAddress?: SortOrder
    env?: SortOrder
    _relevance?: UserEnvOrderByRelevanceInput
  }

  export type UserEnvWhereUniqueInput = Prisma.AtLeast<{
    userAddress?: string
    AND?: UserEnvWhereInput | UserEnvWhereInput[]
    OR?: UserEnvWhereInput[]
    NOT?: UserEnvWhereInput | UserEnvWhereInput[]
    env?: StringFilter<"UserEnv"> | string
  }, "userAddress">

  export type UserEnvOrderByWithAggregationInput = {
    userAddress?: SortOrder
    env?: SortOrder
    _count?: UserEnvCountOrderByAggregateInput
    _max?: UserEnvMaxOrderByAggregateInput
    _min?: UserEnvMinOrderByAggregateInput
  }

  export type UserEnvScalarWhereWithAggregatesInput = {
    AND?: UserEnvScalarWhereWithAggregatesInput | UserEnvScalarWhereWithAggregatesInput[]
    OR?: UserEnvScalarWhereWithAggregatesInput[]
    NOT?: UserEnvScalarWhereWithAggregatesInput | UserEnvScalarWhereWithAggregatesInput[]
    userAddress?: StringWithAggregatesFilter<"UserEnv"> | string
    env?: StringWithAggregatesFilter<"UserEnv"> | string
  }

  export type UserKycStatusCreateInput = {
    id?: bigint | number
    userAddress: string
    env: string
    applicantId: string
    levelName: string
    reviewStatus: string
    reviewAnswer: string
    rejectedType: string
    updatedAt: bigint | number
    createdAt: bigint | number
  }

  export type UserKycStatusUncheckedCreateInput = {
    id?: bigint | number
    userAddress: string
    env: string
    applicantId: string
    levelName: string
    reviewStatus: string
    reviewAnswer: string
    rejectedType: string
    updatedAt: bigint | number
    createdAt: bigint | number
  }

  export type UserKycStatusUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userAddress?: StringFieldUpdateOperationsInput | string
    env?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    levelName?: StringFieldUpdateOperationsInput | string
    reviewStatus?: StringFieldUpdateOperationsInput | string
    reviewAnswer?: StringFieldUpdateOperationsInput | string
    rejectedType?: StringFieldUpdateOperationsInput | string
    updatedAt?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserKycStatusUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userAddress?: StringFieldUpdateOperationsInput | string
    env?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    levelName?: StringFieldUpdateOperationsInput | string
    reviewStatus?: StringFieldUpdateOperationsInput | string
    reviewAnswer?: StringFieldUpdateOperationsInput | string
    rejectedType?: StringFieldUpdateOperationsInput | string
    updatedAt?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserKycStatusCreateManyInput = {
    id?: bigint | number
    userAddress: string
    env: string
    applicantId: string
    levelName: string
    reviewStatus: string
    reviewAnswer: string
    rejectedType: string
    updatedAt: bigint | number
    createdAt: bigint | number
  }

  export type UserKycStatusUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userAddress?: StringFieldUpdateOperationsInput | string
    env?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    levelName?: StringFieldUpdateOperationsInput | string
    reviewStatus?: StringFieldUpdateOperationsInput | string
    reviewAnswer?: StringFieldUpdateOperationsInput | string
    rejectedType?: StringFieldUpdateOperationsInput | string
    updatedAt?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserKycStatusUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userAddress?: StringFieldUpdateOperationsInput | string
    env?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    levelName?: StringFieldUpdateOperationsInput | string
    reviewStatus?: StringFieldUpdateOperationsInput | string
    reviewAnswer?: StringFieldUpdateOperationsInput | string
    rejectedType?: StringFieldUpdateOperationsInput | string
    updatedAt?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserKycLogsCreateInput = {
    id?: bigint | number
    createdAt: bigint | number
    correlationId: string
    applicantId: string
    userAddress: string
    levelName: string
    type: string
    reviewStatus: string
    reviewAnswer?: string | null
    rejectedType?: string | null
    clientComment?: string | null
    moderationComment?: string | null
  }

  export type UserKycLogsUncheckedCreateInput = {
    id?: bigint | number
    createdAt: bigint | number
    correlationId: string
    applicantId: string
    userAddress: string
    levelName: string
    type: string
    reviewStatus: string
    reviewAnswer?: string | null
    rejectedType?: string | null
    clientComment?: string | null
    moderationComment?: string | null
  }

  export type UserKycLogsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: BigIntFieldUpdateOperationsInput | bigint | number
    correlationId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    userAddress?: StringFieldUpdateOperationsInput | string
    levelName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reviewStatus?: StringFieldUpdateOperationsInput | string
    reviewAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedType?: NullableStringFieldUpdateOperationsInput | string | null
    clientComment?: NullableStringFieldUpdateOperationsInput | string | null
    moderationComment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserKycLogsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: BigIntFieldUpdateOperationsInput | bigint | number
    correlationId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    userAddress?: StringFieldUpdateOperationsInput | string
    levelName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reviewStatus?: StringFieldUpdateOperationsInput | string
    reviewAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedType?: NullableStringFieldUpdateOperationsInput | string | null
    clientComment?: NullableStringFieldUpdateOperationsInput | string | null
    moderationComment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserKycLogsCreateManyInput = {
    id?: bigint | number
    createdAt: bigint | number
    correlationId: string
    applicantId: string
    userAddress: string
    levelName: string
    type: string
    reviewStatus: string
    reviewAnswer?: string | null
    rejectedType?: string | null
    clientComment?: string | null
    moderationComment?: string | null
  }

  export type UserKycLogsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: BigIntFieldUpdateOperationsInput | bigint | number
    correlationId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    userAddress?: StringFieldUpdateOperationsInput | string
    levelName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reviewStatus?: StringFieldUpdateOperationsInput | string
    reviewAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedType?: NullableStringFieldUpdateOperationsInput | string | null
    clientComment?: NullableStringFieldUpdateOperationsInput | string | null
    moderationComment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserKycLogsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: BigIntFieldUpdateOperationsInput | bigint | number
    correlationId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    userAddress?: StringFieldUpdateOperationsInput | string
    levelName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reviewStatus?: StringFieldUpdateOperationsInput | string
    reviewAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedType?: NullableStringFieldUpdateOperationsInput | string | null
    clientComment?: NullableStringFieldUpdateOperationsInput | string | null
    moderationComment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserEnvCreateInput = {
    userAddress: string
    env: string
  }

  export type UserEnvUncheckedCreateInput = {
    userAddress: string
    env: string
  }

  export type UserEnvUpdateInput = {
    userAddress?: StringFieldUpdateOperationsInput | string
    env?: StringFieldUpdateOperationsInput | string
  }

  export type UserEnvUncheckedUpdateInput = {
    userAddress?: StringFieldUpdateOperationsInput | string
    env?: StringFieldUpdateOperationsInput | string
  }

  export type UserEnvCreateManyInput = {
    userAddress: string
    env: string
  }

  export type UserEnvUpdateManyMutationInput = {
    userAddress?: StringFieldUpdateOperationsInput | string
    env?: StringFieldUpdateOperationsInput | string
  }

  export type UserEnvUncheckedUpdateManyInput = {
    userAddress?: StringFieldUpdateOperationsInput | string
    env?: StringFieldUpdateOperationsInput | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserKycStatusOrderByRelevanceInput = {
    fields: UserKycStatusOrderByRelevanceFieldEnum | UserKycStatusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserKycStatusCountOrderByAggregateInput = {
    id?: SortOrder
    userAddress?: SortOrder
    env?: SortOrder
    applicantId?: SortOrder
    levelName?: SortOrder
    reviewStatus?: SortOrder
    reviewAnswer?: SortOrder
    rejectedType?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserKycStatusAvgOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserKycStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    userAddress?: SortOrder
    env?: SortOrder
    applicantId?: SortOrder
    levelName?: SortOrder
    reviewStatus?: SortOrder
    reviewAnswer?: SortOrder
    rejectedType?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserKycStatusMinOrderByAggregateInput = {
    id?: SortOrder
    userAddress?: SortOrder
    env?: SortOrder
    applicantId?: SortOrder
    levelName?: SortOrder
    reviewStatus?: SortOrder
    reviewAnswer?: SortOrder
    rejectedType?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserKycStatusSumOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserKycLogsOrderByRelevanceInput = {
    fields: UserKycLogsOrderByRelevanceFieldEnum | UserKycLogsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserKycLogsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    correlationId?: SortOrder
    applicantId?: SortOrder
    userAddress?: SortOrder
    levelName?: SortOrder
    type?: SortOrder
    reviewStatus?: SortOrder
    reviewAnswer?: SortOrder
    rejectedType?: SortOrder
    clientComment?: SortOrder
    moderationComment?: SortOrder
  }

  export type UserKycLogsAvgOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type UserKycLogsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    correlationId?: SortOrder
    applicantId?: SortOrder
    userAddress?: SortOrder
    levelName?: SortOrder
    type?: SortOrder
    reviewStatus?: SortOrder
    reviewAnswer?: SortOrder
    rejectedType?: SortOrder
    clientComment?: SortOrder
    moderationComment?: SortOrder
  }

  export type UserKycLogsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    correlationId?: SortOrder
    applicantId?: SortOrder
    userAddress?: SortOrder
    levelName?: SortOrder
    type?: SortOrder
    reviewStatus?: SortOrder
    reviewAnswer?: SortOrder
    rejectedType?: SortOrder
    clientComment?: SortOrder
    moderationComment?: SortOrder
  }

  export type UserKycLogsSumOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserEnvOrderByRelevanceInput = {
    fields: UserEnvOrderByRelevanceFieldEnum | UserEnvOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserEnvCountOrderByAggregateInput = {
    userAddress?: SortOrder
    env?: SortOrder
  }

  export type UserEnvMaxOrderByAggregateInput = {
    userAddress?: SortOrder
    env?: SortOrder
  }

  export type UserEnvMinOrderByAggregateInput = {
    userAddress?: SortOrder
    env?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}