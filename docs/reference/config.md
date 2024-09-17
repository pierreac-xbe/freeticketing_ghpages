# Configuration

The `config.json` file is stored in the same directory as the application executable and contains all configuration related to sending tickets to the desired destination.

## Schema
Full JSON schema available [here](/freeticketing_configuration.json).

## Example configuration

```json
{
  "importer_data_source_type": "your_data_source_type",
  "ticket_identifier_field": "your_ticket_identifier_field",
  "latest_tickets_queries": [
    {
      "file_name": "latest_tickets_query.sql",
      "sql": "your_sql_query"
    }
  ],
  "run_interval_minutes": 3,
  "database_pagination_type": "mssql",
  "exporters": [
    {
      "name": "your_destination_name",
      "api_url": "https://api.example.com/v1/tickets",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      },
      "ticket_identifier_field": "your_ticket_identifier_field",
      "supplier_name": "Supplier Name",
      "template": "{{ ticket_data | tojson }}",
      "batch_size": 10,
      "ticket_export_criteria": [
        {
          "match_field": "ProjectNumber",
          "match_values": ["123456", "789012"]
        }
      ],
      "material_site": {
        "external_id": "123456",
        "name": "Material Site Name",
        "street_address_1": "123 Main St"
      }
    }
  ]
}
```

## Configuration Options

### Root Level

#### `importer_data_source_type`

- Type: `string`
- Required: `true`

Specifies the type of data source for importing tickets. Examples include "libra" or "winlc300".

#### `ticket_identifier_field`

- Type: `string`
- Required: `true`

The field used to uniquely identify tickets in the source system. Example: "TicketID".

#### `latest_tickets_queries` 

- Type: `array`
- Required: `true`

An array of objects containing SQL queries to fetch the latest tickets:

- `file_name` (string): The name of the file containing the SQL query.
- `sql` (string): The SQL query to fetch the latest tickets.

When running FreeTicketing with XBE:
- The SQL queries are automatically managed and updated through the XBE API.
- You don't need to manually set up or modify any SQL queries.

When using FreeTicketing without XBE:
- This field is not required.
- You need to manually set up and manage the SQL queries.
- Follow the [guide](./fetch-latest-tickets.md) for detailed instructions.

#### `run_interval_minutes`

- Type: `number`
- Required: `false`
- Default: `3`
- Minimum: `1`

The interval in minutes between each run of the ticket processing.

#### `config_fetch_interval_minutes`

- Type: `number`
- Required: `false`
- Default: `60`
- Minimum: `1`

The interval in minutes between fetching updated configurations. Only used when running FreeTicketing with XBE.

#### `database_pagination_type`

- Type: `string`
- Required: `true`

Specifies the type of pagination used for database queries. Available options:

- `"ads"`: Paginates using `TOP {limit} START AT {offset}` as long as there are results.
- `"mssql"`: Paginates using `TOP ({limit}) OFFSET {offset} ROWS FETCH NEXT {limit} ROWS ONLY` as long as there are results.
- `"msaccess"` or empty string: No pagination support.
- Any other value: Paginates using `LIMIT {limit} OFFSET {offset}` as long as there are results.

### Exporters

An array of exporter configurations, each containing:

#### `name`

- Type: `string`
- Required: `true`

The name of the exporter.

#### `api_url`

- Type: `string`
- Required: `true`
- Format: URI

The full URL of the API endpoint for exporting tickets.

#### `headers`

- Type: `object`
- Required: `false`

Key-value pairs of headers to be sent with the export request.

#### `ticket_identifier_field`

- Type: `string`
- Required: `true`

The field used to identify tickets for this specific exporter.

#### `template`

- Type: `string`
- Required: `false`

Template for formatting the exported ticket data. Supports Jinja2 templating language.

- When using FreeTicketing with XBE: The template is automatically managed and updated through the XBE API.
- When using FreeTicketing without XBE: You need to manually set up the templates. Follow the [Template setup guide](./templates.md) for detailed instructions on creating and managing your templates.

#### `batch_size`

- Type: `number`
- Required: `false`
- Default: `10`
- Minimum: `1`

Number of tickets to send in each batch.

#### `connect_timeout`

- Type: `number`
- Required: `false`
- Default: `10`
- Minimum: `0`

Connection timeout in seconds.

#### `read_timeout`

- Type: `number`
- Required: `false`
- Default: `20`
- Minimum: `0`

Read timeout in seconds.

#### `max_retries`

- Type: `number`
- Required: `false`
- Default: `3`
- Minimum: `0`

Maximum number of retry attempts for failed exports.

#### `retry_delay`

- Type: `number`
- Required: `false`
- Default: `10`
- Minimum: `0`

Delay between retry attempts in seconds.

#### `ticket_export_criteria`

- Type: `array`
- Required: `true`

An array of criteria for filtering tickets to be exported:

- `match_field` (string): The field to match for identifying the project or job.
- `match_values` (array of strings): An array of values to match against the `match_field`.
- `match_pattern` (string, optional): A pattern to match against.
- `contract_number` (string, optional): Contract number/Project number.
- `dot_code` (string, optional): DOT code for the supplier.

#### `material_site`

- Type: `object`
- Required: `false`

Configuration for the material site:

- `external_id` (string, required): External ID of the material site.
- `name` (string, required): Name of the material site.
- `street_address_1` (string): First line of the street address.
- `street_address_2` (string): Second line of the street address.
- `city` (string): City of the material site.
- `state` (string): Two-letter state code.
- `zipcode` (string): Five-digit zip code.
- `latitude` (string): Latitude coordinate.
- `longitude` (string): Longitude coordinate.
- `is_portable` (boolean): Indicates if the site is portable.
- `dayphone` (string): Day phone number in format "XXX-XXX-XXXX".

#### `supplier_name`

- Type: `string`
- Required: `false`

Name of the supplier.
