
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
 * Model DraftMessage
 * 
 */
export type DraftMessage = $Result.DefaultSelection<Prisma.$DraftMessagePayload>
/**
 * Model DraftMessageReply
 * 
 */
export type DraftMessageReply = $Result.DefaultSelection<Prisma.$DraftMessageReplyPayload>
/**
 * Model FileMessage
 * 
 */
export type FileMessage = $Result.DefaultSelection<Prisma.$FileMessagePayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model PinnedChat
 * 
 */
export type PinnedChat = $Result.DefaultSelection<Prisma.$PinnedChatPayload>
/**
 * Model ChatMember
 * 
 */
export type ChatMember = $Result.DefaultSelection<Prisma.$ChatMemberPayload>
/**
 * Model GroupMember
 * 
 */
export type GroupMember = $Result.DefaultSelection<Prisma.$GroupMemberPayload>

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
   * `prisma.draftMessage`: Exposes CRUD operations for the **DraftMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DraftMessages
    * const draftMessages = await prisma.draftMessage.findMany()
    * ```
    */
  get draftMessage(): Prisma.DraftMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.draftMessageReply`: Exposes CRUD operations for the **DraftMessageReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DraftMessageReplies
    * const draftMessageReplies = await prisma.draftMessageReply.findMany()
    * ```
    */
  get draftMessageReply(): Prisma.DraftMessageReplyDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.pinnedChat`: Exposes CRUD operations for the **PinnedChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PinnedChats
    * const pinnedChats = await prisma.pinnedChat.findMany()
    * ```
    */
  get pinnedChat(): Prisma.PinnedChatDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.groupMember`: Exposes CRUD operations for the **GroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMember.findMany()
    * ```
    */
  get groupMember(): Prisma.GroupMemberDelegate<ExtArgs, ClientOptions>;
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
    DraftMessage: 'DraftMessage',
    DraftMessageReply: 'DraftMessageReply',
    FileMessage: 'FileMessage',
    Group: 'Group',
    Chat: 'Chat',
    PinnedChat: 'PinnedChat',
    ChatMember: 'ChatMember',
    GroupMember: 'GroupMember'
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
      modelProps: "user" | "chatMessage" | "chatMessageReply" | "draftMessage" | "draftMessageReply" | "fileMessage" | "group" | "chat" | "pinnedChat" | "chatMember" | "groupMember"
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
      DraftMessage: {
        payload: Prisma.$DraftMessagePayload<ExtArgs>
        fields: Prisma.DraftMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DraftMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DraftMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessagePayload>
          }
          findFirst: {
            args: Prisma.DraftMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DraftMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessagePayload>
          }
          findMany: {
            args: Prisma.DraftMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessagePayload>[]
          }
          create: {
            args: Prisma.DraftMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessagePayload>
          }
          createMany: {
            args: Prisma.DraftMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DraftMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessagePayload>[]
          }
          delete: {
            args: Prisma.DraftMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessagePayload>
          }
          update: {
            args: Prisma.DraftMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessagePayload>
          }
          deleteMany: {
            args: Prisma.DraftMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DraftMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DraftMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessagePayload>[]
          }
          upsert: {
            args: Prisma.DraftMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessagePayload>
          }
          aggregate: {
            args: Prisma.DraftMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDraftMessage>
          }
          groupBy: {
            args: Prisma.DraftMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<DraftMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.DraftMessageCountArgs<ExtArgs>
            result: $Utils.Optional<DraftMessageCountAggregateOutputType> | number
          }
        }
      }
      DraftMessageReply: {
        payload: Prisma.$DraftMessageReplyPayload<ExtArgs>
        fields: Prisma.DraftMessageReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DraftMessageReplyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessageReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DraftMessageReplyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessageReplyPayload>
          }
          findFirst: {
            args: Prisma.DraftMessageReplyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessageReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DraftMessageReplyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessageReplyPayload>
          }
          findMany: {
            args: Prisma.DraftMessageReplyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessageReplyPayload>[]
          }
          create: {
            args: Prisma.DraftMessageReplyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessageReplyPayload>
          }
          createMany: {
            args: Prisma.DraftMessageReplyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DraftMessageReplyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessageReplyPayload>[]
          }
          delete: {
            args: Prisma.DraftMessageReplyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessageReplyPayload>
          }
          update: {
            args: Prisma.DraftMessageReplyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessageReplyPayload>
          }
          deleteMany: {
            args: Prisma.DraftMessageReplyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DraftMessageReplyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DraftMessageReplyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessageReplyPayload>[]
          }
          upsert: {
            args: Prisma.DraftMessageReplyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftMessageReplyPayload>
          }
          aggregate: {
            args: Prisma.DraftMessageReplyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDraftMessageReply>
          }
          groupBy: {
            args: Prisma.DraftMessageReplyGroupByArgs<ExtArgs>
            result: $Utils.Optional<DraftMessageReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.DraftMessageReplyCountArgs<ExtArgs>
            result: $Utils.Optional<DraftMessageReplyCountAggregateOutputType> | number
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
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
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
      PinnedChat: {
        payload: Prisma.$PinnedChatPayload<ExtArgs>
        fields: Prisma.PinnedChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PinnedChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PinnedChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedChatPayload>
          }
          findFirst: {
            args: Prisma.PinnedChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PinnedChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedChatPayload>
          }
          findMany: {
            args: Prisma.PinnedChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedChatPayload>[]
          }
          create: {
            args: Prisma.PinnedChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedChatPayload>
          }
          createMany: {
            args: Prisma.PinnedChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PinnedChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedChatPayload>[]
          }
          delete: {
            args: Prisma.PinnedChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedChatPayload>
          }
          update: {
            args: Prisma.PinnedChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedChatPayload>
          }
          deleteMany: {
            args: Prisma.PinnedChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PinnedChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PinnedChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedChatPayload>[]
          }
          upsert: {
            args: Prisma.PinnedChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedChatPayload>
          }
          aggregate: {
            args: Prisma.PinnedChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePinnedChat>
          }
          groupBy: {
            args: Prisma.PinnedChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<PinnedChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.PinnedChatCountArgs<ExtArgs>
            result: $Utils.Optional<PinnedChatCountAggregateOutputType> | number
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
      GroupMember: {
        payload: Prisma.$GroupMemberPayload<ExtArgs>
        fields: Prisma.GroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findFirst: {
            args: Prisma.GroupMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findMany: {
            args: Prisma.GroupMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          create: {
            args: Prisma.GroupMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          createMany: {
            args: Prisma.GroupMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          delete: {
            args: Prisma.GroupMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          update: {
            args: Prisma.GroupMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          upsert: {
            args: Prisma.GroupMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          aggregate: {
            args: Prisma.GroupMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMember>
          }
          groupBy: {
            args: Prisma.GroupMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMemberCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberCountAggregateOutputType> | number
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
    draftMessage?: DraftMessageOmit
    draftMessageReply?: DraftMessageReplyOmit
    fileMessage?: FileMessageOmit
    group?: GroupOmit
    chat?: ChatOmit
    pinnedChat?: PinnedChatOmit
    chatMember?: ChatMemberOmit
    groupMember?: GroupMemberOmit
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
    draftMessages: number
    chatMemberships: number
    groupMemberships: number
    pinnedChats: number
    files: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    draftMessages?: boolean | UserCountOutputTypeCountDraftMessagesArgs
    chatMemberships?: boolean | UserCountOutputTypeCountChatMembershipsArgs
    groupMemberships?: boolean | UserCountOutputTypeCountGroupMembershipsArgs
    pinnedChats?: boolean | UserCountOutputTypeCountPinnedChatsArgs
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
  export type UserCountOutputTypeCountDraftMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftMessageWhereInput
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
  export type UserCountOutputTypeCountGroupMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPinnedChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PinnedChatWhereInput
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
    repliedFromDrafts: number
  }

  export type ChatMessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | ChatMessageCountOutputTypeCountFilesArgs
    replies?: boolean | ChatMessageCountOutputTypeCountRepliesArgs
    repliedToLinks?: boolean | ChatMessageCountOutputTypeCountRepliedToLinksArgs
    repliedFromDrafts?: boolean | ChatMessageCountOutputTypeCountRepliedFromDraftsArgs
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
   * ChatMessageCountOutputType without action
   */
  export type ChatMessageCountOutputTypeCountRepliedFromDraftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftMessageReplyWhereInput
  }


  /**
   * Count Type DraftMessageCountOutputType
   */

  export type DraftMessageCountOutputType = {
    files: number
    repliedToLinks: number
  }

  export type DraftMessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | DraftMessageCountOutputTypeCountFilesArgs
    repliedToLinks?: boolean | DraftMessageCountOutputTypeCountRepliedToLinksArgs
  }

  // Custom InputTypes
  /**
   * DraftMessageCountOutputType without action
   */
  export type DraftMessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessageCountOutputType
     */
    select?: DraftMessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DraftMessageCountOutputType without action
   */
  export type DraftMessageCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileMessageWhereInput
  }

  /**
   * DraftMessageCountOutputType without action
   */
  export type DraftMessageCountOutputTypeCountRepliedToLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftMessageReplyWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    members: number
    chats: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs
    chats?: boolean | GroupCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    pinnedByUser: number
    draftMessages: number
    messages: number
    members: number
    files: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pinnedByUser?: boolean | ChatCountOutputTypeCountPinnedByUserArgs
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
  export type ChatCountOutputTypeCountPinnedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PinnedChatWhereInput
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountDraftMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftMessageWhereInput
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
    bio: string | null
    email: string | null
    password: string | null
    avatarUrl: string | null
    isDeactivated: boolean | null
    deactivatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    bio: string | null
    email: string | null
    password: string | null
    avatarUrl: string | null
    isDeactivated: boolean | null
    deactivatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    bio: number
    email: number
    password: number
    avatarUrl: number
    isDeactivated: number
    deactivatedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    bio?: true
    email?: true
    password?: true
    avatarUrl?: true
    isDeactivated?: true
    deactivatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    bio?: true
    email?: true
    password?: true
    avatarUrl?: true
    isDeactivated?: true
    deactivatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    bio?: true
    email?: true
    password?: true
    avatarUrl?: true
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
    bio: string | null
    email: string
    password: string
    avatarUrl: string | null
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
    bio?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    isDeactivated?: boolean
    deactivatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | User$messagesArgs<ExtArgs>
    draftMessages?: boolean | User$draftMessagesArgs<ExtArgs>
    chatMemberships?: boolean | User$chatMembershipsArgs<ExtArgs>
    groupMemberships?: boolean | User$groupMembershipsArgs<ExtArgs>
    pinnedChats?: boolean | User$pinnedChatsArgs<ExtArgs>
    files?: boolean | User$filesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    bio?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    isDeactivated?: boolean
    deactivatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    bio?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    isDeactivated?: boolean
    deactivatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    bio?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    isDeactivated?: boolean
    deactivatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "bio" | "email" | "password" | "avatarUrl" | "isDeactivated" | "deactivatedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | User$messagesArgs<ExtArgs>
    draftMessages?: boolean | User$draftMessagesArgs<ExtArgs>
    chatMemberships?: boolean | User$chatMembershipsArgs<ExtArgs>
    groupMemberships?: boolean | User$groupMembershipsArgs<ExtArgs>
    pinnedChats?: boolean | User$pinnedChatsArgs<ExtArgs>
    files?: boolean | User$filesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
      draftMessages: Prisma.$DraftMessagePayload<ExtArgs>[]
      chatMemberships: Prisma.$ChatMemberPayload<ExtArgs>[]
      groupMemberships: Prisma.$GroupMemberPayload<ExtArgs>[]
      pinnedChats: Prisma.$PinnedChatPayload<ExtArgs>[]
      files: Prisma.$FileMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      bio: string | null
      email: string
      password: string
      avatarUrl: string | null
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
    draftMessages<T extends User$draftMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$draftMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMemberships<T extends User$chatMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupMemberships<T extends User$groupMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pinnedChats<T extends User$pinnedChatsArgs<ExtArgs> = {}>(args?: Subset<T, User$pinnedChatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PinnedChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly bio: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
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
   * User.draftMessages
   */
  export type User$draftMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessage
     */
    select?: DraftMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessage
     */
    omit?: DraftMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageInclude<ExtArgs> | null
    where?: DraftMessageWhereInput
    orderBy?: DraftMessageOrderByWithRelationInput | DraftMessageOrderByWithRelationInput[]
    cursor?: DraftMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DraftMessageScalarFieldEnum | DraftMessageScalarFieldEnum[]
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
   * User.groupMemberships
   */
  export type User$groupMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * User.pinnedChats
   */
  export type User$pinnedChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedChat
     */
    select?: PinnedChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedChat
     */
    omit?: PinnedChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedChatInclude<ExtArgs> | null
    where?: PinnedChatWhereInput
    orderBy?: PinnedChatOrderByWithRelationInput | PinnedChatOrderByWithRelationInput[]
    cursor?: PinnedChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PinnedChatScalarFieldEnum | PinnedChatScalarFieldEnum[]
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
    userId?: boolean
    chatId?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    files?: boolean | ChatMessage$filesArgs<ExtArgs>
    replies?: boolean | ChatMessage$repliesArgs<ExtArgs>
    repliedToLinks?: boolean | ChatMessage$repliedToLinksArgs<ExtArgs>
    lastMessageForChat?: boolean | ChatMessage$lastMessageForChatArgs<ExtArgs>
    pinnedInChat?: boolean | ChatMessage$pinnedInChatArgs<ExtArgs>
    repliedFromDrafts?: boolean | ChatMessage$repliedFromDraftsArgs<ExtArgs>
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
    userId?: boolean
    chatId?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
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
    userId?: boolean
    chatId?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
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
    userId?: boolean
    chatId?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "isStarted" | "isEdited" | "isDeleted" | "isForwarded" | "isReply" | "userId" | "chatId" | "readCount" | "createdAt" | "updatedAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | ChatMessage$filesArgs<ExtArgs>
    replies?: boolean | ChatMessage$repliesArgs<ExtArgs>
    repliedToLinks?: boolean | ChatMessage$repliedToLinksArgs<ExtArgs>
    lastMessageForChat?: boolean | ChatMessage$lastMessageForChatArgs<ExtArgs>
    pinnedInChat?: boolean | ChatMessage$pinnedInChatArgs<ExtArgs>
    repliedFromDrafts?: boolean | ChatMessage$repliedFromDraftsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    _count?: boolean | ChatMessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
      pinnedInChat: Prisma.$ChatPayload<ExtArgs> | null
      repliedFromDrafts: Prisma.$DraftMessageReplyPayload<ExtArgs>[]
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
    pinnedInChat<T extends ChatMessage$pinnedInChatArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$pinnedInChatArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    repliedFromDrafts<T extends ChatMessage$repliedFromDraftsArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$repliedFromDraftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftMessageReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * ChatMessage.pinnedInChat
   */
  export type ChatMessage$pinnedInChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ChatMessage.repliedFromDrafts
   */
  export type ChatMessage$repliedFromDraftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessageReply
     */
    select?: DraftMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessageReply
     */
    omit?: DraftMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageReplyInclude<ExtArgs> | null
    where?: DraftMessageReplyWhereInput
    orderBy?: DraftMessageReplyOrderByWithRelationInput | DraftMessageReplyOrderByWithRelationInput[]
    cursor?: DraftMessageReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DraftMessageReplyScalarFieldEnum | DraftMessageReplyScalarFieldEnum[]
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
   * Model DraftMessage
   */

  export type AggregateDraftMessage = {
    _count: DraftMessageCountAggregateOutputType | null
    _min: DraftMessageMinAggregateOutputType | null
    _max: DraftMessageMaxAggregateOutputType | null
  }

  export type DraftMessageMinAggregateOutputType = {
    id: string | null
    text: string | null
    isForwarded: boolean | null
    editId: string | null
    userId: string | null
    chatId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DraftMessageMaxAggregateOutputType = {
    id: string | null
    text: string | null
    isForwarded: boolean | null
    editId: string | null
    userId: string | null
    chatId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DraftMessageCountAggregateOutputType = {
    id: number
    text: number
    isForwarded: number
    editId: number
    filesEditId: number
    userId: number
    chatId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DraftMessageMinAggregateInputType = {
    id?: true
    text?: true
    isForwarded?: true
    editId?: true
    userId?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DraftMessageMaxAggregateInputType = {
    id?: true
    text?: true
    isForwarded?: true
    editId?: true
    userId?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DraftMessageCountAggregateInputType = {
    id?: true
    text?: true
    isForwarded?: true
    editId?: true
    filesEditId?: true
    userId?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DraftMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DraftMessage to aggregate.
     */
    where?: DraftMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DraftMessages to fetch.
     */
    orderBy?: DraftMessageOrderByWithRelationInput | DraftMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DraftMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DraftMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DraftMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DraftMessages
    **/
    _count?: true | DraftMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DraftMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DraftMessageMaxAggregateInputType
  }

  export type GetDraftMessageAggregateType<T extends DraftMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateDraftMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDraftMessage[P]>
      : GetScalarType<T[P], AggregateDraftMessage[P]>
  }




  export type DraftMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftMessageWhereInput
    orderBy?: DraftMessageOrderByWithAggregationInput | DraftMessageOrderByWithAggregationInput[]
    by: DraftMessageScalarFieldEnum[] | DraftMessageScalarFieldEnum
    having?: DraftMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DraftMessageCountAggregateInputType | true
    _min?: DraftMessageMinAggregateInputType
    _max?: DraftMessageMaxAggregateInputType
  }

  export type DraftMessageGroupByOutputType = {
    id: string
    text: string | null
    isForwarded: boolean
    editId: string | null
    filesEditId: string[]
    userId: string
    chatId: string
    createdAt: Date
    updatedAt: Date
    _count: DraftMessageCountAggregateOutputType | null
    _min: DraftMessageMinAggregateOutputType | null
    _max: DraftMessageMaxAggregateOutputType | null
  }

  type GetDraftMessageGroupByPayload<T extends DraftMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DraftMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DraftMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DraftMessageGroupByOutputType[P]>
            : GetScalarType<T[P], DraftMessageGroupByOutputType[P]>
        }
      >
    >


  export type DraftMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isForwarded?: boolean
    editId?: boolean
    filesEditId?: boolean
    userId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    files?: boolean | DraftMessage$filesArgs<ExtArgs>
    repliedToLinks?: boolean | DraftMessage$repliedToLinksArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    _count?: boolean | DraftMessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draftMessage"]>

  export type DraftMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isForwarded?: boolean
    editId?: boolean
    filesEditId?: boolean
    userId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draftMessage"]>

  export type DraftMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isForwarded?: boolean
    editId?: boolean
    filesEditId?: boolean
    userId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draftMessage"]>

  export type DraftMessageSelectScalar = {
    id?: boolean
    text?: boolean
    isForwarded?: boolean
    editId?: boolean
    filesEditId?: boolean
    userId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DraftMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "isForwarded" | "editId" | "filesEditId" | "userId" | "chatId" | "createdAt" | "updatedAt", ExtArgs["result"]["draftMessage"]>
  export type DraftMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | DraftMessage$filesArgs<ExtArgs>
    repliedToLinks?: boolean | DraftMessage$repliedToLinksArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    _count?: boolean | DraftMessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DraftMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type DraftMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $DraftMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DraftMessage"
    objects: {
      files: Prisma.$FileMessagePayload<ExtArgs>[]
      repliedToLinks: Prisma.$DraftMessageReplyPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string | null
      isForwarded: boolean
      editId: string | null
      filesEditId: string[]
      userId: string
      chatId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["draftMessage"]>
    composites: {}
  }

  type DraftMessageGetPayload<S extends boolean | null | undefined | DraftMessageDefaultArgs> = $Result.GetResult<Prisma.$DraftMessagePayload, S>

  type DraftMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DraftMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DraftMessageCountAggregateInputType | true
    }

  export interface DraftMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DraftMessage'], meta: { name: 'DraftMessage' } }
    /**
     * Find zero or one DraftMessage that matches the filter.
     * @param {DraftMessageFindUniqueArgs} args - Arguments to find a DraftMessage
     * @example
     * // Get one DraftMessage
     * const draftMessage = await prisma.draftMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DraftMessageFindUniqueArgs>(args: SelectSubset<T, DraftMessageFindUniqueArgs<ExtArgs>>): Prisma__DraftMessageClient<$Result.GetResult<Prisma.$DraftMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DraftMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DraftMessageFindUniqueOrThrowArgs} args - Arguments to find a DraftMessage
     * @example
     * // Get one DraftMessage
     * const draftMessage = await prisma.draftMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DraftMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, DraftMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DraftMessageClient<$Result.GetResult<Prisma.$DraftMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DraftMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftMessageFindFirstArgs} args - Arguments to find a DraftMessage
     * @example
     * // Get one DraftMessage
     * const draftMessage = await prisma.draftMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DraftMessageFindFirstArgs>(args?: SelectSubset<T, DraftMessageFindFirstArgs<ExtArgs>>): Prisma__DraftMessageClient<$Result.GetResult<Prisma.$DraftMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DraftMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftMessageFindFirstOrThrowArgs} args - Arguments to find a DraftMessage
     * @example
     * // Get one DraftMessage
     * const draftMessage = await prisma.draftMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DraftMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, DraftMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__DraftMessageClient<$Result.GetResult<Prisma.$DraftMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DraftMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DraftMessages
     * const draftMessages = await prisma.draftMessage.findMany()
     * 
     * // Get first 10 DraftMessages
     * const draftMessages = await prisma.draftMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const draftMessageWithIdOnly = await prisma.draftMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DraftMessageFindManyArgs>(args?: SelectSubset<T, DraftMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DraftMessage.
     * @param {DraftMessageCreateArgs} args - Arguments to create a DraftMessage.
     * @example
     * // Create one DraftMessage
     * const DraftMessage = await prisma.draftMessage.create({
     *   data: {
     *     // ... data to create a DraftMessage
     *   }
     * })
     * 
     */
    create<T extends DraftMessageCreateArgs>(args: SelectSubset<T, DraftMessageCreateArgs<ExtArgs>>): Prisma__DraftMessageClient<$Result.GetResult<Prisma.$DraftMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DraftMessages.
     * @param {DraftMessageCreateManyArgs} args - Arguments to create many DraftMessages.
     * @example
     * // Create many DraftMessages
     * const draftMessage = await prisma.draftMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DraftMessageCreateManyArgs>(args?: SelectSubset<T, DraftMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DraftMessages and returns the data saved in the database.
     * @param {DraftMessageCreateManyAndReturnArgs} args - Arguments to create many DraftMessages.
     * @example
     * // Create many DraftMessages
     * const draftMessage = await prisma.draftMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DraftMessages and only return the `id`
     * const draftMessageWithIdOnly = await prisma.draftMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DraftMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, DraftMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DraftMessage.
     * @param {DraftMessageDeleteArgs} args - Arguments to delete one DraftMessage.
     * @example
     * // Delete one DraftMessage
     * const DraftMessage = await prisma.draftMessage.delete({
     *   where: {
     *     // ... filter to delete one DraftMessage
     *   }
     * })
     * 
     */
    delete<T extends DraftMessageDeleteArgs>(args: SelectSubset<T, DraftMessageDeleteArgs<ExtArgs>>): Prisma__DraftMessageClient<$Result.GetResult<Prisma.$DraftMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DraftMessage.
     * @param {DraftMessageUpdateArgs} args - Arguments to update one DraftMessage.
     * @example
     * // Update one DraftMessage
     * const draftMessage = await prisma.draftMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DraftMessageUpdateArgs>(args: SelectSubset<T, DraftMessageUpdateArgs<ExtArgs>>): Prisma__DraftMessageClient<$Result.GetResult<Prisma.$DraftMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DraftMessages.
     * @param {DraftMessageDeleteManyArgs} args - Arguments to filter DraftMessages to delete.
     * @example
     * // Delete a few DraftMessages
     * const { count } = await prisma.draftMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DraftMessageDeleteManyArgs>(args?: SelectSubset<T, DraftMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DraftMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DraftMessages
     * const draftMessage = await prisma.draftMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DraftMessageUpdateManyArgs>(args: SelectSubset<T, DraftMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DraftMessages and returns the data updated in the database.
     * @param {DraftMessageUpdateManyAndReturnArgs} args - Arguments to update many DraftMessages.
     * @example
     * // Update many DraftMessages
     * const draftMessage = await prisma.draftMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DraftMessages and only return the `id`
     * const draftMessageWithIdOnly = await prisma.draftMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends DraftMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, DraftMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DraftMessage.
     * @param {DraftMessageUpsertArgs} args - Arguments to update or create a DraftMessage.
     * @example
     * // Update or create a DraftMessage
     * const draftMessage = await prisma.draftMessage.upsert({
     *   create: {
     *     // ... data to create a DraftMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DraftMessage we want to update
     *   }
     * })
     */
    upsert<T extends DraftMessageUpsertArgs>(args: SelectSubset<T, DraftMessageUpsertArgs<ExtArgs>>): Prisma__DraftMessageClient<$Result.GetResult<Prisma.$DraftMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DraftMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftMessageCountArgs} args - Arguments to filter DraftMessages to count.
     * @example
     * // Count the number of DraftMessages
     * const count = await prisma.draftMessage.count({
     *   where: {
     *     // ... the filter for the DraftMessages we want to count
     *   }
     * })
    **/
    count<T extends DraftMessageCountArgs>(
      args?: Subset<T, DraftMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DraftMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DraftMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DraftMessageAggregateArgs>(args: Subset<T, DraftMessageAggregateArgs>): Prisma.PrismaPromise<GetDraftMessageAggregateType<T>>

    /**
     * Group by DraftMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftMessageGroupByArgs} args - Group by arguments.
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
      T extends DraftMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DraftMessageGroupByArgs['orderBy'] }
        : { orderBy?: DraftMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DraftMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDraftMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DraftMessage model
   */
  readonly fields: DraftMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DraftMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DraftMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    files<T extends DraftMessage$filesArgs<ExtArgs> = {}>(args?: Subset<T, DraftMessage$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repliedToLinks<T extends DraftMessage$repliedToLinksArgs<ExtArgs> = {}>(args?: Subset<T, DraftMessage$repliedToLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftMessageReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DraftMessage model
   */
  interface DraftMessageFieldRefs {
    readonly id: FieldRef<"DraftMessage", 'String'>
    readonly text: FieldRef<"DraftMessage", 'String'>
    readonly isForwarded: FieldRef<"DraftMessage", 'Boolean'>
    readonly editId: FieldRef<"DraftMessage", 'String'>
    readonly filesEditId: FieldRef<"DraftMessage", 'String[]'>
    readonly userId: FieldRef<"DraftMessage", 'String'>
    readonly chatId: FieldRef<"DraftMessage", 'String'>
    readonly createdAt: FieldRef<"DraftMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"DraftMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DraftMessage findUnique
   */
  export type DraftMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessage
     */
    select?: DraftMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessage
     */
    omit?: DraftMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageInclude<ExtArgs> | null
    /**
     * Filter, which DraftMessage to fetch.
     */
    where: DraftMessageWhereUniqueInput
  }

  /**
   * DraftMessage findUniqueOrThrow
   */
  export type DraftMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessage
     */
    select?: DraftMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessage
     */
    omit?: DraftMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageInclude<ExtArgs> | null
    /**
     * Filter, which DraftMessage to fetch.
     */
    where: DraftMessageWhereUniqueInput
  }

  /**
   * DraftMessage findFirst
   */
  export type DraftMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessage
     */
    select?: DraftMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessage
     */
    omit?: DraftMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageInclude<ExtArgs> | null
    /**
     * Filter, which DraftMessage to fetch.
     */
    where?: DraftMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DraftMessages to fetch.
     */
    orderBy?: DraftMessageOrderByWithRelationInput | DraftMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DraftMessages.
     */
    cursor?: DraftMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DraftMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DraftMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DraftMessages.
     */
    distinct?: DraftMessageScalarFieldEnum | DraftMessageScalarFieldEnum[]
  }

  /**
   * DraftMessage findFirstOrThrow
   */
  export type DraftMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessage
     */
    select?: DraftMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessage
     */
    omit?: DraftMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageInclude<ExtArgs> | null
    /**
     * Filter, which DraftMessage to fetch.
     */
    where?: DraftMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DraftMessages to fetch.
     */
    orderBy?: DraftMessageOrderByWithRelationInput | DraftMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DraftMessages.
     */
    cursor?: DraftMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DraftMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DraftMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DraftMessages.
     */
    distinct?: DraftMessageScalarFieldEnum | DraftMessageScalarFieldEnum[]
  }

  /**
   * DraftMessage findMany
   */
  export type DraftMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessage
     */
    select?: DraftMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessage
     */
    omit?: DraftMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageInclude<ExtArgs> | null
    /**
     * Filter, which DraftMessages to fetch.
     */
    where?: DraftMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DraftMessages to fetch.
     */
    orderBy?: DraftMessageOrderByWithRelationInput | DraftMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DraftMessages.
     */
    cursor?: DraftMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DraftMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DraftMessages.
     */
    skip?: number
    distinct?: DraftMessageScalarFieldEnum | DraftMessageScalarFieldEnum[]
  }

  /**
   * DraftMessage create
   */
  export type DraftMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessage
     */
    select?: DraftMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessage
     */
    omit?: DraftMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a DraftMessage.
     */
    data: XOR<DraftMessageCreateInput, DraftMessageUncheckedCreateInput>
  }

  /**
   * DraftMessage createMany
   */
  export type DraftMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DraftMessages.
     */
    data: DraftMessageCreateManyInput | DraftMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DraftMessage createManyAndReturn
   */
  export type DraftMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessage
     */
    select?: DraftMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessage
     */
    omit?: DraftMessageOmit<ExtArgs> | null
    /**
     * The data used to create many DraftMessages.
     */
    data: DraftMessageCreateManyInput | DraftMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DraftMessage update
   */
  export type DraftMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessage
     */
    select?: DraftMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessage
     */
    omit?: DraftMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a DraftMessage.
     */
    data: XOR<DraftMessageUpdateInput, DraftMessageUncheckedUpdateInput>
    /**
     * Choose, which DraftMessage to update.
     */
    where: DraftMessageWhereUniqueInput
  }

  /**
   * DraftMessage updateMany
   */
  export type DraftMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DraftMessages.
     */
    data: XOR<DraftMessageUpdateManyMutationInput, DraftMessageUncheckedUpdateManyInput>
    /**
     * Filter which DraftMessages to update
     */
    where?: DraftMessageWhereInput
    /**
     * Limit how many DraftMessages to update.
     */
    limit?: number
  }

  /**
   * DraftMessage updateManyAndReturn
   */
  export type DraftMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessage
     */
    select?: DraftMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessage
     */
    omit?: DraftMessageOmit<ExtArgs> | null
    /**
     * The data used to update DraftMessages.
     */
    data: XOR<DraftMessageUpdateManyMutationInput, DraftMessageUncheckedUpdateManyInput>
    /**
     * Filter which DraftMessages to update
     */
    where?: DraftMessageWhereInput
    /**
     * Limit how many DraftMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DraftMessage upsert
   */
  export type DraftMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessage
     */
    select?: DraftMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessage
     */
    omit?: DraftMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the DraftMessage to update in case it exists.
     */
    where: DraftMessageWhereUniqueInput
    /**
     * In case the DraftMessage found by the `where` argument doesn't exist, create a new DraftMessage with this data.
     */
    create: XOR<DraftMessageCreateInput, DraftMessageUncheckedCreateInput>
    /**
     * In case the DraftMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DraftMessageUpdateInput, DraftMessageUncheckedUpdateInput>
  }

  /**
   * DraftMessage delete
   */
  export type DraftMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessage
     */
    select?: DraftMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessage
     */
    omit?: DraftMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageInclude<ExtArgs> | null
    /**
     * Filter which DraftMessage to delete.
     */
    where: DraftMessageWhereUniqueInput
  }

  /**
   * DraftMessage deleteMany
   */
  export type DraftMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DraftMessages to delete
     */
    where?: DraftMessageWhereInput
    /**
     * Limit how many DraftMessages to delete.
     */
    limit?: number
  }

  /**
   * DraftMessage.files
   */
  export type DraftMessage$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * DraftMessage.repliedToLinks
   */
  export type DraftMessage$repliedToLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessageReply
     */
    select?: DraftMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessageReply
     */
    omit?: DraftMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageReplyInclude<ExtArgs> | null
    where?: DraftMessageReplyWhereInput
    orderBy?: DraftMessageReplyOrderByWithRelationInput | DraftMessageReplyOrderByWithRelationInput[]
    cursor?: DraftMessageReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DraftMessageReplyScalarFieldEnum | DraftMessageReplyScalarFieldEnum[]
  }

  /**
   * DraftMessage without action
   */
  export type DraftMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessage
     */
    select?: DraftMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessage
     */
    omit?: DraftMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageInclude<ExtArgs> | null
  }


  /**
   * Model DraftMessageReply
   */

  export type AggregateDraftMessageReply = {
    _count: DraftMessageReplyCountAggregateOutputType | null
    _min: DraftMessageReplyMinAggregateOutputType | null
    _max: DraftMessageReplyMaxAggregateOutputType | null
  }

  export type DraftMessageReplyMinAggregateOutputType = {
    id: string | null
    draftMessageId: string | null
    repliedToId: string | null
  }

  export type DraftMessageReplyMaxAggregateOutputType = {
    id: string | null
    draftMessageId: string | null
    repliedToId: string | null
  }

  export type DraftMessageReplyCountAggregateOutputType = {
    id: number
    draftMessageId: number
    repliedToId: number
    _all: number
  }


  export type DraftMessageReplyMinAggregateInputType = {
    id?: true
    draftMessageId?: true
    repliedToId?: true
  }

  export type DraftMessageReplyMaxAggregateInputType = {
    id?: true
    draftMessageId?: true
    repliedToId?: true
  }

  export type DraftMessageReplyCountAggregateInputType = {
    id?: true
    draftMessageId?: true
    repliedToId?: true
    _all?: true
  }

  export type DraftMessageReplyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DraftMessageReply to aggregate.
     */
    where?: DraftMessageReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DraftMessageReplies to fetch.
     */
    orderBy?: DraftMessageReplyOrderByWithRelationInput | DraftMessageReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DraftMessageReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DraftMessageReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DraftMessageReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DraftMessageReplies
    **/
    _count?: true | DraftMessageReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DraftMessageReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DraftMessageReplyMaxAggregateInputType
  }

  export type GetDraftMessageReplyAggregateType<T extends DraftMessageReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateDraftMessageReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDraftMessageReply[P]>
      : GetScalarType<T[P], AggregateDraftMessageReply[P]>
  }




  export type DraftMessageReplyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftMessageReplyWhereInput
    orderBy?: DraftMessageReplyOrderByWithAggregationInput | DraftMessageReplyOrderByWithAggregationInput[]
    by: DraftMessageReplyScalarFieldEnum[] | DraftMessageReplyScalarFieldEnum
    having?: DraftMessageReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DraftMessageReplyCountAggregateInputType | true
    _min?: DraftMessageReplyMinAggregateInputType
    _max?: DraftMessageReplyMaxAggregateInputType
  }

  export type DraftMessageReplyGroupByOutputType = {
    id: string
    draftMessageId: string
    repliedToId: string
    _count: DraftMessageReplyCountAggregateOutputType | null
    _min: DraftMessageReplyMinAggregateOutputType | null
    _max: DraftMessageReplyMaxAggregateOutputType | null
  }

  type GetDraftMessageReplyGroupByPayload<T extends DraftMessageReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DraftMessageReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DraftMessageReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DraftMessageReplyGroupByOutputType[P]>
            : GetScalarType<T[P], DraftMessageReplyGroupByOutputType[P]>
        }
      >
    >


  export type DraftMessageReplySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    draftMessageId?: boolean
    repliedToId?: boolean
    draftMessage?: boolean | DraftMessageDefaultArgs<ExtArgs>
    repliedTo?: boolean | ChatMessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draftMessageReply"]>

  export type DraftMessageReplySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    draftMessageId?: boolean
    repliedToId?: boolean
    draftMessage?: boolean | DraftMessageDefaultArgs<ExtArgs>
    repliedTo?: boolean | ChatMessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draftMessageReply"]>

  export type DraftMessageReplySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    draftMessageId?: boolean
    repliedToId?: boolean
    draftMessage?: boolean | DraftMessageDefaultArgs<ExtArgs>
    repliedTo?: boolean | ChatMessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draftMessageReply"]>

  export type DraftMessageReplySelectScalar = {
    id?: boolean
    draftMessageId?: boolean
    repliedToId?: boolean
  }

  export type DraftMessageReplyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "draftMessageId" | "repliedToId", ExtArgs["result"]["draftMessageReply"]>
  export type DraftMessageReplyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draftMessage?: boolean | DraftMessageDefaultArgs<ExtArgs>
    repliedTo?: boolean | ChatMessageDefaultArgs<ExtArgs>
  }
  export type DraftMessageReplyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draftMessage?: boolean | DraftMessageDefaultArgs<ExtArgs>
    repliedTo?: boolean | ChatMessageDefaultArgs<ExtArgs>
  }
  export type DraftMessageReplyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draftMessage?: boolean | DraftMessageDefaultArgs<ExtArgs>
    repliedTo?: boolean | ChatMessageDefaultArgs<ExtArgs>
  }

  export type $DraftMessageReplyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DraftMessageReply"
    objects: {
      draftMessage: Prisma.$DraftMessagePayload<ExtArgs>
      repliedTo: Prisma.$ChatMessagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      draftMessageId: string
      repliedToId: string
    }, ExtArgs["result"]["draftMessageReply"]>
    composites: {}
  }

  type DraftMessageReplyGetPayload<S extends boolean | null | undefined | DraftMessageReplyDefaultArgs> = $Result.GetResult<Prisma.$DraftMessageReplyPayload, S>

  type DraftMessageReplyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DraftMessageReplyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DraftMessageReplyCountAggregateInputType | true
    }

  export interface DraftMessageReplyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DraftMessageReply'], meta: { name: 'DraftMessageReply' } }
    /**
     * Find zero or one DraftMessageReply that matches the filter.
     * @param {DraftMessageReplyFindUniqueArgs} args - Arguments to find a DraftMessageReply
     * @example
     * // Get one DraftMessageReply
     * const draftMessageReply = await prisma.draftMessageReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DraftMessageReplyFindUniqueArgs>(args: SelectSubset<T, DraftMessageReplyFindUniqueArgs<ExtArgs>>): Prisma__DraftMessageReplyClient<$Result.GetResult<Prisma.$DraftMessageReplyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DraftMessageReply that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DraftMessageReplyFindUniqueOrThrowArgs} args - Arguments to find a DraftMessageReply
     * @example
     * // Get one DraftMessageReply
     * const draftMessageReply = await prisma.draftMessageReply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DraftMessageReplyFindUniqueOrThrowArgs>(args: SelectSubset<T, DraftMessageReplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DraftMessageReplyClient<$Result.GetResult<Prisma.$DraftMessageReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DraftMessageReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftMessageReplyFindFirstArgs} args - Arguments to find a DraftMessageReply
     * @example
     * // Get one DraftMessageReply
     * const draftMessageReply = await prisma.draftMessageReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DraftMessageReplyFindFirstArgs>(args?: SelectSubset<T, DraftMessageReplyFindFirstArgs<ExtArgs>>): Prisma__DraftMessageReplyClient<$Result.GetResult<Prisma.$DraftMessageReplyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DraftMessageReply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftMessageReplyFindFirstOrThrowArgs} args - Arguments to find a DraftMessageReply
     * @example
     * // Get one DraftMessageReply
     * const draftMessageReply = await prisma.draftMessageReply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DraftMessageReplyFindFirstOrThrowArgs>(args?: SelectSubset<T, DraftMessageReplyFindFirstOrThrowArgs<ExtArgs>>): Prisma__DraftMessageReplyClient<$Result.GetResult<Prisma.$DraftMessageReplyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DraftMessageReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftMessageReplyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DraftMessageReplies
     * const draftMessageReplies = await prisma.draftMessageReply.findMany()
     * 
     * // Get first 10 DraftMessageReplies
     * const draftMessageReplies = await prisma.draftMessageReply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const draftMessageReplyWithIdOnly = await prisma.draftMessageReply.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DraftMessageReplyFindManyArgs>(args?: SelectSubset<T, DraftMessageReplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftMessageReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DraftMessageReply.
     * @param {DraftMessageReplyCreateArgs} args - Arguments to create a DraftMessageReply.
     * @example
     * // Create one DraftMessageReply
     * const DraftMessageReply = await prisma.draftMessageReply.create({
     *   data: {
     *     // ... data to create a DraftMessageReply
     *   }
     * })
     * 
     */
    create<T extends DraftMessageReplyCreateArgs>(args: SelectSubset<T, DraftMessageReplyCreateArgs<ExtArgs>>): Prisma__DraftMessageReplyClient<$Result.GetResult<Prisma.$DraftMessageReplyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DraftMessageReplies.
     * @param {DraftMessageReplyCreateManyArgs} args - Arguments to create many DraftMessageReplies.
     * @example
     * // Create many DraftMessageReplies
     * const draftMessageReply = await prisma.draftMessageReply.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DraftMessageReplyCreateManyArgs>(args?: SelectSubset<T, DraftMessageReplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DraftMessageReplies and returns the data saved in the database.
     * @param {DraftMessageReplyCreateManyAndReturnArgs} args - Arguments to create many DraftMessageReplies.
     * @example
     * // Create many DraftMessageReplies
     * const draftMessageReply = await prisma.draftMessageReply.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DraftMessageReplies and only return the `id`
     * const draftMessageReplyWithIdOnly = await prisma.draftMessageReply.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DraftMessageReplyCreateManyAndReturnArgs>(args?: SelectSubset<T, DraftMessageReplyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftMessageReplyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DraftMessageReply.
     * @param {DraftMessageReplyDeleteArgs} args - Arguments to delete one DraftMessageReply.
     * @example
     * // Delete one DraftMessageReply
     * const DraftMessageReply = await prisma.draftMessageReply.delete({
     *   where: {
     *     // ... filter to delete one DraftMessageReply
     *   }
     * })
     * 
     */
    delete<T extends DraftMessageReplyDeleteArgs>(args: SelectSubset<T, DraftMessageReplyDeleteArgs<ExtArgs>>): Prisma__DraftMessageReplyClient<$Result.GetResult<Prisma.$DraftMessageReplyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DraftMessageReply.
     * @param {DraftMessageReplyUpdateArgs} args - Arguments to update one DraftMessageReply.
     * @example
     * // Update one DraftMessageReply
     * const draftMessageReply = await prisma.draftMessageReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DraftMessageReplyUpdateArgs>(args: SelectSubset<T, DraftMessageReplyUpdateArgs<ExtArgs>>): Prisma__DraftMessageReplyClient<$Result.GetResult<Prisma.$DraftMessageReplyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DraftMessageReplies.
     * @param {DraftMessageReplyDeleteManyArgs} args - Arguments to filter DraftMessageReplies to delete.
     * @example
     * // Delete a few DraftMessageReplies
     * const { count } = await prisma.draftMessageReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DraftMessageReplyDeleteManyArgs>(args?: SelectSubset<T, DraftMessageReplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DraftMessageReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftMessageReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DraftMessageReplies
     * const draftMessageReply = await prisma.draftMessageReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DraftMessageReplyUpdateManyArgs>(args: SelectSubset<T, DraftMessageReplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DraftMessageReplies and returns the data updated in the database.
     * @param {DraftMessageReplyUpdateManyAndReturnArgs} args - Arguments to update many DraftMessageReplies.
     * @example
     * // Update many DraftMessageReplies
     * const draftMessageReply = await prisma.draftMessageReply.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DraftMessageReplies and only return the `id`
     * const draftMessageReplyWithIdOnly = await prisma.draftMessageReply.updateManyAndReturn({
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
    updateManyAndReturn<T extends DraftMessageReplyUpdateManyAndReturnArgs>(args: SelectSubset<T, DraftMessageReplyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftMessageReplyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DraftMessageReply.
     * @param {DraftMessageReplyUpsertArgs} args - Arguments to update or create a DraftMessageReply.
     * @example
     * // Update or create a DraftMessageReply
     * const draftMessageReply = await prisma.draftMessageReply.upsert({
     *   create: {
     *     // ... data to create a DraftMessageReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DraftMessageReply we want to update
     *   }
     * })
     */
    upsert<T extends DraftMessageReplyUpsertArgs>(args: SelectSubset<T, DraftMessageReplyUpsertArgs<ExtArgs>>): Prisma__DraftMessageReplyClient<$Result.GetResult<Prisma.$DraftMessageReplyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DraftMessageReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftMessageReplyCountArgs} args - Arguments to filter DraftMessageReplies to count.
     * @example
     * // Count the number of DraftMessageReplies
     * const count = await prisma.draftMessageReply.count({
     *   where: {
     *     // ... the filter for the DraftMessageReplies we want to count
     *   }
     * })
    **/
    count<T extends DraftMessageReplyCountArgs>(
      args?: Subset<T, DraftMessageReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DraftMessageReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DraftMessageReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftMessageReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DraftMessageReplyAggregateArgs>(args: Subset<T, DraftMessageReplyAggregateArgs>): Prisma.PrismaPromise<GetDraftMessageReplyAggregateType<T>>

    /**
     * Group by DraftMessageReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftMessageReplyGroupByArgs} args - Group by arguments.
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
      T extends DraftMessageReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DraftMessageReplyGroupByArgs['orderBy'] }
        : { orderBy?: DraftMessageReplyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DraftMessageReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDraftMessageReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DraftMessageReply model
   */
  readonly fields: DraftMessageReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DraftMessageReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DraftMessageReplyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    draftMessage<T extends DraftMessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DraftMessageDefaultArgs<ExtArgs>>): Prisma__DraftMessageClient<$Result.GetResult<Prisma.$DraftMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DraftMessageReply model
   */
  interface DraftMessageReplyFieldRefs {
    readonly id: FieldRef<"DraftMessageReply", 'String'>
    readonly draftMessageId: FieldRef<"DraftMessageReply", 'String'>
    readonly repliedToId: FieldRef<"DraftMessageReply", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DraftMessageReply findUnique
   */
  export type DraftMessageReplyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessageReply
     */
    select?: DraftMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessageReply
     */
    omit?: DraftMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which DraftMessageReply to fetch.
     */
    where: DraftMessageReplyWhereUniqueInput
  }

  /**
   * DraftMessageReply findUniqueOrThrow
   */
  export type DraftMessageReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessageReply
     */
    select?: DraftMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessageReply
     */
    omit?: DraftMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which DraftMessageReply to fetch.
     */
    where: DraftMessageReplyWhereUniqueInput
  }

  /**
   * DraftMessageReply findFirst
   */
  export type DraftMessageReplyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessageReply
     */
    select?: DraftMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessageReply
     */
    omit?: DraftMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which DraftMessageReply to fetch.
     */
    where?: DraftMessageReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DraftMessageReplies to fetch.
     */
    orderBy?: DraftMessageReplyOrderByWithRelationInput | DraftMessageReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DraftMessageReplies.
     */
    cursor?: DraftMessageReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DraftMessageReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DraftMessageReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DraftMessageReplies.
     */
    distinct?: DraftMessageReplyScalarFieldEnum | DraftMessageReplyScalarFieldEnum[]
  }

  /**
   * DraftMessageReply findFirstOrThrow
   */
  export type DraftMessageReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessageReply
     */
    select?: DraftMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessageReply
     */
    omit?: DraftMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which DraftMessageReply to fetch.
     */
    where?: DraftMessageReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DraftMessageReplies to fetch.
     */
    orderBy?: DraftMessageReplyOrderByWithRelationInput | DraftMessageReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DraftMessageReplies.
     */
    cursor?: DraftMessageReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DraftMessageReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DraftMessageReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DraftMessageReplies.
     */
    distinct?: DraftMessageReplyScalarFieldEnum | DraftMessageReplyScalarFieldEnum[]
  }

  /**
   * DraftMessageReply findMany
   */
  export type DraftMessageReplyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessageReply
     */
    select?: DraftMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessageReply
     */
    omit?: DraftMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which DraftMessageReplies to fetch.
     */
    where?: DraftMessageReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DraftMessageReplies to fetch.
     */
    orderBy?: DraftMessageReplyOrderByWithRelationInput | DraftMessageReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DraftMessageReplies.
     */
    cursor?: DraftMessageReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DraftMessageReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DraftMessageReplies.
     */
    skip?: number
    distinct?: DraftMessageReplyScalarFieldEnum | DraftMessageReplyScalarFieldEnum[]
  }

  /**
   * DraftMessageReply create
   */
  export type DraftMessageReplyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessageReply
     */
    select?: DraftMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessageReply
     */
    omit?: DraftMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a DraftMessageReply.
     */
    data: XOR<DraftMessageReplyCreateInput, DraftMessageReplyUncheckedCreateInput>
  }

  /**
   * DraftMessageReply createMany
   */
  export type DraftMessageReplyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DraftMessageReplies.
     */
    data: DraftMessageReplyCreateManyInput | DraftMessageReplyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DraftMessageReply createManyAndReturn
   */
  export type DraftMessageReplyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessageReply
     */
    select?: DraftMessageReplySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessageReply
     */
    omit?: DraftMessageReplyOmit<ExtArgs> | null
    /**
     * The data used to create many DraftMessageReplies.
     */
    data: DraftMessageReplyCreateManyInput | DraftMessageReplyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageReplyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DraftMessageReply update
   */
  export type DraftMessageReplyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessageReply
     */
    select?: DraftMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessageReply
     */
    omit?: DraftMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a DraftMessageReply.
     */
    data: XOR<DraftMessageReplyUpdateInput, DraftMessageReplyUncheckedUpdateInput>
    /**
     * Choose, which DraftMessageReply to update.
     */
    where: DraftMessageReplyWhereUniqueInput
  }

  /**
   * DraftMessageReply updateMany
   */
  export type DraftMessageReplyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DraftMessageReplies.
     */
    data: XOR<DraftMessageReplyUpdateManyMutationInput, DraftMessageReplyUncheckedUpdateManyInput>
    /**
     * Filter which DraftMessageReplies to update
     */
    where?: DraftMessageReplyWhereInput
    /**
     * Limit how many DraftMessageReplies to update.
     */
    limit?: number
  }

  /**
   * DraftMessageReply updateManyAndReturn
   */
  export type DraftMessageReplyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessageReply
     */
    select?: DraftMessageReplySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessageReply
     */
    omit?: DraftMessageReplyOmit<ExtArgs> | null
    /**
     * The data used to update DraftMessageReplies.
     */
    data: XOR<DraftMessageReplyUpdateManyMutationInput, DraftMessageReplyUncheckedUpdateManyInput>
    /**
     * Filter which DraftMessageReplies to update
     */
    where?: DraftMessageReplyWhereInput
    /**
     * Limit how many DraftMessageReplies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageReplyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DraftMessageReply upsert
   */
  export type DraftMessageReplyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessageReply
     */
    select?: DraftMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessageReply
     */
    omit?: DraftMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the DraftMessageReply to update in case it exists.
     */
    where: DraftMessageReplyWhereUniqueInput
    /**
     * In case the DraftMessageReply found by the `where` argument doesn't exist, create a new DraftMessageReply with this data.
     */
    create: XOR<DraftMessageReplyCreateInput, DraftMessageReplyUncheckedCreateInput>
    /**
     * In case the DraftMessageReply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DraftMessageReplyUpdateInput, DraftMessageReplyUncheckedUpdateInput>
  }

  /**
   * DraftMessageReply delete
   */
  export type DraftMessageReplyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessageReply
     */
    select?: DraftMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessageReply
     */
    omit?: DraftMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageReplyInclude<ExtArgs> | null
    /**
     * Filter which DraftMessageReply to delete.
     */
    where: DraftMessageReplyWhereUniqueInput
  }

  /**
   * DraftMessageReply deleteMany
   */
  export type DraftMessageReplyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DraftMessageReplies to delete
     */
    where?: DraftMessageReplyWhereInput
    /**
     * Limit how many DraftMessageReplies to delete.
     */
    limit?: number
  }

  /**
   * DraftMessageReply without action
   */
  export type DraftMessageReplyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessageReply
     */
    select?: DraftMessageReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessageReply
     */
    omit?: DraftMessageReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageReplyInclude<ExtArgs> | null
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
    draftMessageId: string | null
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
    draftMessageId: string | null
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
    draftMessageId: number
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
    draftMessageId?: true
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
    draftMessageId?: true
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
    draftMessageId?: true
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
    chatMessageId: string | null
    draftMessageId: string | null
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
    draftMessageId?: boolean
    userId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatMessage?: boolean | FileMessage$chatMessageArgs<ExtArgs>
    draftMessage?: boolean | FileMessage$draftMessageArgs<ExtArgs>
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
    draftMessageId?: boolean
    userId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatMessage?: boolean | FileMessage$chatMessageArgs<ExtArgs>
    draftMessage?: boolean | FileMessage$draftMessageArgs<ExtArgs>
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
    draftMessageId?: boolean
    userId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatMessage?: boolean | FileMessage$chatMessageArgs<ExtArgs>
    draftMessage?: boolean | FileMessage$draftMessageArgs<ExtArgs>
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
    draftMessageId?: boolean
    userId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileUrl" | "fileName" | "fileFullName" | "fileSize" | "fileFormat" | "chatMessageId" | "draftMessageId" | "userId" | "chatId" | "createdAt" | "updatedAt", ExtArgs["result"]["fileMessage"]>
  export type FileMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessage?: boolean | FileMessage$chatMessageArgs<ExtArgs>
    draftMessage?: boolean | FileMessage$draftMessageArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type FileMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessage?: boolean | FileMessage$chatMessageArgs<ExtArgs>
    draftMessage?: boolean | FileMessage$draftMessageArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type FileMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessage?: boolean | FileMessage$chatMessageArgs<ExtArgs>
    draftMessage?: boolean | FileMessage$draftMessageArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $FileMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileMessage"
    objects: {
      chatMessage: Prisma.$ChatMessagePayload<ExtArgs> | null
      draftMessage: Prisma.$DraftMessagePayload<ExtArgs> | null
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
      chatMessageId: string | null
      draftMessageId: string | null
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
    chatMessage<T extends FileMessage$chatMessageArgs<ExtArgs> = {}>(args?: Subset<T, FileMessage$chatMessageArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    draftMessage<T extends FileMessage$draftMessageArgs<ExtArgs> = {}>(args?: Subset<T, FileMessage$draftMessageArgs<ExtArgs>>): Prisma__DraftMessageClient<$Result.GetResult<Prisma.$DraftMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly draftMessageId: FieldRef<"FileMessage", 'String'>
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
   * FileMessage.chatMessage
   */
  export type FileMessage$chatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * FileMessage.draftMessage
   */
  export type FileMessage$draftMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessage
     */
    select?: DraftMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessage
     */
    omit?: DraftMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageInclude<ExtArgs> | null
    where?: DraftMessageWhereInput
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
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    groupName: string | null
    avatarUrl: string | null
    isDeleted: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    groupName: string | null
    avatarUrl: string | null
    isDeleted: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    groupName: number
    avatarUrl: number
    isDeleted: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    groupName?: true
    avatarUrl?: true
    isDeleted?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    groupName?: true
    avatarUrl?: true
    isDeleted?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    groupName?: true
    avatarUrl?: true
    isDeleted?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    groupName: string
    avatarUrl: string | null
    isDeleted: boolean
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupName?: boolean
    avatarUrl?: boolean
    isDeleted?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Group$membersArgs<ExtArgs>
    chats?: boolean | Group$chatsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupName?: boolean
    avatarUrl?: boolean
    isDeleted?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupName?: boolean
    avatarUrl?: boolean
    isDeleted?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    groupName?: boolean
    avatarUrl?: boolean
    isDeleted?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupName" | "avatarUrl" | "isDeleted" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Group$membersArgs<ExtArgs>
    chats?: boolean | Group$chatsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      members: Prisma.$GroupMemberPayload<ExtArgs>[]
      chats: Prisma.$ChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupName: string
      avatarUrl: string | null
      isDeleted: boolean
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Group$membersArgs<ExtArgs> = {}>(args?: Subset<T, Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends Group$chatsArgs<ExtArgs> = {}>(args?: Subset<T, Group$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly groupName: FieldRef<"Group", 'String'>
    readonly avatarUrl: FieldRef<"Group", 'String'>
    readonly isDeleted: FieldRef<"Group", 'Boolean'>
    readonly description: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.members
   */
  export type Group$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * Group.chats
   */
  export type Group$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
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
    description: string | null
    groupId: string | null
    lastMessageId: string | null
    pinnedMessageId: string | null
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
    description: string | null
    groupId: string | null
    lastMessageId: string | null
    pinnedMessageId: string | null
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
    description: number
    groupId: number
    lastMessageId: number
    pinnedMessageId: number
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
    description?: true
    groupId?: true
    lastMessageId?: true
    pinnedMessageId?: true
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
    description?: true
    groupId?: true
    lastMessageId?: true
    pinnedMessageId?: true
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
    description?: true
    groupId?: true
    lastMessageId?: true
    pinnedMessageId?: true
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
    description: string | null
    groupId: string | null
    lastMessageId: string | null
    pinnedMessageId: string | null
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
    description?: boolean
    groupId?: boolean
    lastMessageId?: boolean
    pinnedMessageId?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | Chat$groupArgs<ExtArgs>
    lastMessage?: boolean | Chat$lastMessageArgs<ExtArgs>
    pinnedMessage?: boolean | Chat$pinnedMessageArgs<ExtArgs>
    pinnedByUser?: boolean | Chat$pinnedByUserArgs<ExtArgs>
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
    description?: boolean
    groupId?: boolean
    lastMessageId?: boolean
    pinnedMessageId?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | Chat$groupArgs<ExtArgs>
    lastMessage?: boolean | Chat$lastMessageArgs<ExtArgs>
    pinnedMessage?: boolean | Chat$pinnedMessageArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatName?: boolean
    isGroup?: boolean
    avatarUrl?: boolean
    isDeleted?: boolean
    description?: boolean
    groupId?: boolean
    lastMessageId?: boolean
    pinnedMessageId?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | Chat$groupArgs<ExtArgs>
    lastMessage?: boolean | Chat$lastMessageArgs<ExtArgs>
    pinnedMessage?: boolean | Chat$pinnedMessageArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    chatName?: boolean
    isGroup?: boolean
    avatarUrl?: boolean
    isDeleted?: boolean
    description?: boolean
    groupId?: boolean
    lastMessageId?: boolean
    pinnedMessageId?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatName" | "isGroup" | "avatarUrl" | "isDeleted" | "description" | "groupId" | "lastMessageId" | "pinnedMessageId" | "lastMessageAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | Chat$groupArgs<ExtArgs>
    lastMessage?: boolean | Chat$lastMessageArgs<ExtArgs>
    pinnedMessage?: boolean | Chat$pinnedMessageArgs<ExtArgs>
    pinnedByUser?: boolean | Chat$pinnedByUserArgs<ExtArgs>
    draftMessages?: boolean | Chat$draftMessagesArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    members?: boolean | Chat$membersArgs<ExtArgs>
    files?: boolean | Chat$filesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | Chat$groupArgs<ExtArgs>
    lastMessage?: boolean | Chat$lastMessageArgs<ExtArgs>
    pinnedMessage?: boolean | Chat$pinnedMessageArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | Chat$groupArgs<ExtArgs>
    lastMessage?: boolean | Chat$lastMessageArgs<ExtArgs>
    pinnedMessage?: boolean | Chat$pinnedMessageArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs> | null
      lastMessage: Prisma.$ChatMessagePayload<ExtArgs> | null
      pinnedMessage: Prisma.$ChatMessagePayload<ExtArgs> | null
      pinnedByUser: Prisma.$PinnedChatPayload<ExtArgs>[]
      draftMessages: Prisma.$DraftMessagePayload<ExtArgs>[]
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
      description: string | null
      groupId: string | null
      lastMessageId: string | null
      pinnedMessageId: string | null
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
    group<T extends Chat$groupArgs<ExtArgs> = {}>(args?: Subset<T, Chat$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lastMessage<T extends Chat$lastMessageArgs<ExtArgs> = {}>(args?: Subset<T, Chat$lastMessageArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pinnedMessage<T extends Chat$pinnedMessageArgs<ExtArgs> = {}>(args?: Subset<T, Chat$pinnedMessageArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pinnedByUser<T extends Chat$pinnedByUserArgs<ExtArgs> = {}>(args?: Subset<T, Chat$pinnedByUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PinnedChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    draftMessages<T extends Chat$draftMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$draftMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly description: FieldRef<"Chat", 'String'>
    readonly groupId: FieldRef<"Chat", 'String'>
    readonly lastMessageId: FieldRef<"Chat", 'String'>
    readonly pinnedMessageId: FieldRef<"Chat", 'String'>
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
   * Chat.group
   */
  export type Chat$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
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
   * Chat.pinnedMessage
   */
  export type Chat$pinnedMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Chat.pinnedByUser
   */
  export type Chat$pinnedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedChat
     */
    select?: PinnedChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedChat
     */
    omit?: PinnedChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedChatInclude<ExtArgs> | null
    where?: PinnedChatWhereInput
    orderBy?: PinnedChatOrderByWithRelationInput | PinnedChatOrderByWithRelationInput[]
    cursor?: PinnedChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PinnedChatScalarFieldEnum | PinnedChatScalarFieldEnum[]
  }

  /**
   * Chat.draftMessages
   */
  export type Chat$draftMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftMessage
     */
    select?: DraftMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftMessage
     */
    omit?: DraftMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftMessageInclude<ExtArgs> | null
    where?: DraftMessageWhereInput
    orderBy?: DraftMessageOrderByWithRelationInput | DraftMessageOrderByWithRelationInput[]
    cursor?: DraftMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DraftMessageScalarFieldEnum | DraftMessageScalarFieldEnum[]
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
   * Model PinnedChat
   */

  export type AggregatePinnedChat = {
    _count: PinnedChatCountAggregateOutputType | null
    _min: PinnedChatMinAggregateOutputType | null
    _max: PinnedChatMaxAggregateOutputType | null
  }

  export type PinnedChatMinAggregateOutputType = {
    id: string | null
    userId: string | null
    chatId: string | null
    pinnedAt: Date | null
  }

  export type PinnedChatMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    chatId: string | null
    pinnedAt: Date | null
  }

  export type PinnedChatCountAggregateOutputType = {
    id: number
    userId: number
    chatId: number
    pinnedAt: number
    _all: number
  }


  export type PinnedChatMinAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
    pinnedAt?: true
  }

  export type PinnedChatMaxAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
    pinnedAt?: true
  }

  export type PinnedChatCountAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
    pinnedAt?: true
    _all?: true
  }

  export type PinnedChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PinnedChat to aggregate.
     */
    where?: PinnedChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PinnedChats to fetch.
     */
    orderBy?: PinnedChatOrderByWithRelationInput | PinnedChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PinnedChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PinnedChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PinnedChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PinnedChats
    **/
    _count?: true | PinnedChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PinnedChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PinnedChatMaxAggregateInputType
  }

  export type GetPinnedChatAggregateType<T extends PinnedChatAggregateArgs> = {
        [P in keyof T & keyof AggregatePinnedChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePinnedChat[P]>
      : GetScalarType<T[P], AggregatePinnedChat[P]>
  }




  export type PinnedChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PinnedChatWhereInput
    orderBy?: PinnedChatOrderByWithAggregationInput | PinnedChatOrderByWithAggregationInput[]
    by: PinnedChatScalarFieldEnum[] | PinnedChatScalarFieldEnum
    having?: PinnedChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PinnedChatCountAggregateInputType | true
    _min?: PinnedChatMinAggregateInputType
    _max?: PinnedChatMaxAggregateInputType
  }

  export type PinnedChatGroupByOutputType = {
    id: string
    userId: string
    chatId: string
    pinnedAt: Date
    _count: PinnedChatCountAggregateOutputType | null
    _min: PinnedChatMinAggregateOutputType | null
    _max: PinnedChatMaxAggregateOutputType | null
  }

  type GetPinnedChatGroupByPayload<T extends PinnedChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PinnedChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PinnedChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PinnedChatGroupByOutputType[P]>
            : GetScalarType<T[P], PinnedChatGroupByOutputType[P]>
        }
      >
    >


  export type PinnedChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatId?: boolean
    pinnedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pinnedChat"]>

  export type PinnedChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatId?: boolean
    pinnedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pinnedChat"]>

  export type PinnedChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatId?: boolean
    pinnedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pinnedChat"]>

  export type PinnedChatSelectScalar = {
    id?: boolean
    userId?: boolean
    chatId?: boolean
    pinnedAt?: boolean
  }

  export type PinnedChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "chatId" | "pinnedAt", ExtArgs["result"]["pinnedChat"]>
  export type PinnedChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type PinnedChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type PinnedChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $PinnedChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PinnedChat"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      chatId: string
      pinnedAt: Date
    }, ExtArgs["result"]["pinnedChat"]>
    composites: {}
  }

  type PinnedChatGetPayload<S extends boolean | null | undefined | PinnedChatDefaultArgs> = $Result.GetResult<Prisma.$PinnedChatPayload, S>

  type PinnedChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PinnedChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PinnedChatCountAggregateInputType | true
    }

  export interface PinnedChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PinnedChat'], meta: { name: 'PinnedChat' } }
    /**
     * Find zero or one PinnedChat that matches the filter.
     * @param {PinnedChatFindUniqueArgs} args - Arguments to find a PinnedChat
     * @example
     * // Get one PinnedChat
     * const pinnedChat = await prisma.pinnedChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PinnedChatFindUniqueArgs>(args: SelectSubset<T, PinnedChatFindUniqueArgs<ExtArgs>>): Prisma__PinnedChatClient<$Result.GetResult<Prisma.$PinnedChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PinnedChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PinnedChatFindUniqueOrThrowArgs} args - Arguments to find a PinnedChat
     * @example
     * // Get one PinnedChat
     * const pinnedChat = await prisma.pinnedChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PinnedChatFindUniqueOrThrowArgs>(args: SelectSubset<T, PinnedChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PinnedChatClient<$Result.GetResult<Prisma.$PinnedChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PinnedChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedChatFindFirstArgs} args - Arguments to find a PinnedChat
     * @example
     * // Get one PinnedChat
     * const pinnedChat = await prisma.pinnedChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PinnedChatFindFirstArgs>(args?: SelectSubset<T, PinnedChatFindFirstArgs<ExtArgs>>): Prisma__PinnedChatClient<$Result.GetResult<Prisma.$PinnedChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PinnedChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedChatFindFirstOrThrowArgs} args - Arguments to find a PinnedChat
     * @example
     * // Get one PinnedChat
     * const pinnedChat = await prisma.pinnedChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PinnedChatFindFirstOrThrowArgs>(args?: SelectSubset<T, PinnedChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__PinnedChatClient<$Result.GetResult<Prisma.$PinnedChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PinnedChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PinnedChats
     * const pinnedChats = await prisma.pinnedChat.findMany()
     * 
     * // Get first 10 PinnedChats
     * const pinnedChats = await prisma.pinnedChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pinnedChatWithIdOnly = await prisma.pinnedChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PinnedChatFindManyArgs>(args?: SelectSubset<T, PinnedChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PinnedChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PinnedChat.
     * @param {PinnedChatCreateArgs} args - Arguments to create a PinnedChat.
     * @example
     * // Create one PinnedChat
     * const PinnedChat = await prisma.pinnedChat.create({
     *   data: {
     *     // ... data to create a PinnedChat
     *   }
     * })
     * 
     */
    create<T extends PinnedChatCreateArgs>(args: SelectSubset<T, PinnedChatCreateArgs<ExtArgs>>): Prisma__PinnedChatClient<$Result.GetResult<Prisma.$PinnedChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PinnedChats.
     * @param {PinnedChatCreateManyArgs} args - Arguments to create many PinnedChats.
     * @example
     * // Create many PinnedChats
     * const pinnedChat = await prisma.pinnedChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PinnedChatCreateManyArgs>(args?: SelectSubset<T, PinnedChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PinnedChats and returns the data saved in the database.
     * @param {PinnedChatCreateManyAndReturnArgs} args - Arguments to create many PinnedChats.
     * @example
     * // Create many PinnedChats
     * const pinnedChat = await prisma.pinnedChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PinnedChats and only return the `id`
     * const pinnedChatWithIdOnly = await prisma.pinnedChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PinnedChatCreateManyAndReturnArgs>(args?: SelectSubset<T, PinnedChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PinnedChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PinnedChat.
     * @param {PinnedChatDeleteArgs} args - Arguments to delete one PinnedChat.
     * @example
     * // Delete one PinnedChat
     * const PinnedChat = await prisma.pinnedChat.delete({
     *   where: {
     *     // ... filter to delete one PinnedChat
     *   }
     * })
     * 
     */
    delete<T extends PinnedChatDeleteArgs>(args: SelectSubset<T, PinnedChatDeleteArgs<ExtArgs>>): Prisma__PinnedChatClient<$Result.GetResult<Prisma.$PinnedChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PinnedChat.
     * @param {PinnedChatUpdateArgs} args - Arguments to update one PinnedChat.
     * @example
     * // Update one PinnedChat
     * const pinnedChat = await prisma.pinnedChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PinnedChatUpdateArgs>(args: SelectSubset<T, PinnedChatUpdateArgs<ExtArgs>>): Prisma__PinnedChatClient<$Result.GetResult<Prisma.$PinnedChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PinnedChats.
     * @param {PinnedChatDeleteManyArgs} args - Arguments to filter PinnedChats to delete.
     * @example
     * // Delete a few PinnedChats
     * const { count } = await prisma.pinnedChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PinnedChatDeleteManyArgs>(args?: SelectSubset<T, PinnedChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PinnedChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PinnedChats
     * const pinnedChat = await prisma.pinnedChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PinnedChatUpdateManyArgs>(args: SelectSubset<T, PinnedChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PinnedChats and returns the data updated in the database.
     * @param {PinnedChatUpdateManyAndReturnArgs} args - Arguments to update many PinnedChats.
     * @example
     * // Update many PinnedChats
     * const pinnedChat = await prisma.pinnedChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PinnedChats and only return the `id`
     * const pinnedChatWithIdOnly = await prisma.pinnedChat.updateManyAndReturn({
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
    updateManyAndReturn<T extends PinnedChatUpdateManyAndReturnArgs>(args: SelectSubset<T, PinnedChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PinnedChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PinnedChat.
     * @param {PinnedChatUpsertArgs} args - Arguments to update or create a PinnedChat.
     * @example
     * // Update or create a PinnedChat
     * const pinnedChat = await prisma.pinnedChat.upsert({
     *   create: {
     *     // ... data to create a PinnedChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PinnedChat we want to update
     *   }
     * })
     */
    upsert<T extends PinnedChatUpsertArgs>(args: SelectSubset<T, PinnedChatUpsertArgs<ExtArgs>>): Prisma__PinnedChatClient<$Result.GetResult<Prisma.$PinnedChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PinnedChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedChatCountArgs} args - Arguments to filter PinnedChats to count.
     * @example
     * // Count the number of PinnedChats
     * const count = await prisma.pinnedChat.count({
     *   where: {
     *     // ... the filter for the PinnedChats we want to count
     *   }
     * })
    **/
    count<T extends PinnedChatCountArgs>(
      args?: Subset<T, PinnedChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PinnedChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PinnedChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PinnedChatAggregateArgs>(args: Subset<T, PinnedChatAggregateArgs>): Prisma.PrismaPromise<GetPinnedChatAggregateType<T>>

    /**
     * Group by PinnedChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedChatGroupByArgs} args - Group by arguments.
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
      T extends PinnedChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PinnedChatGroupByArgs['orderBy'] }
        : { orderBy?: PinnedChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PinnedChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPinnedChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PinnedChat model
   */
  readonly fields: PinnedChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PinnedChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PinnedChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PinnedChat model
   */
  interface PinnedChatFieldRefs {
    readonly id: FieldRef<"PinnedChat", 'String'>
    readonly userId: FieldRef<"PinnedChat", 'String'>
    readonly chatId: FieldRef<"PinnedChat", 'String'>
    readonly pinnedAt: FieldRef<"PinnedChat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PinnedChat findUnique
   */
  export type PinnedChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedChat
     */
    select?: PinnedChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedChat
     */
    omit?: PinnedChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedChatInclude<ExtArgs> | null
    /**
     * Filter, which PinnedChat to fetch.
     */
    where: PinnedChatWhereUniqueInput
  }

  /**
   * PinnedChat findUniqueOrThrow
   */
  export type PinnedChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedChat
     */
    select?: PinnedChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedChat
     */
    omit?: PinnedChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedChatInclude<ExtArgs> | null
    /**
     * Filter, which PinnedChat to fetch.
     */
    where: PinnedChatWhereUniqueInput
  }

  /**
   * PinnedChat findFirst
   */
  export type PinnedChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedChat
     */
    select?: PinnedChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedChat
     */
    omit?: PinnedChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedChatInclude<ExtArgs> | null
    /**
     * Filter, which PinnedChat to fetch.
     */
    where?: PinnedChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PinnedChats to fetch.
     */
    orderBy?: PinnedChatOrderByWithRelationInput | PinnedChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PinnedChats.
     */
    cursor?: PinnedChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PinnedChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PinnedChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PinnedChats.
     */
    distinct?: PinnedChatScalarFieldEnum | PinnedChatScalarFieldEnum[]
  }

  /**
   * PinnedChat findFirstOrThrow
   */
  export type PinnedChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedChat
     */
    select?: PinnedChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedChat
     */
    omit?: PinnedChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedChatInclude<ExtArgs> | null
    /**
     * Filter, which PinnedChat to fetch.
     */
    where?: PinnedChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PinnedChats to fetch.
     */
    orderBy?: PinnedChatOrderByWithRelationInput | PinnedChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PinnedChats.
     */
    cursor?: PinnedChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PinnedChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PinnedChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PinnedChats.
     */
    distinct?: PinnedChatScalarFieldEnum | PinnedChatScalarFieldEnum[]
  }

  /**
   * PinnedChat findMany
   */
  export type PinnedChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedChat
     */
    select?: PinnedChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedChat
     */
    omit?: PinnedChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedChatInclude<ExtArgs> | null
    /**
     * Filter, which PinnedChats to fetch.
     */
    where?: PinnedChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PinnedChats to fetch.
     */
    orderBy?: PinnedChatOrderByWithRelationInput | PinnedChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PinnedChats.
     */
    cursor?: PinnedChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PinnedChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PinnedChats.
     */
    skip?: number
    distinct?: PinnedChatScalarFieldEnum | PinnedChatScalarFieldEnum[]
  }

  /**
   * PinnedChat create
   */
  export type PinnedChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedChat
     */
    select?: PinnedChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedChat
     */
    omit?: PinnedChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedChatInclude<ExtArgs> | null
    /**
     * The data needed to create a PinnedChat.
     */
    data: XOR<PinnedChatCreateInput, PinnedChatUncheckedCreateInput>
  }

  /**
   * PinnedChat createMany
   */
  export type PinnedChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PinnedChats.
     */
    data: PinnedChatCreateManyInput | PinnedChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PinnedChat createManyAndReturn
   */
  export type PinnedChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedChat
     */
    select?: PinnedChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedChat
     */
    omit?: PinnedChatOmit<ExtArgs> | null
    /**
     * The data used to create many PinnedChats.
     */
    data: PinnedChatCreateManyInput | PinnedChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PinnedChat update
   */
  export type PinnedChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedChat
     */
    select?: PinnedChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedChat
     */
    omit?: PinnedChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedChatInclude<ExtArgs> | null
    /**
     * The data needed to update a PinnedChat.
     */
    data: XOR<PinnedChatUpdateInput, PinnedChatUncheckedUpdateInput>
    /**
     * Choose, which PinnedChat to update.
     */
    where: PinnedChatWhereUniqueInput
  }

  /**
   * PinnedChat updateMany
   */
  export type PinnedChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PinnedChats.
     */
    data: XOR<PinnedChatUpdateManyMutationInput, PinnedChatUncheckedUpdateManyInput>
    /**
     * Filter which PinnedChats to update
     */
    where?: PinnedChatWhereInput
    /**
     * Limit how many PinnedChats to update.
     */
    limit?: number
  }

  /**
   * PinnedChat updateManyAndReturn
   */
  export type PinnedChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedChat
     */
    select?: PinnedChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedChat
     */
    omit?: PinnedChatOmit<ExtArgs> | null
    /**
     * The data used to update PinnedChats.
     */
    data: XOR<PinnedChatUpdateManyMutationInput, PinnedChatUncheckedUpdateManyInput>
    /**
     * Filter which PinnedChats to update
     */
    where?: PinnedChatWhereInput
    /**
     * Limit how many PinnedChats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PinnedChat upsert
   */
  export type PinnedChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedChat
     */
    select?: PinnedChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedChat
     */
    omit?: PinnedChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedChatInclude<ExtArgs> | null
    /**
     * The filter to search for the PinnedChat to update in case it exists.
     */
    where: PinnedChatWhereUniqueInput
    /**
     * In case the PinnedChat found by the `where` argument doesn't exist, create a new PinnedChat with this data.
     */
    create: XOR<PinnedChatCreateInput, PinnedChatUncheckedCreateInput>
    /**
     * In case the PinnedChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PinnedChatUpdateInput, PinnedChatUncheckedUpdateInput>
  }

  /**
   * PinnedChat delete
   */
  export type PinnedChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedChat
     */
    select?: PinnedChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedChat
     */
    omit?: PinnedChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedChatInclude<ExtArgs> | null
    /**
     * Filter which PinnedChat to delete.
     */
    where: PinnedChatWhereUniqueInput
  }

  /**
   * PinnedChat deleteMany
   */
  export type PinnedChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PinnedChats to delete
     */
    where?: PinnedChatWhereInput
    /**
     * Limit how many PinnedChats to delete.
     */
    limit?: number
  }

  /**
   * PinnedChat without action
   */
  export type PinnedChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedChat
     */
    select?: PinnedChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedChat
     */
    omit?: PinnedChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedChatInclude<ExtArgs> | null
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    isCreator: boolean | null
    chatId: string | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMemberCountAggregateOutputType = {
    id: number
    userId: number
    isCreator: number
    chatId: number
    joinedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMemberMinAggregateInputType = {
    id?: true
    userId?: true
    isCreator?: true
    chatId?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    isCreator?: true
    chatId?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMemberCountAggregateInputType = {
    id?: true
    userId?: true
    isCreator?: true
    chatId?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
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
    createdAt: Date
    updatedAt: Date
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
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isCreator?: boolean
    chatId?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isCreator?: boolean
    chatId?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    isCreator?: boolean
    chatId?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "isCreator" | "chatId" | "joinedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chatMember"]>
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
      createdAt: Date
      updatedAt: Date
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
    readonly createdAt: FieldRef<"ChatMember", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatMember", 'DateTime'>
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
   * Model GroupMember
   */

  export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  export type GroupMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    isCreator: boolean | null
    groupId: string | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    isCreator: boolean | null
    groupId: string | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMemberCountAggregateOutputType = {
    id: number
    userId: number
    isCreator: number
    groupId: number
    joinedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupMemberMinAggregateInputType = {
    id?: true
    userId?: true
    isCreator?: true
    groupId?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    isCreator?: true
    groupId?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMemberCountAggregateInputType = {
    id?: true
    userId?: true
    isCreator?: true
    groupId?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMember to aggregate.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMember[P]>
      : GetScalarType<T[P], AggregateGroupMember[P]>
  }




  export type GroupMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithAggregationInput | GroupMemberOrderByWithAggregationInput[]
    by: GroupMemberScalarFieldEnum[] | GroupMemberScalarFieldEnum
    having?: GroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberCountAggregateInputType | true
    _min?: GroupMemberMinAggregateInputType
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GroupMemberGroupByOutputType = {
    id: string
    userId: string
    isCreator: boolean | null
    groupId: string | null
    joinedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isCreator?: boolean
    groupId?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupMember$groupArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isCreator?: boolean
    groupId?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupMember$groupArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isCreator?: boolean
    groupId?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupMember$groupArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    isCreator?: boolean
    groupId?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "isCreator" | "groupId" | "joinedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["groupMember"]>
  export type GroupMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupMember$groupArgs<ExtArgs>
  }
  export type GroupMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupMember$groupArgs<ExtArgs>
  }
  export type GroupMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupMember$groupArgs<ExtArgs>
  }

  export type $GroupMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      isCreator: boolean | null
      groupId: string | null
      joinedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["groupMember"]>
    composites: {}
  }

  type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberDefaultArgs> = $Result.GetResult<Prisma.$GroupMemberPayload, S>

  type GroupMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMemberCountAggregateInputType | true
    }

  export interface GroupMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'], meta: { name: 'GroupMember' } }
    /**
     * Find zero or one GroupMember that matches the filter.
     * @param {GroupMemberFindUniqueArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMemberFindUniqueArgs>(args: SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMemberFindUniqueOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMemberFindFirstArgs>(args?: SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMember.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupMemberFindManyArgs>(args?: SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMember.
     * @param {GroupMemberCreateArgs} args - Arguments to create a GroupMember.
     * @example
     * // Create one GroupMember
     * const GroupMember = await prisma.groupMember.create({
     *   data: {
     *     // ... data to create a GroupMember
     *   }
     * })
     * 
     */
    create<T extends GroupMemberCreateArgs>(args: SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMembers.
     * @param {GroupMemberCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMemberCreateManyArgs>(args?: SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMembers and returns the data saved in the database.
     * @param {GroupMemberCreateManyAndReturnArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupMember.
     * @param {GroupMemberDeleteArgs} args - Arguments to delete one GroupMember.
     * @example
     * // Delete one GroupMember
     * const GroupMember = await prisma.groupMember.delete({
     *   where: {
     *     // ... filter to delete one GroupMember
     *   }
     * })
     * 
     */
    delete<T extends GroupMemberDeleteArgs>(args: SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMember.
     * @param {GroupMemberUpdateArgs} args - Arguments to update one GroupMember.
     * @example
     * // Update one GroupMember
     * const groupMember = await prisma.groupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMemberUpdateArgs>(args: SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMemberDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMemberDeleteManyArgs>(args?: SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMemberUpdateManyArgs>(args: SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers and returns the data updated in the database.
     * @param {GroupMemberUpdateManyAndReturnArgs} args - Arguments to update many GroupMembers.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupMember.
     * @param {GroupMemberUpsertArgs} args - Arguments to update or create a GroupMember.
     * @example
     * // Update or create a GroupMember
     * const groupMember = await prisma.groupMember.upsert({
     *   create: {
     *     // ... data to create a GroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMember we want to update
     *   }
     * })
     */
    upsert<T extends GroupMemberUpsertArgs>(args: SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMember.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberCountArgs>(
      args?: Subset<T, GroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupMemberAggregateArgs>(args: Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>

    /**
     * Group by GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberGroupByArgs} args - Group by arguments.
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
      T extends GroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMember model
   */
  readonly fields: GroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends GroupMember$groupArgs<ExtArgs> = {}>(args?: Subset<T, GroupMember$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupMember model
   */
  interface GroupMemberFieldRefs {
    readonly id: FieldRef<"GroupMember", 'String'>
    readonly userId: FieldRef<"GroupMember", 'String'>
    readonly isCreator: FieldRef<"GroupMember", 'Boolean'>
    readonly groupId: FieldRef<"GroupMember", 'String'>
    readonly joinedAt: FieldRef<"GroupMember", 'DateTime'>
    readonly createdAt: FieldRef<"GroupMember", 'DateTime'>
    readonly updatedAt: FieldRef<"GroupMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupMember findUnique
   */
  export type GroupMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findUniqueOrThrow
   */
  export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findFirst
   */
  export type GroupMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findFirstOrThrow
   */
  export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findMany
   */
  export type GroupMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember create
   */
  export type GroupMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMember.
     */
    data: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
  }

  /**
   * GroupMember createMany
   */
  export type GroupMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupMember createManyAndReturn
   */
  export type GroupMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember update
   */
  export type GroupMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMember.
     */
    data: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
    /**
     * Choose, which GroupMember to update.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember updateMany
   */
  export type GroupMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
  }

  /**
   * GroupMember updateManyAndReturn
   */
  export type GroupMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember upsert
   */
  export type GroupMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMember to update in case it exists.
     */
    where: GroupMemberWhereUniqueInput
    /**
     * In case the GroupMember found by the `where` argument doesn't exist, create a new GroupMember with this data.
     */
    create: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
    /**
     * In case the GroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
  }

  /**
   * GroupMember delete
   */
  export type GroupMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter which GroupMember to delete.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember deleteMany
   */
  export type GroupMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to delete.
     */
    limit?: number
  }

  /**
   * GroupMember.group
   */
  export type GroupMember$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * GroupMember without action
   */
  export type GroupMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
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
    bio: 'bio',
    email: 'email',
    password: 'password',
    avatarUrl: 'avatarUrl',
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


  export const DraftMessageScalarFieldEnum: {
    id: 'id',
    text: 'text',
    isForwarded: 'isForwarded',
    editId: 'editId',
    filesEditId: 'filesEditId',
    userId: 'userId',
    chatId: 'chatId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DraftMessageScalarFieldEnum = (typeof DraftMessageScalarFieldEnum)[keyof typeof DraftMessageScalarFieldEnum]


  export const DraftMessageReplyScalarFieldEnum: {
    id: 'id',
    draftMessageId: 'draftMessageId',
    repliedToId: 'repliedToId'
  };

  export type DraftMessageReplyScalarFieldEnum = (typeof DraftMessageReplyScalarFieldEnum)[keyof typeof DraftMessageReplyScalarFieldEnum]


  export const FileMessageScalarFieldEnum: {
    id: 'id',
    fileUrl: 'fileUrl',
    fileName: 'fileName',
    fileFullName: 'fileFullName',
    fileSize: 'fileSize',
    fileFormat: 'fileFormat',
    chatMessageId: 'chatMessageId',
    draftMessageId: 'draftMessageId',
    userId: 'userId',
    chatId: 'chatId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileMessageScalarFieldEnum = (typeof FileMessageScalarFieldEnum)[keyof typeof FileMessageScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    groupName: 'groupName',
    avatarUrl: 'avatarUrl',
    isDeleted: 'isDeleted',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    chatName: 'chatName',
    isGroup: 'isGroup',
    avatarUrl: 'avatarUrl',
    isDeleted: 'isDeleted',
    description: 'description',
    groupId: 'groupId',
    lastMessageId: 'lastMessageId',
    pinnedMessageId: 'pinnedMessageId',
    lastMessageAt: 'lastMessageAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const PinnedChatScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    chatId: 'chatId',
    pinnedAt: 'pinnedAt'
  };

  export type PinnedChatScalarFieldEnum = (typeof PinnedChatScalarFieldEnum)[keyof typeof PinnedChatScalarFieldEnum]


  export const ChatMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    isCreator: 'isCreator',
    chatId: 'chatId',
    joinedAt: 'joinedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatMemberScalarFieldEnum = (typeof ChatMemberScalarFieldEnum)[keyof typeof ChatMemberScalarFieldEnum]


  export const GroupMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    isCreator: 'isCreator',
    groupId: 'groupId',
    joinedAt: 'joinedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupMemberScalarFieldEnum = (typeof GroupMemberScalarFieldEnum)[keyof typeof GroupMemberScalarFieldEnum]


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
    bio?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    isDeactivated?: BoolFilter<"User"> | boolean
    deactivatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    messages?: ChatMessageListRelationFilter
    draftMessages?: DraftMessageListRelationFilter
    chatMemberships?: ChatMemberListRelationFilter
    groupMemberships?: GroupMemberListRelationFilter
    pinnedChats?: PinnedChatListRelationFilter
    files?: FileMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    bio?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isDeactivated?: SortOrder
    deactivatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: ChatMessageOrderByRelationAggregateInput
    draftMessages?: DraftMessageOrderByRelationAggregateInput
    chatMemberships?: ChatMemberOrderByRelationAggregateInput
    groupMemberships?: GroupMemberOrderByRelationAggregateInput
    pinnedChats?: PinnedChatOrderByRelationAggregateInput
    files?: FileMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    bio?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    isDeactivated?: BoolFilter<"User"> | boolean
    deactivatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    messages?: ChatMessageListRelationFilter
    draftMessages?: DraftMessageListRelationFilter
    chatMemberships?: ChatMemberListRelationFilter
    groupMemberships?: GroupMemberListRelationFilter
    pinnedChats?: PinnedChatListRelationFilter
    files?: FileMessageListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    bio?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
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
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
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
    userId?: StringFilter<"ChatMessage"> | string
    chatId?: StringFilter<"ChatMessage"> | string
    readCount?: StringNullableFilter<"ChatMessage"> | string | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    files?: FileMessageListRelationFilter
    replies?: ChatMessageReplyListRelationFilter
    repliedToLinks?: ChatMessageReplyListRelationFilter
    lastMessageForChat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null
    pinnedInChat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null
    repliedFromDrafts?: DraftMessageReplyListRelationFilter
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
    userId?: SortOrder
    chatId?: SortOrder
    readCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    files?: FileMessageOrderByRelationAggregateInput
    replies?: ChatMessageReplyOrderByRelationAggregateInput
    repliedToLinks?: ChatMessageReplyOrderByRelationAggregateInput
    lastMessageForChat?: ChatOrderByWithRelationInput
    pinnedInChat?: ChatOrderByWithRelationInput
    repliedFromDrafts?: DraftMessageReplyOrderByRelationAggregateInput
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
    userId?: StringFilter<"ChatMessage"> | string
    chatId?: StringFilter<"ChatMessage"> | string
    readCount?: StringNullableFilter<"ChatMessage"> | string | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    files?: FileMessageListRelationFilter
    replies?: ChatMessageReplyListRelationFilter
    repliedToLinks?: ChatMessageReplyListRelationFilter
    lastMessageForChat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null
    pinnedInChat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null
    repliedFromDrafts?: DraftMessageReplyListRelationFilter
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

  export type DraftMessageWhereInput = {
    AND?: DraftMessageWhereInput | DraftMessageWhereInput[]
    OR?: DraftMessageWhereInput[]
    NOT?: DraftMessageWhereInput | DraftMessageWhereInput[]
    id?: StringFilter<"DraftMessage"> | string
    text?: StringNullableFilter<"DraftMessage"> | string | null
    isForwarded?: BoolFilter<"DraftMessage"> | boolean
    editId?: StringNullableFilter<"DraftMessage"> | string | null
    filesEditId?: StringNullableListFilter<"DraftMessage">
    userId?: StringFilter<"DraftMessage"> | string
    chatId?: StringFilter<"DraftMessage"> | string
    createdAt?: DateTimeFilter<"DraftMessage"> | Date | string
    updatedAt?: DateTimeFilter<"DraftMessage"> | Date | string
    files?: FileMessageListRelationFilter
    repliedToLinks?: DraftMessageReplyListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type DraftMessageOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrderInput | SortOrder
    isForwarded?: SortOrder
    editId?: SortOrderInput | SortOrder
    filesEditId?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    files?: FileMessageOrderByRelationAggregateInput
    repliedToLinks?: DraftMessageReplyOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
  }

  export type DraftMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DraftMessageWhereInput | DraftMessageWhereInput[]
    OR?: DraftMessageWhereInput[]
    NOT?: DraftMessageWhereInput | DraftMessageWhereInput[]
    text?: StringNullableFilter<"DraftMessage"> | string | null
    isForwarded?: BoolFilter<"DraftMessage"> | boolean
    editId?: StringNullableFilter<"DraftMessage"> | string | null
    filesEditId?: StringNullableListFilter<"DraftMessage">
    userId?: StringFilter<"DraftMessage"> | string
    chatId?: StringFilter<"DraftMessage"> | string
    createdAt?: DateTimeFilter<"DraftMessage"> | Date | string
    updatedAt?: DateTimeFilter<"DraftMessage"> | Date | string
    files?: FileMessageListRelationFilter
    repliedToLinks?: DraftMessageReplyListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type DraftMessageOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrderInput | SortOrder
    isForwarded?: SortOrder
    editId?: SortOrderInput | SortOrder
    filesEditId?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DraftMessageCountOrderByAggregateInput
    _max?: DraftMessageMaxOrderByAggregateInput
    _min?: DraftMessageMinOrderByAggregateInput
  }

  export type DraftMessageScalarWhereWithAggregatesInput = {
    AND?: DraftMessageScalarWhereWithAggregatesInput | DraftMessageScalarWhereWithAggregatesInput[]
    OR?: DraftMessageScalarWhereWithAggregatesInput[]
    NOT?: DraftMessageScalarWhereWithAggregatesInput | DraftMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DraftMessage"> | string
    text?: StringNullableWithAggregatesFilter<"DraftMessage"> | string | null
    isForwarded?: BoolWithAggregatesFilter<"DraftMessage"> | boolean
    editId?: StringNullableWithAggregatesFilter<"DraftMessage"> | string | null
    filesEditId?: StringNullableListFilter<"DraftMessage">
    userId?: StringWithAggregatesFilter<"DraftMessage"> | string
    chatId?: StringWithAggregatesFilter<"DraftMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DraftMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DraftMessage"> | Date | string
  }

  export type DraftMessageReplyWhereInput = {
    AND?: DraftMessageReplyWhereInput | DraftMessageReplyWhereInput[]
    OR?: DraftMessageReplyWhereInput[]
    NOT?: DraftMessageReplyWhereInput | DraftMessageReplyWhereInput[]
    id?: StringFilter<"DraftMessageReply"> | string
    draftMessageId?: StringFilter<"DraftMessageReply"> | string
    repliedToId?: StringFilter<"DraftMessageReply"> | string
    draftMessage?: XOR<DraftMessageScalarRelationFilter, DraftMessageWhereInput>
    repliedTo?: XOR<ChatMessageScalarRelationFilter, ChatMessageWhereInput>
  }

  export type DraftMessageReplyOrderByWithRelationInput = {
    id?: SortOrder
    draftMessageId?: SortOrder
    repliedToId?: SortOrder
    draftMessage?: DraftMessageOrderByWithRelationInput
    repliedTo?: ChatMessageOrderByWithRelationInput
  }

  export type DraftMessageReplyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    draftMessageId_repliedToId?: DraftMessageReplyDraftMessageIdRepliedToIdCompoundUniqueInput
    AND?: DraftMessageReplyWhereInput | DraftMessageReplyWhereInput[]
    OR?: DraftMessageReplyWhereInput[]
    NOT?: DraftMessageReplyWhereInput | DraftMessageReplyWhereInput[]
    draftMessageId?: StringFilter<"DraftMessageReply"> | string
    repliedToId?: StringFilter<"DraftMessageReply"> | string
    draftMessage?: XOR<DraftMessageScalarRelationFilter, DraftMessageWhereInput>
    repliedTo?: XOR<ChatMessageScalarRelationFilter, ChatMessageWhereInput>
  }, "id" | "draftMessageId_repliedToId">

  export type DraftMessageReplyOrderByWithAggregationInput = {
    id?: SortOrder
    draftMessageId?: SortOrder
    repliedToId?: SortOrder
    _count?: DraftMessageReplyCountOrderByAggregateInput
    _max?: DraftMessageReplyMaxOrderByAggregateInput
    _min?: DraftMessageReplyMinOrderByAggregateInput
  }

  export type DraftMessageReplyScalarWhereWithAggregatesInput = {
    AND?: DraftMessageReplyScalarWhereWithAggregatesInput | DraftMessageReplyScalarWhereWithAggregatesInput[]
    OR?: DraftMessageReplyScalarWhereWithAggregatesInput[]
    NOT?: DraftMessageReplyScalarWhereWithAggregatesInput | DraftMessageReplyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DraftMessageReply"> | string
    draftMessageId?: StringWithAggregatesFilter<"DraftMessageReply"> | string
    repliedToId?: StringWithAggregatesFilter<"DraftMessageReply"> | string
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
    chatMessageId?: StringNullableFilter<"FileMessage"> | string | null
    draftMessageId?: StringNullableFilter<"FileMessage"> | string | null
    userId?: StringFilter<"FileMessage"> | string
    chatId?: StringFilter<"FileMessage"> | string
    createdAt?: DateTimeFilter<"FileMessage"> | Date | string
    updatedAt?: DateTimeFilter<"FileMessage"> | Date | string
    chatMessage?: XOR<ChatMessageNullableScalarRelationFilter, ChatMessageWhereInput> | null
    draftMessage?: XOR<DraftMessageNullableScalarRelationFilter, DraftMessageWhereInput> | null
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
    chatMessageId?: SortOrderInput | SortOrder
    draftMessageId?: SortOrderInput | SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatMessage?: ChatMessageOrderByWithRelationInput
    draftMessage?: DraftMessageOrderByWithRelationInput
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
    chatMessageId?: StringNullableFilter<"FileMessage"> | string | null
    draftMessageId?: StringNullableFilter<"FileMessage"> | string | null
    userId?: StringFilter<"FileMessage"> | string
    chatId?: StringFilter<"FileMessage"> | string
    createdAt?: DateTimeFilter<"FileMessage"> | Date | string
    updatedAt?: DateTimeFilter<"FileMessage"> | Date | string
    chatMessage?: XOR<ChatMessageNullableScalarRelationFilter, ChatMessageWhereInput> | null
    draftMessage?: XOR<DraftMessageNullableScalarRelationFilter, DraftMessageWhereInput> | null
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
    chatMessageId?: SortOrderInput | SortOrder
    draftMessageId?: SortOrderInput | SortOrder
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
    chatMessageId?: StringNullableWithAggregatesFilter<"FileMessage"> | string | null
    draftMessageId?: StringNullableWithAggregatesFilter<"FileMessage"> | string | null
    userId?: StringWithAggregatesFilter<"FileMessage"> | string
    chatId?: StringWithAggregatesFilter<"FileMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FileMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FileMessage"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    groupName?: StringFilter<"Group"> | string
    avatarUrl?: StringNullableFilter<"Group"> | string | null
    isDeleted?: BoolFilter<"Group"> | boolean
    description?: StringNullableFilter<"Group"> | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    members?: GroupMemberListRelationFilter
    chats?: ChatListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    groupName?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: GroupMemberOrderByRelationAggregateInput
    chats?: ChatOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    groupName?: StringFilter<"Group"> | string
    avatarUrl?: StringNullableFilter<"Group"> | string | null
    isDeleted?: BoolFilter<"Group"> | boolean
    description?: StringNullableFilter<"Group"> | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    members?: GroupMemberListRelationFilter
    chats?: ChatListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    groupName?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    groupName?: StringWithAggregatesFilter<"Group"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"Group"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Group"> | boolean
    description?: StringNullableWithAggregatesFilter<"Group"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
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
    description?: StringNullableFilter<"Chat"> | string | null
    groupId?: StringNullableFilter<"Chat"> | string | null
    lastMessageId?: StringNullableFilter<"Chat"> | string | null
    pinnedMessageId?: StringNullableFilter<"Chat"> | string | null
    lastMessageAt?: DateTimeNullableFilter<"Chat"> | Date | string | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    lastMessage?: XOR<ChatMessageNullableScalarRelationFilter, ChatMessageWhereInput> | null
    pinnedMessage?: XOR<ChatMessageNullableScalarRelationFilter, ChatMessageWhereInput> | null
    pinnedByUser?: PinnedChatListRelationFilter
    draftMessages?: DraftMessageListRelationFilter
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
    description?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    pinnedMessageId?: SortOrderInput | SortOrder
    lastMessageAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    lastMessage?: ChatMessageOrderByWithRelationInput
    pinnedMessage?: ChatMessageOrderByWithRelationInput
    pinnedByUser?: PinnedChatOrderByRelationAggregateInput
    draftMessages?: DraftMessageOrderByRelationAggregateInput
    messages?: ChatMessageOrderByRelationAggregateInput
    members?: ChatMemberOrderByRelationAggregateInput
    files?: FileMessageOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lastMessageId?: string
    pinnedMessageId?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    chatName?: StringNullableFilter<"Chat"> | string | null
    isGroup?: BoolFilter<"Chat"> | boolean
    avatarUrl?: StringNullableFilter<"Chat"> | string | null
    isDeleted?: BoolFilter<"Chat"> | boolean
    description?: StringNullableFilter<"Chat"> | string | null
    groupId?: StringNullableFilter<"Chat"> | string | null
    lastMessageAt?: DateTimeNullableFilter<"Chat"> | Date | string | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    lastMessage?: XOR<ChatMessageNullableScalarRelationFilter, ChatMessageWhereInput> | null
    pinnedMessage?: XOR<ChatMessageNullableScalarRelationFilter, ChatMessageWhereInput> | null
    pinnedByUser?: PinnedChatListRelationFilter
    draftMessages?: DraftMessageListRelationFilter
    messages?: ChatMessageListRelationFilter
    members?: ChatMemberListRelationFilter
    files?: FileMessageListRelationFilter
  }, "id" | "lastMessageId" | "pinnedMessageId">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    chatName?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    description?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    pinnedMessageId?: SortOrderInput | SortOrder
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
    description?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    groupId?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    lastMessageId?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    pinnedMessageId?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    lastMessageAt?: DateTimeNullableWithAggregatesFilter<"Chat"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type PinnedChatWhereInput = {
    AND?: PinnedChatWhereInput | PinnedChatWhereInput[]
    OR?: PinnedChatWhereInput[]
    NOT?: PinnedChatWhereInput | PinnedChatWhereInput[]
    id?: StringFilter<"PinnedChat"> | string
    userId?: StringFilter<"PinnedChat"> | string
    chatId?: StringFilter<"PinnedChat"> | string
    pinnedAt?: DateTimeFilter<"PinnedChat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type PinnedChatOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    pinnedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
  }

  export type PinnedChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_chatId?: PinnedChatUserIdChatIdCompoundUniqueInput
    AND?: PinnedChatWhereInput | PinnedChatWhereInput[]
    OR?: PinnedChatWhereInput[]
    NOT?: PinnedChatWhereInput | PinnedChatWhereInput[]
    userId?: StringFilter<"PinnedChat"> | string
    chatId?: StringFilter<"PinnedChat"> | string
    pinnedAt?: DateTimeFilter<"PinnedChat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id" | "userId_chatId">

  export type PinnedChatOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    pinnedAt?: SortOrder
    _count?: PinnedChatCountOrderByAggregateInput
    _max?: PinnedChatMaxOrderByAggregateInput
    _min?: PinnedChatMinOrderByAggregateInput
  }

  export type PinnedChatScalarWhereWithAggregatesInput = {
    AND?: PinnedChatScalarWhereWithAggregatesInput | PinnedChatScalarWhereWithAggregatesInput[]
    OR?: PinnedChatScalarWhereWithAggregatesInput[]
    NOT?: PinnedChatScalarWhereWithAggregatesInput | PinnedChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PinnedChat"> | string
    userId?: StringWithAggregatesFilter<"PinnedChat"> | string
    chatId?: StringWithAggregatesFilter<"PinnedChat"> | string
    pinnedAt?: DateTimeWithAggregatesFilter<"PinnedChat"> | Date | string
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
    createdAt?: DateTimeFilter<"ChatMember"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type ChatMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    isCreator?: SortOrderInput | SortOrder
    chatId?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
  }

  export type ChatMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMemberWhereInput | ChatMemberWhereInput[]
    OR?: ChatMemberWhereInput[]
    NOT?: ChatMemberWhereInput | ChatMemberWhereInput[]
    userId?: StringFilter<"ChatMember"> | string
    isCreator?: BoolNullableFilter<"ChatMember"> | boolean | null
    chatId?: StringFilter<"ChatMember"> | string
    joinedAt?: DateTimeFilter<"ChatMember"> | Date | string
    createdAt?: DateTimeFilter<"ChatMember"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type ChatMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    isCreator?: SortOrderInput | SortOrder
    chatId?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"ChatMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatMember"> | Date | string
  }

  export type GroupMemberWhereInput = {
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    id?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    isCreator?: BoolNullableFilter<"GroupMember"> | boolean | null
    groupId?: StringNullableFilter<"GroupMember"> | string | null
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    createdAt?: DateTimeFilter<"GroupMember"> | Date | string
    updatedAt?: DateTimeFilter<"GroupMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }

  export type GroupMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    isCreator?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type GroupMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    userId?: StringFilter<"GroupMember"> | string
    isCreator?: BoolNullableFilter<"GroupMember"> | boolean | null
    groupId?: StringNullableFilter<"GroupMember"> | string | null
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    createdAt?: DateTimeFilter<"GroupMember"> | Date | string
    updatedAt?: DateTimeFilter<"GroupMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }, "id">

  export type GroupMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    isCreator?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupMemberCountOrderByAggregateInput
    _max?: GroupMemberMaxOrderByAggregateInput
    _min?: GroupMemberMinOrderByAggregateInput
  }

  export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    OR?: GroupMemberScalarWhereWithAggregatesInput[]
    NOT?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupMember"> | string
    userId?: StringWithAggregatesFilter<"GroupMember"> | string
    isCreator?: BoolNullableWithAggregatesFilter<"GroupMember"> | boolean | null
    groupId?: StringNullableWithAggregatesFilter<"GroupMember"> | string | null
    joinedAt?: DateTimeWithAggregatesFilter<"GroupMember"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"GroupMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroupMember"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    bio?: string | null
    email: string
    password: string
    avatarUrl?: string | null
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutUserInput
    draftMessages?: DraftMessageCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberCreateNestedManyWithoutUserInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    pinnedChats?: PinnedChatCreateNestedManyWithoutUserInput
    files?: FileMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    bio?: string | null
    email: string
    password: string
    avatarUrl?: string | null
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    draftMessages?: DraftMessageUncheckedCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    pinnedChats?: PinnedChatUncheckedCreateNestedManyWithoutUserInput
    files?: FileMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutUserNestedInput
    draftMessages?: DraftMessageUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUpdateManyWithoutUserNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    pinnedChats?: PinnedChatUpdateManyWithoutUserNestedInput
    files?: FileMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    draftMessages?: DraftMessageUncheckedUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    pinnedChats?: PinnedChatUncheckedUpdateManyWithoutUserNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    bio?: string | null
    email: string
    password: string
    avatarUrl?: string | null
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
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
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatCreateNestedOneWithoutLastMessageInput
    pinnedInChat?: ChatCreateNestedOneWithoutPinnedMessageInput
    repliedFromDrafts?: DraftMessageReplyCreateNestedManyWithoutRepliedToInput
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
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyUncheckedCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatUncheckedCreateNestedOneWithoutLastMessageInput
    pinnedInChat?: ChatUncheckedCreateNestedOneWithoutPinnedMessageInput
    repliedFromDrafts?: DraftMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUpdateOneWithoutLastMessageNestedInput
    pinnedInChat?: ChatUpdateOneWithoutPinnedMessageNestedInput
    repliedFromDrafts?: DraftMessageReplyUpdateManyWithoutRepliedToNestedInput
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
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUncheckedUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUncheckedUpdateOneWithoutLastMessageNestedInput
    pinnedInChat?: ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput
    repliedFromDrafts?: DraftMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
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

  export type DraftMessageCreateInput = {
    id?: string
    text?: string | null
    isForwarded?: boolean
    editId?: string | null
    filesEditId?: DraftMessageCreatefilesEditIdInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutDraftMessageInput
    repliedToLinks?: DraftMessageReplyCreateNestedManyWithoutDraftMessageInput
    user: UserCreateNestedOneWithoutDraftMessagesInput
    chat: ChatCreateNestedOneWithoutDraftMessagesInput
  }

  export type DraftMessageUncheckedCreateInput = {
    id?: string
    text?: string | null
    isForwarded?: boolean
    editId?: string | null
    filesEditId?: DraftMessageCreatefilesEditIdInput | string[]
    userId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutDraftMessageInput
    repliedToLinks?: DraftMessageReplyUncheckedCreateNestedManyWithoutDraftMessageInput
  }

  export type DraftMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    editId?: NullableStringFieldUpdateOperationsInput | string | null
    filesEditId?: DraftMessageUpdatefilesEditIdInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutDraftMessageNestedInput
    repliedToLinks?: DraftMessageReplyUpdateManyWithoutDraftMessageNestedInput
    user?: UserUpdateOneRequiredWithoutDraftMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutDraftMessagesNestedInput
  }

  export type DraftMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    editId?: NullableStringFieldUpdateOperationsInput | string | null
    filesEditId?: DraftMessageUpdatefilesEditIdInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutDraftMessageNestedInput
    repliedToLinks?: DraftMessageReplyUncheckedUpdateManyWithoutDraftMessageNestedInput
  }

  export type DraftMessageCreateManyInput = {
    id?: string
    text?: string | null
    isForwarded?: boolean
    editId?: string | null
    filesEditId?: DraftMessageCreatefilesEditIdInput | string[]
    userId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DraftMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    editId?: NullableStringFieldUpdateOperationsInput | string | null
    filesEditId?: DraftMessageUpdatefilesEditIdInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    editId?: NullableStringFieldUpdateOperationsInput | string | null
    filesEditId?: DraftMessageUpdatefilesEditIdInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftMessageReplyCreateInput = {
    id?: string
    draftMessage: DraftMessageCreateNestedOneWithoutRepliedToLinksInput
    repliedTo: ChatMessageCreateNestedOneWithoutRepliedFromDraftsInput
  }

  export type DraftMessageReplyUncheckedCreateInput = {
    id?: string
    draftMessageId: string
    repliedToId: string
  }

  export type DraftMessageReplyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftMessage?: DraftMessageUpdateOneRequiredWithoutRepliedToLinksNestedInput
    repliedTo?: ChatMessageUpdateOneRequiredWithoutRepliedFromDraftsNestedInput
  }

  export type DraftMessageReplyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftMessageId?: StringFieldUpdateOperationsInput | string
    repliedToId?: StringFieldUpdateOperationsInput | string
  }

  export type DraftMessageReplyCreateManyInput = {
    id?: string
    draftMessageId: string
    repliedToId: string
  }

  export type DraftMessageReplyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type DraftMessageReplyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftMessageId?: StringFieldUpdateOperationsInput | string
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
    chatMessage?: ChatMessageCreateNestedOneWithoutFilesInput
    draftMessage?: DraftMessageCreateNestedOneWithoutFilesInput
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
    chatMessageId?: string | null
    draftMessageId?: string | null
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
    chatMessage?: ChatMessageUpdateOneWithoutFilesNestedInput
    draftMessage?: DraftMessageUpdateOneWithoutFilesNestedInput
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
    chatMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    draftMessageId?: NullableStringFieldUpdateOperationsInput | string | null
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
    chatMessageId?: string | null
    draftMessageId?: string | null
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
    chatMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    draftMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    id?: string
    groupName: string
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    chats?: ChatCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    groupName: string
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    chats?: ChatUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    chats?: ChatUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    chats?: ChatUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    groupName: string
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutChatsInput
    lastMessage?: ChatMessageCreateNestedOneWithoutLastMessageForChatInput
    pinnedMessage?: ChatMessageCreateNestedOneWithoutPinnedInChatInput
    pinnedByUser?: PinnedChatCreateNestedManyWithoutChatInput
    draftMessages?: DraftMessageCreateNestedManyWithoutChatInput
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
    description?: string | null
    groupId?: string | null
    lastMessageId?: string | null
    pinnedMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pinnedByUser?: PinnedChatUncheckedCreateNestedManyWithoutChatInput
    draftMessages?: DraftMessageUncheckedCreateNestedManyWithoutChatInput
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
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutChatsNestedInput
    lastMessage?: ChatMessageUpdateOneWithoutLastMessageForChatNestedInput
    pinnedMessage?: ChatMessageUpdateOneWithoutPinnedInChatNestedInput
    pinnedByUser?: PinnedChatUpdateManyWithoutChatNestedInput
    draftMessages?: DraftMessageUpdateManyWithoutChatNestedInput
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
    description?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pinnedByUser?: PinnedChatUncheckedUpdateManyWithoutChatNestedInput
    draftMessages?: DraftMessageUncheckedUpdateManyWithoutChatNestedInput
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
    description?: string | null
    groupId?: string | null
    lastMessageId?: string | null
    pinnedMessageId?: string | null
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
    description?: NullableStringFieldUpdateOperationsInput | string | null
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
    description?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PinnedChatCreateInput = {
    id?: string
    pinnedAt?: Date | string
    user: UserCreateNestedOneWithoutPinnedChatsInput
    chat: ChatCreateNestedOneWithoutPinnedByUserInput
  }

  export type PinnedChatUncheckedCreateInput = {
    id?: string
    userId: string
    chatId: string
    pinnedAt?: Date | string
  }

  export type PinnedChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPinnedChatsNestedInput
    chat?: ChatUpdateOneRequiredWithoutPinnedByUserNestedInput
  }

  export type PinnedChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PinnedChatCreateManyInput = {
    id?: string
    userId: string
    chatId: string
    pinnedAt?: Date | string
  }

  export type PinnedChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PinnedChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberCreateInput = {
    id?: string
    isCreator?: boolean | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatMembershipsInput
    chat: ChatCreateNestedOneWithoutMembersInput
  }

  export type ChatMemberUncheckedCreateInput = {
    id?: string
    userId: string
    isCreator?: boolean | null
    chatId: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatMembershipsNestedInput
    chat?: ChatUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ChatMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    chatId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberCreateManyInput = {
    id?: string
    userId: string
    isCreator?: boolean | null
    chatId: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    chatId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateInput = {
    id?: string
    isCreator?: boolean | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGroupMembershipsInput
    group?: GroupCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateInput = {
    id?: string
    userId: string
    isCreator?: boolean | null
    groupId?: string | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGroupMembershipsNestedInput
    group?: GroupUpdateOneWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateManyInput = {
    id?: string
    userId: string
    isCreator?: boolean | null
    groupId?: string | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DraftMessageListRelationFilter = {
    every?: DraftMessageWhereInput
    some?: DraftMessageWhereInput
    none?: DraftMessageWhereInput
  }

  export type ChatMemberListRelationFilter = {
    every?: ChatMemberWhereInput
    some?: ChatMemberWhereInput
    none?: ChatMemberWhereInput
  }

  export type GroupMemberListRelationFilter = {
    every?: GroupMemberWhereInput
    some?: GroupMemberWhereInput
    none?: GroupMemberWhereInput
  }

  export type PinnedChatListRelationFilter = {
    every?: PinnedChatWhereInput
    some?: PinnedChatWhereInput
    none?: PinnedChatWhereInput
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

  export type DraftMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PinnedChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    isDeactivated?: SortOrder
    deactivatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    isDeactivated?: SortOrder
    deactivatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
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

  export type ChatMessageReplyListRelationFilter = {
    every?: ChatMessageReplyWhereInput
    some?: ChatMessageReplyWhereInput
    none?: ChatMessageReplyWhereInput
  }

  export type ChatNullableScalarRelationFilter = {
    is?: ChatWhereInput | null
    isNot?: ChatWhereInput | null
  }

  export type DraftMessageReplyListRelationFilter = {
    every?: DraftMessageReplyWhereInput
    some?: DraftMessageReplyWhereInput
    none?: DraftMessageReplyWhereInput
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

  export type DraftMessageReplyOrderByRelationAggregateInput = {
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
    userId?: SortOrder
    chatId?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DraftMessageCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isForwarded?: SortOrder
    editId?: SortOrder
    filesEditId?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DraftMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isForwarded?: SortOrder
    editId?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DraftMessageMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isForwarded?: SortOrder
    editId?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DraftMessageScalarRelationFilter = {
    is?: DraftMessageWhereInput
    isNot?: DraftMessageWhereInput
  }

  export type DraftMessageReplyDraftMessageIdRepliedToIdCompoundUniqueInput = {
    draftMessageId: string
    repliedToId: string
  }

  export type DraftMessageReplyCountOrderByAggregateInput = {
    id?: SortOrder
    draftMessageId?: SortOrder
    repliedToId?: SortOrder
  }

  export type DraftMessageReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    draftMessageId?: SortOrder
    repliedToId?: SortOrder
  }

  export type DraftMessageReplyMinOrderByAggregateInput = {
    id?: SortOrder
    draftMessageId?: SortOrder
    repliedToId?: SortOrder
  }

  export type ChatMessageNullableScalarRelationFilter = {
    is?: ChatMessageWhereInput | null
    isNot?: ChatMessageWhereInput | null
  }

  export type DraftMessageNullableScalarRelationFilter = {
    is?: DraftMessageWhereInput | null
    isNot?: DraftMessageWhereInput | null
  }

  export type FileMessageCountOrderByAggregateInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileFullName?: SortOrder
    fileSize?: SortOrder
    fileFormat?: SortOrder
    chatMessageId?: SortOrder
    draftMessageId?: SortOrder
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
    draftMessageId?: SortOrder
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
    draftMessageId?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    groupName?: SortOrder
    avatarUrl?: SortOrder
    isDeleted?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    groupName?: SortOrder
    avatarUrl?: SortOrder
    isDeleted?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    groupName?: SortOrder
    avatarUrl?: SortOrder
    isDeleted?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupNullableScalarRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    chatName?: SortOrder
    isGroup?: SortOrder
    avatarUrl?: SortOrder
    isDeleted?: SortOrder
    description?: SortOrder
    groupId?: SortOrder
    lastMessageId?: SortOrder
    pinnedMessageId?: SortOrder
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
    description?: SortOrder
    groupId?: SortOrder
    lastMessageId?: SortOrder
    pinnedMessageId?: SortOrder
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
    description?: SortOrder
    groupId?: SortOrder
    lastMessageId?: SortOrder
    pinnedMessageId?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PinnedChatUserIdChatIdCompoundUniqueInput = {
    userId: string
    chatId: string
  }

  export type PinnedChatCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    pinnedAt?: SortOrder
  }

  export type PinnedChatMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    pinnedAt?: SortOrder
  }

  export type PinnedChatMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    pinnedAt?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ChatMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isCreator?: SortOrder
    chatId?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isCreator?: SortOrder
    chatId?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isCreator?: SortOrder
    chatId?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type GroupMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isCreator?: SortOrder
    groupId?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isCreator?: SortOrder
    groupId?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isCreator?: SortOrder
    groupId?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type DraftMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<DraftMessageCreateWithoutUserInput, DraftMessageUncheckedCreateWithoutUserInput> | DraftMessageCreateWithoutUserInput[] | DraftMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DraftMessageCreateOrConnectWithoutUserInput | DraftMessageCreateOrConnectWithoutUserInput[]
    createMany?: DraftMessageCreateManyUserInputEnvelope
    connect?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
  }

  export type ChatMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type GroupMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type PinnedChatCreateNestedManyWithoutUserInput = {
    create?: XOR<PinnedChatCreateWithoutUserInput, PinnedChatUncheckedCreateWithoutUserInput> | PinnedChatCreateWithoutUserInput[] | PinnedChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PinnedChatCreateOrConnectWithoutUserInput | PinnedChatCreateOrConnectWithoutUserInput[]
    createMany?: PinnedChatCreateManyUserInputEnvelope
    connect?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
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

  export type DraftMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DraftMessageCreateWithoutUserInput, DraftMessageUncheckedCreateWithoutUserInput> | DraftMessageCreateWithoutUserInput[] | DraftMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DraftMessageCreateOrConnectWithoutUserInput | DraftMessageCreateOrConnectWithoutUserInput[]
    createMany?: DraftMessageCreateManyUserInputEnvelope
    connect?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
  }

  export type ChatMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type PinnedChatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PinnedChatCreateWithoutUserInput, PinnedChatUncheckedCreateWithoutUserInput> | PinnedChatCreateWithoutUserInput[] | PinnedChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PinnedChatCreateOrConnectWithoutUserInput | PinnedChatCreateOrConnectWithoutUserInput[]
    createMany?: PinnedChatCreateManyUserInputEnvelope
    connect?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type DraftMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<DraftMessageCreateWithoutUserInput, DraftMessageUncheckedCreateWithoutUserInput> | DraftMessageCreateWithoutUserInput[] | DraftMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DraftMessageCreateOrConnectWithoutUserInput | DraftMessageCreateOrConnectWithoutUserInput[]
    upsert?: DraftMessageUpsertWithWhereUniqueWithoutUserInput | DraftMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DraftMessageCreateManyUserInputEnvelope
    set?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
    disconnect?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
    delete?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
    connect?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
    update?: DraftMessageUpdateWithWhereUniqueWithoutUserInput | DraftMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DraftMessageUpdateManyWithWhereWithoutUserInput | DraftMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DraftMessageScalarWhereInput | DraftMessageScalarWhereInput[]
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

  export type GroupMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type PinnedChatUpdateManyWithoutUserNestedInput = {
    create?: XOR<PinnedChatCreateWithoutUserInput, PinnedChatUncheckedCreateWithoutUserInput> | PinnedChatCreateWithoutUserInput[] | PinnedChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PinnedChatCreateOrConnectWithoutUserInput | PinnedChatCreateOrConnectWithoutUserInput[]
    upsert?: PinnedChatUpsertWithWhereUniqueWithoutUserInput | PinnedChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PinnedChatCreateManyUserInputEnvelope
    set?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
    disconnect?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
    delete?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
    connect?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
    update?: PinnedChatUpdateWithWhereUniqueWithoutUserInput | PinnedChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PinnedChatUpdateManyWithWhereWithoutUserInput | PinnedChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PinnedChatScalarWhereInput | PinnedChatScalarWhereInput[]
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

  export type DraftMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DraftMessageCreateWithoutUserInput, DraftMessageUncheckedCreateWithoutUserInput> | DraftMessageCreateWithoutUserInput[] | DraftMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DraftMessageCreateOrConnectWithoutUserInput | DraftMessageCreateOrConnectWithoutUserInput[]
    upsert?: DraftMessageUpsertWithWhereUniqueWithoutUserInput | DraftMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DraftMessageCreateManyUserInputEnvelope
    set?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
    disconnect?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
    delete?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
    connect?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
    update?: DraftMessageUpdateWithWhereUniqueWithoutUserInput | DraftMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DraftMessageUpdateManyWithWhereWithoutUserInput | DraftMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DraftMessageScalarWhereInput | DraftMessageScalarWhereInput[]
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

  export type GroupMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type PinnedChatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PinnedChatCreateWithoutUserInput, PinnedChatUncheckedCreateWithoutUserInput> | PinnedChatCreateWithoutUserInput[] | PinnedChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PinnedChatCreateOrConnectWithoutUserInput | PinnedChatCreateOrConnectWithoutUserInput[]
    upsert?: PinnedChatUpsertWithWhereUniqueWithoutUserInput | PinnedChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PinnedChatCreateManyUserInputEnvelope
    set?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
    disconnect?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
    delete?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
    connect?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
    update?: PinnedChatUpdateWithWhereUniqueWithoutUserInput | PinnedChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PinnedChatUpdateManyWithWhereWithoutUserInput | PinnedChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PinnedChatScalarWhereInput | PinnedChatScalarWhereInput[]
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

  export type ChatCreateNestedOneWithoutPinnedMessageInput = {
    create?: XOR<ChatCreateWithoutPinnedMessageInput, ChatUncheckedCreateWithoutPinnedMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutPinnedMessageInput
    connect?: ChatWhereUniqueInput
  }

  export type DraftMessageReplyCreateNestedManyWithoutRepliedToInput = {
    create?: XOR<DraftMessageReplyCreateWithoutRepliedToInput, DraftMessageReplyUncheckedCreateWithoutRepliedToInput> | DraftMessageReplyCreateWithoutRepliedToInput[] | DraftMessageReplyUncheckedCreateWithoutRepliedToInput[]
    connectOrCreate?: DraftMessageReplyCreateOrConnectWithoutRepliedToInput | DraftMessageReplyCreateOrConnectWithoutRepliedToInput[]
    createMany?: DraftMessageReplyCreateManyRepliedToInputEnvelope
    connect?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
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

  export type ChatUncheckedCreateNestedOneWithoutPinnedMessageInput = {
    create?: XOR<ChatCreateWithoutPinnedMessageInput, ChatUncheckedCreateWithoutPinnedMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutPinnedMessageInput
    connect?: ChatWhereUniqueInput
  }

  export type DraftMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput = {
    create?: XOR<DraftMessageReplyCreateWithoutRepliedToInput, DraftMessageReplyUncheckedCreateWithoutRepliedToInput> | DraftMessageReplyCreateWithoutRepliedToInput[] | DraftMessageReplyUncheckedCreateWithoutRepliedToInput[]
    connectOrCreate?: DraftMessageReplyCreateOrConnectWithoutRepliedToInput | DraftMessageReplyCreateOrConnectWithoutRepliedToInput[]
    createMany?: DraftMessageReplyCreateManyRepliedToInputEnvelope
    connect?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
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

  export type ChatUpdateOneWithoutPinnedMessageNestedInput = {
    create?: XOR<ChatCreateWithoutPinnedMessageInput, ChatUncheckedCreateWithoutPinnedMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutPinnedMessageInput
    upsert?: ChatUpsertWithoutPinnedMessageInput
    disconnect?: ChatWhereInput | boolean
    delete?: ChatWhereInput | boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutPinnedMessageInput, ChatUpdateWithoutPinnedMessageInput>, ChatUncheckedUpdateWithoutPinnedMessageInput>
  }

  export type DraftMessageReplyUpdateManyWithoutRepliedToNestedInput = {
    create?: XOR<DraftMessageReplyCreateWithoutRepliedToInput, DraftMessageReplyUncheckedCreateWithoutRepliedToInput> | DraftMessageReplyCreateWithoutRepliedToInput[] | DraftMessageReplyUncheckedCreateWithoutRepliedToInput[]
    connectOrCreate?: DraftMessageReplyCreateOrConnectWithoutRepliedToInput | DraftMessageReplyCreateOrConnectWithoutRepliedToInput[]
    upsert?: DraftMessageReplyUpsertWithWhereUniqueWithoutRepliedToInput | DraftMessageReplyUpsertWithWhereUniqueWithoutRepliedToInput[]
    createMany?: DraftMessageReplyCreateManyRepliedToInputEnvelope
    set?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
    disconnect?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
    delete?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
    connect?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
    update?: DraftMessageReplyUpdateWithWhereUniqueWithoutRepliedToInput | DraftMessageReplyUpdateWithWhereUniqueWithoutRepliedToInput[]
    updateMany?: DraftMessageReplyUpdateManyWithWhereWithoutRepliedToInput | DraftMessageReplyUpdateManyWithWhereWithoutRepliedToInput[]
    deleteMany?: DraftMessageReplyScalarWhereInput | DraftMessageReplyScalarWhereInput[]
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

  export type ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput = {
    create?: XOR<ChatCreateWithoutPinnedMessageInput, ChatUncheckedCreateWithoutPinnedMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutPinnedMessageInput
    upsert?: ChatUpsertWithoutPinnedMessageInput
    disconnect?: ChatWhereInput | boolean
    delete?: ChatWhereInput | boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutPinnedMessageInput, ChatUpdateWithoutPinnedMessageInput>, ChatUncheckedUpdateWithoutPinnedMessageInput>
  }

  export type DraftMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput = {
    create?: XOR<DraftMessageReplyCreateWithoutRepliedToInput, DraftMessageReplyUncheckedCreateWithoutRepliedToInput> | DraftMessageReplyCreateWithoutRepliedToInput[] | DraftMessageReplyUncheckedCreateWithoutRepliedToInput[]
    connectOrCreate?: DraftMessageReplyCreateOrConnectWithoutRepliedToInput | DraftMessageReplyCreateOrConnectWithoutRepliedToInput[]
    upsert?: DraftMessageReplyUpsertWithWhereUniqueWithoutRepliedToInput | DraftMessageReplyUpsertWithWhereUniqueWithoutRepliedToInput[]
    createMany?: DraftMessageReplyCreateManyRepliedToInputEnvelope
    set?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
    disconnect?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
    delete?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
    connect?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
    update?: DraftMessageReplyUpdateWithWhereUniqueWithoutRepliedToInput | DraftMessageReplyUpdateWithWhereUniqueWithoutRepliedToInput[]
    updateMany?: DraftMessageReplyUpdateManyWithWhereWithoutRepliedToInput | DraftMessageReplyUpdateManyWithWhereWithoutRepliedToInput[]
    deleteMany?: DraftMessageReplyScalarWhereInput | DraftMessageReplyScalarWhereInput[]
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

  export type DraftMessageCreatefilesEditIdInput = {
    set: string[]
  }

  export type FileMessageCreateNestedManyWithoutDraftMessageInput = {
    create?: XOR<FileMessageCreateWithoutDraftMessageInput, FileMessageUncheckedCreateWithoutDraftMessageInput> | FileMessageCreateWithoutDraftMessageInput[] | FileMessageUncheckedCreateWithoutDraftMessageInput[]
    connectOrCreate?: FileMessageCreateOrConnectWithoutDraftMessageInput | FileMessageCreateOrConnectWithoutDraftMessageInput[]
    createMany?: FileMessageCreateManyDraftMessageInputEnvelope
    connect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
  }

  export type DraftMessageReplyCreateNestedManyWithoutDraftMessageInput = {
    create?: XOR<DraftMessageReplyCreateWithoutDraftMessageInput, DraftMessageReplyUncheckedCreateWithoutDraftMessageInput> | DraftMessageReplyCreateWithoutDraftMessageInput[] | DraftMessageReplyUncheckedCreateWithoutDraftMessageInput[]
    connectOrCreate?: DraftMessageReplyCreateOrConnectWithoutDraftMessageInput | DraftMessageReplyCreateOrConnectWithoutDraftMessageInput[]
    createMany?: DraftMessageReplyCreateManyDraftMessageInputEnvelope
    connect?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutDraftMessagesInput = {
    create?: XOR<UserCreateWithoutDraftMessagesInput, UserUncheckedCreateWithoutDraftMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDraftMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutDraftMessagesInput = {
    create?: XOR<ChatCreateWithoutDraftMessagesInput, ChatUncheckedCreateWithoutDraftMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutDraftMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type FileMessageUncheckedCreateNestedManyWithoutDraftMessageInput = {
    create?: XOR<FileMessageCreateWithoutDraftMessageInput, FileMessageUncheckedCreateWithoutDraftMessageInput> | FileMessageCreateWithoutDraftMessageInput[] | FileMessageUncheckedCreateWithoutDraftMessageInput[]
    connectOrCreate?: FileMessageCreateOrConnectWithoutDraftMessageInput | FileMessageCreateOrConnectWithoutDraftMessageInput[]
    createMany?: FileMessageCreateManyDraftMessageInputEnvelope
    connect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
  }

  export type DraftMessageReplyUncheckedCreateNestedManyWithoutDraftMessageInput = {
    create?: XOR<DraftMessageReplyCreateWithoutDraftMessageInput, DraftMessageReplyUncheckedCreateWithoutDraftMessageInput> | DraftMessageReplyCreateWithoutDraftMessageInput[] | DraftMessageReplyUncheckedCreateWithoutDraftMessageInput[]
    connectOrCreate?: DraftMessageReplyCreateOrConnectWithoutDraftMessageInput | DraftMessageReplyCreateOrConnectWithoutDraftMessageInput[]
    createMany?: DraftMessageReplyCreateManyDraftMessageInputEnvelope
    connect?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
  }

  export type DraftMessageUpdatefilesEditIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FileMessageUpdateManyWithoutDraftMessageNestedInput = {
    create?: XOR<FileMessageCreateWithoutDraftMessageInput, FileMessageUncheckedCreateWithoutDraftMessageInput> | FileMessageCreateWithoutDraftMessageInput[] | FileMessageUncheckedCreateWithoutDraftMessageInput[]
    connectOrCreate?: FileMessageCreateOrConnectWithoutDraftMessageInput | FileMessageCreateOrConnectWithoutDraftMessageInput[]
    upsert?: FileMessageUpsertWithWhereUniqueWithoutDraftMessageInput | FileMessageUpsertWithWhereUniqueWithoutDraftMessageInput[]
    createMany?: FileMessageCreateManyDraftMessageInputEnvelope
    set?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    disconnect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    delete?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    connect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    update?: FileMessageUpdateWithWhereUniqueWithoutDraftMessageInput | FileMessageUpdateWithWhereUniqueWithoutDraftMessageInput[]
    updateMany?: FileMessageUpdateManyWithWhereWithoutDraftMessageInput | FileMessageUpdateManyWithWhereWithoutDraftMessageInput[]
    deleteMany?: FileMessageScalarWhereInput | FileMessageScalarWhereInput[]
  }

  export type DraftMessageReplyUpdateManyWithoutDraftMessageNestedInput = {
    create?: XOR<DraftMessageReplyCreateWithoutDraftMessageInput, DraftMessageReplyUncheckedCreateWithoutDraftMessageInput> | DraftMessageReplyCreateWithoutDraftMessageInput[] | DraftMessageReplyUncheckedCreateWithoutDraftMessageInput[]
    connectOrCreate?: DraftMessageReplyCreateOrConnectWithoutDraftMessageInput | DraftMessageReplyCreateOrConnectWithoutDraftMessageInput[]
    upsert?: DraftMessageReplyUpsertWithWhereUniqueWithoutDraftMessageInput | DraftMessageReplyUpsertWithWhereUniqueWithoutDraftMessageInput[]
    createMany?: DraftMessageReplyCreateManyDraftMessageInputEnvelope
    set?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
    disconnect?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
    delete?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
    connect?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
    update?: DraftMessageReplyUpdateWithWhereUniqueWithoutDraftMessageInput | DraftMessageReplyUpdateWithWhereUniqueWithoutDraftMessageInput[]
    updateMany?: DraftMessageReplyUpdateManyWithWhereWithoutDraftMessageInput | DraftMessageReplyUpdateManyWithWhereWithoutDraftMessageInput[]
    deleteMany?: DraftMessageReplyScalarWhereInput | DraftMessageReplyScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutDraftMessagesNestedInput = {
    create?: XOR<UserCreateWithoutDraftMessagesInput, UserUncheckedCreateWithoutDraftMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDraftMessagesInput
    upsert?: UserUpsertWithoutDraftMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDraftMessagesInput, UserUpdateWithoutDraftMessagesInput>, UserUncheckedUpdateWithoutDraftMessagesInput>
  }

  export type ChatUpdateOneRequiredWithoutDraftMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutDraftMessagesInput, ChatUncheckedCreateWithoutDraftMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutDraftMessagesInput
    upsert?: ChatUpsertWithoutDraftMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutDraftMessagesInput, ChatUpdateWithoutDraftMessagesInput>, ChatUncheckedUpdateWithoutDraftMessagesInput>
  }

  export type FileMessageUncheckedUpdateManyWithoutDraftMessageNestedInput = {
    create?: XOR<FileMessageCreateWithoutDraftMessageInput, FileMessageUncheckedCreateWithoutDraftMessageInput> | FileMessageCreateWithoutDraftMessageInput[] | FileMessageUncheckedCreateWithoutDraftMessageInput[]
    connectOrCreate?: FileMessageCreateOrConnectWithoutDraftMessageInput | FileMessageCreateOrConnectWithoutDraftMessageInput[]
    upsert?: FileMessageUpsertWithWhereUniqueWithoutDraftMessageInput | FileMessageUpsertWithWhereUniqueWithoutDraftMessageInput[]
    createMany?: FileMessageCreateManyDraftMessageInputEnvelope
    set?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    disconnect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    delete?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    connect?: FileMessageWhereUniqueInput | FileMessageWhereUniqueInput[]
    update?: FileMessageUpdateWithWhereUniqueWithoutDraftMessageInput | FileMessageUpdateWithWhereUniqueWithoutDraftMessageInput[]
    updateMany?: FileMessageUpdateManyWithWhereWithoutDraftMessageInput | FileMessageUpdateManyWithWhereWithoutDraftMessageInput[]
    deleteMany?: FileMessageScalarWhereInput | FileMessageScalarWhereInput[]
  }

  export type DraftMessageReplyUncheckedUpdateManyWithoutDraftMessageNestedInput = {
    create?: XOR<DraftMessageReplyCreateWithoutDraftMessageInput, DraftMessageReplyUncheckedCreateWithoutDraftMessageInput> | DraftMessageReplyCreateWithoutDraftMessageInput[] | DraftMessageReplyUncheckedCreateWithoutDraftMessageInput[]
    connectOrCreate?: DraftMessageReplyCreateOrConnectWithoutDraftMessageInput | DraftMessageReplyCreateOrConnectWithoutDraftMessageInput[]
    upsert?: DraftMessageReplyUpsertWithWhereUniqueWithoutDraftMessageInput | DraftMessageReplyUpsertWithWhereUniqueWithoutDraftMessageInput[]
    createMany?: DraftMessageReplyCreateManyDraftMessageInputEnvelope
    set?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
    disconnect?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
    delete?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
    connect?: DraftMessageReplyWhereUniqueInput | DraftMessageReplyWhereUniqueInput[]
    update?: DraftMessageReplyUpdateWithWhereUniqueWithoutDraftMessageInput | DraftMessageReplyUpdateWithWhereUniqueWithoutDraftMessageInput[]
    updateMany?: DraftMessageReplyUpdateManyWithWhereWithoutDraftMessageInput | DraftMessageReplyUpdateManyWithWhereWithoutDraftMessageInput[]
    deleteMany?: DraftMessageReplyScalarWhereInput | DraftMessageReplyScalarWhereInput[]
  }

  export type DraftMessageCreateNestedOneWithoutRepliedToLinksInput = {
    create?: XOR<DraftMessageCreateWithoutRepliedToLinksInput, DraftMessageUncheckedCreateWithoutRepliedToLinksInput>
    connectOrCreate?: DraftMessageCreateOrConnectWithoutRepliedToLinksInput
    connect?: DraftMessageWhereUniqueInput
  }

  export type ChatMessageCreateNestedOneWithoutRepliedFromDraftsInput = {
    create?: XOR<ChatMessageCreateWithoutRepliedFromDraftsInput, ChatMessageUncheckedCreateWithoutRepliedFromDraftsInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRepliedFromDraftsInput
    connect?: ChatMessageWhereUniqueInput
  }

  export type DraftMessageUpdateOneRequiredWithoutRepliedToLinksNestedInput = {
    create?: XOR<DraftMessageCreateWithoutRepliedToLinksInput, DraftMessageUncheckedCreateWithoutRepliedToLinksInput>
    connectOrCreate?: DraftMessageCreateOrConnectWithoutRepliedToLinksInput
    upsert?: DraftMessageUpsertWithoutRepliedToLinksInput
    connect?: DraftMessageWhereUniqueInput
    update?: XOR<XOR<DraftMessageUpdateToOneWithWhereWithoutRepliedToLinksInput, DraftMessageUpdateWithoutRepliedToLinksInput>, DraftMessageUncheckedUpdateWithoutRepliedToLinksInput>
  }

  export type ChatMessageUpdateOneRequiredWithoutRepliedFromDraftsNestedInput = {
    create?: XOR<ChatMessageCreateWithoutRepliedFromDraftsInput, ChatMessageUncheckedCreateWithoutRepliedFromDraftsInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRepliedFromDraftsInput
    upsert?: ChatMessageUpsertWithoutRepliedFromDraftsInput
    connect?: ChatMessageWhereUniqueInput
    update?: XOR<XOR<ChatMessageUpdateToOneWithWhereWithoutRepliedFromDraftsInput, ChatMessageUpdateWithoutRepliedFromDraftsInput>, ChatMessageUncheckedUpdateWithoutRepliedFromDraftsInput>
  }

  export type ChatMessageCreateNestedOneWithoutFilesInput = {
    create?: XOR<ChatMessageCreateWithoutFilesInput, ChatMessageUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutFilesInput
    connect?: ChatMessageWhereUniqueInput
  }

  export type DraftMessageCreateNestedOneWithoutFilesInput = {
    create?: XOR<DraftMessageCreateWithoutFilesInput, DraftMessageUncheckedCreateWithoutFilesInput>
    connectOrCreate?: DraftMessageCreateOrConnectWithoutFilesInput
    connect?: DraftMessageWhereUniqueInput
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

  export type ChatMessageUpdateOneWithoutFilesNestedInput = {
    create?: XOR<ChatMessageCreateWithoutFilesInput, ChatMessageUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutFilesInput
    upsert?: ChatMessageUpsertWithoutFilesInput
    disconnect?: ChatMessageWhereInput | boolean
    delete?: ChatMessageWhereInput | boolean
    connect?: ChatMessageWhereUniqueInput
    update?: XOR<XOR<ChatMessageUpdateToOneWithWhereWithoutFilesInput, ChatMessageUpdateWithoutFilesInput>, ChatMessageUncheckedUpdateWithoutFilesInput>
  }

  export type DraftMessageUpdateOneWithoutFilesNestedInput = {
    create?: XOR<DraftMessageCreateWithoutFilesInput, DraftMessageUncheckedCreateWithoutFilesInput>
    connectOrCreate?: DraftMessageCreateOrConnectWithoutFilesInput
    upsert?: DraftMessageUpsertWithoutFilesInput
    disconnect?: DraftMessageWhereInput | boolean
    delete?: DraftMessageWhereInput | boolean
    connect?: DraftMessageWhereUniqueInput
    update?: XOR<XOR<DraftMessageUpdateToOneWithWhereWithoutFilesInput, DraftMessageUpdateWithoutFilesInput>, DraftMessageUncheckedUpdateWithoutFilesInput>
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

  export type GroupMemberCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutGroupInput = {
    create?: XOR<ChatCreateWithoutGroupInput, ChatUncheckedCreateWithoutGroupInput> | ChatCreateWithoutGroupInput[] | ChatUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutGroupInput | ChatCreateOrConnectWithoutGroupInput[]
    createMany?: ChatCreateManyGroupInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<ChatCreateWithoutGroupInput, ChatUncheckedCreateWithoutGroupInput> | ChatCreateWithoutGroupInput[] | ChatUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutGroupInput | ChatCreateOrConnectWithoutGroupInput[]
    createMany?: ChatCreateManyGroupInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type GroupMemberUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ChatCreateWithoutGroupInput, ChatUncheckedCreateWithoutGroupInput> | ChatCreateWithoutGroupInput[] | ChatUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutGroupInput | ChatCreateOrConnectWithoutGroupInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutGroupInput | ChatUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ChatCreateManyGroupInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutGroupInput | ChatUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutGroupInput | ChatUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ChatCreateWithoutGroupInput, ChatUncheckedCreateWithoutGroupInput> | ChatCreateWithoutGroupInput[] | ChatUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutGroupInput | ChatCreateOrConnectWithoutGroupInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutGroupInput | ChatUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ChatCreateManyGroupInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutGroupInput | ChatUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutGroupInput | ChatUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutChatsInput = {
    create?: XOR<GroupCreateWithoutChatsInput, GroupUncheckedCreateWithoutChatsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutChatsInput
    connect?: GroupWhereUniqueInput
  }

  export type ChatMessageCreateNestedOneWithoutLastMessageForChatInput = {
    create?: XOR<ChatMessageCreateWithoutLastMessageForChatInput, ChatMessageUncheckedCreateWithoutLastMessageForChatInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutLastMessageForChatInput
    connect?: ChatMessageWhereUniqueInput
  }

  export type ChatMessageCreateNestedOneWithoutPinnedInChatInput = {
    create?: XOR<ChatMessageCreateWithoutPinnedInChatInput, ChatMessageUncheckedCreateWithoutPinnedInChatInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutPinnedInChatInput
    connect?: ChatMessageWhereUniqueInput
  }

  export type PinnedChatCreateNestedManyWithoutChatInput = {
    create?: XOR<PinnedChatCreateWithoutChatInput, PinnedChatUncheckedCreateWithoutChatInput> | PinnedChatCreateWithoutChatInput[] | PinnedChatUncheckedCreateWithoutChatInput[]
    connectOrCreate?: PinnedChatCreateOrConnectWithoutChatInput | PinnedChatCreateOrConnectWithoutChatInput[]
    createMany?: PinnedChatCreateManyChatInputEnvelope
    connect?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
  }

  export type DraftMessageCreateNestedManyWithoutChatInput = {
    create?: XOR<DraftMessageCreateWithoutChatInput, DraftMessageUncheckedCreateWithoutChatInput> | DraftMessageCreateWithoutChatInput[] | DraftMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: DraftMessageCreateOrConnectWithoutChatInput | DraftMessageCreateOrConnectWithoutChatInput[]
    createMany?: DraftMessageCreateManyChatInputEnvelope
    connect?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
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

  export type PinnedChatUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<PinnedChatCreateWithoutChatInput, PinnedChatUncheckedCreateWithoutChatInput> | PinnedChatCreateWithoutChatInput[] | PinnedChatUncheckedCreateWithoutChatInput[]
    connectOrCreate?: PinnedChatCreateOrConnectWithoutChatInput | PinnedChatCreateOrConnectWithoutChatInput[]
    createMany?: PinnedChatCreateManyChatInputEnvelope
    connect?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
  }

  export type DraftMessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<DraftMessageCreateWithoutChatInput, DraftMessageUncheckedCreateWithoutChatInput> | DraftMessageCreateWithoutChatInput[] | DraftMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: DraftMessageCreateOrConnectWithoutChatInput | DraftMessageCreateOrConnectWithoutChatInput[]
    createMany?: DraftMessageCreateManyChatInputEnvelope
    connect?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
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

  export type GroupUpdateOneWithoutChatsNestedInput = {
    create?: XOR<GroupCreateWithoutChatsInput, GroupUncheckedCreateWithoutChatsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutChatsInput
    upsert?: GroupUpsertWithoutChatsInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutChatsInput, GroupUpdateWithoutChatsInput>, GroupUncheckedUpdateWithoutChatsInput>
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

  export type ChatMessageUpdateOneWithoutPinnedInChatNestedInput = {
    create?: XOR<ChatMessageCreateWithoutPinnedInChatInput, ChatMessageUncheckedCreateWithoutPinnedInChatInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutPinnedInChatInput
    upsert?: ChatMessageUpsertWithoutPinnedInChatInput
    disconnect?: ChatMessageWhereInput | boolean
    delete?: ChatMessageWhereInput | boolean
    connect?: ChatMessageWhereUniqueInput
    update?: XOR<XOR<ChatMessageUpdateToOneWithWhereWithoutPinnedInChatInput, ChatMessageUpdateWithoutPinnedInChatInput>, ChatMessageUncheckedUpdateWithoutPinnedInChatInput>
  }

  export type PinnedChatUpdateManyWithoutChatNestedInput = {
    create?: XOR<PinnedChatCreateWithoutChatInput, PinnedChatUncheckedCreateWithoutChatInput> | PinnedChatCreateWithoutChatInput[] | PinnedChatUncheckedCreateWithoutChatInput[]
    connectOrCreate?: PinnedChatCreateOrConnectWithoutChatInput | PinnedChatCreateOrConnectWithoutChatInput[]
    upsert?: PinnedChatUpsertWithWhereUniqueWithoutChatInput | PinnedChatUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: PinnedChatCreateManyChatInputEnvelope
    set?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
    disconnect?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
    delete?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
    connect?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
    update?: PinnedChatUpdateWithWhereUniqueWithoutChatInput | PinnedChatUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: PinnedChatUpdateManyWithWhereWithoutChatInput | PinnedChatUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: PinnedChatScalarWhereInput | PinnedChatScalarWhereInput[]
  }

  export type DraftMessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<DraftMessageCreateWithoutChatInput, DraftMessageUncheckedCreateWithoutChatInput> | DraftMessageCreateWithoutChatInput[] | DraftMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: DraftMessageCreateOrConnectWithoutChatInput | DraftMessageCreateOrConnectWithoutChatInput[]
    upsert?: DraftMessageUpsertWithWhereUniqueWithoutChatInput | DraftMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: DraftMessageCreateManyChatInputEnvelope
    set?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
    disconnect?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
    delete?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
    connect?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
    update?: DraftMessageUpdateWithWhereUniqueWithoutChatInput | DraftMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: DraftMessageUpdateManyWithWhereWithoutChatInput | DraftMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: DraftMessageScalarWhereInput | DraftMessageScalarWhereInput[]
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

  export type PinnedChatUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<PinnedChatCreateWithoutChatInput, PinnedChatUncheckedCreateWithoutChatInput> | PinnedChatCreateWithoutChatInput[] | PinnedChatUncheckedCreateWithoutChatInput[]
    connectOrCreate?: PinnedChatCreateOrConnectWithoutChatInput | PinnedChatCreateOrConnectWithoutChatInput[]
    upsert?: PinnedChatUpsertWithWhereUniqueWithoutChatInput | PinnedChatUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: PinnedChatCreateManyChatInputEnvelope
    set?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
    disconnect?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
    delete?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
    connect?: PinnedChatWhereUniqueInput | PinnedChatWhereUniqueInput[]
    update?: PinnedChatUpdateWithWhereUniqueWithoutChatInput | PinnedChatUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: PinnedChatUpdateManyWithWhereWithoutChatInput | PinnedChatUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: PinnedChatScalarWhereInput | PinnedChatScalarWhereInput[]
  }

  export type DraftMessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<DraftMessageCreateWithoutChatInput, DraftMessageUncheckedCreateWithoutChatInput> | DraftMessageCreateWithoutChatInput[] | DraftMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: DraftMessageCreateOrConnectWithoutChatInput | DraftMessageCreateOrConnectWithoutChatInput[]
    upsert?: DraftMessageUpsertWithWhereUniqueWithoutChatInput | DraftMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: DraftMessageCreateManyChatInputEnvelope
    set?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
    disconnect?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
    delete?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
    connect?: DraftMessageWhereUniqueInput | DraftMessageWhereUniqueInput[]
    update?: DraftMessageUpdateWithWhereUniqueWithoutChatInput | DraftMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: DraftMessageUpdateManyWithWhereWithoutChatInput | DraftMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: DraftMessageScalarWhereInput | DraftMessageScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutPinnedChatsInput = {
    create?: XOR<UserCreateWithoutPinnedChatsInput, UserUncheckedCreateWithoutPinnedChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPinnedChatsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutPinnedByUserInput = {
    create?: XOR<ChatCreateWithoutPinnedByUserInput, ChatUncheckedCreateWithoutPinnedByUserInput>
    connectOrCreate?: ChatCreateOrConnectWithoutPinnedByUserInput
    connect?: ChatWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPinnedChatsNestedInput = {
    create?: XOR<UserCreateWithoutPinnedChatsInput, UserUncheckedCreateWithoutPinnedChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPinnedChatsInput
    upsert?: UserUpsertWithoutPinnedChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPinnedChatsInput, UserUpdateWithoutPinnedChatsInput>, UserUncheckedUpdateWithoutPinnedChatsInput>
  }

  export type ChatUpdateOneRequiredWithoutPinnedByUserNestedInput = {
    create?: XOR<ChatCreateWithoutPinnedByUserInput, ChatUncheckedCreateWithoutPinnedByUserInput>
    connectOrCreate?: ChatCreateOrConnectWithoutPinnedByUserInput
    upsert?: ChatUpsertWithoutPinnedByUserInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutPinnedByUserInput, ChatUpdateWithoutPinnedByUserInput>, ChatUncheckedUpdateWithoutPinnedByUserInput>
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

  export type UserCreateNestedOneWithoutGroupMembershipsInput = {
    create?: XOR<UserCreateWithoutGroupMembershipsInput, UserUncheckedCreateWithoutGroupMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGroupMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutGroupMembershipsInput, UserUncheckedCreateWithoutGroupMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMembershipsInput
    upsert?: UserUpsertWithoutGroupMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupMembershipsInput, UserUpdateWithoutGroupMembershipsInput>, UserUncheckedUpdateWithoutGroupMembershipsInput>
  }

  export type GroupUpdateOneWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    upsert?: GroupUpsertWithoutMembersInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMembersInput, GroupUpdateWithoutMembersInput>, GroupUncheckedUpdateWithoutMembersInput>
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
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatCreateNestedOneWithoutLastMessageInput
    pinnedInChat?: ChatCreateNestedOneWithoutPinnedMessageInput
    repliedFromDrafts?: DraftMessageReplyCreateNestedManyWithoutRepliedToInput
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
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyUncheckedCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatUncheckedCreateNestedOneWithoutLastMessageInput
    pinnedInChat?: ChatUncheckedCreateNestedOneWithoutPinnedMessageInput
    repliedFromDrafts?: DraftMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
  }

  export type ChatMessageCreateOrConnectWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageCreateManyUserInputEnvelope = {
    data: ChatMessageCreateManyUserInput | ChatMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DraftMessageCreateWithoutUserInput = {
    id?: string
    text?: string | null
    isForwarded?: boolean
    editId?: string | null
    filesEditId?: DraftMessageCreatefilesEditIdInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutDraftMessageInput
    repliedToLinks?: DraftMessageReplyCreateNestedManyWithoutDraftMessageInput
    chat: ChatCreateNestedOneWithoutDraftMessagesInput
  }

  export type DraftMessageUncheckedCreateWithoutUserInput = {
    id?: string
    text?: string | null
    isForwarded?: boolean
    editId?: string | null
    filesEditId?: DraftMessageCreatefilesEditIdInput | string[]
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutDraftMessageInput
    repliedToLinks?: DraftMessageReplyUncheckedCreateNestedManyWithoutDraftMessageInput
  }

  export type DraftMessageCreateOrConnectWithoutUserInput = {
    where: DraftMessageWhereUniqueInput
    create: XOR<DraftMessageCreateWithoutUserInput, DraftMessageUncheckedCreateWithoutUserInput>
  }

  export type DraftMessageCreateManyUserInputEnvelope = {
    data: DraftMessageCreateManyUserInput | DraftMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMemberCreateWithoutUserInput = {
    id?: string
    isCreator?: boolean | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMembersInput
  }

  export type ChatMemberUncheckedCreateWithoutUserInput = {
    id?: string
    isCreator?: boolean | null
    chatId: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMemberCreateOrConnectWithoutUserInput = {
    where: ChatMemberWhereUniqueInput
    create: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput>
  }

  export type ChatMemberCreateManyUserInputEnvelope = {
    data: ChatMemberCreateManyUserInput | ChatMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberCreateWithoutUserInput = {
    id?: string
    isCreator?: boolean | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateWithoutUserInput = {
    id?: string
    isCreator?: boolean | null
    groupId?: string | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberCreateOrConnectWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberCreateManyUserInputEnvelope = {
    data: GroupMemberCreateManyUserInput | GroupMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PinnedChatCreateWithoutUserInput = {
    id?: string
    pinnedAt?: Date | string
    chat: ChatCreateNestedOneWithoutPinnedByUserInput
  }

  export type PinnedChatUncheckedCreateWithoutUserInput = {
    id?: string
    chatId: string
    pinnedAt?: Date | string
  }

  export type PinnedChatCreateOrConnectWithoutUserInput = {
    where: PinnedChatWhereUniqueInput
    create: XOR<PinnedChatCreateWithoutUserInput, PinnedChatUncheckedCreateWithoutUserInput>
  }

  export type PinnedChatCreateManyUserInputEnvelope = {
    data: PinnedChatCreateManyUserInput | PinnedChatCreateManyUserInput[]
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
    chatMessage?: ChatMessageCreateNestedOneWithoutFilesInput
    draftMessage?: DraftMessageCreateNestedOneWithoutFilesInput
    chat: ChatCreateNestedOneWithoutFilesInput
  }

  export type FileMessageUncheckedCreateWithoutUserInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    chatMessageId?: string | null
    draftMessageId?: string | null
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
    userId?: StringFilter<"ChatMessage"> | string
    chatId?: StringFilter<"ChatMessage"> | string
    readCount?: StringNullableFilter<"ChatMessage"> | string | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type DraftMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: DraftMessageWhereUniqueInput
    update: XOR<DraftMessageUpdateWithoutUserInput, DraftMessageUncheckedUpdateWithoutUserInput>
    create: XOR<DraftMessageCreateWithoutUserInput, DraftMessageUncheckedCreateWithoutUserInput>
  }

  export type DraftMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: DraftMessageWhereUniqueInput
    data: XOR<DraftMessageUpdateWithoutUserInput, DraftMessageUncheckedUpdateWithoutUserInput>
  }

  export type DraftMessageUpdateManyWithWhereWithoutUserInput = {
    where: DraftMessageScalarWhereInput
    data: XOR<DraftMessageUpdateManyMutationInput, DraftMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type DraftMessageScalarWhereInput = {
    AND?: DraftMessageScalarWhereInput | DraftMessageScalarWhereInput[]
    OR?: DraftMessageScalarWhereInput[]
    NOT?: DraftMessageScalarWhereInput | DraftMessageScalarWhereInput[]
    id?: StringFilter<"DraftMessage"> | string
    text?: StringNullableFilter<"DraftMessage"> | string | null
    isForwarded?: BoolFilter<"DraftMessage"> | boolean
    editId?: StringNullableFilter<"DraftMessage"> | string | null
    filesEditId?: StringNullableListFilter<"DraftMessage">
    userId?: StringFilter<"DraftMessage"> | string
    chatId?: StringFilter<"DraftMessage"> | string
    createdAt?: DateTimeFilter<"DraftMessage"> | Date | string
    updatedAt?: DateTimeFilter<"DraftMessage"> | Date | string
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
    createdAt?: DateTimeFilter<"ChatMember"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMember"> | Date | string
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutUserInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupMemberScalarWhereInput = {
    AND?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    OR?: GroupMemberScalarWhereInput[]
    NOT?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    id?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    isCreator?: BoolNullableFilter<"GroupMember"> | boolean | null
    groupId?: StringNullableFilter<"GroupMember"> | string | null
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    createdAt?: DateTimeFilter<"GroupMember"> | Date | string
    updatedAt?: DateTimeFilter<"GroupMember"> | Date | string
  }

  export type PinnedChatUpsertWithWhereUniqueWithoutUserInput = {
    where: PinnedChatWhereUniqueInput
    update: XOR<PinnedChatUpdateWithoutUserInput, PinnedChatUncheckedUpdateWithoutUserInput>
    create: XOR<PinnedChatCreateWithoutUserInput, PinnedChatUncheckedCreateWithoutUserInput>
  }

  export type PinnedChatUpdateWithWhereUniqueWithoutUserInput = {
    where: PinnedChatWhereUniqueInput
    data: XOR<PinnedChatUpdateWithoutUserInput, PinnedChatUncheckedUpdateWithoutUserInput>
  }

  export type PinnedChatUpdateManyWithWhereWithoutUserInput = {
    where: PinnedChatScalarWhereInput
    data: XOR<PinnedChatUpdateManyMutationInput, PinnedChatUncheckedUpdateManyWithoutUserInput>
  }

  export type PinnedChatScalarWhereInput = {
    AND?: PinnedChatScalarWhereInput | PinnedChatScalarWhereInput[]
    OR?: PinnedChatScalarWhereInput[]
    NOT?: PinnedChatScalarWhereInput | PinnedChatScalarWhereInput[]
    id?: StringFilter<"PinnedChat"> | string
    userId?: StringFilter<"PinnedChat"> | string
    chatId?: StringFilter<"PinnedChat"> | string
    pinnedAt?: DateTimeFilter<"PinnedChat"> | Date | string
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
    chatMessageId?: StringNullableFilter<"FileMessage"> | string | null
    draftMessageId?: StringNullableFilter<"FileMessage"> | string | null
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
    draftMessage?: DraftMessageCreateNestedOneWithoutFilesInput
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
    draftMessageId?: string | null
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
    description?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutChatsInput
    pinnedMessage?: ChatMessageCreateNestedOneWithoutPinnedInChatInput
    pinnedByUser?: PinnedChatCreateNestedManyWithoutChatInput
    draftMessages?: DraftMessageCreateNestedManyWithoutChatInput
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
    description?: string | null
    groupId?: string | null
    pinnedMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pinnedByUser?: PinnedChatUncheckedCreateNestedManyWithoutChatInput
    draftMessages?: DraftMessageUncheckedCreateNestedManyWithoutChatInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    files?: FileMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutLastMessageInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutLastMessageInput, ChatUncheckedCreateWithoutLastMessageInput>
  }

  export type ChatCreateWithoutPinnedMessageInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutChatsInput
    lastMessage?: ChatMessageCreateNestedOneWithoutLastMessageForChatInput
    pinnedByUser?: PinnedChatCreateNestedManyWithoutChatInput
    draftMessages?: DraftMessageCreateNestedManyWithoutChatInput
    messages?: ChatMessageCreateNestedManyWithoutChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
    files?: FileMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutPinnedMessageInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    groupId?: string | null
    lastMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pinnedByUser?: PinnedChatUncheckedCreateNestedManyWithoutChatInput
    draftMessages?: DraftMessageUncheckedCreateNestedManyWithoutChatInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    files?: FileMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutPinnedMessageInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutPinnedMessageInput, ChatUncheckedCreateWithoutPinnedMessageInput>
  }

  export type DraftMessageReplyCreateWithoutRepliedToInput = {
    id?: string
    draftMessage: DraftMessageCreateNestedOneWithoutRepliedToLinksInput
  }

  export type DraftMessageReplyUncheckedCreateWithoutRepliedToInput = {
    id?: string
    draftMessageId: string
  }

  export type DraftMessageReplyCreateOrConnectWithoutRepliedToInput = {
    where: DraftMessageReplyWhereUniqueInput
    create: XOR<DraftMessageReplyCreateWithoutRepliedToInput, DraftMessageReplyUncheckedCreateWithoutRepliedToInput>
  }

  export type DraftMessageReplyCreateManyRepliedToInputEnvelope = {
    data: DraftMessageReplyCreateManyRepliedToInput | DraftMessageReplyCreateManyRepliedToInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    username: string
    bio?: string | null
    email: string
    password: string
    avatarUrl?: string | null
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    draftMessages?: DraftMessageCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberCreateNestedManyWithoutUserInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    pinnedChats?: PinnedChatCreateNestedManyWithoutUserInput
    files?: FileMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    username: string
    bio?: string | null
    email: string
    password: string
    avatarUrl?: string | null
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    draftMessages?: DraftMessageUncheckedCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    pinnedChats?: PinnedChatUncheckedCreateNestedManyWithoutUserInput
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
    description?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutChatsInput
    lastMessage?: ChatMessageCreateNestedOneWithoutLastMessageForChatInput
    pinnedMessage?: ChatMessageCreateNestedOneWithoutPinnedInChatInput
    pinnedByUser?: PinnedChatCreateNestedManyWithoutChatInput
    draftMessages?: DraftMessageCreateNestedManyWithoutChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
    files?: FileMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    groupId?: string | null
    lastMessageId?: string | null
    pinnedMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pinnedByUser?: PinnedChatUncheckedCreateNestedManyWithoutChatInput
    draftMessages?: DraftMessageUncheckedCreateNestedManyWithoutChatInput
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
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutChatsNestedInput
    pinnedMessage?: ChatMessageUpdateOneWithoutPinnedInChatNestedInput
    pinnedByUser?: PinnedChatUpdateManyWithoutChatNestedInput
    draftMessages?: DraftMessageUpdateManyWithoutChatNestedInput
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
    description?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pinnedByUser?: PinnedChatUncheckedUpdateManyWithoutChatNestedInput
    draftMessages?: DraftMessageUncheckedUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUpsertWithoutPinnedMessageInput = {
    update: XOR<ChatUpdateWithoutPinnedMessageInput, ChatUncheckedUpdateWithoutPinnedMessageInput>
    create: XOR<ChatCreateWithoutPinnedMessageInput, ChatUncheckedCreateWithoutPinnedMessageInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutPinnedMessageInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutPinnedMessageInput, ChatUncheckedUpdateWithoutPinnedMessageInput>
  }

  export type ChatUpdateWithoutPinnedMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutChatsNestedInput
    lastMessage?: ChatMessageUpdateOneWithoutLastMessageForChatNestedInput
    pinnedByUser?: PinnedChatUpdateManyWithoutChatNestedInput
    draftMessages?: DraftMessageUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
    files?: FileMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutPinnedMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pinnedByUser?: PinnedChatUncheckedUpdateManyWithoutChatNestedInput
    draftMessages?: DraftMessageUncheckedUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type DraftMessageReplyUpsertWithWhereUniqueWithoutRepliedToInput = {
    where: DraftMessageReplyWhereUniqueInput
    update: XOR<DraftMessageReplyUpdateWithoutRepliedToInput, DraftMessageReplyUncheckedUpdateWithoutRepliedToInput>
    create: XOR<DraftMessageReplyCreateWithoutRepliedToInput, DraftMessageReplyUncheckedCreateWithoutRepliedToInput>
  }

  export type DraftMessageReplyUpdateWithWhereUniqueWithoutRepliedToInput = {
    where: DraftMessageReplyWhereUniqueInput
    data: XOR<DraftMessageReplyUpdateWithoutRepliedToInput, DraftMessageReplyUncheckedUpdateWithoutRepliedToInput>
  }

  export type DraftMessageReplyUpdateManyWithWhereWithoutRepliedToInput = {
    where: DraftMessageReplyScalarWhereInput
    data: XOR<DraftMessageReplyUpdateManyMutationInput, DraftMessageReplyUncheckedUpdateManyWithoutRepliedToInput>
  }

  export type DraftMessageReplyScalarWhereInput = {
    AND?: DraftMessageReplyScalarWhereInput | DraftMessageReplyScalarWhereInput[]
    OR?: DraftMessageReplyScalarWhereInput[]
    NOT?: DraftMessageReplyScalarWhereInput | DraftMessageReplyScalarWhereInput[]
    id?: StringFilter<"DraftMessageReply"> | string
    draftMessageId?: StringFilter<"DraftMessageReply"> | string
    repliedToId?: StringFilter<"DraftMessageReply"> | string
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
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draftMessages?: DraftMessageUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUpdateManyWithoutUserNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    pinnedChats?: PinnedChatUpdateManyWithoutUserNestedInput
    files?: FileMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draftMessages?: DraftMessageUncheckedUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    pinnedChats?: PinnedChatUncheckedUpdateManyWithoutUserNestedInput
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
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutChatsNestedInput
    lastMessage?: ChatMessageUpdateOneWithoutLastMessageForChatNestedInput
    pinnedMessage?: ChatMessageUpdateOneWithoutPinnedInChatNestedInput
    pinnedByUser?: PinnedChatUpdateManyWithoutChatNestedInput
    draftMessages?: DraftMessageUpdateManyWithoutChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
    files?: FileMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pinnedByUser?: PinnedChatUncheckedUpdateManyWithoutChatNestedInput
    draftMessages?: DraftMessageUncheckedUpdateManyWithoutChatNestedInput
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
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyCreateNestedManyWithoutRepliedToInput
    lastMessageForChat?: ChatCreateNestedOneWithoutLastMessageInput
    pinnedInChat?: ChatCreateNestedOneWithoutPinnedMessageInput
    repliedFromDrafts?: DraftMessageReplyCreateNestedManyWithoutRepliedToInput
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
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
    lastMessageForChat?: ChatUncheckedCreateNestedOneWithoutLastMessageInput
    pinnedInChat?: ChatUncheckedCreateNestedOneWithoutPinnedMessageInput
    repliedFromDrafts?: DraftMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
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
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    repliedToLinks?: ChatMessageReplyCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatCreateNestedOneWithoutLastMessageInput
    pinnedInChat?: ChatCreateNestedOneWithoutPinnedMessageInput
    repliedFromDrafts?: DraftMessageReplyCreateNestedManyWithoutRepliedToInput
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
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    repliedToLinks?: ChatMessageReplyUncheckedCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatUncheckedCreateNestedOneWithoutLastMessageInput
    pinnedInChat?: ChatUncheckedCreateNestedOneWithoutPinnedMessageInput
    repliedFromDrafts?: DraftMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
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
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUpdateManyWithoutRepliedToNestedInput
    lastMessageForChat?: ChatUpdateOneWithoutLastMessageNestedInput
    pinnedInChat?: ChatUpdateOneWithoutPinnedMessageNestedInput
    repliedFromDrafts?: DraftMessageReplyUpdateManyWithoutRepliedToNestedInput
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
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
    lastMessageForChat?: ChatUncheckedUpdateOneWithoutLastMessageNestedInput
    pinnedInChat?: ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput
    repliedFromDrafts?: DraftMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
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
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    repliedToLinks?: ChatMessageReplyUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUpdateOneWithoutLastMessageNestedInput
    pinnedInChat?: ChatUpdateOneWithoutPinnedMessageNestedInput
    repliedFromDrafts?: DraftMessageReplyUpdateManyWithoutRepliedToNestedInput
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
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    repliedToLinks?: ChatMessageReplyUncheckedUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUncheckedUpdateOneWithoutLastMessageNestedInput
    pinnedInChat?: ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput
    repliedFromDrafts?: DraftMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
  }

  export type FileMessageCreateWithoutDraftMessageInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMessage?: ChatMessageCreateNestedOneWithoutFilesInput
    user: UserCreateNestedOneWithoutFilesInput
    chat: ChatCreateNestedOneWithoutFilesInput
  }

  export type FileMessageUncheckedCreateWithoutDraftMessageInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    chatMessageId?: string | null
    userId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileMessageCreateOrConnectWithoutDraftMessageInput = {
    where: FileMessageWhereUniqueInput
    create: XOR<FileMessageCreateWithoutDraftMessageInput, FileMessageUncheckedCreateWithoutDraftMessageInput>
  }

  export type FileMessageCreateManyDraftMessageInputEnvelope = {
    data: FileMessageCreateManyDraftMessageInput | FileMessageCreateManyDraftMessageInput[]
    skipDuplicates?: boolean
  }

  export type DraftMessageReplyCreateWithoutDraftMessageInput = {
    id?: string
    repliedTo: ChatMessageCreateNestedOneWithoutRepliedFromDraftsInput
  }

  export type DraftMessageReplyUncheckedCreateWithoutDraftMessageInput = {
    id?: string
    repliedToId: string
  }

  export type DraftMessageReplyCreateOrConnectWithoutDraftMessageInput = {
    where: DraftMessageReplyWhereUniqueInput
    create: XOR<DraftMessageReplyCreateWithoutDraftMessageInput, DraftMessageReplyUncheckedCreateWithoutDraftMessageInput>
  }

  export type DraftMessageReplyCreateManyDraftMessageInputEnvelope = {
    data: DraftMessageReplyCreateManyDraftMessageInput | DraftMessageReplyCreateManyDraftMessageInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDraftMessagesInput = {
    id?: string
    username: string
    bio?: string | null
    email: string
    password: string
    avatarUrl?: string | null
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberCreateNestedManyWithoutUserInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    pinnedChats?: PinnedChatCreateNestedManyWithoutUserInput
    files?: FileMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDraftMessagesInput = {
    id?: string
    username: string
    bio?: string | null
    email: string
    password: string
    avatarUrl?: string | null
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    pinnedChats?: PinnedChatUncheckedCreateNestedManyWithoutUserInput
    files?: FileMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDraftMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDraftMessagesInput, UserUncheckedCreateWithoutDraftMessagesInput>
  }

  export type ChatCreateWithoutDraftMessagesInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutChatsInput
    lastMessage?: ChatMessageCreateNestedOneWithoutLastMessageForChatInput
    pinnedMessage?: ChatMessageCreateNestedOneWithoutPinnedInChatInput
    pinnedByUser?: PinnedChatCreateNestedManyWithoutChatInput
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
    description?: string | null
    groupId?: string | null
    lastMessageId?: string | null
    pinnedMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pinnedByUser?: PinnedChatUncheckedCreateNestedManyWithoutChatInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    files?: FileMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutDraftMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutDraftMessagesInput, ChatUncheckedCreateWithoutDraftMessagesInput>
  }

  export type FileMessageUpsertWithWhereUniqueWithoutDraftMessageInput = {
    where: FileMessageWhereUniqueInput
    update: XOR<FileMessageUpdateWithoutDraftMessageInput, FileMessageUncheckedUpdateWithoutDraftMessageInput>
    create: XOR<FileMessageCreateWithoutDraftMessageInput, FileMessageUncheckedCreateWithoutDraftMessageInput>
  }

  export type FileMessageUpdateWithWhereUniqueWithoutDraftMessageInput = {
    where: FileMessageWhereUniqueInput
    data: XOR<FileMessageUpdateWithoutDraftMessageInput, FileMessageUncheckedUpdateWithoutDraftMessageInput>
  }

  export type FileMessageUpdateManyWithWhereWithoutDraftMessageInput = {
    where: FileMessageScalarWhereInput
    data: XOR<FileMessageUpdateManyMutationInput, FileMessageUncheckedUpdateManyWithoutDraftMessageInput>
  }

  export type DraftMessageReplyUpsertWithWhereUniqueWithoutDraftMessageInput = {
    where: DraftMessageReplyWhereUniqueInput
    update: XOR<DraftMessageReplyUpdateWithoutDraftMessageInput, DraftMessageReplyUncheckedUpdateWithoutDraftMessageInput>
    create: XOR<DraftMessageReplyCreateWithoutDraftMessageInput, DraftMessageReplyUncheckedCreateWithoutDraftMessageInput>
  }

  export type DraftMessageReplyUpdateWithWhereUniqueWithoutDraftMessageInput = {
    where: DraftMessageReplyWhereUniqueInput
    data: XOR<DraftMessageReplyUpdateWithoutDraftMessageInput, DraftMessageReplyUncheckedUpdateWithoutDraftMessageInput>
  }

  export type DraftMessageReplyUpdateManyWithWhereWithoutDraftMessageInput = {
    where: DraftMessageReplyScalarWhereInput
    data: XOR<DraftMessageReplyUpdateManyMutationInput, DraftMessageReplyUncheckedUpdateManyWithoutDraftMessageInput>
  }

  export type UserUpsertWithoutDraftMessagesInput = {
    update: XOR<UserUpdateWithoutDraftMessagesInput, UserUncheckedUpdateWithoutDraftMessagesInput>
    create: XOR<UserCreateWithoutDraftMessagesInput, UserUncheckedCreateWithoutDraftMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDraftMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDraftMessagesInput, UserUncheckedUpdateWithoutDraftMessagesInput>
  }

  export type UserUpdateWithoutDraftMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUpdateManyWithoutUserNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    pinnedChats?: PinnedChatUpdateManyWithoutUserNestedInput
    files?: FileMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDraftMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    pinnedChats?: PinnedChatUncheckedUpdateManyWithoutUserNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutUserNestedInput
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
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutChatsNestedInput
    lastMessage?: ChatMessageUpdateOneWithoutLastMessageForChatNestedInput
    pinnedMessage?: ChatMessageUpdateOneWithoutPinnedInChatNestedInput
    pinnedByUser?: PinnedChatUpdateManyWithoutChatNestedInput
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
    description?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pinnedByUser?: PinnedChatUncheckedUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type DraftMessageCreateWithoutRepliedToLinksInput = {
    id?: string
    text?: string | null
    isForwarded?: boolean
    editId?: string | null
    filesEditId?: DraftMessageCreatefilesEditIdInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutDraftMessageInput
    user: UserCreateNestedOneWithoutDraftMessagesInput
    chat: ChatCreateNestedOneWithoutDraftMessagesInput
  }

  export type DraftMessageUncheckedCreateWithoutRepliedToLinksInput = {
    id?: string
    text?: string | null
    isForwarded?: boolean
    editId?: string | null
    filesEditId?: DraftMessageCreatefilesEditIdInput | string[]
    userId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutDraftMessageInput
  }

  export type DraftMessageCreateOrConnectWithoutRepliedToLinksInput = {
    where: DraftMessageWhereUniqueInput
    create: XOR<DraftMessageCreateWithoutRepliedToLinksInput, DraftMessageUncheckedCreateWithoutRepliedToLinksInput>
  }

  export type ChatMessageCreateWithoutRepliedFromDraftsInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatCreateNestedOneWithoutLastMessageInput
    pinnedInChat?: ChatCreateNestedOneWithoutPinnedMessageInput
    user: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutRepliedFromDraftsInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyUncheckedCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatUncheckedCreateNestedOneWithoutLastMessageInput
    pinnedInChat?: ChatUncheckedCreateNestedOneWithoutPinnedMessageInput
  }

  export type ChatMessageCreateOrConnectWithoutRepliedFromDraftsInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutRepliedFromDraftsInput, ChatMessageUncheckedCreateWithoutRepliedFromDraftsInput>
  }

  export type DraftMessageUpsertWithoutRepliedToLinksInput = {
    update: XOR<DraftMessageUpdateWithoutRepliedToLinksInput, DraftMessageUncheckedUpdateWithoutRepliedToLinksInput>
    create: XOR<DraftMessageCreateWithoutRepliedToLinksInput, DraftMessageUncheckedCreateWithoutRepliedToLinksInput>
    where?: DraftMessageWhereInput
  }

  export type DraftMessageUpdateToOneWithWhereWithoutRepliedToLinksInput = {
    where?: DraftMessageWhereInput
    data: XOR<DraftMessageUpdateWithoutRepliedToLinksInput, DraftMessageUncheckedUpdateWithoutRepliedToLinksInput>
  }

  export type DraftMessageUpdateWithoutRepliedToLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    editId?: NullableStringFieldUpdateOperationsInput | string | null
    filesEditId?: DraftMessageUpdatefilesEditIdInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutDraftMessageNestedInput
    user?: UserUpdateOneRequiredWithoutDraftMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutDraftMessagesNestedInput
  }

  export type DraftMessageUncheckedUpdateWithoutRepliedToLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    editId?: NullableStringFieldUpdateOperationsInput | string | null
    filesEditId?: DraftMessageUpdatefilesEditIdInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutDraftMessageNestedInput
  }

  export type ChatMessageUpsertWithoutRepliedFromDraftsInput = {
    update: XOR<ChatMessageUpdateWithoutRepliedFromDraftsInput, ChatMessageUncheckedUpdateWithoutRepliedFromDraftsInput>
    create: XOR<ChatMessageCreateWithoutRepliedFromDraftsInput, ChatMessageUncheckedCreateWithoutRepliedFromDraftsInput>
    where?: ChatMessageWhereInput
  }

  export type ChatMessageUpdateToOneWithWhereWithoutRepliedFromDraftsInput = {
    where?: ChatMessageWhereInput
    data: XOR<ChatMessageUpdateWithoutRepliedFromDraftsInput, ChatMessageUncheckedUpdateWithoutRepliedFromDraftsInput>
  }

  export type ChatMessageUpdateWithoutRepliedFromDraftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUpdateOneWithoutLastMessageNestedInput
    pinnedInChat?: ChatUpdateOneWithoutPinnedMessageNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutRepliedFromDraftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUncheckedUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUncheckedUpdateOneWithoutLastMessageNestedInput
    pinnedInChat?: ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput
  }

  export type ChatMessageCreateWithoutFilesInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ChatMessageReplyCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatCreateNestedOneWithoutLastMessageInput
    pinnedInChat?: ChatCreateNestedOneWithoutPinnedMessageInput
    repliedFromDrafts?: DraftMessageReplyCreateNestedManyWithoutRepliedToInput
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
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ChatMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyUncheckedCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatUncheckedCreateNestedOneWithoutLastMessageInput
    pinnedInChat?: ChatUncheckedCreateNestedOneWithoutPinnedMessageInput
    repliedFromDrafts?: DraftMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
  }

  export type ChatMessageCreateOrConnectWithoutFilesInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutFilesInput, ChatMessageUncheckedCreateWithoutFilesInput>
  }

  export type DraftMessageCreateWithoutFilesInput = {
    id?: string
    text?: string | null
    isForwarded?: boolean
    editId?: string | null
    filesEditId?: DraftMessageCreatefilesEditIdInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    repliedToLinks?: DraftMessageReplyCreateNestedManyWithoutDraftMessageInput
    user: UserCreateNestedOneWithoutDraftMessagesInput
    chat: ChatCreateNestedOneWithoutDraftMessagesInput
  }

  export type DraftMessageUncheckedCreateWithoutFilesInput = {
    id?: string
    text?: string | null
    isForwarded?: boolean
    editId?: string | null
    filesEditId?: DraftMessageCreatefilesEditIdInput | string[]
    userId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    repliedToLinks?: DraftMessageReplyUncheckedCreateNestedManyWithoutDraftMessageInput
  }

  export type DraftMessageCreateOrConnectWithoutFilesInput = {
    where: DraftMessageWhereUniqueInput
    create: XOR<DraftMessageCreateWithoutFilesInput, DraftMessageUncheckedCreateWithoutFilesInput>
  }

  export type UserCreateWithoutFilesInput = {
    id?: string
    username: string
    bio?: string | null
    email: string
    password: string
    avatarUrl?: string | null
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutUserInput
    draftMessages?: DraftMessageCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberCreateNestedManyWithoutUserInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    pinnedChats?: PinnedChatCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFilesInput = {
    id?: string
    username: string
    bio?: string | null
    email: string
    password: string
    avatarUrl?: string | null
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    draftMessages?: DraftMessageUncheckedCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    pinnedChats?: PinnedChatUncheckedCreateNestedManyWithoutUserInput
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
    description?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutChatsInput
    lastMessage?: ChatMessageCreateNestedOneWithoutLastMessageForChatInput
    pinnedMessage?: ChatMessageCreateNestedOneWithoutPinnedInChatInput
    pinnedByUser?: PinnedChatCreateNestedManyWithoutChatInput
    draftMessages?: DraftMessageCreateNestedManyWithoutChatInput
    messages?: ChatMessageCreateNestedManyWithoutChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutFilesInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    groupId?: string | null
    lastMessageId?: string | null
    pinnedMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pinnedByUser?: PinnedChatUncheckedCreateNestedManyWithoutChatInput
    draftMessages?: DraftMessageUncheckedCreateNestedManyWithoutChatInput
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
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ChatMessageReplyUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUpdateOneWithoutLastMessageNestedInput
    pinnedInChat?: ChatUpdateOneWithoutPinnedMessageNestedInput
    repliedFromDrafts?: DraftMessageReplyUpdateManyWithoutRepliedToNestedInput
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
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ChatMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUncheckedUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUncheckedUpdateOneWithoutLastMessageNestedInput
    pinnedInChat?: ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput
    repliedFromDrafts?: DraftMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
  }

  export type DraftMessageUpsertWithoutFilesInput = {
    update: XOR<DraftMessageUpdateWithoutFilesInput, DraftMessageUncheckedUpdateWithoutFilesInput>
    create: XOR<DraftMessageCreateWithoutFilesInput, DraftMessageUncheckedCreateWithoutFilesInput>
    where?: DraftMessageWhereInput
  }

  export type DraftMessageUpdateToOneWithWhereWithoutFilesInput = {
    where?: DraftMessageWhereInput
    data: XOR<DraftMessageUpdateWithoutFilesInput, DraftMessageUncheckedUpdateWithoutFilesInput>
  }

  export type DraftMessageUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    editId?: NullableStringFieldUpdateOperationsInput | string | null
    filesEditId?: DraftMessageUpdatefilesEditIdInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repliedToLinks?: DraftMessageReplyUpdateManyWithoutDraftMessageNestedInput
    user?: UserUpdateOneRequiredWithoutDraftMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutDraftMessagesNestedInput
  }

  export type DraftMessageUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    editId?: NullableStringFieldUpdateOperationsInput | string | null
    filesEditId?: DraftMessageUpdatefilesEditIdInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repliedToLinks?: DraftMessageReplyUncheckedUpdateManyWithoutDraftMessageNestedInput
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
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutUserNestedInput
    draftMessages?: DraftMessageUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUpdateManyWithoutUserNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    pinnedChats?: PinnedChatUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    draftMessages?: DraftMessageUncheckedUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    pinnedChats?: PinnedChatUncheckedUpdateManyWithoutUserNestedInput
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
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutChatsNestedInput
    lastMessage?: ChatMessageUpdateOneWithoutLastMessageForChatNestedInput
    pinnedMessage?: ChatMessageUpdateOneWithoutPinnedInChatNestedInput
    pinnedByUser?: PinnedChatUpdateManyWithoutChatNestedInput
    draftMessages?: DraftMessageUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pinnedByUser?: PinnedChatUncheckedUpdateManyWithoutChatNestedInput
    draftMessages?: DraftMessageUncheckedUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
  }

  export type GroupMemberCreateWithoutGroupInput = {
    id?: string
    isCreator?: boolean | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGroupMembershipsInput
  }

  export type GroupMemberUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    isCreator?: boolean | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberCreateOrConnectWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberCreateManyGroupInputEnvelope = {
    data: GroupMemberCreateManyGroupInput | GroupMemberCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutGroupInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastMessage?: ChatMessageCreateNestedOneWithoutLastMessageForChatInput
    pinnedMessage?: ChatMessageCreateNestedOneWithoutPinnedInChatInput
    pinnedByUser?: PinnedChatCreateNestedManyWithoutChatInput
    draftMessages?: DraftMessageCreateNestedManyWithoutChatInput
    messages?: ChatMessageCreateNestedManyWithoutChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
    files?: FileMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutGroupInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    lastMessageId?: string | null
    pinnedMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pinnedByUser?: PinnedChatUncheckedCreateNestedManyWithoutChatInput
    draftMessages?: DraftMessageUncheckedCreateNestedManyWithoutChatInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    files?: FileMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutGroupInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutGroupInput, ChatUncheckedCreateWithoutGroupInput>
  }

  export type ChatCreateManyGroupInputEnvelope = {
    data: ChatCreateManyGroupInput | ChatCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutGroupInput>
  }

  export type ChatUpsertWithWhereUniqueWithoutGroupInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutGroupInput, ChatUncheckedUpdateWithoutGroupInput>
    create: XOR<ChatCreateWithoutGroupInput, ChatUncheckedCreateWithoutGroupInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutGroupInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutGroupInput, ChatUncheckedUpdateWithoutGroupInput>
  }

  export type ChatUpdateManyWithWhereWithoutGroupInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutGroupInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    chatName?: StringNullableFilter<"Chat"> | string | null
    isGroup?: BoolFilter<"Chat"> | boolean
    avatarUrl?: StringNullableFilter<"Chat"> | string | null
    isDeleted?: BoolFilter<"Chat"> | boolean
    description?: StringNullableFilter<"Chat"> | string | null
    groupId?: StringNullableFilter<"Chat"> | string | null
    lastMessageId?: StringNullableFilter<"Chat"> | string | null
    pinnedMessageId?: StringNullableFilter<"Chat"> | string | null
    lastMessageAt?: DateTimeNullableFilter<"Chat"> | Date | string | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
  }

  export type GroupCreateWithoutChatsInput = {
    id?: string
    groupName: string
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutChatsInput = {
    id?: string
    groupName: string
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutChatsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutChatsInput, GroupUncheckedCreateWithoutChatsInput>
  }

  export type ChatMessageCreateWithoutLastMessageForChatInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyCreateNestedManyWithoutReplyInput
    pinnedInChat?: ChatCreateNestedOneWithoutPinnedMessageInput
    repliedFromDrafts?: DraftMessageReplyCreateNestedManyWithoutRepliedToInput
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
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyUncheckedCreateNestedManyWithoutReplyInput
    pinnedInChat?: ChatUncheckedCreateNestedOneWithoutPinnedMessageInput
    repliedFromDrafts?: DraftMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
  }

  export type ChatMessageCreateOrConnectWithoutLastMessageForChatInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutLastMessageForChatInput, ChatMessageUncheckedCreateWithoutLastMessageForChatInput>
  }

  export type ChatMessageCreateWithoutPinnedInChatInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatCreateNestedOneWithoutLastMessageInput
    repliedFromDrafts?: DraftMessageReplyCreateNestedManyWithoutRepliedToInput
    user: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutPinnedInChatInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    userId: string
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyUncheckedCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatUncheckedCreateNestedOneWithoutLastMessageInput
    repliedFromDrafts?: DraftMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
  }

  export type ChatMessageCreateOrConnectWithoutPinnedInChatInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutPinnedInChatInput, ChatMessageUncheckedCreateWithoutPinnedInChatInput>
  }

  export type PinnedChatCreateWithoutChatInput = {
    id?: string
    pinnedAt?: Date | string
    user: UserCreateNestedOneWithoutPinnedChatsInput
  }

  export type PinnedChatUncheckedCreateWithoutChatInput = {
    id?: string
    userId: string
    pinnedAt?: Date | string
  }

  export type PinnedChatCreateOrConnectWithoutChatInput = {
    where: PinnedChatWhereUniqueInput
    create: XOR<PinnedChatCreateWithoutChatInput, PinnedChatUncheckedCreateWithoutChatInput>
  }

  export type PinnedChatCreateManyChatInputEnvelope = {
    data: PinnedChatCreateManyChatInput | PinnedChatCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type DraftMessageCreateWithoutChatInput = {
    id?: string
    text?: string | null
    isForwarded?: boolean
    editId?: string | null
    filesEditId?: DraftMessageCreatefilesEditIdInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutDraftMessageInput
    repliedToLinks?: DraftMessageReplyCreateNestedManyWithoutDraftMessageInput
    user: UserCreateNestedOneWithoutDraftMessagesInput
  }

  export type DraftMessageUncheckedCreateWithoutChatInput = {
    id?: string
    text?: string | null
    isForwarded?: boolean
    editId?: string | null
    filesEditId?: DraftMessageCreatefilesEditIdInput | string[]
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutDraftMessageInput
    repliedToLinks?: DraftMessageReplyUncheckedCreateNestedManyWithoutDraftMessageInput
  }

  export type DraftMessageCreateOrConnectWithoutChatInput = {
    where: DraftMessageWhereUniqueInput
    create: XOR<DraftMessageCreateWithoutChatInput, DraftMessageUncheckedCreateWithoutChatInput>
  }

  export type DraftMessageCreateManyChatInputEnvelope = {
    data: DraftMessageCreateManyChatInput | DraftMessageCreateManyChatInput[]
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
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatCreateNestedOneWithoutLastMessageInput
    pinnedInChat?: ChatCreateNestedOneWithoutPinnedMessageInput
    repliedFromDrafts?: DraftMessageReplyCreateNestedManyWithoutRepliedToInput
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
    userId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileMessageUncheckedCreateNestedManyWithoutChatMessageInput
    replies?: ChatMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
    repliedToLinks?: ChatMessageReplyUncheckedCreateNestedManyWithoutReplyInput
    lastMessageForChat?: ChatUncheckedCreateNestedOneWithoutLastMessageInput
    pinnedInChat?: ChatUncheckedCreateNestedOneWithoutPinnedMessageInput
    repliedFromDrafts?: DraftMessageReplyUncheckedCreateNestedManyWithoutRepliedToInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatMembershipsInput
  }

  export type ChatMemberUncheckedCreateWithoutChatInput = {
    id?: string
    userId: string
    isCreator?: boolean | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
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
    chatMessage?: ChatMessageCreateNestedOneWithoutFilesInput
    draftMessage?: DraftMessageCreateNestedOneWithoutFilesInput
    user: UserCreateNestedOneWithoutFilesInput
  }

  export type FileMessageUncheckedCreateWithoutChatInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    chatMessageId?: string | null
    draftMessageId?: string | null
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

  export type GroupUpsertWithoutChatsInput = {
    update: XOR<GroupUpdateWithoutChatsInput, GroupUncheckedUpdateWithoutChatsInput>
    create: XOR<GroupCreateWithoutChatsInput, GroupUncheckedCreateWithoutChatsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutChatsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutChatsInput, GroupUncheckedUpdateWithoutChatsInput>
  }

  export type GroupUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
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
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUpdateManyWithoutReplyNestedInput
    pinnedInChat?: ChatUpdateOneWithoutPinnedMessageNestedInput
    repliedFromDrafts?: DraftMessageReplyUpdateManyWithoutRepliedToNestedInput
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
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUncheckedUpdateManyWithoutReplyNestedInput
    pinnedInChat?: ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput
    repliedFromDrafts?: DraftMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
  }

  export type ChatMessageUpsertWithoutPinnedInChatInput = {
    update: XOR<ChatMessageUpdateWithoutPinnedInChatInput, ChatMessageUncheckedUpdateWithoutPinnedInChatInput>
    create: XOR<ChatMessageCreateWithoutPinnedInChatInput, ChatMessageUncheckedCreateWithoutPinnedInChatInput>
    where?: ChatMessageWhereInput
  }

  export type ChatMessageUpdateToOneWithWhereWithoutPinnedInChatInput = {
    where?: ChatMessageWhereInput
    data: XOR<ChatMessageUpdateWithoutPinnedInChatInput, ChatMessageUncheckedUpdateWithoutPinnedInChatInput>
  }

  export type ChatMessageUpdateWithoutPinnedInChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUpdateOneWithoutLastMessageNestedInput
    repliedFromDrafts?: DraftMessageReplyUpdateManyWithoutRepliedToNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutPinnedInChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUncheckedUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUncheckedUpdateOneWithoutLastMessageNestedInput
    repliedFromDrafts?: DraftMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
  }

  export type PinnedChatUpsertWithWhereUniqueWithoutChatInput = {
    where: PinnedChatWhereUniqueInput
    update: XOR<PinnedChatUpdateWithoutChatInput, PinnedChatUncheckedUpdateWithoutChatInput>
    create: XOR<PinnedChatCreateWithoutChatInput, PinnedChatUncheckedCreateWithoutChatInput>
  }

  export type PinnedChatUpdateWithWhereUniqueWithoutChatInput = {
    where: PinnedChatWhereUniqueInput
    data: XOR<PinnedChatUpdateWithoutChatInput, PinnedChatUncheckedUpdateWithoutChatInput>
  }

  export type PinnedChatUpdateManyWithWhereWithoutChatInput = {
    where: PinnedChatScalarWhereInput
    data: XOR<PinnedChatUpdateManyMutationInput, PinnedChatUncheckedUpdateManyWithoutChatInput>
  }

  export type DraftMessageUpsertWithWhereUniqueWithoutChatInput = {
    where: DraftMessageWhereUniqueInput
    update: XOR<DraftMessageUpdateWithoutChatInput, DraftMessageUncheckedUpdateWithoutChatInput>
    create: XOR<DraftMessageCreateWithoutChatInput, DraftMessageUncheckedCreateWithoutChatInput>
  }

  export type DraftMessageUpdateWithWhereUniqueWithoutChatInput = {
    where: DraftMessageWhereUniqueInput
    data: XOR<DraftMessageUpdateWithoutChatInput, DraftMessageUncheckedUpdateWithoutChatInput>
  }

  export type DraftMessageUpdateManyWithWhereWithoutChatInput = {
    where: DraftMessageScalarWhereInput
    data: XOR<DraftMessageUpdateManyMutationInput, DraftMessageUncheckedUpdateManyWithoutChatInput>
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

  export type UserCreateWithoutPinnedChatsInput = {
    id?: string
    username: string
    bio?: string | null
    email: string
    password: string
    avatarUrl?: string | null
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutUserInput
    draftMessages?: DraftMessageCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberCreateNestedManyWithoutUserInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    files?: FileMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPinnedChatsInput = {
    id?: string
    username: string
    bio?: string | null
    email: string
    password: string
    avatarUrl?: string | null
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    draftMessages?: DraftMessageUncheckedCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    files?: FileMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPinnedChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPinnedChatsInput, UserUncheckedCreateWithoutPinnedChatsInput>
  }

  export type ChatCreateWithoutPinnedByUserInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutChatsInput
    lastMessage?: ChatMessageCreateNestedOneWithoutLastMessageForChatInput
    pinnedMessage?: ChatMessageCreateNestedOneWithoutPinnedInChatInput
    draftMessages?: DraftMessageCreateNestedManyWithoutChatInput
    messages?: ChatMessageCreateNestedManyWithoutChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
    files?: FileMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutPinnedByUserInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    groupId?: string | null
    lastMessageId?: string | null
    pinnedMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    draftMessages?: DraftMessageUncheckedCreateNestedManyWithoutChatInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    files?: FileMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutPinnedByUserInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutPinnedByUserInput, ChatUncheckedCreateWithoutPinnedByUserInput>
  }

  export type UserUpsertWithoutPinnedChatsInput = {
    update: XOR<UserUpdateWithoutPinnedChatsInput, UserUncheckedUpdateWithoutPinnedChatsInput>
    create: XOR<UserCreateWithoutPinnedChatsInput, UserUncheckedCreateWithoutPinnedChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPinnedChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPinnedChatsInput, UserUncheckedUpdateWithoutPinnedChatsInput>
  }

  export type UserUpdateWithoutPinnedChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutUserNestedInput
    draftMessages?: DraftMessageUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUpdateManyWithoutUserNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    files?: FileMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPinnedChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    draftMessages?: DraftMessageUncheckedUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatUpsertWithoutPinnedByUserInput = {
    update: XOR<ChatUpdateWithoutPinnedByUserInput, ChatUncheckedUpdateWithoutPinnedByUserInput>
    create: XOR<ChatCreateWithoutPinnedByUserInput, ChatUncheckedCreateWithoutPinnedByUserInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutPinnedByUserInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutPinnedByUserInput, ChatUncheckedUpdateWithoutPinnedByUserInput>
  }

  export type ChatUpdateWithoutPinnedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutChatsNestedInput
    lastMessage?: ChatMessageUpdateOneWithoutLastMessageForChatNestedInput
    pinnedMessage?: ChatMessageUpdateOneWithoutPinnedInChatNestedInput
    draftMessages?: DraftMessageUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
    files?: FileMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutPinnedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draftMessages?: DraftMessageUncheckedUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserCreateWithoutChatMembershipsInput = {
    id?: string
    username: string
    bio?: string | null
    email: string
    password: string
    avatarUrl?: string | null
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutUserInput
    draftMessages?: DraftMessageCreateNestedManyWithoutUserInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    pinnedChats?: PinnedChatCreateNestedManyWithoutUserInput
    files?: FileMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatMembershipsInput = {
    id?: string
    username: string
    bio?: string | null
    email: string
    password: string
    avatarUrl?: string | null
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    draftMessages?: DraftMessageUncheckedCreateNestedManyWithoutUserInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    pinnedChats?: PinnedChatUncheckedCreateNestedManyWithoutUserInput
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
    description?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutChatsInput
    lastMessage?: ChatMessageCreateNestedOneWithoutLastMessageForChatInput
    pinnedMessage?: ChatMessageCreateNestedOneWithoutPinnedInChatInput
    pinnedByUser?: PinnedChatCreateNestedManyWithoutChatInput
    draftMessages?: DraftMessageCreateNestedManyWithoutChatInput
    messages?: ChatMessageCreateNestedManyWithoutChatInput
    files?: FileMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMembersInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    groupId?: string | null
    lastMessageId?: string | null
    pinnedMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pinnedByUser?: PinnedChatUncheckedCreateNestedManyWithoutChatInput
    draftMessages?: DraftMessageUncheckedCreateNestedManyWithoutChatInput
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
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutUserNestedInput
    draftMessages?: DraftMessageUpdateManyWithoutUserNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    pinnedChats?: PinnedChatUpdateManyWithoutUserNestedInput
    files?: FileMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    draftMessages?: DraftMessageUncheckedUpdateManyWithoutUserNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    pinnedChats?: PinnedChatUncheckedUpdateManyWithoutUserNestedInput
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
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutChatsNestedInput
    lastMessage?: ChatMessageUpdateOneWithoutLastMessageForChatNestedInput
    pinnedMessage?: ChatMessageUpdateOneWithoutPinnedInChatNestedInput
    pinnedByUser?: PinnedChatUpdateManyWithoutChatNestedInput
    draftMessages?: DraftMessageUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
    files?: FileMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pinnedByUser?: PinnedChatUncheckedUpdateManyWithoutChatNestedInput
    draftMessages?: DraftMessageUncheckedUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserCreateWithoutGroupMembershipsInput = {
    id?: string
    username: string
    bio?: string | null
    email: string
    password: string
    avatarUrl?: string | null
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutUserInput
    draftMessages?: DraftMessageCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberCreateNestedManyWithoutUserInput
    pinnedChats?: PinnedChatCreateNestedManyWithoutUserInput
    files?: FileMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupMembershipsInput = {
    id?: string
    username: string
    bio?: string | null
    email: string
    password: string
    avatarUrl?: string | null
    isDeactivated?: boolean
    deactivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    draftMessages?: DraftMessageUncheckedCreateNestedManyWithoutUserInput
    chatMemberships?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    pinnedChats?: PinnedChatUncheckedCreateNestedManyWithoutUserInput
    files?: FileMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupMembershipsInput, UserUncheckedCreateWithoutGroupMembershipsInput>
  }

  export type GroupCreateWithoutMembersInput = {
    id?: string
    groupName: string
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string
    groupName: string
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutGroupMembershipsInput = {
    update: XOR<UserUpdateWithoutGroupMembershipsInput, UserUncheckedUpdateWithoutGroupMembershipsInput>
    create: XOR<UserCreateWithoutGroupMembershipsInput, UserUncheckedCreateWithoutGroupMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupMembershipsInput, UserUncheckedUpdateWithoutGroupMembershipsInput>
  }

  export type UserUpdateWithoutGroupMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutUserNestedInput
    draftMessages?: DraftMessageUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUpdateManyWithoutUserNestedInput
    pinnedChats?: PinnedChatUpdateManyWithoutUserNestedInput
    files?: FileMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    draftMessages?: DraftMessageUncheckedUpdateManyWithoutUserNestedInput
    chatMemberships?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    pinnedChats?: PinnedChatUncheckedUpdateManyWithoutUserNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type ChatMessageCreateManyUserInput = {
    id?: string
    text?: string | null
    isStarted?: boolean
    isEdited?: boolean
    isDeleted?: boolean
    isForwarded?: boolean
    isReply?: boolean
    chatId: string
    readCount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DraftMessageCreateManyUserInput = {
    id?: string
    text?: string | null
    isForwarded?: boolean
    editId?: string | null
    filesEditId?: DraftMessageCreatefilesEditIdInput | string[]
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMemberCreateManyUserInput = {
    id?: string
    isCreator?: boolean | null
    chatId: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberCreateManyUserInput = {
    id?: string
    isCreator?: boolean | null
    groupId?: string | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PinnedChatCreateManyUserInput = {
    id?: string
    chatId: string
    pinnedAt?: Date | string
  }

  export type FileMessageCreateManyUserInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    chatMessageId?: string | null
    draftMessageId?: string | null
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
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUpdateOneWithoutLastMessageNestedInput
    pinnedInChat?: ChatUpdateOneWithoutPinnedMessageNestedInput
    repliedFromDrafts?: DraftMessageReplyUpdateManyWithoutRepliedToNestedInput
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
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUncheckedUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUncheckedUpdateOneWithoutLastMessageNestedInput
    pinnedInChat?: ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput
    repliedFromDrafts?: DraftMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    chatId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    editId?: NullableStringFieldUpdateOperationsInput | string | null
    filesEditId?: DraftMessageUpdatefilesEditIdInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutDraftMessageNestedInput
    repliedToLinks?: DraftMessageReplyUpdateManyWithoutDraftMessageNestedInput
    chat?: ChatUpdateOneRequiredWithoutDraftMessagesNestedInput
  }

  export type DraftMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    editId?: NullableStringFieldUpdateOperationsInput | string | null
    filesEditId?: DraftMessageUpdatefilesEditIdInput | string[]
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutDraftMessageNestedInput
    repliedToLinks?: DraftMessageReplyUncheckedUpdateManyWithoutDraftMessageNestedInput
  }

  export type DraftMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    editId?: NullableStringFieldUpdateOperationsInput | string | null
    filesEditId?: DraftMessageUpdatefilesEditIdInput | string[]
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ChatMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    chatId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    chatId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PinnedChatUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutPinnedByUserNestedInput
  }

  export type PinnedChatUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PinnedChatUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    chatMessage?: ChatMessageUpdateOneWithoutFilesNestedInput
    draftMessage?: DraftMessageUpdateOneWithoutFilesNestedInput
    chat?: ChatUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    chatMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    draftMessageId?: NullableStringFieldUpdateOperationsInput | string | null
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
    chatMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    draftMessageId?: NullableStringFieldUpdateOperationsInput | string | null
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
    draftMessageId?: string | null
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

  export type DraftMessageReplyCreateManyRepliedToInput = {
    id?: string
    draftMessageId: string
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
    draftMessage?: DraftMessageUpdateOneWithoutFilesNestedInput
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
    draftMessageId?: NullableStringFieldUpdateOperationsInput | string | null
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
    draftMessageId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DraftMessageReplyUpdateWithoutRepliedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftMessage?: DraftMessageUpdateOneRequiredWithoutRepliedToLinksNestedInput
  }

  export type DraftMessageReplyUncheckedUpdateWithoutRepliedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftMessageId?: StringFieldUpdateOperationsInput | string
  }

  export type DraftMessageReplyUncheckedUpdateManyWithoutRepliedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftMessageId?: StringFieldUpdateOperationsInput | string
  }

  export type FileMessageCreateManyDraftMessageInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    chatMessageId?: string | null
    userId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DraftMessageReplyCreateManyDraftMessageInput = {
    id?: string
    repliedToId: string
  }

  export type FileMessageUpdateWithoutDraftMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessage?: ChatMessageUpdateOneWithoutFilesNestedInput
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
    chat?: ChatUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileMessageUncheckedUpdateWithoutDraftMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    chatMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileMessageUncheckedUpdateManyWithoutDraftMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    chatMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftMessageReplyUpdateWithoutDraftMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    repliedTo?: ChatMessageUpdateOneRequiredWithoutRepliedFromDraftsNestedInput
  }

  export type DraftMessageReplyUncheckedUpdateWithoutDraftMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    repliedToId?: StringFieldUpdateOperationsInput | string
  }

  export type DraftMessageReplyUncheckedUpdateManyWithoutDraftMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    repliedToId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberCreateManyGroupInput = {
    id?: string
    userId: string
    isCreator?: boolean | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatCreateManyGroupInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    avatarUrl?: string | null
    isDeleted?: boolean
    description?: string | null
    lastMessageId?: string | null
    pinnedMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGroupMembershipsNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: ChatMessageUpdateOneWithoutLastMessageForChatNestedInput
    pinnedMessage?: ChatMessageUpdateOneWithoutPinnedInChatNestedInput
    pinnedByUser?: PinnedChatUpdateManyWithoutChatNestedInput
    draftMessages?: DraftMessageUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
    files?: FileMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pinnedByUser?: PinnedChatUncheckedUpdateManyWithoutChatNestedInput
    draftMessages?: DraftMessageUncheckedUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    files?: FileMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PinnedChatCreateManyChatInput = {
    id?: string
    userId: string
    pinnedAt?: Date | string
  }

  export type DraftMessageCreateManyChatInput = {
    id?: string
    text?: string | null
    isForwarded?: boolean
    editId?: string | null
    filesEditId?: DraftMessageCreatefilesEditIdInput | string[]
    userId: string
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
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileMessageCreateManyChatInput = {
    id?: string
    fileUrl: string
    fileName: string
    fileFullName: string
    fileSize: string
    fileFormat: string
    chatMessageId?: string | null
    draftMessageId?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PinnedChatUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPinnedChatsNestedInput
  }

  export type PinnedChatUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PinnedChatUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftMessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    editId?: NullableStringFieldUpdateOperationsInput | string | null
    filesEditId?: DraftMessageUpdatefilesEditIdInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutDraftMessageNestedInput
    repliedToLinks?: DraftMessageReplyUpdateManyWithoutDraftMessageNestedInput
    user?: UserUpdateOneRequiredWithoutDraftMessagesNestedInput
  }

  export type DraftMessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    editId?: NullableStringFieldUpdateOperationsInput | string | null
    filesEditId?: DraftMessageUpdatefilesEditIdInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutDraftMessageNestedInput
    repliedToLinks?: DraftMessageReplyUncheckedUpdateManyWithoutDraftMessageNestedInput
  }

  export type DraftMessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    editId?: NullableStringFieldUpdateOperationsInput | string | null
    filesEditId?: DraftMessageUpdatefilesEditIdInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
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
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUpdateOneWithoutLastMessageNestedInput
    pinnedInChat?: ChatUpdateOneWithoutPinnedMessageNestedInput
    repliedFromDrafts?: DraftMessageReplyUpdateManyWithoutRepliedToNestedInput
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
    userId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileMessageUncheckedUpdateManyWithoutChatMessageNestedInput
    replies?: ChatMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
    repliedToLinks?: ChatMessageReplyUncheckedUpdateManyWithoutReplyNestedInput
    lastMessageForChat?: ChatUncheckedUpdateOneWithoutLastMessageNestedInput
    pinnedInChat?: ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput
    repliedFromDrafts?: DraftMessageReplyUncheckedUpdateManyWithoutRepliedToNestedInput
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isForwarded?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    readCount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatMembershipsNestedInput
  }

  export type ChatMemberUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCreator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    chatMessage?: ChatMessageUpdateOneWithoutFilesNestedInput
    draftMessage?: DraftMessageUpdateOneWithoutFilesNestedInput
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileMessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileFullName?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    fileFormat?: StringFieldUpdateOperationsInput | string
    chatMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    draftMessageId?: NullableStringFieldUpdateOperationsInput | string | null
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
    chatMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    draftMessageId?: NullableStringFieldUpdateOperationsInput | string | null
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