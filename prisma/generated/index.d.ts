
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model FileMessage
 * 
 */
export type FileMessage = $Result.DefaultSelection<Prisma.$FileMessagePayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model ChatMember
 * 
 */
export type ChatMember = $Result.DefaultSelection<Prisma.$ChatMemberPayload>
/**
 * Model ClientKey
 * 
 */
export type ClientKey = $Result.DefaultSelection<Prisma.$ClientKeyPayload>
/**
 * Model ServerKey
 * 
 */
export type ServerKey = $Result.DefaultSelection<Prisma.$ServerKeyPayload>
/**
 * Model KeyDiffie
 * 
 */
export type KeyDiffie = $Result.DefaultSelection<Prisma.$KeyDiffiePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fileMessage`: Exposes CRUD operations for the **FileMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileMessages
    * const fileMessages = await prisma.fileMessage.findMany()
    * ```
    */
  get fileMessage(): Prisma.FileMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMember`: Exposes CRUD operations for the **ChatMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMembers
    * const chatMembers = await prisma.chatMember.findMany()
    * ```
    */
  get chatMember(): Prisma.ChatMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientKey`: Exposes CRUD operations for the **ClientKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientKeys
    * const clientKeys = await prisma.clientKey.findMany()
    * ```
    */
  get clientKey(): Prisma.ClientKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serverKey`: Exposes CRUD operations for the **ServerKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServerKeys
    * const serverKeys = await prisma.serverKey.findMany()
    * ```
    */
  get serverKey(): Prisma.ServerKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keyDiffie`: Exposes CRUD operations for the **KeyDiffie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KeyDiffies
    * const keyDiffies = await prisma.keyDiffie.findMany()
    * ```
    */
  get keyDiffie(): Prisma.KeyDiffieDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    ChatMessage: 'ChatMessage',
    FileMessage: 'FileMessage',
    Chat: 'Chat',
    ChatMember: 'ChatMember',
    ClientKey: 'ClientKey',
    ServerKey: 'ServerKey',
    KeyDiffie: 'KeyDiffie'
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
      modelProps: "user" | "chatMessage" | "fileMessage" | "chat" | "chatMember" | "clientKey" | "serverKey" | "keyDiffie"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      FileMessage: {
        payload: Prisma.$FileMessagePayload<ExtArgs>
        fields: Prisma.FileMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileMessagePayload>
          }
          findFirst: {
            args: Prisma.FileMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileMessagePayload>
          }
          findMany: {
            args: Prisma.FileMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileMessagePayload>[]
          }
          create: {
            args: Prisma.FileMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileMessagePayload>
          }
          createMany: {
            args: Prisma.FileMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileMessagePayload>[]
          }
          delete: {
            args: Prisma.FileMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileMessagePayload>
          }
          update: {
            args: Prisma.FileMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileMessagePayload>
          }
          deleteMany: {
            args: Prisma.FileMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileMessagePayload>[]
          }
          upsert: {
            args: Prisma.FileMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileMessagePayload>
          }
          aggregate: {
            args: Prisma.FileMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileMessage>
          }
          groupBy: {
            args: Prisma.FileMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileMessageCountArgs<ExtArgs>
            result: $Utils.Optional<FileMessageCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      ChatMember: {
        payload: Prisma.$ChatMemberPayload<ExtArgs>
        fields: Prisma.ChatMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          findFirst: {
            args: Prisma.ChatMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          findMany: {
            args: Prisma.ChatMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[]
          }
          create: {
            args: Prisma.ChatMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          createMany: {
            args: Prisma.ChatMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[]
          }
          delete: {
            args: Prisma.ChatMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          update: {
            args: Prisma.ChatMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          deleteMany: {
            args: Prisma.ChatMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[]
          }
          upsert: {
            args: Prisma.ChatMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          aggregate: {
            args: Prisma.ChatMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMember>
          }
          groupBy: {
            args: Prisma.ChatMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMemberCountAggregateOutputType> | number
          }
        }
      }
      ClientKey: {
        payload: Prisma.$ClientKeyPayload<ExtArgs>
        fields: Prisma.ClientKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload>
          }
          findFirst: {
            args: Prisma.ClientKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload>
          }
          findMany: {
            args: Prisma.ClientKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload>[]
          }
          create: {
            args: Prisma.ClientKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload>
          }
          createMany: {
            args: Prisma.ClientKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload>[]
          }
          delete: {
            args: Prisma.ClientKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload>
          }
          update: {
            args: Prisma.ClientKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload>
          }
          deleteMany: {
            args: Prisma.ClientKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload>[]
          }
          upsert: {
            args: Prisma.ClientKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload>
          }
          aggregate: {
            args: Prisma.ClientKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientKey>
          }
          groupBy: {
            args: Prisma.ClientKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ClientKeyCountAggregateOutputType> | number
          }
        }
      }
      ServerKey: {
        payload: Prisma.$ServerKeyPayload<ExtArgs>
        fields: Prisma.ServerKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServerKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServerKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerKeyPayload>
          }
          findFirst: {
            args: Prisma.ServerKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServerKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerKeyPayload>
          }
          findMany: {
            args: Prisma.ServerKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerKeyPayload>[]
          }
          create: {
            args: Prisma.ServerKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerKeyPayload>
          }
          createMany: {
            args: Prisma.ServerKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServerKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerKeyPayload>[]
          }
          delete: {
            args: Prisma.ServerKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerKeyPayload>
          }
          update: {
            args: Prisma.ServerKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerKeyPayload>
          }
          deleteMany: {
            args: Prisma.ServerKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServerKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServerKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerKeyPayload>[]
          }
          upsert: {
            args: Prisma.ServerKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerKeyPayload>
          }
          aggregate: {
            args: Prisma.ServerKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServerKey>
          }
          groupBy: {
            args: Prisma.ServerKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServerKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServerKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ServerKeyCountAggregateOutputType> | number
          }
        }
      }
      KeyDiffie: {
        payload: Prisma.$KeyDiffiePayload<ExtArgs>
        fields: Prisma.KeyDiffieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeyDiffieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyDiffiePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeyDiffieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyDiffiePayload>
          }
          findFirst: {
            args: Prisma.KeyDiffieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyDiffiePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeyDiffieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyDiffiePayload>
          }
          findMany: {
            args: Prisma.KeyDiffieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyDiffiePayload>[]
          }
          create: {
            args: Prisma.KeyDiffieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyDiffiePayload>
          }
          createMany: {
            args: Prisma.KeyDiffieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeyDiffieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyDiffiePayload>[]
          }
          delete: {
            args: Prisma.KeyDiffieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyDiffiePayload>
          }
          update: {
            args: Prisma.KeyDiffieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyDiffiePayload>
          }
          deleteMany: {
            args: Prisma.KeyDiffieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeyDiffieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeyDiffieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyDiffiePayload>[]
          }
          upsert: {
            args: Prisma.KeyDiffieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyDiffiePayload>
          }
          aggregate: {
            args: Prisma.KeyDiffieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeyDiffie>
          }
          groupBy: {
            args: Prisma.KeyDiffieGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeyDiffieGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeyDiffieCountArgs<ExtArgs>
            result: $Utils.Optional<KeyDiffieCountAggregateOutputType> | number
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
    user?: UserOmit
    chatMessage?: ChatMessageOmit
    fileMessage?: FileMessageOmit
    chat?: ChatOmit
    chatMember?: ChatMemberOmit
    clientKey?: ClientKeyOmit
    serverKey?: ServerKeyOmit
    keyDiffie?: KeyDiffieOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    messages: number
    chatMemberships: number
    files: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    chatMemberships?: boolean | UserCountOutputTypeCountChatMembershipsArgs
    files?: boolean | UserCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileMessageWhereInput
  }


  /**
   * Count Type ChatMessageCountOutputType
   */

  export type ChatMessageCountOutputType = {
    files: number
    replies: number
  }

  export type ChatMessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | ChatMessageCountOutputTypeCountFilesArgs
    replies?: boolean | ChatMessageCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * ChatMessageCountOutputType without action
   */
  export type ChatMessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessageCountOutputType
     */
    select?: ChatMessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatMessageCountOutputType without action
   */
  export type ChatMessageCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileMessageWhereInput
  }

  /**
   * ChatMessageCountOutputType without action
   */
  export type ChatMessageCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    messages: number
    members: number
    files: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
    members?: boolean | ChatCountOutputTypeCountMembersArgs
    files?: boolean | ChatCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMemberWhereInput
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    isDeactivated: boolean | null
    deactivatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    isDeactivated: boolean | null
    deactivatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    isDeactivated: number
    deactivatedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isDeactivated?: true
    deactivatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isDeactivated?: true
    deactivatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isDeactivated?: true
    deactivatedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    isDeactivated: boolean
    deactivatedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isDeactivated?: boolean
    deactivatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | User$messagesArgs<ExtArgs>
    chatMemberships?: boolean | User$chatMembershipsArgs<ExtArgs>
    clientKey?: boolean | User$clientKeyArgs<ExtArgs>
    keyDiffie?: boolean | User$keyDiffieArgs<ExtArgs>
    files?: boolean | User$filesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isDeactivated?: boolean
    deactivatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isDeactivated?: boolean
    deactivatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isDeactivated?: boolean
    deactivatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "isDeactivated" | "deactivatedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | User$messagesArgs<ExtArgs>
    chatMemberships?: boolean | User$chatMembershipsArgs<ExtArgs>
    clientKey?: boolean | User$clientKeyArgs<ExtArgs>
    keyDiffie?: boolean | User$keyDiffieArgs<ExtArgs>
    files?: boolean | User$filesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
      chatMemberships: Prisma.$ChatMemberPayload<ExtArgs>[]
      clientKey: Prisma.$ClientKeyPayload<ExtArgs> | null
      keyDiffie: Prisma.$KeyDiffiePayload<ExtArgs> | null
      files: Prisma.$FileMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      isDeactivated: boolean
      deactivatedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMemberships<T extends User$chatMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clientKey<T extends User$clientKeyArgs<ExtArgs> = {}>(args?: Subset<T, User$clientKeyArgs<ExtArgs>>): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    keyDiffie<T extends User$keyDiffieArgs<ExtArgs> = {}>(args?: Subset<T, User$keyDiffieArgs<ExtArgs>>): Prisma__KeyDiffieClient<$Result.GetResult<Prisma.$KeyDiffiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    files<T extends User$filesArgs<ExtArgs> = {}>(args?: Subset<T, User$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isDeactivated: FieldRef<"User", 'Boolean'>
    readonly deactivatedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.chatMemberships
   */
  export type User$chatMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    where?: ChatMemberWhereInput
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    cursor?: ChatMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * User.clientKey
   */
  export type User$clientKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientKey
     */
    omit?: ClientKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientKeyInclude<ExtArgs> | null
    where?: ClientKeyWhereInput
  }

  /**
   * User.keyDiffie
   */
  export type User$keyDiffieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyDiffie
     */
    select?: KeyDiffieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyDiffie
     */
    omit?: KeyDiffieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyDiffieInclude<ExtArgs> | null
    where?: KeyDiffieWhereInput
  }

  /**
   * User.files
   */
  export type User$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileMessage
     */
    select?: FileMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileMessage
     */
    omit?: FileMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileMessageInclude<ExtArgs> | null
    where?: FileMessageWhereInput
    orderBy?: FileMessageOrderByWithRelationInput | FileMessageOrderByWithRelationInput[]
    cursor?: FileMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileMessageScalarFieldEnum | FileMessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    text: string | null
    isStarted: boolean | null
    isFake: boolean | null
    isEdited: boolean | null
    isDeleted: boolean | null
    replyToId: string | null
    userId: string | null
    chatId: string | null
    readCount: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    text: string | null
    isStarted: boolean | null
    isFake: boolean | null
    isEdited: boolean | null
    isDeleted: boolean | null
    replyToId: string | null
    userId: string | null
    chatId: string | null
    readCount: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    text: number
    isStarted: number
    isFake: number
    isEdited: number
    isDeleted: number
    replyToId: number
    userId: number
    chatId: number
    readCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    text?: true
    isStarted?: true
    isFake?: true
    isEdited?: true
    isDeleted?: true
    replyToId?: true
    userId?: true
    chatId?: true
    readCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    text?: true
    isStarted?: true
    isFake?: true
    isEdited?: true
    isDeleted?: true
    replyToId?: true
    userId?: true
    chatId?: true
    readCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    text?: true
    isStarted?: true
    isFake?: true
    isEdited?: true
    isDeleted?: true
    replyToId?: true
    userId?: true
    chatId?: true
    readCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    text: string | null
    isStarted: boolean
    isFake: boolean
    isEdited: boolean
    isDeleted: boolean
    replyToId: string | null
    userId: string
    chatId: string
    readCount: string | null
    createdAt: Date
    updatedAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    replyToId?: boolean
    userId?: boolean
    chatId?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    files?: boolean | ChatMessage$filesArgs<ExtArgs>
    replyTo?: boolean | ChatMessage$replyToArgs<ExtArgs>
    replies?: boolean | ChatMessage$repliesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    _count?: boolean | ChatMessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    replyToId?: boolean
    userId?: boolean
    chatId?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    replyTo?: boolean | ChatMessage$replyToArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    replyToId?: boolean
    userId?: boolean
    chatId?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    replyTo?: boolean | ChatMessage$replyToArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    text?: boolean
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    replyToId?: boolean
    userId?: boolean
    chatId?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "isStarted" | "isFake" | "isEdited" | "isDeleted" | "replyToId" | "userId" | "chatId" | "readCount" | "createdAt" | "updatedAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | ChatMessage$filesArgs<ExtArgs>
    replyTo?: boolean | ChatMessage$replyToArgs<ExtArgs>
    replies?: boolean | ChatMessage$repliesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    _count?: boolean | ChatMessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replyTo?: boolean | ChatMessage$replyToArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replyTo?: boolean | ChatMessage$replyToArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      files: Prisma.$FileMessagePayload<ExtArgs>[]
      replyTo: Prisma.$ChatMessagePayload<ExtArgs> | null
      replies: Prisma.$ChatMessagePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string | null
      isStarted: boolean
      isFake: boolean
      isEdited: boolean
      isDeleted: boolean
      replyToId: string | null
      userId: string
      chatId: string
      readCount: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    files<T extends ChatMessage$filesArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    replyTo<T extends ChatMessage$replyToArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$replyToArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends ChatMessage$repliesArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly text: FieldRef<"ChatMessage", 'String'>
    readonly isStarted: FieldRef<"ChatMessage", 'Boolean'>
    readonly isFake: FieldRef<"ChatMessage", 'Boolean'>
    readonly isEdited: FieldRef<"ChatMessage", 'Boolean'>
    readonly isDeleted: FieldRef<"ChatMessage", 'Boolean'>
    readonly replyToId: FieldRef<"ChatMessage", 'String'>
    readonly userId: FieldRef<"ChatMessage", 'String'>
    readonly chatId: FieldRef<"ChatMessage", 'String'>
    readonly readCount: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage.files
   */
  export type ChatMessage$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileMessage
     */
    select?: FileMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileMessage
     */
    omit?: FileMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileMessageInclude<ExtArgs> | null
    where?: FileMessageWhereInput
    orderBy?: FileMessageOrderByWithRelationInput | FileMessageOrderByWithRelationInput[]
    cursor?: FileMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileMessageScalarFieldEnum | FileMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage.replyTo
   */
  export type ChatMessage$replyToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
  }

  /**
   * ChatMessage.replies
   */
  export type ChatMessage$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model FileMessage
   */

  export type AggregateFileMessage = {
    _count: FileMessageCountAggregateOutputType | null
    _min: FileMessageMinAggregateOutputType | null
    _max: FileMessageMaxAggregateOutputType | null
  }

  export type FileMessageMinAggregateOutputType = {
    id: string | null
    fileUrl: string | null
    fileName: string | null
    fileFullName: string | null
    fileSize: string | null
    fileFormat: string | null
    chatMessageId: string | null
    userId: string | null
    chatId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileMessageMaxAggregateOutputType = {
    id: string | null
    fileUrl: string | null
    fileName: string | null
    fileFullName: string | null
    fileSize: string | null
    fileFormat: string | null
    chatMessageId: string | null
    userId: string | null
    chatId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileMessageCountAggregateOutputType = {
    id: number
    fileUrl: number
    fileName: number
    fileFullName: number
    fileSize: number
    fileFormat: number
    chatMessageId: number
    userId: number
    chatId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileMessageMinAggregateInputType = {
    id?: true
    fileUrl?: true
    fileName?: true
    fileFullName?: true
    fileSize?: true
    fileFormat?: true
    chatMessageId?: true
    userId?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileMessageMaxAggregateInputType = {
    id?: true
    fileUrl?: true
    fileName?: true
    fileFullName?: true
    fileSize?: true
    fileFormat?: true
    chatMessageId?: true
    userId?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileMessageCountAggregateInputType = {
    id?: true
    fileUrl?: true
    fileName?: true
    fileFullName?: true
    fileSize?: true
    fileFormat?: true
    chatMessageId?: true
    userId?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileMessage to aggregate.
     */
    where?: FileMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileMessages to fetch.
     */
    orderBy?: FileMessageOrderByWithRelationInput | FileMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileMessages
    **/
    _count?: true | FileMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMessageMaxAggregateInputType
  }

  export type GetFileMessageAggregateType<T extends FileMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateFileMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileMessage[P]>
      : GetScalarType<T[P], AggregateFileMessage[P]>
  }




  export type FileMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileMessageWhereInput
    orderBy?: FileMessageOrderByWithAggregationInput | FileMessageOrderByWithAggregationInput[]
    by: FileMessageScalarFieldEnum[] | FileMessageScalarFieldEnum
    having?: FileMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileMessageCountAggregateInputType | true
    _min?: FileMessageMinAggregateInputType
    _max?: FileMessageMaxAggregateInputType
  }

  export type FileMessageGroupByOutputType = {
    id: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    chatMessageId: string
    userId: string
    chatId: string
    createdAt: Date
    updatedAt: Date
    _count: FileMessageCountAggregateOutputType | null
    _min: FileMessageMinAggregateOutputType | null
    _max: FileMessageMaxAggregateOutputType | null
  }

  type GetFileMessageGroupByPayload<T extends FileMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileMessageGroupByOutputType[P]>
            : GetScalarType<T[P], FileMessageGroupByOutputType[P]>
        }
      >
    >


  export type FileMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileUrl?: boolean
    fileName?: boolean
    fileFullName?: boolean
    fileSize?: boolean
    fileFormat?: boolean
    chatMessageId?: boolean
    userId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatMessage?: boolean | ChatMessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileMessage"]>

  export type FileMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileUrl?: boolean
    fileName?: boolean
    fileFullName?: boolean
    fileSize?: boolean
    fileFormat?: boolean
    chatMessageId?: boolean
    userId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatMessage?: boolean | ChatMessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileMessage"]>

  export type FileMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileUrl?: boolean
    fileName?: boolean
    fileFullName?: boolean
    fileSize?: boolean
    fileFormat?: boolean
    chatMessageId?: boolean
    userId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatMessage?: boolean | ChatMessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileMessage"]>

  export type FileMessageSelectScalar = {
    id?: boolean
    fileUrl?: boolean
    fileName?: boolean
    fileFullName?: boolean
    fileSize?: boolean
    fileFormat?: boolean
    chatMessageId?: boolean
    userId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileUrl" | "fileName" | "fileFullName" | "fileSize" | "fileFormat" | "chatMessageId" | "userId" | "chatId" | "createdAt" | "updatedAt", ExtArgs["result"]["fileMessage"]>
  export type FileMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessage?: boolean | ChatMessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type FileMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessage?: boolean | ChatMessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type FileMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessage?: boolean | ChatMessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $FileMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileMessage"
    objects: {
      chatMessage: Prisma.$ChatMessagePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileUrl: string
      fileName: string
      fileFullName: string
      fileSize: string
      fileFormat: string
      chatMessageId: string
      userId: string
      chatId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fileMessage"]>
    composites: {}
  }

  type FileMessageGetPayload<S extends boolean | null | undefined | FileMessageDefaultArgs> = $Result.GetResult<Prisma.$FileMessagePayload, S>

  type FileMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileMessageCountAggregateInputType | true
    }

  export interface FileMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileMessage'], meta: { name: 'FileMessage' } }
    /**
     * Find zero or one FileMessage that matches the filter.
     * @param {FileMessageFindUniqueArgs} args - Arguments to find a FileMessage
     * @example
     * // Get one FileMessage
     * const fileMessage = await prisma.fileMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileMessageFindUniqueArgs>(args: SelectSubset<T, FileMessageFindUniqueArgs<ExtArgs>>): Prisma__FileMessageClient<$Result.GetResult<Prisma.$FileMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileMessageFindUniqueOrThrowArgs} args - Arguments to find a FileMessage
     * @example
     * // Get one FileMessage
     * const fileMessage = await prisma.fileMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, FileMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileMessageClient<$Result.GetResult<Prisma.$FileMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileMessageFindFirstArgs} args - Arguments to find a FileMessage
     * @example
     * // Get one FileMessage
     * const fileMessage = await prisma.fileMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileMessageFindFirstArgs>(args?: SelectSubset<T, FileMessageFindFirstArgs<ExtArgs>>): Prisma__FileMessageClient<$Result.GetResult<Prisma.$FileMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileMessageFindFirstOrThrowArgs} args - Arguments to find a FileMessage
     * @example
     * // Get one FileMessage
     * const fileMessage = await prisma.fileMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, FileMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileMessageClient<$Result.GetResult<Prisma.$FileMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileMessages
     * const fileMessages = await prisma.fileMessage.findMany()
     * 
     * // Get first 10 FileMessages
     * const fileMessages = await prisma.fileMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileMessageWithIdOnly = await prisma.fileMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileMessageFindManyArgs>(args?: SelectSubset<T, FileMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileMessage.
     * @param {FileMessageCreateArgs} args - Arguments to create a FileMessage.
     * @example
     * // Create one FileMessage
     * const FileMessage = await prisma.fileMessage.create({
     *   data: {
     *     // ... data to create a FileMessage
     *   }
     * })
     * 
     */
    create<T extends FileMessageCreateArgs>(args: SelectSubset<T, FileMessageCreateArgs<ExtArgs>>): Prisma__FileMessageClient<$Result.GetResult<Prisma.$FileMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileMessages.
     * @param {FileMessageCreateManyArgs} args - Arguments to create many FileMessages.
     * @example
     * // Create many FileMessages
     * const fileMessage = await prisma.fileMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileMessageCreateManyArgs>(args?: SelectSubset<T, FileMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileMessages and returns the data saved in the database.
     * @param {FileMessageCreateManyAndReturnArgs} args - Arguments to create many FileMessages.
     * @example
     * // Create many FileMessages
     * const fileMessage = await prisma.fileMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileMessages and only return the `id`
     * const fileMessageWithIdOnly = await prisma.fileMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, FileMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileMessage.
     * @param {FileMessageDeleteArgs} args - Arguments to delete one FileMessage.
     * @example
     * // Delete one FileMessage
     * const FileMessage = await prisma.fileMessage.delete({
     *   where: {
     *     // ... filter to delete one FileMessage
     *   }
     * })
     * 
     */
    delete<T extends FileMessageDeleteArgs>(args: SelectSubset<T, FileMessageDeleteArgs<ExtArgs>>): Prisma__FileMessageClient<$Result.GetResult<Prisma.$FileMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileMessage.
     * @param {FileMessageUpdateArgs} args - Arguments to update one FileMessage.
     * @example
     * // Update one FileMessage
     * const fileMessage = await prisma.fileMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileMessageUpdateArgs>(args: SelectSubset<T, FileMessageUpdateArgs<ExtArgs>>): Prisma__FileMessageClient<$Result.GetResult<Prisma.$FileMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileMessages.
     * @param {FileMessageDeleteManyArgs} args - Arguments to filter FileMessages to delete.
     * @example
     * // Delete a few FileMessages
     * const { count } = await prisma.fileMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileMessageDeleteManyArgs>(args?: SelectSubset<T, FileMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileMessages
     * const fileMessage = await prisma.fileMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileMessageUpdateManyArgs>(args: SelectSubset<T, FileMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileMessages and returns the data updated in the database.
     * @param {FileMessageUpdateManyAndReturnArgs} args - Arguments to update many FileMessages.
     * @example
     * // Update many FileMessages
     * const fileMessage = await prisma.fileMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileMessages and only return the `id`
     * const fileMessageWithIdOnly = await prisma.fileMessage.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends FileMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, FileMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileMessage.
     * @param {FileMessageUpsertArgs} args - Arguments to update or create a FileMessage.
     * @example
     * // Update or create a FileMessage
     * const fileMessage = await prisma.fileMessage.upsert({
     *   create: {
     *     // ... data to create a FileMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileMessage we want to update
     *   }
     * })
     */
    upsert<T extends FileMessageUpsertArgs>(args: SelectSubset<T, FileMessageUpsertArgs<ExtArgs>>): Prisma__FileMessageClient<$Result.GetResult<Prisma.$FileMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileMessageCountArgs} args - Arguments to filter FileMessages to count.
     * @example
     * // Count the number of FileMessages
     * const count = await prisma.fileMessage.count({
     *   where: {
     *     // ... the filter for the FileMessages we want to count
     *   }
     * })
    **/
    count<T extends FileMessageCountArgs>(
      args?: Subset<T, FileMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileMessageAggregateArgs>(args: Subset<T, FileMessageAggregateArgs>): Prisma.PrismaPromise<GetFileMessageAggregateType<T>>

    /**
     * Group by FileMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileMessageGroupByArgs} args - Group by arguments.
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
      T extends FileMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileMessageGroupByArgs['orderBy'] }
        : { orderBy?: FileMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileMessage model
   */
  readonly fields: FileMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatMessage<T extends ChatMessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessageDefaultArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FileMessage model
   */
  interface FileMessageFieldRefs {
    readonly id: FieldRef<"FileMessage", 'String'>
    readonly fileUrl: FieldRef<"FileMessage", 'String'>
    readonly fileName: FieldRef<"FileMessage", 'String'>
    readonly fileFullName: FieldRef<"FileMessage", 'String'>
    readonly fileSize: FieldRef<"FileMessage", 'String'>
    readonly fileFormat: FieldRef<"FileMessage", 'String'>
    readonly chatMessageId: FieldRef<"FileMessage", 'String'>
    readonly userId: FieldRef<"FileMessage", 'String'>
    readonly chatId: FieldRef<"FileMessage", 'String'>
    readonly createdAt: FieldRef<"FileMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"FileMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileMessage findUnique
   */
  export type FileMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileMessage
     */
    select?: FileMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileMessage
     */
    omit?: FileMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileMessageInclude<ExtArgs> | null
    /**
     * Filter, which FileMessage to fetch.
     */
    where: FileMessageWhereUniqueInput
  }

  /**
   * FileMessage findUniqueOrThrow
   */
  export type FileMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileMessage
     */
    select?: FileMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileMessage
     */
    omit?: FileMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileMessageInclude<ExtArgs> | null
    /**
     * Filter, which FileMessage to fetch.
     */
    where: FileMessageWhereUniqueInput
  }

  /**
   * FileMessage findFirst
   */
  export type FileMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileMessage
     */
    select?: FileMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileMessage
     */
    omit?: FileMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileMessageInclude<ExtArgs> | null
    /**
     * Filter, which FileMessage to fetch.
     */
    where?: FileMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileMessages to fetch.
     */
    orderBy?: FileMessageOrderByWithRelationInput | FileMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileMessages.
     */
    cursor?: FileMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileMessages.
     */
    distinct?: FileMessageScalarFieldEnum | FileMessageScalarFieldEnum[]
  }

  /**
   * FileMessage findFirstOrThrow
   */
  export type FileMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileMessage
     */
    select?: FileMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileMessage
     */
    omit?: FileMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileMessageInclude<ExtArgs> | null
    /**
     * Filter, which FileMessage to fetch.
     */
    where?: FileMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileMessages to fetch.
     */
    orderBy?: FileMessageOrderByWithRelationInput | FileMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileMessages.
     */
    cursor?: FileMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileMessages.
     */
    distinct?: FileMessageScalarFieldEnum | FileMessageScalarFieldEnum[]
  }

  /**
   * FileMessage findMany
   */
  export type FileMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileMessage
     */
    select?: FileMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileMessage
     */
    omit?: FileMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileMessageInclude<ExtArgs> | null
    /**
     * Filter, which FileMessages to fetch.
     */
    where?: FileMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileMessages to fetch.
     */
    orderBy?: FileMessageOrderByWithRelationInput | FileMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileMessages.
     */
    cursor?: FileMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileMessages.
     */
    skip?: number
    distinct?: FileMessageScalarFieldEnum | FileMessageScalarFieldEnum[]
  }

  /**
   * FileMessage create
   */
  export type FileMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileMessage
     */
    select?: FileMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileMessage
     */
    omit?: FileMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a FileMessage.
     */
    data: XOR<FileMessageCreateInput, FileMessageUncheckedCreateInput>
  }

  /**
   * FileMessage createMany
   */
  export type FileMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileMessages.
     */
    data: FileMessageCreateManyInput | FileMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileMessage createManyAndReturn
   */
  export type FileMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileMessage
     */
    select?: FileMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileMessage
     */
    omit?: FileMessageOmit<ExtArgs> | null
    /**
     * The data used to create many FileMessages.
     */
    data: FileMessageCreateManyInput | FileMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileMessage update
   */
  export type FileMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileMessage
     */
    select?: FileMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileMessage
     */
    omit?: FileMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a FileMessage.
     */
    data: XOR<FileMessageUpdateInput, FileMessageUncheckedUpdateInput>
    /**
     * Choose, which FileMessage to update.
     */
    where: FileMessageWhereUniqueInput
  }

  /**
   * FileMessage updateMany
   */
  export type FileMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileMessages.
     */
    data: XOR<FileMessageUpdateManyMutationInput, FileMessageUncheckedUpdateManyInput>
    /**
     * Filter which FileMessages to update
     */
    where?: FileMessageWhereInput
    /**
     * Limit how many FileMessages to update.
     */
    limit?: number
  }

  /**
   * FileMessage updateManyAndReturn
   */
  export type FileMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileMessage
     */
    select?: FileMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileMessage
     */
    omit?: FileMessageOmit<ExtArgs> | null
    /**
     * The data used to update FileMessages.
     */
    data: XOR<FileMessageUpdateManyMutationInput, FileMessageUncheckedUpdateManyInput>
    /**
     * Filter which FileMessages to update
     */
    where?: FileMessageWhereInput
    /**
     * Limit how many FileMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileMessage upsert
   */
  export type FileMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileMessage
     */
    select?: FileMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileMessage
     */
    omit?: FileMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the FileMessage to update in case it exists.
     */
    where: FileMessageWhereUniqueInput
    /**
     * In case the FileMessage found by the `where` argument doesn't exist, create a new FileMessage with this data.
     */
    create: XOR<FileMessageCreateInput, FileMessageUncheckedCreateInput>
    /**
     * In case the FileMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileMessageUpdateInput, FileMessageUncheckedUpdateInput>
  }

  /**
   * FileMessage delete
   */
  export type FileMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileMessage
     */
    select?: FileMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileMessage
     */
    omit?: FileMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileMessageInclude<ExtArgs> | null
    /**
     * Filter which FileMessage to delete.
     */
    where: FileMessageWhereUniqueInput
  }

  /**
   * FileMessage deleteMany
   */
  export type FileMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileMessages to delete
     */
    where?: FileMessageWhereInput
    /**
     * Limit how many FileMessages to delete.
     */
    limit?: number
  }

  /**
   * FileMessage without action
   */
  export type FileMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileMessage
     */
    select?: FileMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileMessage
     */
    omit?: FileMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileMessageInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    chatName: string | null
    isGroup: boolean | null
    avatarUrl: string | null
    isDeleted: boolean | null
    lastMessageAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    chatName: string | null
    isGroup: boolean | null
    avatarUrl: string | null
    isDeleted: boolean | null
    lastMessageAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    chatName: number
    isGroup: number
    avatarUrl: number
    isDeleted: number
    lastMessageAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    chatName?: true
    isGroup?: true
    avatarUrl?: true
    isDeleted?: true
    lastMessageAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    chatName?: true
    isGroup?: true
    avatarUrl?: true
    isDeleted?: true
    lastMessageAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    chatName?: true
    isGroup?: true
    avatarUrl?: true
    isDeleted?: true
    lastMessageAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    chatName: string | null
    isGroup: boolean
    avatarUrl: string | null
    isDeleted: boolean
    lastMessageAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatName?: boolean
    isGroup?: boolean
    avatarUrl?: boolean
    isDeleted?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    members?: boolean | Chat$membersArgs<ExtArgs>
    files?: boolean | Chat$filesArgs<ExtArgs>
    serverKey?: boolean | Chat$serverKeyArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatName?: boolean
    isGroup?: boolean
    avatarUrl?: boolean
    isDeleted?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatName?: boolean
    isGroup?: boolean
    avatarUrl?: boolean
    isDeleted?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    chatName?: boolean
    isGroup?: boolean
    avatarUrl?: boolean
    isDeleted?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatName" | "isGroup" | "avatarUrl" | "isDeleted" | "lastMessageAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    members?: boolean | Chat$membersArgs<ExtArgs>
    files?: boolean | Chat$filesArgs<ExtArgs>
    serverKey?: boolean | Chat$serverKeyArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
      members: Prisma.$ChatMemberPayload<ExtArgs>[]
      files: Prisma.$FileMessagePayload<ExtArgs>[]
      serverKey: Prisma.$ServerKeyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatName: string | null
      isGroup: boolean
      avatarUrl: string | null
      isDeleted: boolean
      lastMessageAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Chat$membersArgs<ExtArgs> = {}>(args?: Subset<T, Chat$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends Chat$filesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    serverKey<T extends Chat$serverKeyArgs<ExtArgs> = {}>(args?: Subset<T, Chat$serverKeyArgs<ExtArgs>>): Prisma__ServerKeyClient<$Result.GetResult<Prisma.$ServerKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly chatName: FieldRef<"Chat", 'String'>
    readonly isGroup: FieldRef<"Chat", 'Boolean'>
    readonly avatarUrl: FieldRef<"Chat", 'String'>
    readonly isDeleted: FieldRef<"Chat", 'Boolean'>
    readonly lastMessageAt: FieldRef<"Chat", 'DateTime'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly updatedAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * Chat.members
   */
  export type Chat$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    where?: ChatMemberWhereInput
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    cursor?: ChatMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * Chat.files
   */
  export type Chat$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileMessage
     */
    select?: FileMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileMessage
     */
    omit?: FileMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileMessageInclude<ExtArgs> | null
    where?: FileMessageWhereInput
    orderBy?: FileMessageOrderByWithRelationInput | FileMessageOrderByWithRelationInput[]
    cursor?: FileMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileMessageScalarFieldEnum | FileMessageScalarFieldEnum[]
  }

  /**
   * Chat.serverKey
   */
  export type Chat$serverKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerKey
     */
    select?: ServerKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerKey
     */
    omit?: ServerKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerKeyInclude<ExtArgs> | null
    where?: ServerKeyWhereInput
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model ChatMember
   */

  export type AggregateChatMember = {
    _count: ChatMemberCountAggregateOutputType | null
    _min: ChatMemberMinAggregateOutputType | null
    _max: ChatMemberMaxAggregateOutputType | null
  }

  export type ChatMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    isCreator: boolean | null
    chatId: string | null
    joinedAt: Date | null
  }

  export type ChatMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    isCreator: boolean | null
    chatId: string | null
    joinedAt: Date | null
  }

  export type ChatMemberCountAggregateOutputType = {
    id: number
    userId: number
    isCreator: number
    chatId: number
    joinedAt: number
    _all: number
  }


  export type ChatMemberMinAggregateInputType = {
    id?: true
    userId?: true
    isCreator?: true
    chatId?: true
    joinedAt?: true
  }

  export type ChatMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    isCreator?: true
    chatId?: true
    joinedAt?: true
  }

  export type ChatMemberCountAggregateInputType = {
    id?: true
    userId?: true
    isCreator?: true
    chatId?: true
    joinedAt?: true
    _all?: true
  }

  export type ChatMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMember to aggregate.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMembers
    **/
    _count?: true | ChatMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMemberMaxAggregateInputType
  }

  export type GetChatMemberAggregateType<T extends ChatMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMember[P]>
      : GetScalarType<T[P], AggregateChatMember[P]>
  }




  export type ChatMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMemberWhereInput
    orderBy?: ChatMemberOrderByWithAggregationInput | ChatMemberOrderByWithAggregationInput[]
    by: ChatMemberScalarFieldEnum[] | ChatMemberScalarFieldEnum
    having?: ChatMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMemberCountAggregateInputType | true
    _min?: ChatMemberMinAggregateInputType
    _max?: ChatMemberMaxAggregateInputType
  }

  export type ChatMemberGroupByOutputType = {
    id: string
    userId: string
    isCreator: boolean | null
    chatId: string
    joinedAt: Date
    _count: ChatMemberCountAggregateOutputType | null
    _min: ChatMemberMinAggregateOutputType | null
    _max: ChatMemberMaxAggregateOutputType | null
  }

  type GetChatMemberGroupByPayload<T extends ChatMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMemberGroupByOutputType[P]>
        }
      >
    >


  export type ChatMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isCreator?: boolean
    chatId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isCreator?: boolean
    chatId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isCreator?: boolean
    chatId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    isCreator?: boolean
    chatId?: boolean
    joinedAt?: boolean
  }

  export type ChatMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "isCreator" | "chatId" | "joinedAt", ExtArgs["result"]["chatMember"]>
  export type ChatMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type ChatMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type ChatMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $ChatMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      isCreator: boolean | null
      chatId: string
      joinedAt: Date
    }, ExtArgs["result"]["chatMember"]>
    composites: {}
  }

  type ChatMemberGetPayload<S extends boolean | null | undefined | ChatMemberDefaultArgs> = $Result.GetResult<Prisma.$ChatMemberPayload, S>

  type ChatMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMemberCountAggregateInputType | true
    }

  export interface ChatMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMember'], meta: { name: 'ChatMember' } }
    /**
     * Find zero or one ChatMember that matches the filter.
     * @param {ChatMemberFindUniqueArgs} args - Arguments to find a ChatMember
     * @example
     * // Get one ChatMember
     * const chatMember = await prisma.chatMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMemberFindUniqueArgs>(args: SelectSubset<T, ChatMemberFindUniqueArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMemberFindUniqueOrThrowArgs} args - Arguments to find a ChatMember
     * @example
     * // Get one ChatMember
     * const chatMember = await prisma.chatMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberFindFirstArgs} args - Arguments to find a ChatMember
     * @example
     * // Get one ChatMember
     * const chatMember = await prisma.chatMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMemberFindFirstArgs>(args?: SelectSubset<T, ChatMemberFindFirstArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberFindFirstOrThrowArgs} args - Arguments to find a ChatMember
     * @example
     * // Get one ChatMember
     * const chatMember = await prisma.chatMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMembers
     * const chatMembers = await prisma.chatMember.findMany()
     * 
     * // Get first 10 ChatMembers
     * const chatMembers = await prisma.chatMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMemberWithIdOnly = await prisma.chatMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMemberFindManyArgs>(args?: SelectSubset<T, ChatMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMember.
     * @param {ChatMemberCreateArgs} args - Arguments to create a ChatMember.
     * @example
     * // Create one ChatMember
     * const ChatMember = await prisma.chatMember.create({
     *   data: {
     *     // ... data to create a ChatMember
     *   }
     * })
     * 
     */
    create<T extends ChatMemberCreateArgs>(args: SelectSubset<T, ChatMemberCreateArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMembers.
     * @param {ChatMemberCreateManyArgs} args - Arguments to create many ChatMembers.
     * @example
     * // Create many ChatMembers
     * const chatMember = await prisma.chatMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMemberCreateManyArgs>(args?: SelectSubset<T, ChatMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMembers and returns the data saved in the database.
     * @param {ChatMemberCreateManyAndReturnArgs} args - Arguments to create many ChatMembers.
     * @example
     * // Create many ChatMembers
     * const chatMember = await prisma.chatMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMembers and only return the `id`
     * const chatMemberWithIdOnly = await prisma.chatMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMember.
     * @param {ChatMemberDeleteArgs} args - Arguments to delete one ChatMember.
     * @example
     * // Delete one ChatMember
     * const ChatMember = await prisma.chatMember.delete({
     *   where: {
     *     // ... filter to delete one ChatMember
     *   }
     * })
     * 
     */
    delete<T extends ChatMemberDeleteArgs>(args: SelectSubset<T, ChatMemberDeleteArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMember.
     * @param {ChatMemberUpdateArgs} args - Arguments to update one ChatMember.
     * @example
     * // Update one ChatMember
     * const chatMember = await prisma.chatMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMemberUpdateArgs>(args: SelectSubset<T, ChatMemberUpdateArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMembers.
     * @param {ChatMemberDeleteManyArgs} args - Arguments to filter ChatMembers to delete.
     * @example
     * // Delete a few ChatMembers
     * const { count } = await prisma.chatMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMemberDeleteManyArgs>(args?: SelectSubset<T, ChatMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMembers
     * const chatMember = await prisma.chatMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMemberUpdateManyArgs>(args: SelectSubset<T, ChatMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMembers and returns the data updated in the database.
     * @param {ChatMemberUpdateManyAndReturnArgs} args - Arguments to update many ChatMembers.
     * @example
     * // Update many ChatMembers
     * const chatMember = await prisma.chatMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMembers and only return the `id`
     * const chatMemberWithIdOnly = await prisma.chatMember.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ChatMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMember.
     * @param {ChatMemberUpsertArgs} args - Arguments to update or create a ChatMember.
     * @example
     * // Update or create a ChatMember
     * const chatMember = await prisma.chatMember.upsert({
     *   create: {
     *     // ... data to create a ChatMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMember we want to update
     *   }
     * })
     */
    upsert<T extends ChatMemberUpsertArgs>(args: SelectSubset<T, ChatMemberUpsertArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberCountArgs} args - Arguments to filter ChatMembers to count.
     * @example
     * // Count the number of ChatMembers
     * const count = await prisma.chatMember.count({
     *   where: {
     *     // ... the filter for the ChatMembers we want to count
     *   }
     * })
    **/
    count<T extends ChatMemberCountArgs>(
      args?: Subset<T, ChatMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMemberAggregateArgs>(args: Subset<T, ChatMemberAggregateArgs>): Prisma.PrismaPromise<GetChatMemberAggregateType<T>>

    /**
     * Group by ChatMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberGroupByArgs} args - Group by arguments.
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
      T extends ChatMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMemberGroupByArgs['orderBy'] }
        : { orderBy?: ChatMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMember model
   */
  readonly fields: ChatMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMember model
   */
  interface ChatMemberFieldRefs {
    readonly id: FieldRef<"ChatMember", 'String'>
    readonly userId: FieldRef<"ChatMember", 'String'>
    readonly isCreator: FieldRef<"ChatMember", 'Boolean'>
    readonly chatId: FieldRef<"ChatMember", 'String'>
    readonly joinedAt: FieldRef<"ChatMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMember findUnique
   */
  export type ChatMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember findUniqueOrThrow
   */
  export type ChatMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember findFirst
   */
  export type ChatMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMembers.
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMembers.
     */
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * ChatMember findFirstOrThrow
   */
  export type ChatMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMembers.
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMembers.
     */
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * ChatMember findMany
   */
  export type ChatMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMembers to fetch.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMembers.
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * ChatMember create
   */
  export type ChatMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMember.
     */
    data: XOR<ChatMemberCreateInput, ChatMemberUncheckedCreateInput>
  }

  /**
   * ChatMember createMany
   */
  export type ChatMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMembers.
     */
    data: ChatMemberCreateManyInput | ChatMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMember createManyAndReturn
   */
  export type ChatMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMembers.
     */
    data: ChatMemberCreateManyInput | ChatMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMember update
   */
  export type ChatMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMember.
     */
    data: XOR<ChatMemberUpdateInput, ChatMemberUncheckedUpdateInput>
    /**
     * Choose, which ChatMember to update.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember updateMany
   */
  export type ChatMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMembers.
     */
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChatMembers to update
     */
    where?: ChatMemberWhereInput
    /**
     * Limit how many ChatMembers to update.
     */
    limit?: number
  }

  /**
   * ChatMember updateManyAndReturn
   */
  export type ChatMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * The data used to update ChatMembers.
     */
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChatMembers to update
     */
    where?: ChatMemberWhereInput
    /**
     * Limit how many ChatMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMember upsert
   */
  export type ChatMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMember to update in case it exists.
     */
    where: ChatMemberWhereUniqueInput
    /**
     * In case the ChatMember found by the `where` argument doesn't exist, create a new ChatMember with this data.
     */
    create: XOR<ChatMemberCreateInput, ChatMemberUncheckedCreateInput>
    /**
     * In case the ChatMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMemberUpdateInput, ChatMemberUncheckedUpdateInput>
  }

  /**
   * ChatMember delete
   */
  export type ChatMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter which ChatMember to delete.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember deleteMany
   */
  export type ChatMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMembers to delete
     */
    where?: ChatMemberWhereInput
    /**
     * Limit how many ChatMembers to delete.
     */
    limit?: number
  }

  /**
   * ChatMember without action
   */
  export type ChatMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
  }


  /**
   * Model ClientKey
   */

  export type AggregateClientKey = {
    _count: ClientKeyCountAggregateOutputType | null
    _avg: ClientKeyAvgAggregateOutputType | null
    _sum: ClientKeySumAggregateOutputType | null
    _min: ClientKeyMinAggregateOutputType | null
    _max: ClientKeyMaxAggregateOutputType | null
  }

  export type ClientKeyAvgAggregateOutputType = {
    publicKeyE: number | null
    publicKeyN: number | null
    sessionKey: number | null
  }

  export type ClientKeySumAggregateOutputType = {
    publicKeyE: bigint | null
    publicKeyN: bigint | null
    sessionKey: bigint | null
  }

  export type ClientKeyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    publicKeyE: bigint | null
    publicKeyN: bigint | null
    sessionKey: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientKeyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    publicKeyE: bigint | null
    publicKeyN: bigint | null
    sessionKey: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientKeyCountAggregateOutputType = {
    id: number
    userId: number
    publicKeyE: number
    publicKeyN: number
    sessionKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientKeyAvgAggregateInputType = {
    publicKeyE?: true
    publicKeyN?: true
    sessionKey?: true
  }

  export type ClientKeySumAggregateInputType = {
    publicKeyE?: true
    publicKeyN?: true
    sessionKey?: true
  }

  export type ClientKeyMinAggregateInputType = {
    id?: true
    userId?: true
    publicKeyE?: true
    publicKeyN?: true
    sessionKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientKeyMaxAggregateInputType = {
    id?: true
    userId?: true
    publicKeyE?: true
    publicKeyN?: true
    sessionKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientKeyCountAggregateInputType = {
    id?: true
    userId?: true
    publicKeyE?: true
    publicKeyN?: true
    sessionKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientKey to aggregate.
     */
    where?: ClientKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientKeys to fetch.
     */
    orderBy?: ClientKeyOrderByWithRelationInput | ClientKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientKeys
    **/
    _count?: true | ClientKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientKeyMaxAggregateInputType
  }

  export type GetClientKeyAggregateType<T extends ClientKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateClientKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientKey[P]>
      : GetScalarType<T[P], AggregateClientKey[P]>
  }




  export type ClientKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientKeyWhereInput
    orderBy?: ClientKeyOrderByWithAggregationInput | ClientKeyOrderByWithAggregationInput[]
    by: ClientKeyScalarFieldEnum[] | ClientKeyScalarFieldEnum
    having?: ClientKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientKeyCountAggregateInputType | true
    _avg?: ClientKeyAvgAggregateInputType
    _sum?: ClientKeySumAggregateInputType
    _min?: ClientKeyMinAggregateInputType
    _max?: ClientKeyMaxAggregateInputType
  }

  export type ClientKeyGroupByOutputType = {
    id: string
    userId: string
    publicKeyE: bigint
    publicKeyN: bigint
    sessionKey: bigint
    createdAt: Date
    updatedAt: Date
    _count: ClientKeyCountAggregateOutputType | null
    _avg: ClientKeyAvgAggregateOutputType | null
    _sum: ClientKeySumAggregateOutputType | null
    _min: ClientKeyMinAggregateOutputType | null
    _max: ClientKeyMaxAggregateOutputType | null
  }

  type GetClientKeyGroupByPayload<T extends ClientKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ClientKeyGroupByOutputType[P]>
        }
      >
    >


  export type ClientKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    publicKeyE?: boolean
    publicKeyN?: boolean
    sessionKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientKey"]>

  export type ClientKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    publicKeyE?: boolean
    publicKeyN?: boolean
    sessionKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientKey"]>

  export type ClientKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    publicKeyE?: boolean
    publicKeyN?: boolean
    sessionKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientKey"]>

  export type ClientKeySelectScalar = {
    id?: boolean
    userId?: boolean
    publicKeyE?: boolean
    publicKeyN?: boolean
    sessionKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "publicKeyE" | "publicKeyN" | "sessionKey" | "createdAt" | "updatedAt", ExtArgs["result"]["clientKey"]>
  export type ClientKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClientKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientKey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      publicKeyE: bigint
      publicKeyN: bigint
      sessionKey: bigint
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["clientKey"]>
    composites: {}
  }

  type ClientKeyGetPayload<S extends boolean | null | undefined | ClientKeyDefaultArgs> = $Result.GetResult<Prisma.$ClientKeyPayload, S>

  type ClientKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientKeyCountAggregateInputType | true
    }

  export interface ClientKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientKey'], meta: { name: 'ClientKey' } }
    /**
     * Find zero or one ClientKey that matches the filter.
     * @param {ClientKeyFindUniqueArgs} args - Arguments to find a ClientKey
     * @example
     * // Get one ClientKey
     * const clientKey = await prisma.clientKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientKeyFindUniqueArgs>(args: SelectSubset<T, ClientKeyFindUniqueArgs<ExtArgs>>): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientKeyFindUniqueOrThrowArgs} args - Arguments to find a ClientKey
     * @example
     * // Get one ClientKey
     * const clientKey = await prisma.clientKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientKeyFindFirstArgs} args - Arguments to find a ClientKey
     * @example
     * // Get one ClientKey
     * const clientKey = await prisma.clientKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientKeyFindFirstArgs>(args?: SelectSubset<T, ClientKeyFindFirstArgs<ExtArgs>>): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientKeyFindFirstOrThrowArgs} args - Arguments to find a ClientKey
     * @example
     * // Get one ClientKey
     * const clientKey = await prisma.clientKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientKeys
     * const clientKeys = await prisma.clientKey.findMany()
     * 
     * // Get first 10 ClientKeys
     * const clientKeys = await prisma.clientKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientKeyWithIdOnly = await prisma.clientKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientKeyFindManyArgs>(args?: SelectSubset<T, ClientKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientKey.
     * @param {ClientKeyCreateArgs} args - Arguments to create a ClientKey.
     * @example
     * // Create one ClientKey
     * const ClientKey = await prisma.clientKey.create({
     *   data: {
     *     // ... data to create a ClientKey
     *   }
     * })
     * 
     */
    create<T extends ClientKeyCreateArgs>(args: SelectSubset<T, ClientKeyCreateArgs<ExtArgs>>): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientKeys.
     * @param {ClientKeyCreateManyArgs} args - Arguments to create many ClientKeys.
     * @example
     * // Create many ClientKeys
     * const clientKey = await prisma.clientKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientKeyCreateManyArgs>(args?: SelectSubset<T, ClientKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientKeys and returns the data saved in the database.
     * @param {ClientKeyCreateManyAndReturnArgs} args - Arguments to create many ClientKeys.
     * @example
     * // Create many ClientKeys
     * const clientKey = await prisma.clientKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientKeys and only return the `id`
     * const clientKeyWithIdOnly = await prisma.clientKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientKey.
     * @param {ClientKeyDeleteArgs} args - Arguments to delete one ClientKey.
     * @example
     * // Delete one ClientKey
     * const ClientKey = await prisma.clientKey.delete({
     *   where: {
     *     // ... filter to delete one ClientKey
     *   }
     * })
     * 
     */
    delete<T extends ClientKeyDeleteArgs>(args: SelectSubset<T, ClientKeyDeleteArgs<ExtArgs>>): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientKey.
     * @param {ClientKeyUpdateArgs} args - Arguments to update one ClientKey.
     * @example
     * // Update one ClientKey
     * const clientKey = await prisma.clientKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientKeyUpdateArgs>(args: SelectSubset<T, ClientKeyUpdateArgs<ExtArgs>>): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientKeys.
     * @param {ClientKeyDeleteManyArgs} args - Arguments to filter ClientKeys to delete.
     * @example
     * // Delete a few ClientKeys
     * const { count } = await prisma.clientKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientKeyDeleteManyArgs>(args?: SelectSubset<T, ClientKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientKeys
     * const clientKey = await prisma.clientKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientKeyUpdateManyArgs>(args: SelectSubset<T, ClientKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientKeys and returns the data updated in the database.
     * @param {ClientKeyUpdateManyAndReturnArgs} args - Arguments to update many ClientKeys.
     * @example
     * // Update many ClientKeys
     * const clientKey = await prisma.clientKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientKeys and only return the `id`
     * const clientKeyWithIdOnly = await prisma.clientKey.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ClientKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientKey.
     * @param {ClientKeyUpsertArgs} args - Arguments to update or create a ClientKey.
     * @example
     * // Update or create a ClientKey
     * const clientKey = await prisma.clientKey.upsert({
     *   create: {
     *     // ... data to create a ClientKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientKey we want to update
     *   }
     * })
     */
    upsert<T extends ClientKeyUpsertArgs>(args: SelectSubset<T, ClientKeyUpsertArgs<ExtArgs>>): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientKeyCountArgs} args - Arguments to filter ClientKeys to count.
     * @example
     * // Count the number of ClientKeys
     * const count = await prisma.clientKey.count({
     *   where: {
     *     // ... the filter for the ClientKeys we want to count
     *   }
     * })
    **/
    count<T extends ClientKeyCountArgs>(
      args?: Subset<T, ClientKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientKeyAggregateArgs>(args: Subset<T, ClientKeyAggregateArgs>): Prisma.PrismaPromise<GetClientKeyAggregateType<T>>

    /**
     * Group by ClientKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientKeyGroupByArgs} args - Group by arguments.
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
      T extends ClientKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientKeyGroupByArgs['orderBy'] }
        : { orderBy?: ClientKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientKey model
   */
  readonly fields: ClientKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClientKey model
   */
  interface ClientKeyFieldRefs {
    readonly id: FieldRef<"ClientKey", 'String'>
    readonly userId: FieldRef<"ClientKey", 'String'>
    readonly publicKeyE: FieldRef<"ClientKey", 'BigInt'>
    readonly publicKeyN: FieldRef<"ClientKey", 'BigInt'>
    readonly sessionKey: FieldRef<"ClientKey", 'BigInt'>
    readonly createdAt: FieldRef<"ClientKey", 'DateTime'>
    readonly updatedAt: FieldRef<"ClientKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientKey findUnique
   */
  export type ClientKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientKey
     */
    omit?: ClientKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * Filter, which ClientKey to fetch.
     */
    where: ClientKeyWhereUniqueInput
  }

  /**
   * ClientKey findUniqueOrThrow
   */
  export type ClientKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientKey
     */
    omit?: ClientKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * Filter, which ClientKey to fetch.
     */
    where: ClientKeyWhereUniqueInput
  }

  /**
   * ClientKey findFirst
   */
  export type ClientKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientKey
     */
    omit?: ClientKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * Filter, which ClientKey to fetch.
     */
    where?: ClientKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientKeys to fetch.
     */
    orderBy?: ClientKeyOrderByWithRelationInput | ClientKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientKeys.
     */
    cursor?: ClientKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientKeys.
     */
    distinct?: ClientKeyScalarFieldEnum | ClientKeyScalarFieldEnum[]
  }

  /**
   * ClientKey findFirstOrThrow
   */
  export type ClientKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientKey
     */
    omit?: ClientKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * Filter, which ClientKey to fetch.
     */
    where?: ClientKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientKeys to fetch.
     */
    orderBy?: ClientKeyOrderByWithRelationInput | ClientKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientKeys.
     */
    cursor?: ClientKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientKeys.
     */
    distinct?: ClientKeyScalarFieldEnum | ClientKeyScalarFieldEnum[]
  }

  /**
   * ClientKey findMany
   */
  export type ClientKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientKey
     */
    omit?: ClientKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * Filter, which ClientKeys to fetch.
     */
    where?: ClientKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientKeys to fetch.
     */
    orderBy?: ClientKeyOrderByWithRelationInput | ClientKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientKeys.
     */
    cursor?: ClientKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientKeys.
     */
    skip?: number
    distinct?: ClientKeyScalarFieldEnum | ClientKeyScalarFieldEnum[]
  }

  /**
   * ClientKey create
   */
  export type ClientKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientKey
     */
    omit?: ClientKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientKey.
     */
    data: XOR<ClientKeyCreateInput, ClientKeyUncheckedCreateInput>
  }

  /**
   * ClientKey createMany
   */
  export type ClientKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientKeys.
     */
    data: ClientKeyCreateManyInput | ClientKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientKey createManyAndReturn
   */
  export type ClientKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientKey
     */
    omit?: ClientKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ClientKeys.
     */
    data: ClientKeyCreateManyInput | ClientKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientKey update
   */
  export type ClientKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientKey
     */
    omit?: ClientKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientKey.
     */
    data: XOR<ClientKeyUpdateInput, ClientKeyUncheckedUpdateInput>
    /**
     * Choose, which ClientKey to update.
     */
    where: ClientKeyWhereUniqueInput
  }

  /**
   * ClientKey updateMany
   */
  export type ClientKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientKeys.
     */
    data: XOR<ClientKeyUpdateManyMutationInput, ClientKeyUncheckedUpdateManyInput>
    /**
     * Filter which ClientKeys to update
     */
    where?: ClientKeyWhereInput
    /**
     * Limit how many ClientKeys to update.
     */
    limit?: number
  }

  /**
   * ClientKey updateManyAndReturn
   */
  export type ClientKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientKey
     */
    omit?: ClientKeyOmit<ExtArgs> | null
    /**
     * The data used to update ClientKeys.
     */
    data: XOR<ClientKeyUpdateManyMutationInput, ClientKeyUncheckedUpdateManyInput>
    /**
     * Filter which ClientKeys to update
     */
    where?: ClientKeyWhereInput
    /**
     * Limit how many ClientKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientKey upsert
   */
  export type ClientKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientKey
     */
    omit?: ClientKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientKey to update in case it exists.
     */
    where: ClientKeyWhereUniqueInput
    /**
     * In case the ClientKey found by the `where` argument doesn't exist, create a new ClientKey with this data.
     */
    create: XOR<ClientKeyCreateInput, ClientKeyUncheckedCreateInput>
    /**
     * In case the ClientKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientKeyUpdateInput, ClientKeyUncheckedUpdateInput>
  }

  /**
   * ClientKey delete
   */
  export type ClientKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientKey
     */
    omit?: ClientKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * Filter which ClientKey to delete.
     */
    where: ClientKeyWhereUniqueInput
  }

  /**
   * ClientKey deleteMany
   */
  export type ClientKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientKeys to delete
     */
    where?: ClientKeyWhereInput
    /**
     * Limit how many ClientKeys to delete.
     */
    limit?: number
  }

  /**
   * ClientKey without action
   */
  export type ClientKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientKey
     */
    omit?: ClientKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientKeyInclude<ExtArgs> | null
  }


  /**
   * Model ServerKey
   */

  export type AggregateServerKey = {
    _count: ServerKeyCountAggregateOutputType | null
    _avg: ServerKeyAvgAggregateOutputType | null
    _sum: ServerKeySumAggregateOutputType | null
    _min: ServerKeyMinAggregateOutputType | null
    _max: ServerKeyMaxAggregateOutputType | null
  }

  export type ServerKeyAvgAggregateOutputType = {
    publicKeyE: number | null
    publicKeyN: number | null
    privateKeyD: number | null
    privateKeyP: number | null
    privateKeyQ: number | null
  }

  export type ServerKeySumAggregateOutputType = {
    publicKeyE: bigint | null
    publicKeyN: bigint | null
    privateKeyD: bigint | null
    privateKeyP: bigint | null
    privateKeyQ: bigint | null
  }

  export type ServerKeyMinAggregateOutputType = {
    id: string | null
    publicKeyE: bigint | null
    publicKeyN: bigint | null
    privateKeyD: bigint | null
    privateKeyP: bigint | null
    privateKeyQ: bigint | null
    chatId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServerKeyMaxAggregateOutputType = {
    id: string | null
    publicKeyE: bigint | null
    publicKeyN: bigint | null
    privateKeyD: bigint | null
    privateKeyP: bigint | null
    privateKeyQ: bigint | null
    chatId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServerKeyCountAggregateOutputType = {
    id: number
    publicKeyE: number
    publicKeyN: number
    privateKeyD: number
    privateKeyP: number
    privateKeyQ: number
    chatId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServerKeyAvgAggregateInputType = {
    publicKeyE?: true
    publicKeyN?: true
    privateKeyD?: true
    privateKeyP?: true
    privateKeyQ?: true
  }

  export type ServerKeySumAggregateInputType = {
    publicKeyE?: true
    publicKeyN?: true
    privateKeyD?: true
    privateKeyP?: true
    privateKeyQ?: true
  }

  export type ServerKeyMinAggregateInputType = {
    id?: true
    publicKeyE?: true
    publicKeyN?: true
    privateKeyD?: true
    privateKeyP?: true
    privateKeyQ?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServerKeyMaxAggregateInputType = {
    id?: true
    publicKeyE?: true
    publicKeyN?: true
    privateKeyD?: true
    privateKeyP?: true
    privateKeyQ?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServerKeyCountAggregateInputType = {
    id?: true
    publicKeyE?: true
    publicKeyN?: true
    privateKeyD?: true
    privateKeyP?: true
    privateKeyQ?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServerKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServerKey to aggregate.
     */
    where?: ServerKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerKeys to fetch.
     */
    orderBy?: ServerKeyOrderByWithRelationInput | ServerKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServerKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServerKeys
    **/
    _count?: true | ServerKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServerKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServerKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServerKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServerKeyMaxAggregateInputType
  }

  export type GetServerKeyAggregateType<T extends ServerKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateServerKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServerKey[P]>
      : GetScalarType<T[P], AggregateServerKey[P]>
  }




  export type ServerKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServerKeyWhereInput
    orderBy?: ServerKeyOrderByWithAggregationInput | ServerKeyOrderByWithAggregationInput[]
    by: ServerKeyScalarFieldEnum[] | ServerKeyScalarFieldEnum
    having?: ServerKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServerKeyCountAggregateInputType | true
    _avg?: ServerKeyAvgAggregateInputType
    _sum?: ServerKeySumAggregateInputType
    _min?: ServerKeyMinAggregateInputType
    _max?: ServerKeyMaxAggregateInputType
  }

  export type ServerKeyGroupByOutputType = {
    id: string
    publicKeyE: bigint
    publicKeyN: bigint
    privateKeyD: bigint
    privateKeyP: bigint
    privateKeyQ: bigint
    chatId: string
    createdAt: Date
    updatedAt: Date
    _count: ServerKeyCountAggregateOutputType | null
    _avg: ServerKeyAvgAggregateOutputType | null
    _sum: ServerKeySumAggregateOutputType | null
    _min: ServerKeyMinAggregateOutputType | null
    _max: ServerKeyMaxAggregateOutputType | null
  }

  type GetServerKeyGroupByPayload<T extends ServerKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServerKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServerKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServerKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ServerKeyGroupByOutputType[P]>
        }
      >
    >


  export type ServerKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKeyE?: boolean
    publicKeyN?: boolean
    privateKeyD?: boolean
    privateKeyP?: boolean
    privateKeyQ?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serverKey"]>

  export type ServerKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKeyE?: boolean
    publicKeyN?: boolean
    privateKeyD?: boolean
    privateKeyP?: boolean
    privateKeyQ?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serverKey"]>

  export type ServerKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKeyE?: boolean
    publicKeyN?: boolean
    privateKeyD?: boolean
    privateKeyP?: boolean
    privateKeyQ?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serverKey"]>

  export type ServerKeySelectScalar = {
    id?: boolean
    publicKeyE?: boolean
    publicKeyN?: boolean
    privateKeyD?: boolean
    privateKeyP?: boolean
    privateKeyQ?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServerKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicKeyE" | "publicKeyN" | "privateKeyD" | "privateKeyP" | "privateKeyQ" | "chatId" | "createdAt" | "updatedAt", ExtArgs["result"]["serverKey"]>
  export type ServerKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type ServerKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type ServerKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $ServerKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServerKey"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicKeyE: bigint
      publicKeyN: bigint
      privateKeyD: bigint
      privateKeyP: bigint
      privateKeyQ: bigint
      chatId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["serverKey"]>
    composites: {}
  }

  type ServerKeyGetPayload<S extends boolean | null | undefined | ServerKeyDefaultArgs> = $Result.GetResult<Prisma.$ServerKeyPayload, S>

  type ServerKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServerKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServerKeyCountAggregateInputType | true
    }

  export interface ServerKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServerKey'], meta: { name: 'ServerKey' } }
    /**
     * Find zero or one ServerKey that matches the filter.
     * @param {ServerKeyFindUniqueArgs} args - Arguments to find a ServerKey
     * @example
     * // Get one ServerKey
     * const serverKey = await prisma.serverKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServerKeyFindUniqueArgs>(args: SelectSubset<T, ServerKeyFindUniqueArgs<ExtArgs>>): Prisma__ServerKeyClient<$Result.GetResult<Prisma.$ServerKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServerKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServerKeyFindUniqueOrThrowArgs} args - Arguments to find a ServerKey
     * @example
     * // Get one ServerKey
     * const serverKey = await prisma.serverKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServerKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ServerKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServerKeyClient<$Result.GetResult<Prisma.$ServerKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServerKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerKeyFindFirstArgs} args - Arguments to find a ServerKey
     * @example
     * // Get one ServerKey
     * const serverKey = await prisma.serverKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServerKeyFindFirstArgs>(args?: SelectSubset<T, ServerKeyFindFirstArgs<ExtArgs>>): Prisma__ServerKeyClient<$Result.GetResult<Prisma.$ServerKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServerKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerKeyFindFirstOrThrowArgs} args - Arguments to find a ServerKey
     * @example
     * // Get one ServerKey
     * const serverKey = await prisma.serverKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServerKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ServerKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServerKeyClient<$Result.GetResult<Prisma.$ServerKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServerKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServerKeys
     * const serverKeys = await prisma.serverKey.findMany()
     * 
     * // Get first 10 ServerKeys
     * const serverKeys = await prisma.serverKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serverKeyWithIdOnly = await prisma.serverKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServerKeyFindManyArgs>(args?: SelectSubset<T, ServerKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServerKey.
     * @param {ServerKeyCreateArgs} args - Arguments to create a ServerKey.
     * @example
     * // Create one ServerKey
     * const ServerKey = await prisma.serverKey.create({
     *   data: {
     *     // ... data to create a ServerKey
     *   }
     * })
     * 
     */
    create<T extends ServerKeyCreateArgs>(args: SelectSubset<T, ServerKeyCreateArgs<ExtArgs>>): Prisma__ServerKeyClient<$Result.GetResult<Prisma.$ServerKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServerKeys.
     * @param {ServerKeyCreateManyArgs} args - Arguments to create many ServerKeys.
     * @example
     * // Create many ServerKeys
     * const serverKey = await prisma.serverKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServerKeyCreateManyArgs>(args?: SelectSubset<T, ServerKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServerKeys and returns the data saved in the database.
     * @param {ServerKeyCreateManyAndReturnArgs} args - Arguments to create many ServerKeys.
     * @example
     * // Create many ServerKeys
     * const serverKey = await prisma.serverKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServerKeys and only return the `id`
     * const serverKeyWithIdOnly = await prisma.serverKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServerKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ServerKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServerKey.
     * @param {ServerKeyDeleteArgs} args - Arguments to delete one ServerKey.
     * @example
     * // Delete one ServerKey
     * const ServerKey = await prisma.serverKey.delete({
     *   where: {
     *     // ... filter to delete one ServerKey
     *   }
     * })
     * 
     */
    delete<T extends ServerKeyDeleteArgs>(args: SelectSubset<T, ServerKeyDeleteArgs<ExtArgs>>): Prisma__ServerKeyClient<$Result.GetResult<Prisma.$ServerKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServerKey.
     * @param {ServerKeyUpdateArgs} args - Arguments to update one ServerKey.
     * @example
     * // Update one ServerKey
     * const serverKey = await prisma.serverKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServerKeyUpdateArgs>(args: SelectSubset<T, ServerKeyUpdateArgs<ExtArgs>>): Prisma__ServerKeyClient<$Result.GetResult<Prisma.$ServerKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServerKeys.
     * @param {ServerKeyDeleteManyArgs} args - Arguments to filter ServerKeys to delete.
     * @example
     * // Delete a few ServerKeys
     * const { count } = await prisma.serverKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServerKeyDeleteManyArgs>(args?: SelectSubset<T, ServerKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServerKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServerKeys
     * const serverKey = await prisma.serverKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServerKeyUpdateManyArgs>(args: SelectSubset<T, ServerKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServerKeys and returns the data updated in the database.
     * @param {ServerKeyUpdateManyAndReturnArgs} args - Arguments to update many ServerKeys.
     * @example
     * // Update many ServerKeys
     * const serverKey = await prisma.serverKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServerKeys and only return the `id`
     * const serverKeyWithIdOnly = await prisma.serverKey.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ServerKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ServerKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServerKey.
     * @param {ServerKeyUpsertArgs} args - Arguments to update or create a ServerKey.
     * @example
     * // Update or create a ServerKey
     * const serverKey = await prisma.serverKey.upsert({
     *   create: {
     *     // ... data to create a ServerKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServerKey we want to update
     *   }
     * })
     */
    upsert<T extends ServerKeyUpsertArgs>(args: SelectSubset<T, ServerKeyUpsertArgs<ExtArgs>>): Prisma__ServerKeyClient<$Result.GetResult<Prisma.$ServerKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServerKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerKeyCountArgs} args - Arguments to filter ServerKeys to count.
     * @example
     * // Count the number of ServerKeys
     * const count = await prisma.serverKey.count({
     *   where: {
     *     // ... the filter for the ServerKeys we want to count
     *   }
     * })
    **/
    count<T extends ServerKeyCountArgs>(
      args?: Subset<T, ServerKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServerKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServerKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServerKeyAggregateArgs>(args: Subset<T, ServerKeyAggregateArgs>): Prisma.PrismaPromise<GetServerKeyAggregateType<T>>

    /**
     * Group by ServerKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerKeyGroupByArgs} args - Group by arguments.
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
      T extends ServerKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServerKeyGroupByArgs['orderBy'] }
        : { orderBy?: ServerKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServerKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServerKey model
   */
  readonly fields: ServerKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServerKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServerKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ServerKey model
   */
  interface ServerKeyFieldRefs {
    readonly id: FieldRef<"ServerKey", 'String'>
    readonly publicKeyE: FieldRef<"ServerKey", 'BigInt'>
    readonly publicKeyN: FieldRef<"ServerKey", 'BigInt'>
    readonly privateKeyD: FieldRef<"ServerKey", 'BigInt'>
    readonly privateKeyP: FieldRef<"ServerKey", 'BigInt'>
    readonly privateKeyQ: FieldRef<"ServerKey", 'BigInt'>
    readonly chatId: FieldRef<"ServerKey", 'String'>
    readonly createdAt: FieldRef<"ServerKey", 'DateTime'>
    readonly updatedAt: FieldRef<"ServerKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServerKey findUnique
   */
  export type ServerKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerKey
     */
    select?: ServerKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerKey
     */
    omit?: ServerKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerKeyInclude<ExtArgs> | null
    /**
     * Filter, which ServerKey to fetch.
     */
    where: ServerKeyWhereUniqueInput
  }

  /**
   * ServerKey findUniqueOrThrow
   */
  export type ServerKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerKey
     */
    select?: ServerKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerKey
     */
    omit?: ServerKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerKeyInclude<ExtArgs> | null
    /**
     * Filter, which ServerKey to fetch.
     */
    where: ServerKeyWhereUniqueInput
  }

  /**
   * ServerKey findFirst
   */
  export type ServerKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerKey
     */
    select?: ServerKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerKey
     */
    omit?: ServerKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerKeyInclude<ExtArgs> | null
    /**
     * Filter, which ServerKey to fetch.
     */
    where?: ServerKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerKeys to fetch.
     */
    orderBy?: ServerKeyOrderByWithRelationInput | ServerKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServerKeys.
     */
    cursor?: ServerKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServerKeys.
     */
    distinct?: ServerKeyScalarFieldEnum | ServerKeyScalarFieldEnum[]
  }

  /**
   * ServerKey findFirstOrThrow
   */
  export type ServerKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerKey
     */
    select?: ServerKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerKey
     */
    omit?: ServerKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerKeyInclude<ExtArgs> | null
    /**
     * Filter, which ServerKey to fetch.
     */
    where?: ServerKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerKeys to fetch.
     */
    orderBy?: ServerKeyOrderByWithRelationInput | ServerKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServerKeys.
     */
    cursor?: ServerKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServerKeys.
     */
    distinct?: ServerKeyScalarFieldEnum | ServerKeyScalarFieldEnum[]
  }

  /**
   * ServerKey findMany
   */
  export type ServerKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerKey
     */
    select?: ServerKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerKey
     */
    omit?: ServerKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerKeyInclude<ExtArgs> | null
    /**
     * Filter, which ServerKeys to fetch.
     */
    where?: ServerKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerKeys to fetch.
     */
    orderBy?: ServerKeyOrderByWithRelationInput | ServerKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServerKeys.
     */
    cursor?: ServerKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerKeys.
     */
    skip?: number
    distinct?: ServerKeyScalarFieldEnum | ServerKeyScalarFieldEnum[]
  }

  /**
   * ServerKey create
   */
  export type ServerKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerKey
     */
    select?: ServerKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerKey
     */
    omit?: ServerKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ServerKey.
     */
    data: XOR<ServerKeyCreateInput, ServerKeyUncheckedCreateInput>
  }

  /**
   * ServerKey createMany
   */
  export type ServerKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServerKeys.
     */
    data: ServerKeyCreateManyInput | ServerKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServerKey createManyAndReturn
   */
  export type ServerKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerKey
     */
    select?: ServerKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServerKey
     */
    omit?: ServerKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ServerKeys.
     */
    data: ServerKeyCreateManyInput | ServerKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServerKey update
   */
  export type ServerKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerKey
     */
    select?: ServerKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerKey
     */
    omit?: ServerKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ServerKey.
     */
    data: XOR<ServerKeyUpdateInput, ServerKeyUncheckedUpdateInput>
    /**
     * Choose, which ServerKey to update.
     */
    where: ServerKeyWhereUniqueInput
  }

  /**
   * ServerKey updateMany
   */
  export type ServerKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServerKeys.
     */
    data: XOR<ServerKeyUpdateManyMutationInput, ServerKeyUncheckedUpdateManyInput>
    /**
     * Filter which ServerKeys to update
     */
    where?: ServerKeyWhereInput
    /**
     * Limit how many ServerKeys to update.
     */
    limit?: number
  }

  /**
   * ServerKey updateManyAndReturn
   */
  export type ServerKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerKey
     */
    select?: ServerKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServerKey
     */
    omit?: ServerKeyOmit<ExtArgs> | null
    /**
     * The data used to update ServerKeys.
     */
    data: XOR<ServerKeyUpdateManyMutationInput, ServerKeyUncheckedUpdateManyInput>
    /**
     * Filter which ServerKeys to update
     */
    where?: ServerKeyWhereInput
    /**
     * Limit how many ServerKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServerKey upsert
   */
  export type ServerKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerKey
     */
    select?: ServerKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerKey
     */
    omit?: ServerKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ServerKey to update in case it exists.
     */
    where: ServerKeyWhereUniqueInput
    /**
     * In case the ServerKey found by the `where` argument doesn't exist, create a new ServerKey with this data.
     */
    create: XOR<ServerKeyCreateInput, ServerKeyUncheckedCreateInput>
    /**
     * In case the ServerKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServerKeyUpdateInput, ServerKeyUncheckedUpdateInput>
  }

  /**
   * ServerKey delete
   */
  export type ServerKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerKey
     */
    select?: ServerKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerKey
     */
    omit?: ServerKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerKeyInclude<ExtArgs> | null
    /**
     * Filter which ServerKey to delete.
     */
    where: ServerKeyWhereUniqueInput
  }

  /**
   * ServerKey deleteMany
   */
  export type ServerKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServerKeys to delete
     */
    where?: ServerKeyWhereInput
    /**
     * Limit how many ServerKeys to delete.
     */
    limit?: number
  }

  /**
   * ServerKey without action
   */
  export type ServerKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerKey
     */
    select?: ServerKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerKey
     */
    omit?: ServerKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerKeyInclude<ExtArgs> | null
  }


  /**
   * Model KeyDiffie
   */

  export type AggregateKeyDiffie = {
    _count: KeyDiffieCountAggregateOutputType | null
    _avg: KeyDiffieAvgAggregateOutputType | null
    _sum: KeyDiffieSumAggregateOutputType | null
    _min: KeyDiffieMinAggregateOutputType | null
    _max: KeyDiffieMaxAggregateOutputType | null
  }

  export type KeyDiffieAvgAggregateOutputType = {
    publicKeyP: number | null
    publicKeyG: number | null
    privateKeyServer: number | null
  }

  export type KeyDiffieSumAggregateOutputType = {
    publicKeyP: bigint | null
    publicKeyG: bigint | null
    privateKeyServer: bigint | null
  }

  export type KeyDiffieMinAggregateOutputType = {
    id: string | null
    publicKeyP: bigint | null
    publicKeyG: bigint | null
    privateKeyServer: bigint | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KeyDiffieMaxAggregateOutputType = {
    id: string | null
    publicKeyP: bigint | null
    publicKeyG: bigint | null
    privateKeyServer: bigint | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KeyDiffieCountAggregateOutputType = {
    id: number
    publicKeyP: number
    publicKeyG: number
    privateKeyServer: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KeyDiffieAvgAggregateInputType = {
    publicKeyP?: true
    publicKeyG?: true
    privateKeyServer?: true
  }

  export type KeyDiffieSumAggregateInputType = {
    publicKeyP?: true
    publicKeyG?: true
    privateKeyServer?: true
  }

  export type KeyDiffieMinAggregateInputType = {
    id?: true
    publicKeyP?: true
    publicKeyG?: true
    privateKeyServer?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KeyDiffieMaxAggregateInputType = {
    id?: true
    publicKeyP?: true
    publicKeyG?: true
    privateKeyServer?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KeyDiffieCountAggregateInputType = {
    id?: true
    publicKeyP?: true
    publicKeyG?: true
    privateKeyServer?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KeyDiffieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeyDiffie to aggregate.
     */
    where?: KeyDiffieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyDiffies to fetch.
     */
    orderBy?: KeyDiffieOrderByWithRelationInput | KeyDiffieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeyDiffieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyDiffies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyDiffies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KeyDiffies
    **/
    _count?: true | KeyDiffieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeyDiffieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeyDiffieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeyDiffieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeyDiffieMaxAggregateInputType
  }

  export type GetKeyDiffieAggregateType<T extends KeyDiffieAggregateArgs> = {
        [P in keyof T & keyof AggregateKeyDiffie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeyDiffie[P]>
      : GetScalarType<T[P], AggregateKeyDiffie[P]>
  }




  export type KeyDiffieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyDiffieWhereInput
    orderBy?: KeyDiffieOrderByWithAggregationInput | KeyDiffieOrderByWithAggregationInput[]
    by: KeyDiffieScalarFieldEnum[] | KeyDiffieScalarFieldEnum
    having?: KeyDiffieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeyDiffieCountAggregateInputType | true
    _avg?: KeyDiffieAvgAggregateInputType
    _sum?: KeyDiffieSumAggregateInputType
    _min?: KeyDiffieMinAggregateInputType
    _max?: KeyDiffieMaxAggregateInputType
  }

  export type KeyDiffieGroupByOutputType = {
    id: string
    publicKeyP: bigint
    publicKeyG: bigint
    privateKeyServer: bigint
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: KeyDiffieCountAggregateOutputType | null
    _avg: KeyDiffieAvgAggregateOutputType | null
    _sum: KeyDiffieSumAggregateOutputType | null
    _min: KeyDiffieMinAggregateOutputType | null
    _max: KeyDiffieMaxAggregateOutputType | null
  }

  type GetKeyDiffieGroupByPayload<T extends KeyDiffieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeyDiffieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeyDiffieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeyDiffieGroupByOutputType[P]>
            : GetScalarType<T[P], KeyDiffieGroupByOutputType[P]>
        }
      >
    >


  export type KeyDiffieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKeyP?: boolean
    publicKeyG?: boolean
    privateKeyServer?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyDiffie"]>

  export type KeyDiffieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKeyP?: boolean
    publicKeyG?: boolean
    privateKeyServer?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyDiffie"]>

  export type KeyDiffieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKeyP?: boolean
    publicKeyG?: boolean
    privateKeyServer?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyDiffie"]>

  export type KeyDiffieSelectScalar = {
    id?: boolean
    publicKeyP?: boolean
    publicKeyG?: boolean
    privateKeyServer?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KeyDiffieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicKeyP" | "publicKeyG" | "privateKeyServer" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["keyDiffie"]>
  export type KeyDiffieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KeyDiffieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KeyDiffieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $KeyDiffiePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KeyDiffie"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicKeyP: bigint
      publicKeyG: bigint
      privateKeyServer: bigint
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["keyDiffie"]>
    composites: {}
  }

  type KeyDiffieGetPayload<S extends boolean | null | undefined | KeyDiffieDefaultArgs> = $Result.GetResult<Prisma.$KeyDiffiePayload, S>

  type KeyDiffieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeyDiffieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeyDiffieCountAggregateInputType | true
    }

  export interface KeyDiffieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KeyDiffie'], meta: { name: 'KeyDiffie' } }
    /**
     * Find zero or one KeyDiffie that matches the filter.
     * @param {KeyDiffieFindUniqueArgs} args - Arguments to find a KeyDiffie
     * @example
     * // Get one KeyDiffie
     * const keyDiffie = await prisma.keyDiffie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeyDiffieFindUniqueArgs>(args: SelectSubset<T, KeyDiffieFindUniqueArgs<ExtArgs>>): Prisma__KeyDiffieClient<$Result.GetResult<Prisma.$KeyDiffiePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KeyDiffie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeyDiffieFindUniqueOrThrowArgs} args - Arguments to find a KeyDiffie
     * @example
     * // Get one KeyDiffie
     * const keyDiffie = await prisma.keyDiffie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeyDiffieFindUniqueOrThrowArgs>(args: SelectSubset<T, KeyDiffieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeyDiffieClient<$Result.GetResult<Prisma.$KeyDiffiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KeyDiffie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyDiffieFindFirstArgs} args - Arguments to find a KeyDiffie
     * @example
     * // Get one KeyDiffie
     * const keyDiffie = await prisma.keyDiffie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeyDiffieFindFirstArgs>(args?: SelectSubset<T, KeyDiffieFindFirstArgs<ExtArgs>>): Prisma__KeyDiffieClient<$Result.GetResult<Prisma.$KeyDiffiePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KeyDiffie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyDiffieFindFirstOrThrowArgs} args - Arguments to find a KeyDiffie
     * @example
     * // Get one KeyDiffie
     * const keyDiffie = await prisma.keyDiffie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeyDiffieFindFirstOrThrowArgs>(args?: SelectSubset<T, KeyDiffieFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeyDiffieClient<$Result.GetResult<Prisma.$KeyDiffiePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KeyDiffies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyDiffieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KeyDiffies
     * const keyDiffies = await prisma.keyDiffie.findMany()
     * 
     * // Get first 10 KeyDiffies
     * const keyDiffies = await prisma.keyDiffie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keyDiffieWithIdOnly = await prisma.keyDiffie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeyDiffieFindManyArgs>(args?: SelectSubset<T, KeyDiffieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyDiffiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KeyDiffie.
     * @param {KeyDiffieCreateArgs} args - Arguments to create a KeyDiffie.
     * @example
     * // Create one KeyDiffie
     * const KeyDiffie = await prisma.keyDiffie.create({
     *   data: {
     *     // ... data to create a KeyDiffie
     *   }
     * })
     * 
     */
    create<T extends KeyDiffieCreateArgs>(args: SelectSubset<T, KeyDiffieCreateArgs<ExtArgs>>): Prisma__KeyDiffieClient<$Result.GetResult<Prisma.$KeyDiffiePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KeyDiffies.
     * @param {KeyDiffieCreateManyArgs} args - Arguments to create many KeyDiffies.
     * @example
     * // Create many KeyDiffies
     * const keyDiffie = await prisma.keyDiffie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeyDiffieCreateManyArgs>(args?: SelectSubset<T, KeyDiffieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KeyDiffies and returns the data saved in the database.
     * @param {KeyDiffieCreateManyAndReturnArgs} args - Arguments to create many KeyDiffies.
     * @example
     * // Create many KeyDiffies
     * const keyDiffie = await prisma.keyDiffie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KeyDiffies and only return the `id`
     * const keyDiffieWithIdOnly = await prisma.keyDiffie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeyDiffieCreateManyAndReturnArgs>(args?: SelectSubset<T, KeyDiffieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyDiffiePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KeyDiffie.
     * @param {KeyDiffieDeleteArgs} args - Arguments to delete one KeyDiffie.
     * @example
     * // Delete one KeyDiffie
     * const KeyDiffie = await prisma.keyDiffie.delete({
     *   where: {
     *     // ... filter to delete one KeyDiffie
     *   }
     * })
     * 
     */
    delete<T extends KeyDiffieDeleteArgs>(args: SelectSubset<T, KeyDiffieDeleteArgs<ExtArgs>>): Prisma__KeyDiffieClient<$Result.GetResult<Prisma.$KeyDiffiePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KeyDiffie.
     * @param {KeyDiffieUpdateArgs} args - Arguments to update one KeyDiffie.
     * @example
     * // Update one KeyDiffie
     * const keyDiffie = await prisma.keyDiffie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeyDiffieUpdateArgs>(args: SelectSubset<T, KeyDiffieUpdateArgs<ExtArgs>>): Prisma__KeyDiffieClient<$Result.GetResult<Prisma.$KeyDiffiePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KeyDiffies.
     * @param {KeyDiffieDeleteManyArgs} args - Arguments to filter KeyDiffies to delete.
     * @example
     * // Delete a few KeyDiffies
     * const { count } = await prisma.keyDiffie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeyDiffieDeleteManyArgs>(args?: SelectSubset<T, KeyDiffieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeyDiffies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyDiffieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KeyDiffies
     * const keyDiffie = await prisma.keyDiffie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeyDiffieUpdateManyArgs>(args: SelectSubset<T, KeyDiffieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeyDiffies and returns the data updated in the database.
     * @param {KeyDiffieUpdateManyAndReturnArgs} args - Arguments to update many KeyDiffies.
     * @example
     * // Update many KeyDiffies
     * const keyDiffie = await prisma.keyDiffie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KeyDiffies and only return the `id`
     * const keyDiffieWithIdOnly = await prisma.keyDiffie.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends KeyDiffieUpdateManyAndReturnArgs>(args: SelectSubset<T, KeyDiffieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyDiffiePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KeyDiffie.
     * @param {KeyDiffieUpsertArgs} args - Arguments to update or create a KeyDiffie.
     * @example
     * // Update or create a KeyDiffie
     * const keyDiffie = await prisma.keyDiffie.upsert({
     *   create: {
     *     // ... data to create a KeyDiffie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KeyDiffie we want to update
     *   }
     * })
     */
    upsert<T extends KeyDiffieUpsertArgs>(args: SelectSubset<T, KeyDiffieUpsertArgs<ExtArgs>>): Prisma__KeyDiffieClient<$Result.GetResult<Prisma.$KeyDiffiePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KeyDiffies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyDiffieCountArgs} args - Arguments to filter KeyDiffies to count.
     * @example
     * // Count the number of KeyDiffies
     * const count = await prisma.keyDiffie.count({
     *   where: {
     *     // ... the filter for the KeyDiffies we want to count
     *   }
     * })
    **/
    count<T extends KeyDiffieCountArgs>(
      args?: Subset<T, KeyDiffieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeyDiffieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KeyDiffie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyDiffieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KeyDiffieAggregateArgs>(args: Subset<T, KeyDiffieAggregateArgs>): Prisma.PrismaPromise<GetKeyDiffieAggregateType<T>>

    /**
     * Group by KeyDiffie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyDiffieGroupByArgs} args - Group by arguments.
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
      T extends KeyDiffieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeyDiffieGroupByArgs['orderBy'] }
        : { orderBy?: KeyDiffieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KeyDiffieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeyDiffieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KeyDiffie model
   */
  readonly fields: KeyDiffieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KeyDiffie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeyDiffieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the KeyDiffie model
   */
  interface KeyDiffieFieldRefs {
    readonly id: FieldRef<"KeyDiffie", 'String'>
    readonly publicKeyP: FieldRef<"KeyDiffie", 'BigInt'>
    readonly publicKeyG: FieldRef<"KeyDiffie", 'BigInt'>
    readonly privateKeyServer: FieldRef<"KeyDiffie", 'BigInt'>
    readonly userId: FieldRef<"KeyDiffie", 'String'>
    readonly createdAt: FieldRef<"KeyDiffie", 'DateTime'>
    readonly updatedAt: FieldRef<"KeyDiffie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KeyDiffie findUnique
   */
  export type KeyDiffieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyDiffie
     */
    select?: KeyDiffieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyDiffie
     */
    omit?: KeyDiffieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyDiffieInclude<ExtArgs> | null
    /**
     * Filter, which KeyDiffie to fetch.
     */
    where: KeyDiffieWhereUniqueInput
  }

  /**
   * KeyDiffie findUniqueOrThrow
   */
  export type KeyDiffieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyDiffie
     */
    select?: KeyDiffieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyDiffie
     */
    omit?: KeyDiffieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyDiffieInclude<ExtArgs> | null
    /**
     * Filter, which KeyDiffie to fetch.
     */
    where: KeyDiffieWhereUniqueInput
  }

  /**
   * KeyDiffie findFirst
   */
  export type KeyDiffieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyDiffie
     */
    select?: KeyDiffieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyDiffie
     */
    omit?: KeyDiffieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyDiffieInclude<ExtArgs> | null
    /**
     * Filter, which KeyDiffie to fetch.
     */
    where?: KeyDiffieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyDiffies to fetch.
     */
    orderBy?: KeyDiffieOrderByWithRelationInput | KeyDiffieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeyDiffies.
     */
    cursor?: KeyDiffieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyDiffies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyDiffies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeyDiffies.
     */
    distinct?: KeyDiffieScalarFieldEnum | KeyDiffieScalarFieldEnum[]
  }

  /**
   * KeyDiffie findFirstOrThrow
   */
  export type KeyDiffieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyDiffie
     */
    select?: KeyDiffieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyDiffie
     */
    omit?: KeyDiffieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyDiffieInclude<ExtArgs> | null
    /**
     * Filter, which KeyDiffie to fetch.
     */
    where?: KeyDiffieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyDiffies to fetch.
     */
    orderBy?: KeyDiffieOrderByWithRelationInput | KeyDiffieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeyDiffies.
     */
    cursor?: KeyDiffieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyDiffies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyDiffies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeyDiffies.
     */
    distinct?: KeyDiffieScalarFieldEnum | KeyDiffieScalarFieldEnum[]
  }

  /**
   * KeyDiffie findMany
   */
  export type KeyDiffieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyDiffie
     */
    select?: KeyDiffieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyDiffie
     */
    omit?: KeyDiffieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyDiffieInclude<ExtArgs> | null
    /**
     * Filter, which KeyDiffies to fetch.
     */
    where?: KeyDiffieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyDiffies to fetch.
     */
    orderBy?: KeyDiffieOrderByWithRelationInput | KeyDiffieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KeyDiffies.
     */
    cursor?: KeyDiffieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyDiffies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyDiffies.
     */
    skip?: number
    distinct?: KeyDiffieScalarFieldEnum | KeyDiffieScalarFieldEnum[]
  }

  /**
   * KeyDiffie create
   */
  export type KeyDiffieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyDiffie
     */
    select?: KeyDiffieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyDiffie
     */
    omit?: KeyDiffieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyDiffieInclude<ExtArgs> | null
    /**
     * The data needed to create a KeyDiffie.
     */
    data: XOR<KeyDiffieCreateInput, KeyDiffieUncheckedCreateInput>
  }

  /**
   * KeyDiffie createMany
   */
  export type KeyDiffieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KeyDiffies.
     */
    data: KeyDiffieCreateManyInput | KeyDiffieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KeyDiffie createManyAndReturn
   */
  export type KeyDiffieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyDiffie
     */
    select?: KeyDiffieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeyDiffie
     */
    omit?: KeyDiffieOmit<ExtArgs> | null
    /**
     * The data used to create many KeyDiffies.
     */
    data: KeyDiffieCreateManyInput | KeyDiffieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyDiffieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KeyDiffie update
   */
  export type KeyDiffieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyDiffie
     */
    select?: KeyDiffieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyDiffie
     */
    omit?: KeyDiffieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyDiffieInclude<ExtArgs> | null
    /**
     * The data needed to update a KeyDiffie.
     */
    data: XOR<KeyDiffieUpdateInput, KeyDiffieUncheckedUpdateInput>
    /**
     * Choose, which KeyDiffie to update.
     */
    where: KeyDiffieWhereUniqueInput
  }

  /**
   * KeyDiffie updateMany
   */
  export type KeyDiffieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KeyDiffies.
     */
    data: XOR<KeyDiffieUpdateManyMutationInput, KeyDiffieUncheckedUpdateManyInput>
    /**
     * Filter which KeyDiffies to update
     */
    where?: KeyDiffieWhereInput
    /**
     * Limit how many KeyDiffies to update.
     */
    limit?: number
  }

  /**
   * KeyDiffie updateManyAndReturn
   */
  export type KeyDiffieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyDiffie
     */
    select?: KeyDiffieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeyDiffie
     */
    omit?: KeyDiffieOmit<ExtArgs> | null
    /**
     * The data used to update KeyDiffies.
     */
    data: XOR<KeyDiffieUpdateManyMutationInput, KeyDiffieUncheckedUpdateManyInput>
    /**
     * Filter which KeyDiffies to update
     */
    where?: KeyDiffieWhereInput
    /**
     * Limit how many KeyDiffies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyDiffieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KeyDiffie upsert
   */
  export type KeyDiffieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyDiffie
     */
    select?: KeyDiffieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyDiffie
     */
    omit?: KeyDiffieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyDiffieInclude<ExtArgs> | null
    /**
     * The filter to search for the KeyDiffie to update in case it exists.
     */
    where: KeyDiffieWhereUniqueInput
    /**
     * In case the KeyDiffie found by the `where` argument doesn't exist, create a new KeyDiffie with this data.
     */
    create: XOR<KeyDiffieCreateInput, KeyDiffieUncheckedCreateInput>
    /**
     * In case the KeyDiffie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeyDiffieUpdateInput, KeyDiffieUncheckedUpdateInput>
  }

  /**
   * KeyDiffie delete
   */
  export type KeyDiffieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyDiffie
     */
    select?: KeyDiffieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyDiffie
     */
    omit?: KeyDiffieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyDiffieInclude<ExtArgs> | null
    /**
     * Filter which KeyDiffie to delete.
     */
    where: KeyDiffieWhereUniqueInput
  }

  /**
   * KeyDiffie deleteMany
   */
  export type KeyDiffieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeyDiffies to delete
     */
    where?: KeyDiffieWhereInput
    /**
     * Limit how many KeyDiffies to delete.
     */
    limit?: number
  }

  /**
   * KeyDiffie without action
   */
  export type KeyDiffieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyDiffie
     */
    select?: KeyDiffieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyDiffie
     */
    omit?: KeyDiffieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyDiffieInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    isDeactivated: 'isDeactivated',
    deactivatedAt: 'deactivatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    text: 'text',
    isStarted: 'isStarted',
    isFake: 'isFake',
    isEdited: 'isEdited',
    isDeleted: 'isDeleted',
    replyToId: 'replyToId',
    userId: 'userId',
    chatId: 'chatId',
    readCount: 'readCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const FileMessageScalarFieldEnum: {
    id: 'id',
    fileUrl: 'fileUrl',
    fileName: 'fileName',
    fileFullName: 'fileFullName',
    fileSize: 'fileSize',
    fileFormat: 'fileFormat',
    chatMessageId: 'chatMessageId',
    userId: 'userId',
    chatId: 'chatId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileMessageScalarFieldEnum = (typeof FileMessageScalarFieldEnum)[keyof typeof FileMessageScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    chatName: 'chatName',
    isGroup: 'isGroup',
    avatarUrl: 'avatarUrl',
    isDeleted: 'isDeleted',
    lastMessageAt: 'lastMessageAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const ChatMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    isCreator: 'isCreator',
    chatId: 'chatId',
    joinedAt: 'joinedAt'
  };

  export type ChatMemberScalarFieldEnum = (typeof ChatMemberScalarFieldEnum)[keyof typeof ChatMemberScalarFieldEnum]


  export const ClientKeyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    publicKeyE: 'publicKeyE',
    publicKeyN: 'publicKeyN',
    sessionKey: 'sessionKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientKeyScalarFieldEnum = (typeof ClientKeyScalarFieldEnum)[keyof typeof ClientKeyScalarFieldEnum]


  export const ServerKeyScalarFieldEnum: {
    id: 'id',
    publicKeyE: 'publicKeyE',
    publicKeyN: 'publicKeyN',
    privateKeyD: 'privateKeyD',
    privateKeyP: 'privateKeyP',
    privateKeyQ: 'privateKeyQ',
    chatId: 'chatId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServerKeyScalarFieldEnum = (typeof ServerKeyScalarFieldEnum)[keyof typeof ServerKeyScalarFieldEnum]


  export const KeyDiffieScalarFieldEnum: {
    id: 'id',
    publicKeyP: 'publicKeyP',
    publicKeyG: 'publicKeyG',
    privateKeyServer: 'privateKeyServer',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KeyDiffieScalarFieldEnum = (typeof KeyDiffieScalarFieldEnum)[keyof typeof KeyDiffieScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isDeactivated?: BoolFilter<"User"> | boolean
    deactivatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    messages?: ChatMessageListRelationFilter
    chatMemberships?: ChatMemberListRelationFilter
    clientKey?: XOR<ClientKeyNullableScalarRelationFilter, ClientKeyWhereInput> | null
    keyDiffie?: XOR<KeyDiffieNullableScalarRelationFilter, KeyDiffieWhereInput> | null
    files?: FileMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeactivated?: SortOrder
    deactivatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: ChatMessageOrderByRelationAggregateInput
    chatMemberships?: ChatMemberOrderByRelationAggregateInput
    clientKey?: ClientKeyOrderByWithRelationInput
    keyDiffie?: KeyDiffieOrderByWithRelationInput
    files?: FileMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    isDeactivated?: BoolFilter<"User"> | boolean
    deactivatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    messages?: ChatMessageListRelationFilter
    chatMemberships?: ChatMemberListRelationFilter
    clientKey?: XOR<ClientKeyNullableScalarRelationFilter, ClientKeyWhereInput> | null
    keyDiffie?: XOR<KeyDiffieNullableScalarRelationFilter, KeyDiffieWhereInput> | null
    files?: FileMessageListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeactivated?: SortOrder
    deactivatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isDeactivated?: BoolWithAggregatesFilter<"User"> | boolean
    deactivatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    text?: StringNullableFilter<"ChatMessage"> | string | null
    isStarted?: BoolFilter<"ChatMessage"> | boolean
    isFake?: BoolFilter<"ChatMessage"> | boolean
    isEdited?: BoolFilter<"ChatMessage"> | boolean
    isDeleted?: BoolFilter<"ChatMessage"> | boolean
    replyToId?: StringNullableFilter<"ChatMessage"> | string | null
    userId?: StringFilter<"ChatMessage"> | string
    chatId?: StringFilter<"ChatMessage"> | string
    readCount?: StringNullableFilter<"ChatMessage"> | string | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    files?: FileMessageListRelationFilter
    replyTo?: XOR<ChatMessageNullableScalarRelationFilter, ChatMessageWhereInput> | null
    replies?: ChatMessageListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrderInput | SortOrder
    isStarted?: SortOrder
    isFake?: SortOrder
    isEdited?: SortOrder
    isDeleted?: SortOrder
    replyToId?: SortOrderInput | SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    readCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    files?: FileMessageOrderByRelationAggregateInput
    replyTo?: ChatMessageOrderByWithRelationInput
    replies?: ChatMessageOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    text?: StringNullableFilter<"ChatMessage"> | string | null
    isStarted?: BoolFilter<"ChatMessage"> | boolean
    isFake?: BoolFilter<"ChatMessage"> | boolean
    isEdited?: BoolFilter<"ChatMessage"> | boolean
    isDeleted?: BoolFilter<"ChatMessage"> | boolean
    replyToId?: StringNullableFilter<"ChatMessage"> | string | null
    userId?: StringFilter<"ChatMessage"> | string
    chatId?: StringFilter<"ChatMessage"> | string
    readCount?: StringNullableFilter<"ChatMessage"> | string | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    files?: FileMessageListRelationFilter
    replyTo?: XOR<ChatMessageNullableScalarRelationFilter, ChatMessageWhereInput> | null
    replies?: ChatMessageListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrderInput | SortOrder
    isStarted?: SortOrder
    isFake?: SortOrder
    isEdited?: SortOrder
    isDeleted?: SortOrder
    replyToId?: SortOrderInput | SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    readCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    text?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
    isStarted?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    isFake?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    isEdited?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    replyToId?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
    userId?: StringWithAggregatesFilter<"ChatMessage"> | string
    chatId?: StringWithAggregatesFilter<"ChatMessage"> | string
    readCount?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type FileMessageWhereInput = {
    AND?: FileMessageWhereInput | FileMessageWhereInput[]
    OR?: FileMessageWhereInput[]
    NOT?: FileMessageWhereInput | FileMessageWhereInput[]
    id?: StringFilter<"FileMessage"> | string
    fileUrl?: StringFilter<"FileMessage"> | string
    fileName?: StringFilter<"FileMessage"> | string
    fileFullName?: StringFilter<"FileMessage"> | string
    fileSize?: StringFilter<"FileMessage"> | string
    fileFormat?: StringFilter<"FileMessage"> | string
    chatMessageId?: StringFilter<"FileMessage"> | string
    userId?: StringFilter<"FileMessage"> | string
    chatId?: StringFilter<"FileMessage"> | string
    createdAt?: DateTimeFilter<"FileMessage"> | Date | string
    updatedAt?: DateTimeFilter<"FileMessage"> | Date | string
    chatMessage?: XOR<ChatMessageScalarRelationFilter, ChatMessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type FileMessageOrderByWithRelationInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileFullName?: SortOrder
    fileSize?: SortOrder
    fileFormat?: SortOrder
    chatMessageId?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatMessage?: ChatMessageOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
  }

  export type FileMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FileMessageWhereInput | FileMessageWhereInput[]
    OR?: FileMessageWhereInput[]
    NOT?: FileMessageWhereInput | FileMessageWhereInput[]
    fileUrl?: StringFilter<"FileMessage"> | string
    fileName?: StringFilter<"FileMessage"> | string
    fileFullName?: StringFilter<"FileMessage"> | string
    fileSize?: StringFilter<"FileMessage"> | string
    fileFormat?: StringFilter<"FileMessage"> | string
    chatMessageId?: StringFilter<"FileMessage"> | string
    userId?: StringFilter<"FileMessage"> | string
    chatId?: StringFilter<"FileMessage"> | string
    createdAt?: DateTimeFilter<"FileMessage"> | Date | string
    updatedAt?: DateTimeFilter<"FileMessage"> | Date | string
    chatMessage?: XOR<ChatMessageScalarRelationFilter, ChatMessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type FileMessageOrderByWithAggregationInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileFullName?: SortOrder
    fileSize?: SortOrder
    fileFormat?: SortOrder
    chatMessageId?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileMessageCountOrderByAggregateInput
    _max?: FileMessageMaxOrderByAggregateInput
    _min?: FileMessageMinOrderByAggregateInput
  }

  export type FileMessageScalarWhereWithAggregatesInput = {
    AND?: FileMessageScalarWhereWithAggregatesInput | FileMessageScalarWhereWithAggregatesInput[]
    OR?: FileMessageScalarWhereWithAggregatesInput[]
    NOT?: FileMessageScalarWhereWithAggregatesInput | FileMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FileMessage"> | string
    fileUrl?: StringWithAggregatesFilter<"FileMessage"> | string
    fileName?: StringWithAggregatesFilter<"FileMessage"> | string
    fileFullName?: StringWithAggregatesFilter<"FileMessage"> | string
    fileSize?: StringWithAggregatesFilter<"FileMessage"> | string
    fileFormat?: StringWithAggregatesFilter<"FileMessage"> | string
    chatMessageId?: StringWithAggregatesFilter<"FileMessage"> | string
    userId?: StringWithAggregatesFilter<"FileMessage"> | string
    chatId?: StringWithAggregatesFilter<"FileMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FileMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FileMessage"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    chatName?: StringNullableFilter<"Chat"> | string | null
    isGroup?: BoolFilter<"Chat"> | boolean
    avatarUrl?: StringNullableFilter<"Chat"> | string | null
    isDeleted?: BoolFilter<"Chat"> | boolean
    lastMessageAt?: DateTimeNullableFilter<"Chat"> | Date | string | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    messages?: ChatMessageListRelationFilter
    members?: ChatMemberListRelationFilter
    files?: FileMessageListRelationFilter
    serverKey?: XOR<ServerKeyNullableScalarRelationFilter, ServerKeyWhereInput> | null
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    chatName?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    lastMessageAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: ChatMessageOrderByRelationAggregateInput
    members?: ChatMemberOrderByRelationAggregateInput
    files?: FileMessageOrderByRelationAggregateInput
    serverKey?: ServerKeyOrderByWithRelationInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    chatName?: StringNullableFilter<"Chat"> | string | null
    isGroup?: BoolFilter<"Chat"> | boolean
    avatarUrl?: StringNullableFilter<"Chat"> | string | null
    isDeleted?: BoolFilter<"Chat"> | boolean
    lastMessageAt?: DateTimeNullableFilter<"Chat"> | Date | string | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    messages?: ChatMessageListRelationFilter
    members?: ChatMemberListRelationFilter
    files?: FileMessageListRelationFilter
    serverKey?: XOR<ServerKeyNullableScalarRelationFilter, ServerKeyWhereInput> | null
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    chatName?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    lastMessageAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    chatName?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    isGroup?: BoolWithAggregatesFilter<"Chat"> | boolean
    avatarUrl?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Chat"> | boolean
    lastMessageAt?: DateTimeNullableWithAggregatesFilter<"Chat"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type ChatMemberWhereInput = {
    AND?: ChatMemberWhereInput | ChatMemberWhereInput[]
    OR?: ChatMemberWhereInput[]
    NOT?: ChatMemberWhereInput | ChatMemberWhereInput[]
    id?: StringFilter<"ChatMember"> | string
    userId?: StringFilter<"ChatMember"> | string
    isCreator?: BoolNullableFilter<"ChatMember"> | boolean | null
    chatId?: StringFilter<"ChatMember"> | string
    joinedAt?: DateTimeFilter<"ChatMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type ChatMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    isCreator?: SortOrderInput | SortOrder
    chatId?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
  }

  export type ChatMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_chatId?: ChatMemberUserIdChatIdCompoundUniqueInput
    AND?: ChatMemberWhereInput | ChatMemberWhereInput[]
    OR?: ChatMemberWhereInput[]
    NOT?: ChatMemberWhereInput | ChatMemberWhereInput[]
    userId?: StringFilter<"ChatMember"> | string
    isCreator?: BoolNullableFilter<"ChatMember"> | boolean | null
    chatId?: StringFilter<"ChatMember"> | string
    joinedAt?: DateTimeFilter<"ChatMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id" | "userId_chatId">

  export type ChatMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    isCreator?: SortOrderInput | SortOrder
    chatId?: SortOrder
    joinedAt?: SortOrder
    _count?: ChatMemberCountOrderByAggregateInput
    _max?: ChatMemberMaxOrderByAggregateInput
    _min?: ChatMemberMinOrderByAggregateInput
  }

  export type ChatMemberScalarWhereWithAggregatesInput = {
    AND?: ChatMemberScalarWhereWithAggregatesInput | ChatMemberScalarWhereWithAggregatesInput[]
    OR?: ChatMemberScalarWhereWithAggregatesInput[]
    NOT?: ChatMemberScalarWhereWithAggregatesInput | ChatMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMember"> | string
    userId?: StringWithAggregatesFilter<"ChatMember"> | string
    isCreator?: BoolNullableWithAggregatesFilter<"ChatMember"> | boolean | null
    chatId?: StringWithAggregatesFilter<"ChatMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"ChatMember"> | Date | string
  }

  export type ClientKeyWhereInput = {
    AND?: ClientKeyWhereInput | ClientKeyWhereInput[]
    OR?: ClientKeyWhereInput[]
    NOT?: ClientKeyWhereInput | ClientKeyWhereInput[]
    id?: StringFilter<"ClientKey"> | string
    userId?: StringFilter<"ClientKey"> | string
    publicKeyE?: BigIntFilter<"ClientKey"> | bigint | number
    publicKeyN?: BigIntFilter<"ClientKey"> | bigint | number
    sessionKey?: BigIntFilter<"ClientKey"> | bigint | number
    createdAt?: DateTimeFilter<"ClientKey"> | Date | string
    updatedAt?: DateTimeFilter<"ClientKey"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ClientKeyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    publicKeyE?: SortOrder
    publicKeyN?: SortOrder
    sessionKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ClientKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ClientKeyWhereInput | ClientKeyWhereInput[]
    OR?: ClientKeyWhereInput[]
    NOT?: ClientKeyWhereInput | ClientKeyWhereInput[]
    publicKeyE?: BigIntFilter<"ClientKey"> | bigint | number
    publicKeyN?: BigIntFilter<"ClientKey"> | bigint | number
    sessionKey?: BigIntFilter<"ClientKey"> | bigint | number
    createdAt?: DateTimeFilter<"ClientKey"> | Date | string
    updatedAt?: DateTimeFilter<"ClientKey"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ClientKeyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    publicKeyE?: SortOrder
    publicKeyN?: SortOrder
    sessionKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientKeyCountOrderByAggregateInput
    _avg?: ClientKeyAvgOrderByAggregateInput
    _max?: ClientKeyMaxOrderByAggregateInput
    _min?: ClientKeyMinOrderByAggregateInput
    _sum?: ClientKeySumOrderByAggregateInput
  }

  export type ClientKeyScalarWhereWithAggregatesInput = {
    AND?: ClientKeyScalarWhereWithAggregatesInput | ClientKeyScalarWhereWithAggregatesInput[]
    OR?: ClientKeyScalarWhereWithAggregatesInput[]
    NOT?: ClientKeyScalarWhereWithAggregatesInput | ClientKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientKey"> | string
    userId?: StringWithAggregatesFilter<"ClientKey"> | string
    publicKeyE?: BigIntWithAggregatesFilter<"ClientKey"> | bigint | number
    publicKeyN?: BigIntWithAggregatesFilter<"ClientKey"> | bigint | number
    sessionKey?: BigIntWithAggregatesFilter<"ClientKey"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"ClientKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClientKey"> | Date | string
  }

  export type ServerKeyWhereInput = {
    AND?: ServerKeyWhereInput | ServerKeyWhereInput[]
    OR?: ServerKeyWhereInput[]
    NOT?: ServerKeyWhereInput | ServerKeyWhereInput[]
    id?: StringFilter<"ServerKey"> | string
    publicKeyE?: BigIntFilter<"ServerKey"> | bigint | number
    publicKeyN?: BigIntFilter<"ServerKey"> | bigint | number
    privateKeyD?: BigIntFilter<"ServerKey"> | bigint | number
    privateKeyP?: BigIntFilter<"ServerKey"> | bigint | number
    privateKeyQ?: BigIntFilter<"ServerKey"> | bigint | number
    chatId?: StringFilter<"ServerKey"> | string
    createdAt?: DateTimeFilter<"ServerKey"> | Date | string
    updatedAt?: DateTimeFilter<"ServerKey"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type ServerKeyOrderByWithRelationInput = {
    id?: SortOrder
    publicKeyE?: SortOrder
    publicKeyN?: SortOrder
    privateKeyD?: SortOrder
    privateKeyP?: SortOrder
    privateKeyQ?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chat?: ChatOrderByWithRelationInput
  }

  export type ServerKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chatId?: string
    AND?: ServerKeyWhereInput | ServerKeyWhereInput[]
    OR?: ServerKeyWhereInput[]
    NOT?: ServerKeyWhereInput | ServerKeyWhereInput[]
    publicKeyE?: BigIntFilter<"ServerKey"> | bigint | number
    publicKeyN?: BigIntFilter<"ServerKey"> | bigint | number
    privateKeyD?: BigIntFilter<"ServerKey"> | bigint | number
    privateKeyP?: BigIntFilter<"ServerKey"> | bigint | number
    privateKeyQ?: BigIntFilter<"ServerKey"> | bigint | number
    createdAt?: DateTimeFilter<"ServerKey"> | Date | string
    updatedAt?: DateTimeFilter<"ServerKey"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id" | "chatId">

  export type ServerKeyOrderByWithAggregationInput = {
    id?: SortOrder
    publicKeyE?: SortOrder
    publicKeyN?: SortOrder
    privateKeyD?: SortOrder
    privateKeyP?: SortOrder
    privateKeyQ?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServerKeyCountOrderByAggregateInput
    _avg?: ServerKeyAvgOrderByAggregateInput
    _max?: ServerKeyMaxOrderByAggregateInput
    _min?: ServerKeyMinOrderByAggregateInput
    _sum?: ServerKeySumOrderByAggregateInput
  }

  export type ServerKeyScalarWhereWithAggregatesInput = {
    AND?: ServerKeyScalarWhereWithAggregatesInput | ServerKeyScalarWhereWithAggregatesInput[]
    OR?: ServerKeyScalarWhereWithAggregatesInput[]
    NOT?: ServerKeyScalarWhereWithAggregatesInput | ServerKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServerKey"> | string
    publicKeyE?: BigIntWithAggregatesFilter<"ServerKey"> | bigint | number
    publicKeyN?: BigIntWithAggregatesFilter<"ServerKey"> | bigint | number
    privateKeyD?: BigIntWithAggregatesFilter<"ServerKey"> | bigint | number
    privateKeyP?: BigIntWithAggregatesFilter<"ServerKey"> | bigint | number
    privateKeyQ?: BigIntWithAggregatesFilter<"ServerKey"> | bigint | number
    chatId?: StringWithAggregatesFilter<"ServerKey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ServerKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServerKey"> | Date | string
  }

  export type KeyDiffieWhereInput = {
    AND?: KeyDiffieWhereInput | KeyDiffieWhereInput[]
    OR?: KeyDiffieWhereInput[]
    NOT?: KeyDiffieWhereInput | KeyDiffieWhereInput[]
    id?: StringFilter<"KeyDiffie"> | string
    publicKeyP?: BigIntFilter<"KeyDiffie"> | bigint | number
    publicKeyG?: BigIntFilter<"KeyDiffie"> | bigint | number
    privateKeyServer?: BigIntFilter<"KeyDiffie"> | bigint | number
    userId?: StringFilter<"KeyDiffie"> | string
    createdAt?: DateTimeFilter<"KeyDiffie"> | Date | string
    updatedAt?: DateTimeFilter<"KeyDiffie"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type KeyDiffieOrderByWithRelationInput = {
    id?: SortOrder
    publicKeyP?: SortOrder
    publicKeyG?: SortOrder
    privateKeyServer?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type KeyDiffieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: KeyDiffieWhereInput | KeyDiffieWhereInput[]
    OR?: KeyDiffieWhereInput[]
    NOT?: KeyDiffieWhereInput | KeyDiffieWhereInput[]
    publicKeyP?: BigIntFilter<"KeyDiffie"> | bigint | number
    publicKeyG?: BigIntFilter<"KeyDiffie"> | bigint | number
    privateKeyServer?: BigIntFilter<"KeyDiffie"> | bigint | number
    createdAt?: DateTimeFilter<"KeyDiffie"> | Date | string
    updatedAt?: DateTimeFilter<"KeyDiffie"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type KeyDiffieOrderByWithAggregationInput = {
    id?: SortOrder
    publicKeyP?: SortOrder
    publicKeyG?: SortOrder
    privateKeyServer?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KeyDiffieCountOrderByAggregateInput
    _avg?: KeyDiffieAvgOrderByAggregateInput
    _max?: KeyDiffieMaxOrderByAggregateInput
    _min?: KeyDiffieMinOrderByAggregateInput
    _sum?: KeyDiffieSumOrderByAggregateInput
  }

  export type KeyDiffieScalarWhereWithAggregatesInput = {
    AND?: KeyDiffieScalarWhereWithAggregatesInput | KeyDiffieScalarWhereWithAggregatesInput[]
    OR?: KeyDiffieScalarWhereWithAggregatesInput[]
    NOT?: KeyDiffieScalarWhereWithAggregatesInput | KeyDiffieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KeyDiffie"> | string
    publicKeyP?: BigIntWithAggregatesFilter<"KeyDiffie"> | bigint | number
    publicKeyG?: BigIntWithAggregatesFilter<"KeyDiffie"> | bigint | number
    privateKeyServer?: BigIntWithAggregatesFilter<"KeyDiffie"> | bigint | number
    userId?: StringWithAggregatesFilter<"KeyDiffie"> | string
    createdAt?: DateTimeWithAggregatesFilter<"KeyDiffie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KeyDiffie"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberCreateNestedManyWithoutUserInput
    clientKey?: ClientKeyCreateNestedOneWithoutUserInput
    keyDiffie?: KeyDiffieCreateNestedOneWithoutUserInput
    files?: FileMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    clientKey?: ClientKeyUncheckedCreateNestedOneWithoutUserInput
    keyDiffie?: KeyDiffieUncheckedCreateNestedOneWithoutUserInput
    files?: FileMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUpdateManyWithoutUserNestedInput
    clientKey?: ClientKeyUpdateOneWithoutUserNestedInput
    keyDiffie?: KeyDiffieUpdateOneWithoutUserNestedInput
    files?: FileMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    clientKey?: ClientKeyUncheckedUpdateOneWithoutUserNestedInput
    keyDiffie?: KeyDiffieUncheckedUpdateOneWithoutUserNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replyTo?: ChatMessageCreateNestedOneWithoutRepliesInput
    replies?: ChatMessageCreateNestedManyWithoutReplyToInput
    user: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    replyToId?: string | null
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replyTo?: ChatMessageUpdateOneWithoutRepliesNestedInput
    replies?: ChatMessageUpdateManyWithoutReplyToNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    replyToId?: string | null
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileMessageCreateInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMessage: ChatMessageCreateNestedOneWithoutFilesInput
    user: UserCreateNestedOneWithoutFilesInput
    chat: ChatCreateNestedOneWithoutFilesInput
  }

  export type FileMessageUncheckedCreateInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    chatMessageId: string
    userId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessage?: ChatMessageUpdateOneRequiredWithoutFilesNestedInput
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
    chat?: ChatUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    chatMessageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileMessageCreateManyInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    chatMessageId: string
    userId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    chatMessageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
    files?: FileMessageCreateNestedManyWithoutChatInput
    serverKey?: ServerKeyCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    files?: FileMessageUncheckedCreateNestedManyWithoutChatInput
    serverKey?: ServerKeyUncheckedCreateNestedOneWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
    files?: FileMessageUpdateManyWithoutChatNestedInput
    serverKey?: ServerKeyUpdateOneWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutChatNestedInput
    serverKey?: ServerKeyUncheckedUpdateOneWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberCreateInput = {
    id?: string
    isCreator?: boolean | null
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutChatMembershipsInput
    chat: ChatCreateNestedOneWithoutMembersInput
  }

  export type ChatMemberUncheckedCreateInput = {
    id?: string
    userId: string
    isCreator?: boolean | null
    chatId: string
    joinedAt?: Date | string
  }

  export type ChatMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatMembershipsNestedInput
    chat?: ChatUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ChatMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    chatId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberCreateManyInput = {
    id?: string
    userId: string
    isCreator?: boolean | null
    chatId: string
    joinedAt?: Date | string
  }

  export type ChatMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    chatId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientKeyCreateInput = {
    id?: string
    publicKeyE: bigint | number
    publicKeyN: bigint | number
    sessionKey: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientKeyInput
  }

  export type ClientKeyUncheckedCreateInput = {
    id?: string
    userId: string
    publicKeyE: bigint | number
    publicKeyN: bigint | number
    sessionKey: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKeyE?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyN?: BigIntFieldUpdateOperationsInput | bigint | number
    sessionKey?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientKeyNestedInput
  }

  export type ClientKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    publicKeyE?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyN?: BigIntFieldUpdateOperationsInput | bigint | number
    sessionKey?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientKeyCreateManyInput = {
    id?: string
    userId: string
    publicKeyE: bigint | number
    publicKeyN: bigint | number
    sessionKey: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKeyE?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyN?: BigIntFieldUpdateOperationsInput | bigint | number
    sessionKey?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    publicKeyE?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyN?: BigIntFieldUpdateOperationsInput | bigint | number
    sessionKey?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerKeyCreateInput = {
    id?: string
    publicKeyE: bigint | number
    publicKeyN: bigint | number
    privateKeyD: bigint | number
    privateKeyP: bigint | number
    privateKeyQ: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutServerKeyInput
  }

  export type ServerKeyUncheckedCreateInput = {
    id?: string
    publicKeyE: bigint | number
    publicKeyN: bigint | number
    privateKeyD: bigint | number
    privateKeyP: bigint | number
    privateKeyQ: bigint | number
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServerKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKeyE?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyN?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyD?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyP?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyQ?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutServerKeyNestedInput
  }

  export type ServerKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKeyE?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyN?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyD?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyP?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyQ?: BigIntFieldUpdateOperationsInput | bigint | number
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerKeyCreateManyInput = {
    id?: string
    publicKeyE: bigint | number
    publicKeyN: bigint | number
    privateKeyD: bigint | number
    privateKeyP: bigint | number
    privateKeyQ: bigint | number
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServerKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKeyE?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyN?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyD?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyP?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyQ?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKeyE?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyN?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyD?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyP?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyQ?: BigIntFieldUpdateOperationsInput | bigint | number
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyDiffieCreateInput = {
    id?: string
    publicKeyP: bigint | number
    publicKeyG: bigint | number
    privateKeyServer: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutKeyDiffieInput
  }

  export type KeyDiffieUncheckedCreateInput = {
    id?: string
    publicKeyP: bigint | number
    publicKeyG: bigint | number
    privateKeyServer: bigint | number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeyDiffieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKeyP?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyG?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyServer?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutKeyDiffieNestedInput
  }

  export type KeyDiffieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKeyP?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyG?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyServer?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyDiffieCreateManyInput = {
    id?: string
    publicKeyP: bigint | number
    publicKeyG: bigint | number
    privateKeyServer: bigint | number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeyDiffieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKeyP?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyG?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyServer?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyDiffieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKeyP?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyG?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyServer?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatMemberListRelationFilter = {
    every?: ChatMemberWhereInput
    some?: ChatMemberWhereInput
    none?: ChatMemberWhereInput
  }

  export type ClientKeyNullableScalarRelationFilter = {
    is?: ClientKeyWhereInput | null
    isNot?: ClientKeyWhereInput | null
  }

  export type KeyDiffieNullableScalarRelationFilter = {
    is?: KeyDiffieWhereInput | null
    isNot?: KeyDiffieWhereInput | null
  }

  export type FileMessageListRelationFilter = {
    every?: FileMessageWhereInput
    some?: FileMessageWhereInput
    none?: FileMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeactivated?: SortOrder
    deactivatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeactivated?: SortOrder
    deactivatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeactivated?: SortOrder
    deactivatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ChatMessageNullableScalarRelationFilter = {
    is?: ChatMessageWhereInput | null
    isNot?: ChatMessageWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isStarted?: SortOrder
    isFake?: SortOrder
    isEdited?: SortOrder
    isDeleted?: SortOrder
    replyToId?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isStarted?: SortOrder
    isFake?: SortOrder
    isEdited?: SortOrder
    isDeleted?: SortOrder
    replyToId?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isStarted?: SortOrder
    isFake?: SortOrder
    isEdited?: SortOrder
    isDeleted?: SortOrder
    replyToId?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ChatMessageScalarRelationFilter = {
    is?: ChatMessageWhereInput
    isNot?: ChatMessageWhereInput
  }

  export type FileMessageCountOrderByAggregateInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileFullName?: SortOrder
    fileSize?: SortOrder
    fileFormat?: SortOrder
    chatMessageId?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileFullName?: SortOrder
    fileSize?: SortOrder
    fileFormat?: SortOrder
    chatMessageId?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileMessageMinOrderByAggregateInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileFullName?: SortOrder
    fileSize?: SortOrder
    fileFormat?: SortOrder
    chatMessageId?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServerKeyNullableScalarRelationFilter = {
    is?: ServerKeyWhereInput | null
    isNot?: ServerKeyWhereInput | null
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    chatName?: SortOrder
    isGroup?: SortOrder
    avatarUrl?: SortOrder
    isDeleted?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    chatName?: SortOrder
    isGroup?: SortOrder
    avatarUrl?: SortOrder
    isDeleted?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    chatName?: SortOrder
    isGroup?: SortOrder
    avatarUrl?: SortOrder
    isDeleted?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ChatMemberUserIdChatIdCompoundUniqueInput = {
    userId: string
    chatId: string
  }

  export type ChatMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isCreator?: SortOrder
    chatId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ChatMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isCreator?: SortOrder
    chatId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ChatMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isCreator?: SortOrder
    chatId?: SortOrder
    joinedAt?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type ClientKeyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicKeyE?: SortOrder
    publicKeyN?: SortOrder
    sessionKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientKeyAvgOrderByAggregateInput = {
    publicKeyE?: SortOrder
    publicKeyN?: SortOrder
    sessionKey?: SortOrder
  }

  export type ClientKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicKeyE?: SortOrder
    publicKeyN?: SortOrder
    sessionKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientKeyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicKeyE?: SortOrder
    publicKeyN?: SortOrder
    sessionKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientKeySumOrderByAggregateInput = {
    publicKeyE?: SortOrder
    publicKeyN?: SortOrder
    sessionKey?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
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

  export type ServerKeyCountOrderByAggregateInput = {
    id?: SortOrder
    publicKeyE?: SortOrder
    publicKeyN?: SortOrder
    privateKeyD?: SortOrder
    privateKeyP?: SortOrder
    privateKeyQ?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServerKeyAvgOrderByAggregateInput = {
    publicKeyE?: SortOrder
    publicKeyN?: SortOrder
    privateKeyD?: SortOrder
    privateKeyP?: SortOrder
    privateKeyQ?: SortOrder
  }

  export type ServerKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    publicKeyE?: SortOrder
    publicKeyN?: SortOrder
    privateKeyD?: SortOrder
    privateKeyP?: SortOrder
    privateKeyQ?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServerKeyMinOrderByAggregateInput = {
    id?: SortOrder
    publicKeyE?: SortOrder
    publicKeyN?: SortOrder
    privateKeyD?: SortOrder
    privateKeyP?: SortOrder
    privateKeyQ?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServerKeySumOrderByAggregateInput = {
    publicKeyE?: SortOrder
    publicKeyN?: SortOrder
    privateKeyD?: SortOrder
    privateKeyP?: SortOrder
    privateKeyQ?: SortOrder
  }

  export type KeyDiffieCountOrderByAggregateInput = {
    id?: SortOrder
    publicKeyP?: SortOrder
    publicKeyG?: SortOrder
    privateKeyServer?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KeyDiffieAvgOrderByAggregateInput = {
    publicKeyP?: SortOrder
    publicKeyG?: SortOrder
    privateKeyServer?: SortOrder
  }

  export type KeyDiffieMaxOrderByAggregateInput = {
    id?: SortOrder
    publicKeyP?: SortOrder
    publicKeyG?: SortOrder
    privateKeyServer?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KeyDiffieMinOrderByAggregateInput = {
    id?: SortOrder
    publicKeyP?: SortOrder
    publicKeyG?: SortOrder
    privateKeyServer?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KeyDiffieSumOrderByAggregateInput = {
    publicKeyP?: SortOrder
    publicKeyG?: SortOrder
    privateKeyServer?: SortOrder
  }

  export type ChatMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type ClientKeyCreateNestedOneWithoutUserInput = {
    create?: XOR<ClientKeyCreateWithoutUserInput, ClientKeyUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientKeyCreateOrConnectWithoutUserInput
    connect?: ClientKeyWhereUniqueInput
  }

  export type KeyDiffieCreateNestedOneWithoutUserInput = {
    create?: XOR<KeyDiffieCreateWithoutUserInput, KeyDiffieUncheckedCreateWithoutUserInput>
    connectOrCreate?: KeyDiffieCreateOrConnectWithoutUserInput
    connect?: KeyDiffieWhereUniqueInput
  }

  export type FileMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<FileMessageCreateWithoutUserInput, FileMessageUncheckedCreateWithoutUserInput> | FileMessageCreateWithoutUserInput[] | FileMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileMessageCreateOrConnectWithoutUserInput | FileMessageCreateOrConnectWithoutUserInput[]
    createMany?: FileMessageCreateManyUserInputEnvelope
    connect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type ClientKeyUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ClientKeyCreateWithoutUserInput, ClientKeyUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientKeyCreateOrConnectWithoutUserInput
    connect?: ClientKeyWhereUniqueInput
  }

  export type KeyDiffieUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<KeyDiffieCreateWithoutUserInput, KeyDiffieUncheckedCreateWithoutUserInput>
    connectOrCreate?: KeyDiffieCreateOrConnectWithoutUserInput
    connect?: KeyDiffieWhereUniqueInput
  }

  export type FileMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FileMessageCreateWithoutUserInput, FileMessageUncheckedCreateWithoutUserInput> | FileMessageCreateWithoutUserInput[] | FileMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileMessageCreateOrConnectWithoutUserInput | FileMessageCreateOrConnectWithoutUserInput[]
    createMany?: FileMessageCreateManyUserInputEnvelope
    connect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChatMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutUserInput | ChatMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutUserInput | ChatMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutUserInput | ChatMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type ClientKeyUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClientKeyCreateWithoutUserInput, ClientKeyUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientKeyCreateOrConnectWithoutUserInput
    upsert?: ClientKeyUpsertWithoutUserInput
    disconnect?: ClientKeyWhereInput | boolean
    delete?: ClientKeyWhereInput | boolean
    connect?: ClientKeyWhereUniqueInput
    update?: XOR<XOR<ClientKeyUpdateToOneWithWhereWithoutUserInput, ClientKeyUpdateWithoutUserInput>, ClientKeyUncheckedUpdateWithoutUserInput>
  }

  export type KeyDiffieUpdateOneWithoutUserNestedInput = {
    create?: XOR<KeyDiffieCreateWithoutUserInput, KeyDiffieUncheckedCreateWithoutUserInput>
    connectOrCreate?: KeyDiffieCreateOrConnectWithoutUserInput
    upsert?: KeyDiffieUpsertWithoutUserInput
    disconnect?: KeyDiffieWhereInput | boolean
    delete?: KeyDiffieWhereInput | boolean
    connect?: KeyDiffieWhereUniqueInput
    update?: XOR<XOR<KeyDiffieUpdateToOneWithWhereWithoutUserInput, KeyDiffieUpdateWithoutUserInput>, KeyDiffieUncheckedUpdateWithoutUserInput>
  }

  export type FileMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<FileMessageCreateWithoutUserInput, FileMessageUncheckedCreateWithoutUserInput> | FileMessageCreateWithoutUserInput[] | FileMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileMessageCreateOrConnectWithoutUserInput | FileMessageCreateOrConnectWithoutUserInput[]
    upsert?: FileMessageUpsertWithWhereUniqueWithoutUserInput | FileMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FileMessageCreateManyUserInputEnvelope
    set?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    disconnect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    delete?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    connect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    update?: FileMessageUpdateWithWhereUniqueWithoutUserInput | FileMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FileMessageUpdateManyWithWhereWithoutUserInput | FileMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FileMessageScalarWhereInput | FileMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutUserInput | ChatMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutUserInput | ChatMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutUserInput | ChatMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type ClientKeyUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClientKeyCreateWithoutUserInput, ClientKeyUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientKeyCreateOrConnectWithoutUserInput
    upsert?: ClientKeyUpsertWithoutUserInput
    disconnect?: ClientKeyWhereInput | boolean
    delete?: ClientKeyWhereInput | boolean
    connect?: ClientKeyWhereUniqueInput
    update?: XOR<XOR<ClientKeyUpdateToOneWithWhereWithoutUserInput, ClientKeyUpdateWithoutUserInput>, ClientKeyUncheckedUpdateWithoutUserInput>
  }

  export type KeyDiffieUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<KeyDiffieCreateWithoutUserInput, KeyDiffieUncheckedCreateWithoutUserInput>
    connectOrCreate?: KeyDiffieCreateOrConnectWithoutUserInput
    upsert?: KeyDiffieUpsertWithoutUserInput
    disconnect?: KeyDiffieWhereInput | boolean
    delete?: KeyDiffieWhereInput | boolean
    connect?: KeyDiffieWhereUniqueInput
    update?: XOR<XOR<KeyDiffieUpdateToOneWithWhereWithoutUserInput, KeyDiffieUpdateWithoutUserInput>, KeyDiffieUncheckedUpdateWithoutUserInput>
  }

  export type FileMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FileMessageCreateWithoutUserInput, FileMessageUncheckedCreateWithoutUserInput> | FileMessageCreateWithoutUserInput[] | FileMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileMessageCreateOrConnectWithoutUserInput | FileMessageCreateOrConnectWithoutUserInput[]
    upsert?: FileMessageUpsertWithWhereUniqueWithoutUserInput | FileMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FileMessageCreateManyUserInputEnvelope
    set?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    disconnect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    delete?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    connect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    update?: FileMessageUpdateWithWhereUniqueWithoutUserInput | FileMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FileMessageUpdateManyWithWhereWithoutUserInput | FileMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FileMessageScalarWhereInput | FileMessageScalarWhereInput[]
  }

  export type FileMessageCreateNestedManyWithoutChatMessageInput = {
    create?: XOR<FileMessageCreateWithoutChatMessageInput, FileMessageUncheckedCreateWithoutChatMessageInput> | FileMessageCreateWithoutChatMessageInput[] | FileMessageUncheckedCreateWithoutChatMessageInput[]
    connectOrCreate?: FileMessageCreateOrConnectWithoutChatMessageInput | FileMessageCreateOrConnectWithoutChatMessageInput[]
    createMany?: FileMessageCreateManyChatMessageInputEnvelope
    connect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedOneWithoutRepliesInput = {
    create?: XOR<ChatMessageCreateWithoutRepliesInput, ChatMessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRepliesInput
    connect?: ChatMessageWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutReplyToInput = {
    create?: XOR<ChatMessageCreateWithoutReplyToInput, ChatMessageUncheckedCreateWithoutReplyToInput> | ChatMessageCreateWithoutReplyToInput[] | ChatMessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutReplyToInput | ChatMessageCreateOrConnectWithoutReplyToInput[]
    createMany?: ChatMessageCreateManyReplyToInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type FileMessageUncheckedCreateNestedManyWithoutChatMessageInput = {
    create?: XOR<FileMessageCreateWithoutChatMessageInput, FileMessageUncheckedCreateWithoutChatMessageInput> | FileMessageCreateWithoutChatMessageInput[] | FileMessageUncheckedCreateWithoutChatMessageInput[]
    connectOrCreate?: FileMessageCreateOrConnectWithoutChatMessageInput | FileMessageCreateOrConnectWithoutChatMessageInput[]
    createMany?: FileMessageCreateManyChatMessageInputEnvelope
    connect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutReplyToInput = {
    create?: XOR<ChatMessageCreateWithoutReplyToInput, ChatMessageUncheckedCreateWithoutReplyToInput> | ChatMessageCreateWithoutReplyToInput[] | ChatMessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutReplyToInput | ChatMessageCreateOrConnectWithoutReplyToInput[]
    createMany?: ChatMessageCreateManyReplyToInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FileMessageUpdateManyWithoutChatMessageNestedInput = {
    create?: XOR<FileMessageCreateWithoutChatMessageInput, FileMessageUncheckedCreateWithoutChatMessageInput> | FileMessageCreateWithoutChatMessageInput[] | FileMessageUncheckedCreateWithoutChatMessageInput[]
    connectOrCreate?: FileMessageCreateOrConnectWithoutChatMessageInput | FileMessageCreateOrConnectWithoutChatMessageInput[]
    upsert?: FileMessageUpsertWithWhereUniqueWithoutChatMessageInput | FileMessageUpsertWithWhereUniqueWithoutChatMessageInput[]
    createMany?: FileMessageCreateManyChatMessageInputEnvelope
    set?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    disconnect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    delete?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    connect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    update?: FileMessageUpdateWithWhereUniqueWithoutChatMessageInput | FileMessageUpdateWithWhereUniqueWithoutChatMessageInput[]
    updateMany?: FileMessageUpdateManyWithWhereWithoutChatMessageInput | FileMessageUpdateManyWithWhereWithoutChatMessageInput[]
    deleteMany?: FileMessageScalarWhereInput | FileMessageScalarWhereInput[]
  }

  export type ChatMessageUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<ChatMessageCreateWithoutRepliesInput, ChatMessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRepliesInput
    upsert?: ChatMessageUpsertWithoutRepliesInput
    disconnect?: ChatMessageWhereInput | boolean
    delete?: ChatMessageWhereInput | boolean
    connect?: ChatMessageWhereUniqueInput
    update?: XOR<XOR<ChatMessageUpdateToOneWithWhereWithoutRepliesInput, ChatMessageUpdateWithoutRepliesInput>, ChatMessageUncheckedUpdateWithoutRepliesInput>
  }

  export type ChatMessageUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<ChatMessageCreateWithoutReplyToInput, ChatMessageUncheckedCreateWithoutReplyToInput> | ChatMessageCreateWithoutReplyToInput[] | ChatMessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutReplyToInput | ChatMessageCreateOrConnectWithoutReplyToInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutReplyToInput | ChatMessageUpsertWithWhereUniqueWithoutReplyToInput[]
    createMany?: ChatMessageCreateManyReplyToInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutReplyToInput | ChatMessageUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutReplyToInput | ChatMessageUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput = {
    create?: XOR<FileMessageCreateWithoutChatMessageInput, FileMessageUncheckedCreateWithoutChatMessageInput> | FileMessageCreateWithoutChatMessageInput[] | FileMessageUncheckedCreateWithoutChatMessageInput[]
    connectOrCreate?: FileMessageCreateOrConnectWithoutChatMessageInput | FileMessageCreateOrConnectWithoutChatMessageInput[]
    upsert?: FileMessageUpsertWithWhereUniqueWithoutChatMessageInput | FileMessageUpsertWithWhereUniqueWithoutChatMessageInput[]
    createMany?: FileMessageCreateManyChatMessageInputEnvelope
    set?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    disconnect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    delete?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    connect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    update?: FileMessageUpdateWithWhereUniqueWithoutChatMessageInput | FileMessageUpdateWithWhereUniqueWithoutChatMessageInput[]
    updateMany?: FileMessageUpdateManyWithWhereWithoutChatMessageInput | FileMessageUpdateManyWithWhereWithoutChatMessageInput[]
    deleteMany?: FileMessageScalarWhereInput | FileMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<ChatMessageCreateWithoutReplyToInput, ChatMessageUncheckedCreateWithoutReplyToInput> | ChatMessageCreateWithoutReplyToInput[] | ChatMessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutReplyToInput | ChatMessageCreateOrConnectWithoutReplyToInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutReplyToInput | ChatMessageUpsertWithWhereUniqueWithoutReplyToInput[]
    createMany?: ChatMessageCreateManyReplyToInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutReplyToInput | ChatMessageUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutReplyToInput | ChatMessageUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageCreateNestedOneWithoutFilesInput = {
    create?: XOR<ChatMessageCreateWithoutFilesInput, ChatMessageUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutFilesInput
    connect?: ChatMessageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFilesInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutFilesInput = {
    create?: XOR<ChatCreateWithoutFilesInput, ChatUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutFilesInput
    connect?: ChatWhereUniqueInput
  }

  export type ChatMessageUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<ChatMessageCreateWithoutFilesInput, ChatMessageUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutFilesInput
    upsert?: ChatMessageUpsertWithoutFilesInput
    connect?: ChatMessageWhereUniqueInput
    update?: XOR<XOR<ChatMessageUpdateToOneWithWhereWithoutFilesInput, ChatMessageUpdateWithoutFilesInput>, ChatMessageUncheckedUpdateWithoutFilesInput>
  }

  export type UserUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    upsert?: UserUpsertWithoutFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFilesInput, UserUpdateWithoutFilesInput>, UserUncheckedUpdateWithoutFilesInput>
  }

  export type ChatUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<ChatCreateWithoutFilesInput, ChatUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutFilesInput
    upsert?: ChatUpsertWithoutFilesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutFilesInput, ChatUpdateWithoutFilesInput>, ChatUncheckedUpdateWithoutFilesInput>
  }

  export type ChatMessageCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatMessageCreateWithoutChatInput, ChatMessageUncheckedCreateWithoutChatInput> | ChatMessageCreateWithoutChatInput[] | ChatMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatInput | ChatMessageCreateOrConnectWithoutChatInput[]
    createMany?: ChatMessageCreateManyChatInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMemberCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type FileMessageCreateNestedManyWithoutChatInput = {
    create?: XOR<FileMessageCreateWithoutChatInput, FileMessageUncheckedCreateWithoutChatInput> | FileMessageCreateWithoutChatInput[] | FileMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: FileMessageCreateOrConnectWithoutChatInput | FileMessageCreateOrConnectWithoutChatInput[]
    createMany?: FileMessageCreateManyChatInputEnvelope
    connect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
  }

  export type ServerKeyCreateNestedOneWithoutChatInput = {
    create?: XOR<ServerKeyCreateWithoutChatInput, ServerKeyUncheckedCreateWithoutChatInput>
    connectOrCreate?: ServerKeyCreateOrConnectWithoutChatInput
    connect?: ServerKeyWhereUniqueInput
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatMessageCreateWithoutChatInput, ChatMessageUncheckedCreateWithoutChatInput> | ChatMessageCreateWithoutChatInput[] | ChatMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatInput | ChatMessageCreateOrConnectWithoutChatInput[]
    createMany?: ChatMessageCreateManyChatInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMemberUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type FileMessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<FileMessageCreateWithoutChatInput, FileMessageUncheckedCreateWithoutChatInput> | FileMessageCreateWithoutChatInput[] | FileMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: FileMessageCreateOrConnectWithoutChatInput | FileMessageCreateOrConnectWithoutChatInput[]
    createMany?: FileMessageCreateManyChatInputEnvelope
    connect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
  }

  export type ServerKeyUncheckedCreateNestedOneWithoutChatInput = {
    create?: XOR<ServerKeyCreateWithoutChatInput, ServerKeyUncheckedCreateWithoutChatInput>
    connectOrCreate?: ServerKeyCreateOrConnectWithoutChatInput
    connect?: ServerKeyWhereUniqueInput
  }

  export type ChatMessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatInput, ChatMessageUncheckedCreateWithoutChatInput> | ChatMessageCreateWithoutChatInput[] | ChatMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatInput | ChatMessageCreateOrConnectWithoutChatInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatInput | ChatMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatMessageCreateManyChatInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatInput | ChatMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatInput | ChatMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMemberUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutChatInput | ChatMemberUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutChatInput | ChatMemberUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutChatInput | ChatMemberUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type FileMessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<FileMessageCreateWithoutChatInput, FileMessageUncheckedCreateWithoutChatInput> | FileMessageCreateWithoutChatInput[] | FileMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: FileMessageCreateOrConnectWithoutChatInput | FileMessageCreateOrConnectWithoutChatInput[]
    upsert?: FileMessageUpsertWithWhereUniqueWithoutChatInput | FileMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: FileMessageCreateManyChatInputEnvelope
    set?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    disconnect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    delete?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    connect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    update?: FileMessageUpdateWithWhereUniqueWithoutChatInput | FileMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: FileMessageUpdateManyWithWhereWithoutChatInput | FileMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: FileMessageScalarWhereInput | FileMessageScalarWhereInput[]
  }

  export type ServerKeyUpdateOneWithoutChatNestedInput = {
    create?: XOR<ServerKeyCreateWithoutChatInput, ServerKeyUncheckedCreateWithoutChatInput>
    connectOrCreate?: ServerKeyCreateOrConnectWithoutChatInput
    upsert?: ServerKeyUpsertWithoutChatInput
    disconnect?: ServerKeyWhereInput | boolean
    delete?: ServerKeyWhereInput | boolean
    connect?: ServerKeyWhereUniqueInput
    update?: XOR<XOR<ServerKeyUpdateToOneWithWhereWithoutChatInput, ServerKeyUpdateWithoutChatInput>, ServerKeyUncheckedUpdateWithoutChatInput>
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatInput, ChatMessageUncheckedCreateWithoutChatInput> | ChatMessageCreateWithoutChatInput[] | ChatMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatInput | ChatMessageCreateOrConnectWithoutChatInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatInput | ChatMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatMessageCreateManyChatInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatInput | ChatMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatInput | ChatMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMemberUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutChatInput | ChatMemberUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutChatInput | ChatMemberUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutChatInput | ChatMemberUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type FileMessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<FileMessageCreateWithoutChatInput, FileMessageUncheckedCreateWithoutChatInput> | FileMessageCreateWithoutChatInput[] | FileMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: FileMessageCreateOrConnectWithoutChatInput | FileMessageCreateOrConnectWithoutChatInput[]
    upsert?: FileMessageUpsertWithWhereUniqueWithoutChatInput | FileMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: FileMessageCreateManyChatInputEnvelope
    set?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    disconnect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    delete?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    connect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    update?: FileMessageUpdateWithWhereUniqueWithoutChatInput | FileMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: FileMessageUpdateManyWithWhereWithoutChatInput | FileMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: FileMessageScalarWhereInput | FileMessageScalarWhereInput[]
  }

  export type ServerKeyUncheckedUpdateOneWithoutChatNestedInput = {
    create?: XOR<ServerKeyCreateWithoutChatInput, ServerKeyUncheckedCreateWithoutChatInput>
    connectOrCreate?: ServerKeyCreateOrConnectWithoutChatInput
    upsert?: ServerKeyUpsertWithoutChatInput
    disconnect?: ServerKeyWhereInput | boolean
    delete?: ServerKeyWhereInput | boolean
    connect?: ServerKeyWhereUniqueInput
    update?: XOR<XOR<ServerKeyUpdateToOneWithWhereWithoutChatInput, ServerKeyUpdateWithoutChatInput>, ServerKeyUncheckedUpdateWithoutChatInput>
  }

  export type UserCreateNestedOneWithoutChatMembershipsInput = {
    create?: XOR<UserCreateWithoutChatMembershipsInput, UserUncheckedCreateWithoutChatMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutMembersInput = {
    create?: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMembersInput
    connect?: ChatWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutChatMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutChatMembershipsInput, UserUncheckedCreateWithoutChatMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMembershipsInput
    upsert?: UserUpsertWithoutChatMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMembershipsInput, UserUpdateWithoutChatMembershipsInput>, UserUncheckedUpdateWithoutChatMembershipsInput>
  }

  export type ChatUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMembersInput
    upsert?: ChatUpsertWithoutMembersInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMembersInput, ChatUpdateWithoutMembersInput>, ChatUncheckedUpdateWithoutMembersInput>
  }

  export type UserCreateNestedOneWithoutClientKeyInput = {
    create?: XOR<UserCreateWithoutClientKeyInput, UserUncheckedCreateWithoutClientKeyInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientKeyInput
    connect?: UserWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type UserUpdateOneRequiredWithoutClientKeyNestedInput = {
    create?: XOR<UserCreateWithoutClientKeyInput, UserUncheckedCreateWithoutClientKeyInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientKeyInput
    upsert?: UserUpsertWithoutClientKeyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientKeyInput, UserUpdateWithoutClientKeyInput>, UserUncheckedUpdateWithoutClientKeyInput>
  }

  export type ChatCreateNestedOneWithoutServerKeyInput = {
    create?: XOR<ChatCreateWithoutServerKeyInput, ChatUncheckedCreateWithoutServerKeyInput>
    connectOrCreate?: ChatCreateOrConnectWithoutServerKeyInput
    connect?: ChatWhereUniqueInput
  }

  export type ChatUpdateOneRequiredWithoutServerKeyNestedInput = {
    create?: XOR<ChatCreateWithoutServerKeyInput, ChatUncheckedCreateWithoutServerKeyInput>
    connectOrCreate?: ChatCreateOrConnectWithoutServerKeyInput
    upsert?: ChatUpsertWithoutServerKeyInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutServerKeyInput, ChatUpdateWithoutServerKeyInput>, ChatUncheckedUpdateWithoutServerKeyInput>
  }

  export type UserCreateNestedOneWithoutKeyDiffieInput = {
    create?: XOR<UserCreateWithoutKeyDiffieInput, UserUncheckedCreateWithoutKeyDiffieInput>
    connectOrCreate?: UserCreateOrConnectWithoutKeyDiffieInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutKeyDiffieNestedInput = {
    create?: XOR<UserCreateWithoutKeyDiffieInput, UserUncheckedCreateWithoutKeyDiffieInput>
    connectOrCreate?: UserCreateOrConnectWithoutKeyDiffieInput
    upsert?: UserUpsertWithoutKeyDiffieInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKeyDiffieInput, UserUpdateWithoutKeyDiffieInput>, UserUncheckedUpdateWithoutKeyDiffieInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ChatMessageCreateWithoutUserInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replyTo?: ChatMessageCreateNestedOneWithoutRepliesInput
    replies?: ChatMessageCreateNestedManyWithoutReplyToInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutUserInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    replyToId?: string | null
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type ChatMessageCreateOrConnectWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageCreateManyUserInputEnvelope = {
    data: ChatMessageCreateManyUserInput | ChatMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMemberCreateWithoutUserInput = {
    id?: string
    isCreator?: boolean | null
    joinedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMembersInput
  }

  export type ChatMemberUncheckedCreateWithoutUserInput = {
    id?: string
    isCreator?: boolean | null
    chatId: string
    joinedAt?: Date | string
  }

  export type ChatMemberCreateOrConnectWithoutUserInput = {
    where: ChatMemberWhereUniqueInput
    create: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput>
  }

  export type ChatMemberCreateManyUserInputEnvelope = {
    data: ChatMemberCreateManyUserInput | ChatMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClientKeyCreateWithoutUserInput = {
    id?: string
    publicKeyE: bigint | number
    publicKeyN: bigint | number
    sessionKey: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientKeyUncheckedCreateWithoutUserInput = {
    id?: string
    publicKeyE: bigint | number
    publicKeyN: bigint | number
    sessionKey: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientKeyCreateOrConnectWithoutUserInput = {
    where: ClientKeyWhereUniqueInput
    create: XOR<ClientKeyCreateWithoutUserInput, ClientKeyUncheckedCreateWithoutUserInput>
  }

  export type KeyDiffieCreateWithoutUserInput = {
    id?: string
    publicKeyP: bigint | number
    publicKeyG: bigint | number
    privateKeyServer: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeyDiffieUncheckedCreateWithoutUserInput = {
    id?: string
    publicKeyP: bigint | number
    publicKeyG: bigint | number
    privateKeyServer: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeyDiffieCreateOrConnectWithoutUserInput = {
    where: KeyDiffieWhereUniqueInput
    create: XOR<KeyDiffieCreateWithoutUserInput, KeyDiffieUncheckedCreateWithoutUserInput>
  }

  export type FileMessageCreateWithoutUserInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMessage: ChatMessageCreateNestedOneWithoutFilesInput
    chat: ChatCreateNestedOneWithoutFilesInput
  }

  export type FileMessageUncheckedCreateWithoutUserInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    chatMessageId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileMessageCreateOrConnectWithoutUserInput = {
    where: FileMessageWhereUniqueInput
    create: XOR<FileMessageCreateWithoutUserInput, FileMessageUncheckedCreateWithoutUserInput>
  }

  export type FileMessageCreateManyUserInputEnvelope = {
    data: FileMessageCreateManyUserInput | FileMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutUserInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    text?: StringNullableFilter<"ChatMessage"> | string | null
    isStarted?: BoolFilter<"ChatMessage"> | boolean
    isFake?: BoolFilter<"ChatMessage"> | boolean
    isEdited?: BoolFilter<"ChatMessage"> | boolean
    isDeleted?: BoolFilter<"ChatMessage"> | boolean
    replyToId?: StringNullableFilter<"ChatMessage"> | string | null
    userId?: StringFilter<"ChatMessage"> | string
    chatId?: StringFilter<"ChatMessage"> | string
    readCount?: StringNullableFilter<"ChatMessage"> | string | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMemberWhereUniqueInput
    update: XOR<ChatMemberUpdateWithoutUserInput, ChatMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput>
  }

  export type ChatMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMemberWhereUniqueInput
    data: XOR<ChatMemberUpdateWithoutUserInput, ChatMemberUncheckedUpdateWithoutUserInput>
  }

  export type ChatMemberUpdateManyWithWhereWithoutUserInput = {
    where: ChatMemberScalarWhereInput
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMemberScalarWhereInput = {
    AND?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
    OR?: ChatMemberScalarWhereInput[]
    NOT?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
    id?: StringFilter<"ChatMember"> | string
    userId?: StringFilter<"ChatMember"> | string
    isCreator?: BoolNullableFilter<"ChatMember"> | boolean | null
    chatId?: StringFilter<"ChatMember"> | string
    joinedAt?: DateTimeFilter<"ChatMember"> | Date | string
  }

  export type ClientKeyUpsertWithoutUserInput = {
    update: XOR<ClientKeyUpdateWithoutUserInput, ClientKeyUncheckedUpdateWithoutUserInput>
    create: XOR<ClientKeyCreateWithoutUserInput, ClientKeyUncheckedCreateWithoutUserInput>
    where?: ClientKeyWhereInput
  }

  export type ClientKeyUpdateToOneWithWhereWithoutUserInput = {
    where?: ClientKeyWhereInput
    data: XOR<ClientKeyUpdateWithoutUserInput, ClientKeyUncheckedUpdateWithoutUserInput>
  }

  export type ClientKeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKeyE?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyN?: BigIntFieldUpdateOperationsInput | bigint | number
    sessionKey?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientKeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKeyE?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyN?: BigIntFieldUpdateOperationsInput | bigint | number
    sessionKey?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyDiffieUpsertWithoutUserInput = {
    update: XOR<KeyDiffieUpdateWithoutUserInput, KeyDiffieUncheckedUpdateWithoutUserInput>
    create: XOR<KeyDiffieCreateWithoutUserInput, KeyDiffieUncheckedCreateWithoutUserInput>
    where?: KeyDiffieWhereInput
  }

  export type KeyDiffieUpdateToOneWithWhereWithoutUserInput = {
    where?: KeyDiffieWhereInput
    data: XOR<KeyDiffieUpdateWithoutUserInput, KeyDiffieUncheckedUpdateWithoutUserInput>
  }

  export type KeyDiffieUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKeyP?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyG?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyServer?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyDiffieUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKeyP?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyG?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyServer?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: FileMessageWhereUniqueInput
    update: XOR<FileMessageUpdateWithoutUserInput, FileMessageUncheckedUpdateWithoutUserInput>
    create: XOR<FileMessageCreateWithoutUserInput, FileMessageUncheckedCreateWithoutUserInput>
  }

  export type FileMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: FileMessageWhereUniqueInput
    data: XOR<FileMessageUpdateWithoutUserInput, FileMessageUncheckedUpdateWithoutUserInput>
  }

  export type FileMessageUpdateManyWithWhereWithoutUserInput = {
    where: FileMessageScalarWhereInput
    data: XOR<FileMessageUpdateManyMutationInput, FileMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type FileMessageScalarWhereInput = {
    AND?: FileMessageScalarWhereInput | FileMessageScalarWhereInput[]
    OR?: FileMessageScalarWhereInput[]
    NOT?: FileMessageScalarWhereInput | FileMessageScalarWhereInput[]
    id?: StringFilter<"FileMessage"> | string
    fileUrl?: StringFilter<"FileMessage"> | string
    fileName?: StringFilter<"FileMessage"> | string
    fileFullName?: StringFilter<"FileMessage"> | string
    fileSize?: StringFilter<"FileMessage"> | string
    fileFormat?: StringFilter<"FileMessage"> | string
    chatMessageId?: StringFilter<"FileMessage"> | string
    userId?: StringFilter<"FileMessage"> | string
    chatId?: StringFilter<"FileMessage"> | string
    createdAt?: DateTimeFilter<"FileMessage"> | Date | string
    updatedAt?: DateTimeFilter<"FileMessage"> | Date | string
  }

  export type FileMessageCreateWithoutChatMessageInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFilesInput
    chat: ChatCreateNestedOneWithoutFilesInput
  }

  export type FileMessageUncheckedCreateWithoutChatMessageInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    userId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileMessageCreateOrConnectWithoutChatMessageInput = {
    where: FileMessageWhereUniqueInput
    create: XOR<FileMessageCreateWithoutChatMessageInput, FileMessageUncheckedCreateWithoutChatMessageInput>
  }

  export type FileMessageCreateManyChatMessageInputEnvelope = {
    data: FileMessageCreateManyChatMessageInput | FileMessageCreateManyChatMessageInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutRepliesInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replyTo?: ChatMessageCreateNestedOneWithoutRepliesInput
    user: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutRepliesInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    replyToId?: string | null
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
  }

  export type ChatMessageCreateOrConnectWithoutRepliesInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutRepliesInput, ChatMessageUncheckedCreateWithoutRepliesInput>
  }

  export type ChatMessageCreateWithoutReplyToInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageCreateNestedManyWithoutReplyToInput
    user: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutReplyToInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type ChatMessageCreateOrConnectWithoutReplyToInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutReplyToInput, ChatMessageUncheckedCreateWithoutReplyToInput>
  }

  export type ChatMessageCreateManyReplyToInputEnvelope = {
    data: ChatMessageCreateManyReplyToInput | ChatMessageCreateManyReplyToInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    username: string
    email: string
    password: string
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMemberships?: ChatMemberCreateNestedManyWithoutUserInput
    clientKey?: ClientKeyCreateNestedOneWithoutUserInput
    keyDiffie?: KeyDiffieCreateNestedOneWithoutUserInput
    files?: FileMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    username: string
    email: string
    password: string
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMemberships?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    clientKey?: ClientKeyUncheckedCreateNestedOneWithoutUserInput
    keyDiffie?: KeyDiffieUncheckedCreateNestedOneWithoutUserInput
    files?: FileMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatMemberCreateNestedManyWithoutChatInput
    files?: FileMessageCreateNestedManyWithoutChatInput
    serverKey?: ServerKeyCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    files?: FileMessageUncheckedCreateNestedManyWithoutChatInput
    serverKey?: ServerKeyUncheckedCreateNestedOneWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type FileMessageUpsertWithWhereUniqueWithoutChatMessageInput = {
    where: FileMessageWhereUniqueInput
    update: XOR<FileMessageUpdateWithoutChatMessageInput, FileMessageUncheckedUpdateWithoutChatMessageInput>
    create: XOR<FileMessageCreateWithoutChatMessageInput, FileMessageUncheckedCreateWithoutChatMessageInput>
  }

  export type FileMessageUpdateWithWhereUniqueWithoutChatMessageInput = {
    where: FileMessageWhereUniqueInput
    data: XOR<FileMessageUpdateWithoutChatMessageInput, FileMessageUncheckedUpdateWithoutChatMessageInput>
  }

  export type FileMessageUpdateManyWithWhereWithoutChatMessageInput = {
    where: FileMessageScalarWhereInput
    data: XOR<FileMessageUpdateManyMutationInput, FileMessageUncheckedUpdateManyWithoutChatMessageInput>
  }

  export type ChatMessageUpsertWithoutRepliesInput = {
    update: XOR<ChatMessageUpdateWithoutRepliesInput, ChatMessageUncheckedUpdateWithoutRepliesInput>
    create: XOR<ChatMessageCreateWithoutRepliesInput, ChatMessageUncheckedCreateWithoutRepliesInput>
    where?: ChatMessageWhereInput
  }

  export type ChatMessageUpdateToOneWithWhereWithoutRepliesInput = {
    where?: ChatMessageWhereInput
    data: XOR<ChatMessageUpdateWithoutRepliesInput, ChatMessageUncheckedUpdateWithoutRepliesInput>
  }

  export type ChatMessageUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replyTo?: ChatMessageUpdateOneWithoutRepliesNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutReplyToInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutReplyToInput, ChatMessageUncheckedUpdateWithoutReplyToInput>
    create: XOR<ChatMessageCreateWithoutReplyToInput, ChatMessageUncheckedCreateWithoutReplyToInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutReplyToInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutReplyToInput, ChatMessageUncheckedUpdateWithoutReplyToInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutReplyToInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutReplyToInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMemberships?: ChatMemberUpdateManyWithoutUserNestedInput
    clientKey?: ClientKeyUpdateOneWithoutUserNestedInput
    keyDiffie?: KeyDiffieUpdateOneWithoutUserNestedInput
    files?: FileMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMemberships?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    clientKey?: ClientKeyUncheckedUpdateOneWithoutUserNestedInput
    keyDiffie?: KeyDiffieUncheckedUpdateOneWithoutUserNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatMemberUpdateManyWithoutChatNestedInput
    files?: FileMessageUpdateManyWithoutChatNestedInput
    serverKey?: ServerKeyUpdateOneWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutChatNestedInput
    serverKey?: ServerKeyUncheckedUpdateOneWithoutChatNestedInput
  }

  export type ChatMessageCreateWithoutFilesInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replyTo?: ChatMessageCreateNestedOneWithoutRepliesInput
    replies?: ChatMessageCreateNestedManyWithoutReplyToInput
    user: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutFilesInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    replyToId?: string | null
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ChatMessageUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type ChatMessageCreateOrConnectWithoutFilesInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutFilesInput, ChatMessageUncheckedCreateWithoutFilesInput>
  }

  export type UserCreateWithoutFilesInput = {
    id?: string
    username: string
    email: string
    password: string
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberCreateNestedManyWithoutUserInput
    clientKey?: ClientKeyCreateNestedOneWithoutUserInput
    keyDiffie?: KeyDiffieCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFilesInput = {
    id?: string
    username: string
    email: string
    password: string
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    clientKey?: ClientKeyUncheckedCreateNestedOneWithoutUserInput
    keyDiffie?: KeyDiffieUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
  }

  export type ChatCreateWithoutFilesInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
    serverKey?: ServerKeyCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutFilesInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    serverKey?: ServerKeyUncheckedCreateNestedOneWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutFilesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutFilesInput, ChatUncheckedCreateWithoutFilesInput>
  }

  export type ChatMessageUpsertWithoutFilesInput = {
    update: XOR<ChatMessageUpdateWithoutFilesInput, ChatMessageUncheckedUpdateWithoutFilesInput>
    create: XOR<ChatMessageCreateWithoutFilesInput, ChatMessageUncheckedCreateWithoutFilesInput>
    where?: ChatMessageWhereInput
  }

  export type ChatMessageUpdateToOneWithWhereWithoutFilesInput = {
    where?: ChatMessageWhereInput
    data: XOR<ChatMessageUpdateWithoutFilesInput, ChatMessageUncheckedUpdateWithoutFilesInput>
  }

  export type ChatMessageUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyTo?: ChatMessageUpdateOneWithoutRepliesNestedInput
    replies?: ChatMessageUpdateManyWithoutReplyToNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ChatMessageUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type UserUpsertWithoutFilesInput = {
    update: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
  }

  export type UserUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUpdateManyWithoutUserNestedInput
    clientKey?: ClientKeyUpdateOneWithoutUserNestedInput
    keyDiffie?: KeyDiffieUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    clientKey?: ClientKeyUncheckedUpdateOneWithoutUserNestedInput
    keyDiffie?: KeyDiffieUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ChatUpsertWithoutFilesInput = {
    update: XOR<ChatUpdateWithoutFilesInput, ChatUncheckedUpdateWithoutFilesInput>
    create: XOR<ChatCreateWithoutFilesInput, ChatUncheckedCreateWithoutFilesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutFilesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutFilesInput, ChatUncheckedUpdateWithoutFilesInput>
  }

  export type ChatUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
    serverKey?: ServerKeyUpdateOneWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    serverKey?: ServerKeyUncheckedUpdateOneWithoutChatNestedInput
  }

  export type ChatMessageCreateWithoutChatInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replyTo?: ChatMessageCreateNestedOneWithoutRepliesInput
    replies?: ChatMessageCreateNestedManyWithoutReplyToInput
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutChatInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    replyToId?: string | null
    userId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type ChatMessageCreateOrConnectWithoutChatInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutChatInput, ChatMessageUncheckedCreateWithoutChatInput>
  }

  export type ChatMessageCreateManyChatInputEnvelope = {
    data: ChatMessageCreateManyChatInput | ChatMessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type ChatMemberCreateWithoutChatInput = {
    id?: string
    isCreator?: boolean | null
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutChatMembershipsInput
  }

  export type ChatMemberUncheckedCreateWithoutChatInput = {
    id?: string
    userId: string
    isCreator?: boolean | null
    joinedAt?: Date | string
  }

  export type ChatMemberCreateOrConnectWithoutChatInput = {
    where: ChatMemberWhereUniqueInput
    create: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput>
  }

  export type ChatMemberCreateManyChatInputEnvelope = {
    data: ChatMemberCreateManyChatInput | ChatMemberCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type FileMessageCreateWithoutChatInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMessage: ChatMessageCreateNestedOneWithoutFilesInput
    user: UserCreateNestedOneWithoutFilesInput
  }

  export type FileMessageUncheckedCreateWithoutChatInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    chatMessageId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileMessageCreateOrConnectWithoutChatInput = {
    where: FileMessageWhereUniqueInput
    create: XOR<FileMessageCreateWithoutChatInput, FileMessageUncheckedCreateWithoutChatInput>
  }

  export type FileMessageCreateManyChatInputEnvelope = {
    data: FileMessageCreateManyChatInput | FileMessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type ServerKeyCreateWithoutChatInput = {
    id?: string
    publicKeyE: bigint | number
    publicKeyN: bigint | number
    privateKeyD: bigint | number
    privateKeyP: bigint | number
    privateKeyQ: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServerKeyUncheckedCreateWithoutChatInput = {
    id?: string
    publicKeyE: bigint | number
    publicKeyN: bigint | number
    privateKeyD: bigint | number
    privateKeyP: bigint | number
    privateKeyQ: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServerKeyCreateOrConnectWithoutChatInput = {
    where: ServerKeyWhereUniqueInput
    create: XOR<ServerKeyCreateWithoutChatInput, ServerKeyUncheckedCreateWithoutChatInput>
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutChatInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutChatInput, ChatMessageUncheckedUpdateWithoutChatInput>
    create: XOR<ChatMessageCreateWithoutChatInput, ChatMessageUncheckedCreateWithoutChatInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutChatInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutChatInput, ChatMessageUncheckedUpdateWithoutChatInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutChatInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatMemberUpsertWithWhereUniqueWithoutChatInput = {
    where: ChatMemberWhereUniqueInput
    update: XOR<ChatMemberUpdateWithoutChatInput, ChatMemberUncheckedUpdateWithoutChatInput>
    create: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput>
  }

  export type ChatMemberUpdateWithWhereUniqueWithoutChatInput = {
    where: ChatMemberWhereUniqueInput
    data: XOR<ChatMemberUpdateWithoutChatInput, ChatMemberUncheckedUpdateWithoutChatInput>
  }

  export type ChatMemberUpdateManyWithWhereWithoutChatInput = {
    where: ChatMemberScalarWhereInput
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyWithoutChatInput>
  }

  export type FileMessageUpsertWithWhereUniqueWithoutChatInput = {
    where: FileMessageWhereUniqueInput
    update: XOR<FileMessageUpdateWithoutChatInput, FileMessageUncheckedUpdateWithoutChatInput>
    create: XOR<FileMessageCreateWithoutChatInput, FileMessageUncheckedCreateWithoutChatInput>
  }

  export type FileMessageUpdateWithWhereUniqueWithoutChatInput = {
    where: FileMessageWhereUniqueInput
    data: XOR<FileMessageUpdateWithoutChatInput, FileMessageUncheckedUpdateWithoutChatInput>
  }

  export type FileMessageUpdateManyWithWhereWithoutChatInput = {
    where: FileMessageScalarWhereInput
    data: XOR<FileMessageUpdateManyMutationInput, FileMessageUncheckedUpdateManyWithoutChatInput>
  }

  export type ServerKeyUpsertWithoutChatInput = {
    update: XOR<ServerKeyUpdateWithoutChatInput, ServerKeyUncheckedUpdateWithoutChatInput>
    create: XOR<ServerKeyCreateWithoutChatInput, ServerKeyUncheckedCreateWithoutChatInput>
    where?: ServerKeyWhereInput
  }

  export type ServerKeyUpdateToOneWithWhereWithoutChatInput = {
    where?: ServerKeyWhereInput
    data: XOR<ServerKeyUpdateWithoutChatInput, ServerKeyUncheckedUpdateWithoutChatInput>
  }

  export type ServerKeyUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKeyE?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyN?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyD?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyP?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyQ?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerKeyUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKeyE?: BigIntFieldUpdateOperationsInput | bigint | number
    publicKeyN?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyD?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyP?: BigIntFieldUpdateOperationsInput | bigint | number
    privateKeyQ?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutChatMembershipsInput = {
    id?: string
    username: string
    email: string
    password: string
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutUserInput
    clientKey?: ClientKeyCreateNestedOneWithoutUserInput
    keyDiffie?: KeyDiffieCreateNestedOneWithoutUserInput
    files?: FileMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatMembershipsInput = {
    id?: string
    username: string
    email: string
    password: string
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    clientKey?: ClientKeyUncheckedCreateNestedOneWithoutUserInput
    keyDiffie?: KeyDiffieUncheckedCreateNestedOneWithoutUserInput
    files?: FileMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMembershipsInput, UserUncheckedCreateWithoutChatMembershipsInput>
  }

  export type ChatCreateWithoutMembersInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutChatInput
    files?: FileMessageCreateNestedManyWithoutChatInput
    serverKey?: ServerKeyCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMembersInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
    files?: FileMessageUncheckedCreateNestedManyWithoutChatInput
    serverKey?: ServerKeyUncheckedCreateNestedOneWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutMembersInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutChatMembershipsInput = {
    update: XOR<UserUpdateWithoutChatMembershipsInput, UserUncheckedUpdateWithoutChatMembershipsInput>
    create: XOR<UserCreateWithoutChatMembershipsInput, UserUncheckedCreateWithoutChatMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMembershipsInput, UserUncheckedUpdateWithoutChatMembershipsInput>
  }

  export type UserUpdateWithoutChatMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutUserNestedInput
    clientKey?: ClientKeyUpdateOneWithoutUserNestedInput
    keyDiffie?: KeyDiffieUpdateOneWithoutUserNestedInput
    files?: FileMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    clientKey?: ClientKeyUncheckedUpdateOneWithoutUserNestedInput
    keyDiffie?: KeyDiffieUncheckedUpdateOneWithoutUserNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatUpsertWithoutMembersInput = {
    update: XOR<ChatUpdateWithoutMembersInput, ChatUncheckedUpdateWithoutMembersInput>
    create: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMembersInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMembersInput, ChatUncheckedUpdateWithoutMembersInput>
  }

  export type ChatUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
    files?: FileMessageUpdateManyWithoutChatNestedInput
    serverKey?: ServerKeyUpdateOneWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutChatNestedInput
    serverKey?: ServerKeyUncheckedUpdateOneWithoutChatNestedInput
  }

  export type UserCreateWithoutClientKeyInput = {
    id?: string
    username: string
    email: string
    password: string
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberCreateNestedManyWithoutUserInput
    keyDiffie?: KeyDiffieCreateNestedOneWithoutUserInput
    files?: FileMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClientKeyInput = {
    id?: string
    username: string
    email: string
    password: string
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    keyDiffie?: KeyDiffieUncheckedCreateNestedOneWithoutUserInput
    files?: FileMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClientKeyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientKeyInput, UserUncheckedCreateWithoutClientKeyInput>
  }

  export type UserUpsertWithoutClientKeyInput = {
    update: XOR<UserUpdateWithoutClientKeyInput, UserUncheckedUpdateWithoutClientKeyInput>
    create: XOR<UserCreateWithoutClientKeyInput, UserUncheckedCreateWithoutClientKeyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientKeyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientKeyInput, UserUncheckedUpdateWithoutClientKeyInput>
  }

  export type UserUpdateWithoutClientKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUpdateManyWithoutUserNestedInput
    keyDiffie?: KeyDiffieUpdateOneWithoutUserNestedInput
    files?: FileMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClientKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    keyDiffie?: KeyDiffieUncheckedUpdateOneWithoutUserNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatCreateWithoutServerKeyInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
    files?: FileMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutServerKeyInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    files?: FileMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutServerKeyInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutServerKeyInput, ChatUncheckedCreateWithoutServerKeyInput>
  }

  export type ChatUpsertWithoutServerKeyInput = {
    update: XOR<ChatUpdateWithoutServerKeyInput, ChatUncheckedUpdateWithoutServerKeyInput>
    create: XOR<ChatCreateWithoutServerKeyInput, ChatUncheckedCreateWithoutServerKeyInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutServerKeyInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutServerKeyInput, ChatUncheckedUpdateWithoutServerKeyInput>
  }

  export type ChatUpdateWithoutServerKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
    files?: FileMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutServerKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserCreateWithoutKeyDiffieInput = {
    id?: string
    username: string
    email: string
    password: string
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberCreateNestedManyWithoutUserInput
    clientKey?: ClientKeyCreateNestedOneWithoutUserInput
    files?: FileMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutKeyDiffieInput = {
    id?: string
    username: string
    email: string
    password: string
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    clientKey?: ClientKeyUncheckedCreateNestedOneWithoutUserInput
    files?: FileMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutKeyDiffieInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKeyDiffieInput, UserUncheckedCreateWithoutKeyDiffieInput>
  }

  export type UserUpsertWithoutKeyDiffieInput = {
    update: XOR<UserUpdateWithoutKeyDiffieInput, UserUncheckedUpdateWithoutKeyDiffieInput>
    create: XOR<UserCreateWithoutKeyDiffieInput, UserUncheckedCreateWithoutKeyDiffieInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKeyDiffieInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKeyDiffieInput, UserUncheckedUpdateWithoutKeyDiffieInput>
  }

  export type UserUpdateWithoutKeyDiffieInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUpdateManyWithoutUserNestedInput
    clientKey?: ClientKeyUpdateOneWithoutUserNestedInput
    files?: FileMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutKeyDiffieInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    clientKey?: ClientKeyUncheckedUpdateOneWithoutUserNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatMessageCreateManyUserInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    replyToId?: string | null
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMemberCreateManyUserInput = {
    id?: string
    isCreator?: boolean | null
    chatId: string
    joinedAt?: Date | string
  }

  export type FileMessageCreateManyUserInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    chatMessageId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replyTo?: ChatMessageUpdateOneWithoutRepliesNestedInput
    replies?: ChatMessageUpdateManyWithoutReplyToNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ChatMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    chatId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    chatId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessage?: ChatMessageUpdateOneRequiredWithoutFilesNestedInput
    chat?: ChatUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    chatMessageId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    chatMessageId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileMessageCreateManyChatMessageInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    userId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateManyReplyToInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileMessageUpdateWithoutChatMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
    chat?: ChatUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileMessageUncheckedUpdateWithoutChatMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileMessageUncheckedUpdateManyWithoutChatMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageUpdateManyWithoutReplyToNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type ChatMessageUncheckedUpdateManyWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyChatInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isFake?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    replyToId?: string | null
    userId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMemberCreateManyChatInput = {
    id?: string
    userId: string
    isCreator?: boolean | null
    joinedAt?: Date | string
  }

  export type FileMessageCreateManyChatInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    chatMessageId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replyTo?: ChatMessageUpdateOneWithoutRepliesNestedInput
    replies?: ChatMessageUpdateManyWithoutReplyToNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFake?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatMembershipsNestedInput
  }

  export type ChatMemberUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileMessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessage?: ChatMessageUpdateOneRequiredWithoutFilesNestedInput
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileMessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    chatMessageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileMessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    chatMessageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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