# Configuration

The `config.json` file is stored in the same directory as the application executable and contains all configuration related to sending tickets to the desired destination.

## Schema

::: details Full JSON schema
```json
{
  "$schema": "https://json-schema.org/draft/2019-09/schema",
  "type": "object",
  "title": "FreeTicketing Configuration",
  "properties": {
    "importer_data_source_type": {
      "type": "string"
    },
    "ticket_identifier_field": {
      "type": "string"
    },
    "latest_tickets_queries": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ticket_query"
      }
    },
    "run_interval_minutes": {
      "type": "integer",
      "minimum": 1,
      "default": 3
    },
    "config_fetch_interval_minutes": {
      "type": "integer",
      "minimum": 1,
      "default": 60
    },
    "database_pagination_type": {
      "type": "string"
    },
    "exporters": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/exporter"
      }
    }
  },
  "required": [
    "importer_data_source_type",
    "ticket_identifier_field",
    "database_pagination_type",
    "latest_tickets_queries",
    "exporters"
  ],

  "definitions": {
    "exporter": {
      "type": "object",
      "title": "Exporter Configuration",
      "properties": {
        "name": {
          "type": "string"
        },
        "api_url": {
          "type": "string",
          "format": "uri"
        },
        "ticket_identifier_field": {
          "type": "string"
        },
        "template": {
          "type": "string"
        },
        "batch_size": {
          "type": "integer",
          "minimum": 1,
          "default": 10
        },
        "connect_timeout": {
          "type": "integer",
          "minimum": 0,
          "default": 10
        },
        "read_timeout": {
          "type": "integer",
          "minimum": 0,
          "default": 20
        },
        "max_retries": {
          "type": "integer",
          "minimum": 0,
          "default": 3
        },
        "retry_delay": {
          "type": "integer",
          "minimum": 0,
          "default": 10
        },
        "ticket_export_criteria": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ticket_export_criteria"
          }
        },
        "material_site": {
          "$ref": "#/definitions/material_site"
        },
        "headers": {
          "type": "object"
        },
        "supplier_name": {
          "type": "string"
        }
      },
      "required": ["name", "api_url", "ticket_identifier_field", "ticket_export_criteria"]
    },

    "ticket_query": {
      "type": "object",
      "properties": {
        "file_name": {
          "type": "string"
        },
        "sql": {
          "type": "string"
        }
      },
      "required": ["file_name", "sql"]
    },

    "ticket_export_criteria": {
      "type": "object",
      "properties": {
        "match_field": {
          "type": "string"
        },
        "match_values": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "match_pattern": {
          "type": ["string", "null"]
        },
        "contract_number": {
          "type": "string"
        },
        "dot_code": {
          "type": "string"
        }
      },
      "required": ["match_field", "match_values"]
    },

    "material_site": {
      "type": "object",
      "properties": {
        "external_id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "street_address_1": {
          "type": "string"
        },
        "street_address_2": {
          "type": "string"
        },
        "city": {
          "type": "string"
        },
        "state": {
          "type": "string",
          "minLength": 2,
          "maxLength": 2
        },
        "zipcode": {
          "type": "string",
          "pattern": "^\\d{5}$"
        },
        "latitude": {
          "type": "string",
          "pattern": "^-?\\d+(\\.\\d+)?$"
        },
        "longitude": {
          "type": "string",
          "pattern": "^-?\\d+(\\.\\d+)?$"
        },
        "is_portable": {
          "type": "boolean"
        },
        "dayphone": {
          "type": "string",
          "pattern": "^\\d{3}-\\d{3}-\\d{4}$"
        }
      },
      "required": ["external_id", "name"]
    }
  }
}

```
:::

## Example configuration

```json
{
  "importer_data_source_type": "libra",
  "ticket_identifier_field": "TicketID",
  "latest_tickets_queries": [
    {
      "file_name": "latest_tickets_query.sql",
      "sql": "SELECT * FROM tickets WHERE status = 'open' ORDER BY created_at DESC"
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
      "ticket_identifier_field": "TicketID",
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
