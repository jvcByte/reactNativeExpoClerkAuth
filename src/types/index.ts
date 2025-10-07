// Core application types
export interface AppMetadata {
  name: string;
  description: string;
  url: string;
  icons?: string[];
}

// Thirdweb configuration types
export interface ThirdwebConfig {
  clientId: string;
  chains?: any[]; // Thirdweb chain types
}

// Environment variables type
export interface EnvConfig {
  NEXT_PUBLIC_THIRDWEB_CLIENT_ID: string;
  NODE_ENV: 'development' | 'production' | 'test';
}

// Component prop types
export interface ArticleCardProps {
  title: string;
  href: string;
  description: string;
  className?: string;
}

export interface HeaderProps {
  className?: string;
}

export interface ThirdwebResourcesProps {
  className?: string;
}

// API response types
export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
  success: boolean;
}

// Common utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Wallet connection types
export interface WalletConnection {
  address: string;
  chainId: number;
  isConnected: boolean;
}

// Contract interaction types
export interface ContractCall {
  contractAddress: string;
  method: string;
  params?: any[];
  value?: string;
}

export interface TransactionResult {
  hash: string;
  status: 'pending' | 'confirmed' | 'failed';
  blockNumber?: number;
  gasUsed?: string;
}
