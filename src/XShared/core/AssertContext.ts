import { UnauthorizedAccessError } from "./UnathorizedAccessError";

export interface AssertContextProps {
    isAuthenticated?: boolean;
    authLevel?: number;
}

export function AssertContext(context: any, assertion: AssertContextProps) {
    if ((!!assertion.isAuthenticated) && assertion.isAuthenticated != context.isAuthenticated) {
        throw new UnauthorizedAccessError();
    }

    if ((!!assertion.authLevel) && assertion.authLevel != context.authLevel) {
        throw new UnauthorizedAccessError();
    }
}