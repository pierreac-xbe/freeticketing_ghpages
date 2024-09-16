# FreeTicketing Usage Guide

This guide will help you set up and use FreeTicketing without XBE.

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

[Learn more about ODBC setup](./odbc-setup.md)

### Setup SQL Query for Fetching Tickets

1. Create a folder named `latest_tickets`.
2. Inside the folder, create a `query.sql` file.
3. Update the `query.sql` file with a query based on your requirements. Generally, it is structured like this:

   ```sql
   SELECT *
   FROM
     SALESTKT
   WHERE
     [TICKET_DATE] >= CURDATE() - 1
   ORDER BY
     [TICKET_DATE] ASC, [TICKET_ID] ASC, [PLANT] ASC
   ```

### Configure `config.local.json`

Update the `config.local.json` file with the necessary configurations:

1. Add the ODBC connection obtained from the previous step to the `database_connection_string` field. It will look something like `DSN=<Your DSN Name>;`.
2. Update the `database_pagination_type` to the appropriate value.
3. Update the `local_only` field to `true`.

```json
{
  "database_connection_string": "DSN=FreeTicketing;",
  "database_pagination_type": "MSSQL",
  "local_only": true
}
```

4. For a full local config reference, see [here](../reference/local-config.md).

### Configure `config.json`

Update the `config.json` file based on your e-Ticketing requirements.

- For a full config reference, see [here](../reference/config.md).

### Setup Jinja Templates

1. Setup Jinja templates to format the tickets as required.
2. Follow this [guide](../reference/templates.md) to set up the templates.

## Running the Application

For a full command line reference, see [here](../reference/cli.md).

### Test the Setup

Send tickets once to test if everything is working correctly:

```bash
FreeTicketing.exe --once
```

### Run as a Service

To run FreeTicketing as a service, follow this [guide](./running-as-service.md).
