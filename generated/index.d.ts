
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
 * Model Provider
 * 
 */
export type Provider = $Result.DefaultSelection<Prisma.$ProviderPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model ServiceImage
 * 
 */
export type ServiceImage = $Result.DefaultSelection<Prisma.$ServiceImagePayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model Request
 * 
 */
export type Request = $Result.DefaultSelection<Prisma.$RequestPayload>
/**
 * Model RequestItem
 * 
 */
export type RequestItem = $Result.DefaultSelection<Prisma.$RequestItemPayload>
/**
 * Model RequestPayment
 * 
 */
export type RequestPayment = $Result.DefaultSelection<Prisma.$RequestPaymentPayload>
/**
 * Model Ubigeo
 * 
 */
export type Ubigeo = $Result.DefaultSelection<Prisma.$UbigeoPayload>
/**
 * Model UbigeoService
 * 
 */
export type UbigeoService = $Result.DefaultSelection<Prisma.$UbigeoServicePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AuthProvider: {
  LOCAL: 'LOCAL',
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK'
};

export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider]


export const ImageEntityType: {
  SERVICE: 'SERVICE',
  PROVIDER: 'PROVIDER'
};

export type ImageEntityType = (typeof ImageEntityType)[keyof typeof ImageEntityType]


export const RequestStatus: {
  REQUESTED: 'REQUESTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AuthProvider = $Enums.AuthProvider

export const AuthProvider: typeof $Enums.AuthProvider

export type ImageEntityType = $Enums.ImageEntityType

export const ImageEntityType: typeof $Enums.ImageEntityType

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

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
   * `prisma.provider`: Exposes CRUD operations for the **Provider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.provider.findMany()
    * ```
    */
  get provider(): Prisma.ProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceImage`: Exposes CRUD operations for the **ServiceImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceImages
    * const serviceImages = await prisma.serviceImage.findMany()
    * ```
    */
  get serviceImage(): Prisma.ServiceImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestItem`: Exposes CRUD operations for the **RequestItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestItems
    * const requestItems = await prisma.requestItem.findMany()
    * ```
    */
  get requestItem(): Prisma.RequestItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestPayment`: Exposes CRUD operations for the **RequestPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestPayments
    * const requestPayments = await prisma.requestPayment.findMany()
    * ```
    */
  get requestPayment(): Prisma.RequestPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ubigeo`: Exposes CRUD operations for the **Ubigeo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ubigeos
    * const ubigeos = await prisma.ubigeo.findMany()
    * ```
    */
  get ubigeo(): Prisma.UbigeoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ubigeoService`: Exposes CRUD operations for the **UbigeoService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UbigeoServices
    * const ubigeoServices = await prisma.ubigeoService.findMany()
    * ```
    */
  get ubigeoService(): Prisma.UbigeoServiceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    Provider: 'Provider',
    Category: 'Category',
    Service: 'Service',
    ServiceImage: 'ServiceImage',
    Favorite: 'Favorite',
    Request: 'Request',
    RequestItem: 'RequestItem',
    RequestPayment: 'RequestPayment',
    Ubigeo: 'Ubigeo',
    UbigeoService: 'UbigeoService'
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
      modelProps: "user" | "provider" | "category" | "service" | "serviceImage" | "favorite" | "request" | "requestItem" | "requestPayment" | "ubigeo" | "ubigeoService"
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
      Provider: {
        payload: Prisma.$ProviderPayload<ExtArgs>
        fields: Prisma.ProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findFirst: {
            args: Prisma.ProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findMany: {
            args: Prisma.ProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          create: {
            args: Prisma.ProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          createMany: {
            args: Prisma.ProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          delete: {
            args: Prisma.ProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          update: {
            args: Prisma.ProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          deleteMany: {
            args: Prisma.ProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          upsert: {
            args: Prisma.ProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          aggregate: {
            args: Prisma.ProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvider>
          }
          groupBy: {
            args: Prisma.ProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      ServiceImage: {
        payload: Prisma.$ServiceImagePayload<ExtArgs>
        fields: Prisma.ServiceImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceImagePayload>
          }
          findFirst: {
            args: Prisma.ServiceImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceImagePayload>
          }
          findMany: {
            args: Prisma.ServiceImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceImagePayload>[]
          }
          create: {
            args: Prisma.ServiceImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceImagePayload>
          }
          createMany: {
            args: Prisma.ServiceImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceImagePayload>[]
          }
          delete: {
            args: Prisma.ServiceImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceImagePayload>
          }
          update: {
            args: Prisma.ServiceImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceImagePayload>
          }
          deleteMany: {
            args: Prisma.ServiceImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceImagePayload>[]
          }
          upsert: {
            args: Prisma.ServiceImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceImagePayload>
          }
          aggregate: {
            args: Prisma.ServiceImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceImage>
          }
          groupBy: {
            args: Prisma.ServiceImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceImageCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceImageCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      Request: {
        payload: Prisma.$RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      RequestItem: {
        payload: Prisma.$RequestItemPayload<ExtArgs>
        fields: Prisma.RequestItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestItemPayload>
          }
          findFirst: {
            args: Prisma.RequestItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestItemPayload>
          }
          findMany: {
            args: Prisma.RequestItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestItemPayload>[]
          }
          create: {
            args: Prisma.RequestItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestItemPayload>
          }
          createMany: {
            args: Prisma.RequestItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestItemPayload>[]
          }
          delete: {
            args: Prisma.RequestItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestItemPayload>
          }
          update: {
            args: Prisma.RequestItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestItemPayload>
          }
          deleteMany: {
            args: Prisma.RequestItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestItemPayload>[]
          }
          upsert: {
            args: Prisma.RequestItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestItemPayload>
          }
          aggregate: {
            args: Prisma.RequestItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestItem>
          }
          groupBy: {
            args: Prisma.RequestItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestItemCountArgs<ExtArgs>
            result: $Utils.Optional<RequestItemCountAggregateOutputType> | number
          }
        }
      }
      RequestPayment: {
        payload: Prisma.$RequestPaymentPayload<ExtArgs>
        fields: Prisma.RequestPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPaymentPayload>
          }
          findFirst: {
            args: Prisma.RequestPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPaymentPayload>
          }
          findMany: {
            args: Prisma.RequestPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPaymentPayload>[]
          }
          create: {
            args: Prisma.RequestPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPaymentPayload>
          }
          createMany: {
            args: Prisma.RequestPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPaymentPayload>[]
          }
          delete: {
            args: Prisma.RequestPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPaymentPayload>
          }
          update: {
            args: Prisma.RequestPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPaymentPayload>
          }
          deleteMany: {
            args: Prisma.RequestPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPaymentPayload>[]
          }
          upsert: {
            args: Prisma.RequestPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPaymentPayload>
          }
          aggregate: {
            args: Prisma.RequestPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestPayment>
          }
          groupBy: {
            args: Prisma.RequestPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<RequestPaymentCountAggregateOutputType> | number
          }
        }
      }
      Ubigeo: {
        payload: Prisma.$UbigeoPayload<ExtArgs>
        fields: Prisma.UbigeoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UbigeoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UbigeoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoPayload>
          }
          findFirst: {
            args: Prisma.UbigeoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UbigeoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoPayload>
          }
          findMany: {
            args: Prisma.UbigeoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoPayload>[]
          }
          create: {
            args: Prisma.UbigeoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoPayload>
          }
          createMany: {
            args: Prisma.UbigeoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UbigeoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoPayload>[]
          }
          delete: {
            args: Prisma.UbigeoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoPayload>
          }
          update: {
            args: Prisma.UbigeoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoPayload>
          }
          deleteMany: {
            args: Prisma.UbigeoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UbigeoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UbigeoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoPayload>[]
          }
          upsert: {
            args: Prisma.UbigeoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoPayload>
          }
          aggregate: {
            args: Prisma.UbigeoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUbigeo>
          }
          groupBy: {
            args: Prisma.UbigeoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UbigeoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UbigeoCountArgs<ExtArgs>
            result: $Utils.Optional<UbigeoCountAggregateOutputType> | number
          }
        }
      }
      UbigeoService: {
        payload: Prisma.$UbigeoServicePayload<ExtArgs>
        fields: Prisma.UbigeoServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UbigeoServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UbigeoServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoServicePayload>
          }
          findFirst: {
            args: Prisma.UbigeoServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UbigeoServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoServicePayload>
          }
          findMany: {
            args: Prisma.UbigeoServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoServicePayload>[]
          }
          create: {
            args: Prisma.UbigeoServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoServicePayload>
          }
          createMany: {
            args: Prisma.UbigeoServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UbigeoServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoServicePayload>[]
          }
          delete: {
            args: Prisma.UbigeoServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoServicePayload>
          }
          update: {
            args: Prisma.UbigeoServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoServicePayload>
          }
          deleteMany: {
            args: Prisma.UbigeoServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UbigeoServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UbigeoServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoServicePayload>[]
          }
          upsert: {
            args: Prisma.UbigeoServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbigeoServicePayload>
          }
          aggregate: {
            args: Prisma.UbigeoServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUbigeoService>
          }
          groupBy: {
            args: Prisma.UbigeoServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UbigeoServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UbigeoServiceCountArgs<ExtArgs>
            result: $Utils.Optional<UbigeoServiceCountAggregateOutputType> | number
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
    provider?: ProviderOmit
    category?: CategoryOmit
    service?: ServiceOmit
    serviceImage?: ServiceImageOmit
    favorite?: FavoriteOmit
    request?: RequestOmit
    requestItem?: RequestItemOmit
    requestPayment?: RequestPaymentOmit
    ubigeo?: UbigeoOmit
    ubigeoService?: UbigeoServiceOmit
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
    favorites: number
    requests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    requests?: boolean | UserCountOutputTypeCountRequestsArgs
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
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }


  /**
   * Count Type ProviderCountOutputType
   */

  export type ProviderCountOutputType = {
    services: number
    requests: number
  }

  export type ProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ProviderCountOutputTypeCountServicesArgs
    requests?: boolean | ProviderCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCountOutputType
     */
    select?: ProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    services: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | CategoryCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    favorites: number
    ubigeoServices: number
    images: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | ServiceCountOutputTypeCountFavoritesArgs
    ubigeoServices?: boolean | ServiceCountOutputTypeCountUbigeoServicesArgs
    images?: boolean | ServiceCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountUbigeoServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UbigeoServiceWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceImageWhereInput
  }


  /**
   * Count Type RequestCountOutputType
   */

  export type RequestCountOutputType = {
    items: number
  }

  export type RequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | RequestCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * RequestCountOutputType without action
   */
  export type RequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestCountOutputType
     */
    select?: RequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RequestCountOutputType without action
   */
  export type RequestCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestItemWhereInput
  }


  /**
   * Count Type UbigeoCountOutputType
   */

  export type UbigeoCountOutputType = {
    ubigeoServices: number
  }

  export type UbigeoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ubigeoServices?: boolean | UbigeoCountOutputTypeCountUbigeoServicesArgs
  }

  // Custom InputTypes
  /**
   * UbigeoCountOutputType without action
   */
  export type UbigeoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbigeoCountOutputType
     */
    select?: UbigeoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UbigeoCountOutputType without action
   */
  export type UbigeoCountOutputTypeCountUbigeoServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UbigeoServiceWhereInput
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
    name: string | null
    email: string | null
    phone: string | null
    picture: string | null
    password: string | null
    role: $Enums.Role | null
    authProvider: $Enums.AuthProvider | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    picture: string | null
    password: string | null
    role: $Enums.Role | null
    authProvider: $Enums.AuthProvider | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    picture: number
    password: number
    role: number
    authProvider: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    picture?: true
    password?: true
    role?: true
    authProvider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    picture?: true
    password?: true
    role?: true
    authProvider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    picture?: true
    password?: true
    role?: true
    authProvider?: true
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
    name: string
    email: string
    phone: string
    picture: string
    password: string
    role: $Enums.Role
    authProvider: $Enums.AuthProvider
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
    name?: boolean
    email?: boolean
    phone?: boolean
    picture?: boolean
    password?: boolean
    role?: boolean
    authProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | User$providerArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    picture?: boolean
    password?: boolean
    role?: boolean
    authProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    picture?: boolean
    password?: boolean
    role?: boolean
    authProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    picture?: boolean
    password?: boolean
    role?: boolean
    authProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "picture" | "password" | "role" | "authProvider" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | User$providerArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs> | null
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      requests: Prisma.$RequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      picture: string
      password: string
      role: $Enums.Role
      authProvider: $Enums.AuthProvider
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
    provider<T extends User$providerArgs<ExtArgs> = {}>(args?: Subset<T, User$providerArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends User$requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly authProvider: FieldRef<"User", 'AuthProvider'>
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
   * User.provider
   */
  export type User$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    where?: ProviderWhereInput
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User.requests
   */
  export type User$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
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
   * Model Provider
   */

  export type AggregateProvider = {
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  export type ProviderMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    picture: string | null
    address: string | null
    email: string | null
    website: string | null
    phone: string | null
    facebook: string | null
    instagram: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    picture: string | null
    address: string | null
    email: string | null
    website: string | null
    phone: string | null
    facebook: string | null
    instagram: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderCountAggregateOutputType = {
    id: number
    name: number
    description: number
    picture: number
    address: number
    email: number
    website: number
    phone: number
    facebook: number
    instagram: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    picture?: true
    address?: true
    email?: true
    website?: true
    phone?: true
    facebook?: true
    instagram?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    picture?: true
    address?: true
    email?: true
    website?: true
    phone?: true
    facebook?: true
    instagram?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    picture?: true
    address?: true
    email?: true
    website?: true
    phone?: true
    facebook?: true
    instagram?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provider to aggregate.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Providers
    **/
    _count?: true | ProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderMaxAggregateInputType
  }

  export type GetProviderAggregateType<T extends ProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvider[P]>
      : GetScalarType<T[P], AggregateProvider[P]>
  }




  export type ProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderWhereInput
    orderBy?: ProviderOrderByWithAggregationInput | ProviderOrderByWithAggregationInput[]
    by: ProviderScalarFieldEnum[] | ProviderScalarFieldEnum
    having?: ProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderCountAggregateInputType | true
    _min?: ProviderMinAggregateInputType
    _max?: ProviderMaxAggregateInputType
  }

  export type ProviderGroupByOutputType = {
    id: string
    name: string
    description: string
    picture: string
    address: string
    email: string
    website: string
    phone: string
    facebook: string
    instagram: string
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  type GetProviderGroupByPayload<T extends ProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderGroupByOutputType[P]>
        }
      >
    >


  export type ProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    picture?: boolean
    address?: boolean
    email?: boolean
    website?: boolean
    phone?: boolean
    facebook?: boolean
    instagram?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    services?: boolean | Provider$servicesArgs<ExtArgs>
    requests?: boolean | Provider$requestsArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    picture?: boolean
    address?: boolean
    email?: boolean
    website?: boolean
    phone?: boolean
    facebook?: boolean
    instagram?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    picture?: boolean
    address?: boolean
    email?: boolean
    website?: boolean
    phone?: boolean
    facebook?: boolean
    instagram?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    picture?: boolean
    address?: boolean
    email?: boolean
    website?: boolean
    phone?: boolean
    facebook?: boolean
    instagram?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "picture" | "address" | "email" | "website" | "phone" | "facebook" | "instagram" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["provider"]>
  export type ProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    services?: boolean | Provider$servicesArgs<ExtArgs>
    requests?: boolean | Provider$requestsArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provider"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      services: Prisma.$ServicePayload<ExtArgs>[]
      requests: Prisma.$RequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      picture: string
      address: string
      email: string
      website: string
      phone: string
      facebook: string
      instagram: string
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["provider"]>
    composites: {}
  }

  type ProviderGetPayload<S extends boolean | null | undefined | ProviderDefaultArgs> = $Result.GetResult<Prisma.$ProviderPayload, S>

  type ProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderCountAggregateInputType | true
    }

  export interface ProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provider'], meta: { name: 'Provider' } }
    /**
     * Find zero or one Provider that matches the filter.
     * @param {ProviderFindUniqueArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderFindUniqueArgs>(args: SelectSubset<T, ProviderFindUniqueArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderFindUniqueOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderFindFirstArgs>(args?: SelectSubset<T, ProviderFindFirstArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.provider.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.provider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerWithIdOnly = await prisma.provider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderFindManyArgs>(args?: SelectSubset<T, ProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provider.
     * @param {ProviderCreateArgs} args - Arguments to create a Provider.
     * @example
     * // Create one Provider
     * const Provider = await prisma.provider.create({
     *   data: {
     *     // ... data to create a Provider
     *   }
     * })
     * 
     */
    create<T extends ProviderCreateArgs>(args: SelectSubset<T, ProviderCreateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Providers.
     * @param {ProviderCreateManyArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderCreateManyArgs>(args?: SelectSubset<T, ProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Providers and returns the data saved in the database.
     * @param {ProviderCreateManyAndReturnArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provider.
     * @param {ProviderDeleteArgs} args - Arguments to delete one Provider.
     * @example
     * // Delete one Provider
     * const Provider = await prisma.provider.delete({
     *   where: {
     *     // ... filter to delete one Provider
     *   }
     * })
     * 
     */
    delete<T extends ProviderDeleteArgs>(args: SelectSubset<T, ProviderDeleteArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provider.
     * @param {ProviderUpdateArgs} args - Arguments to update one Provider.
     * @example
     * // Update one Provider
     * const provider = await prisma.provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderUpdateArgs>(args: SelectSubset<T, ProviderUpdateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Providers.
     * @param {ProviderDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderDeleteManyArgs>(args?: SelectSubset<T, ProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderUpdateManyArgs>(args: SelectSubset<T, ProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers and returns the data updated in the database.
     * @param {ProviderUpdateManyAndReturnArgs} args - Arguments to update many Providers.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provider.
     * @param {ProviderUpsertArgs} args - Arguments to update or create a Provider.
     * @example
     * // Update or create a Provider
     * const provider = await prisma.provider.upsert({
     *   create: {
     *     // ... data to create a Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider we want to update
     *   }
     * })
     */
    upsert<T extends ProviderUpsertArgs>(args: SelectSubset<T, ProviderUpsertArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.provider.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends ProviderCountArgs>(
      args?: Subset<T, ProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProviderAggregateArgs>(args: Subset<T, ProviderAggregateArgs>): Prisma.PrismaPromise<GetProviderAggregateType<T>>

    /**
     * Group by Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderGroupByArgs} args - Group by arguments.
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
      T extends ProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderGroupByArgs['orderBy'] }
        : { orderBy?: ProviderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provider model
   */
  readonly fields: ProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    services<T extends Provider$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Provider$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends Provider$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Provider$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Provider model
   */
  interface ProviderFieldRefs {
    readonly id: FieldRef<"Provider", 'String'>
    readonly name: FieldRef<"Provider", 'String'>
    readonly description: FieldRef<"Provider", 'String'>
    readonly picture: FieldRef<"Provider", 'String'>
    readonly address: FieldRef<"Provider", 'String'>
    readonly email: FieldRef<"Provider", 'String'>
    readonly website: FieldRef<"Provider", 'String'>
    readonly phone: FieldRef<"Provider", 'String'>
    readonly facebook: FieldRef<"Provider", 'String'>
    readonly instagram: FieldRef<"Provider", 'String'>
    readonly status: FieldRef<"Provider", 'Boolean'>
    readonly createdAt: FieldRef<"Provider", 'DateTime'>
    readonly updatedAt: FieldRef<"Provider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Provider findUnique
   */
  export type ProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findUniqueOrThrow
   */
  export type ProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findFirst
   */
  export type ProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findFirstOrThrow
   */
  export type ProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findMany
   */
  export type ProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider create
   */
  export type ProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a Provider.
     */
    data: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
  }

  /**
   * Provider createMany
   */
  export type ProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider createManyAndReturn
   */
  export type ProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Provider update
   */
  export type ProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a Provider.
     */
    data: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
    /**
     * Choose, which Provider to update.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider updateMany
   */
  export type ProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider updateManyAndReturn
   */
  export type ProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Provider upsert
   */
  export type ProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the Provider to update in case it exists.
     */
    where: ProviderWhereUniqueInput
    /**
     * In case the Provider found by the `where` argument doesn't exist, create a new Provider with this data.
     */
    create: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
    /**
     * In case the Provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
  }

  /**
   * Provider delete
   */
  export type ProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter which Provider to delete.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider deleteMany
   */
  export type ProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Providers to delete
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to delete.
     */
    limit?: number
  }

  /**
   * Provider.services
   */
  export type Provider$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Provider.requests
   */
  export type Provider$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Provider without action
   */
  export type ProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string
    image: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    services?: boolean | Category$servicesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Category$servicesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      image: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Category$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Category$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly image: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.services
   */
  export type Category$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    priceMin: number | null
    priceMax: number | null
    score: number | null
    duration: number | null
  }

  export type ServiceSumAggregateOutputType = {
    priceMin: number | null
    priceMax: number | null
    score: number | null
    duration: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    priceMin: number | null
    priceMax: number | null
    score: number | null
    duration: number | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    providerId: string | null
    categoryId: string | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    priceMin: number | null
    priceMax: number | null
    score: number | null
    duration: number | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    providerId: string | null
    categoryId: string | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    priceMin: number
    priceMax: number
    score: number
    duration: number
    status: number
    createdAt: number
    updatedAt: number
    providerId: number
    categoryId: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    priceMin?: true
    priceMax?: true
    score?: true
    duration?: true
  }

  export type ServiceSumAggregateInputType = {
    priceMin?: true
    priceMax?: true
    score?: true
    duration?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    priceMin?: true
    priceMax?: true
    score?: true
    duration?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    providerId?: true
    categoryId?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    priceMin?: true
    priceMax?: true
    score?: true
    duration?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    providerId?: true
    categoryId?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    priceMin?: true
    priceMax?: true
    score?: true
    duration?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    providerId?: true
    categoryId?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    description: string
    priceMin: number
    priceMax: number
    score: number
    duration: number | null
    status: boolean
    createdAt: Date
    updatedAt: Date
    providerId: string
    categoryId: string
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    priceMin?: boolean
    priceMax?: boolean
    score?: boolean
    duration?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    providerId?: boolean
    categoryId?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    favorites?: boolean | Service$favoritesArgs<ExtArgs>
    ubigeoServices?: boolean | Service$ubigeoServicesArgs<ExtArgs>
    images?: boolean | Service$imagesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    priceMin?: boolean
    priceMax?: boolean
    score?: boolean
    duration?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    providerId?: boolean
    categoryId?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    priceMin?: boolean
    priceMax?: boolean
    score?: boolean
    duration?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    providerId?: boolean
    categoryId?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    priceMin?: boolean
    priceMax?: boolean
    score?: boolean
    duration?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    providerId?: boolean
    categoryId?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "priceMin" | "priceMax" | "score" | "duration" | "status" | "createdAt" | "updatedAt" | "providerId" | "categoryId", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    favorites?: boolean | Service$favoritesArgs<ExtArgs>
    ubigeoServices?: boolean | Service$ubigeoServicesArgs<ExtArgs>
    images?: boolean | Service$imagesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      ubigeoServices: Prisma.$UbigeoServicePayload<ExtArgs>[]
      images: Prisma.$ServiceImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      priceMin: number
      priceMax: number
      score: number
      duration: number | null
      status: boolean
      createdAt: Date
      updatedAt: Date
      providerId: string
      categoryId: string
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    favorites<T extends Service$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Service$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ubigeoServices<T extends Service$ubigeoServicesArgs<ExtArgs> = {}>(args?: Subset<T, Service$ubigeoServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbigeoServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Service$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Service$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly priceMin: FieldRef<"Service", 'Float'>
    readonly priceMax: FieldRef<"Service", 'Float'>
    readonly score: FieldRef<"Service", 'Float'>
    readonly duration: FieldRef<"Service", 'Int'>
    readonly status: FieldRef<"Service", 'Boolean'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
    readonly providerId: FieldRef<"Service", 'String'>
    readonly categoryId: FieldRef<"Service", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.favorites
   */
  export type Service$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Service.ubigeoServices
   */
  export type Service$ubigeoServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbigeoService
     */
    select?: UbigeoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbigeoService
     */
    omit?: UbigeoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoServiceInclude<ExtArgs> | null
    where?: UbigeoServiceWhereInput
    orderBy?: UbigeoServiceOrderByWithRelationInput | UbigeoServiceOrderByWithRelationInput[]
    cursor?: UbigeoServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UbigeoServiceScalarFieldEnum | UbigeoServiceScalarFieldEnum[]
  }

  /**
   * Service.images
   */
  export type Service$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceImage
     */
    select?: ServiceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceImage
     */
    omit?: ServiceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceImageInclude<ExtArgs> | null
    where?: ServiceImageWhereInput
    orderBy?: ServiceImageOrderByWithRelationInput | ServiceImageOrderByWithRelationInput[]
    cursor?: ServiceImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceImageScalarFieldEnum | ServiceImageScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model ServiceImage
   */

  export type AggregateServiceImage = {
    _count: ServiceImageCountAggregateOutputType | null
    _min: ServiceImageMinAggregateOutputType | null
    _max: ServiceImageMaxAggregateOutputType | null
  }

  export type ServiceImageMinAggregateOutputType = {
    id: string | null
    publicId: string | null
    url: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    serviceId: string | null
  }

  export type ServiceImageMaxAggregateOutputType = {
    id: string | null
    publicId: string | null
    url: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    serviceId: string | null
  }

  export type ServiceImageCountAggregateOutputType = {
    id: number
    publicId: number
    url: number
    name: number
    createdAt: number
    updatedAt: number
    serviceId: number
    _all: number
  }


  export type ServiceImageMinAggregateInputType = {
    id?: true
    publicId?: true
    url?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    serviceId?: true
  }

  export type ServiceImageMaxAggregateInputType = {
    id?: true
    publicId?: true
    url?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    serviceId?: true
  }

  export type ServiceImageCountAggregateInputType = {
    id?: true
    publicId?: true
    url?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    serviceId?: true
    _all?: true
  }

  export type ServiceImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceImage to aggregate.
     */
    where?: ServiceImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceImages to fetch.
     */
    orderBy?: ServiceImageOrderByWithRelationInput | ServiceImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceImages
    **/
    _count?: true | ServiceImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceImageMaxAggregateInputType
  }

  export type GetServiceImageAggregateType<T extends ServiceImageAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceImage[P]>
      : GetScalarType<T[P], AggregateServiceImage[P]>
  }




  export type ServiceImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceImageWhereInput
    orderBy?: ServiceImageOrderByWithAggregationInput | ServiceImageOrderByWithAggregationInput[]
    by: ServiceImageScalarFieldEnum[] | ServiceImageScalarFieldEnum
    having?: ServiceImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceImageCountAggregateInputType | true
    _min?: ServiceImageMinAggregateInputType
    _max?: ServiceImageMaxAggregateInputType
  }

  export type ServiceImageGroupByOutputType = {
    id: string
    publicId: string
    url: string
    name: string
    createdAt: Date
    updatedAt: Date
    serviceId: string
    _count: ServiceImageCountAggregateOutputType | null
    _min: ServiceImageMinAggregateOutputType | null
    _max: ServiceImageMaxAggregateOutputType | null
  }

  type GetServiceImageGroupByPayload<T extends ServiceImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceImageGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceImageGroupByOutputType[P]>
        }
      >
    >


  export type ServiceImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    url?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    serviceId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceImage"]>

  export type ServiceImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    url?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    serviceId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceImage"]>

  export type ServiceImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    url?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    serviceId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceImage"]>

  export type ServiceImageSelectScalar = {
    id?: boolean
    publicId?: boolean
    url?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    serviceId?: boolean
  }

  export type ServiceImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicId" | "url" | "name" | "createdAt" | "updatedAt" | "serviceId", ExtArgs["result"]["serviceImage"]>
  export type ServiceImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServiceImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServiceImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ServiceImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceImage"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicId: string
      url: string
      name: string
      createdAt: Date
      updatedAt: Date
      serviceId: string
    }, ExtArgs["result"]["serviceImage"]>
    composites: {}
  }

  type ServiceImageGetPayload<S extends boolean | null | undefined | ServiceImageDefaultArgs> = $Result.GetResult<Prisma.$ServiceImagePayload, S>

  type ServiceImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceImageCountAggregateInputType | true
    }

  export interface ServiceImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceImage'], meta: { name: 'ServiceImage' } }
    /**
     * Find zero or one ServiceImage that matches the filter.
     * @param {ServiceImageFindUniqueArgs} args - Arguments to find a ServiceImage
     * @example
     * // Get one ServiceImage
     * const serviceImage = await prisma.serviceImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceImageFindUniqueArgs>(args: SelectSubset<T, ServiceImageFindUniqueArgs<ExtArgs>>): Prisma__ServiceImageClient<$Result.GetResult<Prisma.$ServiceImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceImageFindUniqueOrThrowArgs} args - Arguments to find a ServiceImage
     * @example
     * // Get one ServiceImage
     * const serviceImage = await prisma.serviceImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceImageClient<$Result.GetResult<Prisma.$ServiceImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceImageFindFirstArgs} args - Arguments to find a ServiceImage
     * @example
     * // Get one ServiceImage
     * const serviceImage = await prisma.serviceImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceImageFindFirstArgs>(args?: SelectSubset<T, ServiceImageFindFirstArgs<ExtArgs>>): Prisma__ServiceImageClient<$Result.GetResult<Prisma.$ServiceImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceImageFindFirstOrThrowArgs} args - Arguments to find a ServiceImage
     * @example
     * // Get one ServiceImage
     * const serviceImage = await prisma.serviceImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceImageClient<$Result.GetResult<Prisma.$ServiceImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceImages
     * const serviceImages = await prisma.serviceImage.findMany()
     * 
     * // Get first 10 ServiceImages
     * const serviceImages = await prisma.serviceImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceImageWithIdOnly = await prisma.serviceImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceImageFindManyArgs>(args?: SelectSubset<T, ServiceImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceImage.
     * @param {ServiceImageCreateArgs} args - Arguments to create a ServiceImage.
     * @example
     * // Create one ServiceImage
     * const ServiceImage = await prisma.serviceImage.create({
     *   data: {
     *     // ... data to create a ServiceImage
     *   }
     * })
     * 
     */
    create<T extends ServiceImageCreateArgs>(args: SelectSubset<T, ServiceImageCreateArgs<ExtArgs>>): Prisma__ServiceImageClient<$Result.GetResult<Prisma.$ServiceImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceImages.
     * @param {ServiceImageCreateManyArgs} args - Arguments to create many ServiceImages.
     * @example
     * // Create many ServiceImages
     * const serviceImage = await prisma.serviceImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceImageCreateManyArgs>(args?: SelectSubset<T, ServiceImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceImages and returns the data saved in the database.
     * @param {ServiceImageCreateManyAndReturnArgs} args - Arguments to create many ServiceImages.
     * @example
     * // Create many ServiceImages
     * const serviceImage = await prisma.serviceImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceImages and only return the `id`
     * const serviceImageWithIdOnly = await prisma.serviceImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceImage.
     * @param {ServiceImageDeleteArgs} args - Arguments to delete one ServiceImage.
     * @example
     * // Delete one ServiceImage
     * const ServiceImage = await prisma.serviceImage.delete({
     *   where: {
     *     // ... filter to delete one ServiceImage
     *   }
     * })
     * 
     */
    delete<T extends ServiceImageDeleteArgs>(args: SelectSubset<T, ServiceImageDeleteArgs<ExtArgs>>): Prisma__ServiceImageClient<$Result.GetResult<Prisma.$ServiceImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceImage.
     * @param {ServiceImageUpdateArgs} args - Arguments to update one ServiceImage.
     * @example
     * // Update one ServiceImage
     * const serviceImage = await prisma.serviceImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceImageUpdateArgs>(args: SelectSubset<T, ServiceImageUpdateArgs<ExtArgs>>): Prisma__ServiceImageClient<$Result.GetResult<Prisma.$ServiceImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceImages.
     * @param {ServiceImageDeleteManyArgs} args - Arguments to filter ServiceImages to delete.
     * @example
     * // Delete a few ServiceImages
     * const { count } = await prisma.serviceImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceImageDeleteManyArgs>(args?: SelectSubset<T, ServiceImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceImages
     * const serviceImage = await prisma.serviceImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceImageUpdateManyArgs>(args: SelectSubset<T, ServiceImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceImages and returns the data updated in the database.
     * @param {ServiceImageUpdateManyAndReturnArgs} args - Arguments to update many ServiceImages.
     * @example
     * // Update many ServiceImages
     * const serviceImage = await prisma.serviceImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceImages and only return the `id`
     * const serviceImageWithIdOnly = await prisma.serviceImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceImage.
     * @param {ServiceImageUpsertArgs} args - Arguments to update or create a ServiceImage.
     * @example
     * // Update or create a ServiceImage
     * const serviceImage = await prisma.serviceImage.upsert({
     *   create: {
     *     // ... data to create a ServiceImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceImage we want to update
     *   }
     * })
     */
    upsert<T extends ServiceImageUpsertArgs>(args: SelectSubset<T, ServiceImageUpsertArgs<ExtArgs>>): Prisma__ServiceImageClient<$Result.GetResult<Prisma.$ServiceImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceImageCountArgs} args - Arguments to filter ServiceImages to count.
     * @example
     * // Count the number of ServiceImages
     * const count = await prisma.serviceImage.count({
     *   where: {
     *     // ... the filter for the ServiceImages we want to count
     *   }
     * })
    **/
    count<T extends ServiceImageCountArgs>(
      args?: Subset<T, ServiceImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceImageAggregateArgs>(args: Subset<T, ServiceImageAggregateArgs>): Prisma.PrismaPromise<GetServiceImageAggregateType<T>>

    /**
     * Group by ServiceImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceImageGroupByArgs} args - Group by arguments.
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
      T extends ServiceImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceImageGroupByArgs['orderBy'] }
        : { orderBy?: ServiceImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceImage model
   */
  readonly fields: ServiceImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ServiceImage model
   */
  interface ServiceImageFieldRefs {
    readonly id: FieldRef<"ServiceImage", 'String'>
    readonly publicId: FieldRef<"ServiceImage", 'String'>
    readonly url: FieldRef<"ServiceImage", 'String'>
    readonly name: FieldRef<"ServiceImage", 'String'>
    readonly createdAt: FieldRef<"ServiceImage", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceImage", 'DateTime'>
    readonly serviceId: FieldRef<"ServiceImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServiceImage findUnique
   */
  export type ServiceImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceImage
     */
    select?: ServiceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceImage
     */
    omit?: ServiceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceImageInclude<ExtArgs> | null
    /**
     * Filter, which ServiceImage to fetch.
     */
    where: ServiceImageWhereUniqueInput
  }

  /**
   * ServiceImage findUniqueOrThrow
   */
  export type ServiceImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceImage
     */
    select?: ServiceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceImage
     */
    omit?: ServiceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceImageInclude<ExtArgs> | null
    /**
     * Filter, which ServiceImage to fetch.
     */
    where: ServiceImageWhereUniqueInput
  }

  /**
   * ServiceImage findFirst
   */
  export type ServiceImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceImage
     */
    select?: ServiceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceImage
     */
    omit?: ServiceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceImageInclude<ExtArgs> | null
    /**
     * Filter, which ServiceImage to fetch.
     */
    where?: ServiceImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceImages to fetch.
     */
    orderBy?: ServiceImageOrderByWithRelationInput | ServiceImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceImages.
     */
    cursor?: ServiceImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceImages.
     */
    distinct?: ServiceImageScalarFieldEnum | ServiceImageScalarFieldEnum[]
  }

  /**
   * ServiceImage findFirstOrThrow
   */
  export type ServiceImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceImage
     */
    select?: ServiceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceImage
     */
    omit?: ServiceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceImageInclude<ExtArgs> | null
    /**
     * Filter, which ServiceImage to fetch.
     */
    where?: ServiceImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceImages to fetch.
     */
    orderBy?: ServiceImageOrderByWithRelationInput | ServiceImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceImages.
     */
    cursor?: ServiceImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceImages.
     */
    distinct?: ServiceImageScalarFieldEnum | ServiceImageScalarFieldEnum[]
  }

  /**
   * ServiceImage findMany
   */
  export type ServiceImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceImage
     */
    select?: ServiceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceImage
     */
    omit?: ServiceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceImageInclude<ExtArgs> | null
    /**
     * Filter, which ServiceImages to fetch.
     */
    where?: ServiceImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceImages to fetch.
     */
    orderBy?: ServiceImageOrderByWithRelationInput | ServiceImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceImages.
     */
    cursor?: ServiceImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceImages.
     */
    skip?: number
    distinct?: ServiceImageScalarFieldEnum | ServiceImageScalarFieldEnum[]
  }

  /**
   * ServiceImage create
   */
  export type ServiceImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceImage
     */
    select?: ServiceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceImage
     */
    omit?: ServiceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceImage.
     */
    data: XOR<ServiceImageCreateInput, ServiceImageUncheckedCreateInput>
  }

  /**
   * ServiceImage createMany
   */
  export type ServiceImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceImages.
     */
    data: ServiceImageCreateManyInput | ServiceImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceImage createManyAndReturn
   */
  export type ServiceImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceImage
     */
    select?: ServiceImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceImage
     */
    omit?: ServiceImageOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceImages.
     */
    data: ServiceImageCreateManyInput | ServiceImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceImage update
   */
  export type ServiceImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceImage
     */
    select?: ServiceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceImage
     */
    omit?: ServiceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceImage.
     */
    data: XOR<ServiceImageUpdateInput, ServiceImageUncheckedUpdateInput>
    /**
     * Choose, which ServiceImage to update.
     */
    where: ServiceImageWhereUniqueInput
  }

  /**
   * ServiceImage updateMany
   */
  export type ServiceImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceImages.
     */
    data: XOR<ServiceImageUpdateManyMutationInput, ServiceImageUncheckedUpdateManyInput>
    /**
     * Filter which ServiceImages to update
     */
    where?: ServiceImageWhereInput
    /**
     * Limit how many ServiceImages to update.
     */
    limit?: number
  }

  /**
   * ServiceImage updateManyAndReturn
   */
  export type ServiceImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceImage
     */
    select?: ServiceImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceImage
     */
    omit?: ServiceImageOmit<ExtArgs> | null
    /**
     * The data used to update ServiceImages.
     */
    data: XOR<ServiceImageUpdateManyMutationInput, ServiceImageUncheckedUpdateManyInput>
    /**
     * Filter which ServiceImages to update
     */
    where?: ServiceImageWhereInput
    /**
     * Limit how many ServiceImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceImage upsert
   */
  export type ServiceImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceImage
     */
    select?: ServiceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceImage
     */
    omit?: ServiceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceImage to update in case it exists.
     */
    where: ServiceImageWhereUniqueInput
    /**
     * In case the ServiceImage found by the `where` argument doesn't exist, create a new ServiceImage with this data.
     */
    create: XOR<ServiceImageCreateInput, ServiceImageUncheckedCreateInput>
    /**
     * In case the ServiceImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceImageUpdateInput, ServiceImageUncheckedUpdateInput>
  }

  /**
   * ServiceImage delete
   */
  export type ServiceImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceImage
     */
    select?: ServiceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceImage
     */
    omit?: ServiceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceImageInclude<ExtArgs> | null
    /**
     * Filter which ServiceImage to delete.
     */
    where: ServiceImageWhereUniqueInput
  }

  /**
   * ServiceImage deleteMany
   */
  export type ServiceImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceImages to delete
     */
    where?: ServiceImageWhereInput
    /**
     * Limit how many ServiceImages to delete.
     */
    limit?: number
  }

  /**
   * ServiceImage without action
   */
  export type ServiceImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceImage
     */
    select?: ServiceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceImage
     */
    omit?: ServiceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceImageInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    serviceId: string | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    serviceId: string | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    serviceId: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    serviceId?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    serviceId?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    serviceId?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string
    serviceId: string
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    serviceId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    serviceId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    serviceId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    serviceId?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId" | "serviceId", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      userId: string
      serviceId: string
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
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
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
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
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly serviceId: FieldRef<"Favorite", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Model Request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestAvgAggregateOutputType = {
    guestQty: number | null
    budgetAmount: number | null
    finalPrice: number | null
  }

  export type RequestSumAggregateOutputType = {
    guestQty: number | null
    budgetAmount: number | null
    finalPrice: number | null
  }

  export type RequestMinAggregateOutputType = {
    id: string | null
    guestQty: number | null
    budgetAmount: number | null
    finalPrice: number | null
    eventDate: Date | null
    status: $Enums.RequestStatus | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    providerId: string | null
  }

  export type RequestMaxAggregateOutputType = {
    id: string | null
    guestQty: number | null
    budgetAmount: number | null
    finalPrice: number | null
    eventDate: Date | null
    status: $Enums.RequestStatus | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    providerId: string | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    guestQty: number
    budgetAmount: number
    finalPrice: number
    eventDate: number
    status: number
    comment: number
    createdAt: number
    updatedAt: number
    userId: number
    providerId: number
    _all: number
  }


  export type RequestAvgAggregateInputType = {
    guestQty?: true
    budgetAmount?: true
    finalPrice?: true
  }

  export type RequestSumAggregateInputType = {
    guestQty?: true
    budgetAmount?: true
    finalPrice?: true
  }

  export type RequestMinAggregateInputType = {
    id?: true
    guestQty?: true
    budgetAmount?: true
    finalPrice?: true
    eventDate?: true
    status?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    providerId?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    guestQty?: true
    budgetAmount?: true
    finalPrice?: true
    eventDate?: true
    status?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    providerId?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    guestQty?: true
    budgetAmount?: true
    finalPrice?: true
    eventDate?: true
    status?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    providerId?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _avg?: RequestAvgAggregateInputType
    _sum?: RequestSumAggregateInputType
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    id: string
    guestQty: number
    budgetAmount: number
    finalPrice: number
    eventDate: Date
    status: $Enums.RequestStatus
    comment: string
    createdAt: Date
    updatedAt: Date
    userId: string
    providerId: string
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestQty?: boolean
    budgetAmount?: boolean
    finalPrice?: boolean
    eventDate?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    providerId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    items?: boolean | Request$itemsArgs<ExtArgs>
    payment?: boolean | Request$paymentArgs<ExtArgs>
    _count?: boolean | RequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestQty?: boolean
    budgetAmount?: boolean
    finalPrice?: boolean
    eventDate?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    providerId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestQty?: boolean
    budgetAmount?: boolean
    finalPrice?: boolean
    eventDate?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    providerId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    id?: boolean
    guestQty?: boolean
    budgetAmount?: boolean
    finalPrice?: boolean
    eventDate?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    providerId?: boolean
  }

  export type RequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guestQty" | "budgetAmount" | "finalPrice" | "eventDate" | "status" | "comment" | "createdAt" | "updatedAt" | "userId" | "providerId", ExtArgs["result"]["request"]>
  export type RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    items?: boolean | Request$itemsArgs<ExtArgs>
    payment?: boolean | Request$paymentArgs<ExtArgs>
    _count?: boolean | RequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type RequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }

  export type $RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Request"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      provider: Prisma.$ProviderPayload<ExtArgs>
      items: Prisma.$RequestItemPayload<ExtArgs>[]
      payment: Prisma.$RequestPaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guestQty: number
      budgetAmount: number
      finalPrice: number
      eventDate: Date
      status: $Enums.RequestStatus
      comment: string
      createdAt: Date
      updatedAt: Date
      userId: string
      providerId: string
    }, ExtArgs["result"]["request"]>
    composites: {}
  }

  type RequestGetPayload<S extends boolean | null | undefined | RequestDefaultArgs> = $Result.GetResult<Prisma.$RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestFindUniqueArgs>(args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestFindFirstArgs>(args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestFindManyArgs>(args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
     */
    create<T extends RequestCreateArgs>(args: SelectSubset<T, RequestCreateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestCreateManyArgs>(args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requests and returns the data saved in the database.
     * @param {RequestCreateManyAndReturnArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
     */
    delete<T extends RequestDeleteArgs>(args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestUpdateArgs>(args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestDeleteManyArgs>(args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestUpdateManyArgs>(args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests and returns the data updated in the database.
     * @param {RequestUpdateManyAndReturnArgs} args - Arguments to update many Requests.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.updateManyAndReturn({
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
    updateManyAndReturn<T extends RequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     */
    upsert<T extends RequestUpsertArgs>(args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
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
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Request$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Request$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends Request$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Request$paymentArgs<ExtArgs>>): Prisma__RequestPaymentClient<$Result.GetResult<Prisma.$RequestPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Request model
   */
  interface RequestFieldRefs {
    readonly id: FieldRef<"Request", 'String'>
    readonly guestQty: FieldRef<"Request", 'Int'>
    readonly budgetAmount: FieldRef<"Request", 'Float'>
    readonly finalPrice: FieldRef<"Request", 'Float'>
    readonly eventDate: FieldRef<"Request", 'DateTime'>
    readonly status: FieldRef<"Request", 'RequestStatus'>
    readonly comment: FieldRef<"Request", 'String'>
    readonly createdAt: FieldRef<"Request", 'DateTime'>
    readonly updatedAt: FieldRef<"Request", 'DateTime'>
    readonly userId: FieldRef<"Request", 'String'>
    readonly providerId: FieldRef<"Request", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }

  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Request createManyAndReturn
   */
  export type RequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
  }

  /**
   * Request updateManyAndReturn
   */
  export type RequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }

  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to delete.
     */
    limit?: number
  }

  /**
   * Request.items
   */
  export type Request$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestItem
     */
    select?: RequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestItem
     */
    omit?: RequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestItemInclude<ExtArgs> | null
    where?: RequestItemWhereInput
    orderBy?: RequestItemOrderByWithRelationInput | RequestItemOrderByWithRelationInput[]
    cursor?: RequestItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestItemScalarFieldEnum | RequestItemScalarFieldEnum[]
  }

  /**
   * Request.payment
   */
  export type Request$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestPayment
     */
    select?: RequestPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestPayment
     */
    omit?: RequestPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestPaymentInclude<ExtArgs> | null
    where?: RequestPaymentWhereInput
  }

  /**
   * Request without action
   */
  export type RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
  }


  /**
   * Model RequestItem
   */

  export type AggregateRequestItem = {
    _count: RequestItemCountAggregateOutputType | null
    _avg: RequestItemAvgAggregateOutputType | null
    _sum: RequestItemSumAggregateOutputType | null
    _min: RequestItemMinAggregateOutputType | null
    _max: RequestItemMaxAggregateOutputType | null
  }

  export type RequestItemAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
    total: number | null
  }

  export type RequestItemSumAggregateOutputType = {
    quantity: number | null
    price: number | null
    total: number | null
  }

  export type RequestItemMinAggregateOutputType = {
    id: string | null
    quantity: number | null
    price: number | null
    total: number | null
    comment: string | null
    serviceId: string | null
    requestId: string | null
  }

  export type RequestItemMaxAggregateOutputType = {
    id: string | null
    quantity: number | null
    price: number | null
    total: number | null
    comment: string | null
    serviceId: string | null
    requestId: string | null
  }

  export type RequestItemCountAggregateOutputType = {
    id: number
    quantity: number
    price: number
    total: number
    comment: number
    serviceId: number
    service: number
    requestId: number
    _all: number
  }


  export type RequestItemAvgAggregateInputType = {
    quantity?: true
    price?: true
    total?: true
  }

  export type RequestItemSumAggregateInputType = {
    quantity?: true
    price?: true
    total?: true
  }

  export type RequestItemMinAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    total?: true
    comment?: true
    serviceId?: true
    requestId?: true
  }

  export type RequestItemMaxAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    total?: true
    comment?: true
    serviceId?: true
    requestId?: true
  }

  export type RequestItemCountAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    total?: true
    comment?: true
    serviceId?: true
    service?: true
    requestId?: true
    _all?: true
  }

  export type RequestItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestItem to aggregate.
     */
    where?: RequestItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestItems to fetch.
     */
    orderBy?: RequestItemOrderByWithRelationInput | RequestItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestItems
    **/
    _count?: true | RequestItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestItemMaxAggregateInputType
  }

  export type GetRequestItemAggregateType<T extends RequestItemAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestItem[P]>
      : GetScalarType<T[P], AggregateRequestItem[P]>
  }




  export type RequestItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestItemWhereInput
    orderBy?: RequestItemOrderByWithAggregationInput | RequestItemOrderByWithAggregationInput[]
    by: RequestItemScalarFieldEnum[] | RequestItemScalarFieldEnum
    having?: RequestItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestItemCountAggregateInputType | true
    _avg?: RequestItemAvgAggregateInputType
    _sum?: RequestItemSumAggregateInputType
    _min?: RequestItemMinAggregateInputType
    _max?: RequestItemMaxAggregateInputType
  }

  export type RequestItemGroupByOutputType = {
    id: string
    quantity: number
    price: number
    total: number
    comment: string
    serviceId: string
    service: JsonValue
    requestId: string
    _count: RequestItemCountAggregateOutputType | null
    _avg: RequestItemAvgAggregateOutputType | null
    _sum: RequestItemSumAggregateOutputType | null
    _min: RequestItemMinAggregateOutputType | null
    _max: RequestItemMaxAggregateOutputType | null
  }

  type GetRequestItemGroupByPayload<T extends RequestItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestItemGroupByOutputType[P]>
            : GetScalarType<T[P], RequestItemGroupByOutputType[P]>
        }
      >
    >


  export type RequestItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    total?: boolean
    comment?: boolean
    serviceId?: boolean
    service?: boolean
    requestId?: boolean
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestItem"]>

  export type RequestItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    total?: boolean
    comment?: boolean
    serviceId?: boolean
    service?: boolean
    requestId?: boolean
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestItem"]>

  export type RequestItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    total?: boolean
    comment?: boolean
    serviceId?: boolean
    service?: boolean
    requestId?: boolean
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestItem"]>

  export type RequestItemSelectScalar = {
    id?: boolean
    quantity?: boolean
    price?: boolean
    total?: boolean
    comment?: boolean
    serviceId?: boolean
    service?: boolean
    requestId?: boolean
  }

  export type RequestItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "price" | "total" | "comment" | "serviceId" | "service" | "requestId", ExtArgs["result"]["requestItem"]>
  export type RequestItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }
  export type RequestItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }
  export type RequestItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }

  export type $RequestItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestItem"
    objects: {
      request: Prisma.$RequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantity: number
      price: number
      total: number
      comment: string
      serviceId: string
      service: Prisma.JsonValue
      requestId: string
    }, ExtArgs["result"]["requestItem"]>
    composites: {}
  }

  type RequestItemGetPayload<S extends boolean | null | undefined | RequestItemDefaultArgs> = $Result.GetResult<Prisma.$RequestItemPayload, S>

  type RequestItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestItemCountAggregateInputType | true
    }

  export interface RequestItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestItem'], meta: { name: 'RequestItem' } }
    /**
     * Find zero or one RequestItem that matches the filter.
     * @param {RequestItemFindUniqueArgs} args - Arguments to find a RequestItem
     * @example
     * // Get one RequestItem
     * const requestItem = await prisma.requestItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestItemFindUniqueArgs>(args: SelectSubset<T, RequestItemFindUniqueArgs<ExtArgs>>): Prisma__RequestItemClient<$Result.GetResult<Prisma.$RequestItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequestItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestItemFindUniqueOrThrowArgs} args - Arguments to find a RequestItem
     * @example
     * // Get one RequestItem
     * const requestItem = await prisma.requestItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestItemFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestItemClient<$Result.GetResult<Prisma.$RequestItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestItemFindFirstArgs} args - Arguments to find a RequestItem
     * @example
     * // Get one RequestItem
     * const requestItem = await prisma.requestItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestItemFindFirstArgs>(args?: SelectSubset<T, RequestItemFindFirstArgs<ExtArgs>>): Prisma__RequestItemClient<$Result.GetResult<Prisma.$RequestItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestItemFindFirstOrThrowArgs} args - Arguments to find a RequestItem
     * @example
     * // Get one RequestItem
     * const requestItem = await prisma.requestItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestItemFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestItemClient<$Result.GetResult<Prisma.$RequestItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestItems
     * const requestItems = await prisma.requestItem.findMany()
     * 
     * // Get first 10 RequestItems
     * const requestItems = await prisma.requestItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestItemWithIdOnly = await prisma.requestItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestItemFindManyArgs>(args?: SelectSubset<T, RequestItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequestItem.
     * @param {RequestItemCreateArgs} args - Arguments to create a RequestItem.
     * @example
     * // Create one RequestItem
     * const RequestItem = await prisma.requestItem.create({
     *   data: {
     *     // ... data to create a RequestItem
     *   }
     * })
     * 
     */
    create<T extends RequestItemCreateArgs>(args: SelectSubset<T, RequestItemCreateArgs<ExtArgs>>): Prisma__RequestItemClient<$Result.GetResult<Prisma.$RequestItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequestItems.
     * @param {RequestItemCreateManyArgs} args - Arguments to create many RequestItems.
     * @example
     * // Create many RequestItems
     * const requestItem = await prisma.requestItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestItemCreateManyArgs>(args?: SelectSubset<T, RequestItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequestItems and returns the data saved in the database.
     * @param {RequestItemCreateManyAndReturnArgs} args - Arguments to create many RequestItems.
     * @example
     * // Create many RequestItems
     * const requestItem = await prisma.requestItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequestItems and only return the `id`
     * const requestItemWithIdOnly = await prisma.requestItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestItemCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequestItem.
     * @param {RequestItemDeleteArgs} args - Arguments to delete one RequestItem.
     * @example
     * // Delete one RequestItem
     * const RequestItem = await prisma.requestItem.delete({
     *   where: {
     *     // ... filter to delete one RequestItem
     *   }
     * })
     * 
     */
    delete<T extends RequestItemDeleteArgs>(args: SelectSubset<T, RequestItemDeleteArgs<ExtArgs>>): Prisma__RequestItemClient<$Result.GetResult<Prisma.$RequestItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequestItem.
     * @param {RequestItemUpdateArgs} args - Arguments to update one RequestItem.
     * @example
     * // Update one RequestItem
     * const requestItem = await prisma.requestItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestItemUpdateArgs>(args: SelectSubset<T, RequestItemUpdateArgs<ExtArgs>>): Prisma__RequestItemClient<$Result.GetResult<Prisma.$RequestItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequestItems.
     * @param {RequestItemDeleteManyArgs} args - Arguments to filter RequestItems to delete.
     * @example
     * // Delete a few RequestItems
     * const { count } = await prisma.requestItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestItemDeleteManyArgs>(args?: SelectSubset<T, RequestItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestItems
     * const requestItem = await prisma.requestItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestItemUpdateManyArgs>(args: SelectSubset<T, RequestItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestItems and returns the data updated in the database.
     * @param {RequestItemUpdateManyAndReturnArgs} args - Arguments to update many RequestItems.
     * @example
     * // Update many RequestItems
     * const requestItem = await prisma.requestItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequestItems and only return the `id`
     * const requestItemWithIdOnly = await prisma.requestItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends RequestItemUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequestItem.
     * @param {RequestItemUpsertArgs} args - Arguments to update or create a RequestItem.
     * @example
     * // Update or create a RequestItem
     * const requestItem = await prisma.requestItem.upsert({
     *   create: {
     *     // ... data to create a RequestItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestItem we want to update
     *   }
     * })
     */
    upsert<T extends RequestItemUpsertArgs>(args: SelectSubset<T, RequestItemUpsertArgs<ExtArgs>>): Prisma__RequestItemClient<$Result.GetResult<Prisma.$RequestItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequestItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestItemCountArgs} args - Arguments to filter RequestItems to count.
     * @example
     * // Count the number of RequestItems
     * const count = await prisma.requestItem.count({
     *   where: {
     *     // ... the filter for the RequestItems we want to count
     *   }
     * })
    **/
    count<T extends RequestItemCountArgs>(
      args?: Subset<T, RequestItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestItemAggregateArgs>(args: Subset<T, RequestItemAggregateArgs>): Prisma.PrismaPromise<GetRequestItemAggregateType<T>>

    /**
     * Group by RequestItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestItemGroupByArgs} args - Group by arguments.
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
      T extends RequestItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestItemGroupByArgs['orderBy'] }
        : { orderBy?: RequestItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RequestItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestItem model
   */
  readonly fields: RequestItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends RequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RequestDefaultArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RequestItem model
   */
  interface RequestItemFieldRefs {
    readonly id: FieldRef<"RequestItem", 'String'>
    readonly quantity: FieldRef<"RequestItem", 'Int'>
    readonly price: FieldRef<"RequestItem", 'Float'>
    readonly total: FieldRef<"RequestItem", 'Float'>
    readonly comment: FieldRef<"RequestItem", 'String'>
    readonly serviceId: FieldRef<"RequestItem", 'String'>
    readonly service: FieldRef<"RequestItem", 'Json'>
    readonly requestId: FieldRef<"RequestItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RequestItem findUnique
   */
  export type RequestItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestItem
     */
    select?: RequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestItem
     */
    omit?: RequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestItemInclude<ExtArgs> | null
    /**
     * Filter, which RequestItem to fetch.
     */
    where: RequestItemWhereUniqueInput
  }

  /**
   * RequestItem findUniqueOrThrow
   */
  export type RequestItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestItem
     */
    select?: RequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestItem
     */
    omit?: RequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestItemInclude<ExtArgs> | null
    /**
     * Filter, which RequestItem to fetch.
     */
    where: RequestItemWhereUniqueInput
  }

  /**
   * RequestItem findFirst
   */
  export type RequestItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestItem
     */
    select?: RequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestItem
     */
    omit?: RequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestItemInclude<ExtArgs> | null
    /**
     * Filter, which RequestItem to fetch.
     */
    where?: RequestItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestItems to fetch.
     */
    orderBy?: RequestItemOrderByWithRelationInput | RequestItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestItems.
     */
    cursor?: RequestItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestItems.
     */
    distinct?: RequestItemScalarFieldEnum | RequestItemScalarFieldEnum[]
  }

  /**
   * RequestItem findFirstOrThrow
   */
  export type RequestItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestItem
     */
    select?: RequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestItem
     */
    omit?: RequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestItemInclude<ExtArgs> | null
    /**
     * Filter, which RequestItem to fetch.
     */
    where?: RequestItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestItems to fetch.
     */
    orderBy?: RequestItemOrderByWithRelationInput | RequestItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestItems.
     */
    cursor?: RequestItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestItems.
     */
    distinct?: RequestItemScalarFieldEnum | RequestItemScalarFieldEnum[]
  }

  /**
   * RequestItem findMany
   */
  export type RequestItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestItem
     */
    select?: RequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestItem
     */
    omit?: RequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestItemInclude<ExtArgs> | null
    /**
     * Filter, which RequestItems to fetch.
     */
    where?: RequestItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestItems to fetch.
     */
    orderBy?: RequestItemOrderByWithRelationInput | RequestItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestItems.
     */
    cursor?: RequestItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestItems.
     */
    skip?: number
    distinct?: RequestItemScalarFieldEnum | RequestItemScalarFieldEnum[]
  }

  /**
   * RequestItem create
   */
  export type RequestItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestItem
     */
    select?: RequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestItem
     */
    omit?: RequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestItemInclude<ExtArgs> | null
    /**
     * The data needed to create a RequestItem.
     */
    data: XOR<RequestItemCreateInput, RequestItemUncheckedCreateInput>
  }

  /**
   * RequestItem createMany
   */
  export type RequestItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestItems.
     */
    data: RequestItemCreateManyInput | RequestItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestItem createManyAndReturn
   */
  export type RequestItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestItem
     */
    select?: RequestItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestItem
     */
    omit?: RequestItemOmit<ExtArgs> | null
    /**
     * The data used to create many RequestItems.
     */
    data: RequestItemCreateManyInput | RequestItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestItem update
   */
  export type RequestItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestItem
     */
    select?: RequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestItem
     */
    omit?: RequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestItemInclude<ExtArgs> | null
    /**
     * The data needed to update a RequestItem.
     */
    data: XOR<RequestItemUpdateInput, RequestItemUncheckedUpdateInput>
    /**
     * Choose, which RequestItem to update.
     */
    where: RequestItemWhereUniqueInput
  }

  /**
   * RequestItem updateMany
   */
  export type RequestItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestItems.
     */
    data: XOR<RequestItemUpdateManyMutationInput, RequestItemUncheckedUpdateManyInput>
    /**
     * Filter which RequestItems to update
     */
    where?: RequestItemWhereInput
    /**
     * Limit how many RequestItems to update.
     */
    limit?: number
  }

  /**
   * RequestItem updateManyAndReturn
   */
  export type RequestItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestItem
     */
    select?: RequestItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestItem
     */
    omit?: RequestItemOmit<ExtArgs> | null
    /**
     * The data used to update RequestItems.
     */
    data: XOR<RequestItemUpdateManyMutationInput, RequestItemUncheckedUpdateManyInput>
    /**
     * Filter which RequestItems to update
     */
    where?: RequestItemWhereInput
    /**
     * Limit how many RequestItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestItem upsert
   */
  export type RequestItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestItem
     */
    select?: RequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestItem
     */
    omit?: RequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestItemInclude<ExtArgs> | null
    /**
     * The filter to search for the RequestItem to update in case it exists.
     */
    where: RequestItemWhereUniqueInput
    /**
     * In case the RequestItem found by the `where` argument doesn't exist, create a new RequestItem with this data.
     */
    create: XOR<RequestItemCreateInput, RequestItemUncheckedCreateInput>
    /**
     * In case the RequestItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestItemUpdateInput, RequestItemUncheckedUpdateInput>
  }

  /**
   * RequestItem delete
   */
  export type RequestItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestItem
     */
    select?: RequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestItem
     */
    omit?: RequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestItemInclude<ExtArgs> | null
    /**
     * Filter which RequestItem to delete.
     */
    where: RequestItemWhereUniqueInput
  }

  /**
   * RequestItem deleteMany
   */
  export type RequestItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestItems to delete
     */
    where?: RequestItemWhereInput
    /**
     * Limit how many RequestItems to delete.
     */
    limit?: number
  }

  /**
   * RequestItem without action
   */
  export type RequestItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestItem
     */
    select?: RequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestItem
     */
    omit?: RequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestItemInclude<ExtArgs> | null
  }


  /**
   * Model RequestPayment
   */

  export type AggregateRequestPayment = {
    _count: RequestPaymentCountAggregateOutputType | null
    _avg: RequestPaymentAvgAggregateOutputType | null
    _sum: RequestPaymentSumAggregateOutputType | null
    _min: RequestPaymentMinAggregateOutputType | null
    _max: RequestPaymentMaxAggregateOutputType | null
  }

  export type RequestPaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type RequestPaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type RequestPaymentMinAggregateOutputType = {
    id: string | null
    amount: number | null
    method: string | null
    image: string | null
    transferNumber: string | null
    paidAt: Date | null
  }

  export type RequestPaymentMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    method: string | null
    image: string | null
    transferNumber: string | null
    paidAt: Date | null
  }

  export type RequestPaymentCountAggregateOutputType = {
    id: number
    amount: number
    method: number
    image: number
    transferNumber: number
    paidAt: number
    _all: number
  }


  export type RequestPaymentAvgAggregateInputType = {
    amount?: true
  }

  export type RequestPaymentSumAggregateInputType = {
    amount?: true
  }

  export type RequestPaymentMinAggregateInputType = {
    id?: true
    amount?: true
    method?: true
    image?: true
    transferNumber?: true
    paidAt?: true
  }

  export type RequestPaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    method?: true
    image?: true
    transferNumber?: true
    paidAt?: true
  }

  export type RequestPaymentCountAggregateInputType = {
    id?: true
    amount?: true
    method?: true
    image?: true
    transferNumber?: true
    paidAt?: true
    _all?: true
  }

  export type RequestPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestPayment to aggregate.
     */
    where?: RequestPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestPayments to fetch.
     */
    orderBy?: RequestPaymentOrderByWithRelationInput | RequestPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestPayments
    **/
    _count?: true | RequestPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestPaymentMaxAggregateInputType
  }

  export type GetRequestPaymentAggregateType<T extends RequestPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestPayment[P]>
      : GetScalarType<T[P], AggregateRequestPayment[P]>
  }




  export type RequestPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestPaymentWhereInput
    orderBy?: RequestPaymentOrderByWithAggregationInput | RequestPaymentOrderByWithAggregationInput[]
    by: RequestPaymentScalarFieldEnum[] | RequestPaymentScalarFieldEnum
    having?: RequestPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestPaymentCountAggregateInputType | true
    _avg?: RequestPaymentAvgAggregateInputType
    _sum?: RequestPaymentSumAggregateInputType
    _min?: RequestPaymentMinAggregateInputType
    _max?: RequestPaymentMaxAggregateInputType
  }

  export type RequestPaymentGroupByOutputType = {
    id: string
    amount: number
    method: string
    image: string
    transferNumber: string
    paidAt: Date | null
    _count: RequestPaymentCountAggregateOutputType | null
    _avg: RequestPaymentAvgAggregateOutputType | null
    _sum: RequestPaymentSumAggregateOutputType | null
    _min: RequestPaymentMinAggregateOutputType | null
    _max: RequestPaymentMaxAggregateOutputType | null
  }

  type GetRequestPaymentGroupByPayload<T extends RequestPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], RequestPaymentGroupByOutputType[P]>
        }
      >
    >


  export type RequestPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    method?: boolean
    image?: boolean
    transferNumber?: boolean
    paidAt?: boolean
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestPayment"]>

  export type RequestPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    method?: boolean
    image?: boolean
    transferNumber?: boolean
    paidAt?: boolean
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestPayment"]>

  export type RequestPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    method?: boolean
    image?: boolean
    transferNumber?: boolean
    paidAt?: boolean
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestPayment"]>

  export type RequestPaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    method?: boolean
    image?: boolean
    transferNumber?: boolean
    paidAt?: boolean
  }

  export type RequestPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "method" | "image" | "transferNumber" | "paidAt", ExtArgs["result"]["requestPayment"]>
  export type RequestPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }
  export type RequestPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }
  export type RequestPaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }

  export type $RequestPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestPayment"
    objects: {
      request: Prisma.$RequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      method: string
      image: string
      transferNumber: string
      paidAt: Date | null
    }, ExtArgs["result"]["requestPayment"]>
    composites: {}
  }

  type RequestPaymentGetPayload<S extends boolean | null | undefined | RequestPaymentDefaultArgs> = $Result.GetResult<Prisma.$RequestPaymentPayload, S>

  type RequestPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestPaymentCountAggregateInputType | true
    }

  export interface RequestPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestPayment'], meta: { name: 'RequestPayment' } }
    /**
     * Find zero or one RequestPayment that matches the filter.
     * @param {RequestPaymentFindUniqueArgs} args - Arguments to find a RequestPayment
     * @example
     * // Get one RequestPayment
     * const requestPayment = await prisma.requestPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestPaymentFindUniqueArgs>(args: SelectSubset<T, RequestPaymentFindUniqueArgs<ExtArgs>>): Prisma__RequestPaymentClient<$Result.GetResult<Prisma.$RequestPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequestPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestPaymentFindUniqueOrThrowArgs} args - Arguments to find a RequestPayment
     * @example
     * // Get one RequestPayment
     * const requestPayment = await prisma.requestPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestPaymentClient<$Result.GetResult<Prisma.$RequestPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestPaymentFindFirstArgs} args - Arguments to find a RequestPayment
     * @example
     * // Get one RequestPayment
     * const requestPayment = await prisma.requestPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestPaymentFindFirstArgs>(args?: SelectSubset<T, RequestPaymentFindFirstArgs<ExtArgs>>): Prisma__RequestPaymentClient<$Result.GetResult<Prisma.$RequestPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestPaymentFindFirstOrThrowArgs} args - Arguments to find a RequestPayment
     * @example
     * // Get one RequestPayment
     * const requestPayment = await prisma.requestPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestPaymentClient<$Result.GetResult<Prisma.$RequestPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestPayments
     * const requestPayments = await prisma.requestPayment.findMany()
     * 
     * // Get first 10 RequestPayments
     * const requestPayments = await prisma.requestPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestPaymentWithIdOnly = await prisma.requestPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestPaymentFindManyArgs>(args?: SelectSubset<T, RequestPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequestPayment.
     * @param {RequestPaymentCreateArgs} args - Arguments to create a RequestPayment.
     * @example
     * // Create one RequestPayment
     * const RequestPayment = await prisma.requestPayment.create({
     *   data: {
     *     // ... data to create a RequestPayment
     *   }
     * })
     * 
     */
    create<T extends RequestPaymentCreateArgs>(args: SelectSubset<T, RequestPaymentCreateArgs<ExtArgs>>): Prisma__RequestPaymentClient<$Result.GetResult<Prisma.$RequestPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequestPayments.
     * @param {RequestPaymentCreateManyArgs} args - Arguments to create many RequestPayments.
     * @example
     * // Create many RequestPayments
     * const requestPayment = await prisma.requestPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestPaymentCreateManyArgs>(args?: SelectSubset<T, RequestPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequestPayments and returns the data saved in the database.
     * @param {RequestPaymentCreateManyAndReturnArgs} args - Arguments to create many RequestPayments.
     * @example
     * // Create many RequestPayments
     * const requestPayment = await prisma.requestPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequestPayments and only return the `id`
     * const requestPaymentWithIdOnly = await prisma.requestPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequestPayment.
     * @param {RequestPaymentDeleteArgs} args - Arguments to delete one RequestPayment.
     * @example
     * // Delete one RequestPayment
     * const RequestPayment = await prisma.requestPayment.delete({
     *   where: {
     *     // ... filter to delete one RequestPayment
     *   }
     * })
     * 
     */
    delete<T extends RequestPaymentDeleteArgs>(args: SelectSubset<T, RequestPaymentDeleteArgs<ExtArgs>>): Prisma__RequestPaymentClient<$Result.GetResult<Prisma.$RequestPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequestPayment.
     * @param {RequestPaymentUpdateArgs} args - Arguments to update one RequestPayment.
     * @example
     * // Update one RequestPayment
     * const requestPayment = await prisma.requestPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestPaymentUpdateArgs>(args: SelectSubset<T, RequestPaymentUpdateArgs<ExtArgs>>): Prisma__RequestPaymentClient<$Result.GetResult<Prisma.$RequestPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequestPayments.
     * @param {RequestPaymentDeleteManyArgs} args - Arguments to filter RequestPayments to delete.
     * @example
     * // Delete a few RequestPayments
     * const { count } = await prisma.requestPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestPaymentDeleteManyArgs>(args?: SelectSubset<T, RequestPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestPayments
     * const requestPayment = await prisma.requestPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestPaymentUpdateManyArgs>(args: SelectSubset<T, RequestPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestPayments and returns the data updated in the database.
     * @param {RequestPaymentUpdateManyAndReturnArgs} args - Arguments to update many RequestPayments.
     * @example
     * // Update many RequestPayments
     * const requestPayment = await prisma.requestPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequestPayments and only return the `id`
     * const requestPaymentWithIdOnly = await prisma.requestPayment.updateManyAndReturn({
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
    updateManyAndReturn<T extends RequestPaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequestPayment.
     * @param {RequestPaymentUpsertArgs} args - Arguments to update or create a RequestPayment.
     * @example
     * // Update or create a RequestPayment
     * const requestPayment = await prisma.requestPayment.upsert({
     *   create: {
     *     // ... data to create a RequestPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestPayment we want to update
     *   }
     * })
     */
    upsert<T extends RequestPaymentUpsertArgs>(args: SelectSubset<T, RequestPaymentUpsertArgs<ExtArgs>>): Prisma__RequestPaymentClient<$Result.GetResult<Prisma.$RequestPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequestPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestPaymentCountArgs} args - Arguments to filter RequestPayments to count.
     * @example
     * // Count the number of RequestPayments
     * const count = await prisma.requestPayment.count({
     *   where: {
     *     // ... the filter for the RequestPayments we want to count
     *   }
     * })
    **/
    count<T extends RequestPaymentCountArgs>(
      args?: Subset<T, RequestPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestPaymentAggregateArgs>(args: Subset<T, RequestPaymentAggregateArgs>): Prisma.PrismaPromise<GetRequestPaymentAggregateType<T>>

    /**
     * Group by RequestPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestPaymentGroupByArgs} args - Group by arguments.
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
      T extends RequestPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestPaymentGroupByArgs['orderBy'] }
        : { orderBy?: RequestPaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RequestPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestPayment model
   */
  readonly fields: RequestPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends RequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RequestDefaultArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RequestPayment model
   */
  interface RequestPaymentFieldRefs {
    readonly id: FieldRef<"RequestPayment", 'String'>
    readonly amount: FieldRef<"RequestPayment", 'Float'>
    readonly method: FieldRef<"RequestPayment", 'String'>
    readonly image: FieldRef<"RequestPayment", 'String'>
    readonly transferNumber: FieldRef<"RequestPayment", 'String'>
    readonly paidAt: FieldRef<"RequestPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RequestPayment findUnique
   */
  export type RequestPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestPayment
     */
    select?: RequestPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestPayment
     */
    omit?: RequestPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestPaymentInclude<ExtArgs> | null
    /**
     * Filter, which RequestPayment to fetch.
     */
    where: RequestPaymentWhereUniqueInput
  }

  /**
   * RequestPayment findUniqueOrThrow
   */
  export type RequestPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestPayment
     */
    select?: RequestPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestPayment
     */
    omit?: RequestPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestPaymentInclude<ExtArgs> | null
    /**
     * Filter, which RequestPayment to fetch.
     */
    where: RequestPaymentWhereUniqueInput
  }

  /**
   * RequestPayment findFirst
   */
  export type RequestPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestPayment
     */
    select?: RequestPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestPayment
     */
    omit?: RequestPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestPaymentInclude<ExtArgs> | null
    /**
     * Filter, which RequestPayment to fetch.
     */
    where?: RequestPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestPayments to fetch.
     */
    orderBy?: RequestPaymentOrderByWithRelationInput | RequestPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestPayments.
     */
    cursor?: RequestPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestPayments.
     */
    distinct?: RequestPaymentScalarFieldEnum | RequestPaymentScalarFieldEnum[]
  }

  /**
   * RequestPayment findFirstOrThrow
   */
  export type RequestPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestPayment
     */
    select?: RequestPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestPayment
     */
    omit?: RequestPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestPaymentInclude<ExtArgs> | null
    /**
     * Filter, which RequestPayment to fetch.
     */
    where?: RequestPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestPayments to fetch.
     */
    orderBy?: RequestPaymentOrderByWithRelationInput | RequestPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestPayments.
     */
    cursor?: RequestPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestPayments.
     */
    distinct?: RequestPaymentScalarFieldEnum | RequestPaymentScalarFieldEnum[]
  }

  /**
   * RequestPayment findMany
   */
  export type RequestPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestPayment
     */
    select?: RequestPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestPayment
     */
    omit?: RequestPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestPaymentInclude<ExtArgs> | null
    /**
     * Filter, which RequestPayments to fetch.
     */
    where?: RequestPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestPayments to fetch.
     */
    orderBy?: RequestPaymentOrderByWithRelationInput | RequestPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestPayments.
     */
    cursor?: RequestPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestPayments.
     */
    skip?: number
    distinct?: RequestPaymentScalarFieldEnum | RequestPaymentScalarFieldEnum[]
  }

  /**
   * RequestPayment create
   */
  export type RequestPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestPayment
     */
    select?: RequestPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestPayment
     */
    omit?: RequestPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a RequestPayment.
     */
    data: XOR<RequestPaymentCreateInput, RequestPaymentUncheckedCreateInput>
  }

  /**
   * RequestPayment createMany
   */
  export type RequestPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestPayments.
     */
    data: RequestPaymentCreateManyInput | RequestPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestPayment createManyAndReturn
   */
  export type RequestPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestPayment
     */
    select?: RequestPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestPayment
     */
    omit?: RequestPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many RequestPayments.
     */
    data: RequestPaymentCreateManyInput | RequestPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestPayment update
   */
  export type RequestPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestPayment
     */
    select?: RequestPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestPayment
     */
    omit?: RequestPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a RequestPayment.
     */
    data: XOR<RequestPaymentUpdateInput, RequestPaymentUncheckedUpdateInput>
    /**
     * Choose, which RequestPayment to update.
     */
    where: RequestPaymentWhereUniqueInput
  }

  /**
   * RequestPayment updateMany
   */
  export type RequestPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestPayments.
     */
    data: XOR<RequestPaymentUpdateManyMutationInput, RequestPaymentUncheckedUpdateManyInput>
    /**
     * Filter which RequestPayments to update
     */
    where?: RequestPaymentWhereInput
    /**
     * Limit how many RequestPayments to update.
     */
    limit?: number
  }

  /**
   * RequestPayment updateManyAndReturn
   */
  export type RequestPaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestPayment
     */
    select?: RequestPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestPayment
     */
    omit?: RequestPaymentOmit<ExtArgs> | null
    /**
     * The data used to update RequestPayments.
     */
    data: XOR<RequestPaymentUpdateManyMutationInput, RequestPaymentUncheckedUpdateManyInput>
    /**
     * Filter which RequestPayments to update
     */
    where?: RequestPaymentWhereInput
    /**
     * Limit how many RequestPayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestPaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestPayment upsert
   */
  export type RequestPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestPayment
     */
    select?: RequestPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestPayment
     */
    omit?: RequestPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the RequestPayment to update in case it exists.
     */
    where: RequestPaymentWhereUniqueInput
    /**
     * In case the RequestPayment found by the `where` argument doesn't exist, create a new RequestPayment with this data.
     */
    create: XOR<RequestPaymentCreateInput, RequestPaymentUncheckedCreateInput>
    /**
     * In case the RequestPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestPaymentUpdateInput, RequestPaymentUncheckedUpdateInput>
  }

  /**
   * RequestPayment delete
   */
  export type RequestPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestPayment
     */
    select?: RequestPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestPayment
     */
    omit?: RequestPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestPaymentInclude<ExtArgs> | null
    /**
     * Filter which RequestPayment to delete.
     */
    where: RequestPaymentWhereUniqueInput
  }

  /**
   * RequestPayment deleteMany
   */
  export type RequestPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestPayments to delete
     */
    where?: RequestPaymentWhereInput
    /**
     * Limit how many RequestPayments to delete.
     */
    limit?: number
  }

  /**
   * RequestPayment without action
   */
  export type RequestPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestPayment
     */
    select?: RequestPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestPayment
     */
    omit?: RequestPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestPaymentInclude<ExtArgs> | null
  }


  /**
   * Model Ubigeo
   */

  export type AggregateUbigeo = {
    _count: UbigeoCountAggregateOutputType | null
    _min: UbigeoMinAggregateOutputType | null
    _max: UbigeoMaxAggregateOutputType | null
  }

  export type UbigeoMinAggregateOutputType = {
    id: string | null
    code: string | null
    district: string | null
    province: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UbigeoMaxAggregateOutputType = {
    id: string | null
    code: string | null
    district: string | null
    province: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UbigeoCountAggregateOutputType = {
    id: number
    code: number
    district: number
    province: number
    department: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UbigeoMinAggregateInputType = {
    id?: true
    code?: true
    district?: true
    province?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UbigeoMaxAggregateInputType = {
    id?: true
    code?: true
    district?: true
    province?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UbigeoCountAggregateInputType = {
    id?: true
    code?: true
    district?: true
    province?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UbigeoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ubigeo to aggregate.
     */
    where?: UbigeoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ubigeos to fetch.
     */
    orderBy?: UbigeoOrderByWithRelationInput | UbigeoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UbigeoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ubigeos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ubigeos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ubigeos
    **/
    _count?: true | UbigeoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UbigeoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UbigeoMaxAggregateInputType
  }

  export type GetUbigeoAggregateType<T extends UbigeoAggregateArgs> = {
        [P in keyof T & keyof AggregateUbigeo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUbigeo[P]>
      : GetScalarType<T[P], AggregateUbigeo[P]>
  }




  export type UbigeoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UbigeoWhereInput
    orderBy?: UbigeoOrderByWithAggregationInput | UbigeoOrderByWithAggregationInput[]
    by: UbigeoScalarFieldEnum[] | UbigeoScalarFieldEnum
    having?: UbigeoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UbigeoCountAggregateInputType | true
    _min?: UbigeoMinAggregateInputType
    _max?: UbigeoMaxAggregateInputType
  }

  export type UbigeoGroupByOutputType = {
    id: string
    code: string
    district: string
    province: string
    department: string
    createdAt: Date
    updatedAt: Date
    _count: UbigeoCountAggregateOutputType | null
    _min: UbigeoMinAggregateOutputType | null
    _max: UbigeoMaxAggregateOutputType | null
  }

  type GetUbigeoGroupByPayload<T extends UbigeoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UbigeoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UbigeoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UbigeoGroupByOutputType[P]>
            : GetScalarType<T[P], UbigeoGroupByOutputType[P]>
        }
      >
    >


  export type UbigeoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    district?: boolean
    province?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ubigeoServices?: boolean | Ubigeo$ubigeoServicesArgs<ExtArgs>
    _count?: boolean | UbigeoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ubigeo"]>

  export type UbigeoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    district?: boolean
    province?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ubigeo"]>

  export type UbigeoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    district?: boolean
    province?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ubigeo"]>

  export type UbigeoSelectScalar = {
    id?: boolean
    code?: boolean
    district?: boolean
    province?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UbigeoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "district" | "province" | "department" | "createdAt" | "updatedAt", ExtArgs["result"]["ubigeo"]>
  export type UbigeoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ubigeoServices?: boolean | Ubigeo$ubigeoServicesArgs<ExtArgs>
    _count?: boolean | UbigeoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UbigeoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UbigeoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UbigeoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ubigeo"
    objects: {
      ubigeoServices: Prisma.$UbigeoServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      district: string
      province: string
      department: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ubigeo"]>
    composites: {}
  }

  type UbigeoGetPayload<S extends boolean | null | undefined | UbigeoDefaultArgs> = $Result.GetResult<Prisma.$UbigeoPayload, S>

  type UbigeoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UbigeoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UbigeoCountAggregateInputType | true
    }

  export interface UbigeoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ubigeo'], meta: { name: 'Ubigeo' } }
    /**
     * Find zero or one Ubigeo that matches the filter.
     * @param {UbigeoFindUniqueArgs} args - Arguments to find a Ubigeo
     * @example
     * // Get one Ubigeo
     * const ubigeo = await prisma.ubigeo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UbigeoFindUniqueArgs>(args: SelectSubset<T, UbigeoFindUniqueArgs<ExtArgs>>): Prisma__UbigeoClient<$Result.GetResult<Prisma.$UbigeoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ubigeo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UbigeoFindUniqueOrThrowArgs} args - Arguments to find a Ubigeo
     * @example
     * // Get one Ubigeo
     * const ubigeo = await prisma.ubigeo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UbigeoFindUniqueOrThrowArgs>(args: SelectSubset<T, UbigeoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UbigeoClient<$Result.GetResult<Prisma.$UbigeoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ubigeo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbigeoFindFirstArgs} args - Arguments to find a Ubigeo
     * @example
     * // Get one Ubigeo
     * const ubigeo = await prisma.ubigeo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UbigeoFindFirstArgs>(args?: SelectSubset<T, UbigeoFindFirstArgs<ExtArgs>>): Prisma__UbigeoClient<$Result.GetResult<Prisma.$UbigeoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ubigeo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbigeoFindFirstOrThrowArgs} args - Arguments to find a Ubigeo
     * @example
     * // Get one Ubigeo
     * const ubigeo = await prisma.ubigeo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UbigeoFindFirstOrThrowArgs>(args?: SelectSubset<T, UbigeoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UbigeoClient<$Result.GetResult<Prisma.$UbigeoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ubigeos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbigeoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ubigeos
     * const ubigeos = await prisma.ubigeo.findMany()
     * 
     * // Get first 10 Ubigeos
     * const ubigeos = await prisma.ubigeo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ubigeoWithIdOnly = await prisma.ubigeo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UbigeoFindManyArgs>(args?: SelectSubset<T, UbigeoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbigeoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ubigeo.
     * @param {UbigeoCreateArgs} args - Arguments to create a Ubigeo.
     * @example
     * // Create one Ubigeo
     * const Ubigeo = await prisma.ubigeo.create({
     *   data: {
     *     // ... data to create a Ubigeo
     *   }
     * })
     * 
     */
    create<T extends UbigeoCreateArgs>(args: SelectSubset<T, UbigeoCreateArgs<ExtArgs>>): Prisma__UbigeoClient<$Result.GetResult<Prisma.$UbigeoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ubigeos.
     * @param {UbigeoCreateManyArgs} args - Arguments to create many Ubigeos.
     * @example
     * // Create many Ubigeos
     * const ubigeo = await prisma.ubigeo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UbigeoCreateManyArgs>(args?: SelectSubset<T, UbigeoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ubigeos and returns the data saved in the database.
     * @param {UbigeoCreateManyAndReturnArgs} args - Arguments to create many Ubigeos.
     * @example
     * // Create many Ubigeos
     * const ubigeo = await prisma.ubigeo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ubigeos and only return the `id`
     * const ubigeoWithIdOnly = await prisma.ubigeo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UbigeoCreateManyAndReturnArgs>(args?: SelectSubset<T, UbigeoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbigeoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ubigeo.
     * @param {UbigeoDeleteArgs} args - Arguments to delete one Ubigeo.
     * @example
     * // Delete one Ubigeo
     * const Ubigeo = await prisma.ubigeo.delete({
     *   where: {
     *     // ... filter to delete one Ubigeo
     *   }
     * })
     * 
     */
    delete<T extends UbigeoDeleteArgs>(args: SelectSubset<T, UbigeoDeleteArgs<ExtArgs>>): Prisma__UbigeoClient<$Result.GetResult<Prisma.$UbigeoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ubigeo.
     * @param {UbigeoUpdateArgs} args - Arguments to update one Ubigeo.
     * @example
     * // Update one Ubigeo
     * const ubigeo = await prisma.ubigeo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UbigeoUpdateArgs>(args: SelectSubset<T, UbigeoUpdateArgs<ExtArgs>>): Prisma__UbigeoClient<$Result.GetResult<Prisma.$UbigeoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ubigeos.
     * @param {UbigeoDeleteManyArgs} args - Arguments to filter Ubigeos to delete.
     * @example
     * // Delete a few Ubigeos
     * const { count } = await prisma.ubigeo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UbigeoDeleteManyArgs>(args?: SelectSubset<T, UbigeoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ubigeos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbigeoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ubigeos
     * const ubigeo = await prisma.ubigeo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UbigeoUpdateManyArgs>(args: SelectSubset<T, UbigeoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ubigeos and returns the data updated in the database.
     * @param {UbigeoUpdateManyAndReturnArgs} args - Arguments to update many Ubigeos.
     * @example
     * // Update many Ubigeos
     * const ubigeo = await prisma.ubigeo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ubigeos and only return the `id`
     * const ubigeoWithIdOnly = await prisma.ubigeo.updateManyAndReturn({
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
    updateManyAndReturn<T extends UbigeoUpdateManyAndReturnArgs>(args: SelectSubset<T, UbigeoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbigeoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ubigeo.
     * @param {UbigeoUpsertArgs} args - Arguments to update or create a Ubigeo.
     * @example
     * // Update or create a Ubigeo
     * const ubigeo = await prisma.ubigeo.upsert({
     *   create: {
     *     // ... data to create a Ubigeo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ubigeo we want to update
     *   }
     * })
     */
    upsert<T extends UbigeoUpsertArgs>(args: SelectSubset<T, UbigeoUpsertArgs<ExtArgs>>): Prisma__UbigeoClient<$Result.GetResult<Prisma.$UbigeoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ubigeos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbigeoCountArgs} args - Arguments to filter Ubigeos to count.
     * @example
     * // Count the number of Ubigeos
     * const count = await prisma.ubigeo.count({
     *   where: {
     *     // ... the filter for the Ubigeos we want to count
     *   }
     * })
    **/
    count<T extends UbigeoCountArgs>(
      args?: Subset<T, UbigeoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UbigeoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ubigeo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbigeoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UbigeoAggregateArgs>(args: Subset<T, UbigeoAggregateArgs>): Prisma.PrismaPromise<GetUbigeoAggregateType<T>>

    /**
     * Group by Ubigeo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbigeoGroupByArgs} args - Group by arguments.
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
      T extends UbigeoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UbigeoGroupByArgs['orderBy'] }
        : { orderBy?: UbigeoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UbigeoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUbigeoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ubigeo model
   */
  readonly fields: UbigeoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ubigeo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UbigeoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ubigeoServices<T extends Ubigeo$ubigeoServicesArgs<ExtArgs> = {}>(args?: Subset<T, Ubigeo$ubigeoServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbigeoServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ubigeo model
   */
  interface UbigeoFieldRefs {
    readonly id: FieldRef<"Ubigeo", 'String'>
    readonly code: FieldRef<"Ubigeo", 'String'>
    readonly district: FieldRef<"Ubigeo", 'String'>
    readonly province: FieldRef<"Ubigeo", 'String'>
    readonly department: FieldRef<"Ubigeo", 'String'>
    readonly createdAt: FieldRef<"Ubigeo", 'DateTime'>
    readonly updatedAt: FieldRef<"Ubigeo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ubigeo findUnique
   */
  export type UbigeoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubigeo
     */
    select?: UbigeoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubigeo
     */
    omit?: UbigeoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoInclude<ExtArgs> | null
    /**
     * Filter, which Ubigeo to fetch.
     */
    where: UbigeoWhereUniqueInput
  }

  /**
   * Ubigeo findUniqueOrThrow
   */
  export type UbigeoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubigeo
     */
    select?: UbigeoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubigeo
     */
    omit?: UbigeoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoInclude<ExtArgs> | null
    /**
     * Filter, which Ubigeo to fetch.
     */
    where: UbigeoWhereUniqueInput
  }

  /**
   * Ubigeo findFirst
   */
  export type UbigeoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubigeo
     */
    select?: UbigeoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubigeo
     */
    omit?: UbigeoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoInclude<ExtArgs> | null
    /**
     * Filter, which Ubigeo to fetch.
     */
    where?: UbigeoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ubigeos to fetch.
     */
    orderBy?: UbigeoOrderByWithRelationInput | UbigeoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ubigeos.
     */
    cursor?: UbigeoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ubigeos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ubigeos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ubigeos.
     */
    distinct?: UbigeoScalarFieldEnum | UbigeoScalarFieldEnum[]
  }

  /**
   * Ubigeo findFirstOrThrow
   */
  export type UbigeoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubigeo
     */
    select?: UbigeoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubigeo
     */
    omit?: UbigeoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoInclude<ExtArgs> | null
    /**
     * Filter, which Ubigeo to fetch.
     */
    where?: UbigeoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ubigeos to fetch.
     */
    orderBy?: UbigeoOrderByWithRelationInput | UbigeoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ubigeos.
     */
    cursor?: UbigeoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ubigeos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ubigeos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ubigeos.
     */
    distinct?: UbigeoScalarFieldEnum | UbigeoScalarFieldEnum[]
  }

  /**
   * Ubigeo findMany
   */
  export type UbigeoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubigeo
     */
    select?: UbigeoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubigeo
     */
    omit?: UbigeoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoInclude<ExtArgs> | null
    /**
     * Filter, which Ubigeos to fetch.
     */
    where?: UbigeoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ubigeos to fetch.
     */
    orderBy?: UbigeoOrderByWithRelationInput | UbigeoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ubigeos.
     */
    cursor?: UbigeoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ubigeos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ubigeos.
     */
    skip?: number
    distinct?: UbigeoScalarFieldEnum | UbigeoScalarFieldEnum[]
  }

  /**
   * Ubigeo create
   */
  export type UbigeoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubigeo
     */
    select?: UbigeoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubigeo
     */
    omit?: UbigeoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoInclude<ExtArgs> | null
    /**
     * The data needed to create a Ubigeo.
     */
    data: XOR<UbigeoCreateInput, UbigeoUncheckedCreateInput>
  }

  /**
   * Ubigeo createMany
   */
  export type UbigeoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ubigeos.
     */
    data: UbigeoCreateManyInput | UbigeoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ubigeo createManyAndReturn
   */
  export type UbigeoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubigeo
     */
    select?: UbigeoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ubigeo
     */
    omit?: UbigeoOmit<ExtArgs> | null
    /**
     * The data used to create many Ubigeos.
     */
    data: UbigeoCreateManyInput | UbigeoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ubigeo update
   */
  export type UbigeoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubigeo
     */
    select?: UbigeoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubigeo
     */
    omit?: UbigeoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoInclude<ExtArgs> | null
    /**
     * The data needed to update a Ubigeo.
     */
    data: XOR<UbigeoUpdateInput, UbigeoUncheckedUpdateInput>
    /**
     * Choose, which Ubigeo to update.
     */
    where: UbigeoWhereUniqueInput
  }

  /**
   * Ubigeo updateMany
   */
  export type UbigeoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ubigeos.
     */
    data: XOR<UbigeoUpdateManyMutationInput, UbigeoUncheckedUpdateManyInput>
    /**
     * Filter which Ubigeos to update
     */
    where?: UbigeoWhereInput
    /**
     * Limit how many Ubigeos to update.
     */
    limit?: number
  }

  /**
   * Ubigeo updateManyAndReturn
   */
  export type UbigeoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubigeo
     */
    select?: UbigeoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ubigeo
     */
    omit?: UbigeoOmit<ExtArgs> | null
    /**
     * The data used to update Ubigeos.
     */
    data: XOR<UbigeoUpdateManyMutationInput, UbigeoUncheckedUpdateManyInput>
    /**
     * Filter which Ubigeos to update
     */
    where?: UbigeoWhereInput
    /**
     * Limit how many Ubigeos to update.
     */
    limit?: number
  }

  /**
   * Ubigeo upsert
   */
  export type UbigeoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubigeo
     */
    select?: UbigeoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubigeo
     */
    omit?: UbigeoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoInclude<ExtArgs> | null
    /**
     * The filter to search for the Ubigeo to update in case it exists.
     */
    where: UbigeoWhereUniqueInput
    /**
     * In case the Ubigeo found by the `where` argument doesn't exist, create a new Ubigeo with this data.
     */
    create: XOR<UbigeoCreateInput, UbigeoUncheckedCreateInput>
    /**
     * In case the Ubigeo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UbigeoUpdateInput, UbigeoUncheckedUpdateInput>
  }

  /**
   * Ubigeo delete
   */
  export type UbigeoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubigeo
     */
    select?: UbigeoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubigeo
     */
    omit?: UbigeoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoInclude<ExtArgs> | null
    /**
     * Filter which Ubigeo to delete.
     */
    where: UbigeoWhereUniqueInput
  }

  /**
   * Ubigeo deleteMany
   */
  export type UbigeoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ubigeos to delete
     */
    where?: UbigeoWhereInput
    /**
     * Limit how many Ubigeos to delete.
     */
    limit?: number
  }

  /**
   * Ubigeo.ubigeoServices
   */
  export type Ubigeo$ubigeoServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbigeoService
     */
    select?: UbigeoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbigeoService
     */
    omit?: UbigeoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoServiceInclude<ExtArgs> | null
    where?: UbigeoServiceWhereInput
    orderBy?: UbigeoServiceOrderByWithRelationInput | UbigeoServiceOrderByWithRelationInput[]
    cursor?: UbigeoServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UbigeoServiceScalarFieldEnum | UbigeoServiceScalarFieldEnum[]
  }

  /**
   * Ubigeo without action
   */
  export type UbigeoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubigeo
     */
    select?: UbigeoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubigeo
     */
    omit?: UbigeoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoInclude<ExtArgs> | null
  }


  /**
   * Model UbigeoService
   */

  export type AggregateUbigeoService = {
    _count: UbigeoServiceCountAggregateOutputType | null
    _avg: UbigeoServiceAvgAggregateOutputType | null
    _sum: UbigeoServiceSumAggregateOutputType | null
    _min: UbigeoServiceMinAggregateOutputType | null
    _max: UbigeoServiceMaxAggregateOutputType | null
  }

  export type UbigeoServiceAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UbigeoServiceSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UbigeoServiceMinAggregateOutputType = {
    id: string | null
    latitude: number | null
    longitude: number | null
    serviceId: string | null
    ubigeoId: string | null
  }

  export type UbigeoServiceMaxAggregateOutputType = {
    id: string | null
    latitude: number | null
    longitude: number | null
    serviceId: string | null
    ubigeoId: string | null
  }

  export type UbigeoServiceCountAggregateOutputType = {
    id: number
    latitude: number
    longitude: number
    serviceId: number
    ubigeoId: number
    _all: number
  }


  export type UbigeoServiceAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UbigeoServiceSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UbigeoServiceMinAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    serviceId?: true
    ubigeoId?: true
  }

  export type UbigeoServiceMaxAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    serviceId?: true
    ubigeoId?: true
  }

  export type UbigeoServiceCountAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    serviceId?: true
    ubigeoId?: true
    _all?: true
  }

  export type UbigeoServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UbigeoService to aggregate.
     */
    where?: UbigeoServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UbigeoServices to fetch.
     */
    orderBy?: UbigeoServiceOrderByWithRelationInput | UbigeoServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UbigeoServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UbigeoServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UbigeoServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UbigeoServices
    **/
    _count?: true | UbigeoServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UbigeoServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UbigeoServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UbigeoServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UbigeoServiceMaxAggregateInputType
  }

  export type GetUbigeoServiceAggregateType<T extends UbigeoServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateUbigeoService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUbigeoService[P]>
      : GetScalarType<T[P], AggregateUbigeoService[P]>
  }




  export type UbigeoServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UbigeoServiceWhereInput
    orderBy?: UbigeoServiceOrderByWithAggregationInput | UbigeoServiceOrderByWithAggregationInput[]
    by: UbigeoServiceScalarFieldEnum[] | UbigeoServiceScalarFieldEnum
    having?: UbigeoServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UbigeoServiceCountAggregateInputType | true
    _avg?: UbigeoServiceAvgAggregateInputType
    _sum?: UbigeoServiceSumAggregateInputType
    _min?: UbigeoServiceMinAggregateInputType
    _max?: UbigeoServiceMaxAggregateInputType
  }

  export type UbigeoServiceGroupByOutputType = {
    id: string
    latitude: number | null
    longitude: number | null
    serviceId: string
    ubigeoId: string
    _count: UbigeoServiceCountAggregateOutputType | null
    _avg: UbigeoServiceAvgAggregateOutputType | null
    _sum: UbigeoServiceSumAggregateOutputType | null
    _min: UbigeoServiceMinAggregateOutputType | null
    _max: UbigeoServiceMaxAggregateOutputType | null
  }

  type GetUbigeoServiceGroupByPayload<T extends UbigeoServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UbigeoServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UbigeoServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UbigeoServiceGroupByOutputType[P]>
            : GetScalarType<T[P], UbigeoServiceGroupByOutputType[P]>
        }
      >
    >


  export type UbigeoServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    serviceId?: boolean
    ubigeoId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    ubigeo?: boolean | UbigeoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ubigeoService"]>

  export type UbigeoServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    serviceId?: boolean
    ubigeoId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    ubigeo?: boolean | UbigeoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ubigeoService"]>

  export type UbigeoServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    serviceId?: boolean
    ubigeoId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    ubigeo?: boolean | UbigeoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ubigeoService"]>

  export type UbigeoServiceSelectScalar = {
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    serviceId?: boolean
    ubigeoId?: boolean
  }

  export type UbigeoServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "latitude" | "longitude" | "serviceId" | "ubigeoId", ExtArgs["result"]["ubigeoService"]>
  export type UbigeoServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    ubigeo?: boolean | UbigeoDefaultArgs<ExtArgs>
  }
  export type UbigeoServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    ubigeo?: boolean | UbigeoDefaultArgs<ExtArgs>
  }
  export type UbigeoServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    ubigeo?: boolean | UbigeoDefaultArgs<ExtArgs>
  }

  export type $UbigeoServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UbigeoService"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      ubigeo: Prisma.$UbigeoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      latitude: number | null
      longitude: number | null
      serviceId: string
      ubigeoId: string
    }, ExtArgs["result"]["ubigeoService"]>
    composites: {}
  }

  type UbigeoServiceGetPayload<S extends boolean | null | undefined | UbigeoServiceDefaultArgs> = $Result.GetResult<Prisma.$UbigeoServicePayload, S>

  type UbigeoServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UbigeoServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UbigeoServiceCountAggregateInputType | true
    }

  export interface UbigeoServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UbigeoService'], meta: { name: 'UbigeoService' } }
    /**
     * Find zero or one UbigeoService that matches the filter.
     * @param {UbigeoServiceFindUniqueArgs} args - Arguments to find a UbigeoService
     * @example
     * // Get one UbigeoService
     * const ubigeoService = await prisma.ubigeoService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UbigeoServiceFindUniqueArgs>(args: SelectSubset<T, UbigeoServiceFindUniqueArgs<ExtArgs>>): Prisma__UbigeoServiceClient<$Result.GetResult<Prisma.$UbigeoServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UbigeoService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UbigeoServiceFindUniqueOrThrowArgs} args - Arguments to find a UbigeoService
     * @example
     * // Get one UbigeoService
     * const ubigeoService = await prisma.ubigeoService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UbigeoServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, UbigeoServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UbigeoServiceClient<$Result.GetResult<Prisma.$UbigeoServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UbigeoService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbigeoServiceFindFirstArgs} args - Arguments to find a UbigeoService
     * @example
     * // Get one UbigeoService
     * const ubigeoService = await prisma.ubigeoService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UbigeoServiceFindFirstArgs>(args?: SelectSubset<T, UbigeoServiceFindFirstArgs<ExtArgs>>): Prisma__UbigeoServiceClient<$Result.GetResult<Prisma.$UbigeoServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UbigeoService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbigeoServiceFindFirstOrThrowArgs} args - Arguments to find a UbigeoService
     * @example
     * // Get one UbigeoService
     * const ubigeoService = await prisma.ubigeoService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UbigeoServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, UbigeoServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UbigeoServiceClient<$Result.GetResult<Prisma.$UbigeoServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UbigeoServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbigeoServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UbigeoServices
     * const ubigeoServices = await prisma.ubigeoService.findMany()
     * 
     * // Get first 10 UbigeoServices
     * const ubigeoServices = await prisma.ubigeoService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ubigeoServiceWithIdOnly = await prisma.ubigeoService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UbigeoServiceFindManyArgs>(args?: SelectSubset<T, UbigeoServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbigeoServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UbigeoService.
     * @param {UbigeoServiceCreateArgs} args - Arguments to create a UbigeoService.
     * @example
     * // Create one UbigeoService
     * const UbigeoService = await prisma.ubigeoService.create({
     *   data: {
     *     // ... data to create a UbigeoService
     *   }
     * })
     * 
     */
    create<T extends UbigeoServiceCreateArgs>(args: SelectSubset<T, UbigeoServiceCreateArgs<ExtArgs>>): Prisma__UbigeoServiceClient<$Result.GetResult<Prisma.$UbigeoServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UbigeoServices.
     * @param {UbigeoServiceCreateManyArgs} args - Arguments to create many UbigeoServices.
     * @example
     * // Create many UbigeoServices
     * const ubigeoService = await prisma.ubigeoService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UbigeoServiceCreateManyArgs>(args?: SelectSubset<T, UbigeoServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UbigeoServices and returns the data saved in the database.
     * @param {UbigeoServiceCreateManyAndReturnArgs} args - Arguments to create many UbigeoServices.
     * @example
     * // Create many UbigeoServices
     * const ubigeoService = await prisma.ubigeoService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UbigeoServices and only return the `id`
     * const ubigeoServiceWithIdOnly = await prisma.ubigeoService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UbigeoServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, UbigeoServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbigeoServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UbigeoService.
     * @param {UbigeoServiceDeleteArgs} args - Arguments to delete one UbigeoService.
     * @example
     * // Delete one UbigeoService
     * const UbigeoService = await prisma.ubigeoService.delete({
     *   where: {
     *     // ... filter to delete one UbigeoService
     *   }
     * })
     * 
     */
    delete<T extends UbigeoServiceDeleteArgs>(args: SelectSubset<T, UbigeoServiceDeleteArgs<ExtArgs>>): Prisma__UbigeoServiceClient<$Result.GetResult<Prisma.$UbigeoServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UbigeoService.
     * @param {UbigeoServiceUpdateArgs} args - Arguments to update one UbigeoService.
     * @example
     * // Update one UbigeoService
     * const ubigeoService = await prisma.ubigeoService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UbigeoServiceUpdateArgs>(args: SelectSubset<T, UbigeoServiceUpdateArgs<ExtArgs>>): Prisma__UbigeoServiceClient<$Result.GetResult<Prisma.$UbigeoServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UbigeoServices.
     * @param {UbigeoServiceDeleteManyArgs} args - Arguments to filter UbigeoServices to delete.
     * @example
     * // Delete a few UbigeoServices
     * const { count } = await prisma.ubigeoService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UbigeoServiceDeleteManyArgs>(args?: SelectSubset<T, UbigeoServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UbigeoServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbigeoServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UbigeoServices
     * const ubigeoService = await prisma.ubigeoService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UbigeoServiceUpdateManyArgs>(args: SelectSubset<T, UbigeoServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UbigeoServices and returns the data updated in the database.
     * @param {UbigeoServiceUpdateManyAndReturnArgs} args - Arguments to update many UbigeoServices.
     * @example
     * // Update many UbigeoServices
     * const ubigeoService = await prisma.ubigeoService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UbigeoServices and only return the `id`
     * const ubigeoServiceWithIdOnly = await prisma.ubigeoService.updateManyAndReturn({
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
    updateManyAndReturn<T extends UbigeoServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, UbigeoServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbigeoServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UbigeoService.
     * @param {UbigeoServiceUpsertArgs} args - Arguments to update or create a UbigeoService.
     * @example
     * // Update or create a UbigeoService
     * const ubigeoService = await prisma.ubigeoService.upsert({
     *   create: {
     *     // ... data to create a UbigeoService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UbigeoService we want to update
     *   }
     * })
     */
    upsert<T extends UbigeoServiceUpsertArgs>(args: SelectSubset<T, UbigeoServiceUpsertArgs<ExtArgs>>): Prisma__UbigeoServiceClient<$Result.GetResult<Prisma.$UbigeoServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UbigeoServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbigeoServiceCountArgs} args - Arguments to filter UbigeoServices to count.
     * @example
     * // Count the number of UbigeoServices
     * const count = await prisma.ubigeoService.count({
     *   where: {
     *     // ... the filter for the UbigeoServices we want to count
     *   }
     * })
    **/
    count<T extends UbigeoServiceCountArgs>(
      args?: Subset<T, UbigeoServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UbigeoServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UbigeoService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbigeoServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UbigeoServiceAggregateArgs>(args: Subset<T, UbigeoServiceAggregateArgs>): Prisma.PrismaPromise<GetUbigeoServiceAggregateType<T>>

    /**
     * Group by UbigeoService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbigeoServiceGroupByArgs} args - Group by arguments.
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
      T extends UbigeoServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UbigeoServiceGroupByArgs['orderBy'] }
        : { orderBy?: UbigeoServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UbigeoServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUbigeoServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UbigeoService model
   */
  readonly fields: UbigeoServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UbigeoService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UbigeoServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ubigeo<T extends UbigeoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UbigeoDefaultArgs<ExtArgs>>): Prisma__UbigeoClient<$Result.GetResult<Prisma.$UbigeoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UbigeoService model
   */
  interface UbigeoServiceFieldRefs {
    readonly id: FieldRef<"UbigeoService", 'String'>
    readonly latitude: FieldRef<"UbigeoService", 'Float'>
    readonly longitude: FieldRef<"UbigeoService", 'Float'>
    readonly serviceId: FieldRef<"UbigeoService", 'String'>
    readonly ubigeoId: FieldRef<"UbigeoService", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UbigeoService findUnique
   */
  export type UbigeoServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbigeoService
     */
    select?: UbigeoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbigeoService
     */
    omit?: UbigeoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoServiceInclude<ExtArgs> | null
    /**
     * Filter, which UbigeoService to fetch.
     */
    where: UbigeoServiceWhereUniqueInput
  }

  /**
   * UbigeoService findUniqueOrThrow
   */
  export type UbigeoServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbigeoService
     */
    select?: UbigeoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbigeoService
     */
    omit?: UbigeoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoServiceInclude<ExtArgs> | null
    /**
     * Filter, which UbigeoService to fetch.
     */
    where: UbigeoServiceWhereUniqueInput
  }

  /**
   * UbigeoService findFirst
   */
  export type UbigeoServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbigeoService
     */
    select?: UbigeoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbigeoService
     */
    omit?: UbigeoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoServiceInclude<ExtArgs> | null
    /**
     * Filter, which UbigeoService to fetch.
     */
    where?: UbigeoServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UbigeoServices to fetch.
     */
    orderBy?: UbigeoServiceOrderByWithRelationInput | UbigeoServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UbigeoServices.
     */
    cursor?: UbigeoServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UbigeoServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UbigeoServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UbigeoServices.
     */
    distinct?: UbigeoServiceScalarFieldEnum | UbigeoServiceScalarFieldEnum[]
  }

  /**
   * UbigeoService findFirstOrThrow
   */
  export type UbigeoServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbigeoService
     */
    select?: UbigeoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbigeoService
     */
    omit?: UbigeoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoServiceInclude<ExtArgs> | null
    /**
     * Filter, which UbigeoService to fetch.
     */
    where?: UbigeoServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UbigeoServices to fetch.
     */
    orderBy?: UbigeoServiceOrderByWithRelationInput | UbigeoServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UbigeoServices.
     */
    cursor?: UbigeoServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UbigeoServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UbigeoServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UbigeoServices.
     */
    distinct?: UbigeoServiceScalarFieldEnum | UbigeoServiceScalarFieldEnum[]
  }

  /**
   * UbigeoService findMany
   */
  export type UbigeoServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbigeoService
     */
    select?: UbigeoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbigeoService
     */
    omit?: UbigeoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoServiceInclude<ExtArgs> | null
    /**
     * Filter, which UbigeoServices to fetch.
     */
    where?: UbigeoServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UbigeoServices to fetch.
     */
    orderBy?: UbigeoServiceOrderByWithRelationInput | UbigeoServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UbigeoServices.
     */
    cursor?: UbigeoServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UbigeoServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UbigeoServices.
     */
    skip?: number
    distinct?: UbigeoServiceScalarFieldEnum | UbigeoServiceScalarFieldEnum[]
  }

  /**
   * UbigeoService create
   */
  export type UbigeoServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbigeoService
     */
    select?: UbigeoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbigeoService
     */
    omit?: UbigeoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a UbigeoService.
     */
    data: XOR<UbigeoServiceCreateInput, UbigeoServiceUncheckedCreateInput>
  }

  /**
   * UbigeoService createMany
   */
  export type UbigeoServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UbigeoServices.
     */
    data: UbigeoServiceCreateManyInput | UbigeoServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UbigeoService createManyAndReturn
   */
  export type UbigeoServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbigeoService
     */
    select?: UbigeoServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UbigeoService
     */
    omit?: UbigeoServiceOmit<ExtArgs> | null
    /**
     * The data used to create many UbigeoServices.
     */
    data: UbigeoServiceCreateManyInput | UbigeoServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UbigeoService update
   */
  export type UbigeoServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbigeoService
     */
    select?: UbigeoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbigeoService
     */
    omit?: UbigeoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a UbigeoService.
     */
    data: XOR<UbigeoServiceUpdateInput, UbigeoServiceUncheckedUpdateInput>
    /**
     * Choose, which UbigeoService to update.
     */
    where: UbigeoServiceWhereUniqueInput
  }

  /**
   * UbigeoService updateMany
   */
  export type UbigeoServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UbigeoServices.
     */
    data: XOR<UbigeoServiceUpdateManyMutationInput, UbigeoServiceUncheckedUpdateManyInput>
    /**
     * Filter which UbigeoServices to update
     */
    where?: UbigeoServiceWhereInput
    /**
     * Limit how many UbigeoServices to update.
     */
    limit?: number
  }

  /**
   * UbigeoService updateManyAndReturn
   */
  export type UbigeoServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbigeoService
     */
    select?: UbigeoServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UbigeoService
     */
    omit?: UbigeoServiceOmit<ExtArgs> | null
    /**
     * The data used to update UbigeoServices.
     */
    data: XOR<UbigeoServiceUpdateManyMutationInput, UbigeoServiceUncheckedUpdateManyInput>
    /**
     * Filter which UbigeoServices to update
     */
    where?: UbigeoServiceWhereInput
    /**
     * Limit how many UbigeoServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UbigeoService upsert
   */
  export type UbigeoServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbigeoService
     */
    select?: UbigeoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbigeoService
     */
    omit?: UbigeoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the UbigeoService to update in case it exists.
     */
    where: UbigeoServiceWhereUniqueInput
    /**
     * In case the UbigeoService found by the `where` argument doesn't exist, create a new UbigeoService with this data.
     */
    create: XOR<UbigeoServiceCreateInput, UbigeoServiceUncheckedCreateInput>
    /**
     * In case the UbigeoService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UbigeoServiceUpdateInput, UbigeoServiceUncheckedUpdateInput>
  }

  /**
   * UbigeoService delete
   */
  export type UbigeoServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbigeoService
     */
    select?: UbigeoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbigeoService
     */
    omit?: UbigeoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoServiceInclude<ExtArgs> | null
    /**
     * Filter which UbigeoService to delete.
     */
    where: UbigeoServiceWhereUniqueInput
  }

  /**
   * UbigeoService deleteMany
   */
  export type UbigeoServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UbigeoServices to delete
     */
    where?: UbigeoServiceWhereInput
    /**
     * Limit how many UbigeoServices to delete.
     */
    limit?: number
  }

  /**
   * UbigeoService without action
   */
  export type UbigeoServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbigeoService
     */
    select?: UbigeoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbigeoService
     */
    omit?: UbigeoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbigeoServiceInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    phone: 'phone',
    picture: 'picture',
    password: 'password',
    role: 'role',
    authProvider: 'authProvider',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProviderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    picture: 'picture',
    address: 'address',
    email: 'email',
    website: 'website',
    phone: 'phone',
    facebook: 'facebook',
    instagram: 'instagram',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderScalarFieldEnum = (typeof ProviderScalarFieldEnum)[keyof typeof ProviderScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    priceMin: 'priceMin',
    priceMax: 'priceMax',
    score: 'score',
    duration: 'duration',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    providerId: 'providerId',
    categoryId: 'categoryId'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ServiceImageScalarFieldEnum: {
    id: 'id',
    publicId: 'publicId',
    url: 'url',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    serviceId: 'serviceId'
  };

  export type ServiceImageScalarFieldEnum = (typeof ServiceImageScalarFieldEnum)[keyof typeof ServiceImageScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    serviceId: 'serviceId'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    id: 'id',
    guestQty: 'guestQty',
    budgetAmount: 'budgetAmount',
    finalPrice: 'finalPrice',
    eventDate: 'eventDate',
    status: 'status',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    providerId: 'providerId'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const RequestItemScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    price: 'price',
    total: 'total',
    comment: 'comment',
    serviceId: 'serviceId',
    service: 'service',
    requestId: 'requestId'
  };

  export type RequestItemScalarFieldEnum = (typeof RequestItemScalarFieldEnum)[keyof typeof RequestItemScalarFieldEnum]


  export const RequestPaymentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    method: 'method',
    image: 'image',
    transferNumber: 'transferNumber',
    paidAt: 'paidAt'
  };

  export type RequestPaymentScalarFieldEnum = (typeof RequestPaymentScalarFieldEnum)[keyof typeof RequestPaymentScalarFieldEnum]


  export const UbigeoScalarFieldEnum: {
    id: 'id',
    code: 'code',
    district: 'district',
    province: 'province',
    department: 'department',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UbigeoScalarFieldEnum = (typeof UbigeoScalarFieldEnum)[keyof typeof UbigeoScalarFieldEnum]


  export const UbigeoServiceScalarFieldEnum: {
    id: 'id',
    latitude: 'latitude',
    longitude: 'longitude',
    serviceId: 'serviceId',
    ubigeoId: 'ubigeoId'
  };

  export type UbigeoServiceScalarFieldEnum = (typeof UbigeoServiceScalarFieldEnum)[keyof typeof UbigeoServiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'AuthProvider'
   */
  export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>
    


  /**
   * Reference to a field of type 'AuthProvider[]'
   */
  export type ListEnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    picture?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    authProvider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
    favorites?: FavoriteListRelationFilter
    requests?: RequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    picture?: SortOrder
    password?: SortOrder
    role?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: ProviderOrderByWithRelationInput
    favorites?: FavoriteOrderByRelationAggregateInput
    requests?: RequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    picture?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    authProvider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
    favorites?: FavoriteListRelationFilter
    requests?: RequestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    picture?: SortOrder
    password?: SortOrder
    role?: SortOrder
    authProvider?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    picture?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    authProvider?: EnumAuthProviderWithAggregatesFilter<"User"> | $Enums.AuthProvider
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProviderWhereInput = {
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    id?: StringFilter<"Provider"> | string
    name?: StringFilter<"Provider"> | string
    description?: StringFilter<"Provider"> | string
    picture?: StringFilter<"Provider"> | string
    address?: StringFilter<"Provider"> | string
    email?: StringFilter<"Provider"> | string
    website?: StringFilter<"Provider"> | string
    phone?: StringFilter<"Provider"> | string
    facebook?: StringFilter<"Provider"> | string
    instagram?: StringFilter<"Provider"> | string
    status?: BoolFilter<"Provider"> | boolean
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    services?: ServiceListRelationFilter
    requests?: RequestListRelationFilter
  }

  export type ProviderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    picture?: SortOrder
    address?: SortOrder
    email?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    services?: ServiceOrderByRelationAggregateInput
    requests?: RequestOrderByRelationAggregateInput
  }

  export type ProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    name?: StringFilter<"Provider"> | string
    description?: StringFilter<"Provider"> | string
    picture?: StringFilter<"Provider"> | string
    address?: StringFilter<"Provider"> | string
    email?: StringFilter<"Provider"> | string
    website?: StringFilter<"Provider"> | string
    phone?: StringFilter<"Provider"> | string
    facebook?: StringFilter<"Provider"> | string
    instagram?: StringFilter<"Provider"> | string
    status?: BoolFilter<"Provider"> | boolean
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    services?: ServiceListRelationFilter
    requests?: RequestListRelationFilter
  }, "id">

  export type ProviderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    picture?: SortOrder
    address?: SortOrder
    email?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderCountOrderByAggregateInput
    _max?: ProviderMaxOrderByAggregateInput
    _min?: ProviderMinOrderByAggregateInput
  }

  export type ProviderScalarWhereWithAggregatesInput = {
    AND?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    OR?: ProviderScalarWhereWithAggregatesInput[]
    NOT?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Provider"> | string
    name?: StringWithAggregatesFilter<"Provider"> | string
    description?: StringWithAggregatesFilter<"Provider"> | string
    picture?: StringWithAggregatesFilter<"Provider"> | string
    address?: StringWithAggregatesFilter<"Provider"> | string
    email?: StringWithAggregatesFilter<"Provider"> | string
    website?: StringWithAggregatesFilter<"Provider"> | string
    phone?: StringWithAggregatesFilter<"Provider"> | string
    facebook?: StringWithAggregatesFilter<"Provider"> | string
    instagram?: StringWithAggregatesFilter<"Provider"> | string
    status?: BoolWithAggregatesFilter<"Provider"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    image?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    services?: ServiceListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    services?: ServiceOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    image?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    services?: ServiceListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringWithAggregatesFilter<"Category"> | string
    image?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    priceMin?: FloatFilter<"Service"> | number
    priceMax?: FloatFilter<"Service"> | number
    score?: FloatFilter<"Service"> | number
    duration?: IntNullableFilter<"Service"> | number | null
    status?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    providerId?: StringFilter<"Service"> | string
    categoryId?: StringFilter<"Service"> | string
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    favorites?: FavoriteListRelationFilter
    ubigeoServices?: UbigeoServiceListRelationFilter
    images?: ServiceImageListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceMin?: SortOrder
    priceMax?: SortOrder
    score?: SortOrder
    duration?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providerId?: SortOrder
    categoryId?: SortOrder
    provider?: ProviderOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    favorites?: FavoriteOrderByRelationAggregateInput
    ubigeoServices?: UbigeoServiceOrderByRelationAggregateInput
    images?: ServiceImageOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    priceMin?: FloatFilter<"Service"> | number
    priceMax?: FloatFilter<"Service"> | number
    score?: FloatFilter<"Service"> | number
    duration?: IntNullableFilter<"Service"> | number | null
    status?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    providerId?: StringFilter<"Service"> | string
    categoryId?: StringFilter<"Service"> | string
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    favorites?: FavoriteListRelationFilter
    ubigeoServices?: UbigeoServiceListRelationFilter
    images?: ServiceImageListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceMin?: SortOrder
    priceMax?: SortOrder
    score?: SortOrder
    duration?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providerId?: SortOrder
    categoryId?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
    priceMin?: FloatWithAggregatesFilter<"Service"> | number
    priceMax?: FloatWithAggregatesFilter<"Service"> | number
    score?: FloatWithAggregatesFilter<"Service"> | number
    duration?: IntNullableWithAggregatesFilter<"Service"> | number | null
    status?: BoolWithAggregatesFilter<"Service"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    providerId?: StringWithAggregatesFilter<"Service"> | string
    categoryId?: StringWithAggregatesFilter<"Service"> | string
  }

  export type ServiceImageWhereInput = {
    AND?: ServiceImageWhereInput | ServiceImageWhereInput[]
    OR?: ServiceImageWhereInput[]
    NOT?: ServiceImageWhereInput | ServiceImageWhereInput[]
    id?: StringFilter<"ServiceImage"> | string
    publicId?: StringFilter<"ServiceImage"> | string
    url?: StringFilter<"ServiceImage"> | string
    name?: StringFilter<"ServiceImage"> | string
    createdAt?: DateTimeFilter<"ServiceImage"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceImage"> | Date | string
    serviceId?: StringFilter<"ServiceImage"> | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type ServiceImageOrderByWithRelationInput = {
    id?: SortOrder
    publicId?: SortOrder
    url?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    serviceId?: SortOrder
    service?: ServiceOrderByWithRelationInput
  }

  export type ServiceImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceImageWhereInput | ServiceImageWhereInput[]
    OR?: ServiceImageWhereInput[]
    NOT?: ServiceImageWhereInput | ServiceImageWhereInput[]
    publicId?: StringFilter<"ServiceImage"> | string
    url?: StringFilter<"ServiceImage"> | string
    name?: StringFilter<"ServiceImage"> | string
    createdAt?: DateTimeFilter<"ServiceImage"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceImage"> | Date | string
    serviceId?: StringFilter<"ServiceImage"> | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id">

  export type ServiceImageOrderByWithAggregationInput = {
    id?: SortOrder
    publicId?: SortOrder
    url?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    serviceId?: SortOrder
    _count?: ServiceImageCountOrderByAggregateInput
    _max?: ServiceImageMaxOrderByAggregateInput
    _min?: ServiceImageMinOrderByAggregateInput
  }

  export type ServiceImageScalarWhereWithAggregatesInput = {
    AND?: ServiceImageScalarWhereWithAggregatesInput | ServiceImageScalarWhereWithAggregatesInput[]
    OR?: ServiceImageScalarWhereWithAggregatesInput[]
    NOT?: ServiceImageScalarWhereWithAggregatesInput | ServiceImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceImage"> | string
    publicId?: StringWithAggregatesFilter<"ServiceImage"> | string
    url?: StringWithAggregatesFilter<"ServiceImage"> | string
    name?: StringWithAggregatesFilter<"ServiceImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ServiceImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceImage"> | Date | string
    serviceId?: StringWithAggregatesFilter<"ServiceImage"> | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    userId?: StringFilter<"Favorite"> | string
    serviceId?: StringFilter<"Favorite"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    user?: UserOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_serviceId?: FavoriteUserIdServiceIdCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    userId?: StringFilter<"Favorite"> | string
    serviceId?: StringFilter<"Favorite"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id" | "userId_serviceId">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
    userId?: StringWithAggregatesFilter<"Favorite"> | string
    serviceId?: StringWithAggregatesFilter<"Favorite"> | string
  }

  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    id?: StringFilter<"Request"> | string
    guestQty?: IntFilter<"Request"> | number
    budgetAmount?: FloatFilter<"Request"> | number
    finalPrice?: FloatFilter<"Request"> | number
    eventDate?: DateTimeFilter<"Request"> | Date | string
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    comment?: StringFilter<"Request"> | string
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedAt?: DateTimeFilter<"Request"> | Date | string
    userId?: StringFilter<"Request"> | string
    providerId?: StringFilter<"Request"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    items?: RequestItemListRelationFilter
    payment?: XOR<RequestPaymentNullableScalarRelationFilter, RequestPaymentWhereInput> | null
  }

  export type RequestOrderByWithRelationInput = {
    id?: SortOrder
    guestQty?: SortOrder
    budgetAmount?: SortOrder
    finalPrice?: SortOrder
    eventDate?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    providerId?: SortOrder
    user?: UserOrderByWithRelationInput
    provider?: ProviderOrderByWithRelationInput
    items?: RequestItemOrderByRelationAggregateInput
    payment?: RequestPaymentOrderByWithRelationInput
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    guestQty?: IntFilter<"Request"> | number
    budgetAmount?: FloatFilter<"Request"> | number
    finalPrice?: FloatFilter<"Request"> | number
    eventDate?: DateTimeFilter<"Request"> | Date | string
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    comment?: StringFilter<"Request"> | string
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedAt?: DateTimeFilter<"Request"> | Date | string
    userId?: StringFilter<"Request"> | string
    providerId?: StringFilter<"Request"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    items?: RequestItemListRelationFilter
    payment?: XOR<RequestPaymentNullableScalarRelationFilter, RequestPaymentWhereInput> | null
  }, "id">

  export type RequestOrderByWithAggregationInput = {
    id?: SortOrder
    guestQty?: SortOrder
    budgetAmount?: SortOrder
    finalPrice?: SortOrder
    eventDate?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    providerId?: SortOrder
    _count?: RequestCountOrderByAggregateInput
    _avg?: RequestAvgOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
    _sum?: RequestSumOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Request"> | string
    guestQty?: IntWithAggregatesFilter<"Request"> | number
    budgetAmount?: FloatWithAggregatesFilter<"Request"> | number
    finalPrice?: FloatWithAggregatesFilter<"Request"> | number
    eventDate?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    status?: EnumRequestStatusWithAggregatesFilter<"Request"> | $Enums.RequestStatus
    comment?: StringWithAggregatesFilter<"Request"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    userId?: StringWithAggregatesFilter<"Request"> | string
    providerId?: StringWithAggregatesFilter<"Request"> | string
  }

  export type RequestItemWhereInput = {
    AND?: RequestItemWhereInput | RequestItemWhereInput[]
    OR?: RequestItemWhereInput[]
    NOT?: RequestItemWhereInput | RequestItemWhereInput[]
    id?: StringFilter<"RequestItem"> | string
    quantity?: IntFilter<"RequestItem"> | number
    price?: FloatFilter<"RequestItem"> | number
    total?: FloatFilter<"RequestItem"> | number
    comment?: StringFilter<"RequestItem"> | string
    serviceId?: StringFilter<"RequestItem"> | string
    service?: JsonFilter<"RequestItem">
    requestId?: StringFilter<"RequestItem"> | string
    request?: XOR<RequestScalarRelationFilter, RequestWhereInput>
  }

  export type RequestItemOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    comment?: SortOrder
    serviceId?: SortOrder
    service?: SortOrder
    requestId?: SortOrder
    request?: RequestOrderByWithRelationInput
  }

  export type RequestItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestItemWhereInput | RequestItemWhereInput[]
    OR?: RequestItemWhereInput[]
    NOT?: RequestItemWhereInput | RequestItemWhereInput[]
    quantity?: IntFilter<"RequestItem"> | number
    price?: FloatFilter<"RequestItem"> | number
    total?: FloatFilter<"RequestItem"> | number
    comment?: StringFilter<"RequestItem"> | string
    serviceId?: StringFilter<"RequestItem"> | string
    service?: JsonFilter<"RequestItem">
    requestId?: StringFilter<"RequestItem"> | string
    request?: XOR<RequestScalarRelationFilter, RequestWhereInput>
  }, "id">

  export type RequestItemOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    comment?: SortOrder
    serviceId?: SortOrder
    service?: SortOrder
    requestId?: SortOrder
    _count?: RequestItemCountOrderByAggregateInput
    _avg?: RequestItemAvgOrderByAggregateInput
    _max?: RequestItemMaxOrderByAggregateInput
    _min?: RequestItemMinOrderByAggregateInput
    _sum?: RequestItemSumOrderByAggregateInput
  }

  export type RequestItemScalarWhereWithAggregatesInput = {
    AND?: RequestItemScalarWhereWithAggregatesInput | RequestItemScalarWhereWithAggregatesInput[]
    OR?: RequestItemScalarWhereWithAggregatesInput[]
    NOT?: RequestItemScalarWhereWithAggregatesInput | RequestItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RequestItem"> | string
    quantity?: IntWithAggregatesFilter<"RequestItem"> | number
    price?: FloatWithAggregatesFilter<"RequestItem"> | number
    total?: FloatWithAggregatesFilter<"RequestItem"> | number
    comment?: StringWithAggregatesFilter<"RequestItem"> | string
    serviceId?: StringWithAggregatesFilter<"RequestItem"> | string
    service?: JsonWithAggregatesFilter<"RequestItem">
    requestId?: StringWithAggregatesFilter<"RequestItem"> | string
  }

  export type RequestPaymentWhereInput = {
    AND?: RequestPaymentWhereInput | RequestPaymentWhereInput[]
    OR?: RequestPaymentWhereInput[]
    NOT?: RequestPaymentWhereInput | RequestPaymentWhereInput[]
    id?: StringFilter<"RequestPayment"> | string
    amount?: FloatFilter<"RequestPayment"> | number
    method?: StringFilter<"RequestPayment"> | string
    image?: StringFilter<"RequestPayment"> | string
    transferNumber?: StringFilter<"RequestPayment"> | string
    paidAt?: DateTimeNullableFilter<"RequestPayment"> | Date | string | null
    request?: XOR<RequestScalarRelationFilter, RequestWhereInput>
  }

  export type RequestPaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    image?: SortOrder
    transferNumber?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    request?: RequestOrderByWithRelationInput
  }

  export type RequestPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestPaymentWhereInput | RequestPaymentWhereInput[]
    OR?: RequestPaymentWhereInput[]
    NOT?: RequestPaymentWhereInput | RequestPaymentWhereInput[]
    amount?: FloatFilter<"RequestPayment"> | number
    method?: StringFilter<"RequestPayment"> | string
    image?: StringFilter<"RequestPayment"> | string
    transferNumber?: StringFilter<"RequestPayment"> | string
    paidAt?: DateTimeNullableFilter<"RequestPayment"> | Date | string | null
    request?: XOR<RequestScalarRelationFilter, RequestWhereInput>
  }, "id">

  export type RequestPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    image?: SortOrder
    transferNumber?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    _count?: RequestPaymentCountOrderByAggregateInput
    _avg?: RequestPaymentAvgOrderByAggregateInput
    _max?: RequestPaymentMaxOrderByAggregateInput
    _min?: RequestPaymentMinOrderByAggregateInput
    _sum?: RequestPaymentSumOrderByAggregateInput
  }

  export type RequestPaymentScalarWhereWithAggregatesInput = {
    AND?: RequestPaymentScalarWhereWithAggregatesInput | RequestPaymentScalarWhereWithAggregatesInput[]
    OR?: RequestPaymentScalarWhereWithAggregatesInput[]
    NOT?: RequestPaymentScalarWhereWithAggregatesInput | RequestPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RequestPayment"> | string
    amount?: FloatWithAggregatesFilter<"RequestPayment"> | number
    method?: StringWithAggregatesFilter<"RequestPayment"> | string
    image?: StringWithAggregatesFilter<"RequestPayment"> | string
    transferNumber?: StringWithAggregatesFilter<"RequestPayment"> | string
    paidAt?: DateTimeNullableWithAggregatesFilter<"RequestPayment"> | Date | string | null
  }

  export type UbigeoWhereInput = {
    AND?: UbigeoWhereInput | UbigeoWhereInput[]
    OR?: UbigeoWhereInput[]
    NOT?: UbigeoWhereInput | UbigeoWhereInput[]
    id?: StringFilter<"Ubigeo"> | string
    code?: StringFilter<"Ubigeo"> | string
    district?: StringFilter<"Ubigeo"> | string
    province?: StringFilter<"Ubigeo"> | string
    department?: StringFilter<"Ubigeo"> | string
    createdAt?: DateTimeFilter<"Ubigeo"> | Date | string
    updatedAt?: DateTimeFilter<"Ubigeo"> | Date | string
    ubigeoServices?: UbigeoServiceListRelationFilter
  }

  export type UbigeoOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    district?: SortOrder
    province?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ubigeoServices?: UbigeoServiceOrderByRelationAggregateInput
  }

  export type UbigeoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: UbigeoWhereInput | UbigeoWhereInput[]
    OR?: UbigeoWhereInput[]
    NOT?: UbigeoWhereInput | UbigeoWhereInput[]
    district?: StringFilter<"Ubigeo"> | string
    province?: StringFilter<"Ubigeo"> | string
    department?: StringFilter<"Ubigeo"> | string
    createdAt?: DateTimeFilter<"Ubigeo"> | Date | string
    updatedAt?: DateTimeFilter<"Ubigeo"> | Date | string
    ubigeoServices?: UbigeoServiceListRelationFilter
  }, "id" | "code">

  export type UbigeoOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    district?: SortOrder
    province?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UbigeoCountOrderByAggregateInput
    _max?: UbigeoMaxOrderByAggregateInput
    _min?: UbigeoMinOrderByAggregateInput
  }

  export type UbigeoScalarWhereWithAggregatesInput = {
    AND?: UbigeoScalarWhereWithAggregatesInput | UbigeoScalarWhereWithAggregatesInput[]
    OR?: UbigeoScalarWhereWithAggregatesInput[]
    NOT?: UbigeoScalarWhereWithAggregatesInput | UbigeoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ubigeo"> | string
    code?: StringWithAggregatesFilter<"Ubigeo"> | string
    district?: StringWithAggregatesFilter<"Ubigeo"> | string
    province?: StringWithAggregatesFilter<"Ubigeo"> | string
    department?: StringWithAggregatesFilter<"Ubigeo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ubigeo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ubigeo"> | Date | string
  }

  export type UbigeoServiceWhereInput = {
    AND?: UbigeoServiceWhereInput | UbigeoServiceWhereInput[]
    OR?: UbigeoServiceWhereInput[]
    NOT?: UbigeoServiceWhereInput | UbigeoServiceWhereInput[]
    id?: StringFilter<"UbigeoService"> | string
    latitude?: FloatNullableFilter<"UbigeoService"> | number | null
    longitude?: FloatNullableFilter<"UbigeoService"> | number | null
    serviceId?: StringFilter<"UbigeoService"> | string
    ubigeoId?: StringFilter<"UbigeoService"> | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    ubigeo?: XOR<UbigeoScalarRelationFilter, UbigeoWhereInput>
  }

  export type UbigeoServiceOrderByWithRelationInput = {
    id?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    ubigeoId?: SortOrder
    service?: ServiceOrderByWithRelationInput
    ubigeo?: UbigeoOrderByWithRelationInput
  }

  export type UbigeoServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ubigeoId_serviceId?: UbigeoServiceUbigeoIdServiceIdCompoundUniqueInput
    AND?: UbigeoServiceWhereInput | UbigeoServiceWhereInput[]
    OR?: UbigeoServiceWhereInput[]
    NOT?: UbigeoServiceWhereInput | UbigeoServiceWhereInput[]
    latitude?: FloatNullableFilter<"UbigeoService"> | number | null
    longitude?: FloatNullableFilter<"UbigeoService"> | number | null
    serviceId?: StringFilter<"UbigeoService"> | string
    ubigeoId?: StringFilter<"UbigeoService"> | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    ubigeo?: XOR<UbigeoScalarRelationFilter, UbigeoWhereInput>
  }, "id" | "ubigeoId_serviceId">

  export type UbigeoServiceOrderByWithAggregationInput = {
    id?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    ubigeoId?: SortOrder
    _count?: UbigeoServiceCountOrderByAggregateInput
    _avg?: UbigeoServiceAvgOrderByAggregateInput
    _max?: UbigeoServiceMaxOrderByAggregateInput
    _min?: UbigeoServiceMinOrderByAggregateInput
    _sum?: UbigeoServiceSumOrderByAggregateInput
  }

  export type UbigeoServiceScalarWhereWithAggregatesInput = {
    AND?: UbigeoServiceScalarWhereWithAggregatesInput | UbigeoServiceScalarWhereWithAggregatesInput[]
    OR?: UbigeoServiceScalarWhereWithAggregatesInput[]
    NOT?: UbigeoServiceScalarWhereWithAggregatesInput | UbigeoServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UbigeoService"> | string
    latitude?: FloatNullableWithAggregatesFilter<"UbigeoService"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"UbigeoService"> | number | null
    serviceId?: StringWithAggregatesFilter<"UbigeoService"> | string
    ubigeoId?: StringWithAggregatesFilter<"UbigeoService"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    picture: string
    password: string
    role: $Enums.Role
    authProvider: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    picture: string
    password: string
    role: $Enums.Role
    authProvider: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderUncheckedCreateNestedOneWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUncheckedUpdateOneWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    picture: string
    password: string
    role: $Enums.Role
    authProvider: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderCreateInput = {
    name: string
    description: string
    picture: string
    address: string
    email: string
    website: string
    phone: string
    facebook: string
    instagram: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProviderInput
    services?: ServiceCreateNestedManyWithoutProviderInput
    requests?: RequestCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateInput = {
    id: string
    name: string
    description: string
    picture: string
    address: string
    email: string
    website: string
    phone: string
    facebook: string
    instagram: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
    requests?: RequestUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProviderNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
    requests?: RequestUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
    requests?: RequestUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProviderCreateManyInput = {
    id: string
    name: string
    description: string
    picture: string
    address: string
    email: string
    website: string
    phone: string
    facebook: string
    instagram: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    description: string
    priceMin: number
    priceMax: number
    score: number
    duration?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
    favorites?: FavoriteCreateNestedManyWithoutServiceInput
    ubigeoServices?: UbigeoServiceCreateNestedManyWithoutServiceInput
    images?: ServiceImageCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    priceMin: number
    priceMax: number
    score: number
    duration?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId: string
    categoryId: string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutServiceInput
    ubigeoServices?: UbigeoServiceUncheckedCreateNestedManyWithoutServiceInput
    images?: ServiceImageUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMin?: FloatFieldUpdateOperationsInput | number
    priceMax?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutServicesNestedInput
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    favorites?: FavoriteUpdateManyWithoutServiceNestedInput
    ubigeoServices?: UbigeoServiceUpdateManyWithoutServiceNestedInput
    images?: ServiceImageUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMin?: FloatFieldUpdateOperationsInput | number
    priceMax?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteUncheckedUpdateManyWithoutServiceNestedInput
    ubigeoServices?: UbigeoServiceUncheckedUpdateManyWithoutServiceNestedInput
    images?: ServiceImageUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    description: string
    priceMin: number
    priceMax: number
    score: number
    duration?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId: string
    categoryId: string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMin?: FloatFieldUpdateOperationsInput | number
    priceMax?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMin?: FloatFieldUpdateOperationsInput | number
    priceMax?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceImageCreateInput = {
    id?: string
    publicId: string
    url: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutImagesInput
  }

  export type ServiceImageUncheckedCreateInput = {
    id?: string
    publicId: string
    url: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceId: string
  }

  export type ServiceImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ServiceImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceImageCreateManyInput = {
    id?: string
    publicId: string
    url: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceId: string
  }

  export type ServiceImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
    service: ServiceCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    serviceId: string
  }

  export type FavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    service?: ServiceUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    serviceId: string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestCreateInput = {
    id?: string
    guestQty: number
    budgetAmount: number
    finalPrice: number
    eventDate: Date | string
    status: $Enums.RequestStatus
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRequestsInput
    provider: ProviderCreateNestedOneWithoutRequestsInput
    items?: RequestItemCreateNestedManyWithoutRequestInput
    payment?: RequestPaymentCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateInput = {
    id?: string
    guestQty: number
    budgetAmount: number
    finalPrice: number
    eventDate: Date | string
    status: $Enums.RequestStatus
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    providerId: string
    items?: RequestItemUncheckedCreateNestedManyWithoutRequestInput
    payment?: RequestPaymentUncheckedCreateNestedOneWithoutRequestInput
  }

  export type RequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestQty?: IntFieldUpdateOperationsInput | number
    budgetAmount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    provider?: ProviderUpdateOneRequiredWithoutRequestsNestedInput
    items?: RequestItemUpdateManyWithoutRequestNestedInput
    payment?: RequestPaymentUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestQty?: IntFieldUpdateOperationsInput | number
    budgetAmount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    items?: RequestItemUncheckedUpdateManyWithoutRequestNestedInput
    payment?: RequestPaymentUncheckedUpdateOneWithoutRequestNestedInput
  }

  export type RequestCreateManyInput = {
    id?: string
    guestQty: number
    budgetAmount: number
    finalPrice: number
    eventDate: Date | string
    status: $Enums.RequestStatus
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    providerId: string
  }

  export type RequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestQty?: IntFieldUpdateOperationsInput | number
    budgetAmount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestQty?: IntFieldUpdateOperationsInput | number
    budgetAmount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestItemCreateInput = {
    id?: string
    quantity: number
    price: number
    total: number
    comment: string
    serviceId: string
    service: JsonNullValueInput | InputJsonValue
    request: RequestCreateNestedOneWithoutItemsInput
  }

  export type RequestItemUncheckedCreateInput = {
    id?: string
    quantity: number
    price: number
    total: number
    comment: string
    serviceId: string
    service: JsonNullValueInput | InputJsonValue
    requestId: string
  }

  export type RequestItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: JsonNullValueInput | InputJsonValue
    request?: RequestUpdateOneRequiredWithoutItemsNestedInput
  }

  export type RequestItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: JsonNullValueInput | InputJsonValue
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestItemCreateManyInput = {
    id?: string
    quantity: number
    price: number
    total: number
    comment: string
    serviceId: string
    service: JsonNullValueInput | InputJsonValue
    requestId: string
  }

  export type RequestItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: JsonNullValueInput | InputJsonValue
  }

  export type RequestItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: JsonNullValueInput | InputJsonValue
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestPaymentCreateInput = {
    amount: number
    method: string
    image: string
    transferNumber: string
    paidAt?: Date | string | null
    request: RequestCreateNestedOneWithoutPaymentInput
  }

  export type RequestPaymentUncheckedCreateInput = {
    id: string
    amount: number
    method: string
    image: string
    transferNumber: string
    paidAt?: Date | string | null
  }

  export type RequestPaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    transferNumber?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    request?: RequestUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type RequestPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    transferNumber?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RequestPaymentCreateManyInput = {
    id: string
    amount: number
    method: string
    image: string
    transferNumber: string
    paidAt?: Date | string | null
  }

  export type RequestPaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    transferNumber?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RequestPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    transferNumber?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UbigeoCreateInput = {
    id?: string
    code: string
    district: string
    province: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ubigeoServices?: UbigeoServiceCreateNestedManyWithoutUbigeoInput
  }

  export type UbigeoUncheckedCreateInput = {
    id?: string
    code: string
    district: string
    province: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ubigeoServices?: UbigeoServiceUncheckedCreateNestedManyWithoutUbigeoInput
  }

  export type UbigeoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ubigeoServices?: UbigeoServiceUpdateManyWithoutUbigeoNestedInput
  }

  export type UbigeoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ubigeoServices?: UbigeoServiceUncheckedUpdateManyWithoutUbigeoNestedInput
  }

  export type UbigeoCreateManyInput = {
    id?: string
    code: string
    district: string
    province: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UbigeoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UbigeoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UbigeoServiceCreateInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    service: ServiceCreateNestedOneWithoutUbigeoServicesInput
    ubigeo: UbigeoCreateNestedOneWithoutUbigeoServicesInput
  }

  export type UbigeoServiceUncheckedCreateInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    serviceId: string
    ubigeoId: string
  }

  export type UbigeoServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    service?: ServiceUpdateOneRequiredWithoutUbigeoServicesNestedInput
    ubigeo?: UbigeoUpdateOneRequiredWithoutUbigeoServicesNestedInput
  }

  export type UbigeoServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    serviceId?: StringFieldUpdateOperationsInput | string
    ubigeoId?: StringFieldUpdateOperationsInput | string
  }

  export type UbigeoServiceCreateManyInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    serviceId: string
    ubigeoId: string
  }

  export type UbigeoServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UbigeoServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    serviceId?: StringFieldUpdateOperationsInput | string
    ubigeoId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
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

  export type ProviderNullableScalarRelationFilter = {
    is?: ProviderWhereInput | null
    isNot?: ProviderWhereInput | null
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type RequestListRelationFilter = {
    every?: RequestWhereInput
    some?: RequestWhereInput
    none?: RequestWhereInput
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    picture?: SortOrder
    password?: SortOrder
    role?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    picture?: SortOrder
    password?: SortOrder
    role?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    picture?: SortOrder
    password?: SortOrder
    role?: SortOrder
    authProvider?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    picture?: SortOrder
    address?: SortOrder
    email?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    picture?: SortOrder
    address?: SortOrder
    email?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    picture?: SortOrder
    address?: SortOrder
    email?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProviderScalarRelationFilter = {
    is?: ProviderWhereInput
    isNot?: ProviderWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type UbigeoServiceListRelationFilter = {
    every?: UbigeoServiceWhereInput
    some?: UbigeoServiceWhereInput
    none?: UbigeoServiceWhereInput
  }

  export type ServiceImageListRelationFilter = {
    every?: ServiceImageWhereInput
    some?: ServiceImageWhereInput
    none?: ServiceImageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UbigeoServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceMin?: SortOrder
    priceMax?: SortOrder
    score?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providerId?: SortOrder
    categoryId?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    priceMin?: SortOrder
    priceMax?: SortOrder
    score?: SortOrder
    duration?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceMin?: SortOrder
    priceMax?: SortOrder
    score?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providerId?: SortOrder
    categoryId?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceMin?: SortOrder
    priceMax?: SortOrder
    score?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providerId?: SortOrder
    categoryId?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    priceMin?: SortOrder
    priceMax?: SortOrder
    score?: SortOrder
    duration?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ServiceImageCountOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    url?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    serviceId?: SortOrder
  }

  export type ServiceImageMaxOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    url?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    serviceId?: SortOrder
  }

  export type ServiceImageMinOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    url?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    serviceId?: SortOrder
  }

  export type FavoriteUserIdServiceIdCompoundUniqueInput = {
    userId: string
    serviceId: string
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type RequestItemListRelationFilter = {
    every?: RequestItemWhereInput
    some?: RequestItemWhereInput
    none?: RequestItemWhereInput
  }

  export type RequestPaymentNullableScalarRelationFilter = {
    is?: RequestPaymentWhereInput | null
    isNot?: RequestPaymentWhereInput | null
  }

  export type RequestItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestCountOrderByAggregateInput = {
    id?: SortOrder
    guestQty?: SortOrder
    budgetAmount?: SortOrder
    finalPrice?: SortOrder
    eventDate?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    providerId?: SortOrder
  }

  export type RequestAvgOrderByAggregateInput = {
    guestQty?: SortOrder
    budgetAmount?: SortOrder
    finalPrice?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    guestQty?: SortOrder
    budgetAmount?: SortOrder
    finalPrice?: SortOrder
    eventDate?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    providerId?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    id?: SortOrder
    guestQty?: SortOrder
    budgetAmount?: SortOrder
    finalPrice?: SortOrder
    eventDate?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    providerId?: SortOrder
  }

  export type RequestSumOrderByAggregateInput = {
    guestQty?: SortOrder
    budgetAmount?: SortOrder
    finalPrice?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RequestScalarRelationFilter = {
    is?: RequestWhereInput
    isNot?: RequestWhereInput
  }

  export type RequestItemCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    comment?: SortOrder
    serviceId?: SortOrder
    service?: SortOrder
    requestId?: SortOrder
  }

  export type RequestItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
  }

  export type RequestItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    comment?: SortOrder
    serviceId?: SortOrder
    requestId?: SortOrder
  }

  export type RequestItemMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    comment?: SortOrder
    serviceId?: SortOrder
    requestId?: SortOrder
  }

  export type RequestItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type RequestPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    image?: SortOrder
    transferNumber?: SortOrder
    paidAt?: SortOrder
  }

  export type RequestPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type RequestPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    image?: SortOrder
    transferNumber?: SortOrder
    paidAt?: SortOrder
  }

  export type RequestPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    image?: SortOrder
    transferNumber?: SortOrder
    paidAt?: SortOrder
  }

  export type RequestPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type UbigeoCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    district?: SortOrder
    province?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UbigeoMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    district?: SortOrder
    province?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UbigeoMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    district?: SortOrder
    province?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UbigeoScalarRelationFilter = {
    is?: UbigeoWhereInput
    isNot?: UbigeoWhereInput
  }

  export type UbigeoServiceUbigeoIdServiceIdCompoundUniqueInput = {
    ubigeoId: string
    serviceId: string
  }

  export type UbigeoServiceCountOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    serviceId?: SortOrder
    ubigeoId?: SortOrder
  }

  export type UbigeoServiceAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UbigeoServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    serviceId?: SortOrder
    ubigeoId?: SortOrder
  }

  export type UbigeoServiceMinOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    serviceId?: SortOrder
    ubigeoId?: SortOrder
  }

  export type UbigeoServiceSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ProviderCreateNestedOneWithoutUserInput = {
    create?: XOR<ProviderCreateWithoutUserInput, ProviderUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutUserInput
    connect?: ProviderWhereUniqueInput
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type ProviderUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProviderCreateWithoutUserInput, ProviderUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutUserInput
    connect?: ProviderWhereUniqueInput
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumAuthProviderFieldUpdateOperationsInput = {
    set?: $Enums.AuthProvider
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProviderUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProviderCreateWithoutUserInput, ProviderUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutUserInput
    upsert?: ProviderUpsertWithoutUserInput
    disconnect?: ProviderWhereInput | boolean
    delete?: ProviderWhereInput | boolean
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutUserInput, ProviderUpdateWithoutUserInput>, ProviderUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutUserInput | RequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutUserInput | RequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutUserInput | RequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type ProviderUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProviderCreateWithoutUserInput, ProviderUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutUserInput
    upsert?: ProviderUpsertWithoutUserInput
    disconnect?: ProviderWhereInput | boolean
    delete?: ProviderWhereInput | boolean
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutUserInput, ProviderUpdateWithoutUserInput>, ProviderUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutUserInput | RequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutUserInput | RequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutUserInput | RequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProviderInput = {
    create?: XOR<UserCreateWithoutProviderInput, UserUncheckedCreateWithoutProviderInput>
    connectOrCreate?: UserCreateOrConnectWithoutProviderInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceCreateNestedManyWithoutProviderInput = {
    create?: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput> | ServiceCreateWithoutProviderInput[] | ServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProviderInput | ServiceCreateOrConnectWithoutProviderInput[]
    createMany?: ServiceCreateManyProviderInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutProviderInput = {
    create?: XOR<RequestCreateWithoutProviderInput, RequestUncheckedCreateWithoutProviderInput> | RequestCreateWithoutProviderInput[] | RequestUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutProviderInput | RequestCreateOrConnectWithoutProviderInput[]
    createMany?: RequestCreateManyProviderInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput> | ServiceCreateWithoutProviderInput[] | ServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProviderInput | ServiceCreateOrConnectWithoutProviderInput[]
    createMany?: ServiceCreateManyProviderInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<RequestCreateWithoutProviderInput, RequestUncheckedCreateWithoutProviderInput> | RequestCreateWithoutProviderInput[] | RequestUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutProviderInput | RequestCreateOrConnectWithoutProviderInput[]
    createMany?: RequestCreateManyProviderInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutProviderNestedInput = {
    create?: XOR<UserCreateWithoutProviderInput, UserUncheckedCreateWithoutProviderInput>
    connectOrCreate?: UserCreateOrConnectWithoutProviderInput
    upsert?: UserUpsertWithoutProviderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProviderInput, UserUpdateWithoutProviderInput>, UserUncheckedUpdateWithoutProviderInput>
  }

  export type ServiceUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput> | ServiceCreateWithoutProviderInput[] | ServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProviderInput | ServiceCreateOrConnectWithoutProviderInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutProviderInput | ServiceUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ServiceCreateManyProviderInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutProviderInput | ServiceUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutProviderInput | ServiceUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutProviderNestedInput = {
    create?: XOR<RequestCreateWithoutProviderInput, RequestUncheckedCreateWithoutProviderInput> | RequestCreateWithoutProviderInput[] | RequestUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutProviderInput | RequestCreateOrConnectWithoutProviderInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutProviderInput | RequestUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: RequestCreateManyProviderInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutProviderInput | RequestUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutProviderInput | RequestUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput> | ServiceCreateWithoutProviderInput[] | ServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProviderInput | ServiceCreateOrConnectWithoutProviderInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutProviderInput | ServiceUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ServiceCreateManyProviderInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutProviderInput | ServiceUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutProviderInput | ServiceUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<RequestCreateWithoutProviderInput, RequestUncheckedCreateWithoutProviderInput> | RequestCreateWithoutProviderInput[] | RequestUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutProviderInput | RequestCreateOrConnectWithoutProviderInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutProviderInput | RequestUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: RequestCreateManyProviderInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutProviderInput | RequestUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutProviderInput | RequestUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type ServiceCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCategoryInput | ServiceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCategoryInput | ServiceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCategoryInput | ServiceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCategoryInput | ServiceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCategoryInput | ServiceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCategoryInput | ServiceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ProviderCreateNestedOneWithoutServicesInput = {
    create?: XOR<ProviderCreateWithoutServicesInput, ProviderUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutServicesInput
    connect?: ProviderWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutServicesInput = {
    create?: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutServicesInput
    connect?: CategoryWhereUniqueInput
  }

  export type FavoriteCreateNestedManyWithoutServiceInput = {
    create?: XOR<FavoriteCreateWithoutServiceInput, FavoriteUncheckedCreateWithoutServiceInput> | FavoriteCreateWithoutServiceInput[] | FavoriteUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutServiceInput | FavoriteCreateOrConnectWithoutServiceInput[]
    createMany?: FavoriteCreateManyServiceInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type UbigeoServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<UbigeoServiceCreateWithoutServiceInput, UbigeoServiceUncheckedCreateWithoutServiceInput> | UbigeoServiceCreateWithoutServiceInput[] | UbigeoServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: UbigeoServiceCreateOrConnectWithoutServiceInput | UbigeoServiceCreateOrConnectWithoutServiceInput[]
    createMany?: UbigeoServiceCreateManyServiceInputEnvelope
    connect?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
  }

  export type ServiceImageCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceImageCreateWithoutServiceInput, ServiceImageUncheckedCreateWithoutServiceInput> | ServiceImageCreateWithoutServiceInput[] | ServiceImageUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceImageCreateOrConnectWithoutServiceInput | ServiceImageCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceImageCreateManyServiceInputEnvelope
    connect?: ServiceImageWhereUniqueInput | ServiceImageWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<FavoriteCreateWithoutServiceInput, FavoriteUncheckedCreateWithoutServiceInput> | FavoriteCreateWithoutServiceInput[] | FavoriteUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutServiceInput | FavoriteCreateOrConnectWithoutServiceInput[]
    createMany?: FavoriteCreateManyServiceInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type UbigeoServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<UbigeoServiceCreateWithoutServiceInput, UbigeoServiceUncheckedCreateWithoutServiceInput> | UbigeoServiceCreateWithoutServiceInput[] | UbigeoServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: UbigeoServiceCreateOrConnectWithoutServiceInput | UbigeoServiceCreateOrConnectWithoutServiceInput[]
    createMany?: UbigeoServiceCreateManyServiceInputEnvelope
    connect?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
  }

  export type ServiceImageUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceImageCreateWithoutServiceInput, ServiceImageUncheckedCreateWithoutServiceInput> | ServiceImageCreateWithoutServiceInput[] | ServiceImageUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceImageCreateOrConnectWithoutServiceInput | ServiceImageCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceImageCreateManyServiceInputEnvelope
    connect?: ServiceImageWhereUniqueInput | ServiceImageWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProviderUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<ProviderCreateWithoutServicesInput, ProviderUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutServicesInput
    upsert?: ProviderUpsertWithoutServicesInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutServicesInput, ProviderUpdateWithoutServicesInput>, ProviderUncheckedUpdateWithoutServicesInput>
  }

  export type CategoryUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutServicesInput
    upsert?: CategoryUpsertWithoutServicesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutServicesInput, CategoryUpdateWithoutServicesInput>, CategoryUncheckedUpdateWithoutServicesInput>
  }

  export type FavoriteUpdateManyWithoutServiceNestedInput = {
    create?: XOR<FavoriteCreateWithoutServiceInput, FavoriteUncheckedCreateWithoutServiceInput> | FavoriteCreateWithoutServiceInput[] | FavoriteUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutServiceInput | FavoriteCreateOrConnectWithoutServiceInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutServiceInput | FavoriteUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: FavoriteCreateManyServiceInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutServiceInput | FavoriteUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutServiceInput | FavoriteUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type UbigeoServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<UbigeoServiceCreateWithoutServiceInput, UbigeoServiceUncheckedCreateWithoutServiceInput> | UbigeoServiceCreateWithoutServiceInput[] | UbigeoServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: UbigeoServiceCreateOrConnectWithoutServiceInput | UbigeoServiceCreateOrConnectWithoutServiceInput[]
    upsert?: UbigeoServiceUpsertWithWhereUniqueWithoutServiceInput | UbigeoServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: UbigeoServiceCreateManyServiceInputEnvelope
    set?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
    disconnect?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
    delete?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
    connect?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
    update?: UbigeoServiceUpdateWithWhereUniqueWithoutServiceInput | UbigeoServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: UbigeoServiceUpdateManyWithWhereWithoutServiceInput | UbigeoServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: UbigeoServiceScalarWhereInput | UbigeoServiceScalarWhereInput[]
  }

  export type ServiceImageUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceImageCreateWithoutServiceInput, ServiceImageUncheckedCreateWithoutServiceInput> | ServiceImageCreateWithoutServiceInput[] | ServiceImageUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceImageCreateOrConnectWithoutServiceInput | ServiceImageCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceImageUpsertWithWhereUniqueWithoutServiceInput | ServiceImageUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceImageCreateManyServiceInputEnvelope
    set?: ServiceImageWhereUniqueInput | ServiceImageWhereUniqueInput[]
    disconnect?: ServiceImageWhereUniqueInput | ServiceImageWhereUniqueInput[]
    delete?: ServiceImageWhereUniqueInput | ServiceImageWhereUniqueInput[]
    connect?: ServiceImageWhereUniqueInput | ServiceImageWhereUniqueInput[]
    update?: ServiceImageUpdateWithWhereUniqueWithoutServiceInput | ServiceImageUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceImageUpdateManyWithWhereWithoutServiceInput | ServiceImageUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceImageScalarWhereInput | ServiceImageScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<FavoriteCreateWithoutServiceInput, FavoriteUncheckedCreateWithoutServiceInput> | FavoriteCreateWithoutServiceInput[] | FavoriteUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutServiceInput | FavoriteCreateOrConnectWithoutServiceInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutServiceInput | FavoriteUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: FavoriteCreateManyServiceInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutServiceInput | FavoriteUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutServiceInput | FavoriteUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type UbigeoServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<UbigeoServiceCreateWithoutServiceInput, UbigeoServiceUncheckedCreateWithoutServiceInput> | UbigeoServiceCreateWithoutServiceInput[] | UbigeoServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: UbigeoServiceCreateOrConnectWithoutServiceInput | UbigeoServiceCreateOrConnectWithoutServiceInput[]
    upsert?: UbigeoServiceUpsertWithWhereUniqueWithoutServiceInput | UbigeoServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: UbigeoServiceCreateManyServiceInputEnvelope
    set?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
    disconnect?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
    delete?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
    connect?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
    update?: UbigeoServiceUpdateWithWhereUniqueWithoutServiceInput | UbigeoServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: UbigeoServiceUpdateManyWithWhereWithoutServiceInput | UbigeoServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: UbigeoServiceScalarWhereInput | UbigeoServiceScalarWhereInput[]
  }

  export type ServiceImageUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceImageCreateWithoutServiceInput, ServiceImageUncheckedCreateWithoutServiceInput> | ServiceImageCreateWithoutServiceInput[] | ServiceImageUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceImageCreateOrConnectWithoutServiceInput | ServiceImageCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceImageUpsertWithWhereUniqueWithoutServiceInput | ServiceImageUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceImageCreateManyServiceInputEnvelope
    set?: ServiceImageWhereUniqueInput | ServiceImageWhereUniqueInput[]
    disconnect?: ServiceImageWhereUniqueInput | ServiceImageWhereUniqueInput[]
    delete?: ServiceImageWhereUniqueInput | ServiceImageWhereUniqueInput[]
    connect?: ServiceImageWhereUniqueInput | ServiceImageWhereUniqueInput[]
    update?: ServiceImageUpdateWithWhereUniqueWithoutServiceInput | ServiceImageUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceImageUpdateManyWithWhereWithoutServiceInput | ServiceImageUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceImageScalarWhereInput | ServiceImageScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutImagesInput = {
    create?: XOR<ServiceCreateWithoutImagesInput, ServiceUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutImagesInput
    connect?: ServiceWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ServiceCreateWithoutImagesInput, ServiceUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutImagesInput
    upsert?: ServiceUpsertWithoutImagesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutImagesInput, ServiceUpdateWithoutImagesInput>, ServiceUncheckedUpdateWithoutImagesInput>
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<ServiceCreateWithoutFavoritesInput, ServiceUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutFavoritesInput
    connect?: ServiceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type ServiceUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<ServiceCreateWithoutFavoritesInput, ServiceUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutFavoritesInput
    upsert?: ServiceUpsertWithoutFavoritesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutFavoritesInput, ServiceUpdateWithoutFavoritesInput>, ServiceUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type ProviderCreateNestedOneWithoutRequestsInput = {
    create?: XOR<ProviderCreateWithoutRequestsInput, ProviderUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutRequestsInput
    connect?: ProviderWhereUniqueInput
  }

  export type RequestItemCreateNestedManyWithoutRequestInput = {
    create?: XOR<RequestItemCreateWithoutRequestInput, RequestItemUncheckedCreateWithoutRequestInput> | RequestItemCreateWithoutRequestInput[] | RequestItemUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestItemCreateOrConnectWithoutRequestInput | RequestItemCreateOrConnectWithoutRequestInput[]
    createMany?: RequestItemCreateManyRequestInputEnvelope
    connect?: RequestItemWhereUniqueInput | RequestItemWhereUniqueInput[]
  }

  export type RequestPaymentCreateNestedOneWithoutRequestInput = {
    create?: XOR<RequestPaymentCreateWithoutRequestInput, RequestPaymentUncheckedCreateWithoutRequestInput>
    connectOrCreate?: RequestPaymentCreateOrConnectWithoutRequestInput
    connect?: RequestPaymentWhereUniqueInput
  }

  export type RequestItemUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<RequestItemCreateWithoutRequestInput, RequestItemUncheckedCreateWithoutRequestInput> | RequestItemCreateWithoutRequestInput[] | RequestItemUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestItemCreateOrConnectWithoutRequestInput | RequestItemCreateOrConnectWithoutRequestInput[]
    createMany?: RequestItemCreateManyRequestInputEnvelope
    connect?: RequestItemWhereUniqueInput | RequestItemWhereUniqueInput[]
  }

  export type RequestPaymentUncheckedCreateNestedOneWithoutRequestInput = {
    create?: XOR<RequestPaymentCreateWithoutRequestInput, RequestPaymentUncheckedCreateWithoutRequestInput>
    connectOrCreate?: RequestPaymentCreateOrConnectWithoutRequestInput
    connect?: RequestPaymentWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type UserUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    upsert?: UserUpsertWithoutRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsInput, UserUpdateWithoutRequestsInput>, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type ProviderUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<ProviderCreateWithoutRequestsInput, ProviderUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutRequestsInput
    upsert?: ProviderUpsertWithoutRequestsInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutRequestsInput, ProviderUpdateWithoutRequestsInput>, ProviderUncheckedUpdateWithoutRequestsInput>
  }

  export type RequestItemUpdateManyWithoutRequestNestedInput = {
    create?: XOR<RequestItemCreateWithoutRequestInput, RequestItemUncheckedCreateWithoutRequestInput> | RequestItemCreateWithoutRequestInput[] | RequestItemUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestItemCreateOrConnectWithoutRequestInput | RequestItemCreateOrConnectWithoutRequestInput[]
    upsert?: RequestItemUpsertWithWhereUniqueWithoutRequestInput | RequestItemUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: RequestItemCreateManyRequestInputEnvelope
    set?: RequestItemWhereUniqueInput | RequestItemWhereUniqueInput[]
    disconnect?: RequestItemWhereUniqueInput | RequestItemWhereUniqueInput[]
    delete?: RequestItemWhereUniqueInput | RequestItemWhereUniqueInput[]
    connect?: RequestItemWhereUniqueInput | RequestItemWhereUniqueInput[]
    update?: RequestItemUpdateWithWhereUniqueWithoutRequestInput | RequestItemUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: RequestItemUpdateManyWithWhereWithoutRequestInput | RequestItemUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: RequestItemScalarWhereInput | RequestItemScalarWhereInput[]
  }

  export type RequestPaymentUpdateOneWithoutRequestNestedInput = {
    create?: XOR<RequestPaymentCreateWithoutRequestInput, RequestPaymentUncheckedCreateWithoutRequestInput>
    connectOrCreate?: RequestPaymentCreateOrConnectWithoutRequestInput
    upsert?: RequestPaymentUpsertWithoutRequestInput
    disconnect?: RequestPaymentWhereInput | boolean
    delete?: RequestPaymentWhereInput | boolean
    connect?: RequestPaymentWhereUniqueInput
    update?: XOR<XOR<RequestPaymentUpdateToOneWithWhereWithoutRequestInput, RequestPaymentUpdateWithoutRequestInput>, RequestPaymentUncheckedUpdateWithoutRequestInput>
  }

  export type RequestItemUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<RequestItemCreateWithoutRequestInput, RequestItemUncheckedCreateWithoutRequestInput> | RequestItemCreateWithoutRequestInput[] | RequestItemUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestItemCreateOrConnectWithoutRequestInput | RequestItemCreateOrConnectWithoutRequestInput[]
    upsert?: RequestItemUpsertWithWhereUniqueWithoutRequestInput | RequestItemUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: RequestItemCreateManyRequestInputEnvelope
    set?: RequestItemWhereUniqueInput | RequestItemWhereUniqueInput[]
    disconnect?: RequestItemWhereUniqueInput | RequestItemWhereUniqueInput[]
    delete?: RequestItemWhereUniqueInput | RequestItemWhereUniqueInput[]
    connect?: RequestItemWhereUniqueInput | RequestItemWhereUniqueInput[]
    update?: RequestItemUpdateWithWhereUniqueWithoutRequestInput | RequestItemUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: RequestItemUpdateManyWithWhereWithoutRequestInput | RequestItemUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: RequestItemScalarWhereInput | RequestItemScalarWhereInput[]
  }

  export type RequestPaymentUncheckedUpdateOneWithoutRequestNestedInput = {
    create?: XOR<RequestPaymentCreateWithoutRequestInput, RequestPaymentUncheckedCreateWithoutRequestInput>
    connectOrCreate?: RequestPaymentCreateOrConnectWithoutRequestInput
    upsert?: RequestPaymentUpsertWithoutRequestInput
    disconnect?: RequestPaymentWhereInput | boolean
    delete?: RequestPaymentWhereInput | boolean
    connect?: RequestPaymentWhereUniqueInput
    update?: XOR<XOR<RequestPaymentUpdateToOneWithWhereWithoutRequestInput, RequestPaymentUpdateWithoutRequestInput>, RequestPaymentUncheckedUpdateWithoutRequestInput>
  }

  export type RequestCreateNestedOneWithoutItemsInput = {
    create?: XOR<RequestCreateWithoutItemsInput, RequestUncheckedCreateWithoutItemsInput>
    connectOrCreate?: RequestCreateOrConnectWithoutItemsInput
    connect?: RequestWhereUniqueInput
  }

  export type RequestUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<RequestCreateWithoutItemsInput, RequestUncheckedCreateWithoutItemsInput>
    connectOrCreate?: RequestCreateOrConnectWithoutItemsInput
    upsert?: RequestUpsertWithoutItemsInput
    connect?: RequestWhereUniqueInput
    update?: XOR<XOR<RequestUpdateToOneWithWhereWithoutItemsInput, RequestUpdateWithoutItemsInput>, RequestUncheckedUpdateWithoutItemsInput>
  }

  export type RequestCreateNestedOneWithoutPaymentInput = {
    create?: XOR<RequestCreateWithoutPaymentInput, RequestUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: RequestCreateOrConnectWithoutPaymentInput
    connect?: RequestWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RequestUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<RequestCreateWithoutPaymentInput, RequestUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: RequestCreateOrConnectWithoutPaymentInput
    upsert?: RequestUpsertWithoutPaymentInput
    connect?: RequestWhereUniqueInput
    update?: XOR<XOR<RequestUpdateToOneWithWhereWithoutPaymentInput, RequestUpdateWithoutPaymentInput>, RequestUncheckedUpdateWithoutPaymentInput>
  }

  export type UbigeoServiceCreateNestedManyWithoutUbigeoInput = {
    create?: XOR<UbigeoServiceCreateWithoutUbigeoInput, UbigeoServiceUncheckedCreateWithoutUbigeoInput> | UbigeoServiceCreateWithoutUbigeoInput[] | UbigeoServiceUncheckedCreateWithoutUbigeoInput[]
    connectOrCreate?: UbigeoServiceCreateOrConnectWithoutUbigeoInput | UbigeoServiceCreateOrConnectWithoutUbigeoInput[]
    createMany?: UbigeoServiceCreateManyUbigeoInputEnvelope
    connect?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
  }

  export type UbigeoServiceUncheckedCreateNestedManyWithoutUbigeoInput = {
    create?: XOR<UbigeoServiceCreateWithoutUbigeoInput, UbigeoServiceUncheckedCreateWithoutUbigeoInput> | UbigeoServiceCreateWithoutUbigeoInput[] | UbigeoServiceUncheckedCreateWithoutUbigeoInput[]
    connectOrCreate?: UbigeoServiceCreateOrConnectWithoutUbigeoInput | UbigeoServiceCreateOrConnectWithoutUbigeoInput[]
    createMany?: UbigeoServiceCreateManyUbigeoInputEnvelope
    connect?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
  }

  export type UbigeoServiceUpdateManyWithoutUbigeoNestedInput = {
    create?: XOR<UbigeoServiceCreateWithoutUbigeoInput, UbigeoServiceUncheckedCreateWithoutUbigeoInput> | UbigeoServiceCreateWithoutUbigeoInput[] | UbigeoServiceUncheckedCreateWithoutUbigeoInput[]
    connectOrCreate?: UbigeoServiceCreateOrConnectWithoutUbigeoInput | UbigeoServiceCreateOrConnectWithoutUbigeoInput[]
    upsert?: UbigeoServiceUpsertWithWhereUniqueWithoutUbigeoInput | UbigeoServiceUpsertWithWhereUniqueWithoutUbigeoInput[]
    createMany?: UbigeoServiceCreateManyUbigeoInputEnvelope
    set?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
    disconnect?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
    delete?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
    connect?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
    update?: UbigeoServiceUpdateWithWhereUniqueWithoutUbigeoInput | UbigeoServiceUpdateWithWhereUniqueWithoutUbigeoInput[]
    updateMany?: UbigeoServiceUpdateManyWithWhereWithoutUbigeoInput | UbigeoServiceUpdateManyWithWhereWithoutUbigeoInput[]
    deleteMany?: UbigeoServiceScalarWhereInput | UbigeoServiceScalarWhereInput[]
  }

  export type UbigeoServiceUncheckedUpdateManyWithoutUbigeoNestedInput = {
    create?: XOR<UbigeoServiceCreateWithoutUbigeoInput, UbigeoServiceUncheckedCreateWithoutUbigeoInput> | UbigeoServiceCreateWithoutUbigeoInput[] | UbigeoServiceUncheckedCreateWithoutUbigeoInput[]
    connectOrCreate?: UbigeoServiceCreateOrConnectWithoutUbigeoInput | UbigeoServiceCreateOrConnectWithoutUbigeoInput[]
    upsert?: UbigeoServiceUpsertWithWhereUniqueWithoutUbigeoInput | UbigeoServiceUpsertWithWhereUniqueWithoutUbigeoInput[]
    createMany?: UbigeoServiceCreateManyUbigeoInputEnvelope
    set?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
    disconnect?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
    delete?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
    connect?: UbigeoServiceWhereUniqueInput | UbigeoServiceWhereUniqueInput[]
    update?: UbigeoServiceUpdateWithWhereUniqueWithoutUbigeoInput | UbigeoServiceUpdateWithWhereUniqueWithoutUbigeoInput[]
    updateMany?: UbigeoServiceUpdateManyWithWhereWithoutUbigeoInput | UbigeoServiceUpdateManyWithWhereWithoutUbigeoInput[]
    deleteMany?: UbigeoServiceScalarWhereInput | UbigeoServiceScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutUbigeoServicesInput = {
    create?: XOR<ServiceCreateWithoutUbigeoServicesInput, ServiceUncheckedCreateWithoutUbigeoServicesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutUbigeoServicesInput
    connect?: ServiceWhereUniqueInput
  }

  export type UbigeoCreateNestedOneWithoutUbigeoServicesInput = {
    create?: XOR<UbigeoCreateWithoutUbigeoServicesInput, UbigeoUncheckedCreateWithoutUbigeoServicesInput>
    connectOrCreate?: UbigeoCreateOrConnectWithoutUbigeoServicesInput
    connect?: UbigeoWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServiceUpdateOneRequiredWithoutUbigeoServicesNestedInput = {
    create?: XOR<ServiceCreateWithoutUbigeoServicesInput, ServiceUncheckedCreateWithoutUbigeoServicesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutUbigeoServicesInput
    upsert?: ServiceUpsertWithoutUbigeoServicesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutUbigeoServicesInput, ServiceUpdateWithoutUbigeoServicesInput>, ServiceUncheckedUpdateWithoutUbigeoServicesInput>
  }

  export type UbigeoUpdateOneRequiredWithoutUbigeoServicesNestedInput = {
    create?: XOR<UbigeoCreateWithoutUbigeoServicesInput, UbigeoUncheckedCreateWithoutUbigeoServicesInput>
    connectOrCreate?: UbigeoCreateOrConnectWithoutUbigeoServicesInput
    upsert?: UbigeoUpsertWithoutUbigeoServicesInput
    connect?: UbigeoWhereUniqueInput
    update?: XOR<XOR<UbigeoUpdateToOneWithWhereWithoutUbigeoServicesInput, UbigeoUpdateWithoutUbigeoServicesInput>, UbigeoUncheckedUpdateWithoutUbigeoServicesInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ProviderCreateWithoutUserInput = {
    name: string
    description: string
    picture: string
    address: string
    email: string
    website: string
    phone: string
    facebook: string
    instagram: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutProviderInput
    requests?: RequestCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutUserInput = {
    name: string
    description: string
    picture: string
    address: string
    email: string
    website: string
    phone: string
    facebook: string
    instagram: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
    requests?: RequestUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutUserInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutUserInput, ProviderUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    serviceId: string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutUserInput = {
    id?: string
    guestQty: number
    budgetAmount: number
    finalPrice: number
    eventDate: Date | string
    status: $Enums.RequestStatus
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutRequestsInput
    items?: RequestItemCreateNestedManyWithoutRequestInput
    payment?: RequestPaymentCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutUserInput = {
    id?: string
    guestQty: number
    budgetAmount: number
    finalPrice: number
    eventDate: Date | string
    status: $Enums.RequestStatus
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId: string
    items?: RequestItemUncheckedCreateNestedManyWithoutRequestInput
    payment?: RequestPaymentUncheckedCreateNestedOneWithoutRequestInput
  }

  export type RequestCreateOrConnectWithoutUserInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput>
  }

  export type RequestCreateManyUserInputEnvelope = {
    data: RequestCreateManyUserInput | RequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProviderUpsertWithoutUserInput = {
    update: XOR<ProviderUpdateWithoutUserInput, ProviderUncheckedUpdateWithoutUserInput>
    create: XOR<ProviderCreateWithoutUserInput, ProviderUncheckedCreateWithoutUserInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutUserInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutUserInput, ProviderUncheckedUpdateWithoutUserInput>
  }

  export type ProviderUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutProviderNestedInput
    requests?: RequestUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
    requests?: RequestUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    userId?: StringFilter<"Favorite"> | string
    serviceId?: StringFilter<"Favorite"> | string
  }

  export type RequestUpsertWithWhereUniqueWithoutUserInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutUserInput, RequestUncheckedUpdateWithoutUserInput>
    create: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutUserInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutUserInput, RequestUncheckedUpdateWithoutUserInput>
  }

  export type RequestUpdateManyWithWhereWithoutUserInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutUserInput>
  }

  export type RequestScalarWhereInput = {
    AND?: RequestScalarWhereInput | RequestScalarWhereInput[]
    OR?: RequestScalarWhereInput[]
    NOT?: RequestScalarWhereInput | RequestScalarWhereInput[]
    id?: StringFilter<"Request"> | string
    guestQty?: IntFilter<"Request"> | number
    budgetAmount?: FloatFilter<"Request"> | number
    finalPrice?: FloatFilter<"Request"> | number
    eventDate?: DateTimeFilter<"Request"> | Date | string
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    comment?: StringFilter<"Request"> | string
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedAt?: DateTimeFilter<"Request"> | Date | string
    userId?: StringFilter<"Request"> | string
    providerId?: StringFilter<"Request"> | string
  }

  export type UserCreateWithoutProviderInput = {
    id?: string
    name: string
    email: string
    phone: string
    picture: string
    password: string
    role: $Enums.Role
    authProvider: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProviderInput = {
    id?: string
    name: string
    email: string
    phone: string
    picture: string
    password: string
    role: $Enums.Role
    authProvider: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProviderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProviderInput, UserUncheckedCreateWithoutProviderInput>
  }

  export type ServiceCreateWithoutProviderInput = {
    id?: string
    name: string
    description: string
    priceMin: number
    priceMax: number
    score: number
    duration?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutServicesInput
    favorites?: FavoriteCreateNestedManyWithoutServiceInput
    ubigeoServices?: UbigeoServiceCreateNestedManyWithoutServiceInput
    images?: ServiceImageCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutProviderInput = {
    id?: string
    name: string
    description: string
    priceMin: number
    priceMax: number
    score: number
    duration?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutServiceInput
    ubigeoServices?: UbigeoServiceUncheckedCreateNestedManyWithoutServiceInput
    images?: ServiceImageUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutProviderInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput>
  }

  export type ServiceCreateManyProviderInputEnvelope = {
    data: ServiceCreateManyProviderInput | ServiceCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutProviderInput = {
    id?: string
    guestQty: number
    budgetAmount: number
    finalPrice: number
    eventDate: Date | string
    status: $Enums.RequestStatus
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRequestsInput
    items?: RequestItemCreateNestedManyWithoutRequestInput
    payment?: RequestPaymentCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutProviderInput = {
    id?: string
    guestQty: number
    budgetAmount: number
    finalPrice: number
    eventDate: Date | string
    status: $Enums.RequestStatus
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    items?: RequestItemUncheckedCreateNestedManyWithoutRequestInput
    payment?: RequestPaymentUncheckedCreateNestedOneWithoutRequestInput
  }

  export type RequestCreateOrConnectWithoutProviderInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutProviderInput, RequestUncheckedCreateWithoutProviderInput>
  }

  export type RequestCreateManyProviderInputEnvelope = {
    data: RequestCreateManyProviderInput | RequestCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProviderInput = {
    update: XOR<UserUpdateWithoutProviderInput, UserUncheckedUpdateWithoutProviderInput>
    create: XOR<UserCreateWithoutProviderInput, UserUncheckedCreateWithoutProviderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProviderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProviderInput, UserUncheckedUpdateWithoutProviderInput>
  }

  export type UserUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServiceUpsertWithWhereUniqueWithoutProviderInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutProviderInput, ServiceUncheckedUpdateWithoutProviderInput>
    create: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutProviderInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutProviderInput, ServiceUncheckedUpdateWithoutProviderInput>
  }

  export type ServiceUpdateManyWithWhereWithoutProviderInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutProviderInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    priceMin?: FloatFilter<"Service"> | number
    priceMax?: FloatFilter<"Service"> | number
    score?: FloatFilter<"Service"> | number
    duration?: IntNullableFilter<"Service"> | number | null
    status?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    providerId?: StringFilter<"Service"> | string
    categoryId?: StringFilter<"Service"> | string
  }

  export type RequestUpsertWithWhereUniqueWithoutProviderInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutProviderInput, RequestUncheckedUpdateWithoutProviderInput>
    create: XOR<RequestCreateWithoutProviderInput, RequestUncheckedCreateWithoutProviderInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutProviderInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutProviderInput, RequestUncheckedUpdateWithoutProviderInput>
  }

  export type RequestUpdateManyWithWhereWithoutProviderInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutProviderInput>
  }

  export type ServiceCreateWithoutCategoryInput = {
    id?: string
    name: string
    description: string
    priceMin: number
    priceMax: number
    score: number
    duration?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutServicesInput
    favorites?: FavoriteCreateNestedManyWithoutServiceInput
    ubigeoServices?: UbigeoServiceCreateNestedManyWithoutServiceInput
    images?: ServiceImageCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description: string
    priceMin: number
    priceMax: number
    score: number
    duration?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId: string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutServiceInput
    ubigeoServices?: UbigeoServiceUncheckedCreateNestedManyWithoutServiceInput
    images?: ServiceImageUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
  }

  export type ServiceCreateManyCategoryInputEnvelope = {
    data: ServiceCreateManyCategoryInput | ServiceCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutCategoryInput, ServiceUncheckedUpdateWithoutCategoryInput>
    create: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutCategoryInput, ServiceUncheckedUpdateWithoutCategoryInput>
  }

  export type ServiceUpdateManyWithWhereWithoutCategoryInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProviderCreateWithoutServicesInput = {
    name: string
    description: string
    picture: string
    address: string
    email: string
    website: string
    phone: string
    facebook: string
    instagram: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProviderInput
    requests?: RequestCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutServicesInput = {
    id: string
    name: string
    description: string
    picture: string
    address: string
    email: string
    website: string
    phone: string
    facebook: string
    instagram: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: RequestUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutServicesInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutServicesInput, ProviderUncheckedCreateWithoutServicesInput>
  }

  export type CategoryCreateWithoutServicesInput = {
    id?: string
    name: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutServicesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
  }

  export type FavoriteCreateWithoutServiceInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutServiceInput = {
    id?: string
    createdAt?: Date | string
    userId: string
  }

  export type FavoriteCreateOrConnectWithoutServiceInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutServiceInput, FavoriteUncheckedCreateWithoutServiceInput>
  }

  export type FavoriteCreateManyServiceInputEnvelope = {
    data: FavoriteCreateManyServiceInput | FavoriteCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type UbigeoServiceCreateWithoutServiceInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    ubigeo: UbigeoCreateNestedOneWithoutUbigeoServicesInput
  }

  export type UbigeoServiceUncheckedCreateWithoutServiceInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    ubigeoId: string
  }

  export type UbigeoServiceCreateOrConnectWithoutServiceInput = {
    where: UbigeoServiceWhereUniqueInput
    create: XOR<UbigeoServiceCreateWithoutServiceInput, UbigeoServiceUncheckedCreateWithoutServiceInput>
  }

  export type UbigeoServiceCreateManyServiceInputEnvelope = {
    data: UbigeoServiceCreateManyServiceInput | UbigeoServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ServiceImageCreateWithoutServiceInput = {
    id?: string
    publicId: string
    url: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceImageUncheckedCreateWithoutServiceInput = {
    id?: string
    publicId: string
    url: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceImageCreateOrConnectWithoutServiceInput = {
    where: ServiceImageWhereUniqueInput
    create: XOR<ServiceImageCreateWithoutServiceInput, ServiceImageUncheckedCreateWithoutServiceInput>
  }

  export type ServiceImageCreateManyServiceInputEnvelope = {
    data: ServiceImageCreateManyServiceInput | ServiceImageCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ProviderUpsertWithoutServicesInput = {
    update: XOR<ProviderUpdateWithoutServicesInput, ProviderUncheckedUpdateWithoutServicesInput>
    create: XOR<ProviderCreateWithoutServicesInput, ProviderUncheckedCreateWithoutServicesInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutServicesInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutServicesInput, ProviderUncheckedUpdateWithoutServicesInput>
  }

  export type ProviderUpdateWithoutServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProviderNestedInput
    requests?: RequestUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: RequestUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type CategoryUpsertWithoutServicesInput = {
    update: XOR<CategoryUpdateWithoutServicesInput, CategoryUncheckedUpdateWithoutServicesInput>
    create: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutServicesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutServicesInput, CategoryUncheckedUpdateWithoutServicesInput>
  }

  export type CategoryUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpsertWithWhereUniqueWithoutServiceInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutServiceInput, FavoriteUncheckedUpdateWithoutServiceInput>
    create: XOR<FavoriteCreateWithoutServiceInput, FavoriteUncheckedCreateWithoutServiceInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutServiceInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutServiceInput, FavoriteUncheckedUpdateWithoutServiceInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutServiceInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutServiceInput>
  }

  export type UbigeoServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: UbigeoServiceWhereUniqueInput
    update: XOR<UbigeoServiceUpdateWithoutServiceInput, UbigeoServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<UbigeoServiceCreateWithoutServiceInput, UbigeoServiceUncheckedCreateWithoutServiceInput>
  }

  export type UbigeoServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: UbigeoServiceWhereUniqueInput
    data: XOR<UbigeoServiceUpdateWithoutServiceInput, UbigeoServiceUncheckedUpdateWithoutServiceInput>
  }

  export type UbigeoServiceUpdateManyWithWhereWithoutServiceInput = {
    where: UbigeoServiceScalarWhereInput
    data: XOR<UbigeoServiceUpdateManyMutationInput, UbigeoServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type UbigeoServiceScalarWhereInput = {
    AND?: UbigeoServiceScalarWhereInput | UbigeoServiceScalarWhereInput[]
    OR?: UbigeoServiceScalarWhereInput[]
    NOT?: UbigeoServiceScalarWhereInput | UbigeoServiceScalarWhereInput[]
    id?: StringFilter<"UbigeoService"> | string
    latitude?: FloatNullableFilter<"UbigeoService"> | number | null
    longitude?: FloatNullableFilter<"UbigeoService"> | number | null
    serviceId?: StringFilter<"UbigeoService"> | string
    ubigeoId?: StringFilter<"UbigeoService"> | string
  }

  export type ServiceImageUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServiceImageWhereUniqueInput
    update: XOR<ServiceImageUpdateWithoutServiceInput, ServiceImageUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceImageCreateWithoutServiceInput, ServiceImageUncheckedCreateWithoutServiceInput>
  }

  export type ServiceImageUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServiceImageWhereUniqueInput
    data: XOR<ServiceImageUpdateWithoutServiceInput, ServiceImageUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceImageUpdateManyWithWhereWithoutServiceInput = {
    where: ServiceImageScalarWhereInput
    data: XOR<ServiceImageUpdateManyMutationInput, ServiceImageUncheckedUpdateManyWithoutServiceInput>
  }

  export type ServiceImageScalarWhereInput = {
    AND?: ServiceImageScalarWhereInput | ServiceImageScalarWhereInput[]
    OR?: ServiceImageScalarWhereInput[]
    NOT?: ServiceImageScalarWhereInput | ServiceImageScalarWhereInput[]
    id?: StringFilter<"ServiceImage"> | string
    publicId?: StringFilter<"ServiceImage"> | string
    url?: StringFilter<"ServiceImage"> | string
    name?: StringFilter<"ServiceImage"> | string
    createdAt?: DateTimeFilter<"ServiceImage"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceImage"> | Date | string
    serviceId?: StringFilter<"ServiceImage"> | string
  }

  export type ServiceCreateWithoutImagesInput = {
    id?: string
    name: string
    description: string
    priceMin: number
    priceMax: number
    score: number
    duration?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
    favorites?: FavoriteCreateNestedManyWithoutServiceInput
    ubigeoServices?: UbigeoServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    description: string
    priceMin: number
    priceMax: number
    score: number
    duration?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId: string
    categoryId: string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutServiceInput
    ubigeoServices?: UbigeoServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutImagesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutImagesInput, ServiceUncheckedCreateWithoutImagesInput>
  }

  export type ServiceUpsertWithoutImagesInput = {
    update: XOR<ServiceUpdateWithoutImagesInput, ServiceUncheckedUpdateWithoutImagesInput>
    create: XOR<ServiceCreateWithoutImagesInput, ServiceUncheckedCreateWithoutImagesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutImagesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutImagesInput, ServiceUncheckedUpdateWithoutImagesInput>
  }

  export type ServiceUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMin?: FloatFieldUpdateOperationsInput | number
    priceMax?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutServicesNestedInput
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    favorites?: FavoriteUpdateManyWithoutServiceNestedInput
    ubigeoServices?: UbigeoServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMin?: FloatFieldUpdateOperationsInput | number
    priceMax?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteUncheckedUpdateManyWithoutServiceNestedInput
    ubigeoServices?: UbigeoServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type UserCreateWithoutFavoritesInput = {
    id?: string
    name: string
    email: string
    phone: string
    picture: string
    password: string
    role: $Enums.Role
    authProvider: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: string
    name: string
    email: string
    phone: string
    picture: string
    password: string
    role: $Enums.Role
    authProvider: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderUncheckedCreateNestedOneWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type ServiceCreateWithoutFavoritesInput = {
    id?: string
    name: string
    description: string
    priceMin: number
    priceMax: number
    score: number
    duration?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
    ubigeoServices?: UbigeoServiceCreateNestedManyWithoutServiceInput
    images?: ServiceImageCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutFavoritesInput = {
    id?: string
    name: string
    description: string
    priceMin: number
    priceMax: number
    score: number
    duration?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId: string
    categoryId: string
    ubigeoServices?: UbigeoServiceUncheckedCreateNestedManyWithoutServiceInput
    images?: ServiceImageUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutFavoritesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutFavoritesInput, ServiceUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUncheckedUpdateOneWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServiceUpsertWithoutFavoritesInput = {
    update: XOR<ServiceUpdateWithoutFavoritesInput, ServiceUncheckedUpdateWithoutFavoritesInput>
    create: XOR<ServiceCreateWithoutFavoritesInput, ServiceUncheckedCreateWithoutFavoritesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutFavoritesInput, ServiceUncheckedUpdateWithoutFavoritesInput>
  }

  export type ServiceUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMin?: FloatFieldUpdateOperationsInput | number
    priceMax?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutServicesNestedInput
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    ubigeoServices?: UbigeoServiceUpdateManyWithoutServiceNestedInput
    images?: ServiceImageUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMin?: FloatFieldUpdateOperationsInput | number
    priceMax?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    ubigeoServices?: UbigeoServiceUncheckedUpdateManyWithoutServiceNestedInput
    images?: ServiceImageUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type UserCreateWithoutRequestsInput = {
    id?: string
    name: string
    email: string
    phone: string
    picture: string
    password: string
    role: $Enums.Role
    authProvider: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestsInput = {
    id?: string
    name: string
    email: string
    phone: string
    picture: string
    password: string
    role: $Enums.Role
    authProvider: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderUncheckedCreateNestedOneWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
  }

  export type ProviderCreateWithoutRequestsInput = {
    name: string
    description: string
    picture: string
    address: string
    email: string
    website: string
    phone: string
    facebook: string
    instagram: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProviderInput
    services?: ServiceCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutRequestsInput = {
    id: string
    name: string
    description: string
    picture: string
    address: string
    email: string
    website: string
    phone: string
    facebook: string
    instagram: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutRequestsInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutRequestsInput, ProviderUncheckedCreateWithoutRequestsInput>
  }

  export type RequestItemCreateWithoutRequestInput = {
    id?: string
    quantity: number
    price: number
    total: number
    comment: string
    serviceId: string
    service: JsonNullValueInput | InputJsonValue
  }

  export type RequestItemUncheckedCreateWithoutRequestInput = {
    id?: string
    quantity: number
    price: number
    total: number
    comment: string
    serviceId: string
    service: JsonNullValueInput | InputJsonValue
  }

  export type RequestItemCreateOrConnectWithoutRequestInput = {
    where: RequestItemWhereUniqueInput
    create: XOR<RequestItemCreateWithoutRequestInput, RequestItemUncheckedCreateWithoutRequestInput>
  }

  export type RequestItemCreateManyRequestInputEnvelope = {
    data: RequestItemCreateManyRequestInput | RequestItemCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type RequestPaymentCreateWithoutRequestInput = {
    amount: number
    method: string
    image: string
    transferNumber: string
    paidAt?: Date | string | null
  }

  export type RequestPaymentUncheckedCreateWithoutRequestInput = {
    amount: number
    method: string
    image: string
    transferNumber: string
    paidAt?: Date | string | null
  }

  export type RequestPaymentCreateOrConnectWithoutRequestInput = {
    where: RequestPaymentWhereUniqueInput
    create: XOR<RequestPaymentCreateWithoutRequestInput, RequestPaymentUncheckedCreateWithoutRequestInput>
  }

  export type UserUpsertWithoutRequestsInput = {
    update: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUncheckedUpdateOneWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProviderUpsertWithoutRequestsInput = {
    update: XOR<ProviderUpdateWithoutRequestsInput, ProviderUncheckedUpdateWithoutRequestsInput>
    create: XOR<ProviderCreateWithoutRequestsInput, ProviderUncheckedCreateWithoutRequestsInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutRequestsInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutRequestsInput, ProviderUncheckedUpdateWithoutRequestsInput>
  }

  export type ProviderUpdateWithoutRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProviderNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type RequestItemUpsertWithWhereUniqueWithoutRequestInput = {
    where: RequestItemWhereUniqueInput
    update: XOR<RequestItemUpdateWithoutRequestInput, RequestItemUncheckedUpdateWithoutRequestInput>
    create: XOR<RequestItemCreateWithoutRequestInput, RequestItemUncheckedCreateWithoutRequestInput>
  }

  export type RequestItemUpdateWithWhereUniqueWithoutRequestInput = {
    where: RequestItemWhereUniqueInput
    data: XOR<RequestItemUpdateWithoutRequestInput, RequestItemUncheckedUpdateWithoutRequestInput>
  }

  export type RequestItemUpdateManyWithWhereWithoutRequestInput = {
    where: RequestItemScalarWhereInput
    data: XOR<RequestItemUpdateManyMutationInput, RequestItemUncheckedUpdateManyWithoutRequestInput>
  }

  export type RequestItemScalarWhereInput = {
    AND?: RequestItemScalarWhereInput | RequestItemScalarWhereInput[]
    OR?: RequestItemScalarWhereInput[]
    NOT?: RequestItemScalarWhereInput | RequestItemScalarWhereInput[]
    id?: StringFilter<"RequestItem"> | string
    quantity?: IntFilter<"RequestItem"> | number
    price?: FloatFilter<"RequestItem"> | number
    total?: FloatFilter<"RequestItem"> | number
    comment?: StringFilter<"RequestItem"> | string
    serviceId?: StringFilter<"RequestItem"> | string
    service?: JsonFilter<"RequestItem">
    requestId?: StringFilter<"RequestItem"> | string
  }

  export type RequestPaymentUpsertWithoutRequestInput = {
    update: XOR<RequestPaymentUpdateWithoutRequestInput, RequestPaymentUncheckedUpdateWithoutRequestInput>
    create: XOR<RequestPaymentCreateWithoutRequestInput, RequestPaymentUncheckedCreateWithoutRequestInput>
    where?: RequestPaymentWhereInput
  }

  export type RequestPaymentUpdateToOneWithWhereWithoutRequestInput = {
    where?: RequestPaymentWhereInput
    data: XOR<RequestPaymentUpdateWithoutRequestInput, RequestPaymentUncheckedUpdateWithoutRequestInput>
  }

  export type RequestPaymentUpdateWithoutRequestInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    transferNumber?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RequestPaymentUncheckedUpdateWithoutRequestInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    transferNumber?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RequestCreateWithoutItemsInput = {
    id?: string
    guestQty: number
    budgetAmount: number
    finalPrice: number
    eventDate: Date | string
    status: $Enums.RequestStatus
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRequestsInput
    provider: ProviderCreateNestedOneWithoutRequestsInput
    payment?: RequestPaymentCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutItemsInput = {
    id?: string
    guestQty: number
    budgetAmount: number
    finalPrice: number
    eventDate: Date | string
    status: $Enums.RequestStatus
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    providerId: string
    payment?: RequestPaymentUncheckedCreateNestedOneWithoutRequestInput
  }

  export type RequestCreateOrConnectWithoutItemsInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutItemsInput, RequestUncheckedCreateWithoutItemsInput>
  }

  export type RequestUpsertWithoutItemsInput = {
    update: XOR<RequestUpdateWithoutItemsInput, RequestUncheckedUpdateWithoutItemsInput>
    create: XOR<RequestCreateWithoutItemsInput, RequestUncheckedCreateWithoutItemsInput>
    where?: RequestWhereInput
  }

  export type RequestUpdateToOneWithWhereWithoutItemsInput = {
    where?: RequestWhereInput
    data: XOR<RequestUpdateWithoutItemsInput, RequestUncheckedUpdateWithoutItemsInput>
  }

  export type RequestUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestQty?: IntFieldUpdateOperationsInput | number
    budgetAmount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    provider?: ProviderUpdateOneRequiredWithoutRequestsNestedInput
    payment?: RequestPaymentUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestQty?: IntFieldUpdateOperationsInput | number
    budgetAmount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    payment?: RequestPaymentUncheckedUpdateOneWithoutRequestNestedInput
  }

  export type RequestCreateWithoutPaymentInput = {
    id?: string
    guestQty: number
    budgetAmount: number
    finalPrice: number
    eventDate: Date | string
    status: $Enums.RequestStatus
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRequestsInput
    provider: ProviderCreateNestedOneWithoutRequestsInput
    items?: RequestItemCreateNestedManyWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutPaymentInput = {
    id?: string
    guestQty: number
    budgetAmount: number
    finalPrice: number
    eventDate: Date | string
    status: $Enums.RequestStatus
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    providerId: string
    items?: RequestItemUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RequestCreateOrConnectWithoutPaymentInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutPaymentInput, RequestUncheckedCreateWithoutPaymentInput>
  }

  export type RequestUpsertWithoutPaymentInput = {
    update: XOR<RequestUpdateWithoutPaymentInput, RequestUncheckedUpdateWithoutPaymentInput>
    create: XOR<RequestCreateWithoutPaymentInput, RequestUncheckedCreateWithoutPaymentInput>
    where?: RequestWhereInput
  }

  export type RequestUpdateToOneWithWhereWithoutPaymentInput = {
    where?: RequestWhereInput
    data: XOR<RequestUpdateWithoutPaymentInput, RequestUncheckedUpdateWithoutPaymentInput>
  }

  export type RequestUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestQty?: IntFieldUpdateOperationsInput | number
    budgetAmount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    provider?: ProviderUpdateOneRequiredWithoutRequestsNestedInput
    items?: RequestItemUpdateManyWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestQty?: IntFieldUpdateOperationsInput | number
    budgetAmount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    items?: RequestItemUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type UbigeoServiceCreateWithoutUbigeoInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    service: ServiceCreateNestedOneWithoutUbigeoServicesInput
  }

  export type UbigeoServiceUncheckedCreateWithoutUbigeoInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    serviceId: string
  }

  export type UbigeoServiceCreateOrConnectWithoutUbigeoInput = {
    where: UbigeoServiceWhereUniqueInput
    create: XOR<UbigeoServiceCreateWithoutUbigeoInput, UbigeoServiceUncheckedCreateWithoutUbigeoInput>
  }

  export type UbigeoServiceCreateManyUbigeoInputEnvelope = {
    data: UbigeoServiceCreateManyUbigeoInput | UbigeoServiceCreateManyUbigeoInput[]
    skipDuplicates?: boolean
  }

  export type UbigeoServiceUpsertWithWhereUniqueWithoutUbigeoInput = {
    where: UbigeoServiceWhereUniqueInput
    update: XOR<UbigeoServiceUpdateWithoutUbigeoInput, UbigeoServiceUncheckedUpdateWithoutUbigeoInput>
    create: XOR<UbigeoServiceCreateWithoutUbigeoInput, UbigeoServiceUncheckedCreateWithoutUbigeoInput>
  }

  export type UbigeoServiceUpdateWithWhereUniqueWithoutUbigeoInput = {
    where: UbigeoServiceWhereUniqueInput
    data: XOR<UbigeoServiceUpdateWithoutUbigeoInput, UbigeoServiceUncheckedUpdateWithoutUbigeoInput>
  }

  export type UbigeoServiceUpdateManyWithWhereWithoutUbigeoInput = {
    where: UbigeoServiceScalarWhereInput
    data: XOR<UbigeoServiceUpdateManyMutationInput, UbigeoServiceUncheckedUpdateManyWithoutUbigeoInput>
  }

  export type ServiceCreateWithoutUbigeoServicesInput = {
    id?: string
    name: string
    description: string
    priceMin: number
    priceMax: number
    score: number
    duration?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
    favorites?: FavoriteCreateNestedManyWithoutServiceInput
    images?: ServiceImageCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutUbigeoServicesInput = {
    id?: string
    name: string
    description: string
    priceMin: number
    priceMax: number
    score: number
    duration?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId: string
    categoryId: string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutServiceInput
    images?: ServiceImageUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutUbigeoServicesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutUbigeoServicesInput, ServiceUncheckedCreateWithoutUbigeoServicesInput>
  }

  export type UbigeoCreateWithoutUbigeoServicesInput = {
    id?: string
    code: string
    district: string
    province: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UbigeoUncheckedCreateWithoutUbigeoServicesInput = {
    id?: string
    code: string
    district: string
    province: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UbigeoCreateOrConnectWithoutUbigeoServicesInput = {
    where: UbigeoWhereUniqueInput
    create: XOR<UbigeoCreateWithoutUbigeoServicesInput, UbigeoUncheckedCreateWithoutUbigeoServicesInput>
  }

  export type ServiceUpsertWithoutUbigeoServicesInput = {
    update: XOR<ServiceUpdateWithoutUbigeoServicesInput, ServiceUncheckedUpdateWithoutUbigeoServicesInput>
    create: XOR<ServiceCreateWithoutUbigeoServicesInput, ServiceUncheckedCreateWithoutUbigeoServicesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutUbigeoServicesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutUbigeoServicesInput, ServiceUncheckedUpdateWithoutUbigeoServicesInput>
  }

  export type ServiceUpdateWithoutUbigeoServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMin?: FloatFieldUpdateOperationsInput | number
    priceMax?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutServicesNestedInput
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    favorites?: FavoriteUpdateManyWithoutServiceNestedInput
    images?: ServiceImageUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutUbigeoServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMin?: FloatFieldUpdateOperationsInput | number
    priceMax?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteUncheckedUpdateManyWithoutServiceNestedInput
    images?: ServiceImageUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type UbigeoUpsertWithoutUbigeoServicesInput = {
    update: XOR<UbigeoUpdateWithoutUbigeoServicesInput, UbigeoUncheckedUpdateWithoutUbigeoServicesInput>
    create: XOR<UbigeoCreateWithoutUbigeoServicesInput, UbigeoUncheckedCreateWithoutUbigeoServicesInput>
    where?: UbigeoWhereInput
  }

  export type UbigeoUpdateToOneWithWhereWithoutUbigeoServicesInput = {
    where?: UbigeoWhereInput
    data: XOR<UbigeoUpdateWithoutUbigeoServicesInput, UbigeoUncheckedUpdateWithoutUbigeoServicesInput>
  }

  export type UbigeoUpdateWithoutUbigeoServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UbigeoUncheckedUpdateWithoutUbigeoServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    serviceId: string
  }

  export type RequestCreateManyUserInput = {
    id?: string
    guestQty: number
    budgetAmount: number
    finalPrice: number
    eventDate: Date | string
    status: $Enums.RequestStatus
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId: string
  }

  export type FavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestQty?: IntFieldUpdateOperationsInput | number
    budgetAmount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutRequestsNestedInput
    items?: RequestItemUpdateManyWithoutRequestNestedInput
    payment?: RequestPaymentUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestQty?: IntFieldUpdateOperationsInput | number
    budgetAmount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: StringFieldUpdateOperationsInput | string
    items?: RequestItemUncheckedUpdateManyWithoutRequestNestedInput
    payment?: RequestPaymentUncheckedUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestQty?: IntFieldUpdateOperationsInput | number
    budgetAmount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateManyProviderInput = {
    id?: string
    name: string
    description: string
    priceMin: number
    priceMax: number
    score: number
    duration?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
  }

  export type RequestCreateManyProviderInput = {
    id?: string
    guestQty: number
    budgetAmount: number
    finalPrice: number
    eventDate: Date | string
    status: $Enums.RequestStatus
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ServiceUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMin?: FloatFieldUpdateOperationsInput | number
    priceMax?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    favorites?: FavoriteUpdateManyWithoutServiceNestedInput
    ubigeoServices?: UbigeoServiceUpdateManyWithoutServiceNestedInput
    images?: ServiceImageUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMin?: FloatFieldUpdateOperationsInput | number
    priceMax?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteUncheckedUpdateManyWithoutServiceNestedInput
    ubigeoServices?: UbigeoServiceUncheckedUpdateManyWithoutServiceNestedInput
    images?: ServiceImageUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMin?: FloatFieldUpdateOperationsInput | number
    priceMax?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestQty?: IntFieldUpdateOperationsInput | number
    budgetAmount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    items?: RequestItemUpdateManyWithoutRequestNestedInput
    payment?: RequestPaymentUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestQty?: IntFieldUpdateOperationsInput | number
    budgetAmount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    items?: RequestItemUncheckedUpdateManyWithoutRequestNestedInput
    payment?: RequestPaymentUncheckedUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestQty?: IntFieldUpdateOperationsInput | number
    budgetAmount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateManyCategoryInput = {
    id?: string
    name: string
    description: string
    priceMin: number
    priceMax: number
    score: number
    duration?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId: string
  }

  export type ServiceUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMin?: FloatFieldUpdateOperationsInput | number
    priceMax?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutServicesNestedInput
    favorites?: FavoriteUpdateManyWithoutServiceNestedInput
    ubigeoServices?: UbigeoServiceUpdateManyWithoutServiceNestedInput
    images?: ServiceImageUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMin?: FloatFieldUpdateOperationsInput | number
    priceMax?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteUncheckedUpdateManyWithoutServiceNestedInput
    ubigeoServices?: UbigeoServiceUncheckedUpdateManyWithoutServiceNestedInput
    images?: ServiceImageUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMin?: FloatFieldUpdateOperationsInput | number
    priceMax?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteCreateManyServiceInput = {
    id?: string
    createdAt?: Date | string
    userId: string
  }

  export type UbigeoServiceCreateManyServiceInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    ubigeoId: string
  }

  export type ServiceImageCreateManyServiceInput = {
    id?: string
    publicId: string
    url: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UbigeoServiceUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    ubigeo?: UbigeoUpdateOneRequiredWithoutUbigeoServicesNestedInput
  }

  export type UbigeoServiceUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    ubigeoId?: StringFieldUpdateOperationsInput | string
  }

  export type UbigeoServiceUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    ubigeoId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceImageUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceImageUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceImageUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestItemCreateManyRequestInput = {
    id?: string
    quantity: number
    price: number
    total: number
    comment: string
    serviceId: string
    service: JsonNullValueInput | InputJsonValue
  }

  export type RequestItemUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: JsonNullValueInput | InputJsonValue
  }

  export type RequestItemUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: JsonNullValueInput | InputJsonValue
  }

  export type RequestItemUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: JsonNullValueInput | InputJsonValue
  }

  export type UbigeoServiceCreateManyUbigeoInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    serviceId: string
  }

  export type UbigeoServiceUpdateWithoutUbigeoInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    service?: ServiceUpdateOneRequiredWithoutUbigeoServicesNestedInput
  }

  export type UbigeoServiceUncheckedUpdateWithoutUbigeoInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type UbigeoServiceUncheckedUpdateManyWithoutUbigeoInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    serviceId?: StringFieldUpdateOperationsInput | string
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