
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model diaries
 * 
 */
export type diaries = $Result.DefaultSelection<Prisma.$diariesPayload>
/**
 * Model musics
 * 
 */
export type musics = $Result.DefaultSelection<Prisma.$musicsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diaries`: Exposes CRUD operations for the **diaries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diaries
    * const diaries = await prisma.diaries.findMany()
    * ```
    */
  get diaries(): Prisma.diariesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.musics`: Exposes CRUD operations for the **musics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Musics
    * const musics = await prisma.musics.findMany()
    * ```
    */
  get musics(): Prisma.musicsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    users: 'users',
    diaries: 'diaries',
    musics: 'musics'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "diaries" | "musics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      diaries: {
        payload: Prisma.$diariesPayload<ExtArgs>
        fields: Prisma.diariesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.diariesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diariesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.diariesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diariesPayload>
          }
          findFirst: {
            args: Prisma.diariesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diariesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.diariesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diariesPayload>
          }
          findMany: {
            args: Prisma.diariesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diariesPayload>[]
          }
          create: {
            args: Prisma.diariesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diariesPayload>
          }
          createMany: {
            args: Prisma.diariesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.diariesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diariesPayload>[]
          }
          delete: {
            args: Prisma.diariesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diariesPayload>
          }
          update: {
            args: Prisma.diariesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diariesPayload>
          }
          deleteMany: {
            args: Prisma.diariesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.diariesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.diariesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diariesPayload>[]
          }
          upsert: {
            args: Prisma.diariesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diariesPayload>
          }
          aggregate: {
            args: Prisma.DiariesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiaries>
          }
          groupBy: {
            args: Prisma.diariesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiariesGroupByOutputType>[]
          }
          count: {
            args: Prisma.diariesCountArgs<ExtArgs>
            result: $Utils.Optional<DiariesCountAggregateOutputType> | number
          }
        }
      }
      musics: {
        payload: Prisma.$musicsPayload<ExtArgs>
        fields: Prisma.musicsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.musicsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.musicsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicsPayload>
          }
          findFirst: {
            args: Prisma.musicsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.musicsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicsPayload>
          }
          findMany: {
            args: Prisma.musicsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicsPayload>[]
          }
          create: {
            args: Prisma.musicsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicsPayload>
          }
          createMany: {
            args: Prisma.musicsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.musicsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicsPayload>[]
          }
          delete: {
            args: Prisma.musicsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicsPayload>
          }
          update: {
            args: Prisma.musicsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicsPayload>
          }
          deleteMany: {
            args: Prisma.musicsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.musicsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.musicsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicsPayload>[]
          }
          upsert: {
            args: Prisma.musicsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicsPayload>
          }
          aggregate: {
            args: Prisma.MusicsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMusics>
          }
          groupBy: {
            args: Prisma.musicsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MusicsGroupByOutputType>[]
          }
          count: {
            args: Prisma.musicsCountArgs<ExtArgs>
            result: $Utils.Optional<MusicsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    diaries?: diariesOmit
    musics?: musicsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    diaries: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diaries?: boolean | UsersCountOutputTypeCountDiariesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDiariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diariesWhereInput
  }


  /**
   * Count Type DiariesCountOutputType
   */

  export type DiariesCountOutputType = {
    musics: number
  }

  export type DiariesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    musics?: boolean | DiariesCountOutputTypeCountMusicsArgs
  }

  // Custom InputTypes
  /**
   * DiariesCountOutputType without action
   */
  export type DiariesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiariesCountOutputType
     */
    select?: DiariesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiariesCountOutputType without action
   */
  export type DiariesCountOutputTypeCountMusicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: musicsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    age: number | null
  }

  export type UsersSumAggregateOutputType = {
    age: number | null
  }

  export type UsersMinAggregateOutputType = {
    userID: string | null
    username: string | null
    mail: string | null
    password: string | null
    age: number | null
    gender: string | null
    icon: string | null
    bio: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    userID: string | null
    username: string | null
    mail: string | null
    password: string | null
    age: number | null
    gender: string | null
    icon: string | null
    bio: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    userID: number
    username: number
    mail: number
    password: number
    age: number
    gender: number
    icon: number
    bio: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    age?: true
  }

  export type UsersSumAggregateInputType = {
    age?: true
  }

  export type UsersMinAggregateInputType = {
    userID?: true
    username?: true
    mail?: true
    password?: true
    age?: true
    gender?: true
    icon?: true
    bio?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    userID?: true
    username?: true
    mail?: true
    password?: true
    age?: true
    gender?: true
    icon?: true
    bio?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    userID?: true
    username?: true
    mail?: true
    password?: true
    age?: true
    gender?: true
    icon?: true
    bio?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userID: string
    username: string
    mail: string
    password: string
    age: number | null
    gender: string | null
    icon: string | null
    bio: string | null
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userID?: boolean
    username?: boolean
    mail?: boolean
    password?: boolean
    age?: boolean
    gender?: boolean
    icon?: boolean
    bio?: boolean
    created_at?: boolean
    diaries?: boolean | users$diariesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userID?: boolean
    username?: boolean
    mail?: boolean
    password?: boolean
    age?: boolean
    gender?: boolean
    icon?: boolean
    bio?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userID?: boolean
    username?: boolean
    mail?: boolean
    password?: boolean
    age?: boolean
    gender?: boolean
    icon?: boolean
    bio?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    userID?: boolean
    username?: boolean
    mail?: boolean
    password?: boolean
    age?: boolean
    gender?: boolean
    icon?: boolean
    bio?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userID" | "username" | "mail" | "password" | "age" | "gender" | "icon" | "bio" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diaries?: boolean | users$diariesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      diaries: Prisma.$diariesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userID: string
      username: string
      mail: string
      password: string
      age: number | null
      gender: string | null
      icon: string | null
      bio: string | null
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userID`
     * const usersWithUserIDOnly = await prisma.users.findMany({ select: { userID: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userID`
     * const usersWithUserIDOnly = await prisma.users.createManyAndReturn({
     *   select: { userID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userID`
     * const usersWithUserIDOnly = await prisma.users.updateManyAndReturn({
     *   select: { userID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diaries<T extends users$diariesArgs<ExtArgs> = {}>(args?: Subset<T, users$diariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diariesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly userID: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly mail: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly age: FieldRef<"users", 'Int'>
    readonly gender: FieldRef<"users", 'String'>
    readonly icon: FieldRef<"users", 'String'>
    readonly bio: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.diaries
   */
  export type users$diariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diaries
     */
    select?: diariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diaries
     */
    omit?: diariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diariesInclude<ExtArgs> | null
    where?: diariesWhereInput
    orderBy?: diariesOrderByWithRelationInput | diariesOrderByWithRelationInput[]
    cursor?: diariesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiariesScalarFieldEnum | DiariesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model diaries
   */

  export type AggregateDiaries = {
    _count: DiariesCountAggregateOutputType | null
    _min: DiariesMinAggregateOutputType | null
    _max: DiariesMaxAggregateOutputType | null
  }

  export type DiariesMinAggregateOutputType = {
    diaryID: string | null
    poster: string | null
    title: string | null
    score: string | null
    weather: string | null
    people: string | null
    hobby: string | null
    mood: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DiariesMaxAggregateOutputType = {
    diaryID: string | null
    poster: string | null
    title: string | null
    score: string | null
    weather: string | null
    people: string | null
    hobby: string | null
    mood: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DiariesCountAggregateOutputType = {
    diaryID: number
    poster: number
    title: number
    score: number
    weather: number
    people: number
    hobby: number
    mood: number
    content: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DiariesMinAggregateInputType = {
    diaryID?: true
    poster?: true
    title?: true
    score?: true
    weather?: true
    people?: true
    hobby?: true
    mood?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type DiariesMaxAggregateInputType = {
    diaryID?: true
    poster?: true
    title?: true
    score?: true
    weather?: true
    people?: true
    hobby?: true
    mood?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type DiariesCountAggregateInputType = {
    diaryID?: true
    poster?: true
    title?: true
    score?: true
    weather?: true
    people?: true
    hobby?: true
    mood?: true
    content?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DiariesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diaries to aggregate.
     */
    where?: diariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diaries to fetch.
     */
    orderBy?: diariesOrderByWithRelationInput | diariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: diariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned diaries
    **/
    _count?: true | DiariesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiariesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiariesMaxAggregateInputType
  }

  export type GetDiariesAggregateType<T extends DiariesAggregateArgs> = {
        [P in keyof T & keyof AggregateDiaries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiaries[P]>
      : GetScalarType<T[P], AggregateDiaries[P]>
  }




  export type diariesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diariesWhereInput
    orderBy?: diariesOrderByWithAggregationInput | diariesOrderByWithAggregationInput[]
    by: DiariesScalarFieldEnum[] | DiariesScalarFieldEnum
    having?: diariesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiariesCountAggregateInputType | true
    _min?: DiariesMinAggregateInputType
    _max?: DiariesMaxAggregateInputType
  }

  export type DiariesGroupByOutputType = {
    diaryID: string
    poster: string
    title: string
    score: string | null
    weather: string | null
    people: string | null
    hobby: string | null
    mood: string | null
    content: string
    created_at: Date
    updated_at: Date
    _count: DiariesCountAggregateOutputType | null
    _min: DiariesMinAggregateOutputType | null
    _max: DiariesMaxAggregateOutputType | null
  }

  type GetDiariesGroupByPayload<T extends diariesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiariesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiariesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiariesGroupByOutputType[P]>
            : GetScalarType<T[P], DiariesGroupByOutputType[P]>
        }
      >
    >


  export type diariesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    diaryID?: boolean
    poster?: boolean
    title?: boolean
    score?: boolean
    weather?: boolean
    people?: boolean
    hobby?: boolean
    mood?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    musics?: boolean | diaries$musicsArgs<ExtArgs>
    _count?: boolean | DiariesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diaries"]>

  export type diariesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    diaryID?: boolean
    poster?: boolean
    title?: boolean
    score?: boolean
    weather?: boolean
    people?: boolean
    hobby?: boolean
    mood?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diaries"]>

  export type diariesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    diaryID?: boolean
    poster?: boolean
    title?: boolean
    score?: boolean
    weather?: boolean
    people?: boolean
    hobby?: boolean
    mood?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diaries"]>

  export type diariesSelectScalar = {
    diaryID?: boolean
    poster?: boolean
    title?: boolean
    score?: boolean
    weather?: boolean
    people?: boolean
    hobby?: boolean
    mood?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type diariesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"diaryID" | "poster" | "title" | "score" | "weather" | "people" | "hobby" | "mood" | "content" | "created_at" | "updated_at", ExtArgs["result"]["diaries"]>
  export type diariesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    musics?: boolean | diaries$musicsArgs<ExtArgs>
    _count?: boolean | DiariesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type diariesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type diariesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $diariesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "diaries"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      musics: Prisma.$musicsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      diaryID: string
      poster: string
      title: string
      score: string | null
      weather: string | null
      people: string | null
      hobby: string | null
      mood: string | null
      content: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["diaries"]>
    composites: {}
  }

  type diariesGetPayload<S extends boolean | null | undefined | diariesDefaultArgs> = $Result.GetResult<Prisma.$diariesPayload, S>

  type diariesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<diariesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiariesCountAggregateInputType | true
    }

  export interface diariesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['diaries'], meta: { name: 'diaries' } }
    /**
     * Find zero or one Diaries that matches the filter.
     * @param {diariesFindUniqueArgs} args - Arguments to find a Diaries
     * @example
     * // Get one Diaries
     * const diaries = await prisma.diaries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends diariesFindUniqueArgs>(args: SelectSubset<T, diariesFindUniqueArgs<ExtArgs>>): Prisma__diariesClient<$Result.GetResult<Prisma.$diariesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diaries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {diariesFindUniqueOrThrowArgs} args - Arguments to find a Diaries
     * @example
     * // Get one Diaries
     * const diaries = await prisma.diaries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends diariesFindUniqueOrThrowArgs>(args: SelectSubset<T, diariesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__diariesClient<$Result.GetResult<Prisma.$diariesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diariesFindFirstArgs} args - Arguments to find a Diaries
     * @example
     * // Get one Diaries
     * const diaries = await prisma.diaries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends diariesFindFirstArgs>(args?: SelectSubset<T, diariesFindFirstArgs<ExtArgs>>): Prisma__diariesClient<$Result.GetResult<Prisma.$diariesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diaries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diariesFindFirstOrThrowArgs} args - Arguments to find a Diaries
     * @example
     * // Get one Diaries
     * const diaries = await prisma.diaries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends diariesFindFirstOrThrowArgs>(args?: SelectSubset<T, diariesFindFirstOrThrowArgs<ExtArgs>>): Prisma__diariesClient<$Result.GetResult<Prisma.$diariesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diariesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diaries
     * const diaries = await prisma.diaries.findMany()
     * 
     * // Get first 10 Diaries
     * const diaries = await prisma.diaries.findMany({ take: 10 })
     * 
     * // Only select the `diaryID`
     * const diariesWithDiaryIDOnly = await prisma.diaries.findMany({ select: { diaryID: true } })
     * 
     */
    findMany<T extends diariesFindManyArgs>(args?: SelectSubset<T, diariesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diariesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diaries.
     * @param {diariesCreateArgs} args - Arguments to create a Diaries.
     * @example
     * // Create one Diaries
     * const Diaries = await prisma.diaries.create({
     *   data: {
     *     // ... data to create a Diaries
     *   }
     * })
     * 
     */
    create<T extends diariesCreateArgs>(args: SelectSubset<T, diariesCreateArgs<ExtArgs>>): Prisma__diariesClient<$Result.GetResult<Prisma.$diariesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diaries.
     * @param {diariesCreateManyArgs} args - Arguments to create many Diaries.
     * @example
     * // Create many Diaries
     * const diaries = await prisma.diaries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends diariesCreateManyArgs>(args?: SelectSubset<T, diariesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diaries and returns the data saved in the database.
     * @param {diariesCreateManyAndReturnArgs} args - Arguments to create many Diaries.
     * @example
     * // Create many Diaries
     * const diaries = await prisma.diaries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diaries and only return the `diaryID`
     * const diariesWithDiaryIDOnly = await prisma.diaries.createManyAndReturn({
     *   select: { diaryID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends diariesCreateManyAndReturnArgs>(args?: SelectSubset<T, diariesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diariesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diaries.
     * @param {diariesDeleteArgs} args - Arguments to delete one Diaries.
     * @example
     * // Delete one Diaries
     * const Diaries = await prisma.diaries.delete({
     *   where: {
     *     // ... filter to delete one Diaries
     *   }
     * })
     * 
     */
    delete<T extends diariesDeleteArgs>(args: SelectSubset<T, diariesDeleteArgs<ExtArgs>>): Prisma__diariesClient<$Result.GetResult<Prisma.$diariesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diaries.
     * @param {diariesUpdateArgs} args - Arguments to update one Diaries.
     * @example
     * // Update one Diaries
     * const diaries = await prisma.diaries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends diariesUpdateArgs>(args: SelectSubset<T, diariesUpdateArgs<ExtArgs>>): Prisma__diariesClient<$Result.GetResult<Prisma.$diariesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diaries.
     * @param {diariesDeleteManyArgs} args - Arguments to filter Diaries to delete.
     * @example
     * // Delete a few Diaries
     * const { count } = await prisma.diaries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends diariesDeleteManyArgs>(args?: SelectSubset<T, diariesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diariesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diaries
     * const diaries = await prisma.diaries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends diariesUpdateManyArgs>(args: SelectSubset<T, diariesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diaries and returns the data updated in the database.
     * @param {diariesUpdateManyAndReturnArgs} args - Arguments to update many Diaries.
     * @example
     * // Update many Diaries
     * const diaries = await prisma.diaries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diaries and only return the `diaryID`
     * const diariesWithDiaryIDOnly = await prisma.diaries.updateManyAndReturn({
     *   select: { diaryID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends diariesUpdateManyAndReturnArgs>(args: SelectSubset<T, diariesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diariesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diaries.
     * @param {diariesUpsertArgs} args - Arguments to update or create a Diaries.
     * @example
     * // Update or create a Diaries
     * const diaries = await prisma.diaries.upsert({
     *   create: {
     *     // ... data to create a Diaries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diaries we want to update
     *   }
     * })
     */
    upsert<T extends diariesUpsertArgs>(args: SelectSubset<T, diariesUpsertArgs<ExtArgs>>): Prisma__diariesClient<$Result.GetResult<Prisma.$diariesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diariesCountArgs} args - Arguments to filter Diaries to count.
     * @example
     * // Count the number of Diaries
     * const count = await prisma.diaries.count({
     *   where: {
     *     // ... the filter for the Diaries we want to count
     *   }
     * })
    **/
    count<T extends diariesCountArgs>(
      args?: Subset<T, diariesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiariesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiariesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiariesAggregateArgs>(args: Subset<T, DiariesAggregateArgs>): Prisma.PrismaPromise<GetDiariesAggregateType<T>>

    /**
     * Group by Diaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diariesGroupByArgs} args - Group by arguments.
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
      T extends diariesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: diariesGroupByArgs['orderBy'] }
        : { orderBy?: diariesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, diariesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiariesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the diaries model
   */
  readonly fields: diariesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for diaries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__diariesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    musics<T extends diaries$musicsArgs<ExtArgs> = {}>(args?: Subset<T, diaries$musicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$musicsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the diaries model
   */
  interface diariesFieldRefs {
    readonly diaryID: FieldRef<"diaries", 'String'>
    readonly poster: FieldRef<"diaries", 'String'>
    readonly title: FieldRef<"diaries", 'String'>
    readonly score: FieldRef<"diaries", 'String'>
    readonly weather: FieldRef<"diaries", 'String'>
    readonly people: FieldRef<"diaries", 'String'>
    readonly hobby: FieldRef<"diaries", 'String'>
    readonly mood: FieldRef<"diaries", 'String'>
    readonly content: FieldRef<"diaries", 'String'>
    readonly created_at: FieldRef<"diaries", 'DateTime'>
    readonly updated_at: FieldRef<"diaries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * diaries findUnique
   */
  export type diariesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diaries
     */
    select?: diariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diaries
     */
    omit?: diariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diariesInclude<ExtArgs> | null
    /**
     * Filter, which diaries to fetch.
     */
    where: diariesWhereUniqueInput
  }

  /**
   * diaries findUniqueOrThrow
   */
  export type diariesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diaries
     */
    select?: diariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diaries
     */
    omit?: diariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diariesInclude<ExtArgs> | null
    /**
     * Filter, which diaries to fetch.
     */
    where: diariesWhereUniqueInput
  }

  /**
   * diaries findFirst
   */
  export type diariesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diaries
     */
    select?: diariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diaries
     */
    omit?: diariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diariesInclude<ExtArgs> | null
    /**
     * Filter, which diaries to fetch.
     */
    where?: diariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diaries to fetch.
     */
    orderBy?: diariesOrderByWithRelationInput | diariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diaries.
     */
    cursor?: diariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diaries.
     */
    distinct?: DiariesScalarFieldEnum | DiariesScalarFieldEnum[]
  }

  /**
   * diaries findFirstOrThrow
   */
  export type diariesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diaries
     */
    select?: diariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diaries
     */
    omit?: diariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diariesInclude<ExtArgs> | null
    /**
     * Filter, which diaries to fetch.
     */
    where?: diariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diaries to fetch.
     */
    orderBy?: diariesOrderByWithRelationInput | diariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diaries.
     */
    cursor?: diariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diaries.
     */
    distinct?: DiariesScalarFieldEnum | DiariesScalarFieldEnum[]
  }

  /**
   * diaries findMany
   */
  export type diariesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diaries
     */
    select?: diariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diaries
     */
    omit?: diariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diariesInclude<ExtArgs> | null
    /**
     * Filter, which diaries to fetch.
     */
    where?: diariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diaries to fetch.
     */
    orderBy?: diariesOrderByWithRelationInput | diariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing diaries.
     */
    cursor?: diariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diaries.
     */
    skip?: number
    distinct?: DiariesScalarFieldEnum | DiariesScalarFieldEnum[]
  }

  /**
   * diaries create
   */
  export type diariesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diaries
     */
    select?: diariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diaries
     */
    omit?: diariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diariesInclude<ExtArgs> | null
    /**
     * The data needed to create a diaries.
     */
    data: XOR<diariesCreateInput, diariesUncheckedCreateInput>
  }

  /**
   * diaries createMany
   */
  export type diariesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many diaries.
     */
    data: diariesCreateManyInput | diariesCreateManyInput[]
  }

  /**
   * diaries createManyAndReturn
   */
  export type diariesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diaries
     */
    select?: diariesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the diaries
     */
    omit?: diariesOmit<ExtArgs> | null
    /**
     * The data used to create many diaries.
     */
    data: diariesCreateManyInput | diariesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diariesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * diaries update
   */
  export type diariesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diaries
     */
    select?: diariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diaries
     */
    omit?: diariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diariesInclude<ExtArgs> | null
    /**
     * The data needed to update a diaries.
     */
    data: XOR<diariesUpdateInput, diariesUncheckedUpdateInput>
    /**
     * Choose, which diaries to update.
     */
    where: diariesWhereUniqueInput
  }

  /**
   * diaries updateMany
   */
  export type diariesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update diaries.
     */
    data: XOR<diariesUpdateManyMutationInput, diariesUncheckedUpdateManyInput>
    /**
     * Filter which diaries to update
     */
    where?: diariesWhereInput
    /**
     * Limit how many diaries to update.
     */
    limit?: number
  }

  /**
   * diaries updateManyAndReturn
   */
  export type diariesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diaries
     */
    select?: diariesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the diaries
     */
    omit?: diariesOmit<ExtArgs> | null
    /**
     * The data used to update diaries.
     */
    data: XOR<diariesUpdateManyMutationInput, diariesUncheckedUpdateManyInput>
    /**
     * Filter which diaries to update
     */
    where?: diariesWhereInput
    /**
     * Limit how many diaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diariesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * diaries upsert
   */
  export type diariesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diaries
     */
    select?: diariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diaries
     */
    omit?: diariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diariesInclude<ExtArgs> | null
    /**
     * The filter to search for the diaries to update in case it exists.
     */
    where: diariesWhereUniqueInput
    /**
     * In case the diaries found by the `where` argument doesn't exist, create a new diaries with this data.
     */
    create: XOR<diariesCreateInput, diariesUncheckedCreateInput>
    /**
     * In case the diaries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<diariesUpdateInput, diariesUncheckedUpdateInput>
  }

  /**
   * diaries delete
   */
  export type diariesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diaries
     */
    select?: diariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diaries
     */
    omit?: diariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diariesInclude<ExtArgs> | null
    /**
     * Filter which diaries to delete.
     */
    where: diariesWhereUniqueInput
  }

  /**
   * diaries deleteMany
   */
  export type diariesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diaries to delete
     */
    where?: diariesWhereInput
    /**
     * Limit how many diaries to delete.
     */
    limit?: number
  }

  /**
   * diaries.musics
   */
  export type diaries$musicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musics
     */
    select?: musicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the musics
     */
    omit?: musicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicsInclude<ExtArgs> | null
    where?: musicsWhereInput
    orderBy?: musicsOrderByWithRelationInput | musicsOrderByWithRelationInput[]
    cursor?: musicsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicsScalarFieldEnum | MusicsScalarFieldEnum[]
  }

  /**
   * diaries without action
   */
  export type diariesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diaries
     */
    select?: diariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diaries
     */
    omit?: diariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diariesInclude<ExtArgs> | null
  }


  /**
   * Model musics
   */

  export type AggregateMusics = {
    _count: MusicsCountAggregateOutputType | null
    _min: MusicsMinAggregateOutputType | null
    _max: MusicsMaxAggregateOutputType | null
  }

  export type MusicsMinAggregateOutputType = {
    musicID: string | null
    title: string | null
    music_url: string | null
    generation_type: string | null
    parameters: string | null
    created_at: Date | null
  }

  export type MusicsMaxAggregateOutputType = {
    musicID: string | null
    title: string | null
    music_url: string | null
    generation_type: string | null
    parameters: string | null
    created_at: Date | null
  }

  export type MusicsCountAggregateOutputType = {
    musicID: number
    title: number
    music_url: number
    generation_type: number
    parameters: number
    created_at: number
    _all: number
  }


  export type MusicsMinAggregateInputType = {
    musicID?: true
    title?: true
    music_url?: true
    generation_type?: true
    parameters?: true
    created_at?: true
  }

  export type MusicsMaxAggregateInputType = {
    musicID?: true
    title?: true
    music_url?: true
    generation_type?: true
    parameters?: true
    created_at?: true
  }

  export type MusicsCountAggregateInputType = {
    musicID?: true
    title?: true
    music_url?: true
    generation_type?: true
    parameters?: true
    created_at?: true
    _all?: true
  }

  export type MusicsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which musics to aggregate.
     */
    where?: musicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of musics to fetch.
     */
    orderBy?: musicsOrderByWithRelationInput | musicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: musicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` musics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` musics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned musics
    **/
    _count?: true | MusicsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MusicsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MusicsMaxAggregateInputType
  }

  export type GetMusicsAggregateType<T extends MusicsAggregateArgs> = {
        [P in keyof T & keyof AggregateMusics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMusics[P]>
      : GetScalarType<T[P], AggregateMusics[P]>
  }




  export type musicsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: musicsWhereInput
    orderBy?: musicsOrderByWithAggregationInput | musicsOrderByWithAggregationInput[]
    by: MusicsScalarFieldEnum[] | MusicsScalarFieldEnum
    having?: musicsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MusicsCountAggregateInputType | true
    _min?: MusicsMinAggregateInputType
    _max?: MusicsMaxAggregateInputType
  }

  export type MusicsGroupByOutputType = {
    musicID: string
    title: string
    music_url: string
    generation_type: string | null
    parameters: string | null
    created_at: Date
    _count: MusicsCountAggregateOutputType | null
    _min: MusicsMinAggregateOutputType | null
    _max: MusicsMaxAggregateOutputType | null
  }

  type GetMusicsGroupByPayload<T extends musicsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MusicsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MusicsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MusicsGroupByOutputType[P]>
            : GetScalarType<T[P], MusicsGroupByOutputType[P]>
        }
      >
    >


  export type musicsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    musicID?: boolean
    title?: boolean
    music_url?: boolean
    generation_type?: boolean
    parameters?: boolean
    created_at?: boolean
    diary?: boolean | diariesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["musics"]>

  export type musicsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    musicID?: boolean
    title?: boolean
    music_url?: boolean
    generation_type?: boolean
    parameters?: boolean
    created_at?: boolean
    diary?: boolean | diariesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["musics"]>

  export type musicsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    musicID?: boolean
    title?: boolean
    music_url?: boolean
    generation_type?: boolean
    parameters?: boolean
    created_at?: boolean
    diary?: boolean | diariesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["musics"]>

  export type musicsSelectScalar = {
    musicID?: boolean
    title?: boolean
    music_url?: boolean
    generation_type?: boolean
    parameters?: boolean
    created_at?: boolean
  }

  export type musicsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"musicID" | "title" | "music_url" | "generation_type" | "parameters" | "created_at", ExtArgs["result"]["musics"]>
  export type musicsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diary?: boolean | diariesDefaultArgs<ExtArgs>
  }
  export type musicsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diary?: boolean | diariesDefaultArgs<ExtArgs>
  }
  export type musicsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diary?: boolean | diariesDefaultArgs<ExtArgs>
  }

  export type $musicsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "musics"
    objects: {
      diary: Prisma.$diariesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      musicID: string
      title: string
      music_url: string
      generation_type: string | null
      parameters: string | null
      created_at: Date
    }, ExtArgs["result"]["musics"]>
    composites: {}
  }

  type musicsGetPayload<S extends boolean | null | undefined | musicsDefaultArgs> = $Result.GetResult<Prisma.$musicsPayload, S>

  type musicsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<musicsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MusicsCountAggregateInputType | true
    }

  export interface musicsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['musics'], meta: { name: 'musics' } }
    /**
     * Find zero or one Musics that matches the filter.
     * @param {musicsFindUniqueArgs} args - Arguments to find a Musics
     * @example
     * // Get one Musics
     * const musics = await prisma.musics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends musicsFindUniqueArgs>(args: SelectSubset<T, musicsFindUniqueArgs<ExtArgs>>): Prisma__musicsClient<$Result.GetResult<Prisma.$musicsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Musics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {musicsFindUniqueOrThrowArgs} args - Arguments to find a Musics
     * @example
     * // Get one Musics
     * const musics = await prisma.musics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends musicsFindUniqueOrThrowArgs>(args: SelectSubset<T, musicsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__musicsClient<$Result.GetResult<Prisma.$musicsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Musics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicsFindFirstArgs} args - Arguments to find a Musics
     * @example
     * // Get one Musics
     * const musics = await prisma.musics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends musicsFindFirstArgs>(args?: SelectSubset<T, musicsFindFirstArgs<ExtArgs>>): Prisma__musicsClient<$Result.GetResult<Prisma.$musicsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Musics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicsFindFirstOrThrowArgs} args - Arguments to find a Musics
     * @example
     * // Get one Musics
     * const musics = await prisma.musics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends musicsFindFirstOrThrowArgs>(args?: SelectSubset<T, musicsFindFirstOrThrowArgs<ExtArgs>>): Prisma__musicsClient<$Result.GetResult<Prisma.$musicsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Musics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Musics
     * const musics = await prisma.musics.findMany()
     * 
     * // Get first 10 Musics
     * const musics = await prisma.musics.findMany({ take: 10 })
     * 
     * // Only select the `musicID`
     * const musicsWithMusicIDOnly = await prisma.musics.findMany({ select: { musicID: true } })
     * 
     */
    findMany<T extends musicsFindManyArgs>(args?: SelectSubset<T, musicsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$musicsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Musics.
     * @param {musicsCreateArgs} args - Arguments to create a Musics.
     * @example
     * // Create one Musics
     * const Musics = await prisma.musics.create({
     *   data: {
     *     // ... data to create a Musics
     *   }
     * })
     * 
     */
    create<T extends musicsCreateArgs>(args: SelectSubset<T, musicsCreateArgs<ExtArgs>>): Prisma__musicsClient<$Result.GetResult<Prisma.$musicsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Musics.
     * @param {musicsCreateManyArgs} args - Arguments to create many Musics.
     * @example
     * // Create many Musics
     * const musics = await prisma.musics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends musicsCreateManyArgs>(args?: SelectSubset<T, musicsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Musics and returns the data saved in the database.
     * @param {musicsCreateManyAndReturnArgs} args - Arguments to create many Musics.
     * @example
     * // Create many Musics
     * const musics = await prisma.musics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Musics and only return the `musicID`
     * const musicsWithMusicIDOnly = await prisma.musics.createManyAndReturn({
     *   select: { musicID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends musicsCreateManyAndReturnArgs>(args?: SelectSubset<T, musicsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$musicsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Musics.
     * @param {musicsDeleteArgs} args - Arguments to delete one Musics.
     * @example
     * // Delete one Musics
     * const Musics = await prisma.musics.delete({
     *   where: {
     *     // ... filter to delete one Musics
     *   }
     * })
     * 
     */
    delete<T extends musicsDeleteArgs>(args: SelectSubset<T, musicsDeleteArgs<ExtArgs>>): Prisma__musicsClient<$Result.GetResult<Prisma.$musicsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Musics.
     * @param {musicsUpdateArgs} args - Arguments to update one Musics.
     * @example
     * // Update one Musics
     * const musics = await prisma.musics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends musicsUpdateArgs>(args: SelectSubset<T, musicsUpdateArgs<ExtArgs>>): Prisma__musicsClient<$Result.GetResult<Prisma.$musicsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Musics.
     * @param {musicsDeleteManyArgs} args - Arguments to filter Musics to delete.
     * @example
     * // Delete a few Musics
     * const { count } = await prisma.musics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends musicsDeleteManyArgs>(args?: SelectSubset<T, musicsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Musics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Musics
     * const musics = await prisma.musics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends musicsUpdateManyArgs>(args: SelectSubset<T, musicsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Musics and returns the data updated in the database.
     * @param {musicsUpdateManyAndReturnArgs} args - Arguments to update many Musics.
     * @example
     * // Update many Musics
     * const musics = await prisma.musics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Musics and only return the `musicID`
     * const musicsWithMusicIDOnly = await prisma.musics.updateManyAndReturn({
     *   select: { musicID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends musicsUpdateManyAndReturnArgs>(args: SelectSubset<T, musicsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$musicsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Musics.
     * @param {musicsUpsertArgs} args - Arguments to update or create a Musics.
     * @example
     * // Update or create a Musics
     * const musics = await prisma.musics.upsert({
     *   create: {
     *     // ... data to create a Musics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Musics we want to update
     *   }
     * })
     */
    upsert<T extends musicsUpsertArgs>(args: SelectSubset<T, musicsUpsertArgs<ExtArgs>>): Prisma__musicsClient<$Result.GetResult<Prisma.$musicsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Musics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicsCountArgs} args - Arguments to filter Musics to count.
     * @example
     * // Count the number of Musics
     * const count = await prisma.musics.count({
     *   where: {
     *     // ... the filter for the Musics we want to count
     *   }
     * })
    **/
    count<T extends musicsCountArgs>(
      args?: Subset<T, musicsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MusicsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Musics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MusicsAggregateArgs>(args: Subset<T, MusicsAggregateArgs>): Prisma.PrismaPromise<GetMusicsAggregateType<T>>

    /**
     * Group by Musics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicsGroupByArgs} args - Group by arguments.
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
      T extends musicsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: musicsGroupByArgs['orderBy'] }
        : { orderBy?: musicsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, musicsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the musics model
   */
  readonly fields: musicsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for musics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__musicsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diary<T extends diariesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, diariesDefaultArgs<ExtArgs>>): Prisma__diariesClient<$Result.GetResult<Prisma.$diariesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the musics model
   */
  interface musicsFieldRefs {
    readonly musicID: FieldRef<"musics", 'String'>
    readonly title: FieldRef<"musics", 'String'>
    readonly music_url: FieldRef<"musics", 'String'>
    readonly generation_type: FieldRef<"musics", 'String'>
    readonly parameters: FieldRef<"musics", 'String'>
    readonly created_at: FieldRef<"musics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * musics findUnique
   */
  export type musicsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musics
     */
    select?: musicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the musics
     */
    omit?: musicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicsInclude<ExtArgs> | null
    /**
     * Filter, which musics to fetch.
     */
    where: musicsWhereUniqueInput
  }

  /**
   * musics findUniqueOrThrow
   */
  export type musicsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musics
     */
    select?: musicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the musics
     */
    omit?: musicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicsInclude<ExtArgs> | null
    /**
     * Filter, which musics to fetch.
     */
    where: musicsWhereUniqueInput
  }

  /**
   * musics findFirst
   */
  export type musicsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musics
     */
    select?: musicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the musics
     */
    omit?: musicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicsInclude<ExtArgs> | null
    /**
     * Filter, which musics to fetch.
     */
    where?: musicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of musics to fetch.
     */
    orderBy?: musicsOrderByWithRelationInput | musicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for musics.
     */
    cursor?: musicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` musics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` musics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of musics.
     */
    distinct?: MusicsScalarFieldEnum | MusicsScalarFieldEnum[]
  }

  /**
   * musics findFirstOrThrow
   */
  export type musicsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musics
     */
    select?: musicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the musics
     */
    omit?: musicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicsInclude<ExtArgs> | null
    /**
     * Filter, which musics to fetch.
     */
    where?: musicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of musics to fetch.
     */
    orderBy?: musicsOrderByWithRelationInput | musicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for musics.
     */
    cursor?: musicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` musics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` musics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of musics.
     */
    distinct?: MusicsScalarFieldEnum | MusicsScalarFieldEnum[]
  }

  /**
   * musics findMany
   */
  export type musicsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musics
     */
    select?: musicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the musics
     */
    omit?: musicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicsInclude<ExtArgs> | null
    /**
     * Filter, which musics to fetch.
     */
    where?: musicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of musics to fetch.
     */
    orderBy?: musicsOrderByWithRelationInput | musicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing musics.
     */
    cursor?: musicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` musics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` musics.
     */
    skip?: number
    distinct?: MusicsScalarFieldEnum | MusicsScalarFieldEnum[]
  }

  /**
   * musics create
   */
  export type musicsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musics
     */
    select?: musicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the musics
     */
    omit?: musicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicsInclude<ExtArgs> | null
    /**
     * The data needed to create a musics.
     */
    data: XOR<musicsCreateInput, musicsUncheckedCreateInput>
  }

  /**
   * musics createMany
   */
  export type musicsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many musics.
     */
    data: musicsCreateManyInput | musicsCreateManyInput[]
  }

  /**
   * musics createManyAndReturn
   */
  export type musicsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musics
     */
    select?: musicsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the musics
     */
    omit?: musicsOmit<ExtArgs> | null
    /**
     * The data used to create many musics.
     */
    data: musicsCreateManyInput | musicsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * musics update
   */
  export type musicsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musics
     */
    select?: musicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the musics
     */
    omit?: musicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicsInclude<ExtArgs> | null
    /**
     * The data needed to update a musics.
     */
    data: XOR<musicsUpdateInput, musicsUncheckedUpdateInput>
    /**
     * Choose, which musics to update.
     */
    where: musicsWhereUniqueInput
  }

  /**
   * musics updateMany
   */
  export type musicsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update musics.
     */
    data: XOR<musicsUpdateManyMutationInput, musicsUncheckedUpdateManyInput>
    /**
     * Filter which musics to update
     */
    where?: musicsWhereInput
    /**
     * Limit how many musics to update.
     */
    limit?: number
  }

  /**
   * musics updateManyAndReturn
   */
  export type musicsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musics
     */
    select?: musicsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the musics
     */
    omit?: musicsOmit<ExtArgs> | null
    /**
     * The data used to update musics.
     */
    data: XOR<musicsUpdateManyMutationInput, musicsUncheckedUpdateManyInput>
    /**
     * Filter which musics to update
     */
    where?: musicsWhereInput
    /**
     * Limit how many musics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * musics upsert
   */
  export type musicsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musics
     */
    select?: musicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the musics
     */
    omit?: musicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicsInclude<ExtArgs> | null
    /**
     * The filter to search for the musics to update in case it exists.
     */
    where: musicsWhereUniqueInput
    /**
     * In case the musics found by the `where` argument doesn't exist, create a new musics with this data.
     */
    create: XOR<musicsCreateInput, musicsUncheckedCreateInput>
    /**
     * In case the musics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<musicsUpdateInput, musicsUncheckedUpdateInput>
  }

  /**
   * musics delete
   */
  export type musicsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musics
     */
    select?: musicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the musics
     */
    omit?: musicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicsInclude<ExtArgs> | null
    /**
     * Filter which musics to delete.
     */
    where: musicsWhereUniqueInput
  }

  /**
   * musics deleteMany
   */
  export type musicsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which musics to delete
     */
    where?: musicsWhereInput
    /**
     * Limit how many musics to delete.
     */
    limit?: number
  }

  /**
   * musics without action
   */
  export type musicsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musics
     */
    select?: musicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the musics
     */
    omit?: musicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    userID: 'userID',
    username: 'username',
    mail: 'mail',
    password: 'password',
    age: 'age',
    gender: 'gender',
    icon: 'icon',
    bio: 'bio',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const DiariesScalarFieldEnum: {
    diaryID: 'diaryID',
    poster: 'poster',
    title: 'title',
    score: 'score',
    weather: 'weather',
    people: 'people',
    hobby: 'hobby',
    mood: 'mood',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DiariesScalarFieldEnum = (typeof DiariesScalarFieldEnum)[keyof typeof DiariesScalarFieldEnum]


  export const MusicsScalarFieldEnum: {
    musicID: 'musicID',
    title: 'title',
    music_url: 'music_url',
    generation_type: 'generation_type',
    parameters: 'parameters',
    created_at: 'created_at'
  };

  export type MusicsScalarFieldEnum = (typeof MusicsScalarFieldEnum)[keyof typeof MusicsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    userID?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    mail?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    age?: IntNullableFilter<"users"> | number | null
    gender?: StringNullableFilter<"users"> | string | null
    icon?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    diaries?: DiariesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    userID?: SortOrder
    username?: SortOrder
    mail?: SortOrder
    password?: SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    created_at?: SortOrder
    diaries?: diariesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    userID?: string
    mail?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    age?: IntNullableFilter<"users"> | number | null
    gender?: StringNullableFilter<"users"> | string | null
    icon?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    diaries?: DiariesListRelationFilter
  }, "userID" | "mail">

  export type usersOrderByWithAggregationInput = {
    userID?: SortOrder
    username?: SortOrder
    mail?: SortOrder
    password?: SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    userID?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    mail?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    age?: IntNullableWithAggregatesFilter<"users"> | number | null
    gender?: StringNullableWithAggregatesFilter<"users"> | string | null
    icon?: StringNullableWithAggregatesFilter<"users"> | string | null
    bio?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type diariesWhereInput = {
    AND?: diariesWhereInput | diariesWhereInput[]
    OR?: diariesWhereInput[]
    NOT?: diariesWhereInput | diariesWhereInput[]
    diaryID?: StringFilter<"diaries"> | string
    poster?: StringFilter<"diaries"> | string
    title?: StringFilter<"diaries"> | string
    score?: StringNullableFilter<"diaries"> | string | null
    weather?: StringNullableFilter<"diaries"> | string | null
    people?: StringNullableFilter<"diaries"> | string | null
    hobby?: StringNullableFilter<"diaries"> | string | null
    mood?: StringNullableFilter<"diaries"> | string | null
    content?: StringFilter<"diaries"> | string
    created_at?: DateTimeFilter<"diaries"> | Date | string
    updated_at?: DateTimeFilter<"diaries"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    musics?: MusicsListRelationFilter
  }

  export type diariesOrderByWithRelationInput = {
    diaryID?: SortOrder
    poster?: SortOrder
    title?: SortOrder
    score?: SortOrderInput | SortOrder
    weather?: SortOrderInput | SortOrder
    people?: SortOrderInput | SortOrder
    hobby?: SortOrderInput | SortOrder
    mood?: SortOrderInput | SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: usersOrderByWithRelationInput
    musics?: musicsOrderByRelationAggregateInput
  }

  export type diariesWhereUniqueInput = Prisma.AtLeast<{
    diaryID?: string
    AND?: diariesWhereInput | diariesWhereInput[]
    OR?: diariesWhereInput[]
    NOT?: diariesWhereInput | diariesWhereInput[]
    poster?: StringFilter<"diaries"> | string
    title?: StringFilter<"diaries"> | string
    score?: StringNullableFilter<"diaries"> | string | null
    weather?: StringNullableFilter<"diaries"> | string | null
    people?: StringNullableFilter<"diaries"> | string | null
    hobby?: StringNullableFilter<"diaries"> | string | null
    mood?: StringNullableFilter<"diaries"> | string | null
    content?: StringFilter<"diaries"> | string
    created_at?: DateTimeFilter<"diaries"> | Date | string
    updated_at?: DateTimeFilter<"diaries"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    musics?: MusicsListRelationFilter
  }, "diaryID">

  export type diariesOrderByWithAggregationInput = {
    diaryID?: SortOrder
    poster?: SortOrder
    title?: SortOrder
    score?: SortOrderInput | SortOrder
    weather?: SortOrderInput | SortOrder
    people?: SortOrderInput | SortOrder
    hobby?: SortOrderInput | SortOrder
    mood?: SortOrderInput | SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: diariesCountOrderByAggregateInput
    _max?: diariesMaxOrderByAggregateInput
    _min?: diariesMinOrderByAggregateInput
  }

  export type diariesScalarWhereWithAggregatesInput = {
    AND?: diariesScalarWhereWithAggregatesInput | diariesScalarWhereWithAggregatesInput[]
    OR?: diariesScalarWhereWithAggregatesInput[]
    NOT?: diariesScalarWhereWithAggregatesInput | diariesScalarWhereWithAggregatesInput[]
    diaryID?: StringWithAggregatesFilter<"diaries"> | string
    poster?: StringWithAggregatesFilter<"diaries"> | string
    title?: StringWithAggregatesFilter<"diaries"> | string
    score?: StringNullableWithAggregatesFilter<"diaries"> | string | null
    weather?: StringNullableWithAggregatesFilter<"diaries"> | string | null
    people?: StringNullableWithAggregatesFilter<"diaries"> | string | null
    hobby?: StringNullableWithAggregatesFilter<"diaries"> | string | null
    mood?: StringNullableWithAggregatesFilter<"diaries"> | string | null
    content?: StringWithAggregatesFilter<"diaries"> | string
    created_at?: DateTimeWithAggregatesFilter<"diaries"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"diaries"> | Date | string
  }

  export type musicsWhereInput = {
    AND?: musicsWhereInput | musicsWhereInput[]
    OR?: musicsWhereInput[]
    NOT?: musicsWhereInput | musicsWhereInput[]
    musicID?: StringFilter<"musics"> | string
    title?: StringFilter<"musics"> | string
    music_url?: StringFilter<"musics"> | string
    generation_type?: StringNullableFilter<"musics"> | string | null
    parameters?: StringNullableFilter<"musics"> | string | null
    created_at?: DateTimeFilter<"musics"> | Date | string
    diary?: XOR<DiariesScalarRelationFilter, diariesWhereInput>
  }

  export type musicsOrderByWithRelationInput = {
    musicID?: SortOrder
    title?: SortOrder
    music_url?: SortOrder
    generation_type?: SortOrderInput | SortOrder
    parameters?: SortOrderInput | SortOrder
    created_at?: SortOrder
    diary?: diariesOrderByWithRelationInput
  }

  export type musicsWhereUniqueInput = Prisma.AtLeast<{
    musicID?: string
    AND?: musicsWhereInput | musicsWhereInput[]
    OR?: musicsWhereInput[]
    NOT?: musicsWhereInput | musicsWhereInput[]
    title?: StringFilter<"musics"> | string
    music_url?: StringFilter<"musics"> | string
    generation_type?: StringNullableFilter<"musics"> | string | null
    parameters?: StringNullableFilter<"musics"> | string | null
    created_at?: DateTimeFilter<"musics"> | Date | string
    diary?: XOR<DiariesScalarRelationFilter, diariesWhereInput>
  }, "musicID">

  export type musicsOrderByWithAggregationInput = {
    musicID?: SortOrder
    title?: SortOrder
    music_url?: SortOrder
    generation_type?: SortOrderInput | SortOrder
    parameters?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: musicsCountOrderByAggregateInput
    _max?: musicsMaxOrderByAggregateInput
    _min?: musicsMinOrderByAggregateInput
  }

  export type musicsScalarWhereWithAggregatesInput = {
    AND?: musicsScalarWhereWithAggregatesInput | musicsScalarWhereWithAggregatesInput[]
    OR?: musicsScalarWhereWithAggregatesInput[]
    NOT?: musicsScalarWhereWithAggregatesInput | musicsScalarWhereWithAggregatesInput[]
    musicID?: StringWithAggregatesFilter<"musics"> | string
    title?: StringWithAggregatesFilter<"musics"> | string
    music_url?: StringWithAggregatesFilter<"musics"> | string
    generation_type?: StringNullableWithAggregatesFilter<"musics"> | string | null
    parameters?: StringNullableWithAggregatesFilter<"musics"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"musics"> | Date | string
  }

  export type usersCreateInput = {
    userID?: string
    username: string
    mail: string
    password: string
    age?: number | null
    gender?: string | null
    icon?: string | null
    bio?: string | null
    created_at?: Date | string
    diaries?: diariesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    userID?: string
    username: string
    mail: string
    password: string
    age?: number | null
    gender?: string | null
    icon?: string | null
    bio?: string | null
    created_at?: Date | string
    diaries?: diariesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    userID?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    diaries?: diariesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    userID?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    diaries?: diariesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    userID?: string
    username: string
    mail: string
    password: string
    age?: number | null
    gender?: string | null
    icon?: string | null
    bio?: string | null
    created_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    userID?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    userID?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type diariesCreateInput = {
    diaryID?: string
    title: string
    score?: string | null
    weather?: string | null
    people?: string | null
    hobby?: string | null
    mood?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    user: usersCreateNestedOneWithoutDiariesInput
    musics?: musicsCreateNestedManyWithoutDiaryInput
  }

  export type diariesUncheckedCreateInput = {
    diaryID?: string
    poster: string
    title: string
    score?: string | null
    weather?: string | null
    people?: string | null
    hobby?: string | null
    mood?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    musics?: musicsUncheckedCreateNestedManyWithoutDiaryInput
  }

  export type diariesUpdateInput = {
    diaryID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    score?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    hobby?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutDiariesNestedInput
    musics?: musicsUpdateManyWithoutDiaryNestedInput
  }

  export type diariesUncheckedUpdateInput = {
    diaryID?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    score?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    hobby?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    musics?: musicsUncheckedUpdateManyWithoutDiaryNestedInput
  }

  export type diariesCreateManyInput = {
    diaryID?: string
    poster: string
    title: string
    score?: string | null
    weather?: string | null
    people?: string | null
    hobby?: string | null
    mood?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type diariesUpdateManyMutationInput = {
    diaryID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    score?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    hobby?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type diariesUncheckedUpdateManyInput = {
    diaryID?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    score?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    hobby?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type musicsCreateInput = {
    musicID?: string
    music_url: string
    generation_type?: string | null
    parameters?: string | null
    created_at?: Date | string
    diary: diariesCreateNestedOneWithoutMusicsInput
  }

  export type musicsUncheckedCreateInput = {
    musicID?: string
    title: string
    music_url: string
    generation_type?: string | null
    parameters?: string | null
    created_at?: Date | string
  }

  export type musicsUpdateInput = {
    musicID?: StringFieldUpdateOperationsInput | string
    music_url?: StringFieldUpdateOperationsInput | string
    generation_type?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    diary?: diariesUpdateOneRequiredWithoutMusicsNestedInput
  }

  export type musicsUncheckedUpdateInput = {
    musicID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    music_url?: StringFieldUpdateOperationsInput | string
    generation_type?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type musicsCreateManyInput = {
    musicID?: string
    title: string
    music_url: string
    generation_type?: string | null
    parameters?: string | null
    created_at?: Date | string
  }

  export type musicsUpdateManyMutationInput = {
    musicID?: StringFieldUpdateOperationsInput | string
    music_url?: StringFieldUpdateOperationsInput | string
    generation_type?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type musicsUncheckedUpdateManyInput = {
    musicID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    music_url?: StringFieldUpdateOperationsInput | string
    generation_type?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DiariesListRelationFilter = {
    every?: diariesWhereInput
    some?: diariesWhereInput
    none?: diariesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type diariesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    userID?: SortOrder
    username?: SortOrder
    mail?: SortOrder
    password?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    icon?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    userID?: SortOrder
    username?: SortOrder
    mail?: SortOrder
    password?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    icon?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    userID?: SortOrder
    username?: SortOrder
    mail?: SortOrder
    password?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    icon?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    age?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type MusicsListRelationFilter = {
    every?: musicsWhereInput
    some?: musicsWhereInput
    none?: musicsWhereInput
  }

  export type musicsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type diariesCountOrderByAggregateInput = {
    diaryID?: SortOrder
    poster?: SortOrder
    title?: SortOrder
    score?: SortOrder
    weather?: SortOrder
    people?: SortOrder
    hobby?: SortOrder
    mood?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type diariesMaxOrderByAggregateInput = {
    diaryID?: SortOrder
    poster?: SortOrder
    title?: SortOrder
    score?: SortOrder
    weather?: SortOrder
    people?: SortOrder
    hobby?: SortOrder
    mood?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type diariesMinOrderByAggregateInput = {
    diaryID?: SortOrder
    poster?: SortOrder
    title?: SortOrder
    score?: SortOrder
    weather?: SortOrder
    people?: SortOrder
    hobby?: SortOrder
    mood?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DiariesScalarRelationFilter = {
    is?: diariesWhereInput
    isNot?: diariesWhereInput
  }

  export type musicsCountOrderByAggregateInput = {
    musicID?: SortOrder
    title?: SortOrder
    music_url?: SortOrder
    generation_type?: SortOrder
    parameters?: SortOrder
    created_at?: SortOrder
  }

  export type musicsMaxOrderByAggregateInput = {
    musicID?: SortOrder
    title?: SortOrder
    music_url?: SortOrder
    generation_type?: SortOrder
    parameters?: SortOrder
    created_at?: SortOrder
  }

  export type musicsMinOrderByAggregateInput = {
    musicID?: SortOrder
    title?: SortOrder
    music_url?: SortOrder
    generation_type?: SortOrder
    parameters?: SortOrder
    created_at?: SortOrder
  }

  export type diariesCreateNestedManyWithoutUserInput = {
    create?: XOR<diariesCreateWithoutUserInput, diariesUncheckedCreateWithoutUserInput> | diariesCreateWithoutUserInput[] | diariesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: diariesCreateOrConnectWithoutUserInput | diariesCreateOrConnectWithoutUserInput[]
    createMany?: diariesCreateManyUserInputEnvelope
    connect?: diariesWhereUniqueInput | diariesWhereUniqueInput[]
  }

  export type diariesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<diariesCreateWithoutUserInput, diariesUncheckedCreateWithoutUserInput> | diariesCreateWithoutUserInput[] | diariesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: diariesCreateOrConnectWithoutUserInput | diariesCreateOrConnectWithoutUserInput[]
    createMany?: diariesCreateManyUserInputEnvelope
    connect?: diariesWhereUniqueInput | diariesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type diariesUpdateManyWithoutUserNestedInput = {
    create?: XOR<diariesCreateWithoutUserInput, diariesUncheckedCreateWithoutUserInput> | diariesCreateWithoutUserInput[] | diariesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: diariesCreateOrConnectWithoutUserInput | diariesCreateOrConnectWithoutUserInput[]
    upsert?: diariesUpsertWithWhereUniqueWithoutUserInput | diariesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: diariesCreateManyUserInputEnvelope
    set?: diariesWhereUniqueInput | diariesWhereUniqueInput[]
    disconnect?: diariesWhereUniqueInput | diariesWhereUniqueInput[]
    delete?: diariesWhereUniqueInput | diariesWhereUniqueInput[]
    connect?: diariesWhereUniqueInput | diariesWhereUniqueInput[]
    update?: diariesUpdateWithWhereUniqueWithoutUserInput | diariesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: diariesUpdateManyWithWhereWithoutUserInput | diariesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: diariesScalarWhereInput | diariesScalarWhereInput[]
  }

  export type diariesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<diariesCreateWithoutUserInput, diariesUncheckedCreateWithoutUserInput> | diariesCreateWithoutUserInput[] | diariesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: diariesCreateOrConnectWithoutUserInput | diariesCreateOrConnectWithoutUserInput[]
    upsert?: diariesUpsertWithWhereUniqueWithoutUserInput | diariesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: diariesCreateManyUserInputEnvelope
    set?: diariesWhereUniqueInput | diariesWhereUniqueInput[]
    disconnect?: diariesWhereUniqueInput | diariesWhereUniqueInput[]
    delete?: diariesWhereUniqueInput | diariesWhereUniqueInput[]
    connect?: diariesWhereUniqueInput | diariesWhereUniqueInput[]
    update?: diariesUpdateWithWhereUniqueWithoutUserInput | diariesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: diariesUpdateManyWithWhereWithoutUserInput | diariesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: diariesScalarWhereInput | diariesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutDiariesInput = {
    create?: XOR<usersCreateWithoutDiariesInput, usersUncheckedCreateWithoutDiariesInput>
    connectOrCreate?: usersCreateOrConnectWithoutDiariesInput
    connect?: usersWhereUniqueInput
  }

  export type musicsCreateNestedManyWithoutDiaryInput = {
    create?: XOR<musicsCreateWithoutDiaryInput, musicsUncheckedCreateWithoutDiaryInput> | musicsCreateWithoutDiaryInput[] | musicsUncheckedCreateWithoutDiaryInput[]
    connectOrCreate?: musicsCreateOrConnectWithoutDiaryInput | musicsCreateOrConnectWithoutDiaryInput[]
    createMany?: musicsCreateManyDiaryInputEnvelope
    connect?: musicsWhereUniqueInput | musicsWhereUniqueInput[]
  }

  export type musicsUncheckedCreateNestedManyWithoutDiaryInput = {
    create?: XOR<musicsCreateWithoutDiaryInput, musicsUncheckedCreateWithoutDiaryInput> | musicsCreateWithoutDiaryInput[] | musicsUncheckedCreateWithoutDiaryInput[]
    connectOrCreate?: musicsCreateOrConnectWithoutDiaryInput | musicsCreateOrConnectWithoutDiaryInput[]
    createMany?: musicsCreateManyDiaryInputEnvelope
    connect?: musicsWhereUniqueInput | musicsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutDiariesNestedInput = {
    create?: XOR<usersCreateWithoutDiariesInput, usersUncheckedCreateWithoutDiariesInput>
    connectOrCreate?: usersCreateOrConnectWithoutDiariesInput
    upsert?: usersUpsertWithoutDiariesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutDiariesInput, usersUpdateWithoutDiariesInput>, usersUncheckedUpdateWithoutDiariesInput>
  }

  export type musicsUpdateManyWithoutDiaryNestedInput = {
    create?: XOR<musicsCreateWithoutDiaryInput, musicsUncheckedCreateWithoutDiaryInput> | musicsCreateWithoutDiaryInput[] | musicsUncheckedCreateWithoutDiaryInput[]
    connectOrCreate?: musicsCreateOrConnectWithoutDiaryInput | musicsCreateOrConnectWithoutDiaryInput[]
    upsert?: musicsUpsertWithWhereUniqueWithoutDiaryInput | musicsUpsertWithWhereUniqueWithoutDiaryInput[]
    createMany?: musicsCreateManyDiaryInputEnvelope
    set?: musicsWhereUniqueInput | musicsWhereUniqueInput[]
    disconnect?: musicsWhereUniqueInput | musicsWhereUniqueInput[]
    delete?: musicsWhereUniqueInput | musicsWhereUniqueInput[]
    connect?: musicsWhereUniqueInput | musicsWhereUniqueInput[]
    update?: musicsUpdateWithWhereUniqueWithoutDiaryInput | musicsUpdateWithWhereUniqueWithoutDiaryInput[]
    updateMany?: musicsUpdateManyWithWhereWithoutDiaryInput | musicsUpdateManyWithWhereWithoutDiaryInput[]
    deleteMany?: musicsScalarWhereInput | musicsScalarWhereInput[]
  }

  export type musicsUncheckedUpdateManyWithoutDiaryNestedInput = {
    create?: XOR<musicsCreateWithoutDiaryInput, musicsUncheckedCreateWithoutDiaryInput> | musicsCreateWithoutDiaryInput[] | musicsUncheckedCreateWithoutDiaryInput[]
    connectOrCreate?: musicsCreateOrConnectWithoutDiaryInput | musicsCreateOrConnectWithoutDiaryInput[]
    upsert?: musicsUpsertWithWhereUniqueWithoutDiaryInput | musicsUpsertWithWhereUniqueWithoutDiaryInput[]
    createMany?: musicsCreateManyDiaryInputEnvelope
    set?: musicsWhereUniqueInput | musicsWhereUniqueInput[]
    disconnect?: musicsWhereUniqueInput | musicsWhereUniqueInput[]
    delete?: musicsWhereUniqueInput | musicsWhereUniqueInput[]
    connect?: musicsWhereUniqueInput | musicsWhereUniqueInput[]
    update?: musicsUpdateWithWhereUniqueWithoutDiaryInput | musicsUpdateWithWhereUniqueWithoutDiaryInput[]
    updateMany?: musicsUpdateManyWithWhereWithoutDiaryInput | musicsUpdateManyWithWhereWithoutDiaryInput[]
    deleteMany?: musicsScalarWhereInput | musicsScalarWhereInput[]
  }

  export type diariesCreateNestedOneWithoutMusicsInput = {
    create?: XOR<diariesCreateWithoutMusicsInput, diariesUncheckedCreateWithoutMusicsInput>
    connectOrCreate?: diariesCreateOrConnectWithoutMusicsInput
    connect?: diariesWhereUniqueInput
  }

  export type diariesUpdateOneRequiredWithoutMusicsNestedInput = {
    create?: XOR<diariesCreateWithoutMusicsInput, diariesUncheckedCreateWithoutMusicsInput>
    connectOrCreate?: diariesCreateOrConnectWithoutMusicsInput
    upsert?: diariesUpsertWithoutMusicsInput
    connect?: diariesWhereUniqueInput
    update?: XOR<XOR<diariesUpdateToOneWithWhereWithoutMusicsInput, diariesUpdateWithoutMusicsInput>, diariesUncheckedUpdateWithoutMusicsInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type diariesCreateWithoutUserInput = {
    diaryID?: string
    title: string
    score?: string | null
    weather?: string | null
    people?: string | null
    hobby?: string | null
    mood?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    musics?: musicsCreateNestedManyWithoutDiaryInput
  }

  export type diariesUncheckedCreateWithoutUserInput = {
    diaryID?: string
    title: string
    score?: string | null
    weather?: string | null
    people?: string | null
    hobby?: string | null
    mood?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    musics?: musicsUncheckedCreateNestedManyWithoutDiaryInput
  }

  export type diariesCreateOrConnectWithoutUserInput = {
    where: diariesWhereUniqueInput
    create: XOR<diariesCreateWithoutUserInput, diariesUncheckedCreateWithoutUserInput>
  }

  export type diariesCreateManyUserInputEnvelope = {
    data: diariesCreateManyUserInput | diariesCreateManyUserInput[]
  }

  export type diariesUpsertWithWhereUniqueWithoutUserInput = {
    where: diariesWhereUniqueInput
    update: XOR<diariesUpdateWithoutUserInput, diariesUncheckedUpdateWithoutUserInput>
    create: XOR<diariesCreateWithoutUserInput, diariesUncheckedCreateWithoutUserInput>
  }

  export type diariesUpdateWithWhereUniqueWithoutUserInput = {
    where: diariesWhereUniqueInput
    data: XOR<diariesUpdateWithoutUserInput, diariesUncheckedUpdateWithoutUserInput>
  }

  export type diariesUpdateManyWithWhereWithoutUserInput = {
    where: diariesScalarWhereInput
    data: XOR<diariesUpdateManyMutationInput, diariesUncheckedUpdateManyWithoutUserInput>
  }

  export type diariesScalarWhereInput = {
    AND?: diariesScalarWhereInput | diariesScalarWhereInput[]
    OR?: diariesScalarWhereInput[]
    NOT?: diariesScalarWhereInput | diariesScalarWhereInput[]
    diaryID?: StringFilter<"diaries"> | string
    poster?: StringFilter<"diaries"> | string
    title?: StringFilter<"diaries"> | string
    score?: StringNullableFilter<"diaries"> | string | null
    weather?: StringNullableFilter<"diaries"> | string | null
    people?: StringNullableFilter<"diaries"> | string | null
    hobby?: StringNullableFilter<"diaries"> | string | null
    mood?: StringNullableFilter<"diaries"> | string | null
    content?: StringFilter<"diaries"> | string
    created_at?: DateTimeFilter<"diaries"> | Date | string
    updated_at?: DateTimeFilter<"diaries"> | Date | string
  }

  export type usersCreateWithoutDiariesInput = {
    userID?: string
    username: string
    mail: string
    password: string
    age?: number | null
    gender?: string | null
    icon?: string | null
    bio?: string | null
    created_at?: Date | string
  }

  export type usersUncheckedCreateWithoutDiariesInput = {
    userID?: string
    username: string
    mail: string
    password: string
    age?: number | null
    gender?: string | null
    icon?: string | null
    bio?: string | null
    created_at?: Date | string
  }

  export type usersCreateOrConnectWithoutDiariesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDiariesInput, usersUncheckedCreateWithoutDiariesInput>
  }

  export type musicsCreateWithoutDiaryInput = {
    musicID?: string
    music_url: string
    generation_type?: string | null
    parameters?: string | null
    created_at?: Date | string
  }

  export type musicsUncheckedCreateWithoutDiaryInput = {
    musicID?: string
    music_url: string
    generation_type?: string | null
    parameters?: string | null
    created_at?: Date | string
  }

  export type musicsCreateOrConnectWithoutDiaryInput = {
    where: musicsWhereUniqueInput
    create: XOR<musicsCreateWithoutDiaryInput, musicsUncheckedCreateWithoutDiaryInput>
  }

  export type musicsCreateManyDiaryInputEnvelope = {
    data: musicsCreateManyDiaryInput | musicsCreateManyDiaryInput[]
  }

  export type usersUpsertWithoutDiariesInput = {
    update: XOR<usersUpdateWithoutDiariesInput, usersUncheckedUpdateWithoutDiariesInput>
    create: XOR<usersCreateWithoutDiariesInput, usersUncheckedCreateWithoutDiariesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutDiariesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutDiariesInput, usersUncheckedUpdateWithoutDiariesInput>
  }

  export type usersUpdateWithoutDiariesInput = {
    userID?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateWithoutDiariesInput = {
    userID?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type musicsUpsertWithWhereUniqueWithoutDiaryInput = {
    where: musicsWhereUniqueInput
    update: XOR<musicsUpdateWithoutDiaryInput, musicsUncheckedUpdateWithoutDiaryInput>
    create: XOR<musicsCreateWithoutDiaryInput, musicsUncheckedCreateWithoutDiaryInput>
  }

  export type musicsUpdateWithWhereUniqueWithoutDiaryInput = {
    where: musicsWhereUniqueInput
    data: XOR<musicsUpdateWithoutDiaryInput, musicsUncheckedUpdateWithoutDiaryInput>
  }

  export type musicsUpdateManyWithWhereWithoutDiaryInput = {
    where: musicsScalarWhereInput
    data: XOR<musicsUpdateManyMutationInput, musicsUncheckedUpdateManyWithoutDiaryInput>
  }

  export type musicsScalarWhereInput = {
    AND?: musicsScalarWhereInput | musicsScalarWhereInput[]
    OR?: musicsScalarWhereInput[]
    NOT?: musicsScalarWhereInput | musicsScalarWhereInput[]
    musicID?: StringFilter<"musics"> | string
    title?: StringFilter<"musics"> | string
    music_url?: StringFilter<"musics"> | string
    generation_type?: StringNullableFilter<"musics"> | string | null
    parameters?: StringNullableFilter<"musics"> | string | null
    created_at?: DateTimeFilter<"musics"> | Date | string
  }

  export type diariesCreateWithoutMusicsInput = {
    diaryID?: string
    title: string
    score?: string | null
    weather?: string | null
    people?: string | null
    hobby?: string | null
    mood?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    user: usersCreateNestedOneWithoutDiariesInput
  }

  export type diariesUncheckedCreateWithoutMusicsInput = {
    diaryID?: string
    poster: string
    title: string
    score?: string | null
    weather?: string | null
    people?: string | null
    hobby?: string | null
    mood?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type diariesCreateOrConnectWithoutMusicsInput = {
    where: diariesWhereUniqueInput
    create: XOR<diariesCreateWithoutMusicsInput, diariesUncheckedCreateWithoutMusicsInput>
  }

  export type diariesUpsertWithoutMusicsInput = {
    update: XOR<diariesUpdateWithoutMusicsInput, diariesUncheckedUpdateWithoutMusicsInput>
    create: XOR<diariesCreateWithoutMusicsInput, diariesUncheckedCreateWithoutMusicsInput>
    where?: diariesWhereInput
  }

  export type diariesUpdateToOneWithWhereWithoutMusicsInput = {
    where?: diariesWhereInput
    data: XOR<diariesUpdateWithoutMusicsInput, diariesUncheckedUpdateWithoutMusicsInput>
  }

  export type diariesUpdateWithoutMusicsInput = {
    diaryID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    score?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    hobby?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutDiariesNestedInput
  }

  export type diariesUncheckedUpdateWithoutMusicsInput = {
    diaryID?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    score?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    hobby?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type diariesCreateManyUserInput = {
    diaryID?: string
    title: string
    score?: string | null
    weather?: string | null
    people?: string | null
    hobby?: string | null
    mood?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type diariesUpdateWithoutUserInput = {
    diaryID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    score?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    hobby?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    musics?: musicsUpdateManyWithoutDiaryNestedInput
  }

  export type diariesUncheckedUpdateWithoutUserInput = {
    diaryID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    score?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    hobby?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    musics?: musicsUncheckedUpdateManyWithoutDiaryNestedInput
  }

  export type diariesUncheckedUpdateManyWithoutUserInput = {
    diaryID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    score?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    hobby?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type musicsCreateManyDiaryInput = {
    musicID?: string
    music_url: string
    generation_type?: string | null
    parameters?: string | null
    created_at?: Date | string
  }

  export type musicsUpdateWithoutDiaryInput = {
    musicID?: StringFieldUpdateOperationsInput | string
    music_url?: StringFieldUpdateOperationsInput | string
    generation_type?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type musicsUncheckedUpdateWithoutDiaryInput = {
    musicID?: StringFieldUpdateOperationsInput | string
    music_url?: StringFieldUpdateOperationsInput | string
    generation_type?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type musicsUncheckedUpdateManyWithoutDiaryInput = {
    musicID?: StringFieldUpdateOperationsInput | string
    music_url?: StringFieldUpdateOperationsInput | string
    generation_type?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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