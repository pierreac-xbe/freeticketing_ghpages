# Local Configuration
This configuration contains fields that are specific to the local environment. It is stored in the same directory as the application executable.

## Usage
```json
{
  "database_connection_string": "DSN=FreeTicketing;",
  "database_pagination_type": "offset",
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

### `run_interval_minutes`

- Type: `number`
- Required: `false`
- Default: `3`

Specifies the interval in minutes between each run of the main application logic.

### `config_fetch_interval_minutes`

- Type: `number`
- Required: `false`
- Default: `60`

Defines the interval in minutes between fetches of the configuration from the API.

### `database_connection_string`

- Type: `string`
- Required: `true`

The connection string / DSN used to connect to the database. For example: "DSN=FreeTicketing;"

### `database_pagination_type`

- Type: `string`
- Required: `true`

Specifies the type of pagination used for database queries.
Available options:
- `ads`: Paginates using `TOP {limit} START AT {offset}` as long as there are results.
- `mssql`: Paginates using `TOP ({limit}) OFFSET {offset} ROWS FETCH NEXT {limit} ROWS ONLY` as long as there are results.
- `msaccess` or empty string: No pagination support.
- Any other string: Paginates using `LIMIT {limit} OFFSET {offset}` as long as there are results.


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

These 3 fields are specifically used when running the application with XBE.

:::
