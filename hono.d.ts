import 'hono';

declare module 'hono' {
    interface ContextVariableMap {
        title?: string;
    }
} 