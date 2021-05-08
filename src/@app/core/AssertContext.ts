import { UnauthorizedAccessError } from './UnathorizedAccessError';
import { NotEnoughInformationProvidedError } from '@app/core/NotEnoughInformationProvidedError';

export interface AssertContextProps {
  isAuthenticated?: boolean;
  authLevel?: number;
}

export function AssertContext(context: any, assertion: AssertContextProps) {
  if (
    !!assertion.isAuthenticated &&
    assertion.isAuthenticated != context.isAuthenticated
  ) {
    throw new NotEnoughInformationProvidedError();
  }

  if (!!assertion.authLevel && assertion.authLevel != context.authLevel) {
    throw new UnauthorizedAccessError();
  }
}
