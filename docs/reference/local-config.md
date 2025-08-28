# Local Configuration

The `config.local.json` file contains settings specific to the local environment where FreeTicketing is installed. This configuration file is stored in the same directory as the application executable and plays a crucial role in customizing the software's behavior for your specific setup.

## Usage

```json
{
  "is_remote_logging_enabled": true,
  "is_remote_config_enabled": true,
  "database_connection_string": "DSN=FreeTicketing;",
  "api_config_url": "",
  "api_logging_url": "",
  "api_key": "",
  "cleanup_interval_minutes": 30,
  "data_retention_days": 5
}
```

## Configuration Fields

### `is_remote_logging_enabled`

- Type: `boolean`
- Required: `true`
- Default: `true`

Determines whether remote logging is enabled. When set to `true`, logs will be sent to the remote logging endpoint specified by `api_logging_url`.

### `is_remote_config_enabled`

- Type: `boolean`
- Required: `true`
- Default: `true`

Determines whether remote configuration is enabled. When set to `true`, the application will fetch configuration, templates, and SQL queries from the remote endpoint specified by `api_config_url`.

### `database_connection_string`

- Type: `string`
- Required: `true`

The connection string / DSN used to connect to the database. For example: "DSN=FreeTicketing;"

### `api_config_url`

- Type: `string`
- Required: `true` (when `is_remote_config_enabled` is `true`)

The URL endpoint for fetching the configuration, templates, and SQL queries from the remote API.

### `api_logging_url`

- Type: `string`
- Required: `true` (when `is_remote_logging_enabled` is `true`)

The URL endpoint for sending logs to the remote API.

### `api_key`

- Type: `string`
- Required: `true` (when either `is_remote_config_enabled` or `is_remote_logging_enabled` is `true`)

The API key used for authentication when making requests to the remote API endpoints.

### `cleanup_interval_minutes`

- Type: `integer`
- Required: `false`
- Default: `30`

How often (in minutes) the application performs cleanup operations like removing expired data and temporary files.

### `data_retention_days`

- Type: `integer`
- Required: `false`
- Default: `30`

How long (in days) to keep logs, temporary files, and cached data before automatic cleanup.

:::info

The `api_config_url`, `api_logging_url`, and `api_key` fields are specifically used when running the application with remote configuration or logging enabled.

:::
