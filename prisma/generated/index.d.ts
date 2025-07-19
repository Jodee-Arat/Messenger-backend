
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
 * Model ChatMessageReply
 * 
 */
export type ChatMessageReply = $Result.DefaultSelection<Prisma.$ChatMessageReplyPayload>
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
   * `prisma.chatMessageReply`: Exposes CRUD operations for the **ChatMessageReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessageReplies
    * const chatMessageReplies = await prisma.chatMessageReply.findMany()
    * ```
    */
  get chatMessageReply(): Prisma.ChatMessageReplyDelegate<ExtArgs, ClientOptions>;

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
    ChatMessageReply: 'ChatMessageReply',
    FileMessage: 'FileMessage',
    Chat: 'Chat',
    ChatMember: 'ChatMember'
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
      modelProps: "user" | "chatMessage" | "chatMessageReply" | "fileMessage" | "chat" | "chatMember"
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
      ChatMessageReply: {
        payload: Prisma.$ChatMessageReplyPayload<ExtArgs>
        fields: Prisma.ChatMessageReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageReplyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessageReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageReplyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessageReplyPayload>
          }
          findFirst: {
            args: Prisma.ChatMessageReplyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessageReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageReplyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessageReplyPayload>
          }
          findMany: {
            args: Prisma.ChatMessageReplyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessageReplyPayload>[]
          }
          create: {
            args: Prisma.ChatMessageReplyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessageReplyPayload>
          }
          createMany: {
            args: Prisma.ChatMessageReplyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageReplyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessageReplyPayload>[]
          }
          delete: {
            args: Prisma.ChatMessageReplyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessageReplyPayload>
          }
          update: {
            args: Prisma.ChatMessageReplyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessageReplyPayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageReplyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageReplyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageReplyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessageReplyPayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageReplyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessageReplyPayload>
          }
          aggregate: {
            args: Prisma.ChatMessageReplyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessageReply>
          }
          groupBy: {
            args: Prisma.ChatMessageReplyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageReplyCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageReplyCountAggregateOutputType> | number
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
    chatMessageReply?: ChatMessageReplyOmit
    fileMessage?: FileMessageOmit
    chat?: ChatOmit
    chatMember?: ChatMemberOmit
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
    repliedToLinks: number
  }

  export type ChatMessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | ChatMessageCountOutputTypeCountFilesArgs
    replies?: boolean | ChatMessageCountOutputTypeCountRepliesArgs
    repliedToLinks?: boolean | ChatMessageCountOutputTypeCountRepliedToLinksArgs
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
    where?: ChatMessageReplyWhereInput
  }

  /**
   * ChatMessageCountOutputType without action
   */
  export type ChatMessageCountOutputTypeCountRepliedToLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageReplyWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    draftMessages: number
    messages: number
    members: number
    files: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draftMessages?: boolean | ChatCountOutputTypeCountDraftMessagesArgs
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
  export type ChatCountOutputTypeCountDraftMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
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
    isEdited: boolean | null
    isDeleted: boolean | null
    isForwarded: boolean | null
    isReply: boolean | null
    isDraft: boolean | null
    draftOfChatId: string | null
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
    isEdited: boolean | null
    isDeleted: boolean | null
    isForwarded: boolean | null
    isReply: boolean | null
    isDraft: boolean | null
    draftOfChatId: string | null
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
    isEdited: number
    isDeleted: number
    isForwarded: number
    isReply: number
    isDraft: number
    draftOfChatId: number
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
    isEdited?: true
    isDeleted?: true
    isForwarded?: true
    isReply?: true
    isDraft?: true
    draftOfChatId?: true
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
    isEdited?: true
    isDeleted?: true
    isForwarded?: true
    isReply?: true
    isDraft?: true
    draftOfChatId?: true
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
    isEdited?: true
    isDeleted?: true
    isForwarded?: true
    isReply?: true
    isDraft?: true
    draftOfChatId?: true
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
    isEdited: boolean
    isDeleted: boolean
    isForwarded: boolean
    isReply: boolean
    isDraft: boolean
    draftOfChatId: string | null
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
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    draftOfChatId?: boolean
    userId?: boolean
    chatId?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    files?: boolean | ChatMessage$filesArgs<ExtArgs>
    replies?: boolean | ChatMessage$repliesArgs<ExtArgs>
    repliedToLinks?: boolean | ChatMessage$repliedToLinksArgs<ExtArgs>
    lastMessageForChat?: boolean | ChatMessage$lastMessageForChatArgs<ExtArgs>
    draftOfChat?: boolean | ChatMessage$draftOfChatArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    _count?: boolean | ChatMessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    draftOfChatId?: boolean
    userId?: boolean
    chatId?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    draftOfChat?: boolean | ChatMessage$draftOfChatArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    draftOfChatId?: boolean
    userId?: boolean
    chatId?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    draftOfChat?: boolean | ChatMessage$draftOfChatArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    text?: boolean
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    draftOfChatId?: boolean
    userId?: boolean
    chatId?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "isStarted" | "isEdited" | "isDeleted" | "isForwarded" | "isReply" | "isDraft" | "draftOfChatId" | "userId" | "chatId" | "readCount" | "createdAt" | "updatedAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | ChatMessage$filesArgs<ExtArgs>
    replies?: boolean | ChatMessage$repliesArgs<ExtArgs>
    repliedToLinks?: boolean | ChatMessage$repliedToLinksArgs<ExtArgs>
    lastMessageForChat?: boolean | ChatMessage$lastMessageForChatArgs<ExtArgs>
    draftOfChat?: boolean | ChatMessage$draftOfChatArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    _count?: boolean | ChatMessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draftOfChat?: boolean | ChatMessage$draftOfChatArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draftOfChat?: boolean | ChatMessage$draftOfChatArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      files: Prisma.$FileMessagePayload<ExtArgs>[]
      replies: Prisma.$ChatMessageReplyPayload<ExtArgs>[]
      repliedToLinks: Prisma.$ChatMessageReplyPayload<ExtArgs>[]
      lastMessageForChat: Prisma.$ChatPayload<ExtArgs> | null
      draftOfChat: Prisma.$ChatPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string | null
      isStarted: boolean
      isEdited: boolean
      isDeleted: boolean
      isForwarded: boolean
      isReply: boolean
      isDraft: boolean
      draftOfChatId: string | null
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
    replies<T extends ChatMessage$repliesArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessageReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repliedToLinks<T extends ChatMessage$repliedToLinksArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$repliedToLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessageReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lastMessageForChat<T extends ChatMessage$lastMessageForChatArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$lastMessageForChatArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    draftOfChat<T extends ChatMessage$draftOfChatArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$draftOfChatArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly isEdited: FieldRef<"ChatMessage", 'Boolean'>
    readonly isDeleted: FieldRef<"ChatMessage", 'Boolean'>
    readonly isForwarded: FieldRef<"ChatMessage", 'Boolean'>
    readonly isReply: FieldRef<"ChatMessage", 'Boolean'>
    readonly isDraft: FieldRef<"ChatMessage", 'Boolean'>
    readonly draftOfChatId: FieldRef<"ChatMessage", 'String'>
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
   * ChatMessage.replies
   */
  export type ChatMessage$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessageReply
     */
    select?: ChatMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessageReply
     */
    omit?: ChatMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageReplyInclude<ExtArgs> | null
    where?: ChatMessageReplyWhereInput
    orderBy?: ChatMessageReplyOrderByWithRelationInput | ChatMessageReplyOrderByWithRelationInput[]
    cursor?: ChatMessageReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageReplyScalarFieldEnum | ChatMessageReplyScalarFieldEnum[]
  }

  /**
   * ChatMessage.repliedToLinks
   */
  export type ChatMessage$repliedToLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessageReply
     */
    select?: ChatMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessageReply
     */
    omit?: ChatMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageReplyInclude<ExtArgs> | null
    where?: ChatMessageReplyWhereInput
    orderBy?: ChatMessageReplyOrderByWithRelationInput | ChatMessageReplyOrderByWithRelationInput[]
    cursor?: ChatMessageReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageReplyScalarFieldEnum | ChatMessageReplyScalarFieldEnum[]
  }

  /**
   * ChatMessage.lastMessageForChat
   */
  export type ChatMessage$lastMessageForChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: ChatWhereInput
  }

  /**
   * ChatMessage.draftOfChat
   */
  export type ChatMessage$draftOfChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: ChatWhereInput
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
   * Model ChatMessageReply
   */

  export type AggregateChatMessageReply = {
    _count: ChatMessageReplyCountAggregateOutputType | null
    _min: ChatMessageReplyMinAggregateOutputType | null
    _max: ChatMessageReplyMaxAggregateOutputType | null
  }

  export type ChatMessageReplyMinAggregateOutputType = {
    id: string | null
    replyId: string | null
    repliedToId: string | null
  }

  export type ChatMessageReplyMaxAggregateOutputType = {
    id: string | null
    replyId: string | null
    repliedToId: string | null
  }

  export type ChatMessageReplyCountAggregateOutputType = {
    id: number
    replyId: number
    repliedToId: number
    _all: number
  }


  export type ChatMessageReplyMinAggregateInputType = {
    id?: true
    replyId?: true
    repliedToId?: true
  }

  export type ChatMessageReplyMaxAggregateInputType = {
    id?: true
    replyId?: true
    repliedToId?: true
  }

  export type ChatMessageReplyCountAggregateInputType = {
    id?: true
    replyId?: true
    repliedToId?: true
    _all?: true
  }

  export type ChatMessageReplyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessageReply to aggregate.
     */
    where?: ChatMessageReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessageReplies to fetch.
     */
    orderBy?: ChatMessageReplyOrderByWithRelationInput | ChatMessageReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessageReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessageReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessageReplies
    **/
    _count?: true | ChatMessageReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageReplyMaxAggregateInputType
  }

  export type GetChatMessageReplyAggregateType<T extends ChatMessageReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessageReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessageReply[P]>
      : GetScalarType<T[P], AggregateChatMessageReply[P]>
  }




  export type ChatMessageReplyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageReplyWhereInput
    orderBy?: ChatMessageReplyOrderByWithAggregationInput | ChatMessageReplyOrderByWithAggregationInput[]
    by: ChatMessageReplyScalarFieldEnum[] | ChatMessageReplyScalarFieldEnum
    having?: ChatMessageReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageReplyCountAggregateInputType | true
    _min?: ChatMessageReplyMinAggregateInputType
    _max?: ChatMessageReplyMaxAggregateInputType
  }

  export type ChatMessageReplyGroupByOutputType = {
    id: string
    replyId: string
    repliedToId: string
    _count: ChatMessageReplyCountAggregateOutputType | null
    _min: ChatMessageReplyMinAggregateOutputType | null
    _max: ChatMessageReplyMaxAggregateOutputType | null
  }

  type GetChatMessageReplyGroupByPayload<T extends ChatMessageReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageReplyGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageReplyGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageReplySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    replyId?: boolean
    repliedToId?: boolean
    reply?: boolean | ChatMessageDefaultArgs<ExtArgs>
    repliedTo?: boolean | ChatMessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessageReply"]>

  export type ChatMessageReplySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    replyId?: boolean
    repliedToId?: boolean
    reply?: boolean | ChatMessageDefaultArgs<ExtArgs>
    repliedTo?: boolean | ChatMessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessageReply"]>

  export type ChatMessageReplySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    replyId?: boolean
    repliedToId?: boolean
    reply?: boolean | ChatMessageDefaultArgs<ExtArgs>
    repliedTo?: boolean | ChatMessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessageReply"]>

  export type ChatMessageReplySelectScalar = {
    id?: boolean
    replyId?: boolean
    repliedToId?: boolean
  }

  export type ChatMessageReplyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "replyId" | "repliedToId", ExtArgs["result"]["chatMessageReply"]>
  export type ChatMessageReplyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reply?: boolean | ChatMessageDefaultArgs<ExtArgs>
    repliedTo?: boolean | ChatMessageDefaultArgs<ExtArgs>
  }
  export type ChatMessageReplyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reply?: boolean | ChatMessageDefaultArgs<ExtArgs>
    repliedTo?: boolean | ChatMessageDefaultArgs<ExtArgs>
  }
  export type ChatMessageReplyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reply?: boolean | ChatMessageDefaultArgs<ExtArgs>
    repliedTo?: boolean | ChatMessageDefaultArgs<ExtArgs>
  }

  export type $ChatMessageReplyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessageReply"
    objects: {
      reply: Prisma.$ChatMessagePayload<ExtArgs>
      repliedTo: Prisma.$ChatMessagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      replyId: string
      repliedToId: string
    }, ExtArgs["result"]["chatMessageReply"]>
    composites: {}
  }

  type ChatMessageReplyGetPayload<S extends boolean | null | undefined | ChatMessageReplyDefaultArgs> = $Result.GetResult<Prisma.$ChatMessageReplyPayload, S>

  type ChatMessageReplyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageReplyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageReplyCountAggregateInputType | true
    }

  export interface ChatMessageReplyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessageReply'], meta: { name: 'ChatMessageReply' } }
    /**
     * Find zero or one ChatMessageReply that matches the filter.
     * @param {ChatMessageReplyFindUniqueArgs} args - Arguments to find a ChatMessageReply
     * @example
     * // Get one ChatMessageReply
     * const chatMessageReply = await prisma.chatMessageReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageReplyFindUniqueArgs>(args: SelectSubset<T, ChatMessageReplyFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageReplyClient<$Result.GetResult<Prisma.$ChatMessageReplyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessageReply that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageReplyFindUniqueOrThrowArgs} args - Arguments to find a ChatMessageReply
     * @example
     * // Get one ChatMessageReply
     * const chatMessageReply = await prisma.chatMessageReply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageReplyFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageReplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageReplyClient<$Result.GetResult<Prisma.$ChatMessageReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessageReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageReplyFindFirstArgs} args - Arguments to find a ChatMessageReply
     * @example
     * // Get one ChatMessageReply
     * const chatMessageReply = await prisma.chatMessageReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageReplyFindFirstArgs>(args?: SelectSubset<T, ChatMessageReplyFindFirstArgs<ExtArgs>>): Prisma__ChatMessageReplyClient<$Result.GetResult<Prisma.$ChatMessageReplyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessageReply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageReplyFindFirstOrThrowArgs} args - Arguments to find a ChatMessageReply
     * @example
     * // Get one ChatMessageReply
     * const chatMessageReply = await prisma.chatMessageReply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageReplyFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageReplyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageReplyClient<$Result.GetResult<Prisma.$ChatMessageReplyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessageReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageReplyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessageReplies
     * const chatMessageReplies = await prisma.chatMessageReply.findMany()
     * 
     * // Get first 10 ChatMessageReplies
     * const chatMessageReplies = await prisma.chatMessageReply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageReplyWithIdOnly = await prisma.chatMessageReply.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageReplyFindManyArgs>(args?: SelectSubset<T, ChatMessageReplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessageReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessageReply.
     * @param {ChatMessageReplyCreateArgs} args - Arguments to create a ChatMessageReply.
     * @example
     * // Create one ChatMessageReply
     * const ChatMessageReply = await prisma.chatMessageReply.create({
     *   data: {
     *     // ... data to create a ChatMessageReply
     *   }
     * })
     * 
     */
    create<T extends ChatMessageReplyCreateArgs>(args: SelectSubset<T, ChatMessageReplyCreateArgs<ExtArgs>>): Prisma__ChatMessageReplyClient<$Result.GetResult<Prisma.$ChatMessageReplyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessageReplies.
     * @param {ChatMessageReplyCreateManyArgs} args - Arguments to create many ChatMessageReplies.
     * @example
     * // Create many ChatMessageReplies
     * const chatMessageReply = await prisma.chatMessageReply.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageReplyCreateManyArgs>(args?: SelectSubset<T, ChatMessageReplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessageReplies and returns the data saved in the database.
     * @param {ChatMessageReplyCreateManyAndReturnArgs} args - Arguments to create many ChatMessageReplies.
     * @example
     * // Create many ChatMessageReplies
     * const chatMessageReply = await prisma.chatMessageReply.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessageReplies and only return the `id`
     * const chatMessageReplyWithIdOnly = await prisma.chatMessageReply.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageReplyCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageReplyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessageReplyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessageReply.
     * @param {ChatMessageReplyDeleteArgs} args - Arguments to delete one ChatMessageReply.
     * @example
     * // Delete one ChatMessageReply
     * const ChatMessageReply = await prisma.chatMessageReply.delete({
     *   where: {
     *     // ... filter to delete one ChatMessageReply
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageReplyDeleteArgs>(args: SelectSubset<T, ChatMessageReplyDeleteArgs<ExtArgs>>): Prisma__ChatMessageReplyClient<$Result.GetResult<Prisma.$ChatMessageReplyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessageReply.
     * @param {ChatMessageReplyUpdateArgs} args - Arguments to update one ChatMessageReply.
     * @example
     * // Update one ChatMessageReply
     * const chatMessageReply = await prisma.chatMessageReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageReplyUpdateArgs>(args: SelectSubset<T, ChatMessageReplyUpdateArgs<ExtArgs>>): Prisma__ChatMessageReplyClient<$Result.GetResult<Prisma.$ChatMessageReplyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessageReplies.
     * @param {ChatMessageReplyDeleteManyArgs} args - Arguments to filter ChatMessageReplies to delete.
     * @example
     * // Delete a few ChatMessageReplies
     * const { count } = await prisma.chatMessageReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageReplyDeleteManyArgs>(args?: SelectSubset<T, ChatMessageReplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessageReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessageReplies
     * const chatMessageReply = await prisma.chatMessageReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageReplyUpdateManyArgs>(args: SelectSubset<T, ChatMessageReplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessageReplies and returns the data updated in the database.
     * @param {ChatMessageReplyUpdateManyAndReturnArgs} args - Arguments to update many ChatMessageReplies.
     * @example
     * // Update many ChatMessageReplies
     * const chatMessageReply = await prisma.chatMessageReply.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessageReplies and only return the `id`
     * const chatMessageReplyWithIdOnly = await prisma.chatMessageReply.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatMessageReplyUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageReplyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessageReplyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessageReply.
     * @param {ChatMessageReplyUpsertArgs} args - Arguments to update or create a ChatMessageReply.
     * @example
     * // Update or create a ChatMessageReply
     * const chatMessageReply = await prisma.chatMessageReply.upsert({
     *   create: {
     *     // ... data to create a ChatMessageReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessageReply we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageReplyUpsertArgs>(args: SelectSubset<T, ChatMessageReplyUpsertArgs<ExtArgs>>): Prisma__ChatMessageReplyClient<$Result.GetResult<Prisma.$ChatMessageReplyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessageReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageReplyCountArgs} args - Arguments to filter ChatMessageReplies to count.
     * @example
     * // Count the number of ChatMessageReplies
     * const count = await prisma.chatMessageReply.count({
     *   where: {
     *     // ... the filter for the ChatMessageReplies we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageReplyCountArgs>(
      args?: Subset<T, ChatMessageReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessageReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageReplyAggregateArgs>(args: Subset<T, ChatMessageReplyAggregateArgs>): Prisma.PrismaPromise<GetChatMessageReplyAggregateType<T>>

    /**
     * Group by ChatMessageReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageReplyGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageReplyGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageReplyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessageReply model
   */
  readonly fields: ChatMessageReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessageReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageReplyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reply<T extends ChatMessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessageDefaultArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repliedTo<T extends ChatMessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessageDefaultArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMessageReply model
   */
  interface ChatMessageReplyFieldRefs {
    readonly id: FieldRef<"ChatMessageReply", 'String'>
    readonly replyId: FieldRef<"ChatMessageReply", 'String'>
    readonly repliedToId: FieldRef<"ChatMessageReply", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessageReply findUnique
   */
  export type ChatMessageReplyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessageReply
     */
    select?: ChatMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessageReply
     */
    omit?: ChatMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessageReply to fetch.
     */
    where: ChatMessageReplyWhereUniqueInput
  }

  /**
   * ChatMessageReply findUniqueOrThrow
   */
  export type ChatMessageReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessageReply
     */
    select?: ChatMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessageReply
     */
    omit?: ChatMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessageReply to fetch.
     */
    where: ChatMessageReplyWhereUniqueInput
  }

  /**
   * ChatMessageReply findFirst
   */
  export type ChatMessageReplyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessageReply
     */
    select?: ChatMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessageReply
     */
    omit?: ChatMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessageReply to fetch.
     */
    where?: ChatMessageReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessageReplies to fetch.
     */
    orderBy?: ChatMessageReplyOrderByWithRelationInput | ChatMessageReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessageReplies.
     */
    cursor?: ChatMessageReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessageReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessageReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessageReplies.
     */
    distinct?: ChatMessageReplyScalarFieldEnum | ChatMessageReplyScalarFieldEnum[]
  }

  /**
   * ChatMessageReply findFirstOrThrow
   */
  export type ChatMessageReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessageReply
     */
    select?: ChatMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessageReply
     */
    omit?: ChatMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessageReply to fetch.
     */
    where?: ChatMessageReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessageReplies to fetch.
     */
    orderBy?: ChatMessageReplyOrderByWithRelationInput | ChatMessageReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessageReplies.
     */
    cursor?: ChatMessageReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessageReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessageReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessageReplies.
     */
    distinct?: ChatMessageReplyScalarFieldEnum | ChatMessageReplyScalarFieldEnum[]
  }

  /**
   * ChatMessageReply findMany
   */
  export type ChatMessageReplyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessageReply
     */
    select?: ChatMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessageReply
     */
    omit?: ChatMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessageReplies to fetch.
     */
    where?: ChatMessageReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessageReplies to fetch.
     */
    orderBy?: ChatMessageReplyOrderByWithRelationInput | ChatMessageReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessageReplies.
     */
    cursor?: ChatMessageReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessageReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessageReplies.
     */
    skip?: number
    distinct?: ChatMessageReplyScalarFieldEnum | ChatMessageReplyScalarFieldEnum[]
  }

  /**
   * ChatMessageReply create
   */
  export type ChatMessageReplyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessageReply
     */
    select?: ChatMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessageReply
     */
    omit?: ChatMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessageReply.
     */
    data: XOR<ChatMessageReplyCreateInput, ChatMessageReplyUncheckedCreateInput>
  }

  /**
   * ChatMessageReply createMany
   */
  export type ChatMessageReplyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessageReplies.
     */
    data: ChatMessageReplyCreateManyInput | ChatMessageReplyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessageReply createManyAndReturn
   */
  export type ChatMessageReplyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessageReply
     */
    select?: ChatMessageReplySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessageReply
     */
    omit?: ChatMessageReplyOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessageReplies.
     */
    data: ChatMessageReplyCreateManyInput | ChatMessageReplyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageReplyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessageReply update
   */
  export type ChatMessageReplyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessageReply
     */
    select?: ChatMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessageReply
     */
    omit?: ChatMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessageReply.
     */
    data: XOR<ChatMessageReplyUpdateInput, ChatMessageReplyUncheckedUpdateInput>
    /**
     * Choose, which ChatMessageReply to update.
     */
    where: ChatMessageReplyWhereUniqueInput
  }

  /**
   * ChatMessageReply updateMany
   */
  export type ChatMessageReplyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessageReplies.
     */
    data: XOR<ChatMessageReplyUpdateManyMutationInput, ChatMessageReplyUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessageReplies to update
     */
    where?: ChatMessageReplyWhereInput
    /**
     * Limit how many ChatMessageReplies to update.
     */
    limit?: number
  }

  /**
   * ChatMessageReply updateManyAndReturn
   */
  export type ChatMessageReplyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessageReply
     */
    select?: ChatMessageReplySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessageReply
     */
    omit?: ChatMessageReplyOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessageReplies.
     */
    data: XOR<ChatMessageReplyUpdateManyMutationInput, ChatMessageReplyUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessageReplies to update
     */
    where?: ChatMessageReplyWhereInput
    /**
     * Limit how many ChatMessageReplies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageReplyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessageReply upsert
   */
  export type ChatMessageReplyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessageReply
     */
    select?: ChatMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessageReply
     */
    omit?: ChatMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessageReply to update in case it exists.
     */
    where: ChatMessageReplyWhereUniqueInput
    /**
     * In case the ChatMessageReply found by the `where` argument doesn't exist, create a new ChatMessageReply with this data.
     */
    create: XOR<ChatMessageReplyCreateInput, ChatMessageReplyUncheckedCreateInput>
    /**
     * In case the ChatMessageReply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageReplyUpdateInput, ChatMessageReplyUncheckedUpdateInput>
  }

  /**
   * ChatMessageReply delete
   */
  export type ChatMessageReplyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessageReply
     */
    select?: ChatMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessageReply
     */
    omit?: ChatMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageReplyInclude<ExtArgs> | null
    /**
     * Filter which ChatMessageReply to delete.
     */
    where: ChatMessageReplyWhereUniqueInput
  }

  /**
   * ChatMessageReply deleteMany
   */
  export type ChatMessageReplyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessageReplies to delete
     */
    where?: ChatMessageReplyWhereInput
    /**
     * Limit how many ChatMessageReplies to delete.
     */
    limit?: number
  }

  /**
   * ChatMessageReply without action
   */
  export type ChatMessageReplyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessageReply
     */
    select?: ChatMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessageReply
     */
    omit?: ChatMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageReplyInclude<ExtArgs> | null
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
    lastMessageId: string | null
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
    lastMessageId: string | null
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
    lastMessageId: number
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
    lastMessageId?: true
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
    lastMessageId?: true
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
    lastMessageId?: true
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
    lastMessageId: string | null
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
    lastMessageId?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastMessage?: boolean | Chat$lastMessageArgs<ExtArgs>
    draftMessages?: boolean | Chat$draftMessagesArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    members?: boolean | Chat$membersArgs<ExtArgs>
    files?: boolean | Chat$filesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatName?: boolean
    isGroup?: boolean
    avatarUrl?: boolean
    isDeleted?: boolean
    lastMessageId?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastMessage?: boolean | Chat$lastMessageArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatName?: boolean
    isGroup?: boolean
    avatarUrl?: boolean
    isDeleted?: boolean
    lastMessageId?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastMessage?: boolean | Chat$lastMessageArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    chatName?: boolean
    isGroup?: boolean
    avatarUrl?: boolean
    isDeleted?: boolean
    lastMessageId?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatName" | "isGroup" | "avatarUrl" | "isDeleted" | "lastMessageId" | "lastMessageAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lastMessage?: boolean | Chat$lastMessageArgs<ExtArgs>
    draftMessages?: boolean | Chat$draftMessagesArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    members?: boolean | Chat$membersArgs<ExtArgs>
    files?: boolean | Chat$filesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lastMessage?: boolean | Chat$lastMessageArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lastMessage?: boolean | Chat$lastMessageArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      lastMessage: Prisma.$ChatMessagePayload<ExtArgs> | null
      draftMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
      members: Prisma.$ChatMemberPayload<ExtArgs>[]
      files: Prisma.$FileMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatName: string | null
      isGroup: boolean
      avatarUrl: string | null
      isDeleted: boolean
      lastMessageId: string | null
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
    lastMessage<T extends Chat$lastMessageArgs<ExtArgs> = {}>(args?: Subset<T, Chat$lastMessageArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    draftMessages<T extends Chat$draftMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$draftMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Chat$membersArgs<ExtArgs> = {}>(args?: Subset<T, Chat$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends Chat$filesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly lastMessageId: FieldRef<"Chat", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Chat.lastMessage
   */
  export type Chat$lastMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Chat.draftMessages
   */
  export type Chat$draftMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    isEdited: 'isEdited',
    isDeleted: 'isDeleted',
    isForwarded: 'isForwarded',
    isReply: 'isReply',
    isDraft: 'isDraft',
    draftOfChatId: 'draftOfChatId',
    userId: 'userId',
    chatId: 'chatId',
    readCount: 'readCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const ChatMessageReplyScalarFieldEnum: {
    id: 'id',
    replyId: 'replyId',
    repliedToId: 'repliedToId'
  };

  export type ChatMessageReplyScalarFieldEnum = (typeof ChatMessageReplyScalarFieldEnum)[keyof typeof ChatMessageReplyScalarFieldEnum]


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
    lastMessageId: 'lastMessageId',
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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
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
    isEdited?: BoolFilter<"ChatMessage"> | boolean
    isDeleted?: BoolFilter<"ChatMessage"> | boolean
    isForwarded?: BoolFilter<"ChatMessage"> | boolean
    isReply?: BoolFilter<"ChatMessage"> | boolean
    isDraft?: BoolFilter<"ChatMessage"> | boolean
    draftOfChatId?: StringNullableFilter<"ChatMessage"> | string | null
    userId?: StringFilter<"ChatMessage"> | string
    chatId?: StringFilter<"ChatMessage"> | string
    readCount?: StringNullableFilter<"ChatMessage"> | string | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    files?: FileMessageListRelationFilter
    replies?: ChatMessageReplyListRelationFilter
    repliedToLinks?: ChatMessageReplyListRelationFilter
    lastMessageForChat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null
    draftOfChat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrderInput | SortOrder
    isStarted?: SortOrder
    isEdited?: SortOrder
    isDeleted?: SortOrder
    isForwarded?: SortOrder
    isReply?: SortOrder
    isDraft?: SortOrder
    draftOfChatId?: SortOrderInput | SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    readCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    files?: FileMessageOrderByRelationAggregateInput
    replies?: ChatMessageReplyOrderByRelationAggregateInput
    repliedToLinks?: ChatMessageReplyOrderByRelationAggregateInput
    lastMessageForChat?: ChatOrderByWithRelationInput
    draftOfChat?: ChatOrderByWithRelationInput
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
    isEdited?: BoolFilter<"ChatMessage"> | boolean
    isDeleted?: BoolFilter<"ChatMessage"> | boolean
    isForwarded?: BoolFilter<"ChatMessage"> | boolean
    isReply?: BoolFilter<"ChatMessage"> | boolean
    isDraft?: BoolFilter<"ChatMessage"> | boolean
    draftOfChatId?: StringNullableFilter<"ChatMessage"> | string | null
    userId?: StringFilter<"ChatMessage"> | string
    chatId?: StringFilter<"ChatMessage"> | string
    readCount?: StringNullableFilter<"ChatMessage"> | string | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    files?: FileMessageListRelationFilter
    replies?: ChatMessageReplyListRelationFilter
    repliedToLinks?: ChatMessageReplyListRelationFilter
    lastMessageForChat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null
    draftOfChat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrderInput | SortOrder
    isStarted?: SortOrder
    isEdited?: SortOrder
    isDeleted?: SortOrder
    isForwarded?: SortOrder
    isReply?: SortOrder
    isDraft?: SortOrder
    draftOfChatId?: SortOrderInput | SortOrder
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
    isEdited?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    isForwarded?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    isReply?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    isDraft?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    draftOfChatId?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
    userId?: StringWithAggregatesFilter<"ChatMessage"> | string
    chatId?: StringWithAggregatesFilter<"ChatMessage"> | string
    readCount?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type ChatMessageReplyWhereInput = {
    AND?: ChatMessageReplyWhereInput | ChatMessageReplyWhereInput[]
    OR?: ChatMessageReplyWhereInput[]
    NOT?: ChatMessageReplyWhereInput | ChatMessageReplyWhereInput[]
    id?: StringFilter<"ChatMessageReply"> | string
    replyId?: StringFilter<"ChatMessageReply"> | string
    repliedToId?: StringFilter<"ChatMessageReply"> | string
    reply?: XOR<ChatMessageScalarRelationFilter, ChatMessageWhereInput>
    repliedTo?: XOR<ChatMessageScalarRelationFilter, ChatMessageWhereInput>
  }

  export type ChatMessageReplyOrderByWithRelationInput = {
    id?: SortOrder
    replyId?: SortOrder
    repliedToId?: SortOrder
    reply?: ChatMessageOrderByWithRelationInput
    repliedTo?: ChatMessageOrderByWithRelationInput
  }

  export type ChatMessageReplyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    replyId_repliedToId?: ChatMessageReplyReplyIdRepliedToIdCompoundUniqueInput
    AND?: ChatMessageReplyWhereInput | ChatMessageReplyWhereInput[]
    OR?: ChatMessageReplyWhereInput[]
    NOT?: ChatMessageReplyWhereInput | ChatMessageReplyWhereInput[]
    replyId?: StringFilter<"ChatMessageReply"> | string
    repliedToId?: StringFilter<"ChatMessageReply"> | string
    reply?: XOR<ChatMessageScalarRelationFilter, ChatMessageWhereInput>
    repliedTo?: XOR<ChatMessageScalarRelationFilter, ChatMessageWhereInput>
  }, "id" | "replyId_repliedToId">

  export type ChatMessageReplyOrderByWithAggregationInput = {
    id?: SortOrder
    replyId?: SortOrder
    repliedToId?: SortOrder
    _count?: ChatMessageReplyCountOrderByAggregateInput
    _max?: ChatMessageReplyMaxOrderByAggregateInput
    _min?: ChatMessageReplyMinOrderByAggregateInput
  }

  export type ChatMessageReplyScalarWhereWithAggregatesInput = {
    AND?: ChatMessageReplyScalarWhereWithAggregatesInput | ChatMessageReplyScalarWhereWithAggregatesInput[]
    OR?: ChatMessageReplyScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageReplyScalarWhereWithAggregatesInput | ChatMessageReplyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessageReply"> | string
    replyId?: StringWithAggregatesFilter<"ChatMessageReply"> | string
    repliedToId?: StringWithAggregatesFilter<"ChatMessageReply"> | string
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
    lastMessageId?: StringNullableFilter<"Chat"> | string | null
    lastMessageAt?: DateTimeNullableFilter<"Chat"> | Date | string | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    lastMessage?: XOR<ChatMessageNullableScalarRelationFilter, ChatMessageWhereInput> | null
    draftMessages?: ChatMessageListRelationFilter
    messages?: ChatMessageListRelationFilter
    members?: ChatMemberListRelationFilter
    files?: FileMessageListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    chatName?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    lastMessageAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastMessage?: ChatMessageOrderByWithRelationInput
    draftMessages?: ChatMessageOrderByRelationAggregateInput
    messages?: ChatMessageOrderByRelationAggregateInput
    members?: ChatMemberOrderByRelationAggregateInput
    files?: FileMessageOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lastMessageId?: string
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
    lastMessage?: XOR<ChatMessageNullableScalarRelationFilter, ChatMessageWhereInput> | null
    draftMessages?: ChatMessageListRelationFilter
    messages?: ChatMessageListRelationFilter
    members?: ChatMemberListRelationFilter
    files?: FileMessageListRelationFilter
  }, "id" | "lastMessageId">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    chatName?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    lastMessageId?: SortOrderInput | SortOrder
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
    lastMessageId?: StringNullableWithAggregatesFilter<"Chat"> | string | null
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
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatCreateNestedOneWithoutLastMessageInput
    draftOfChat?: ChatCreateNestedOneWithoutDraftMessagesInput
    user: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    draftOfChatId?: string | null
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyUncheckedCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatUncheckedCreateNestedOneWithoutLastMessageInput
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUpdateOneWithoutLastMessageNestedInput
    draftOfChat?: ChatUpdateOneWithoutDraftMessagesNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    draftOfChatId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUncheckedUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUncheckedUpdateOneWithoutLastMessageNestedInput
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    draftOfChatId?: string | null
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
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    draftOfChatId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageReplyCreateInput = {
    id?: string
    reply: ChatMessageCreateNestedOneWithoutRepliedToLinksInput
    repliedTo: ChatMessageCreateNestedOneWithoutRepliesInput
  }

  export type ChatMessageReplyUncheckedCreateInput = {
    id?: string
    replyId: string
    repliedToId: string
  }

  export type ChatMessageReplyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reply?: ChatMessageUpdateOneRequiredWithoutRepliedToLinksNestedInput
    repliedTo?: ChatMessageUpdateOneRequiredWithoutRepliesNestedInput
  }

  export type ChatMessageReplyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    replyId?: StringFieldUpdateOperationsInput | string
    repliedToId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageReplyCreateManyInput = {
    id?: string
    replyId: string
    repliedToId: string
  }

  export type ChatMessageReplyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageReplyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    replyId?: StringFieldUpdateOperationsInput | string
    repliedToId?: StringFieldUpdateOperationsInput | string
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
    lastMessage?: ChatMessageCreateNestedOneWithoutLastMessageForChatInput
    draftMessages?: ChatMessageCreateNestedManyWithoutDraftOfChatInput
    messages?: ChatMessageCreateNestedManyWithoutChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
    files?: FileMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    draftMessages?: ChatMessageUncheckedCreateNestedManyWithoutDraftOfChatInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    files?: FileMessageUncheckedCreateNestedManyWithoutChatInput
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
    lastMessage?: ChatMessageUpdateOneWithoutLastMessageForChatNestedInput
    draftMessages?: ChatMessageUpdateManyWithoutDraftOfChatNestedInput
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
    files?: FileMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draftMessages?: ChatMessageUncheckedUpdateManyWithoutDraftOfChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageId?: string | null
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
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type ChatMessageReplyListRelationFilter = {
    every?: ChatMessageReplyWhereInput
    some?: ChatMessageReplyWhereInput
    none?: ChatMessageReplyWhereInput
  }

  export type ChatNullableScalarRelationFilter = {
    is?: ChatWhereInput | null
    isNot?: ChatWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type ChatMessageReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isStarted?: SortOrder
    isEdited?: SortOrder
    isDeleted?: SortOrder
    isForwarded?: SortOrder
    isReply?: SortOrder
    isDraft?: SortOrder
    draftOfChatId?: SortOrder
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
    isEdited?: SortOrder
    isDeleted?: SortOrder
    isForwarded?: SortOrder
    isReply?: SortOrder
    isDraft?: SortOrder
    draftOfChatId?: SortOrder
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
    isEdited?: SortOrder
    isDeleted?: SortOrder
    isForwarded?: SortOrder
    isReply?: SortOrder
    isDraft?: SortOrder
    draftOfChatId?: SortOrder
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

  export type ChatMessageReplyReplyIdRepliedToIdCompoundUniqueInput = {
    replyId: string
    repliedToId: string
  }

  export type ChatMessageReplyCountOrderByAggregateInput = {
    id?: SortOrder
    replyId?: SortOrder
    repliedToId?: SortOrder
  }

  export type ChatMessageReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    replyId?: SortOrder
    repliedToId?: SortOrder
  }

  export type ChatMessageReplyMinOrderByAggregateInput = {
    id?: SortOrder
    replyId?: SortOrder
    repliedToId?: SortOrder
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

  export type ChatMessageNullableScalarRelationFilter = {
    is?: ChatMessageWhereInput | null
    isNot?: ChatMessageWhereInput | null
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    chatName?: SortOrder
    isGroup?: SortOrder
    avatarUrl?: SortOrder
    isDeleted?: SortOrder
    lastMessageId?: SortOrder
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
    lastMessageId?: SortOrder
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
    lastMessageId?: SortOrder
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

  export type ChatMessageReplyCreateNestedManyWithoutRepliedToInput = {
    create?: XOR<ChatMessageReplyCreateWithoutRepliedToInput, ChatMessageReplyUncheckedCreateWithoutRepliedToInput> | ChatMessageReplyCreateWithoutRepliedToInput[] | ChatMessageReplyUncheckedCreateWithoutRepliedToInput[]
    connectOrCreate?: ChatMessageReplyCreateOrConnectWithoutRepliedToInput | ChatMessageReplyCreateOrConnectWithoutRepliedToInput[]
    createMany?: ChatMessageReplyCreateManyRepliedToInputEnvelope
    connect?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
  }

  export type ChatMessageReplyCreateNestedManyWithoutReplyInput = {
    create?: XOR<ChatMessageReplyCreateWithoutReplyInput, ChatMessageReplyUncheckedCreateWithoutReplyInput> | ChatMessageReplyCreateWithoutReplyInput[] | ChatMessageReplyUncheckedCreateWithoutReplyInput[]
    connectOrCreate?: ChatMessageReplyCreateOrConnectWithoutReplyInput | ChatMessageReplyCreateOrConnectWithoutReplyInput[]
    createMany?: ChatMessageReplyCreateManyReplyInputEnvelope
    connect?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
  }

  export type ChatCreateNestedOneWithoutLastMessageInput = {
    create?: XOR<ChatCreateWithoutLastMessageInput, ChatUncheckedCreateWithoutLastMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutLastMessageInput
    connect?: ChatWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutDraftMessagesInput = {
    create?: XOR<ChatCreateWithoutDraftMessagesInput, ChatUncheckedCreateWithoutDraftMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutDraftMessagesInput
    connect?: ChatWhereUniqueInput
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

  export type ChatMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput = {
    create?: XOR<ChatMessageReplyCreateWithoutRepliedToInput, ChatMessageReplyUncheckedCreateWithoutRepliedToInput> | ChatMessageReplyCreateWithoutRepliedToInput[] | ChatMessageReplyUncheckedCreateWithoutRepliedToInput[]
    connectOrCreate?: ChatMessageReplyCreateOrConnectWithoutRepliedToInput | ChatMessageReplyCreateOrConnectWithoutRepliedToInput[]
    createMany?: ChatMessageReplyCreateManyRepliedToInputEnvelope
    connect?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
  }

  export type ChatMessageReplyUncheckedCreateNestedManyWithoutReplyInput = {
    create?: XOR<ChatMessageReplyCreateWithoutReplyInput, ChatMessageReplyUncheckedCreateWithoutReplyInput> | ChatMessageReplyCreateWithoutReplyInput[] | ChatMessageReplyUncheckedCreateWithoutReplyInput[]
    connectOrCreate?: ChatMessageReplyCreateOrConnectWithoutReplyInput | ChatMessageReplyCreateOrConnectWithoutReplyInput[]
    createMany?: ChatMessageReplyCreateManyReplyInputEnvelope
    connect?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedOneWithoutLastMessageInput = {
    create?: XOR<ChatCreateWithoutLastMessageInput, ChatUncheckedCreateWithoutLastMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutLastMessageInput
    connect?: ChatWhereUniqueInput
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

  export type ChatMessageReplyUpdateManyWithoutRepliedToNestedInput = {
    create?: XOR<ChatMessageReplyCreateWithoutRepliedToInput, ChatMessageReplyUncheckedCreateWithoutRepliedToInput> | ChatMessageReplyCreateWithoutRepliedToInput[] | ChatMessageReplyUncheckedCreateWithoutRepliedToInput[]
    connectOrCreate?: ChatMessageReplyCreateOrConnectWithoutRepliedToInput | ChatMessageReplyCreateOrConnectWithoutRepliedToInput[]
    upsert?: ChatMessageReplyUpsertWithWhereUniqueWithoutRepliedToInput | ChatMessageReplyUpsertWithWhereUniqueWithoutRepliedToInput[]
    createMany?: ChatMessageReplyCreateManyRepliedToInputEnvelope
    set?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
    disconnect?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
    delete?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
    connect?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
    update?: ChatMessageReplyUpdateWithWhereUniqueWithoutRepliedToInput | ChatMessageReplyUpdateWithWhereUniqueWithoutRepliedToInput[]
    updateMany?: ChatMessageReplyUpdateManyWithWhereWithoutRepliedToInput | ChatMessageReplyUpdateManyWithWhereWithoutRepliedToInput[]
    deleteMany?: ChatMessageReplyScalarWhereInput | ChatMessageReplyScalarWhereInput[]
  }

  export type ChatMessageReplyUpdateManyWithoutReplyNestedInput = {
    create?: XOR<ChatMessageReplyCreateWithoutReplyInput, ChatMessageReplyUncheckedCreateWithoutReplyInput> | ChatMessageReplyCreateWithoutReplyInput[] | ChatMessageReplyUncheckedCreateWithoutReplyInput[]
    connectOrCreate?: ChatMessageReplyCreateOrConnectWithoutReplyInput | ChatMessageReplyCreateOrConnectWithoutReplyInput[]
    upsert?: ChatMessageReplyUpsertWithWhereUniqueWithoutReplyInput | ChatMessageReplyUpsertWithWhereUniqueWithoutReplyInput[]
    createMany?: ChatMessageReplyCreateManyReplyInputEnvelope
    set?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
    disconnect?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
    delete?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
    connect?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
    update?: ChatMessageReplyUpdateWithWhereUniqueWithoutReplyInput | ChatMessageReplyUpdateWithWhereUniqueWithoutReplyInput[]
    updateMany?: ChatMessageReplyUpdateManyWithWhereWithoutReplyInput | ChatMessageReplyUpdateManyWithWhereWithoutReplyInput[]
    deleteMany?: ChatMessageReplyScalarWhereInput | ChatMessageReplyScalarWhereInput[]
  }

  export type ChatUpdateOneWithoutLastMessageNestedInput = {
    create?: XOR<ChatCreateWithoutLastMessageInput, ChatUncheckedCreateWithoutLastMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutLastMessageInput
    upsert?: ChatUpsertWithoutLastMessageInput
    disconnect?: ChatWhereInput | boolean
    delete?: ChatWhereInput | boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutLastMessageInput, ChatUpdateWithoutLastMessageInput>, ChatUncheckedUpdateWithoutLastMessageInput>
  }

  export type ChatUpdateOneWithoutDraftMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutDraftMessagesInput, ChatUncheckedCreateWithoutDraftMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutDraftMessagesInput
    upsert?: ChatUpsertWithoutDraftMessagesInput
    disconnect?: ChatWhereInput | boolean
    delete?: ChatWhereInput | boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutDraftMessagesInput, ChatUpdateWithoutDraftMessagesInput>, ChatUncheckedUpdateWithoutDraftMessagesInput>
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

  export type ChatMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput = {
    create?: XOR<ChatMessageReplyCreateWithoutRepliedToInput, ChatMessageReplyUncheckedCreateWithoutRepliedToInput> | ChatMessageReplyCreateWithoutRepliedToInput[] | ChatMessageReplyUncheckedCreateWithoutRepliedToInput[]
    connectOrCreate?: ChatMessageReplyCreateOrConnectWithoutRepliedToInput | ChatMessageReplyCreateOrConnectWithoutRepliedToInput[]
    upsert?: ChatMessageReplyUpsertWithWhereUniqueWithoutRepliedToInput | ChatMessageReplyUpsertWithWhereUniqueWithoutRepliedToInput[]
    createMany?: ChatMessageReplyCreateManyRepliedToInputEnvelope
    set?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
    disconnect?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
    delete?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
    connect?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
    update?: ChatMessageReplyUpdateWithWhereUniqueWithoutRepliedToInput | ChatMessageReplyUpdateWithWhereUniqueWithoutRepliedToInput[]
    updateMany?: ChatMessageReplyUpdateManyWithWhereWithoutRepliedToInput | ChatMessageReplyUpdateManyWithWhereWithoutRepliedToInput[]
    deleteMany?: ChatMessageReplyScalarWhereInput | ChatMessageReplyScalarWhereInput[]
  }

  export type ChatMessageReplyUncheckedUpdateManyWithoutReplyNestedInput = {
    create?: XOR<ChatMessageReplyCreateWithoutReplyInput, ChatMessageReplyUncheckedCreateWithoutReplyInput> | ChatMessageReplyCreateWithoutReplyInput[] | ChatMessageReplyUncheckedCreateWithoutReplyInput[]
    connectOrCreate?: ChatMessageReplyCreateOrConnectWithoutReplyInput | ChatMessageReplyCreateOrConnectWithoutReplyInput[]
    upsert?: ChatMessageReplyUpsertWithWhereUniqueWithoutReplyInput | ChatMessageReplyUpsertWithWhereUniqueWithoutReplyInput[]
    createMany?: ChatMessageReplyCreateManyReplyInputEnvelope
    set?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
    disconnect?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
    delete?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
    connect?: ChatMessageReplyWhereUniqueInput | ChatMessageReplyWhereUniqueInput[]
    update?: ChatMessageReplyUpdateWithWhereUniqueWithoutReplyInput | ChatMessageReplyUpdateWithWhereUniqueWithoutReplyInput[]
    updateMany?: ChatMessageReplyUpdateManyWithWhereWithoutReplyInput | ChatMessageReplyUpdateManyWithWhereWithoutReplyInput[]
    deleteMany?: ChatMessageReplyScalarWhereInput | ChatMessageReplyScalarWhereInput[]
  }

  export type ChatUncheckedUpdateOneWithoutLastMessageNestedInput = {
    create?: XOR<ChatCreateWithoutLastMessageInput, ChatUncheckedCreateWithoutLastMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutLastMessageInput
    upsert?: ChatUpsertWithoutLastMessageInput
    disconnect?: ChatWhereInput | boolean
    delete?: ChatWhereInput | boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutLastMessageInput, ChatUpdateWithoutLastMessageInput>, ChatUncheckedUpdateWithoutLastMessageInput>
  }

  export type ChatMessageCreateNestedOneWithoutRepliedToLinksInput = {
    create?: XOR<ChatMessageCreateWithoutRepliedToLinksInput, ChatMessageUncheckedCreateWithoutRepliedToLinksInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRepliedToLinksInput
    connect?: ChatMessageWhereUniqueInput
  }

  export type ChatMessageCreateNestedOneWithoutRepliesInput = {
    create?: XOR<ChatMessageCreateWithoutRepliesInput, ChatMessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRepliesInput
    connect?: ChatMessageWhereUniqueInput
  }

  export type ChatMessageUpdateOneRequiredWithoutRepliedToLinksNestedInput = {
    create?: XOR<ChatMessageCreateWithoutRepliedToLinksInput, ChatMessageUncheckedCreateWithoutRepliedToLinksInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRepliedToLinksInput
    upsert?: ChatMessageUpsertWithoutRepliedToLinksInput
    connect?: ChatMessageWhereUniqueInput
    update?: XOR<XOR<ChatMessageUpdateToOneWithWhereWithoutRepliedToLinksInput, ChatMessageUpdateWithoutRepliedToLinksInput>, ChatMessageUncheckedUpdateWithoutRepliedToLinksInput>
  }

  export type ChatMessageUpdateOneRequiredWithoutRepliesNestedInput = {
    create?: XOR<ChatMessageCreateWithoutRepliesInput, ChatMessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRepliesInput
    upsert?: ChatMessageUpsertWithoutRepliesInput
    connect?: ChatMessageWhereUniqueInput
    update?: XOR<XOR<ChatMessageUpdateToOneWithWhereWithoutRepliesInput, ChatMessageUpdateWithoutRepliesInput>, ChatMessageUncheckedUpdateWithoutRepliesInput>
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

  export type ChatMessageCreateNestedOneWithoutLastMessageForChatInput = {
    create?: XOR<ChatMessageCreateWithoutLastMessageForChatInput, ChatMessageUncheckedCreateWithoutLastMessageForChatInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutLastMessageForChatInput
    connect?: ChatMessageWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutDraftOfChatInput = {
    create?: XOR<ChatMessageCreateWithoutDraftOfChatInput, ChatMessageUncheckedCreateWithoutDraftOfChatInput> | ChatMessageCreateWithoutDraftOfChatInput[] | ChatMessageUncheckedCreateWithoutDraftOfChatInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutDraftOfChatInput | ChatMessageCreateOrConnectWithoutDraftOfChatInput[]
    createMany?: ChatMessageCreateManyDraftOfChatInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
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

  export type ChatMessageUncheckedCreateNestedManyWithoutDraftOfChatInput = {
    create?: XOR<ChatMessageCreateWithoutDraftOfChatInput, ChatMessageUncheckedCreateWithoutDraftOfChatInput> | ChatMessageCreateWithoutDraftOfChatInput[] | ChatMessageUncheckedCreateWithoutDraftOfChatInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutDraftOfChatInput | ChatMessageCreateOrConnectWithoutDraftOfChatInput[]
    createMany?: ChatMessageCreateManyDraftOfChatInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
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

  export type ChatMessageUpdateOneWithoutLastMessageForChatNestedInput = {
    create?: XOR<ChatMessageCreateWithoutLastMessageForChatInput, ChatMessageUncheckedCreateWithoutLastMessageForChatInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutLastMessageForChatInput
    upsert?: ChatMessageUpsertWithoutLastMessageForChatInput
    disconnect?: ChatMessageWhereInput | boolean
    delete?: ChatMessageWhereInput | boolean
    connect?: ChatMessageWhereUniqueInput
    update?: XOR<XOR<ChatMessageUpdateToOneWithWhereWithoutLastMessageForChatInput, ChatMessageUpdateWithoutLastMessageForChatInput>, ChatMessageUncheckedUpdateWithoutLastMessageForChatInput>
  }

  export type ChatMessageUpdateManyWithoutDraftOfChatNestedInput = {
    create?: XOR<ChatMessageCreateWithoutDraftOfChatInput, ChatMessageUncheckedCreateWithoutDraftOfChatInput> | ChatMessageCreateWithoutDraftOfChatInput[] | ChatMessageUncheckedCreateWithoutDraftOfChatInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutDraftOfChatInput | ChatMessageCreateOrConnectWithoutDraftOfChatInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutDraftOfChatInput | ChatMessageUpsertWithWhereUniqueWithoutDraftOfChatInput[]
    createMany?: ChatMessageCreateManyDraftOfChatInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutDraftOfChatInput | ChatMessageUpdateWithWhereUniqueWithoutDraftOfChatInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutDraftOfChatInput | ChatMessageUpdateManyWithWhereWithoutDraftOfChatInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
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

  export type ChatMessageUncheckedUpdateManyWithoutDraftOfChatNestedInput = {
    create?: XOR<ChatMessageCreateWithoutDraftOfChatInput, ChatMessageUncheckedCreateWithoutDraftOfChatInput> | ChatMessageCreateWithoutDraftOfChatInput[] | ChatMessageUncheckedCreateWithoutDraftOfChatInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutDraftOfChatInput | ChatMessageCreateOrConnectWithoutDraftOfChatInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutDraftOfChatInput | ChatMessageUpsertWithWhereUniqueWithoutDraftOfChatInput[]
    createMany?: ChatMessageCreateManyDraftOfChatInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutDraftOfChatInput | ChatMessageUpdateWithWhereUniqueWithoutDraftOfChatInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutDraftOfChatInput | ChatMessageUpdateManyWithWhereWithoutDraftOfChatInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
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

  export type ChatMessageCreateWithoutUserInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatCreateNestedOneWithoutLastMessageInput
    draftOfChat?: ChatCreateNestedOneWithoutDraftMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutUserInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    draftOfChatId?: string | null
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyUncheckedCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatUncheckedCreateNestedOneWithoutLastMessageInput
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
    isEdited?: BoolFilter<"ChatMessage"> | boolean
    isDeleted?: BoolFilter<"ChatMessage"> | boolean
    isForwarded?: BoolFilter<"ChatMessage"> | boolean
    isReply?: BoolFilter<"ChatMessage"> | boolean
    isDraft?: BoolFilter<"ChatMessage"> | boolean
    draftOfChatId?: StringNullableFilter<"ChatMessage"> | string | null
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

  export type ChatMessageReplyCreateWithoutRepliedToInput = {
    id?: string
    reply: ChatMessageCreateNestedOneWithoutRepliedToLinksInput
  }

  export type ChatMessageReplyUncheckedCreateWithoutRepliedToInput = {
    id?: string
    replyId: string
  }

  export type ChatMessageReplyCreateOrConnectWithoutRepliedToInput = {
    where: ChatMessageReplyWhereUniqueInput
    create: XOR<ChatMessageReplyCreateWithoutRepliedToInput, ChatMessageReplyUncheckedCreateWithoutRepliedToInput>
  }

  export type ChatMessageReplyCreateManyRepliedToInputEnvelope = {
    data: ChatMessageReplyCreateManyRepliedToInput | ChatMessageReplyCreateManyRepliedToInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageReplyCreateWithoutReplyInput = {
    id?: string
    repliedTo: ChatMessageCreateNestedOneWithoutRepliesInput
  }

  export type ChatMessageReplyUncheckedCreateWithoutReplyInput = {
    id?: string
    repliedToId: string
  }

  export type ChatMessageReplyCreateOrConnectWithoutReplyInput = {
    where: ChatMessageReplyWhereUniqueInput
    create: XOR<ChatMessageReplyCreateWithoutReplyInput, ChatMessageReplyUncheckedCreateWithoutReplyInput>
  }

  export type ChatMessageReplyCreateManyReplyInputEnvelope = {
    data: ChatMessageReplyCreateManyReplyInput | ChatMessageReplyCreateManyReplyInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutLastMessageInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    draftMessages?: ChatMessageCreateNestedManyWithoutDraftOfChatInput
    messages?: ChatMessageCreateNestedManyWithoutChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
    files?: FileMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutLastMessageInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    draftMessages?: ChatMessageUncheckedCreateNestedManyWithoutDraftOfChatInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    files?: FileMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutLastMessageInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutLastMessageInput, ChatUncheckedCreateWithoutLastMessageInput>
  }

  export type ChatCreateWithoutDraftMessagesInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastMessage?: ChatMessageCreateNestedOneWithoutLastMessageForChatInput
    messages?: ChatMessageCreateNestedManyWithoutChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
    files?: FileMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutDraftMessagesInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    files?: FileMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutDraftMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutDraftMessagesInput, ChatUncheckedCreateWithoutDraftMessagesInput>
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
    lastMessage?: ChatMessageCreateNestedOneWithoutLastMessageForChatInput
    draftMessages?: ChatMessageCreateNestedManyWithoutDraftOfChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
    files?: FileMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    draftMessages?: ChatMessageUncheckedCreateNestedManyWithoutDraftOfChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    files?: FileMessageUncheckedCreateNestedManyWithoutChatInput
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

  export type ChatMessageReplyUpsertWithWhereUniqueWithoutRepliedToInput = {
    where: ChatMessageReplyWhereUniqueInput
    update: XOR<ChatMessageReplyUpdateWithoutRepliedToInput, ChatMessageReplyUncheckedUpdateWithoutRepliedToInput>
    create: XOR<ChatMessageReplyCreateWithoutRepliedToInput, ChatMessageReplyUncheckedCreateWithoutRepliedToInput>
  }

  export type ChatMessageReplyUpdateWithWhereUniqueWithoutRepliedToInput = {
    where: ChatMessageReplyWhereUniqueInput
    data: XOR<ChatMessageReplyUpdateWithoutRepliedToInput, ChatMessageReplyUncheckedUpdateWithoutRepliedToInput>
  }

  export type ChatMessageReplyUpdateManyWithWhereWithoutRepliedToInput = {
    where: ChatMessageReplyScalarWhereInput
    data: XOR<ChatMessageReplyUpdateManyMutationInput, ChatMessageReplyUncheckedUpdateManyWithoutRepliedToInput>
  }

  export type ChatMessageReplyScalarWhereInput = {
    AND?: ChatMessageReplyScalarWhereInput | ChatMessageReplyScalarWhereInput[]
    OR?: ChatMessageReplyScalarWhereInput[]
    NOT?: ChatMessageReplyScalarWhereInput | ChatMessageReplyScalarWhereInput[]
    id?: StringFilter<"ChatMessageReply"> | string
    replyId?: StringFilter<"ChatMessageReply"> | string
    repliedToId?: StringFilter<"ChatMessageReply"> | string
  }

  export type ChatMessageReplyUpsertWithWhereUniqueWithoutReplyInput = {
    where: ChatMessageReplyWhereUniqueInput
    update: XOR<ChatMessageReplyUpdateWithoutReplyInput, ChatMessageReplyUncheckedUpdateWithoutReplyInput>
    create: XOR<ChatMessageReplyCreateWithoutReplyInput, ChatMessageReplyUncheckedCreateWithoutReplyInput>
  }

  export type ChatMessageReplyUpdateWithWhereUniqueWithoutReplyInput = {
    where: ChatMessageReplyWhereUniqueInput
    data: XOR<ChatMessageReplyUpdateWithoutReplyInput, ChatMessageReplyUncheckedUpdateWithoutReplyInput>
  }

  export type ChatMessageReplyUpdateManyWithWhereWithoutReplyInput = {
    where: ChatMessageReplyScalarWhereInput
    data: XOR<ChatMessageReplyUpdateManyMutationInput, ChatMessageReplyUncheckedUpdateManyWithoutReplyInput>
  }

  export type ChatUpsertWithoutLastMessageInput = {
    update: XOR<ChatUpdateWithoutLastMessageInput, ChatUncheckedUpdateWithoutLastMessageInput>
    create: XOR<ChatCreateWithoutLastMessageInput, ChatUncheckedCreateWithoutLastMessageInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutLastMessageInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutLastMessageInput, ChatUncheckedUpdateWithoutLastMessageInput>
  }

  export type ChatUpdateWithoutLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draftMessages?: ChatMessageUpdateManyWithoutDraftOfChatNestedInput
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
    files?: FileMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draftMessages?: ChatMessageUncheckedUpdateManyWithoutDraftOfChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUpsertWithoutDraftMessagesInput = {
    update: XOR<ChatUpdateWithoutDraftMessagesInput, ChatUncheckedUpdateWithoutDraftMessagesInput>
    create: XOR<ChatCreateWithoutDraftMessagesInput, ChatUncheckedCreateWithoutDraftMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutDraftMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutDraftMessagesInput, ChatUncheckedUpdateWithoutDraftMessagesInput>
  }

  export type ChatUpdateWithoutDraftMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: ChatMessageUpdateOneWithoutLastMessageForChatNestedInput
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
    files?: FileMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutDraftMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutChatNestedInput
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
    lastMessage?: ChatMessageUpdateOneWithoutLastMessageForChatNestedInput
    draftMessages?: ChatMessageUpdateManyWithoutDraftOfChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
    files?: FileMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draftMessages?: ChatMessageUncheckedUpdateManyWithoutDraftOfChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatMessageCreateWithoutRepliedToLinksInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyCreateNestedManyWithoutRepliedToInput
    lastMessageForChat?: ChatCreateNestedOneWithoutLastMessageInput
    draftOfChat?: ChatCreateNestedOneWithoutDraftMessagesInput
    user: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutRepliedToLinksInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    draftOfChatId?: string | null
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
    lastMessageForChat?: ChatUncheckedCreateNestedOneWithoutLastMessageInput
  }

  export type ChatMessageCreateOrConnectWithoutRepliedToLinksInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutRepliedToLinksInput, ChatMessageUncheckedCreateWithoutRepliedToLinksInput>
  }

  export type ChatMessageCreateWithoutRepliesInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    repliedToLinks?: ChatMessageReplyCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatCreateNestedOneWithoutLastMessageInput
    draftOfChat?: ChatCreateNestedOneWithoutDraftMessagesInput
    user: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutRepliesInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    draftOfChatId?: string | null
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    repliedToLinks?: ChatMessageReplyUncheckedCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatUncheckedCreateNestedOneWithoutLastMessageInput
  }

  export type ChatMessageCreateOrConnectWithoutRepliesInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutRepliesInput, ChatMessageUncheckedCreateWithoutRepliesInput>
  }

  export type ChatMessageUpsertWithoutRepliedToLinksInput = {
    update: XOR<ChatMessageUpdateWithoutRepliedToLinksInput, ChatMessageUncheckedUpdateWithoutRepliedToLinksInput>
    create: XOR<ChatMessageCreateWithoutRepliedToLinksInput, ChatMessageUncheckedCreateWithoutRepliedToLinksInput>
    where?: ChatMessageWhereInput
  }

  export type ChatMessageUpdateToOneWithWhereWithoutRepliedToLinksInput = {
    where?: ChatMessageWhereInput
    data: XOR<ChatMessageUpdateWithoutRepliedToLinksInput, ChatMessageUncheckedUpdateWithoutRepliedToLinksInput>
  }

  export type ChatMessageUpdateWithoutRepliedToLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUpdateManyWithoutRepliedToNestedInput
    lastMessageForChat?: ChatUpdateOneWithoutLastMessageNestedInput
    draftOfChat?: ChatUpdateOneWithoutDraftMessagesNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutRepliedToLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    draftOfChatId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
    lastMessageForChat?: ChatUncheckedUpdateOneWithoutLastMessageNestedInput
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
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    repliedToLinks?: ChatMessageReplyUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUpdateOneWithoutLastMessageNestedInput
    draftOfChat?: ChatUpdateOneWithoutDraftMessagesNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    draftOfChatId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    repliedToLinks?: ChatMessageReplyUncheckedUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUncheckedUpdateOneWithoutLastMessageNestedInput
  }

  export type ChatMessageCreateWithoutFilesInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ChatMessageReplyCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatCreateNestedOneWithoutLastMessageInput
    draftOfChat?: ChatCreateNestedOneWithoutDraftMessagesInput
    user: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutFilesInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    draftOfChatId?: string | null
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ChatMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyUncheckedCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatUncheckedCreateNestedOneWithoutLastMessageInput
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
    lastMessage?: ChatMessageCreateNestedOneWithoutLastMessageForChatInput
    draftMessages?: ChatMessageCreateNestedManyWithoutDraftOfChatInput
    messages?: ChatMessageCreateNestedManyWithoutChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutFilesInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    draftMessages?: ChatMessageUncheckedCreateNestedManyWithoutDraftOfChatInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
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
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ChatMessageReplyUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUpdateOneWithoutLastMessageNestedInput
    draftOfChat?: ChatUpdateOneWithoutDraftMessagesNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    draftOfChatId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ChatMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUncheckedUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUncheckedUpdateOneWithoutLastMessageNestedInput
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
    lastMessage?: ChatMessageUpdateOneWithoutLastMessageForChatNestedInput
    draftMessages?: ChatMessageUpdateManyWithoutDraftOfChatNestedInput
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draftMessages?: ChatMessageUncheckedUpdateManyWithoutDraftOfChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatMessageCreateWithoutLastMessageForChatInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyCreateNestedManyWithoutReplyInput
    draftOfChat?: ChatCreateNestedOneWithoutDraftMessagesInput
    user: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutLastMessageForChatInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    draftOfChatId?: string | null
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyUncheckedCreateNestedManyWithoutReplyInput
  }

  export type ChatMessageCreateOrConnectWithoutLastMessageForChatInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutLastMessageForChatInput, ChatMessageUncheckedCreateWithoutLastMessageForChatInput>
  }

  export type ChatMessageCreateWithoutDraftOfChatInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatCreateNestedOneWithoutLastMessageInput
    user: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutDraftOfChatInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyUncheckedCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatUncheckedCreateNestedOneWithoutLastMessageInput
  }

  export type ChatMessageCreateOrConnectWithoutDraftOfChatInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutDraftOfChatInput, ChatMessageUncheckedCreateWithoutDraftOfChatInput>
  }

  export type ChatMessageCreateManyDraftOfChatInputEnvelope = {
    data: ChatMessageCreateManyDraftOfChatInput | ChatMessageCreateManyDraftOfChatInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutChatInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatCreateNestedOneWithoutLastMessageInput
    draftOfChat?: ChatCreateNestedOneWithoutDraftMessagesInput
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutChatInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    draftOfChatId?: string | null
    userId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyUncheckedCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatUncheckedCreateNestedOneWithoutLastMessageInput
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

  export type ChatMessageUpsertWithoutLastMessageForChatInput = {
    update: XOR<ChatMessageUpdateWithoutLastMessageForChatInput, ChatMessageUncheckedUpdateWithoutLastMessageForChatInput>
    create: XOR<ChatMessageCreateWithoutLastMessageForChatInput, ChatMessageUncheckedCreateWithoutLastMessageForChatInput>
    where?: ChatMessageWhereInput
  }

  export type ChatMessageUpdateToOneWithWhereWithoutLastMessageForChatInput = {
    where?: ChatMessageWhereInput
    data: XOR<ChatMessageUpdateWithoutLastMessageForChatInput, ChatMessageUncheckedUpdateWithoutLastMessageForChatInput>
  }

  export type ChatMessageUpdateWithoutLastMessageForChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUpdateManyWithoutReplyNestedInput
    draftOfChat?: ChatUpdateOneWithoutDraftMessagesNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutLastMessageForChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    draftOfChatId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUncheckedUpdateManyWithoutReplyNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutDraftOfChatInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutDraftOfChatInput, ChatMessageUncheckedUpdateWithoutDraftOfChatInput>
    create: XOR<ChatMessageCreateWithoutDraftOfChatInput, ChatMessageUncheckedCreateWithoutDraftOfChatInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutDraftOfChatInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutDraftOfChatInput, ChatMessageUncheckedUpdateWithoutDraftOfChatInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutDraftOfChatInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutDraftOfChatInput>
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
    lastMessage?: ChatMessageCreateNestedOneWithoutLastMessageForChatInput
    draftMessages?: ChatMessageCreateNestedManyWithoutDraftOfChatInput
    messages?: ChatMessageCreateNestedManyWithoutChatInput
    files?: FileMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMembersInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    lastMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    draftMessages?: ChatMessageUncheckedCreateNestedManyWithoutDraftOfChatInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
    files?: FileMessageUncheckedCreateNestedManyWithoutChatInput
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
    lastMessage?: ChatMessageUpdateOneWithoutLastMessageForChatNestedInput
    draftMessages?: ChatMessageUpdateManyWithoutDraftOfChatNestedInput
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
    files?: FileMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draftMessages?: ChatMessageUncheckedUpdateManyWithoutDraftOfChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatMessageCreateManyUserInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    draftOfChatId?: string | null
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
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUpdateOneWithoutLastMessageNestedInput
    draftOfChat?: ChatUpdateOneWithoutDraftMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    draftOfChatId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUncheckedUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUncheckedUpdateOneWithoutLastMessageNestedInput
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    draftOfChatId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type ChatMessageReplyCreateManyRepliedToInput = {
    id?: string
    replyId: string
  }

  export type ChatMessageReplyCreateManyReplyInput = {
    id?: string
    repliedToId: string
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

  export type ChatMessageReplyUpdateWithoutRepliedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    reply?: ChatMessageUpdateOneRequiredWithoutRepliedToLinksNestedInput
  }

  export type ChatMessageReplyUncheckedUpdateWithoutRepliedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    replyId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageReplyUncheckedUpdateManyWithoutRepliedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    replyId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageReplyUpdateWithoutReplyInput = {
    id?: StringFieldUpdateOperationsInput | string
    repliedTo?: ChatMessageUpdateOneRequiredWithoutRepliesNestedInput
  }

  export type ChatMessageReplyUncheckedUpdateWithoutReplyInput = {
    id?: StringFieldUpdateOperationsInput | string
    repliedToId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageReplyUncheckedUpdateManyWithoutReplyInput = {
    id?: StringFieldUpdateOperationsInput | string
    repliedToId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageCreateManyDraftOfChatInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateManyChatInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    isDraft?: boolean
    draftOfChatId?: string | null
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

  export type ChatMessageUpdateWithoutDraftOfChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUpdateOneWithoutLastMessageNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutDraftOfChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUncheckedUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUncheckedUpdateOneWithoutLastMessageNestedInput
  }

  export type ChatMessageUncheckedUpdateManyWithoutDraftOfChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUpdateOneWithoutLastMessageNestedInput
    draftOfChat?: ChatUpdateOneWithoutDraftMessagesNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    draftOfChatId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUncheckedUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUncheckedUpdateOneWithoutLastMessageNestedInput
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    draftOfChatId?: NullableStringFieldUpdateOperationsInput | string | null
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