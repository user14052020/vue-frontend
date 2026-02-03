export type AccountType = 'LDAP' | 'LOCAL';

export interface AccountLabel {
  text: string;
}

export interface Account {
  id: string;
  type: AccountType;
  login: string;
  password: string | null;
  labels: AccountLabel[];
}

export interface AccountFormValues {
  type: AccountType;
  login: string;
  password: string;
  labelInput: string;
}

export interface AccountValidationErrors {
  labelInput?: string;
  type?: string;
  login?: string;
  password?: string;
}
