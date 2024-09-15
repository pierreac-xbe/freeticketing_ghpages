# Local Configuration

This configuration contains fields that are specific to the local environment. It is stored in the same directory as the application executable.

## Usage

```json
{
  "local_only": false,
  "database_connection_string": "DSN=FreeTicketing;",
  "api_config_url": "https://api.xbe.com/config",
  "api_logging_url": "https://api.xbe.com/logs",
  "api_key": "1234567890"
}
```

## Configuration Fields

### `local_only`

- Type: `boolean`
- Required: `false`
- Default: `false`

Determines whether the application runs in local-only mode. When set to `true`, XBE API-related configurations `api_config_url`, `api_logging_url`, and `api_key` are not required.


### `database_connection_string`

- Type: `string`
- Required: `true`

The connection string / DSN used to connect to the database. For example: "DSN=FreeTicketing;"

### `api_config_url`

- Type: `string`
- Required: `false` (only when `local_only` is `true`)

The URL endpoint for fetching the configuration, templates, and sql queries from the XBE API.

### `api_logging_url`

- Type: `string`
- Required: `false` (only when `local_only` is `true`)

The URL endpoint for sending logs to the XBE API.

### `api_key`

- Type: `string`
- Required: `false` (only when `local_only` is `true`)

The API key used for authentication when making requests to the XBE API endpoints.


:::info

The 3 fields are specifically used when running the application with XBE.

:::
