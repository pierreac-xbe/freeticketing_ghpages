# FreeTicketing Usage Guide

This guide will help you set up and use FreeTicketing.

FreeTicketing integrates seamlessly with XBE, allowing you to manage your e-Ticketing process efficiently. This guide will walk you through the setup and usage of FreeTicketing.
The XBE-specific sections are identified as 'Usage with XBE'.

## Download and Installation

::: info
Contact us at [help@x-b-e.com](mailto:help@x-b-e.com) for the download link for your operating system.
:::

After downloading, extract the zip file. You'll find the following directory structure:

```
.
├─ FreeTicketing.exe
├─ config.json
├─ config.local.json
├─ nssm.exe // For Windows only
└─ .env
```

## Setup

### ODBC Setup

Ensure you have the correct ODBC driver installed and configured for your ticket database.

[Learn more about ODBC setup](./setup-odbc.md)

### Configure `config.local.json`

::: info
Usage with XBE: Contact the XBE team at [help@x-b-e.com](mailto:help@x-b-e.com) to obtain your `api_config_url`, `api_logging_url`, and `api_key`.
:::

1. Add the ODBC connection obtained from the previous step to the `database_connection_string` field. It will look something like `DSN=<Your DSN Name>;`.
2. Update the `database_pagination_type` to the appropriate value.

Usage with XBE: Example `config.local.json`:

Fill in the `api_config_url`, `api_logging_url`, and `api_key` fields with the values provided by the XBE team.

```json
{
  "database_connection_string": "DSN=FreeTicketing;",
  "database_pagination_type": "MSSQL",
  "api_config_url": "value-goes-here",
  "api_logging_url": "value-goes-here",
  "api_key": "value-goes-here"
}
```

Usage without XBE: Example `config.local.json`:

```json
{
  "database_connection_string": "DSN=FreeTicketing;",
  "database_pagination_type": "MSSQL",
  "local_only": true
}
```

Update the `local_only` field to `true`.

For more information, see the [full local config reference](../reference/local-config.md).

## Running the Application

For a full command line reference, see [here](../reference/cli.md).

### Usage with XBE

#### Populate Configuration

Run the following command to fetch the latest configuration, query and templates from XBE:

```bash
FreeTicketing.exe --update-config
```

### Usage without XBE

#### Setup Jinja Templates

1. Setup Jinja templates to format the tickets as required.
2. Follow this [guide](../reference/templates.md) to set up the templates.


### Test the Setup

Send tickets once to test if everything is working correctly:

```bash
FreeTicketing.exe --once
```

### Run as a Service

To run FreeTicketing as a service, follow this [guide](./running-as-service.md).
