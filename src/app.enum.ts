export enum RequestResponseMessage {
    Success = 'Success',
    Error = 'Error',
    Warning = 'Warning',
    Forbidden = 'Forbidden',
    NotFound = 'Not Found',
    Unauthorized = 'You are not authorized to access this resource',
    BadRequest = 'Bad Request',
    InternalServerError = 'Internal Server Error',
    NotImplemented = 'Not Implemented',
    BadGateway = 'Bad Gateway',
    ServiceUnavailable = 'Service Unavailable',
    GatewayTimeout = 'Gateway Timeout',
}