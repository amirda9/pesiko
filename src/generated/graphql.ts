import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};



/** An enumeration. */
export enum BaseProfileRoleChoices {
  /** Customer */
  Customer = 'CUSTOMER',
  /** Manager */
  Manager = 'MANAGER'
}

export type BasketNode = Node & {
  __typename?: 'BasketNode';
  /** The ID of the object */
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  totalAmount: Scalars['Int'];
  products: ProductNodeConnection;
  coupons: CouponNodeConnection;
  profile?: Maybe<ProfileNode>;
  isPaid: Scalars['Boolean'];
  orderSet: OrderNodeConnection;
};


export type BasketNodeProductsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


export type BasketNodeCouponsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


export type BasketNodeOrderSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  transaction?: Maybe<Scalars['ID']>;
};

export type BasketNodeConnection = {
  __typename?: 'BasketNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BasketNodeEdge>>;
};

/** A Relay edge containing a `BasketNode` and its cursor. */
export type BasketNodeEdge = {
  __typename?: 'BasketNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<BasketNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CategoryNode = Node & {
  __typename?: 'CategoryNode';
  /** The ID of the object */
  id: Scalars['ID'];
  title: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<ProfileNode>;
  parent?: Maybe<CategoryNode>;
  image?: Maybe<ImageNode>;
  lft: Scalars['Int'];
  rght: Scalars['Int'];
  treeId: Scalars['Int'];
  level: Scalars['Int'];
  children: CategoryNodeConnection;
  postSet: PostNodeConnection;
  podcastSet: PodcastNodeConnection;
  trackSet: TrackNodeConnection;
  serialSet: SerialNodeConnection;
  episodeSet: EpisodeNodeConnection;
};


export type CategoryNodeChildrenArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


export type CategoryNodePostSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type CategoryNodePodcastSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type CategoryNodeTrackSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type CategoryNodeSerialSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type CategoryNodeEpisodeSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type CategoryNodeConnection = {
  __typename?: 'CategoryNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CategoryNodeEdge>>;
};

/** A Relay edge containing a `CategoryNode` and its cursor. */
export type CategoryNodeEdge = {
  __typename?: 'CategoryNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CategoryNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CouponNode = Node & {
  __typename?: 'CouponNode';
  /** The ID of the object */
  id: Scalars['ID'];
  title: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  amount: Scalars['Int'];
  basketSet: BasketNodeConnection;
};


export type CouponNodeBasketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
};

export type CouponNodeConnection = {
  __typename?: 'CouponNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CouponNodeEdge>>;
};

/** A Relay edge containing a `CouponNode` and its cursor. */
export type CouponNodeEdge = {
  __typename?: 'CouponNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CouponNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CouponToBasketMutation = {
  __typename?: 'CouponToBasketMutation';
  status?: Maybe<Scalars['Boolean']>;
  coupon?: Maybe<CouponNode>;
  basket?: Maybe<BasketNode>;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  user?: Maybe<UserNode>;
  profile?: Maybe<ProfileNode>;
  token?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};


export type EpisodeNode = Node & {
  __typename?: 'EpisodeNode';
  title: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<ProfileNode>;
  /** The ID of the object */
  id: Scalars['ID'];
  isFreemium: Scalars['Boolean'];
  videoFile?: Maybe<FileNode>;
  durationSeconds?: Maybe<Scalars['Int']>;
  categories: CategoryNodeConnection;
  isActive: Scalars['Boolean'];
  serial?: Maybe<SerialNode>;
  order: Scalars['Int'];
  hasAccess?: Maybe<Scalars['Boolean']>;
};


export type EpisodeNodeCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type EpisodeNodeConnection = {
  __typename?: 'EpisodeNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<EpisodeNodeEdge>>;
};

/** A Relay edge containing a `EpisodeNode` and its cursor. */
export type EpisodeNodeEdge = {
  __typename?: 'EpisodeNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<EpisodeNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String'];
  messages: Array<Scalars['String']>;
};

export type FileNode = Node & {
  __typename?: 'FileNode';
  title: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<ProfileNode>;
  /** The ID of the object */
  id: Scalars['ID'];
  file: Scalars['String'];
  postSet: PostNodeConnection;
  track?: Maybe<TrackNode>;
  episode?: Maybe<EpisodeNode>;
};


export type FileNodePostSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type FileNodeConnection = {
  __typename?: 'FileNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FileNodeEdge>>;
};

/** A Relay edge containing a `FileNode` and its cursor. */
export type FileNodeEdge = {
  __typename?: 'FileNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<FileNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};


export type ImageNode = Node & {
  __typename?: 'ImageNode';
  title: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<ProfileNode>;
  /** The ID of the object */
  id: Scalars['ID'];
  image: Scalars['String'];
  altText?: Maybe<Scalars['String']>;
  categorySet: CategoryNodeConnection;
  postSet: PostNodeConnection;
  podcastSet: PodcastNodeConnection;
  podcastimageSet: PodcastImageNodeConnection;
  serialSet: SerialNodeConnection;
  serialimageSet: SerialImageNodeConnection;
};


export type ImageNodeCategorySetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


export type ImageNodePostSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ImageNodePodcastSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ImageNodePodcastimageSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
};


export type ImageNodeSerialSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ImageNodeSerialimageSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
};

export type ImageNodeConnection = {
  __typename?: 'ImageNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ImageNodeEdge>>;
};

/** A Relay edge containing a `ImageNode` and its cursor. */
export type ImageNodeEdge = {
  __typename?: 'ImageNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ImageNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  pay?: Maybe<TransactionMutation>;
  verifyPayment?: Maybe<VerifyTransactionMutation>;
  productToBasket?: Maybe<ProductToBasketMutation>;
  couponToBasket?: Maybe<CouponToBasketMutation>;
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
  createUser?: Maybe<CreateUser>;
  verifyUser?: Maybe<VerifyUser>;
  requestOtp?: Maybe<RequestOtp>;
  profileEdit?: Maybe<ProfileMutationPayload>;
};


export type MutationVerifyPaymentArgs = {
  status: Scalars['String'];
  token: Scalars['String'];
};


export type MutationProductToBasketArgs = {
  action: Scalars['String'];
  productId: Scalars['ID'];
};


export type MutationCouponToBasketArgs = {
  action: Scalars['String'];
  couponTitle: Scalars['String'];
};


export type MutationTokenAuthArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationRefreshTokenArgs = {
  refreshToken?: Maybe<Scalars['String']>;
};


export type MutationCreateUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationVerifyUserArgs = {
  otpMessage: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRequestOtpArgs = {
  username: Scalars['String'];
};


export type MutationProfileEditArgs = {
  input: ProfileMutationInput;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars['ID'];
};

export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  user?: Maybe<UserNode>;
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type OrderNode = Node & {
  __typename?: 'OrderNode';
  /** The ID of the object */
  id: Scalars['ID'];
  basket?: Maybe<BasketNode>;
  transaction?: Maybe<TransactionNode>;
  profile?: Maybe<ProfileNode>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ordernoteSet: OrderNoteNodeConnection;
  subscriptionSet: SubscriptionNodeConnection;
};


export type OrderNodeOrdernoteSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  order?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
};


export type OrderNodeSubscriptionSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<Scalars['ID']>;
};

export type OrderNodeConnection = {
  __typename?: 'OrderNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrderNodeEdge>>;
};

/** A Relay edge containing a `OrderNode` and its cursor. */
export type OrderNodeEdge = {
  __typename?: 'OrderNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<OrderNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type OrderNoteNode = Node & {
  __typename?: 'OrderNoteNode';
  /** The ID of the object */
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  message?: Maybe<Scalars['String']>;
  order: OrderNode;
};

export type OrderNoteNodeConnection = {
  __typename?: 'OrderNoteNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrderNoteNodeEdge>>;
};

/** A Relay edge containing a `OrderNoteNode` and its cursor. */
export type OrderNoteNodeEdge = {
  __typename?: 'OrderNoteNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<OrderNoteNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type OtpNode = Node & {
  __typename?: 'OtpNode';
  /** The ID of the object */
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  isValid: Scalars['Boolean'];
  profile?: Maybe<ProfileNode>;
};

export type OtpNodeConnection = {
  __typename?: 'OtpNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OtpNodeEdge>>;
};

/** A Relay edge containing a `OtpNode` and its cursor. */
export type OtpNodeEdge = {
  __typename?: 'OtpNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<OtpNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type PodcastImageNode = Node & {
  __typename?: 'PodcastImageNode';
  /** The ID of the object */
  id: Scalars['ID'];
  podcast: PodcastNode;
  image: ImageNode;
  isFeatured: Scalars['Boolean'];
  order: Scalars['Int'];
};

export type PodcastImageNodeConnection = {
  __typename?: 'PodcastImageNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PodcastImageNodeEdge>>;
};

/** A Relay edge containing a `PodcastImageNode` and its cursor. */
export type PodcastImageNodeEdge = {
  __typename?: 'PodcastImageNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PodcastImageNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PodcastNode = Node & {
  __typename?: 'PodcastNode';
  title: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<ProfileNode>;
  /** The ID of the object */
  id: Scalars['ID'];
  categories: CategoryNodeConnection;
  isFreemium: Scalars['Boolean'];
  product?: Maybe<ProductNode>;
  images: ImageNodeConnection;
  isActive: Scalars['Boolean'];
  content: Scalars['String'];
  subscribers: ProfileNodeConnection;
  trackSet: TrackNodeConnection;
  podcastimageSet: PodcastImageNodeConnection;
  podcastsubscriptionSet: PodcastSubscriptionNodeConnection;
  hasBought?: Maybe<Scalars['Boolean']>;
};


export type PodcastNodeCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


export type PodcastNodeImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type PodcastNodeSubscribersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  phoneNumber?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ID']>;
};


export type PodcastNodeTrackSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type PodcastNodePodcastimageSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
};


export type PodcastNodePodcastsubscriptionSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  subscription?: Maybe<Scalars['ID']>;
  podcast?: Maybe<Scalars['ID']>;
};

export type PodcastNodeConnection = {
  __typename?: 'PodcastNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PodcastNodeEdge>>;
};

/** A Relay edge containing a `PodcastNode` and its cursor. */
export type PodcastNodeEdge = {
  __typename?: 'PodcastNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PodcastNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PodcastSubscriptionNode = Node & {
  __typename?: 'PodcastSubscriptionNode';
  /** The ID of the object */
  id: Scalars['ID'];
  subscription: SubscriptionNode;
  podcast: PodcastNode;
};

export type PodcastSubscriptionNodeConnection = {
  __typename?: 'PodcastSubscriptionNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PodcastSubscriptionNodeEdge>>;
};

/** A Relay edge containing a `PodcastSubscriptionNode` and its cursor. */
export type PodcastSubscriptionNodeEdge = {
  __typename?: 'PodcastSubscriptionNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PodcastSubscriptionNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PostNode = Node & {
  __typename?: 'PostNode';
  title: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<ProfileNode>;
  /** The ID of the object */
  id: Scalars['ID'];
  categories: CategoryNodeConnection;
  images: ImageNodeConnection;
  Files: FileNodeConnection;
  content: Scalars['String'];
};


export type PostNodeCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


export type PostNodeImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type PostNodeFilesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type PostNodeConnection = {
  __typename?: 'PostNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PostNodeEdge>>;
};

/** A Relay edge containing a `PostNode` and its cursor. */
export type PostNodeEdge = {
  __typename?: 'PostNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PostNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ProductNode = Node & {
  __typename?: 'ProductNode';
  title: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<ProfileNode>;
  /** The ID of the object */
  id: Scalars['ID'];
  price: Scalars['Int'];
  inStock: Scalars['Boolean'];
  content: Scalars['String'];
  basketSet: BasketNodeConnection;
  podcast?: Maybe<PodcastNode>;
  serial?: Maybe<SerialNode>;
};


export type ProductNodeBasketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
};

export type ProductNodeConnection = {
  __typename?: 'ProductNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductNodeEdge>>;
};

/** A Relay edge containing a `ProductNode` and its cursor. */
export type ProductNodeEdge = {
  __typename?: 'ProductNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ProductNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ProductToBasketMutation = {
  __typename?: 'ProductToBasketMutation';
  status?: Maybe<Scalars['Boolean']>;
  product?: Maybe<ProductNode>;
  basket?: Maybe<BasketNode>;
};

export type ProfileNode = Node & {
  __typename?: 'ProfileNode';
  /** The ID of the object */
  id: Scalars['ID'];
  user: UserNode;
  role: BaseProfileRoleChoices;
  status: Scalars['Boolean'];
  phoneNumber?: Maybe<Scalars['String']>;
  otpSet: OtpNodeConnection;
  imageSet: ImageNodeConnection;
  fileSet: FileNodeConnection;
  categorySet: CategoryNodeConnection;
  postSet: PostNodeConnection;
  productSet: ProductNodeConnection;
  basketSet: BasketNodeConnection;
  orderSet: OrderNodeConnection;
  subscribers: PodcastNodeConnection;
  podcastSet: PodcastNodeConnection;
  trackSet: TrackNodeConnection;
  subscriptionSet: SubscriptionNodeConnection;
  serialSubscribers: SerialNodeConnection;
  serialSet: SerialNodeConnection;
  episodeSet: EpisodeNodeConnection;
};


export type ProfileNodeOtpSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
};


export type ProfileNodeImageSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type ProfileNodeFileSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type ProfileNodeCategorySetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


export type ProfileNodePostSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ProfileNodeProductSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


export type ProfileNodeBasketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
};


export type ProfileNodeOrderSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  transaction?: Maybe<Scalars['ID']>;
};


export type ProfileNodeSubscribersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ProfileNodePodcastSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ProfileNodeTrackSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ProfileNodeSubscriptionSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<Scalars['ID']>;
};


export type ProfileNodeSerialSubscribersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ProfileNodeSerialSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ProfileNodeEpisodeSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ProfileNodeConnection = {
  __typename?: 'ProfileNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProfileNodeEdge>>;
};

/** A Relay edge containing a `ProfileNode` and its cursor. */
export type ProfileNodeEdge = {
  __typename?: 'ProfileNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ProfileNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  subscription?: Maybe<SubscriptionNode>;
  allSubscriptions?: Maybe<SubscriptionNodeConnection>;
  podcastSubscription?: Maybe<PodcastSubscriptionNode>;
  allPodcastSubscriptions?: Maybe<PodcastSubscriptionNodeConnection>;
  serial?: Maybe<SerialNode>;
  allSerials?: Maybe<SerialNodeConnection>;
  episode?: Maybe<EpisodeNode>;
  allEpisodes?: Maybe<EpisodeNodeConnection>;
  serialImage?: Maybe<SerialImageNode>;
  allSerialImages?: Maybe<SerialImageNodeConnection>;
  podcast?: Maybe<PodcastNode>;
  allPodcasts?: Maybe<PodcastNodeConnection>;
  track?: Maybe<TrackNode>;
  allTracks?: Maybe<TrackNodeConnection>;
  podcastImage?: Maybe<PodcastImageNode>;
  allPodcastImages?: Maybe<PodcastImageNodeConnection>;
  product?: Maybe<ProductNode>;
  allProducts?: Maybe<ProductNodeConnection>;
  transaction?: Maybe<TransactionNode>;
  allTransactions?: Maybe<TransactionNodeConnection>;
  coupon?: Maybe<CouponNode>;
  allCoupons?: Maybe<CouponNodeConnection>;
  basket?: Maybe<BasketNode>;
  allBaskets?: Maybe<BasketNodeConnection>;
  currentBasket?: Maybe<BasketNode>;
  order?: Maybe<OrderNode>;
  allOrders?: Maybe<OrderNodeConnection>;
  orderNote?: Maybe<OrderNoteNode>;
  allOrderNotes?: Maybe<OrderNoteNodeConnection>;
  user?: Maybe<UserNode>;
  allUsers?: Maybe<UserNodeConnection>;
  profile?: Maybe<ProfileNode>;
  allProfiles?: Maybe<ProfileNodeConnection>;
  otp?: Maybe<OtpNode>;
  allOtps?: Maybe<OtpNodeConnection>;
  category?: Maybe<CategoryNode>;
  allCategories?: Maybe<CategoryNodeConnection>;
  image?: Maybe<ImageNode>;
  allImages?: Maybe<ImageNodeConnection>;
  file?: Maybe<FileNode>;
  allFiles?: Maybe<FileNodeConnection>;
  post?: Maybe<PostNode>;
  allPosts?: Maybe<PostNodeConnection>;
};


export type QuerySubscriptionArgs = {
  id: Scalars['ID'];
};


export type QueryAllSubscriptionsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<Scalars['ID']>;
};


export type QueryPodcastSubscriptionArgs = {
  id: Scalars['ID'];
};


export type QueryAllPodcastSubscriptionsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  subscription?: Maybe<Scalars['ID']>;
  podcast?: Maybe<Scalars['ID']>;
};


export type QuerySerialArgs = {
  id: Scalars['ID'];
};


export type QueryAllSerialsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};


export type QueryAllEpisodesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QuerySerialImageArgs = {
  id: Scalars['ID'];
};


export type QueryAllSerialImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
};


export type QueryPodcastArgs = {
  id: Scalars['ID'];
};


export type QueryAllPodcastsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryTrackArgs = {
  id: Scalars['ID'];
};


export type QueryAllTracksArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryPodcastImageArgs = {
  id: Scalars['ID'];
};


export type QueryAllPodcastImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryAllProductsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


export type QueryTransactionArgs = {
  id: Scalars['ID'];
};


export type QueryAllTransactionsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};


export type QueryCouponArgs = {
  id: Scalars['ID'];
};


export type QueryAllCouponsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


export type QueryBasketArgs = {
  id: Scalars['ID'];
};


export type QueryAllBasketsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryAllOrdersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  transaction?: Maybe<Scalars['ID']>;
};


export type QueryOrderNoteArgs = {
  id: Scalars['ID'];
};


export type QueryAllOrderNotesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  order?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryAllUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};


export type QueryAllProfilesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  phoneNumber?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ID']>;
};


export type QueryOtpArgs = {
  id: Scalars['ID'];
};


export type QueryAllOtpsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryAllCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


export type QueryImageArgs = {
  id: Scalars['ID'];
};


export type QueryAllImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryFileArgs = {
  id: Scalars['ID'];
};


export type QueryAllFilesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryAllPostsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type RequestOtp = {
  __typename?: 'RequestOTP';
  status?: Maybe<Scalars['String']>;
};

export type SerialImageNode = Node & {
  __typename?: 'SerialImageNode';
  /** The ID of the object */
  id: Scalars['ID'];
  serial: SerialNode;
  image: ImageNode;
  isFeatured: Scalars['Boolean'];
  order: Scalars['Int'];
};

export type SerialImageNodeConnection = {
  __typename?: 'SerialImageNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SerialImageNodeEdge>>;
};

/** A Relay edge containing a `SerialImageNode` and its cursor. */
export type SerialImageNodeEdge = {
  __typename?: 'SerialImageNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<SerialImageNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type SerialNode = Node & {
  __typename?: 'SerialNode';
  title: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<ProfileNode>;
  /** The ID of the object */
  id: Scalars['ID'];
  categories: CategoryNodeConnection;
  isFreemium: Scalars['Boolean'];
  product?: Maybe<ProductNode>;
  images: ImageNodeConnection;
  isActive: Scalars['Boolean'];
  content: Scalars['String'];
  subscribers: ProfileNodeConnection;
  episodeSet: EpisodeNodeConnection;
  serialimageSet: SerialImageNodeConnection;
  hasBought?: Maybe<Scalars['Boolean']>;
};


export type SerialNodeCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


export type SerialNodeImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type SerialNodeSubscribersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  phoneNumber?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ID']>;
};


export type SerialNodeEpisodeSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type SerialNodeSerialimageSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
};

export type SerialNodeConnection = {
  __typename?: 'SerialNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SerialNodeEdge>>;
};

/** A Relay edge containing a `SerialNode` and its cursor. */
export type SerialNodeEdge = {
  __typename?: 'SerialNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<SerialNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type SubscriptionNode = Node & {
  __typename?: 'SubscriptionNode';
  /** The ID of the object */
  id: Scalars['ID'];
  profile: ProfileNode;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  startsAt: Scalars['DateTime'];
  expiresAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  order?: Maybe<OrderNode>;
  podcastsubscriptionSet: PodcastSubscriptionNodeConnection;
};


export type SubscriptionNodePodcastsubscriptionSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  subscription?: Maybe<Scalars['ID']>;
  podcast?: Maybe<Scalars['ID']>;
};

export type SubscriptionNodeConnection = {
  __typename?: 'SubscriptionNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SubscriptionNodeEdge>>;
};

/** A Relay edge containing a `SubscriptionNode` and its cursor. */
export type SubscriptionNodeEdge = {
  __typename?: 'SubscriptionNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<SubscriptionNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TrackNode = Node & {
  __typename?: 'TrackNode';
  title: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<ProfileNode>;
  /** The ID of the object */
  id: Scalars['ID'];
  isFreemium: Scalars['Boolean'];
  audioFile?: Maybe<FileNode>;
  durationSeconds?: Maybe<Scalars['Int']>;
  categories: CategoryNodeConnection;
  isActive: Scalars['Boolean'];
  podcast?: Maybe<PodcastNode>;
  order: Scalars['Int'];
  hasAccess?: Maybe<Scalars['Boolean']>;
};


export type TrackNodeCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type TrackNodeConnection = {
  __typename?: 'TrackNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TrackNodeEdge>>;
};

/** A Relay edge containing a `TrackNode` and its cursor. */
export type TrackNodeEdge = {
  __typename?: 'TrackNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TrackNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TransactionMutation = {
  __typename?: 'TransactionMutation';
  transaction?: Maybe<TransactionNode>;
};

export type TransactionNode = Node & {
  __typename?: 'TransactionNode';
  /** The ID of the object */
  id: Scalars['ID'];
  account: UserNode;
  created: Scalars['DateTime'];
  modified: Scalars['DateTime'];
  amount: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
  verifiedAt?: Maybe<Scalars['DateTime']>;
  order?: Maybe<OrderNode>;
};

export type TransactionNodeConnection = {
  __typename?: 'TransactionNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TransactionNodeEdge>>;
};

/** A Relay edge containing a `TransactionNode` and its cursor. */
export type TransactionNodeEdge = {
  __typename?: 'TransactionNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TransactionNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  /** The ID of the object */
  id: Scalars['ID'];
  password: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  profile?: Maybe<ProfileNode>;
  transactionSet: TransactionNodeConnection;
};


export type UserNodeTransactionSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type VerifyTransactionMutation = {
  __typename?: 'VerifyTransactionMutation';
  transaction?: Maybe<TransactionNode>;
  status?: Maybe<Scalars['Boolean']>;
};

export type VerifyUser = {
  __typename?: 'VerifyUser';
  status?: Maybe<Scalars['String']>;
};

export type ProfileMutationInput = {
  user: Scalars['ID'];
  role: Scalars['String'];
  status?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ProfileMutationPayload = {
  __typename?: 'profileMutationPayload';
  profile?: Maybe<ProfileNode>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type BasketQueryVariables = Exact<{ [key: string]: never; }>;


export type BasketQuery = (
  { __typename?: 'Query' }
  & { currentBasket?: Maybe<(
    { __typename?: 'BasketNode' }
    & Pick<BasketNode, 'totalAmount' | 'isPaid'>
    & { products: (
      { __typename?: 'ProductNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'ProductNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'ProductNode' }
          & Pick<ProductNode, 'title' | 'id'>
        )> }
      )>> }
    ) }
  )> }
);

export type CouponMutationVariables = Exact<{
  action: Scalars['String'];
  title: Scalars['String'];
}>;


export type CouponMutation = (
  { __typename?: 'Mutation' }
  & { couponToBasket?: Maybe<(
    { __typename?: 'CouponToBasketMutation' }
    & Pick<CouponToBasketMutation, 'status'>
  )> }
);

export type PayMutationVariables = Exact<{ [key: string]: never; }>;


export type PayMutation = (
  { __typename?: 'Mutation' }
  & { pay?: Maybe<(
    { __typename?: 'TransactionMutation' }
    & { transaction?: Maybe<(
      { __typename?: 'TransactionNode' }
      & Pick<TransactionNode, 'token'>
    )> }
  )> }
);

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { allCategories?: Maybe<(
    { __typename?: 'CategoryNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'CategoryNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'CategoryNode' }
        & Pick<CategoryNode, 'id' | 'title'>
        & { podcastSet: (
          { __typename?: 'PodcastNodeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'PodcastNodeEdge' }
            & { node?: Maybe<(
              { __typename?: 'PodcastNode' }
              & Pick<PodcastNode, 'id'>
            )> }
          )>> }
        ) }
      )> }
    )>> }
  )> }
);

export type CategoryQueryVariables = Exact<{
  ID: Scalars['ID'];
}>;


export type CategoryQuery = (
  { __typename?: 'Query' }
  & { category?: Maybe<(
    { __typename?: 'CategoryNode' }
    & Pick<CategoryNode, 'title'>
    & { podcastSet: (
      { __typename?: 'PodcastNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'PodcastNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'PodcastNode' }
          & Pick<PodcastNode, 'title' | 'content' | 'id'>
        )> }
      )>> }
    ) }
  )> }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { tokenAuth?: Maybe<(
    { __typename?: 'ObtainJSONWebToken' }
    & Pick<ObtainJsonWebToken, 'token' | 'payload'>
    & { user?: Maybe<(
      { __typename?: 'UserNode' }
      & { profile?: Maybe<(
        { __typename?: 'ProfileNode' }
        & Pick<ProfileNode, 'id'>
      )> }
    )> }
  )> }
);

export type AddMutationVariables = Exact<{
  action: Scalars['String'];
  ID: Scalars['ID'];
}>;


export type AddMutation = (
  { __typename?: 'Mutation' }
  & { productToBasket?: Maybe<(
    { __typename?: 'ProductToBasketMutation' }
    & Pick<ProductToBasketMutation, 'status'>
  )> }
);

export type TracksQueryVariables = Exact<{
  ID: Scalars['ID'];
}>;


export type TracksQuery = (
  { __typename?: 'Query' }
  & { podcast?: Maybe<(
    { __typename?: 'PodcastNode' }
    & Pick<PodcastNode, 'title' | 'hasBought'>
    & { product?: Maybe<(
      { __typename?: 'ProductNode' }
      & Pick<ProductNode, 'id'>
    )>, images: (
      { __typename?: 'ImageNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'ImageNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'ImageNode' }
          & Pick<ImageNode, 'image'>
        )> }
      )>> }
    ), trackSet: (
      { __typename?: 'TrackNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'TrackNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'TrackNode' }
          & { audioFile?: Maybe<(
            { __typename?: 'FileNode' }
            & Pick<FileNode, 'file'>
          )> }
        )> }
      )>> }
    ) }
  )> }
);

export type PostQueryVariables = Exact<{
  ID: Scalars['ID'];
}>;


export type PostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'PostNode' }
    & Pick<PostNode, 'title' | 'description' | 'content'>
    & { images: (
      { __typename?: 'ImageNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'ImageNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'ImageNode' }
          & Pick<ImageNode, 'image'>
        )> }
      )>> }
    ) }
  )> }
);

export type ProfileQueryVariables = Exact<{
  ID: Scalars['ID'];
}>;


export type ProfileQuery = (
  { __typename?: 'Query' }
  & { profile?: Maybe<(
    { __typename?: 'ProfileNode' }
    & Pick<ProfileNode, 'phoneNumber'>
    & { user: (
      { __typename?: 'UserNode' }
      & { transactionSet: (
        { __typename?: 'TransactionNodeConnection' }
        & { edges: Array<Maybe<(
          { __typename?: 'TransactionNodeEdge' }
          & { node?: Maybe<(
            { __typename?: 'TransactionNode' }
            & Pick<TransactionNode, 'amount' | 'created'>
          )> }
        )>> }
      ) }
    ), podcastSet: (
      { __typename?: 'PodcastNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'PodcastNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'PodcastNode' }
          & Pick<PodcastNode, 'id' | 'title' | 'hasBought'>
        )> }
      )>> }
    ) }
  )> }
);

export type Req_OtpMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type Req_OtpMutation = (
  { __typename?: 'Mutation' }
  & { requestOtp?: Maybe<(
    { __typename?: 'RequestOTP' }
    & Pick<RequestOtp, 'status'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'CreateUser' }
    & Pick<CreateUser, 'token'>
    & { user?: Maybe<(
      { __typename?: 'UserNode' }
      & Pick<UserNode, 'id'>
    )>, profile?: Maybe<(
      { __typename?: 'ProfileNode' }
      & Pick<ProfileNode, 'id'>
    )> }
  )> }
);

export type AllseriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllseriesQuery = (
  { __typename?: 'Query' }
  & { allSerials?: Maybe<(
    { __typename?: 'SerialNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'SerialNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'SerialNode' }
        & Pick<SerialNode, 'title' | 'content' | 'description' | 'id'>
      )> }
    )>> }
  )> }
);

export type PodcastQueryVariables = Exact<{ [key: string]: never; }>;


export type PodcastQuery = (
  { __typename?: 'Query' }
  & { allPodcasts?: Maybe<(
    { __typename?: 'PodcastNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'PodcastNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'PodcastNode' }
        & Pick<PodcastNode, 'title' | 'content' | 'id'>
      )> }
    )>> }
  )> }
);

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { allPosts?: Maybe<(
    { __typename?: 'PostNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'PostNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'PostNode' }
        & Pick<PostNode, 'title' | 'id' | 'description' | 'content'>
        & { images: (
          { __typename?: 'ImageNodeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'ImageNodeEdge' }
            & { node?: Maybe<(
              { __typename?: 'ImageNode' }
              & Pick<ImageNode, 'image'>
            )> }
          )>> }
        ) }
      )> }
    )>> }
  )> }
);

export type Verify_UserMutationVariables = Exact<{
  otp: Scalars['String'];
  username: Scalars['String'];
}>;


export type Verify_UserMutation = (
  { __typename?: 'Mutation' }
  & { verifyUser?: Maybe<(
    { __typename?: 'VerifyUser' }
    & Pick<VerifyUser, 'status'>
  )> }
);

export type EpisodeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type EpisodeQuery = (
  { __typename?: 'Query' }
  & { episode?: Maybe<(
    { __typename?: 'EpisodeNode' }
    & Pick<EpisodeNode, 'title'>
    & { videoFile?: Maybe<(
      { __typename?: 'FileNode' }
      & Pick<FileNode, 'file'>
    )>, serial?: Maybe<(
      { __typename?: 'SerialNode' }
      & Pick<SerialNode, 'title'>
    )> }
  )> }
);

export type SerialQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SerialQuery = (
  { __typename?: 'Query' }
  & { serial?: Maybe<(
    { __typename?: 'SerialNode' }
    & Pick<SerialNode, 'id' | 'title' | 'hasBought'>
    & { product?: Maybe<(
      { __typename?: 'ProductNode' }
      & Pick<ProductNode, 'id'>
    )>, episodeSet: (
      { __typename?: 'EpisodeNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'EpisodeNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'EpisodeNode' }
          & Pick<EpisodeNode, 'title' | 'id'>
        )> }
      )>> }
    ) }
  )> }
);

export const BasketDocument = gql`
    query basket {
  currentBasket {
    totalAmount
    isPaid
    products {
      edges {
        node {
          title
          id
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BasketGQL extends Apollo.Query<BasketQuery, BasketQueryVariables> {
    document = BasketDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CouponDocument = gql`
    mutation coupon($action: String!, $title: String!) {
  couponToBasket(action: $action, couponTitle: $title) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CouponGQL extends Apollo.Mutation<CouponMutation, CouponMutationVariables> {
    document = CouponDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PayDocument = gql`
    mutation pay {
  pay {
    transaction {
      token
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PayGQL extends Apollo.Mutation<PayMutation, PayMutationVariables> {
    document = PayDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CategoriesDocument = gql`
    query categories {
  allCategories {
    edges {
      node {
        id
        title
        podcastSet {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CategoriesGQL extends Apollo.Query<CategoriesQuery, CategoriesQueryVariables> {
    document = CategoriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CategoryDocument = gql`
    query category($ID: ID!) {
  category(id: $ID) {
    title
    podcastSet {
      edges {
        node {
          title
          content
          id
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CategoryGQL extends Apollo.Query<CategoryQuery, CategoryQueryVariables> {
    document = CategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
    payload
    user {
      profile {
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddDocument = gql`
    mutation add($action: String!, $ID: ID!) {
  productToBasket(action: $action, productId: $ID) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddGQL extends Apollo.Mutation<AddMutation, AddMutationVariables> {
    document = AddDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TracksDocument = gql`
    query tracks($ID: ID!) {
  podcast(id: $ID) {
    title
    hasBought
    product {
      id
    }
    images {
      edges {
        node {
          image
        }
      }
    }
    trackSet {
      edges {
        node {
          audioFile {
            file
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TracksGQL extends Apollo.Query<TracksQuery, TracksQueryVariables> {
    document = TracksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PostDocument = gql`
    query post($ID: ID!) {
  post(id: $ID) {
    title
    description
    content
    images {
      edges {
        node {
          image
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostGQL extends Apollo.Query<PostQuery, PostQueryVariables> {
    document = PostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProfileDocument = gql`
    query profile($ID: ID!) {
  profile(id: $ID) {
    phoneNumber
    user {
      transactionSet {
        edges {
          node {
            amount
            created
          }
        }
      }
    }
    podcastSet {
      edges {
        node {
          id
          title
          hasBought
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProfileGQL extends Apollo.Query<ProfileQuery, ProfileQueryVariables> {
    document = ProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Req_OtpDocument = gql`
    mutation req_otp($username: String!) {
  requestOtp(username: $username) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Req_OtpGQL extends Apollo.Mutation<Req_OtpMutation, Req_OtpMutationVariables> {
    document = Req_OtpDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegisterDocument = gql`
    mutation register($username: String!, $password: String!) {
  createUser(username: $username, password: $password) {
    user {
      id
    }
    profile {
      id
    }
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
    document = RegisterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AllseriesDocument = gql`
    query allseries {
  allSerials {
    edges {
      node {
        title
        content
        description
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllseriesGQL extends Apollo.Query<AllseriesQuery, AllseriesQueryVariables> {
    document = AllseriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PodcastDocument = gql`
    query podcast {
  allPodcasts {
    edges {
      node {
        title
        content
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PodcastGQL extends Apollo.Query<PodcastQuery, PodcastQueryVariables> {
    document = PodcastDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PostsDocument = gql`
    query posts {
  allPosts {
    edges {
      node {
        title
        id
        description
        content
        images {
          edges {
            node {
              image
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostsGQL extends Apollo.Query<PostsQuery, PostsQueryVariables> {
    document = PostsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Verify_UserDocument = gql`
    mutation verify_user($otp: String!, $username: String!) {
  verifyUser(otpMessage: $otp, username: $username) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Verify_UserGQL extends Apollo.Mutation<Verify_UserMutation, Verify_UserMutationVariables> {
    document = Verify_UserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EpisodeDocument = gql`
    query episode($id: ID!) {
  episode(id: $id) {
    title
    videoFile {
      file
    }
    serial {
      title
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EpisodeGQL extends Apollo.Query<EpisodeQuery, EpisodeQueryVariables> {
    document = EpisodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SerialDocument = gql`
    query Serial($id: ID!) {
  serial(id: $id) {
    id
    title
    hasBought
    product {
      id
    }
    episodeSet {
      edges {
        node {
          title
          id
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SerialGQL extends Apollo.Query<SerialQuery, SerialQueryVariables> {
    document = SerialDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }