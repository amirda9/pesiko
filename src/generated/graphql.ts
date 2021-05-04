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
  order?: Maybe<OrderNode>;
};


export type BasketNodeProductsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};


export type BasketNodeCouponsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
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
  lft: Scalars['Int'];
  rght: Scalars['Int'];
  treeId: Scalars['Int'];
  level: Scalars['Int'];
  children: CategoryNodeConnection;
  postSet: PostNodeConnection;
  trackSet: TrackNodeConnection;
  podcastSet: PodcastNodeConnection;
};


export type CategoryNodeChildrenArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};


export type CategoryNodePostSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type CategoryNodeTrackSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type CategoryNodePodcastSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
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

export type CreateUser = {
  __typename?: 'CreateUser';
  user?: Maybe<UserNode>;
  profile?: Maybe<ProfileNode>;
  token?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};


export type FileNode = Node & {
  __typename?: 'FileNode';
  /** The ID of the object */
  id: Scalars['ID'];
  title: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<ProfileNode>;
  file: Scalars['String'];
  postSet: PostNodeConnection;
  track?: Maybe<TrackNode>;
};


export type FileNodePostSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
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
  /** The ID of the object */
  id: Scalars['ID'];
  title: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<ProfileNode>;
  image: Scalars['String'];
  altText?: Maybe<Scalars['String']>;
  postSet: PostNodeConnection;
  podcastSet: PodcastNodeConnection;
  podcastimageSet: PodcastImageNodeConnection;
};


export type ImageNodePostSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
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
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
  createUser?: Maybe<CreateUser>;
  verifyUser?: Maybe<VerifyUser>;
  requestOtp?: Maybe<RequestOtp>;
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

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars['ID'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
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
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
};


export type OrderNodeSubscriptionSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
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
  /** The ID of the object */
  id: Scalars['ID'];
  title: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<ProfileNode>;
  categories: CategoryNodeConnection;
  isFreemium: Scalars['Boolean'];
  product?: Maybe<ProductNode>;
  images: ImageNodeConnection;
  tracks: TrackNodeConnection;
  isActive: Scalars['Boolean'];
  content: Scalars['String'];
  podcastimageSet: PodcastImageNodeConnection;
  podcasttrackSet: PodcastTrackNodeConnection;
  podcastsubscriptionSet: PodcastSubscriptionNodeConnection;
};


export type PodcastNodeCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};


export type PodcastNodeImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type PodcastNodeTracksArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
};


export type PodcastNodePodcasttrackSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  podcast?: Maybe<Scalars['ID']>;
};


export type PodcastNodePodcastsubscriptionSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
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

export type PodcastTrackNode = Node & {
  __typename?: 'PodcastTrackNode';
  /** The ID of the object */
  id: Scalars['ID'];
  podcast: PodcastNode;
  track: TrackNode;
  order: Scalars['Int'];
};

export type PodcastTrackNodeConnection = {
  __typename?: 'PodcastTrackNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PodcastTrackNodeEdge>>;
};

/** A Relay edge containing a `PodcastTrackNode` and its cursor. */
export type PodcastTrackNodeEdge = {
  __typename?: 'PodcastTrackNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PodcastTrackNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PostNode = Node & {
  __typename?: 'PostNode';
  /** The ID of the object */
  id: Scalars['ID'];
  title: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<ProfileNode>;
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
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};


export type PostNodeImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
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
  /** The ID of the object */
  id: Scalars['ID'];
  title: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<ProfileNode>;
  price: Scalars['Int'];
  inStock: Scalars['Boolean'];
  content: Scalars['String'];
  basketSet: BasketNodeConnection;
  podcastSet: PodcastNodeConnection;
};


export type ProductNodeBasketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['ID']>;
};


export type ProductNodePodcastSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
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

export type ProfileNode = Node & {
  __typename?: 'ProfileNode';
  /** The ID of the object */
  id: Scalars['ID'];
  user: UserNode;
  role: BaseProfileRoleChoices;
  status: Scalars['Boolean'];
  phoneNumber?: Maybe<Scalars['String']>;
  otpSet: OtpNodeConnection;
  categorySet: CategoryNodeConnection;
  imageSet: ImageNodeConnection;
  fileSet: FileNodeConnection;
  postSet: PostNodeConnection;
  productSet: ProductNodeConnection;
  transactionSet: TransactionNodeConnection;
  basketSet: BasketNodeConnection;
  orderSet: OrderNodeConnection;
  trackSet: TrackNodeConnection;
  podcastSet: PodcastNodeConnection;
  subscriptionSet: SubscriptionNodeConnection;
};


export type ProfileNodeOtpSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['ID']>;
};


export type ProfileNodeCategorySetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};


export type ProfileNodeImageSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type ProfileNodePostSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};


export type ProfileNodeTransactionSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['String']>;
  transactionToken?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
};


export type ProfileNodeBasketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['ID']>;
};


export type ProfileNodeOrderSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['ID']>;
  transaction?: Maybe<Scalars['ID']>;
};


export type ProfileNodeTrackSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<Scalars['ID']>;
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
  podcast?: Maybe<PodcastNode>;
  allPodcasts?: Maybe<PodcastNodeConnection>;
  track?: Maybe<TrackNode>;
  allTracks?: Maybe<TrackNodeConnection>;
  podcastImage?: Maybe<PodcastImageNode>;
  allPodcastImages?: Maybe<PodcastImageNodeConnection>;
  podcastTrack?: Maybe<PodcastTrackNode>;
  allPodcastTracks?: Maybe<PodcastTrackNodeConnection>;
  product?: Maybe<ProductNode>;
  allProducts?: Maybe<ProductNodeConnection>;
  transaction?: Maybe<TransactionNode>;
  allTransactions?: Maybe<TransactionNodeConnection>;
  coupon?: Maybe<CouponNode>;
  allCoupons?: Maybe<CouponNodeConnection>;
  basket?: Maybe<BasketNode>;
  allBaskets?: Maybe<BasketNodeConnection>;
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
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
  subscription?: Maybe<Scalars['ID']>;
  podcast?: Maybe<Scalars['ID']>;
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
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
};


export type QueryPodcastTrackArgs = {
  id: Scalars['ID'];
};


export type QueryAllPodcastTracksArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  podcast?: Maybe<Scalars['ID']>;
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
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['String']>;
  transactionToken?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
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
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Float']>;
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

/** An enumeration. */
export enum ShopTransactionStatusChoices {
  /** Waiting For Payment */
  WaitingForPayment = 'WAITING_FOR_PAYMENT',
  /** Paid */
  Paid = 'PAID',
  /** Cancelled */
  Cancelled = 'CANCELLED'
}

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
  id?: Maybe<Scalars['Float']>;
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
  /** The ID of the object */
  id: Scalars['ID'];
  title: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<ProfileNode>;
  isFreemium: Scalars['Boolean'];
  audioFile?: Maybe<FileNode>;
  durationSeconds?: Maybe<Scalars['Int']>;
  categories: CategoryNodeConnection;
  isActive: Scalars['Boolean'];
  podcastSet: PodcastNodeConnection;
  podcasttrackSet: PodcastTrackNodeConnection;
};


export type TrackNodeCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};


export type TrackNodePodcastSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type TrackNodePodcasttrackSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  podcast?: Maybe<Scalars['ID']>;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TransactionNodeConnection = {
  __typename?: 'TransactionNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TransactionNodeEdge>>;
};

export type TrackNodeConnection = {
  __typename?: 'TrackNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TrackNodeEdge>>;
};

export type TransactionNode = Node & {
  __typename?: 'TransactionNode';
  /** The ID of the object */
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  amount: Scalars['Int'];
  status: ShopTransactionStatusChoices;
  transactionId?: Maybe<Scalars['String']>;
  transactionToken?: Maybe<Scalars['String']>;
  profile?: Maybe<ProfileNode>;
  order?: Maybe<OrderNode>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
};

/** A Relay edge containing a `TrackNode` and its cursor. */
export type TrackNodeEdge = {
  __typename?: 'TrackNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TrackNode>;
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
};

export type VerifyUser = {
  __typename?: 'VerifyUser';
  status?: Maybe<Scalars['String']>;
};

/** A Relay edge containing a `TransactionNode` and its cursor. */
export type TransactionNodeEdge = {
  __typename?: 'TransactionNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TransactionNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { tokenAuth?: Maybe<(
    { __typename?: 'ObtainJSONWebToken' }
    & Pick<ObtainJsonWebToken, 'token' | 'payload'>
  )> }
);

export type TracksQueryVariables = Exact<{
  ID: Scalars['ID'];
}>;


export type TracksQuery = (
  { __typename?: 'Query' }
  & { podcast?: Maybe<(
    { __typename?: 'PodcastNode' }
    & Pick<PodcastNode, 'title'>
    & { images: (
      { __typename?: 'ImageNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'ImageNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'ImageNode' }
          & Pick<ImageNode, 'image'>
        )> }
      )>> }
    ), tracks: (
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

export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
    payload
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
export const TracksDocument = gql`
    query tracks($ID: ID!) {
  podcast(id: $ID) {
    title
    images {
      edges {
        node {
          image
        }
      }
    }
    tracks {
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