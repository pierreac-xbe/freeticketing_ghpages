# Configuration

The `config.json` file contains settings specific to the environment where FreeTicketing is installed. This configuration file is stored in the same directory as the application executable and contains all configuration related to sending tickets to the desired destination.

## Schema

```json
{
  "importer_data_source_type": "string",
  "ticket_identifier_field": "string",
  "run_interval_minutes": "number",
  "config_fetch_interval_minutes": "number",
  "database_pagination_type": "string",
  "exporters": [
    {
      "name": "string",
      "api_url": "string",
      "exporter_headers": {
        "key": "value"
      },
      "ticket_identifier_field": "string",
      "additional_configurations": {
        "ticket_export_criteria": [
          {
            "match_field": "string",
            "match_values": ["string"],
            "match_pattern": "string",
            //...others fields can be added based on the requirement
          }
        ]
      }
    }
  ]
}
```


## Configuration Options

### Root Level

### `importer_data_source_type`

- Type: `string`

Specifies the type of data source for importing tickets. Examples include "libra" or "winlc300".

### `ticket_identifier_field`

- Type: `string`

The field used to uniquely identify tickets in the source system. Example: "TicketID".

### `run_interval_minutes`

- Type: `number`
- Required: `false`
- Default: `3`

The interval in minutes between each run of the ticket processing.

### `config_fetch_interval_minutes`

- Type: `number`
- Required: `false`
- Default: `60`

The interval in minutes between fetching updated configurations.

### `database_pagination_type`

- Type: `string`

Specifies the type of pagination used for database queries. Available options:
- `"ads"`: Paginates using `TOP {limit} START AT {offset}` as long as there are results.
- `"mssql"`: Paginates using `TOP ({limit}) OFFSET {offset} ROWS FETCH NEXT {limit} ROWS ONLY` as long as there are results.
- `"msaccess"` or empty string: No pagination support.
- Any other string: Paginates using `LIMIT {limit} OFFSET {offset}` as long as there are results.

### Exporters

An array of exporter configurations, each containing:

### `name`

- Type: `string`

The name of the exporter. Examples: "xbe".

### `api_url`

- Type: `string`

The full URL of the API endpoint for exporting tickets.

### `exporter_headers`

- Type: `object`

Key-value pairs of headers to be sent with the export request. Example:


  ```json
  {
    "Authorization": "Bearer test"
  }
  ```


### `ticket_identifier_field`

- Type: `string`

The field used to identify tickets for this specific exporter. This should be the converted ticket ID field in the destination system. Example: "slip_number".

### `additional_configurations`

- Type: `object`


Additional exporter-specific configurations:

#### `ticket_export_criteria`

- Type: `array`
- Required: `false`

An array of criteria for filtering tickets to be exported:

- `match_field` (string): The field to match for identifying the project or job.
- `match_values` (array of strings): An array of values to match against the `match_field`.
- `match_pattern` (string): A pattern to match against (can be null).

## Notes

- The structure of `additional_configurations` may vary depending on your exporting needs.
- Ensure that all required fields are filled out correctly for proper functioning of the application.
- The `database_pagination_type` should be set according to the database system being used to ensure efficient querying of large datasets.
