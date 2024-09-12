# Usage with XBE

FreeTicketing integrates seamlessly with XBE, allowing you to manage your e-Ticketing process efficiently. This guide will walk you through the setup and usage of FreeTicketing.

## Download and Installation

::: info
Contact us at [help@x-b-e.com](mailto:help@x-b-e.com) for the download link for your operating system.
:::

After downloading, extract the zip file. You'll find the following directory structure:

```
.
├─ FreeTicketing.exe
├─ config.json
├─ local_config.json
├─ nssm.exe // For Windows only
└─ .env
```

## Setup

### ODBC Setup

Ensure you have the correct ODBC driver installed and configured for your ticket database.

[Learn more about ODBC setup](./odbc-setup.md)

### Configure `local_config.json`

::: info
Contact the XBE team at [help@x-b-e.com](mailto:help@x-b-e.com) to obtain the correct values for `api_config_url`, `api_logging_url`, and `api_key`.
:::

1. Add the ODBC connection obtained from the previous step to the `database_connection_string` field. It will look something like `DSN=<Your DSN Name>;`.
2. Update the `database_pagination_type` to the appropriate value.
3. Fill in the `api_config_url`, `api_logging_url`, and `api_key` fields with the values provided by the XBE team.

Example `local_config.json`:

```json
{
  "database_connection_string": "DSN=FreeTicketing;",
  "database_pagination_type": "MSSQL",
  "api_config_url": "",
  "api_logging_url": "",
  "api_key": ""
}
```

For a full local config reference, see [here](../reference/local-config.md).

## Running the Application

For a full command line reference, see [here](../reference/cli.md).

### Populate Configuration

Run the following command to fetch the latest configuration, query and templates from XBE:

```bash
FreeTicketing.exe --update-config
```

### Test the Setup

Send tickets once to test if everything is working correctly:

```bash
FreeTicketing.exe --once
```

### Run as a Service

To run FreeTicketing as a service, follow this [guide](./running-as-service.md).
